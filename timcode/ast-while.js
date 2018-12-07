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


const tt_block = require( './block.js' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_block,
		v_condition
	)
{
	this.block = v_block;

	this.condition = v_condition;

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

	let v_block;

	let v_condition;

	if( this !== self )
	{
		inherit = this;

		v_block = this.block;

		v_condition = this.condition;
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
			case 'block' :

				if( arg !== pass )
				{
					v_block = arg;
				}

				break;

			case 'condition' :

				if( arg !== pass )
				{
					v_condition = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_block.timtype !== tt_block )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
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
/**/}

	if(
		inherit
		&&
		(
			v_block === inherit.block
			||
			v_block.equals( inherit.block )
		)
		&&
		(
			v_condition === inherit.condition
			||
			v_condition.equals( inherit.condition )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_block, v_condition );
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
			this.block === obj.block
			||
			this.block.equals( obj.block )
		)
		&&
		(
			this.condition === obj.condition
			||
			this.condition.equals( obj.condition )
		)
	);
};
