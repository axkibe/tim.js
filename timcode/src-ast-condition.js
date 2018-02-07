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
let ast_condition = NODE ? module.exports : module;


const ast_and = require( '../ast/and' );


const ast_arrayLiteral = require( '../ast/arrayLiteral' );


const ast_assign = require( '../ast/assign' );


const ast_boolean = require( '../ast/boolean' );


const ast_call = require( '../ast/call' );


const ast_comma = require( '../ast/comma' );


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
		v_condition,
		v_elsewise,
		v_then
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

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


ast_condition.prototype = prototype;


/*
| Creates a new condition object.
*/
ast_condition.create =
prototype.create =
	function(
		// free strings
	)
{
	let inherit;

	let v_condition;

	let v_elsewise;

	let v_then;

	if( this !== ast_condition )
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
/**/	if( v_condition === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_condition === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_condition.timtype !== ast_and
/**/		&&
/**/		v_condition.timtype !== ast_arrayLiteral
/**/		&&
/**/		v_condition.timtype !== ast_assign
/**/		&&
/**/		v_condition.timtype !== ast_boolean
/**/		&&
/**/		v_condition.timtype !== ast_call
/**/		&&
/**/		v_condition.timtype !== ast_comma
/**/		&&
/**/		v_condition.timtype !== ast_condition
/**/		&&
/**/		v_condition.timtype !== ast_delete
/**/		&&
/**/		v_condition.timtype !== ast_differs
/**/		&&
/**/		v_condition.timtype !== ast_divide
/**/		&&
/**/		v_condition.timtype !== ast_divideAssign
/**/		&&
/**/		v_condition.timtype !== ast_dot
/**/		&&
/**/		v_condition.timtype !== ast_equals
/**/		&&
/**/		v_condition.timtype !== ast_func
/**/		&&
/**/		v_condition.timtype !== ast_greaterThan
/**/		&&
/**/		v_condition.timtype !== ast_instanceof
/**/		&&
/**/		v_condition.timtype !== ast_lessThan
/**/		&&
/**/		v_condition.timtype !== ast_member
/**/		&&
/**/		v_condition.timtype !== ast_minus
/**/		&&
/**/		v_condition.timtype !== ast_minusAssign
/**/		&&
/**/		v_condition.timtype !== ast_multiply
/**/		&&
/**/		v_condition.timtype !== ast_multiplyAssign
/**/		&&
/**/		v_condition.timtype !== ast_negate
/**/		&&
/**/		v_condition.timtype !== ast_new
/**/		&&
/**/		v_condition.timtype !== ast_not
/**/		&&
/**/		v_condition.timtype !== ast_null
/**/		&&
/**/		v_condition.timtype !== ast_number
/**/		&&
/**/		v_condition.timtype !== ast_objLiteral
/**/		&&
/**/		v_condition.timtype !== ast_or
/**/		&&
/**/		v_condition.timtype !== ast_plus
/**/		&&
/**/		v_condition.timtype !== ast_plusAssign
/**/		&&
/**/		v_condition.timtype !== ast_postDecrement
/**/		&&
/**/		v_condition.timtype !== ast_postIncrement
/**/		&&
/**/		v_condition.timtype !== ast_preDecrement
/**/		&&
/**/		v_condition.timtype !== ast_preIncrement
/**/		&&
/**/		v_condition.timtype !== ast_string
/**/		&&
/**/		v_condition.timtype !== ast_typeof
/**/		&&
/**/		v_condition.timtype !== ast_var
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_elsewise === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_elsewise === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_elsewise.timtype !== ast_and
/**/		&&
/**/		v_elsewise.timtype !== ast_arrayLiteral
/**/		&&
/**/		v_elsewise.timtype !== ast_assign
/**/		&&
/**/		v_elsewise.timtype !== ast_boolean
/**/		&&
/**/		v_elsewise.timtype !== ast_call
/**/		&&
/**/		v_elsewise.timtype !== ast_comma
/**/		&&
/**/		v_elsewise.timtype !== ast_condition
/**/		&&
/**/		v_elsewise.timtype !== ast_delete
/**/		&&
/**/		v_elsewise.timtype !== ast_differs
/**/		&&
/**/		v_elsewise.timtype !== ast_divide
/**/		&&
/**/		v_elsewise.timtype !== ast_divideAssign
/**/		&&
/**/		v_elsewise.timtype !== ast_dot
/**/		&&
/**/		v_elsewise.timtype !== ast_equals
/**/		&&
/**/		v_elsewise.timtype !== ast_func
/**/		&&
/**/		v_elsewise.timtype !== ast_greaterThan
/**/		&&
/**/		v_elsewise.timtype !== ast_instanceof
/**/		&&
/**/		v_elsewise.timtype !== ast_lessThan
/**/		&&
/**/		v_elsewise.timtype !== ast_member
/**/		&&
/**/		v_elsewise.timtype !== ast_minus
/**/		&&
/**/		v_elsewise.timtype !== ast_minusAssign
/**/		&&
/**/		v_elsewise.timtype !== ast_multiply
/**/		&&
/**/		v_elsewise.timtype !== ast_multiplyAssign
/**/		&&
/**/		v_elsewise.timtype !== ast_negate
/**/		&&
/**/		v_elsewise.timtype !== ast_new
/**/		&&
/**/		v_elsewise.timtype !== ast_not
/**/		&&
/**/		v_elsewise.timtype !== ast_null
/**/		&&
/**/		v_elsewise.timtype !== ast_number
/**/		&&
/**/		v_elsewise.timtype !== ast_objLiteral
/**/		&&
/**/		v_elsewise.timtype !== ast_or
/**/		&&
/**/		v_elsewise.timtype !== ast_plus
/**/		&&
/**/		v_elsewise.timtype !== ast_plusAssign
/**/		&&
/**/		v_elsewise.timtype !== ast_postDecrement
/**/		&&
/**/		v_elsewise.timtype !== ast_postIncrement
/**/		&&
/**/		v_elsewise.timtype !== ast_preDecrement
/**/		&&
/**/		v_elsewise.timtype !== ast_preIncrement
/**/		&&
/**/		v_elsewise.timtype !== ast_string
/**/		&&
/**/		v_elsewise.timtype !== ast_typeof
/**/		&&
/**/		v_elsewise.timtype !== ast_var
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_then === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_then === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_then.timtype !== ast_and
/**/		&&
/**/		v_then.timtype !== ast_arrayLiteral
/**/		&&
/**/		v_then.timtype !== ast_assign
/**/		&&
/**/		v_then.timtype !== ast_boolean
/**/		&&
/**/		v_then.timtype !== ast_call
/**/		&&
/**/		v_then.timtype !== ast_comma
/**/		&&
/**/		v_then.timtype !== ast_condition
/**/		&&
/**/		v_then.timtype !== ast_delete
/**/		&&
/**/		v_then.timtype !== ast_differs
/**/		&&
/**/		v_then.timtype !== ast_divide
/**/		&&
/**/		v_then.timtype !== ast_divideAssign
/**/		&&
/**/		v_then.timtype !== ast_dot
/**/		&&
/**/		v_then.timtype !== ast_equals
/**/		&&
/**/		v_then.timtype !== ast_func
/**/		&&
/**/		v_then.timtype !== ast_greaterThan
/**/		&&
/**/		v_then.timtype !== ast_instanceof
/**/		&&
/**/		v_then.timtype !== ast_lessThan
/**/		&&
/**/		v_then.timtype !== ast_member
/**/		&&
/**/		v_then.timtype !== ast_minus
/**/		&&
/**/		v_then.timtype !== ast_minusAssign
/**/		&&
/**/		v_then.timtype !== ast_multiply
/**/		&&
/**/		v_then.timtype !== ast_multiplyAssign
/**/		&&
/**/		v_then.timtype !== ast_negate
/**/		&&
/**/		v_then.timtype !== ast_new
/**/		&&
/**/		v_then.timtype !== ast_not
/**/		&&
/**/		v_then.timtype !== ast_null
/**/		&&
/**/		v_then.timtype !== ast_number
/**/		&&
/**/		v_then.timtype !== ast_objLiteral
/**/		&&
/**/		v_then.timtype !== ast_or
/**/		&&
/**/		v_then.timtype !== ast_plus
/**/		&&
/**/		v_then.timtype !== ast_plusAssign
/**/		&&
/**/		v_then.timtype !== ast_postDecrement
/**/		&&
/**/		v_then.timtype !== ast_postIncrement
/**/		&&
/**/		v_then.timtype !== ast_preDecrement
/**/		&&
/**/		v_then.timtype !== ast_preIncrement
/**/		&&
/**/		v_then.timtype !== ast_string
/**/		&&
/**/		v_then.timtype !== ast_typeof
/**/		&&
/**/		v_then.timtype !== ast_var
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
| Reflection.
*/
prototype.reflect = 'ast_condition';


/*
| Type reflection.
*/
prototype.timtype = ast_condition;


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

	if( obj.reflect !== 'ast_condition' )
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


}
)( );
