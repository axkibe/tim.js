/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	jion$ast_preIncrement;


if( NODE )
{
	jion$ast_preIncrement = module.exports;
}
else
{
	jion$ast_preIncrement = { };
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
		v_expr // the expression to pre increment
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.expr = v_expr;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


jion$ast_preIncrement.prototype = prototype;


/*
| Creates a new preIncrement object.
*/
jion$ast_preIncrement.create =
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
		v_expr;

	if( this !== jion$ast_preIncrement )
	{
		inherit = this;

		v_expr = this.expr;
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
			case 'expr' :

				if( arg !== pass )
				{
					v_expr = arg;
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
/**/	if( v_expr === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_expr === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_expr.reflect !== 'ast_and'
/**/		&&
/**/		v_expr.reflect !== 'ast_arrayLiteral'
/**/		&&
/**/		v_expr.reflect !== 'ast_assign'
/**/		&&
/**/		v_expr.reflect !== 'ast_boolean'
/**/		&&
/**/		v_expr.reflect !== 'ast_call'
/**/		&&
/**/		v_expr.reflect !== 'ast_comma'
/**/		&&
/**/		v_expr.reflect !== 'ast_condition'
/**/		&&
/**/		v_expr.reflect !== 'ast_delete'
/**/		&&
/**/		v_expr.reflect !== 'ast_differs'
/**/		&&
/**/		v_expr.reflect !== 'ast_divide'
/**/		&&
/**/		v_expr.reflect !== 'ast_divideAssign'
/**/		&&
/**/		v_expr.reflect !== 'ast_dot'
/**/		&&
/**/		v_expr.reflect !== 'ast_equals'
/**/		&&
/**/		v_expr.reflect !== 'ast_func'
/**/		&&
/**/		v_expr.reflect !== 'ast_greaterThan'
/**/		&&
/**/		v_expr.reflect !== 'ast_instanceof'
/**/		&&
/**/		v_expr.reflect !== 'ast_lessThan'
/**/		&&
/**/		v_expr.reflect !== 'ast_member'
/**/		&&
/**/		v_expr.reflect !== 'ast_minus'
/**/		&&
/**/		v_expr.reflect !== 'ast_minusAssign'
/**/		&&
/**/		v_expr.reflect !== 'ast_multiply'
/**/		&&
/**/		v_expr.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_expr.reflect !== 'ast_negate'
/**/		&&
/**/		v_expr.reflect !== 'ast_new'
/**/		&&
/**/		v_expr.reflect !== 'ast_not'
/**/		&&
/**/		v_expr.reflect !== 'ast_null'
/**/		&&
/**/		v_expr.reflect !== 'ast_number'
/**/		&&
/**/		v_expr.reflect !== 'ast_objLiteral'
/**/		&&
/**/		v_expr.reflect !== 'ast_or'
/**/		&&
/**/		v_expr.reflect !== 'ast_plus'
/**/		&&
/**/		v_expr.reflect !== 'ast_plusAssign'
/**/		&&
/**/		v_expr.reflect !== 'ast_postDecrement'
/**/		&&
/**/		v_expr.reflect !== 'ast_postIncrement'
/**/		&&
/**/		v_expr.reflect !== 'ast_preDecrement'
/**/		&&
/**/		v_expr.reflect !== 'ast_preIncrement'
/**/		&&
/**/		v_expr.reflect !== 'ast_string'
/**/		&&
/**/		v_expr.reflect !== 'ast_typeof'
/**/		&&
/**/		v_expr.reflect !== 'ast_var'
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_expr === inherit.expr
			||
			v_expr.equals( inherit.expr )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_expr );
};


/*
| Reflection.
*/
prototype.reflect = 'ast_preIncrement';


/*
| Name Reflection.
*/
prototype.reflectName = 'preIncrement';


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

	if( obj.reflect !== 'ast_preIncrement' )
	{
		return false;
	}

	return this.expr === obj.expr || this.expr.equals( obj.expr );
};


}
)( );
