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
let ast_assign = NODE ? module.exports : module;


const tt_and = require( './and' );


const tt_arrayLiteral = require( './arrayLiteral' );


const tt_assign = require( './assign' );


const tt_boolean = require( './boolean' );


const tt_call = require( './call' );


const tt_comma = require( './comma' );


const tt_condition = require( './condition' );


const tt_delete = require( './delete' );


const tt_differs = require( './differs' );


const tt_divide = require( './divide' );


const tt_divideAssign = require( './divideAssign' );


const tt_dot = require( './dot' );


const tt_equals = require( './equals' );


const tt_func = require( './func' );


const tt_greaterThan = require( './greaterThan' );


const tt_instanceof = require( './instanceof' );


const tt_lessThan = require( './lessThan' );


const tt_member = require( './member' );


const tt_minus = require( './minus' );


const tt_minusAssign = require( './minusAssign' );


const tt_multiply = require( './multiply' );


const tt_multiplyAssign = require( './multiplyAssign' );


const tt_negate = require( './negate' );


const tt_new = require( './new' );


const tt_not = require( './not' );


const tt_null = require( './null' );


const tt_number = require( './number' );


const tt_objLiteral = require( './objLiteral' );


const tt_or = require( './or' );


const tt_plus = require( './plus' );


const tt_plusAssign = require( './plusAssign' );


const tt_postDecrement = require( './postDecrement' );


const tt_postIncrement = require( './postIncrement' );


const tt_preDecrement = require( './preDecrement' );


const tt_preIncrement = require( './preIncrement' );


const tt_string = require( './string' );


const tt_typeof = require( './typeof' );


