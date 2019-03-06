'use strict';


/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
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
		v_assign,
		v_name
	)
{
	this.assign = v_assign;

	this.name = v_name;

	Object.freeze( this );
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

	let v_assign;

	let v_name;

	if( this !== self )
	{
		inherit = this;

		v_assign = this.assign;

		v_name = this.name;
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

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if(
/**/		v_assign !== undefined
/**/		&&
/**/		v_assign.timtype !== tt_and
/**/		&&
/**/		v_assign.timtype !== tt_arrayLiteral
/**/		&&
/**/		v_assign.timtype !== tt_assign
/**/		&&
/**/		v_assign.timtype !== tt_boolean
/**/		&&
/**/		v_assign.timtype !== tt_call
/**/		&&
/**/		v_assign.timtype !== tt_comma
/**/		&&
/**/		v_assign.timtype !== tt_condition
/**/		&&
/**/		v_assign.timtype !== tt_delete
/**/		&&
/**/		v_assign.timtype !== tt_differs
/**/		&&
/**/		v_assign.timtype !== tt_divide
/**/		&&
/**/		v_assign.timtype !== tt_divideAssign
/**/		&&
/**/		v_assign.timtype !== tt_dot
/**/		&&
/**/		v_assign.timtype !== tt_equals
/**/		&&
/**/		v_assign.timtype !== tt_func
/**/		&&
/**/		v_assign.timtype !== tt_greaterThan
/**/		&&
/**/		v_assign.timtype !== tt_instanceof
/**/		&&
/**/		v_assign.timtype !== tt_lessThan
/**/		&&
/**/		v_assign.timtype !== tt_member
/**/		&&
/**/		v_assign.timtype !== tt_minus
/**/		&&
/**/		v_assign.timtype !== tt_minusAssign
/**/		&&
/**/		v_assign.timtype !== tt_multiply
/**/		&&
/**/		v_assign.timtype !== tt_multiplyAssign
/**/		&&
/**/		v_assign.timtype !== tt_negate
/**/		&&
/**/		v_assign.timtype !== tt_new
/**/		&&
/**/		v_assign.timtype !== tt_not
/**/		&&
/**/		v_assign.timtype !== tt_null
/**/		&&
/**/		v_assign.timtype !== tt_number
/**/		&&
/**/		v_assign.timtype !== tt_objLiteral
/**/		&&
/**/		v_assign.timtype !== tt_or
/**/		&&
/**/		v_assign.timtype !== tt_plus
/**/		&&
/**/		v_assign.timtype !== tt_plusAssign
/**/		&&
/**/		v_assign.timtype !== tt_postDecrement
/**/		&&
/**/		v_assign.timtype !== tt_postIncrement
/**/		&&
/**/		v_assign.timtype !== tt_preDecrement
/**/		&&
/**/		v_assign.timtype !== tt_preIncrement
/**/		&&
/**/		v_assign.timtype !== tt_string
/**/		&&
/**/		v_assign.timtype !== tt_typeof
/**/		&&
/**/		v_assign.timtype !== tt_undefined
/**/		&&
/**/		v_assign.timtype !== tt_var
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_name ) !== 'string' )
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
			v_assign !== undefined && v_assign.timtype && v_assign.equals( inherit.assign )
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
			this.assign === obj.assign
			||
			this.assign !== undefined && this.assign.timtype && this.assign.equals( obj.assign )
		)
		&&
		this.name === obj.name
	);
};
