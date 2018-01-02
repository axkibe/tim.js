/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
var
	ast_var,
	tim_proto,
	timModules;


/*
| The typed immutable.
*/
var
	attribute;


if( !attribute )
{
	attribute = { };
}


if( !NODE )
{
/**/if( CHECK )
/**/{
/**/	if( timModules.attribute !== undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	timModules.attribute = attribute;
}


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
	ast_var = require( './ast/var' );

	tim_proto = tim.proto;
}


/*
| Constructor.
*/
var
	Constructor,
	prototype;


Constructor =
	function(
		v_allowsNull,
		v_allowsUndefined,
		v_assign,
		v_defaultValue,
		v_id,
		v_json,
		v_name,
		v_prepare,
		v_varRef
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.allowsNull = v_allowsNull;

	this.allowsUndefined = v_allowsUndefined;

	this.assign = v_assign;

	this.defaultValue = v_defaultValue;

	this.id = v_id;

	this.json = v_json;

	this.name = v_name;

	this.prepare = v_prepare;

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


attribute.prototype = prototype;


/*
| Creates a new attribute object.
*/
attribute.create =
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
		v_defaultValue,
		v_id,
		v_json,
		v_name,
		v_prepare,
		v_varRef;

	if( this !== attribute )
	{
		inherit = this;

		v_allowsNull = this.allowsNull;

		v_allowsUndefined = this.allowsUndefined;

		v_assign = this.assign;

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

				throw new Error( );
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
/**/			v_defaultValue.reflect !== 'ast_divide'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_divideAssign'
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
/**/			v_defaultValue.reflect !== 'ast_minus'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_minusAssign'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_multiply'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_negate'
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
/**/			v_defaultValue.reflect !== 'ast_postDecrement'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_postIncrement'
/**/			&&
/**/			v_defaultValue.reflect !== 'ast_preDecrement'
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
/**/	if( v_id.reflect !== 'id' && v_id.reflect !== 'idGroup' )
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
		(
			v_defaultValue === inherit.defaultValue
			||
			v_defaultValue !== undefined
			&&
			v_defaultValue.equals( inherit.defaultValue )
		)
		&&
		v_id === inherit.id
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
			v_varRef.equals( inherit.varRef )
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
| Reflection.
*/
prototype.reflect = 'attribute';


/*
| Sets values by path.
*/
prototype.setPath = tim_proto.setPath;


/*
| Gets values by path
*/
prototype.getPath = tim_proto.getPath;


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

	if( obj.reflect !== 'attribute' )
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
		(
			this.defaultValue === obj.defaultValue
			||
			this.defaultValue !== undefined
			&&
			this.defaultValue.equals( obj.defaultValue )
		)
		&&
		this.id === obj.id
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
			this.varRef.equals( obj.varRef )
		)
	);
};


}
)( );
