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

		// for now only a rename of the default creator possible
		creator : { type : 'string' },

		// true if this tim has a custom from/to JSON converters.
		customJSON : { type : 'boolean' },

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

		// json name of this tim, or base timspec to forward to
		json : { type : [ 'undefined', 'string', './timspec' ] },

		// stuff required in this tim implementation
		requires : { type : [ '../string/set' ] },

		// catalog path
		path : { type : [ 'undefined', '../path/path' ] },

		// true if this a singleton
		// (no attributes or group/list/set/twig, not abstract)
		singleton : { type : 'boolean' },

		// the node.js module that defined this tim.
		module : { type : 'protean' },
	};

	def.alike =
	{
		alikeIgnoringProteans : { ignores : { 'alike' : true, 'module' : true } }
	};
}

const fs = require( 'fs' );

const $ = tim.require( '../ast/shorthand' );

const ast_call = tim.require( '../ast/call' );

const ast_string = tim.require( '../ast/string' );

const ast_var = tim.require( '../ast/var' );

const string_set = tim.require( '../string/set' );

const timspec_attribute = tim.require( './attribute' );

const timspec_attributeGroup = tim.require( './attributeGroup' );

const type_any = tim.require( '../type/any' );

const type_group = tim.require( '../type/group' );

const type_set = tim.require( '../type/set' );

const type_tim = tim.require( '../type/tim' );

const validator = tim.require( './validator' );

/*
| Returns true if obj isn't empty.
*/
const isntEmpty =
	function(
		obj
	)
{
	for( let _ in obj ) return true;

	return false;
};


/*
| Returns the realpath of a basefilename with a relative path.
*/
const getRealpath =
	function(
		base,    // the filename of the base
		relative // the relative path
	)
{
	// first the directory of the base
	base = base.substr( 0, base.lastIndexOf( '/' ) );

	return fs.realpathSync( base + '/' + relative ) + '';
};


