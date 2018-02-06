/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/


/*
| Capsule
*/
(
function( ) {
'use strict';


/*
| The typed immutable.
*/
let ast_member = NODE ? module.exports : module;


let ast_and = require( '../ast/and' );


let ast_arrayLiteral = require( '../ast/arrayLiteral' );


let ast_assign = require( '../ast/assign' );


let ast_boolean = require( '../ast/boolean' );


let ast_call = require( '../ast/call' );


let ast_comma = require( '../ast/comma' );


let ast_condition = require( '../ast/condition' );


let ast_delete = require( '../ast/delete' );


let ast_differs = require( '../ast/differs' );


let ast_divide = require( '../ast/divide' );


let ast_divideAssign = require( '../ast/divideAssign' );


let ast_dot = require( '../ast/dot' );


let ast_equals = require( '../ast/equals' );


let ast_func = require( '../ast/func' );


let ast_greaterThan = require( '../ast/greaterThan' );


let ast_instanceof = require( '../ast/instanceof' );


let ast_lessThan = require( '../ast/lessThan' );


let ast_minus = require( '../ast/minus' );


let ast_minusAssign = require( '../ast/minusAssign' );


let ast_multiply = require( '../ast/multiply' );


let ast_multiplyAssign = require( '../ast/multiplyAssign' );


let ast_negate = require( '../ast/negate' );


let ast_new = require( '../ast/new' );


let ast_not = require( '../ast/not' );


let ast_null = require( '../ast/null' );


let ast_number = require( '../ast/number' );


let ast_objLiteral = require( '../ast/objLiteral' );


let ast_or = require( '../ast/or' );


let ast_plus = require( '../ast/plus' );


let ast_plusAssign = require( '../ast/plusAssign' );


let ast_postDecrement = require( '../ast/postDecrement' );


let ast_postIncrement = require( '../ast/postIncrement' );


let ast_preDecrement = require( '../ast/preDecrement' );


let ast_preIncrement = require( '../ast/preIncrement' );


let ast_string = require( '../ast/string' );


let ast_typeof = require( '../ast/typeof' );


let ast_var = require( '../ast/var' );


let tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_expr,
		v_member
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.expr = v_expr;

	this.member = v_member;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
const prototype = Constructor.prototype;


ast_member.prototype = prototype;


/*
| Creates a new member object.
*/
ast_member.create =
prototype.create =
	function(
		// free strings
	)
{
	var
		inherit,
		v_expr,
		v_member;

	if( this !== ast_member )
	{
		inherit = this;

		v_expr = this.expr;

		v_member = this.member;
	}

	for(
		let a = 0, al = arguments.length;
		a < al;
		a += 2
	)
	{
		let arg = arguments[ a + 1 ];

		switch( arguments[ a ] )
		{
			case 'expr' :

				if( arg !== pass )
				{
					v_expr = arg;
				}

				break;

			case 'member' :

				if( arg !== pass )
				{
					v_member = arg;
				}

				break;

			default :

				throw new Error( );
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
/**/		v_expr.timtype !== ast_and
/**/		&&
/**/		v_expr.timtype !== ast_arrayLiteral
/**/		&&
/**/		v_expr.timtype !== ast_assign
/**/		&&
/**/		v_expr.timtype !== ast_boolean
/**/		&&
/**/		v_expr.timtype !== ast_call
/**/		&&
/**/		v_expr.timtype !== ast_comma
/**/		&&
/**/		v_expr.timtype !== ast_condition
/**/		&&
/**/		v_expr.timtype !== ast_delete
/**/		&&
/**/		v_expr.timtype !== ast_differs
/**/		&&
/**/		v_expr.timtype !== ast_divide
/**/		&&
/**/		v_expr.timtype !== ast_divideAssign
/**/		&&
/**/		v_expr.timtype !== ast_dot
/**/		&&
/**/		v_expr.timtype !== ast_equals
/**/		&&
/**/		v_expr.timtype !== ast_func
/**/		&&
/**/		v_expr.timtype !== ast_greaterThan
/**/		&&
/**/		v_expr.timtype !== ast_instanceof
/**/		&&
/**/		v_expr.timtype !== ast_lessThan
/**/		&&
/**/		v_expr.timtype !== ast_member
/**/		&&
/**/		v_expr.timtype !== ast_minus
/**/		&&
/**/		v_expr.timtype !== ast_minusAssign
/**/		&&
/**/		v_expr.timtype !== ast_multiply
/**/		&&
/**/		v_expr.timtype !== ast_multiplyAssign
/**/		&&
/**/		v_expr.timtype !== ast_negate
/**/		&&
/**/		v_expr.timtype !== ast_new
/**/		&&
/**/		v_expr.timtype !== ast_not
/**/		&&
/**/		v_expr.timtype !== ast_null
/**/		&&
/**/		v_expr.timtype !== ast_number
/**/		&&
/**/		v_expr.timtype !== ast_objLiteral
/**/		&&
/**/		v_expr.timtype !== ast_or
/**/		&&
/**/		v_expr.timtype !== ast_plus
/**/		&&
/**/		v_expr.timtype !== ast_plusAssign
/**/		&&
/**/		v_expr.timtype !== ast_postDecrement
/**/		&&
/**/		v_expr.timtype !== ast_postIncrement
/**/		&&
/**/		v_expr.timtype !== ast_preDecrement
/**/		&&
/**/		v_expr.timtype !== ast_preIncrement
/**/		&&
/**/		v_expr.timtype !== ast_string
/**/		&&
/**/		v_expr.timtype !== ast_typeof
/**/		&&
/**/		v_expr.timtype !== ast_var
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_member === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_member === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_member.timtype !== ast_and
/**/		&&
/**/		v_member.timtype !== ast_arrayLiteral
/**/		&&
/**/		v_member.timtype !== ast_assign
/**/		&&
/**/		v_member.timtype !== ast_boolean
/**/		&&
/**/		v_member.timtype !== ast_call
/**/		&&
/**/		v_member.timtype !== ast_comma
/**/		&&
/**/		v_member.timtype !== ast_condition
/**/		&&
/**/		v_member.timtype !== ast_delete
/**/		&&
/**/		v_member.timtype !== ast_differs
/**/		&&
/**/		v_member.timtype !== ast_divide
/**/		&&
/**/		v_member.timtype !== ast_divideAssign
/**/		&&
/**/		v_member.timtype !== ast_dot
/**/		&&
/**/		v_member.timtype !== ast_equals
/**/		&&
/**/		v_member.timtype !== ast_func
/**/		&&
/**/		v_member.timtype !== ast_greaterThan
/**/		&&
/**/		v_member.timtype !== ast_instanceof
/**/		&&
/**/		v_member.timtype !== ast_lessThan
/**/		&&
/**/		v_member.timtype !== ast_member
/**/		&&
/**/		v_member.timtype !== ast_minus
/**/		&&
/**/		v_member.timtype !== ast_minusAssign
/**/		&&
/**/		v_member.timtype !== ast_multiply
/**/		&&
/**/		v_member.timtype !== ast_multiplyAssign
/**/		&&
/**/		v_member.timtype !== ast_negate
/**/		&&
/**/		v_member.timtype !== ast_new
/**/		&&
/**/		v_member.timtype !== ast_not
/**/		&&
/**/		v_member.timtype !== ast_null
/**/		&&
/**/		v_member.timtype !== ast_number
/**/		&&
/**/		v_member.timtype !== ast_objLiteral
/**/		&&
/**/		v_member.timtype !== ast_or
/**/		&&
/**/		v_member.timtype !== ast_plus
/**/		&&
/**/		v_member.timtype !== ast_plusAssign
/**/		&&
/**/		v_member.timtype !== ast_postDecrement
/**/		&&
/**/		v_member.timtype !== ast_postIncrement
/**/		&&
/**/		v_member.timtype !== ast_preDecrement
/**/		&&
/**/		v_member.timtype !== ast_preIncrement
/**/		&&
/**/		v_member.timtype !== ast_string
/**/		&&
/**/		v_member.timtype !== ast_typeof
/**/		&&
/**/		v_member.timtype !== ast_var
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
		&&
		(
			v_member === inherit.member
			||
			v_member.equals( inherit.member )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_expr, v_member );
};


/*
| Reflection.
*/
prototype.reflect = 'ast_member';


/*
| Type reflection.
*/
prototype.timtype = ast_member;


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

	if( obj.reflect !== 'ast_member' )
	{
		return false;
	}

	return (
		(
			this.expr === obj.expr
			||
			this.expr.equals( obj.expr )
		)
		&&
		(
			this.member === obj.member
			||
			this.member.equals( obj.member )
		)
	);
};


}
)( );
