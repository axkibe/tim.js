/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	jion_attribute;


if( NODE )
{
	jion_attribute = module.exports;
}
else
{
	jion_attribute = { };
}


var
	jion$ast_and,
	jion$ast_arrayLiteral,
	jion$ast_assign,
	jion$ast_boolean,
	jion$ast_call,
	jion$ast_comma,
	jion$ast_condition,
	jion$ast_delete,
	jion$ast_differs,
	jion$ast_dot,
	jion$ast_equals,
	jion$ast_func,
	jion$ast_greaterThan,
	jion$ast_instanceof,
	jion$ast_lessThan,
	jion$ast_member,
	jion$ast_multiply,
	jion$ast_multiplyAssign,
	jion$ast_new,
	jion$ast_not,
	jion$ast_null,
	jion$ast_number,
	jion$ast_objLiteral,
	jion$ast_or,
	jion$ast_plus,
	jion$ast_plusAssign,
	jion$ast_preIncrement,
	jion$ast_string,
	jion$ast_typeof,
	ast_var,
	jion_id,
	jion_idGroup,
	jion_proto;


/*
| Capsule
*/
(
function( ) {
'use strict';


/*
| Node includes.
*/
if( NODE )
{
	jion$ast_and = require( './ast/and' );

	jion$ast_arrayLiteral = require( './ast/arrayLiteral' );

	jion$ast_assign = require( './ast/assign' );

	jion$ast_boolean = require( './ast/boolean' );

	jion$ast_call = require( './ast/call' );

	jion$ast_comma = require( './ast/comma' );

	jion$ast_condition = require( './ast/condition' );

	jion$ast_delete = require( './ast/delete' );

	jion$ast_differs = require( './ast/differs' );

	jion$ast_dot = require( './ast/dot' );

	jion$ast_equals = require( './ast/equals' );

	jion$ast_func = require( './ast/func' );

	jion$ast_greaterThan = require( './ast/greaterThan' );

	jion$ast_instanceof = require( './ast/instanceof' );

	jion$ast_lessThan = require( './ast/lessThan' );

	jion$ast_member = require( './ast/member' );

	jion$ast_multiply = require( './ast/multiply' );

	jion$ast_multiplyAssign = require( './ast/multiplyAssign' );

	jion$ast_new = require( './ast/new' );

	jion$ast_not = require( './ast/not' );

	jion$ast_null = require( './ast/null' );

	jion$ast_number = require( './ast/number' );

	jion$ast_objLiteral = require( './ast/objLiteral' );

	jion$ast_or = require( './ast/or' );

	jion$ast_plus = require( './ast/plus' );

	jion$ast_plusAssign = require( './ast/plusAssign' );

	jion$ast_preIncrement = require( './ast/preIncrement' );

	jion$ast_string = require( './ast/string' );

	jion$ast_typeof = require( './ast/typeof' );

	ast_var = require( './ast/var' );

	jion_id = require( './id' );

	jion_idGroup = require( './idGroup' );

	require( './proto' );
}


/*
| Abstract constructor.
*/
var
	AbstractConstructor;


AbstractConstructor =
	function(
		v_allowsNull, // attribute may be null
		v_allowsUndefined, // attribute may be undefined
		v_assign, // variable name to assign to
		v_comment, // comment
		v_defaultValue, // default value
		v_id, // attribute type id
		v_json, // include in JSON export/import
		v_name, // attribute name
		v_prepare, // attribute preparation code
		v_varRef // attribute variable used in generate
	)
{
	if( v_allowsNull !== undefined )
	{
		this.allowsNull = v_allowsNull;
	}

	if( v_allowsUndefined !== undefined )
	{
		this.allowsUndefined = v_allowsUndefined;
	}

	if( v_assign !== undefined )
	{
		this.assign = v_assign;
	}

	if( v_comment !== undefined )
	{
		this.comment = v_comment;
	}

	if( v_defaultValue !== undefined )
	{
		this.defaultValue = v_defaultValue;
	}

	if( v_id !== undefined )
	{
		this.id = v_id;
	}

	if( v_json !== undefined )
	{
		this.json = v_json;
	}

	if( v_name !== undefined )
	{
		this.name = v_name;
	}

	if( v_prepare !== undefined )
	{
		this.prepare = v_prepare;
	}

	if( v_varRef !== undefined )
	{
		this.varRef = v_varRef;
	}

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Constructor.
*/
var
	Constructor,
	prototype;


Constructor =
	function(
		v_allowsNull, // attribute may be null
		v_allowsUndefined, // attribute may be undefined
		v_assign, // variable name to assign to
		v_comment, // comment
		v_defaultValue, // default value
		v_id, // attribute type id
		v_json, // include in JSON export/import
		v_name, // attribute name
		v_prepare, // attribute preparation code
		v_varRef // attribute variable used in generate
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
	}

	this.allowsNull = v_allowsNull;

	this.allowsUndefined = v_allowsUndefined;

	this.assign = v_assign;

	this.comment = v_comment;

	if( v_defaultValue !== undefined )
	{
		this.defaultValue = v_defaultValue;
	}

	this.id = v_id;

	this.json = v_json;

	this.name = v_name;

	if( v_prepare !== undefined )
	{
		this.prepare = v_prepare;
	}

	this.varRef = v_varRef;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


jion_attribute.prototype = prototype;


/*
| Creates an attribute object.
*/
jion_attribute.abstract =
AbstractConstructor.prototype.abstract =
prototype.abstract =
	function(
		// free strings
	)
{
	var
		a,
		aZ,
		arg,
		inherit,
		v_allowsNull,
		v_allowsUndefined,
		v_assign,
		v_comment,
		v_defaultValue,
		v_id,
		v_json,
		v_name,
		v_prepare,
		v_varRef;

	if( this !== jion_attribute )
	{
		inherit = this;

		v_allowsNull = this.allowsNull;

		v_allowsUndefined = this.allowsUndefined;

		v_assign = this.assign;

		v_comment = this.comment;

		v_defaultValue = this.defaultValue;

		v_id = this.id;

		v_json = this.json;

		v_name = this.name;

		v_prepare = this.prepare;

		v_varRef = this.varRef;
	}

	for(
		a = 0, aZ = arguments.length;
		a < aZ;
		a += 2
	)
	{
		arg = arguments[ a + 1 ];

		switch( arguments[ a ] )
		{
			case 'allowsNull' :

				if( arg !== pass )
				{
					v_allowsNull = arg;
				}

				break;

			case 'allowsUndefined' :

				if( arg !== pass )
				{
					v_allowsUndefined = arg;
				}

				break;

			case 'assign' :

				if( arg !== pass )
				{
					v_assign = arg;
				}

				break;

			case 'comment' :

				if( arg !== pass )
				{
					v_comment = arg;
				}

				break;

			case 'defaultValue' :

				if( arg !== pass )
				{
					v_defaultValue = arg;
				}

				break;

			case 'id' :

				if( arg !== pass )
				{
					v_id = arg;
				}

				break;

			case 'json' :

				if( arg !== pass )
				{
					v_json = arg;
				}

				break;

			case 'name' :

				if( arg !== pass )
				{
					v_name = arg;
				}

				break;

			case 'prepare' :

				if( arg !== pass )
				{
					v_prepare = arg;
				}

				break;

			case 'varRef' :

				if( arg !== pass )
				{
					v_varRef = arg;
				}

				break;

			default :

/**/			if( CHECK )
/**/			{
/**/				throw new Error( );
/**/			}
		}
	}

	if( v_allowsNull === undefined )
	{
		v_allowsNull = false;
	}

	if( v_allowsUndefined === undefined )
	{
		v_allowsUndefined = false;
	}

	if( v_json === undefined )
	{
		v_json = false;
	}

/**/if( CHECK )
/**/{
/**/	if( v_allowsNull === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_allowsNull !== undefined )
/**/	{
/**/		if( typeof( v_allowsNull ) !== 'boolean' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_allowsUndefined === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_allowsUndefined !== undefined )
/**/	{
/**/		if( typeof( v_allowsUndefined ) !== 'boolean' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_assign === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_assign !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_assign ) !== 'string'
/**/			&&
/**/			!( v_assign instanceof String )
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_comment === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_comment !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_comment ) !== 'string'
/**/			&&
/**/			!( v_comment instanceof String )
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_defaultValue === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_defaultValue !== undefined )
/**/	{
/**/		if(
/**/			v_defaultValue.reflect !== 'ast_and'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_assign'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_boolean'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_call'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_comma'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_condition'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_delete'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_differs'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_dot'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_equals'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_func'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_member'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_multiply'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_new'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_not'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_null'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_number'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_or'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_plus'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_string'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_typeof'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_var'
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_id === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_id !== undefined )
/**/	{
/**/		if(
/**/			v_id.reflect !== 'jion_id'
/**/			&&
/**/			v_id.reflect !== 'jion_idGroup'
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_json === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_json !== undefined )
/**/	{
/**/		if( typeof( v_json ) !== 'boolean' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_name === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_name !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_name ) !== 'string'
/**/			&&
/**/			!( v_name instanceof String )
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_prepare === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_prepare !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_prepare ) !== 'string'
/**/			&&
/**/			!( v_prepare instanceof String )
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_varRef === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_varRef !== undefined )
/**/	{
/**/		if( v_varRef.reflect !== 'ast_var' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if(
		inherit
		&&
		v_allowsNull === inherit.allowsNull
		&&
		v_allowsUndefined === inherit.allowsUndefined
		&&
		v_assign === inherit.assign
		&&
		v_comment === inherit.comment
		&&
		(
			v_defaultValue === inherit.defaultValue
			||
			v_defaultValue !== undefined
			&&
			v_defaultValue.equals( inherit.defaultValue )
		)
		&&
		(
			v_id === inherit.id
			||
			v_id !== undefined && v_id.equals( inherit.id )
		)
		&&
		v_json === inherit.json
		&&
		v_name === inherit.name
		&&
		v_prepare === inherit.prepare
		&&
		(
			v_varRef === inherit.varRef
			||
			v_varRef !== undefined && v_varRef.equals( inherit.varRef )
		)
	)
	{
		return inherit;
	}

	return (
		new AbstractConstructor(
			v_allowsNull,
			v_allowsUndefined,
			v_assign,
			v_comment,
			v_defaultValue,
			v_id,
			v_json,
			v_name,
			v_prepare,
			v_varRef
		)
	);
};


/*
| Creates a new attribute object.
*/
jion_attribute.create =
AbstractConstructor.prototype.create =
prototype.create =
	function(
		// free strings
	)
{
	var
		a,
		aZ,
		arg,
		inherit,
		v_allowsNull,
		v_allowsUndefined,
		v_assign,
		v_comment,
		v_defaultValue,
		v_id,
		v_json,
		v_name,
		v_prepare,
		v_varRef;

	if( this !== jion_attribute )
	{
		inherit = this;

		v_allowsNull = this.allowsNull;

		v_allowsUndefined = this.allowsUndefined;

		v_assign = this.assign;

		v_comment = this.comment;

		v_defaultValue = this.defaultValue;

		v_id = this.id;

		v_json = this.json;

		v_name = this.name;

		v_prepare = this.prepare;

		v_varRef = this.varRef;
	}

	for(
		a = 0, aZ = arguments.length;
		a < aZ;
		a += 2
	)
	{
		arg = arguments[ a + 1 ];

		switch( arguments[ a ] )
		{
			case 'allowsNull' :

				if( arg !== pass )
				{
					v_allowsNull = arg;
				}

				break;

			case 'allowsUndefined' :

				if( arg !== pass )
				{
					v_allowsUndefined = arg;
				}

				break;

			case 'assign' :

				if( arg !== pass )
				{
					v_assign = arg;
				}

				break;

			case 'comment' :

				if( arg !== pass )
				{
					v_comment = arg;
				}

				break;

			case 'defaultValue' :

				if( arg !== pass )
				{
					v_defaultValue = arg;
				}

				break;

			case 'id' :

				if( arg !== pass )
				{
					v_id = arg;
				}

				break;

			case 'json' :

				if( arg !== pass )
				{
					v_json = arg;
				}

				break;

			case 'name' :

				if( arg !== pass )
				{
					v_name = arg;
				}

				break;

			case 'prepare' :

				if( arg !== pass )
				{
					v_prepare = arg;
				}

				break;

			case 'varRef' :

				if( arg !== pass )
				{
					v_varRef = arg;
				}

				break;

			default :

/**/			if( CHECK )
/**/			{
/**/				throw new Error( );
/**/			}
		}
	}

	if( v_allowsNull === undefined )
	{
		v_allowsNull = false;
	}

	if( v_allowsUndefined === undefined )
	{
		v_allowsUndefined = false;
	}

	if( v_json === undefined )
	{
		v_json = false;
	}

/**/if( CHECK )
/**/{
/**/	if( v_allowsNull === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_allowsNull === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_allowsNull ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_allowsUndefined === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_allowsUndefined === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_allowsUndefined ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_assign === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_assign === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		typeof( v_assign ) !== 'string'
/**/		&&
/**/		!( v_assign instanceof String )
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_comment === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_comment === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		typeof( v_comment ) !== 'string'
/**/		&&
/**/		!( v_comment instanceof String )
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_defaultValue === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_defaultValue !== undefined )
/**/	{
/**/		if(
/**/			v_defaultValue.reflect !== 'ast_and'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_assign'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_boolean'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_call'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_comma'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_condition'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_delete'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_differs'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_dot'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_equals'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_func'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_member'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_multiply'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_new'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_not'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_null'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_number'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_or'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_plus'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_string'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_typeof'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_var'
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_id === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_id === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_id.reflect !== 'jion_id'
/**/		&&
/**/		v_id.reflect !== 'jion_idGroup'
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_json === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_json === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_json ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_name === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_name === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		typeof( v_name ) !== 'string'
/**/		&&
/**/		!( v_name instanceof String )
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_prepare === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_prepare !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_prepare ) !== 'string'
/**/			&&
/**/			!( v_prepare instanceof String )
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_varRef === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_varRef === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_varRef.reflect !== 'ast_var' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		v_allowsNull === inherit.allowsNull
		&&
		v_allowsUndefined === inherit.allowsUndefined
		&&
		v_assign === inherit.assign
		&&
		v_comment === inherit.comment
		&&
		(
			v_defaultValue === inherit.defaultValue
			||
			v_defaultValue !== undefined
			&&
			v_defaultValue.equals( inherit.defaultValue )
		)
		&&
		(
			v_id === inherit.id
			||
			v_id.equals && v_id.equals( inherit.id )
		)
		&&
		v_json === inherit.json
		&&
		v_name === inherit.name
		&&
		v_prepare === inherit.prepare
		&&
		(
			v_varRef === inherit.varRef
			||
			v_varRef.equals && v_varRef.equals( inherit.varRef )
		)
	)
	{
		return inherit;
	}

	return (
		new Constructor(
			v_allowsNull,
			v_allowsUndefined,
			v_assign,
			v_comment,
			v_defaultValue,
			v_id,
			v_json,
			v_name,
			v_prepare,
			v_varRef
		)
	);
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'jion_attribute:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'attribute:abstract';


/*
| Reflection.
*/
prototype.reflect = 'jion_attribute';


/*
| Name Reflection.
*/
prototype.reflectName = 'attribute';


/*
| Sets values by path.
*/
prototype.setPath = jion_proto.setPath;


/*
| Gets values by path
*/
prototype.getPath = jion_proto.getPath;


/*
| Tests equality of object.
*/
prototype.equals =
	function(
		obj // object to compare to
	)
{
	if( this === obj )
	{
		return true;
	}

	if( !obj )
	{
		return false;
	}

	if( obj.reflect !== 'jion_attribute' )
	{
		return false;
	}

	return (
		this.allowsNull === obj.allowsNull
		&&
		this.allowsUndefined === obj.allowsUndefined
		&&
		this.assign === obj.assign
		&&
		this.comment === obj.comment
		&&
		(
			this.defaultValue === obj.defaultValue
			||
			this.defaultValue !== undefined
			&&
			this.defaultValue.equals( obj.defaultValue )
		)
		&&
		(
			this.id === obj.id
			||
			this.id.equals && this.id.equals( obj.id )
		)
		&&
		this.json === obj.json
		&&
		this.name === obj.name
		&&
		this.prepare === obj.prepare
		&&
		(
			this.varRef === obj.varRef
			||
			this.varRef.equals && this.varRef.equals( obj.varRef )
		)
	);
};


}
)( );
