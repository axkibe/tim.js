/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	jion$ast_varDec;


if( NODE )
{
	jion$ast_varDec = module.exports;
}
else
{
	jion$ast_varDec = { };
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
	jion$ast_divide,
	jion$ast_divideAssign,
	jion$ast_dot,
	jion$ast_equals,
	jion$ast_func,
	jion$ast_greaterThan,
	jion$ast_instanceof,
	jion$ast_lessThan,
	jion$ast_member,
	jion$ast_minus,
	jion$ast_minusAssign,
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
	jion$ast_preDecrement,
	jion$ast_preIncrement,
	jion$ast_string,
	jion$ast_typeof,
	jion$ast_var,
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
	jion$ast_and = require( '../ast/and' );

	jion$ast_arrayLiteral = require( '../ast/arrayLiteral' );

	jion$ast_assign = require( '../ast/assign' );

	jion$ast_boolean = require( '../ast/boolean' );

	jion$ast_call = require( '../ast/call' );

	jion$ast_comma = require( '../ast/comma' );

	jion$ast_condition = require( '../ast/condition' );

	jion$ast_delete = require( '../ast/delete' );

	jion$ast_differs = require( '../ast/differs' );

	jion$ast_divide = require( '../ast/divide' );

	jion$ast_divideAssign = require( '../ast/divideAssign' );

	jion$ast_dot = require( '../ast/dot' );

	jion$ast_equals = require( '../ast/equals' );

	jion$ast_func = require( '../ast/func' );

	jion$ast_greaterThan = require( '../ast/greaterThan' );

	jion$ast_instanceof = require( '../ast/instanceof' );

	jion$ast_lessThan = require( '../ast/lessThan' );

	jion$ast_member = require( '../ast/member' );

	jion$ast_minus = require( '../ast/minus' );

	jion$ast_minusAssign = require( '../ast/minusAssign' );

	jion$ast_multiply = require( '../ast/multiply' );

	jion$ast_multiplyAssign = require( '../ast/multiplyAssign' );

	jion$ast_new = require( '../ast/new' );

	jion$ast_not = require( '../ast/not' );

	jion$ast_null = require( '../ast/null' );

	jion$ast_number = require( '../ast/number' );

	jion$ast_objLiteral = require( '../ast/objLiteral' );

	jion$ast_or = require( '../ast/or' );

	jion$ast_plus = require( '../ast/plus' );

	jion$ast_plusAssign = require( '../ast/plusAssign' );

	jion$ast_preDecrement = require( '../ast/preDecrement' );

	jion$ast_preIncrement = require( '../ast/preIncrement' );

	jion$ast_string = require( '../ast/string' );

	jion$ast_typeof = require( '../ast/typeof' );

	jion$ast_var = require( '../ast/var' );

	require( '../proto' );
}


/*
| Constructor.
*/
var
	Constructor,
	prototype;


Constructor =
	function(
		v_assign, // Assignment of variable
		v_name // variable name
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.assign = v_assign;

	this.name = v_name;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


jion$ast_varDec.prototype = prototype;


/*
| Creates a new varDec object.
*/
jion$ast_varDec.create =
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
		v_assign,
		v_name;

	if( this !== jion$ast_varDec )
	{
		inherit = this;

		v_assign = this.assign;

		v_name = this.name;
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
			case 'assign' :

				if( arg !== pass )
				{
					v_assign = arg;
				}

				break;

			case 'name' :

				if( arg !== pass )
				{
					v_name = arg;
				}

				break;

			default :

/**/			if( CHECK )
/**/			{
/**/				throw new Error( );
/**/			}
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_assign === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_assign !== undefined )
/**/	{
/**/		if(
/**/			v_assign.reflect !== 'ast_and'
/**/			&&
/**/			v_assign.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_assign.reflect !== 'ast_assign'
/**/			&&
/**/			v_assign.reflect !== 'ast_boolean'
/**/			&&
/**/			v_assign.reflect !== 'ast_call'
/**/			&&
/**/			v_assign.reflect !== 'ast_comma'
/**/			&&
/**/			v_assign.reflect !== 'ast_condition'
/**/			&&
/**/			v_assign.reflect !== 'ast_delete'
/**/			&&
/**/			v_assign.reflect !== 'ast_differs'
/**/			&&
/**/			v_assign.reflect !== 'ast_divide'
/**/			&&
/**/			v_assign.reflect !== 'ast_divideAssign'
/**/			&&
/**/			v_assign.reflect !== 'ast_dot'
/**/			&&
/**/			v_assign.reflect !== 'ast_equals'
/**/			&&
/**/			v_assign.reflect !== 'ast_func'
/**/			&&
/**/			v_assign.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_assign.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_assign.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_assign.reflect !== 'ast_member'
/**/			&&
/**/			v_assign.reflect !== 'ast_minus'
/**/			&&
/**/			v_assign.reflect !== 'ast_minusAssign'
/**/			&&
/**/			v_assign.reflect !== 'ast_multiply'
/**/			&&
/**/			v_assign.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_assign.reflect !== 'ast_new'
/**/			&&
/**/			v_assign.reflect !== 'ast_not'
/**/			&&
/**/			v_assign.reflect !== 'ast_null'
/**/			&&
/**/			v_assign.reflect !== 'ast_number'
/**/			&&
/**/			v_assign.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_assign.reflect !== 'ast_or'
/**/			&&
/**/			v_assign.reflect !== 'ast_plus'
/**/			&&
/**/			v_assign.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_assign.reflect !== 'ast_preDecrement'
/**/			&&
/**/			v_assign.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_assign.reflect !== 'ast_string'
/**/			&&
/**/			v_assign.reflect !== 'ast_typeof'
/**/			&&
/**/			v_assign.reflect !== 'ast_var'
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
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
/**/}

	if(
		inherit
		&&
		(
			v_assign === inherit.assign
			||
			v_assign !== undefined && v_assign.equals( inherit.assign )
		)
		&&
		v_name === inherit.name
	)
	{
		return inherit;
	}

	return new Constructor( v_assign, v_name );
};


/*
| Reflection.
*/
prototype.reflect = 'ast_varDec';


/*
| Name Reflection.
*/
prototype.reflectName = 'varDec';


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

	if( obj.reflect !== 'ast_varDec' )
	{
		return false;
	}

	return (
		(
			this.assign === obj.assign
			||
			this.assign !== undefined && this.assign.equals( obj.assign )
		)
		&&
		this.name === obj.name
	);
};


}
)( );