/*
| Creates a type_tim, from basename to filename.
*/
const makeRelativeTypeTim =
	function(
		basename,
		filename
	)
{
	const b = basename.split( '/' );
	const f = filename.split( '/' );

	// removes the common part
	while( b[ 0 ] === f[ 0 ] ) { b.shift( ); f.shift( ); }

	// removes the base file
	b.pop( );

	// for each part in base goes one upward
	for( let _ in b ) { f.unshift( '..' ); }

	let last = f[ f.length - 1 ];

	if( last.substr( last.length - 3 ) === '.js' )
	{
		last = last.substr( 0, last.length - 3 );

		f[ f.length - 1 ] = last;
	}

	return type_tim.createFromPath( f );
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
	const imported = timtype.imported;

	// makes sure the leaf is loaded
	if( imported )
	{
		const rd = tim.catalog.getRootDir( imported );

		if( !rd ) throw new Error( );

		const replace = rd.exports.get( timtype.pathStringBase );

		const ts = rd.getByPath( replace );

		if( !ts ) throw new Error( );

		require( ts.filename );

		return rd.getByPath( replace );
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

	validator.check( def );  // FIXME remove

	let creator = def.create ? def.create[ 0 ] : 'create';

	const abstract = !!def.abstract;

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
			const type = type_any.createFromString( jType );

			types = type_set.create( 'set:add', type );

			if( !abstract ) imports = imports.add( type );
		}
		else
		{
			types = type_set.createFromArray( module, jType );

			if( !abstract ) imports = imports.addSet( types );
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

		if( jdv ) defaultValue = $.$expr( jdv ).walk( transformDefaultValue );

		let jsonTypes;

		if( jAttr.json )
		{
			for( let type of types )
			{
				if( type.timtype !== type_tim ) continue;
				if( type.imported ) continue;

				const attrPath = getRealpath( module.filename, type.pathString );
				const jsonType = timspec_timspec.getJsonTypeOf( type, module.filename );

				if( jsonType.indexOf( '/' ) < 0 ) continue;

				const jPath = getRealpath( attrPath, jsonType + '.js' );
				const jType = makeRelativeTypeTim( module.filename, jPath );

				imports = imports.add( jType );

				if( !jsonTypes ) jsonTypes = type_group.create( );

				jsonTypes = jsonTypes.create( 'group:set', type.pathString, jType );
			}
		}

		const attr =
			timspec_attribute.create(
				'adjust', adjust,
				'assign', assign,
				'defaultValue', defaultValue,
				'types', types,
				'json', !!jAttr.json,
				'jsonTypes', jsonTypes,
				'name', name,
				'varRef', $.$var( 'v_' + name )
			);

		attributes = attributes.set( name, attr );
	}

	if( extendSpec )
	{
		const exAttributes = extendSpec.attributes;

		for( let name of exAttributes.sortedKeys )
		{
			if( attributes.get( name ) ) continue;

			const attr = exAttributes.get( name );

			if( !abstract )
			{
				const types = attr.types;

				if( types.timtype === type_set ) imports = imports.addSet( types );
				else imports = imports.add( types );
			}

			attributes = attributes.set( name, attr );
		}
	}


	if( def.global ) global = $.$var( def.global );

	let ggroup, glist, gset, gtwig;

	if( def.group ) ggroup = type_set.createFromArray( module, def.group );
	else if( extendSpec && extendSpec.ggroup ) ggroup = extendSpec.ggroup;

	if( def.list ) glist = type_set.createFromArray( module, def.list );
	else if( extendSpec && extendSpec.glist ) glist = extendSpec.glist;

	if( def.set ) gset = type_set.createFromArray( module, def.set );
	else if( extendSpec && extendSpec.gset ) gset = extendSpec.gset;

	if( def.twig ) gtwig = type_set.createFromArray( module, def.twig );
	else if( extendSpec && extendSpec.gtwig ) gtwig = extendSpec.gtwig;

	if( !abstract )
	{
		if( ggroup ) imports = imports.addSet( ggroup );
		if( glist ) imports = imports.addSet( glist );
		if( gset ) imports = imports.addSet( gset );
		if( gtwig ) imports = imports.addSet( gtwig );
	}

	if( abstract || ggroup || glist || gset || gtwig ) singleton = false;

	// if extending a non-singleton this can't be one either
	if(
		singleton && extendSpec
		&& (
			extendSpec.attributes.size > 0
			|| extendSpec.ggroup
			|| extendSpec.glist
			|| extendSpec.gset
			|| extendSpec.gtwig
		)
	) singleton = false;

	const inheritKeys = Object.keys( def.inherit );

	let inherits;

	if( inheritKeys.length > 0 )
	{
		inherits = string_set.create( 'set:init', new Set( inheritKeys ) );
	}

	const hasLazy =
		!!( extendSpec && extendSpec.hasLazy )
		|| ( !!ggroup )
		|| ( !!glist )
		|| ( !!gset )
		|| ( !!gtwig )
		|| ( !!def.json )
		|| isntEmpty( def.adjust )
		|| isntEmpty( def.lazy )
		|| isntEmpty( def.lazyFuncInt )
		|| isntEmpty( def.lazyFuncStr );

	// isAdjusting when defined here or by a parent
	const isAdjusting = !!( def.adjust.get || ( extendSpec && extendSpec.isAdjusting ) );

	if( singleton && !def.singleton ) throw new Error( 'this is a singleton' );
	if( !singleton && def.singleton ) throw new Error( 'this is not a singleton' );
	if( def.abstract && def.singleton ) throw new Error( 'abstract and singleton are exclusive' );
	if( singleton && def.creator ) throw new Error( 'singletons cannot have creators' );

	if( singleton ) creator = '_create';

	let json = def.json;

	// gets additional imports from json forwarders
	if( json )
	{
		if( json.indexOf( '/' ) >= 0 )
		{
			const type = type_tim.createFromPath( def.json.split( '/' ) );
			json = getTimspec( type, module );
		}
	}

	const timspec =
		timspec_timspec.create(
			'abstract', abstract,
			'alike', def.alike,
			'attributes', attributes,
			'check', !!def.proto._check,
			'creator', creator,
			'customJSON', !!def.lazy.asJSON,
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
			'json', json,
			'module', module,
			'requires', string_set.createFromProtean( requires ),
			'singleton', singleton
		);

	timspec._validate( def );

	return timspec;
};


