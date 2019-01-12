/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
'use strict';


const tt_and = require( './and.js' );


const tt_arrayLiteral = require( './arrayLiteral.js' );


const tt_assign = require( './assign.js' );


const tt_boolean = require( './boolean.js' );


const tt_call = require( './call.js' );


const tt_comma = require( './comma.js' );


const tt_condition = require( './condition.js' );


const tt_delete = require( './delete.js' );


const tt_differs = require( './differs.js' );


const tt_divide = require( './divide.js' );


const tt_divideAssign = require( './divideAssign.js' );


const tt_dot = require( './dot.js' );


const tt_equals = require( './equals.js' );


const tt_func = require( './func.js' );


const tt_greaterThan = require( './greaterThan.js' );


const tt_instanceof = require( './instanceof.js' );


const tt_lessThan = require( './lessThan.js' );


const tt_member = require( './member.js' );


const tt_minus = require( './minus.js' );


const tt_minusAssign = require( './minusAssign.js' );


const tt_multiply = require( './multiply.js' );


const tt_multiplyAssign = require( './multiplyAssign.js' );


const tt_negate = require( './negate.js' );


const tt_new = require( './new.js' );


const tt_not = require( './not.js' );


const tt_null = require( './null.js' );


const tt_number = require( './number.js' );


const tt_objLiteral = require( './objLiteral.js' );


const tt_or = require( './or.js' );


const tt_plus = require( './plus.js' );


const tt_plusAssign = require( './plusAssign.js' );


const tt_postDecrement = require( './postDecrement.js' );


const tt_postIncrement = require( './postIncrement.js' );


const tt_preDecrement = require( './preDecrement.js' );


const tt_preIncrement = require( './preIncrement.js' );


const tt_string = require( './string.js' );


const tt_typeof = require( './typeof.js' );


const tt_undefined = require( './undefined.js' );


const tt_var = require( './var.js' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_expr,
		v_member
	)
{
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


self.prototype = prototype;


/*
| Creates a new object.
*/
self.create =
prototype.create =
	function(
		// free strings
	)
{
	let inherit;

	let v_expr;

	let v_member;

	if( this !== self )
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
/**/	if(
/**/		v_expr.timtype !== tt_and
/**/		&&
/**/		v_expr.timtype !== tt_arrayLiteral
/**/		&&
/**/		v_expr.timtype !== tt_assign
/**/		&&
/**/		v_expr.timtype !== tt_boolean
/**/		&&
/**/		v_expr.timtype !== tt_call
/**/		&&
/**/		v_expr.timtype !== tt_comma
/**/		&&
/**/		v_expr.timtype !== tt_condition
/**/		&&
/**/		v_expr.timtype !== tt_delete
/**/		&&
/**/		v_expr.timtype !== tt_differs
/**/		&&
/**/		v_expr.timtype !== tt_divide
/**/		&&
/**/		v_expr.timtype !== tt_divideAssign
/**/		&&
/**/		v_expr.timtype !== tt_dot
/**/		&&
/**/		v_expr.timtype !== tt_equals
/**/		&&
/**/		v_expr.timtype !== tt_func
/**/		&&
/**/		v_expr.timtype !== tt_greaterThan
/**/		&&
/**/		v_expr.timtype !== tt_instanceof
/**/		&&
/**/		v_expr.timtype !== tt_lessThan
/**/		&&
/**/		v_expr.timtype !== tt_member
/**/		&&
/**/		v_expr.timtype !== tt_minus
/**/		&&
/**/		v_expr.timtype !== tt_minusAssign
/**/		&&
/**/		v_expr.timtype !== tt_multiply
/**/		&&
/**/		v_expr.timtype !== tt_multiplyAssign
/**/		&&
/**/		v_expr.timtype !== tt_negate
/**/		&&
/**/		v_expr.timtype !== tt_new
/**/		&&
/**/		v_expr.timtype !== tt_not
/**/		&&
/**/		v_expr.timtype !== tt_null
/**/		&&
/**/		v_expr.timtype !== tt_number
/**/		&&
/**/		v_expr.timtype !== tt_objLiteral
/**/		&&
/**/		v_expr.timtype !== tt_or
/**/		&&
/**/		v_expr.timtype !== tt_plus
/**/		&&
/**/		v_expr.timtype !== tt_plusAssign
/**/		&&
/**/		v_expr.timtype !== tt_postDecrement
/**/		&&
/**/		v_expr.timtype !== tt_postIncrement
/**/		&&
/**/		v_expr.timtype !== tt_preDecrement
/**/		&&
/**/		v_expr.timtype !== tt_preIncrement
/**/		&&
/**/		v_expr.timtype !== tt_string
/**/		&&
/**/		v_expr.timtype !== tt_typeof
/**/		&&
/**/		v_expr.timtype !== tt_undefined
/**/		&&
/**/		v_expr.timtype !== tt_var
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_member.timtype !== tt_and
/**/		&&
/**/		v_member.timtype !== tt_arrayLiteral
/**/		&&
/**/		v_member.timtype !== tt_assign
/**/		&&
/**/		v_member.timtype !== tt_boolean
/**/		&&
/**/		v_member.timtype !== tt_call
/**/		&&
/**/		v_member.timtype !== tt_comma
/**/		&&
/**/		v_member.timtype !== tt_condition
/**/		&&
/**/		v_member.timtype !== tt_delete
/**/		&&
/**/		v_member.timtype !== tt_differs
/**/		&&
/**/		v_member.timtype !== tt_divide
/**/		&&
/**/		v_member.timtype !== tt_divideAssign
/**/		&&
/**/		v_member.timtype !== tt_dot
/**/		&&
/**/		v_member.timtype !== tt_equals
/**/		&&
/**/		v_member.timtype !== tt_func
/**/		&&
/**/		v_member.timtype !== tt_greaterThan
/**/		&&
/**/		v_member.timtype !== tt_instanceof
/**/		&&
/**/		v_member.timtype !== tt_lessThan
/**/		&&
/**/		v_member.timtype !== tt_member
/**/		&&
/**/		v_member.timtype !== tt_minus
/**/		&&
/**/		v_member.timtype !== tt_minusAssign
/**/		&&
/**/		v_member.timtype !== tt_multiply
/**/		&&
/**/		v_member.timtype !== tt_multiplyAssign
/**/		&&
/**/		v_member.timtype !== tt_negate
/**/		&&
/**/		v_member.timtype !== tt_new
/**/		&&
/**/		v_member.timtype !== tt_not
/**/		&&
/**/		v_member.timtype !== tt_null
/**/		&&
/**/		v_member.timtype !== tt_number
/**/		&&
/**/		v_member.timtype !== tt_objLiteral
/**/		&&
/**/		v_member.timtype !== tt_or
/**/		&&
/**/		v_member.timtype !== tt_plus
/**/		&&
/**/		v_member.timtype !== tt_plusAssign
/**/		&&
/**/		v_member.timtype !== tt_postDecrement
/**/		&&
/**/		v_member.timtype !== tt_postIncrement
/**/		&&
/**/		v_member.timtype !== tt_preDecrement
/**/		&&
/**/		v_member.timtype !== tt_preIncrement
/**/		&&
/**/		v_member.timtype !== tt_string
/**/		&&
/**/		v_member.timtype !== tt_typeof
/**/		&&
/**/		v_member.timtype !== tt_undefined
/**/		&&
/**/		v_member.timtype !== tt_var
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
| Type reflection.
*/
prototype.timtype = self;


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

	if( obj.timtype !== self )
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
