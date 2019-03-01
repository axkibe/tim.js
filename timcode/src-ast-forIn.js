/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
'use strict';


const tt_var = require( './var.js' );


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


const tt_block = require( './block.js' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_block,
		v_letVar,
		v_object,
		v_variable
	)
{
	this.block = v_block;

	this.letVar = v_letVar;

	this.object = v_object;

	this.variable = v_variable;

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

	let v_block;

	let v_letVar;

	let v_object;

	let v_variable;

	if( this !== self )
	{
		inherit = this;

		v_block = this.block;

		v_letVar = this.letVar;

		v_object = this.object;

		v_variable = this.variable;
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

			case 'letVar' :

				if( arg !== pass )
				{
					v_letVar = arg;
				}

				break;

			case 'object' :

				if( arg !== pass )
				{
					v_object = arg;
				}

				break;

			case 'variable' :

				if( arg !== pass )
				{
					v_variable = arg;
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
/**/	if( typeof( v_letVar ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_object.timtype !== tt_and
/**/		&&
/**/		v_object.timtype !== tt_arrayLiteral
/**/		&&
/**/		v_object.timtype !== tt_assign
/**/		&&
/**/		v_object.timtype !== tt_boolean
/**/		&&
/**/		v_object.timtype !== tt_call
/**/		&&
/**/		v_object.timtype !== tt_comma
/**/		&&
/**/		v_object.timtype !== tt_condition
/**/		&&
/**/		v_object.timtype !== tt_delete
/**/		&&
/**/		v_object.timtype !== tt_differs
/**/		&&
/**/		v_object.timtype !== tt_divide
/**/		&&
/**/		v_object.timtype !== tt_divideAssign
/**/		&&
/**/		v_object.timtype !== tt_dot
/**/		&&
/**/		v_object.timtype !== tt_equals
/**/		&&
/**/		v_object.timtype !== tt_func
/**/		&&
/**/		v_object.timtype !== tt_greaterThan
/**/		&&
/**/		v_object.timtype !== tt_instanceof
/**/		&&
/**/		v_object.timtype !== tt_lessThan
/**/		&&
/**/		v_object.timtype !== tt_member
/**/		&&
/**/		v_object.timtype !== tt_minus
/**/		&&
/**/		v_object.timtype !== tt_minusAssign
/**/		&&
/**/		v_object.timtype !== tt_multiply
/**/		&&
/**/		v_object.timtype !== tt_multiplyAssign
/**/		&&
/**/		v_object.timtype !== tt_negate
/**/		&&
/**/		v_object.timtype !== tt_new
/**/		&&
/**/		v_object.timtype !== tt_not
/**/		&&
/**/		v_object.timtype !== tt_null
/**/		&&
/**/		v_object.timtype !== tt_number
/**/		&&
/**/		v_object.timtype !== tt_objLiteral
/**/		&&
/**/		v_object.timtype !== tt_or
/**/		&&
/**/		v_object.timtype !== tt_plus
/**/		&&
/**/		v_object.timtype !== tt_plusAssign
/**/		&&
/**/		v_object.timtype !== tt_postDecrement
/**/		&&
/**/		v_object.timtype !== tt_postIncrement
/**/		&&
/**/		v_object.timtype !== tt_preDecrement
/**/		&&
/**/		v_object.timtype !== tt_preIncrement
/**/		&&
/**/		v_object.timtype !== tt_string
/**/		&&
/**/		v_object.timtype !== tt_typeof
/**/		&&
/**/		v_object.timtype !== tt_undefined
/**/		&&
/**/		v_object.timtype !== tt_var
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_variable.timtype !== tt_var )
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
		v_letVar === inherit.letVar
		&&
		(
			v_object === inherit.object
			||
			v_object.equals( inherit.object )
		)
		&&
		(
			v_variable === inherit.variable
			||
			v_variable.equals( inherit.variable )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_block, v_letVar, v_object, v_variable );
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
		this.letVar === obj.letVar
		&&
		(
			this.object === obj.object
			||
			this.object.equals( obj.object )
		)
		&&
		(
			this.variable === obj.variable
			||
			this.variable.equals( obj.variable )
		)
	);
};
