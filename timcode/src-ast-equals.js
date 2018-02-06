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
let ast_equals = NODE ? module.exports : module;


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


ast_equals.prototype = prototype;


/*
| Creates a new equals object.
*/
ast_equals.create =
prototype.create =
	function(
		// free strings
	)
{
	var
		inherit,
		v_left,
		v_right;

	if( this !== ast_equals )
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
/**/		v_left.timtype !== ast_and
/**/		&&
/**/		v_left.timtype !== ast_arrayLiteral
/**/		&&
/**/		v_left.timtype !== ast_assign
/**/		&&
/**/		v_left.timtype !== ast_boolean
/**/		&&
/**/		v_left.timtype !== ast_call
/**/		&&
/**/		v_left.timtype !== ast_comma
/**/		&&
/**/		v_left.timtype !== ast_condition
/**/		&&
/**/		v_left.timtype !== ast_delete
/**/		&&
/**/		v_left.timtype !== ast_differs
/**/		&&
/**/		v_left.timtype !== ast_divide
/**/		&&
/**/		v_left.timtype !== ast_divideAssign
/**/		&&
/**/		v_left.timtype !== ast_dot
/**/		&&
/**/		v_left.timtype !== ast_equals
/**/		&&
/**/		v_left.timtype !== ast_func
/**/		&&
/**/		v_left.timtype !== ast_greaterThan
/**/		&&
/**/		v_left.timtype !== ast_instanceof
/**/		&&
/**/		v_left.timtype !== ast_lessThan
/**/		&&
/**/		v_left.timtype !== ast_member
/**/		&&
/**/		v_left.timtype !== ast_minus
/**/		&&
/**/		v_left.timtype !== ast_minusAssign
/**/		&&
/**/		v_left.timtype !== ast_multiply
/**/		&&
/**/		v_left.timtype !== ast_multiplyAssign
/**/		&&
/**/		v_left.timtype !== ast_negate
/**/		&&
/**/		v_left.timtype !== ast_new
/**/		&&
/**/		v_left.timtype !== ast_not
/**/		&&
/**/		v_left.timtype !== ast_null
/**/		&&
/**/		v_left.timtype !== ast_number
/**/		&&
/**/		v_left.timtype !== ast_objLiteral
/**/		&&
/**/		v_left.timtype !== ast_or
/**/		&&
/**/		v_left.timtype !== ast_plus
/**/		&&
/**/		v_left.timtype !== ast_plusAssign
/**/		&&
/**/		v_left.timtype !== ast_postDecrement
/**/		&&
/**/		v_left.timtype !== ast_postIncrement
/**/		&&
/**/		v_left.timtype !== ast_preDecrement
/**/		&&
/**/		v_left.timtype !== ast_preIncrement
/**/		&&
/**/		v_left.timtype !== ast_string
/**/		&&
/**/		v_left.timtype !== ast_typeof
/**/		&&
/**/		v_left.timtype !== ast_var
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
/**/		v_right.timtype !== ast_and
/**/		&&
/**/		v_right.timtype !== ast_arrayLiteral
/**/		&&
/**/		v_right.timtype !== ast_assign
/**/		&&
/**/		v_right.timtype !== ast_boolean
/**/		&&
/**/		v_right.timtype !== ast_call
/**/		&&
/**/		v_right.timtype !== ast_comma
/**/		&&
/**/		v_right.timtype !== ast_condition
/**/		&&
/**/		v_right.timtype !== ast_delete
/**/		&&
/**/		v_right.timtype !== ast_differs
/**/		&&
/**/		v_right.timtype !== ast_divide
/**/		&&
/**/		v_right.timtype !== ast_divideAssign
/**/		&&
/**/		v_right.timtype !== ast_dot
/**/		&&
/**/		v_right.timtype !== ast_equals
/**/		&&
/**/		v_right.timtype !== ast_func
/**/		&&
/**/		v_right.timtype !== ast_greaterThan
/**/		&&
/**/		v_right.timtype !== ast_instanceof
/**/		&&
/**/		v_right.timtype !== ast_lessThan
/**/		&&
/**/		v_right.timtype !== ast_member
/**/		&&
/**/		v_right.timtype !== ast_minus
/**/		&&
/**/		v_right.timtype !== ast_minusAssign
/**/		&&
/**/		v_right.timtype !== ast_multiply
/**/		&&
/**/		v_right.timtype !== ast_multiplyAssign
/**/		&&
/**/		v_right.timtype !== ast_negate
/**/		&&
/**/		v_right.timtype !== ast_new
/**/		&&
/**/		v_right.timtype !== ast_not
/**/		&&
/**/		v_right.timtype !== ast_null
/**/		&&
/**/		v_right.timtype !== ast_number
/**/		&&
/**/		v_right.timtype !== ast_objLiteral
/**/		&&
/**/		v_right.timtype !== ast_or
/**/		&&
/**/		v_right.timtype !== ast_plus
/**/		&&
/**/		v_right.timtype !== ast_plusAssign
/**/		&&
/**/		v_right.timtype !== ast_postDecrement
/**/		&&
/**/		v_right.timtype !== ast_postIncrement
/**/		&&
/**/		v_right.timtype !== ast_preDecrement
/**/		&&
/**/		v_right.timtype !== ast_preIncrement
/**/		&&
/**/		v_right.timtype !== ast_string
/**/		&&
/**/		v_right.timtype !== ast_typeof
/**/		&&
/**/		v_right.timtype !== ast_var
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
| Reflection.
*/
prototype.reflect = 'ast_equals';


/*
| Type reflection.
*/
prototype.timtype = ast_equals;


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

	if( obj.reflect !== 'ast_equals' )
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
