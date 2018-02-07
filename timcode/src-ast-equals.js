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


const ast_and = require( '../ast/and' );


const ast_arrayLiteral = require( '../ast/arrayLiteral' );


const ast_assign = require( '../ast/assign' );


const ast_boolean = require( '../ast/boolean' );


const ast_call = require( '../ast/call' );


const ast_comma = require( '../ast/comma' );


const ast_condition = require( '../ast/condition' );


const ast_delete = require( '../ast/delete' );


const ast_differs = require( '../ast/differs' );


const ast_divide = require( '../ast/divide' );


const ast_divideAssign = require( '../ast/divideAssign' );


const ast_dot = require( '../ast/dot' );


const ast_func = require( '../ast/func' );


const ast_greaterThan = require( '../ast/greaterThan' );


const ast_instanceof = require( '../ast/instanceof' );


const ast_lessThan = require( '../ast/lessThan' );


const ast_member = require( '../ast/member' );


const ast_minus = require( '../ast/minus' );


const ast_minusAssign = require( '../ast/minusAssign' );


const ast_multiply = require( '../ast/multiply' );


const ast_multiplyAssign = require( '../ast/multiplyAssign' );


const ast_negate = require( '../ast/negate' );


const ast_new = require( '../ast/new' );


const ast_not = require( '../ast/not' );


const ast_null = require( '../ast/null' );


const ast_number = require( '../ast/number' );


const ast_objLiteral = require( '../ast/objLiteral' );


const ast_or = require( '../ast/or' );


const ast_plus = require( '../ast/plus' );


const ast_plusAssign = require( '../ast/plusAssign' );


const ast_postDecrement = require( '../ast/postDecrement' );


const ast_postIncrement = require( '../ast/postIncrement' );


const ast_preDecrement = require( '../ast/preDecrement' );


const ast_preIncrement = require( '../ast/preIncrement' );


const ast_string = require( '../ast/string' );


const ast_typeof = require( '../ast/typeof' );


const ast_var = require( '../ast/var' );


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
	let inherit;

	let v_left;

	let v_right;

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
