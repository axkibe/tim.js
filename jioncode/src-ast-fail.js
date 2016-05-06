/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	jion$ast_fail;


if( NODE )
{
	jion$ast_fail = module.exports;
}
else
{
	jion$ast_fail = { };
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
	jion$ast_negate,
	jion$ast_new,
	jion$ast_not,
	jion$ast_null,
	jion$ast_number,
	jion$ast_objLiteral,
	jion$ast_or,
	jion$ast_plus,
	jion$ast_plusAssign,
	jion$ast_postDecrement,
	jion$ast_postIncrement,
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

	jion$ast_negate = require( '../ast/negate' );

	jion$ast_new = require( '../ast/new' );

	jion$ast_not = require( '../ast/not' );

	jion$ast_null = require( '../ast/null' );

	jion$ast_number = require( '../ast/number' );

	jion$ast_objLiteral = require( '../ast/objLiteral' );

	jion$ast_or = require( '../ast/or' );

	jion$ast_plus = require( '../ast/plus' );

	jion$ast_plusAssign = require( '../ast/plusAssign' );

	jion$ast_postDecrement = require( '../ast/postDecrement' );

	jion$ast_postIncrement = require( '../ast/postIncrement' );

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
		v_message // the error message expression
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.message = v_message;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


jion$ast_fail.prototype = prototype;


/*
| Creates a new fail object.
*/
jion$ast_fail.create =
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
		v_message;

	if( this !== jion$ast_fail )
	{
		inherit = this;

		v_message = this.message;
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
			case 'message' :

				if( arg !== pass )
				{
					v_message = arg;
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
/**/	if( v_message === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_message !== undefined )
/**/	{
/**/		if(
/**/			v_message.reflect !== 'ast_and'
/**/			&&
/**/			v_message.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_message.reflect !== 'ast_assign'
/**/			&&
/**/			v_message.reflect !== 'ast_boolean'
/**/			&&
/**/			v_message.reflect !== 'ast_call'
/**/			&&
/**/			v_message.reflect !== 'ast_comma'
/**/			&&
/**/			v_message.reflect !== 'ast_condition'
/**/			&&
/**/			v_message.reflect !== 'ast_delete'
/**/			&&
/**/			v_message.reflect !== 'ast_differs'
/**/			&&
/**/			v_message.reflect !== 'ast_divide'
/**/			&&
/**/			v_message.reflect !== 'ast_divideAssign'
/**/			&&
/**/			v_message.reflect !== 'ast_dot'
/**/			&&
/**/			v_message.reflect !== 'ast_equals'
/**/			&&
/**/			v_message.reflect !== 'ast_func'
/**/			&&
/**/			v_message.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_message.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_message.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_message.reflect !== 'ast_member'
/**/			&&
/**/			v_message.reflect !== 'ast_minus'
/**/			&&
/**/			v_message.reflect !== 'ast_minusAssign'
/**/			&&
/**/			v_message.reflect !== 'ast_multiply'
/**/			&&
/**/			v_message.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_message.reflect !== 'ast_negate'
/**/			&&
/**/			v_message.reflect !== 'ast_new'
/**/			&&
/**/			v_message.reflect !== 'ast_not'
/**/			&&
/**/			v_message.reflect !== 'ast_null'
/**/			&&
/**/			v_message.reflect !== 'ast_number'
/**/			&&
/**/			v_message.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_message.reflect !== 'ast_or'
/**/			&&
/**/			v_message.reflect !== 'ast_plus'
/**/			&&
/**/			v_message.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_message.reflect !== 'ast_postDecrement'
/**/			&&
/**/			v_message.reflect !== 'ast_postIncrement'
/**/			&&
/**/			v_message.reflect !== 'ast_preDecrement'
/**/			&&
/**/			v_message.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_message.reflect !== 'ast_string'
/**/			&&
/**/			v_message.reflect !== 'ast_typeof'
/**/			&&
/**/			v_message.reflect !== 'ast_var'
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_message === inherit.message
			||
			v_message !== undefined && v_message.equals( inherit.message )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_message );
};


/*
| Reflection.
*/
prototype.reflect = 'ast_fail';


/*
| Name Reflection.
*/
prototype.reflectName = 'fail';


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

	if( obj.reflect !== 'ast_fail' )
	{
		return false;
	}

	return (
		this.message === obj.message
		||
		this.message !== undefined && this.message.equals( obj.message )
	);
};


}
)( );
