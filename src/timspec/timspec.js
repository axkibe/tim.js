/*
| Hold specifications of a tim.
*/
'use strict';


tim.define( module, ( def, timspec_timspec ) => {


if( TIM )
{
	def.attributes =
	{
		// true if this tim cannot be instanced itself
		abstract : { type : 'boolean' },

		// list of alike function and what to ignore
		alike : { type : [ 'protean', 'undefined' ] },

		// attributes this tim allows
		attributes : { type : [ './attributeGroup' ] },

		// true if an init checker is to be called
		check : { type : 'boolean' },

		// if set extends this tim
		extend : { type : [ '../type/tim', 'undefined' ] },

		// if set extends this tim
		extendSpec : { type : [ './timspec', 'undefined' ] },

		// if set, actualizes a global variable to the last created tim
		global : { type : [ '../ast/var', 'undefined' ] },

		// if set this tim is a group
		// FIXME find out why 'group' etc. disturbs generator
		ggroup : { type : [ '../type/set', 'undefined' ] },

		// if set this tim is a list
		glist : { type : [ '../type/set', 'undefined' ] },

		// if set this tim is a set
		gset : { type : [ '../type/set', 'undefined' ] },

		// if set this tim is a twig
		gtwig : { type : [ '../type/set', 'undefined' ] },

		// true if this tim has lazy values
		hasLazy: { type : 'boolean' },

		// true if _ranks is a proxy
		hasProxyRanks : { type : 'boolean' },

		// other tims this tim utilizes
		imports : { type : '../type/set' },

		// inherit optimizations
		inherits : { type : [ '../string/set', 'undefined' ] },

		// true if this is a adjusting group/list/set/twig
		isAdjusting : { type : 'boolean' },

		// json name of this tim
		json : { type : [ 'undefined', 'string' ] },

		// stuff required in this tim implementation
		requires : { type : [ '../string/set' ] },

		// catalog path
		path : { type : [ 'undefined', '../path/path' ] },

		// true if this a singleton
		// (no attributes or group/list/set/twig, not abstract)
		singleton : { type : 'boolean' },

		// the node.js module that defined this tim.
		// FIXME make non private
		_module : { type : 'protean' },
	};

	def.alike =
	{
		alikeIgnoringProteans : { ignores : { 'alike' : true, '_module' : true } }
	};
}

const ast_call = require( '../ast/call' );

const ast_string = require( '../ast/string' );

const ast_var = require( '../ast/var' );

const fs = require( 'fs' );

const parser_parser = require( '../parser/parser' );

const shorthand = require( '../ast/shorthand' );

const string_set = require( '../string/set' );

const timspec_attribute = require( './attribute' );

const timspec_attributeGroup = require( './attributeGroup' );

const type_any = require( '../type/any' );

const type_set = require( '../type/set' );

const type_tim = require( '../type/tim' );

const validator = require( './validator' );

const $expr = parser_parser.parseExpr;

const $var = shorthand.$var;


/*
| Returns true if obj isn't empty.
*/
const isntEmpty =
	function(
		obj
	)
{
	for( let _ in obj ) return true; /* jshint ignore:line */

	return false;
};


/*
| Returns the timspec of a timtype.
*/
const getTimspec =
	function(
		timtype,
		module
	)
{
	// makes sure the leaf is loaded
	if( timtype.imported )
	{
		// FIXME placeholder for something more general
		switch( timtype.pathString )
		{
			case 'path.js' :

				require( '../path/path' );

				return tim.catalog.getRootDir( 'tim.js' ).get( 'src' ).get( 'path' ).get( 'path.js' );

			case 'pathList.js' :

				require( '../path/list' );

				return tim.catalog.getRootDir( 'tim.js' ).get( 'src' ).get( 'path' ).get( 'list.js' );

			case 'stringList.js' :

				require( '../string/list' );

				return tim.catalog.getRootDir( 'tim.js' ).get( 'src' ).get( 'string' ).get( 'list.js' );

			case 'timspecTwig.js' :

				require( '../timspec/twig' );

				return tim.catalog.getRootDir( 'tim.js' ).get( 'src' ).get( 'timspec' ).get( 'twig.js' );

			default : throw new Error( );
		}
		// module.require( imported + '/' + timtype.pathString );
	}
	else
	{
		module.require( './' + timtype.pathString );
		return tim.catalog.getByTimtype( module.filename, timtype );
	}
};


/*
| Creates a timspec from the def protean.
*/
def.static.createFromDef =
	function(
		def,       // the created def
		module,    // the module object of the definer
		requires   // the collected requires
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 3 ) throw new Error( );
/**/}

	validator.check( def );

	// in case of attributes, group, list, set or twig
	// it will be turned off again
	let singleton = true;

	let attributes = timspec_attributeGroup.create( );

	let global;

	// foreign timtypes to be imported
	let imports = type_set.create( );

	let extend, extendSpec;

	if( def.extend )
	{
		extend = type_tim.createFromPath( def.extend.split( '/' ) );

		extendSpec = getTimspec( extend, module );
	}

	// walker to transform default value
	// replaces require( 'path' ) with the import variable
	const transformDefaultValue =
		function(
			node
		)
	{
		if( node.timtype !== ast_call ) return node;

		const func = node.func;

		if( func.timtype !== ast_var ) return node;

		if( func.name !== 'require' ) return node;

		if( node.length !== 1 )
		{
			throw new Error( 'require in defaultValue must have one argument' );
		}

		// require path argument
		const rpa = node.get( 0 );

		if( rpa.timtype !== ast_string )
		{
			throw new Error( 'require argument in defaultValue must be string' );
		}

		const type = type_tim.createFromPath( rpa.string.split( '/' ) );

		imports = imports.add( type );

		return type.$varname;
	};

	for( let name in def.attributes || { } )
	{
		singleton = false;

		const jAttr = def.attributes[ name ];

		const jType = jAttr.type;

		// attribute types
		let types;

		if( !Array.isArray( jType ) )
		{
			types = type_any.createFromString( jType );

			imports = imports.add( types );
		}
		else
		{
			types = type_set.createFromArray( module, jType );

			imports = imports.addSet( types );

			// if there is just one type, replaces the set with that type
			types = types.trivial;
		}

		// sees if this is an adjusted attribute
		let adjust = !!def.adjust[ name ];

		// checks if any parent wants to adjust this attribute
		if( !adjust && extendSpec )
		{
			for( let e = extendSpec; e; e = e.extendSpec )
			{
				const ea = e.attributes.get( name );

				if( !ea ) continue;

				if( ea.adjust ) { adjust = true; break; }
			}
		}

		const assign = adjust ? '__' + name : name;

		const jdv = jAttr.defaultValue;

		let defaultValue;

		if( jdv ) defaultValue = $expr( jdv ).walk( transformDefaultValue );

		const attr =
			timspec_attribute.create(
				'adjust', adjust,
				'assign', assign,
				'defaultValue', defaultValue,
				'types', types,
				'json', !!jAttr.json,
				'name', name,
				'varRef', $var( 'v_' + name )
			);

		attributes = attributes.set( name, attr );
	}

	if( def.abstract || def.group || def.list || def.set || def.twig ) singleton = false;

	if( def.global ) global = $var( def.global );

	let ggroup, glist, gset, gtwig;

	if( def.group )
	{
		ggroup = type_set.createFromArray( module, def.group );

		imports = imports.addSet( ggroup );
	}

	if( def.list )
	{
		glist = type_set.createFromArray( module, def.list );

		imports = imports.addSet( glist );
	}

	if( def.set )
	{
		gset = type_set.createFromArray( module, def.set );

		imports = imports.addSet( gset );
	}

	if( def.twig )
	{
		gtwig = type_set.createFromArray( module, def.twig );

		imports = imports.addSet( gtwig );
	}

	const inheritKeys = Object.keys( def.inherit );

	let inherits;

	if( inheritKeys.length > 0 )
	{
		inherits = string_set.create( 'set:init', new Set( inheritKeys ) );
	}

	const hasLazy =
		!!(extendSpec && extendSpec.hasLazy )
		|| ( !!def.group )
		|| ( !!def.list )
		|| ( !!def.set )
		|| ( !!def.twig )
		|| ( !!def.json )
		|| isntEmpty( def.adjust )
		|| isntEmpty( def.lazy )
		|| isntEmpty( def.lazyFuncInt )
		|| isntEmpty( def.lazyFuncStr );

	// isAdjusting when defined here or by a parent
	const isAdjusting = !!( def.adjust.get || ( extendSpec && extendSpec.isAdjusting ) );

	return(
		timspec_timspec.create(
			'abstract', !!def.abstract,
			'alike', def.alike,
			'attributes', attributes,
			'check', !!def.proto._check,
			'extend', extend,
			'extendSpec', extendSpec,
			'ggroup', ggroup,
			'glist', glist,
			'global', global,
			'gset', gset,
			'gtwig', gtwig,
			'hasLazy', hasLazy,
			'hasProxyRanks', !!def.lazy._ranks,
			'imports', imports,
			'inherits', inherits,
			'isAdjusting', isAdjusting,
			'json', def.json,
			'requires', string_set.createFromProtean( requires ),
			'singleton', singleton,
			'_module', module
		)
	);
};


