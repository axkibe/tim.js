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
		v_condition,
		v_elsewise,
		v_then
	)
{
	this.condition = v_condition;

	this.elsewise = v_elsewise;

	this.then = v_then;

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

	let v_condition;

	let v_elsewise;

	let v_then;

	if( this !== self )
	{
		inherit = this;

		v_condition = this.condition;

		v_elsewise = this.elsewise;

		v_then = this.then;
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
			case 'condition' :

				if( arg !== pass )
				{
					v_condition = arg;
				}

				break;

			case 'elsewise' :

				if( arg !== pass )
				{
					v_elsewise = arg;
				}

				break;

			case 'then' :

				if( arg !== pass )
				{
					v_then = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if(
/**/		v_condition.timtype !== tt_and
/**/		&&
/**/		v_condition.timtype !== tt_arrayLiteral
/**/		&&
/**/		v_condition.timtype !== tt_assign
/**/		&&
/**/		v_condition.timtype !== tt_boolean
/**/		&&
/**/		v_condition.timtype !== tt_call
/**/		&&
/**/		v_condition.timtype !== tt_comma
/**/		&&
/**/		v_condition.timtype !== tt_condition
/**/		&&
/**/		v_condition.timtype !== tt_delete
/**/		&&
/**/		v_condition.timtype !== tt_differs
/**/		&&
/**/		v_condition.timtype !== tt_divide
/**/		&&
/**/		v_condition.timtype !== tt_divideAssign
/**/		&&
/**/		v_condition.timtype !== tt_dot
/**/		&&
/**/		v_condition.timtype !== tt_equals
/**/		&&
/**/		v_condition.timtype !== tt_func
/**/		&&
/**/		v_condition.timtype !== tt_greaterThan
/**/		&&
/**/		v_condition.timtype !== tt_instanceof
/**/		&&
/**/		v_condition.timtype !== tt_lessThan
/**/		&&
/**/		v_condition.timtype !== tt_member
/**/		&&
/**/		v_condition.timtype !== tt_minus
/**/		&&
/**/		v_condition.timtype !== tt_minusAssign
/**/		&&
/**/		v_condition.timtype !== tt_multiply
/**/		&&
/**/		v_condition.timtype !== tt_multiplyAssign
/**/		&&
/**/		v_condition.timtype !== tt_negate
/**/		&&
/**/		v_condition.timtype !== tt_new
/**/		&&
/**/		v_condition.timtype !== tt_not
/**/		&&
/**/		v_condition.timtype !== tt_null
/**/		&&
/**/		v_condition.timtype !== tt_number
/**/		&&
/**/		v_condition.timtype !== tt_objLiteral
/**/		&&
/**/		v_condition.timtype !== tt_or
/**/		&&
/**/		v_condition.timtype !== tt_plus
/**/		&&
/**/		v_condition.timtype !== tt_plusAssign
/**/		&&
/**/		v_condition.timtype !== tt_postDecrement
/**/		&&
/**/		v_condition.timtype !== tt_postIncrement
/**/		&&
/**/		v_condition.timtype !== tt_preDecrement
/**/		&&
/**/		v_condition.timtype !== tt_preIncrement
/**/		&&
/**/		v_condition.timtype !== tt_string
/**/		&&
/**/		v_condition.timtype !== tt_typeof
/**/		&&
/**/		v_condition.timtype !== tt_undefined
/**/		&&
/**/		v_condition.timtype !== tt_var
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_elsewise.timtype !== tt_and
/**/		&&
/**/		v_elsewise.timtype !== tt_arrayLiteral
/**/		&&
/**/		v_elsewise.timtype !== tt_assign
/**/		&&
/**/		v_elsewise.timtype !== tt_boolean
/**/		&&
/**/		v_elsewise.timtype !== tt_call
/**/		&&
/**/		v_elsewise.timtype !== tt_comma
/**/		&&
/**/		v_elsewise.timtype !== tt_condition
/**/		&&
/**/		v_elsewise.timtype !== tt_delete
/**/		&&
/**/		v_elsewise.timtype !== tt_differs
/**/		&&
/**/		v_elsewise.timtype !== tt_divide
/**/		&&
/**/		v_elsewise.timtype !== tt_divideAssign
/**/		&&
/**/		v_elsewise.timtype !== tt_dot
/**/		&&
/**/		v_elsewise.timtype !== tt_equals
/**/		&&
/**/		v_elsewise.timtype !== tt_func
/**/		&&
/**/		v_elsewise.timtype !== tt_greaterThan
/**/		&&
/**/		v_elsewise.timtype !== tt_instanceof
/**/		&&
/**/		v_elsewise.timtype !== tt_lessThan
/**/		&&
/**/		v_elsewise.timtype !== tt_member
/**/		&&
/**/		v_elsewise.timtype !== tt_minus
/**/		&&
/**/		v_elsewise.timtype !== tt_minusAssign
/**/		&&
/**/		v_elsewise.timtype !== tt_multiply
/**/		&&
/**/		v_elsewise.timtype !== tt_multiplyAssign
/**/		&&
/**/		v_elsewise.timtype !== tt_negate
/**/		&&
/**/		v_elsewise.timtype !== tt_new
/**/		&&
/**/		v_elsewise.timtype !== tt_not
/**/		&&
/**/		v_elsewise.timtype !== tt_null
/**/		&&
/**/		v_elsewise.timtype !== tt_number
/**/		&&
/**/		v_elsewise.timtype !== tt_objLiteral
/**/		&&
/**/		v_elsewise.timtype !== tt_or
/**/		&&
/**/		v_elsewise.timtype !== tt_plus
/**/		&&
/**/		v_elsewise.timtype !== tt_plusAssign
/**/		&&
/**/		v_elsewise.timtype !== tt_postDecrement
/**/		&&
/**/		v_elsewise.timtype !== tt_postIncrement
/**/		&&
/**/		v_elsewise.timtype !== tt_preDecrement
/**/		&&
/**/		v_elsewise.timtype !== tt_preIncrement
/**/		&&
/**/		v_elsewise.timtype !== tt_string
/**/		&&
/**/		v_elsewise.timtype !== tt_typeof
/**/		&&
/**/		v_elsewise.timtype !== tt_undefined
/**/		&&
/**/		v_elsewise.timtype !== tt_var
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_then.timtype !== tt_and
/**/		&&
/**/		v_then.timtype !== tt_arrayLiteral
/**/		&&
/**/		v_then.timtype !== tt_assign
/**/		&&
/**/		v_then.timtype !== tt_boolean
/**/		&&
/**/		v_then.timtype !== tt_call
/**/		&&
/**/		v_then.timtype !== tt_comma
/**/		&&
/**/		v_then.timtype !== tt_condition
/**/		&&
/**/		v_then.timtype !== tt_delete
/**/		&&
/**/		v_then.timtype !== tt_differs
/**/		&&
/**/		v_then.timtype !== tt_divide
/**/		&&
/**/		v_then.timtype !== tt_divideAssign
/**/		&&
/**/		v_then.timtype !== tt_dot
/**/		&&
/**/		v_then.timtype !== tt_equals
/**/		&&
/**/		v_then.timtype !== tt_func
/**/		&&
/**/		v_then.timtype !== tt_greaterThan
/**/		&&
/**/		v_then.timtype !== tt_instanceof
/**/		&&
/**/		v_then.timtype !== tt_lessThan
/**/		&&
/**/		v_then.timtype !== tt_member
/**/		&&
/**/		v_then.timtype !== tt_minus
/**/		&&
/**/		v_then.timtype !== tt_minusAssign
/**/		&&
/**/		v_then.timtype !== tt_multiply
/**/		&&
/**/		v_then.timtype !== tt_multiplyAssign
/**/		&&
/**/		v_then.timtype !== tt_negate
/**/		&&
/**/		v_then.timtype !== tt_new
/**/		&&
/**/		v_then.timtype !== tt_not
/**/		&&
/**/		v_then.timtype !== tt_null
/**/		&&
/**/		v_then.timtype !== tt_number
/**/		&&
/**/		v_then.timtype !== tt_objLiteral
/**/		&&
/**/		v_then.timtype !== tt_or
/**/		&&
/**/		v_then.timtype !== tt_plus
/**/		&&
/**/		v_then.timtype !== tt_plusAssign
/**/		&&
/**/		v_then.timtype !== tt_postDecrement
/**/		&&
/**/		v_then.timtype !== tt_postIncrement
/**/		&&
/**/		v_then.timtype !== tt_preDecrement
/**/		&&
/**/		v_then.timtype !== tt_preIncrement
/**/		&&
/**/		v_then.timtype !== tt_string
/**/		&&
/**/		v_then.timtype !== tt_typeof
/**/		&&
/**/		v_then.timtype !== tt_undefined
/**/		&&
/**/		v_then.timtype !== tt_var
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_condition === inherit.condition
			||
			v_condition.equals( inherit.condition )
		)
		&&
		(
			v_elsewise === inherit.elsewise
			||
			v_elsewise.equals( inherit.elsewise )
		)
		&&
		(
			v_then === inherit.then
			||
			v_then.equals( inherit.then )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_condition, v_elsewise, v_then );
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
			this.condition === obj.condition
			||
			this.condition.equals( obj.condition )
		)
		&&
		(
			this.elsewise === obj.elsewise
			||
			this.elsewise.equals( obj.elsewise )
		)
		&&
		(
			this.then === obj.then
			||
			this.then.equals( obj.then )
		)
	);
};
