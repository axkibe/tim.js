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


const ast_equals = require( '../ast/equals' );


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
	let inherit;

	let v_message;

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

	if( obj.timtype !== ast_fail )
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