/*
| Realpath of the tim definer.
*/
def.lazy.filename = function( ) { return this._module.filename; };


/*
| Gets a timspec for a timtype with this timspec as base.
*/
def.proto.getTimspec =
	function(
		timtype
	)
{
	return getTimspec( timtype, this._module );
};


/*
| Gets the JSON type of a timtype with this timspec as base.
| Unlike requesting the whole timspec this doesn't need to fully
| load the tim definition, solving dependency circles.
*/
def.proto.getJsonTypeOf =
	function(
		timtype
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 1 ) throw new Error( );
/**/
/**/	if( timtype.timtype !== type_tim ) throw new Error( );
/**/}

	const entry = tim.catalog.getByTimtype( module.filename, timtype );

	// has already been loaded
	if( entry && entry.timtype === timspec_timspec ) return entry.json;

	let filename = this.filename;

	filename = filename.substr( 0, filename.lastIndexOf( '/' ) );

	for( let a = 0, al = timtype.length; a < al; a++ )
	{
		const part = timtype.get( a );

		switch( part )
		{
			case '.' : continue;

			case '..' : filename = filename.substr( 0, filename.lastIndexOf( '/' ) ); continue;

			default : filename = filename + '/' + part + ( a + 1 < al ? '' : '.js' );
		}
	}

	const text = fs.readFileSync( filename ) + '';

	// match lines containing the def.json specification
	const reg = /(?:^|\n)\s*def.json\s*=\s*'(.*)'\s*;\s*(?:$|\n)/g;

	let match;

	for( let ca = reg.exec( text ); ca; ca = reg.exec( text ) )
	{
		if( match ) throw new Error( 'more than one def.json match' );

		match = ca[ 1 ];
	}

	if( !match ) throw new Error( 'no def.json match' );

	return match;
};


/*
| Returns the preamble to be prepended
| to sources for browser mode.
*/
def.proto.getBrowserPreamble =
	function(
		timcode    // true if this is for timcode
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 1 ) throw new Error( );
/**/}

	let text = '';

	text +=
		'( ( ) => { let '
		+ ( timcode ? 'self' : 'module' )
		+ ' = _catalog';

	const path = this.path;

	for( let p = 0, pLen = path.length; p < pLen; p++ )
	{
		const key = path.get( p );

		text +=
			key.indexOf( '.' ) >= 0
			? '[ \'' + key + '\' ]'
			: '.' + key;
	}

	text +=
		'; let require = tim.require = _require.bind( '
		+ ( timcode ? 'self' : 'module' )
		+ ' );';

	return text;
};


} );