/*
| Realpath of the tim definer.
*/
def.lazy.filename = function( ) { return this.module.filename; };


/*
| Gets a timspec for a timtype with this timspec as base.
*/
def.proto.getTimspec =
	function(
		timtype
	)
{
	return getTimspec( timtype, this.module );
};


/*
| Gets the JSON type of a timtype with this timspec as base.
| Unlike requesting the whole timspec this doesn't need to fully
| load the tim definition, solving dependency circles.
*/
def.static.getJsonTypeOf =
	function(
		timtype,
		filename
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 2 ) throw new Error( );
/**/
/**/	if( timtype.timtype !== type_tim ) throw new Error( );
/**/
/**/	if( typeof( filename ) !== 'string' ) throw new Error( );
/**/}

	const entry = tim.catalog.getByTimtype( module.filename, timtype );

	// has already been loaded
	if( entry && entry.timtype === timspec_timspec ) return entry.json;

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

	if( !match ) throw new Error( 'no def.json match in "' + filename + '"' );

	return match;
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

	return timspec_timspec.getJsonTypeOf( timtype, this.filename );
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


/*
| Attributes must not be named like these.
*/
def.static._validateAttributeBlacklist =
	Object.freeze( {
		'create' : true,
		'getPath' : true,
		'inherit' : true,
		'setPath' : true
	} );


/*
| Checks if a tim attribute definition looks ok.
*/
def.static._validateAttribute =
	function(
		def,	// the tim definition
		name	// the attribute name
	)
{
	if( timspec_timspec._validateAttributeBlacklist[ name ] )
	{
		throw new Error( 'attribute must not be named "' + name + '"' );
	}
};


/*
| Throws an error if something doesn't seem right
| with the timspec.
|
| This part of the validation is done after the timspec is created.
*/
def.proto._validate =
	function(
		def // the definition
	)
{
	// FIXME

	const attr = def.attributes;

	if( attr )
	{
		for( let name in attr ) timspec_timspec._validateAttribute( def, name );
	}

	if(
		def.proto.asJSON !== undefined
		|| def.static.asJSON !== undefined
		|| def.staticLazy.asJSON !== undefined
		|| def.lazyFuncInt.asJSON !== undefined
		|| def.lazyFuncStr.asJSON !== undefined
	)
	{
		throw new Error( '"asJSON" must be lazy' );
	}

	if(
		def.proto.toJSON !== undefined
		|| def.lazy.toJSON !== undefined
		|| def.static.toJSON !== undefined
		|| def.staticLazy.toJSON !== undefined
		|| def.lazyFuncInt.toJSON !== undefined
		|| def.lazyFuncStr.toJSON !== undefined
	)
	{
		throw new Error( '"toJSON" forbidden, use "asJSON"' );
	}

	if(
		def.proto.createFromJSON !== undefined
		|| def.lazy.createFromJSON !== undefined
		|| def.staticLazy.createFromJSON !== undefined
		|| def.lazyFuncInt.createFromJSON !== undefined
		|| def.lazyFuncStr.createFromJSON !== undefined
	)
	{
		throw new Error( '"createFromJSON" must be static' );
	}

	/*
	if( def.lazy.asJSON && !def.static.createFromJSON )
	{
		throw new Error( 'custom asJSON converter but no createFromJSON' );
	}

	if( !def.lazy.asJSON && def.static.createFromJSON )
	{
		throw new Error( 'createFromJSON converter but no asJSON' );
	}

	if( def.lazy.customAsJSON && !def.json )
	{
		throw new Error( 'custom JSON converter but no json name defined' );
	}
	*/
};


} );
