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
let ast_for = NODE ? module.exports : module;


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


const ast_let = require( '../ast/let' );


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


const tt_block = require( './block' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_block,
		v_condition,
		v_init,
		v_iterate
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.block = v_block;

	this.condition = v_condition;

	this.init = v_init;

	this.iterate = v_iterate;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
const prototype = Constructor.prototype;


ast_for.prototype = prototype;


/*
| Creates a new for object.
*/
ast_for.create =
prototype.create =
	function(
		// free strings
	)
{
	let inherit;

	let v_block;

	let v_condition;

	let v_init;

	let v_iterate;

	if( this !== ast_for )
	{
		inherit = this;

		v_block = this.block;

		v_condition = this.condition;

		v_init = this.init;

		v_iterate = this.iterate;
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

			case 'init' :

				if( arg !== pass )
				{
					v_init = arg;
				}

				break;

			case 'iterate' :

				if( arg !== pass )
				{
					v_iterate = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_block === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_block === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_block.timtype !== tt_block )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
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
/**/		v_condition.timtype !== tt_var
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_init === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_init === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_init.timtype !== ast_and
/**/		&&
/**/		v_init.timtype !== ast_arrayLiteral
/**/		&&
/**/		v_init.timtype !== ast_assign
/**/		&&
/**/		v_init.timtype !== ast_boolean
/**/		&&
/**/		v_init.timtype !== ast_call
/**/		&&
/**/		v_init.timtype !== ast_comma
/**/		&&
/**/		v_init.timtype !== ast_condition
/**/		&&
/**/		v_init.timtype !== ast_delete
/**/		&&
/**/		v_init.timtype !== ast_differs
/**/		&&
/**/		v_init.timtype !== ast_divide
/**/		&&
/**/		v_init.timtype !== ast_divideAssign
/**/		&&
/**/		v_init.timtype !== ast_dot
/**/		&&
/**/		v_init.timtype !== ast_equals
/**/		&&
/**/		v_init.timtype !== ast_func
/**/		&&
/**/		v_init.timtype !== ast_greaterThan
/**/		&&
/**/		v_init.timtype !== ast_instanceof
/**/		&&
/**/		v_init.timtype !== ast_lessThan
/**/		&&
/**/		v_init.timtype !== ast_member
/**/		&&
/**/		v_init.timtype !== ast_minus
/**/		&&
/**/		v_init.timtype !== ast_minusAssign
/**/		&&
/**/		v_init.timtype !== ast_multiply
/**/		&&
/**/		v_init.timtype !== ast_multiplyAssign
/**/		&&
/**/		v_init.timtype !== ast_negate
/**/		&&
/**/		v_init.timtype !== ast_new
/**/		&&
/**/		v_init.timtype !== ast_not
/**/		&&
/**/		v_init.timtype !== ast_null
/**/		&&
/**/		v_init.timtype !== ast_number
/**/		&&
/**/		v_init.timtype !== ast_objLiteral
/**/		&&
/**/		v_init.timtype !== ast_or
/**/		&&
/**/		v_init.timtype !== ast_plus
/**/		&&
/**/		v_init.timtype !== ast_plusAssign
/**/		&&
/**/		v_init.timtype !== ast_postDecrement
/**/		&&
/**/		v_init.timtype !== ast_postIncrement
/**/		&&
/**/		v_init.timtype !== ast_preDecrement
/**/		&&
/**/		v_init.timtype !== ast_preIncrement
/**/		&&
/**/		v_init.timtype !== ast_string
/**/		&&
/**/		v_init.timtype !== ast_typeof
/**/		&&
/**/		v_init.timtype !== ast_var
/**/		&&
/**/		v_init.timtype !== ast_let
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_iterate === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_iterate === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_iterate.timtype !== tt_and
/**/		&&
/**/		v_iterate.timtype !== tt_arrayLiteral
/**/		&&
/**/		v_iterate.timtype !== tt_assign
/**/		&&
/**/		v_iterate.timtype !== tt_boolean
/**/		&&
/**/		v_iterate.timtype !== tt_call
/**/		&&
/**/		v_iterate.timtype !== tt_comma
/**/		&&
/**/		v_iterate.timtype !== tt_condition
/**/		&&
/**/		v_iterate.timtype !== tt_delete
/**/		&&
/**/		v_iterate.timtype !== tt_differs
/**/		&&
/**/		v_iterate.timtype !== tt_divide
/**/		&&
/**/		v_iterate.timtype !== tt_divideAssign
/**/		&&
/**/		v_iterate.timtype !== tt_dot
/**/		&&
/**/		v_iterate.timtype !== tt_equals
/**/		&&
/**/		v_iterate.timtype !== tt_func
/**/		&&
/**/		v_iterate.timtype !== tt_greaterThan
/**/		&&
/**/		v_iterate.timtype !== tt_instanceof
/**/		&&
/**/		v_iterate.timtype !== tt_lessThan
/**/		&&
/**/		v_iterate.timtype !== tt_member
/**/		&&
/**/		v_iterate.timtype !== tt_minus
/**/		&&
/**/		v_iterate.timtype !== tt_minusAssign
/**/		&&
/**/		v_iterate.timtype !== tt_multiply
/**/		&&
/**/		v_iterate.timtype !== tt_multiplyAssign
/**/		&&
/**/		v_iterate.timtype !== tt_negate
/**/		&&
/**/		v_iterate.timtype !== tt_new
/**/		&&
/**/		v_iterate.timtype !== tt_not
/**/		&&
/**/		v_iterate.timtype !== tt_null
/**/		&&
/**/		v_iterate.timtype !== tt_number
/**/		&&
/**/		v_iterate.timtype !== tt_objLiteral
/**/		&&
/**/		v_iterate.timtype !== tt_or
/**/		&&
/**/		v_iterate.timtype !== tt_plus
/**/		&&
/**/		v_iterate.timtype !== tt_plusAssign
/**/		&&
/**/		v_iterate.timtype !== tt_postDecrement
/**/		&&
/**/		v_iterate.timtype !== tt_postIncrement
/**/		&&
/**/		v_iterate.timtype !== tt_preDecrement
/**/		&&
/**/		v_iterate.timtype !== tt_preIncrement
/**/		&&
/**/		v_iterate.timtype !== tt_string
/**/		&&
/**/		v_iterate.timtype !== tt_typeof
/**/		&&
/**/		v_iterate.timtype !== tt_var
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
		&&
		(
			v_init === inherit.init
			||
			v_init.equals( inherit.init )
		)
		&&
		(
			v_iterate === inherit.iterate
			||
			v_iterate.equals( inherit.iterate )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_block, v_condition, v_init, v_iterate );
};


/*
| Type reflection.
*/
prototype.timtype = ast_for;


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

	if( obj.timtype !== ast_for )
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
		&&
		(
			this.init === obj.init
			||
			this.init.equals( obj.init )
		)
		&&
		(
			this.iterate === obj.iterate
			||
			this.iterate.equals( obj.iterate )
		)
	);
};


}
)( );
