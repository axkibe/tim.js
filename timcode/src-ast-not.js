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
let ast_not = NODE ? module.exports : module;


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


let ast_member = require( '../ast/member' );


let ast_minus = require( '../ast/minus' );


let ast_minusAssign = require( '../ast/minusAssign' );


let ast_multiply = require( '../ast/multiply' );


let ast_multiplyAssign = require( '../ast/multiplyAssign' );


let ast_negate = require( '../ast/negate' );


let ast_new = require( '../ast/new' );


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
var
	Constructor,
	prototype;


Constructor =
	function(
		v_expr
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


ast_not.prototype = prototype;


/*
| Creates a new not object.
*/
ast_not.create =
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

	if( this !== ast_not )
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
/**/}

	if( inherit && ( v_expr === inherit.expr || v_expr.equals( inherit.expr ) ) )
	{
		return inherit;
	}

	return new Constructor( v_expr );
};


/*
| Reflection.
*/
prototype.reflect = 'ast_not';


/*
| Type reflection.
*/
prototype.timtype = ast_not;


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

	if( obj.reflect !== 'ast_not' )
	{
		return false;
	}

	return this.expr === obj.expr || this.expr.equals( obj.expr );
};


}
)( );
