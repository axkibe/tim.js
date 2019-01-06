/*
| Hold specifications of a tim.
*/
'use strict';


tim.define( module, ( def, timspec_timspec ) => {


if( TIM )
{
	def.attributes =
	{
		// attributes this tim allows
		attributes : { type : [ '../attributeGroup' ] },

		// filename of the tim
		filename : { type : 'string' },

		// other tims this tim utilizes
		imports : { type : '../type/set' },

		// json name of this tim
		json : { type : [ 'undefined', 'string' ] },

		// catalog path
		path : { type : [ 'undefined', '../export/path' ] },

		// true if this a singleton (no attributes or group/list/set/twig)
		singleton : { type : 'boolean' },
	};
}

const ast_call = require( '../ast/call' );

const ast_string = require( '../ast/string' );

const ast_var = require( '../ast/var' );

const parser_parser = require( '../parser/parser' );

const shorthand = require( '../ast/shorthand' );

const tim_attribute = require( '../attribute' );

const tim_attributeGroup = require( '../attributeGroup' );

const type_any = require( '../type/any' );

const type_set = require( '../type/set' );

const type_tim = require( '../type/tim' );

const validator = require( '../validator' );

const $expr = parser_parser.parseExpr;

const $var = shorthand.$var;


/*
| Creates a timspec from the def protean.
*/
def.static.createFromDef =
	function(
		def,       // the created def
		module,    // the module object of the definer
		filename   // the filename of the definer // FIXME is this in module
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
	
	let attributes = tim_attributeGroup.create( );

	// foreign timtypes to be imported
	let imports = type_set.create( );

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

		const assign = def.transform[ name ] ? '__' + name : name;

		const jdv = jAttr.defaultValue;

		let defaultValue;

		if( jdv ) defaultValue = $expr( jdv ).walk( transformDefaultValue );

		const attr =
			tim_attribute.create(
				'assign', assign,
				'defaultValue', defaultValue,
				'types', types,
				'json', !!jAttr.json,
				'name', name,
				'transform', !!def.transform[ name ],
				'varRef', $var( 'v_' + name )
			);

		attributes = attributes.set( name, attr );
	}

	return(
		timspec_timspec.create(
			'attributes', attributes,
			'filename', filename,
			'imports', imports,
			'json', def.json,
			'singleton', singleton
		)
	);
};


/*
| Returns the preamble to be prepended
| to sources for browser mode.
*/
def.func.getBrowserPreamble =
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
		'; let require = _require.bind( '
		+ ( timcode ? 'self' : 'module' )
		+ ' );';

	return text;
};


} );
