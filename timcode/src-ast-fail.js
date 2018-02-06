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
let ast_fail = NODE ? module.exports : module;


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
		v_message
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.message = v_message;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
const prototype = Constructor.prototype;


ast_fail.prototype = prototype;


/*
| Creates a new fail object.
*/
ast_fail.create =
prototype.create =
	function(
		// free strings
	)
{
	var
		inherit,
		v_message;

	if( this !== ast_fail )
	{
		inherit = this;

		v_message = this.message;
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
			case 'message' :

				if( arg !== pass )
				{
					v_message = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_message === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_message !== undefined )
/**/	{
/**/		if(
/**/			v_message.timtype !== ast_and
/**/			&&
/**/			v_message.timtype !== ast_arrayLiteral
/**/			&&
/**/			v_message.timtype !== ast_assign
/**/			&&
/**/			v_message.timtype !== ast_boolean
/**/			&&
/**/			v_message.timtype !== ast_call
/**/			&&
/**/			v_message.timtype !== ast_comma
/**/			&&
/**/			v_message.timtype !== ast_condition
/**/			&&
/**/			v_message.timtype !== ast_delete
/**/			&&
/**/			v_message.timtype !== ast_differs
/**/			&&
/**/			v_message.timtype !== ast_divide
/**/			&&
/**/			v_message.timtype !== ast_divideAssign
/**/			&&
/**/			v_message.timtype !== ast_dot
/**/			&&
/**/			v_message.timtype !== ast_equals
/**/			&&
/**/			v_message.timtype !== ast_func
/**/			&&
/**/			v_message.timtype !== ast_greaterThan
/**/			&&
/**/			v_message.timtype !== ast_instanceof
/**/			&&
/**/			v_message.timtype !== ast_lessThan
/**/			&&
/**/			v_message.timtype !== ast_member
/**/			&&
/**/			v_message.timtype !== ast_minus
/**/			&&
/**/			v_message.timtype !== ast_minusAssign
/**/			&&
/**/			v_message.timtype !== ast_multiply
/**/			&&
/**/			v_message.timtype !== ast_multiplyAssign
/**/			&&
/**/			v_message.timtype !== ast_negate
/**/			&&
/**/			v_message.timtype !== ast_new
/**/			&&
/**/			v_message.timtype !== ast_not
/**/			&&
/**/			v_message.timtype !== ast_null
/**/			&&
/**/			v_message.timtype !== ast_number
/**/			&&
/**/			v_message.timtype !== ast_objLiteral
/**/			&&
/**/			v_message.timtype !== ast_or
/**/			&&
/**/			v_message.timtype !== ast_plus
/**/			&&
/**/			v_message.timtype !== ast_plusAssign
/**/			&&
/**/			v_message.timtype !== ast_postDecrement
/**/			&&
/**/			v_message.timtype !== ast_postIncrement
/**/			&&
/**/			v_message.timtype !== ast_preDecrement
/**/			&&
/**/			v_message.timtype !== ast_preIncrement
/**/			&&
/**/			v_message.timtype !== ast_string
/**/			&&
/**/			v_message.timtype !== ast_typeof
/**/			&&
/**/			v_message.timtype !== ast_var
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_message === inherit.message
			||
			v_message !== undefined && v_message.equals( inherit.message )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_message );
};


/*
| Reflection.
*/
prototype.reflect = 'ast_fail';


/*
| Type reflection.
*/
prototype.timtype = ast_fail;


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

	if( obj.reflect !== 'ast_fail' )
	{
		return false;
	}

	return (
		this.message === obj.message
		||
		this.message !== undefined && this.message.equals( obj.message )
	);
};


}
)( );