const tt_var = require( './var' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_left,
		v_right
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.left = v_left;

	this.right = v_right;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
const prototype = Constructor.prototype;


ast_assign.prototype = prototype;


/*
| Creates a new assign object.
*/
ast_assign.create =
prototype.create =
	function(
		// free strings
	)
{
	let inherit;

	let v_left;

	let v_right;

	if( this !== ast_assign )
	{
		inherit = this;

		v_left = this.left;

		v_right = this.right;
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
			case 'left' :

				if( arg !== pass )
				{
					v_left = arg;
				}

				break;

			case 'right' :

				if( arg !== pass )
				{
					v_right = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_left === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_left === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_left.timtype !== tt_and
/**/		&&
/**/		v_left.timtype !== tt_arrayLiteral
/**/		&&
/**/		v_left.timtype !== tt_assign
/**/		&&
/**/		v_left.timtype !== tt_boolean
/**/		&&
/**/		v_left.timtype !== tt_call
/**/		&&
/**/		v_left.timtype !== tt_comma
/**/		&&
/**/		v_left.timtype !== tt_condition
/**/		&&
/**/		v_left.timtype !== tt_delete
/**/		&&
/**/		v_left.timtype !== tt_differs
/**/		&&
/**/		v_left.timtype !== tt_divide
/**/		&&
/**/		v_left.timtype !== tt_divideAssign
/**/		&&
/**/		v_left.timtype !== tt_dot
/**/		&&
/**/		v_left.timtype !== tt_equals
/**/		&&
/**/		v_left.timtype !== tt_func
/**/		&&
/**/		v_left.timtype !== tt_greaterThan
/**/		&&
/**/		v_left.timtype !== tt_instanceof
/**/		&&
/**/		v_left.timtype !== tt_lessThan
/**/		&&
/**/		v_left.timtype !== tt_member
/**/		&&
/**/		v_left.timtype !== tt_minus
/**/		&&
/**/		v_left.timtype !== tt_minusAssign
/**/		&&
/**/		v_left.timtype !== tt_multiply
/**/		&&
/**/		v_left.timtype !== tt_multiplyAssign
/**/		&&
/**/		v_left.timtype !== tt_negate
/**/		&&
/**/		v_left.timtype !== tt_new
/**/		&&
/**/		v_left.timtype !== tt_not
/**/		&&
/**/		v_left.timtype !== tt_null
/**/		&&
/**/		v_left.timtype !== tt_number
/**/		&&
/**/		v_left.timtype !== tt_objLiteral
/**/		&&
/**/		v_left.timtype !== tt_or
/**/		&&
/**/		v_left.timtype !== tt_plus
/**/		&&
/**/		v_left.timtype !== tt_plusAssign
/**/		&&
/**/		v_left.timtype !== tt_postDecrement
/**/		&&
/**/		v_left.timtype !== tt_postIncrement
/**/		&&
/**/		v_left.timtype !== tt_preDecrement
/**/		&&
/**/		v_left.timtype !== tt_preIncrement
/**/		&&
/**/		v_left.timtype !== tt_string
/**/		&&
/**/		v_left.timtype !== tt_typeof
/**/		&&
/**/		v_left.timtype !== tt_var
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_right === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_right === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_right.timtype !== tt_and
/**/		&&
/**/		v_right.timtype !== tt_arrayLiteral
/**/		&&
/**/		v_right.timtype !== tt_assign
/**/		&&
/**/		v_right.timtype !== tt_boolean
/**/		&&
/**/		v_right.timtype !== tt_call
/**/		&&
/**/		v_right.timtype !== tt_comma
/**/		&&
/**/		v_right.timtype !== tt_condition
/**/		&&
/**/		v_right.timtype !== tt_delete
/**/		&&
/**/		v_right.timtype !== tt_differs
/**/		&&
/**/		v_right.timtype !== tt_divide
/**/		&&
/**/		v_right.timtype !== tt_divideAssign
/**/		&&
/**/		v_right.timtype !== tt_dot
/**/		&&
/**/		v_right.timtype !== tt_equals
/**/		&&
/**/		v_right.timtype !== tt_func
/**/		&&
/**/		v_right.timtype !== tt_greaterThan
/**/		&&
/**/		v_right.timtype !== tt_instanceof
/**/		&&
/**/		v_right.timtype !== tt_lessThan
/**/		&&
/**/		v_right.timtype !== tt_member
/**/		&&
/**/		v_right.timtype !== tt_minus
/**/		&&
/**/		v_right.timtype !== tt_minusAssign
/**/		&&
/**/		v_right.timtype !== tt_multiply
/**/		&&
/**/		v_right.timtype !== tt_multiplyAssign
/**/		&&
/**/		v_right.timtype !== tt_negate
/**/		&&
/**/		v_right.timtype !== tt_new
/**/		&&
/**/		v_right.timtype !== tt_not
/**/		&&
/**/		v_right.timtype !== tt_null
/**/		&&
/**/		v_right.timtype !== tt_number
/**/		&&
/**/		v_right.timtype !== tt_objLiteral
/**/		&&
/**/		v_right.timtype !== tt_or
/**/		&&
/**/		v_right.timtype !== tt_plus
/**/		&&
/**/		v_right.timtype !== tt_plusAssign
/**/		&&
/**/		v_right.timtype !== tt_postDecrement
/**/		&&
/**/		v_right.timtype !== tt_postIncrement
/**/		&&
/**/		v_right.timtype !== tt_preDecrement
/**/		&&
/**/		v_right.timtype !== tt_preIncrement
/**/		&&
/**/		v_right.timtype !== tt_string
/**/		&&
/**/		v_right.timtype !== tt_typeof
/**/		&&
/**/		v_right.timtype !== tt_var
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_left === inherit.left
			||
			v_left.equals( inherit.left )
		)
		&&
		(
			v_right === inherit.right
			||
			v_right.equals( inherit.right )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_left, v_right );
};


/*
| Type reflection.
*/
prototype.timtype = ast_assign;


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

	if( obj.timtype !== ast_assign )
	{
		return false;
	}

	return (
		(
			this.left === obj.left
			||
			this.left.equals( obj.left )
		)
		&&
		(
			this.right === obj.right
			||
			this.right.equals( obj.right )
		)
	);
};


}
)( );
