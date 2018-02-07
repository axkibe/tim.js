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
let jsParser_state = NODE ? module.exports : module;


const ast_and = require( '../ast/and' );


const ast_arrayLiteral = require( '../ast/arrayLiteral' );


const ast_assign = require( '../ast/assign' );


const ast_block = require( '../ast/block' );


const ast_boolean = require( '../ast/boolean' );


const ast_call = require( '../ast/call' );


const ast_check = require( '../ast/check' );


const ast_comma = require( '../ast/comma' );


const ast_comment = require( '../ast/comment' );


const ast_condition = require( '../ast/condition' );


const ast_const = require( '../ast/const' );


const ast_continue = require( '../ast/continue' );


const ast_delete = require( '../ast/delete' );


const ast_differs = require( '../ast/differs' );


const ast_divide = require( '../ast/divide' );


const ast_divideAssign = require( '../ast/divideAssign' );


const ast_dot = require( '../ast/dot' );


const ast_equals = require( '../ast/equals' );


const ast_fail = require( '../ast/fail' );


const ast_for = require( '../ast/for' );


const ast_forIn = require( '../ast/forIn' );


const ast_func = require( '../ast/func' );


const ast_greaterThan = require( '../ast/greaterThan' );


const ast_if = require( '../ast/if' );


const ast_instanceof = require( '../ast/instanceof' );


const ast_lessThan = require( '../ast/lessThan' );


const ast_let = require( '../ast/let' );


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


const ast_return = require( '../ast/return' );


const ast_string = require( '../ast/string' );


const ast_switch = require( '../ast/switch' );


const ast_typeof = require( '../ast/typeof' );


const ast_var = require( '../ast/var' );


const ast_varDec = require( '../ast/varDec' );


const jsParser_tokenList = require( '../jsParser/tokenList' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_ast,
		v_pos,
		v_tokens
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.ast = v_ast;

	this.pos = v_pos;

	this.tokens = v_tokens;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
const prototype = Constructor.prototype;


jsParser_state.prototype = prototype;


/*
| Creates a new state object.
*/
jsParser_state.create =
prototype.create =
	function(
		// free strings
	)
{
	let inherit;

	let v_ast;

	let v_pos;

	let v_tokens;

	if( this !== jsParser_state )
	{
		inherit = this;

		v_ast = this.ast;

		v_pos = this.pos;

		v_tokens = this.tokens;
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
			case 'ast' :

				if( arg !== pass )
				{
					v_ast = arg;
				}

				break;

			case 'pos' :

				if( arg !== pass )
				{
					v_pos = arg;
				}

				break;

			case 'tokens' :

				if( arg !== pass )
				{
					v_tokens = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_ast === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_ast !== undefined )
/**/	{
/**/		if(
/**/			v_ast.timtype !== ast_and
/**/			&&
/**/			v_ast.timtype !== ast_arrayLiteral
/**/			&&
/**/			v_ast.timtype !== ast_assign
/**/			&&
/**/			v_ast.timtype !== ast_block
/**/			&&
/**/			v_ast.timtype !== ast_boolean
/**/			&&
/**/			v_ast.timtype !== ast_call
/**/			&&
/**/			v_ast.timtype !== ast_check
/**/			&&
/**/			v_ast.timtype !== ast_comma
/**/			&&
/**/			v_ast.timtype !== ast_comment
/**/			&&
/**/			v_ast.timtype !== ast_condition
/**/			&&
/**/			v_ast.timtype !== ast_const
/**/			&&
/**/			v_ast.timtype !== ast_continue
/**/			&&
/**/			v_ast.timtype !== ast_delete
/**/			&&
/**/			v_ast.timtype !== ast_differs
/**/			&&
/**/			v_ast.timtype !== ast_divide
/**/			&&
/**/			v_ast.timtype !== ast_divideAssign
/**/			&&
/**/			v_ast.timtype !== ast_dot
/**/			&&
/**/			v_ast.timtype !== ast_equals
/**/			&&
/**/			v_ast.timtype !== ast_fail
/**/			&&
/**/			v_ast.timtype !== ast_for
/**/			&&
/**/			v_ast.timtype !== ast_forIn
/**/			&&
/**/			v_ast.timtype !== ast_func
/**/			&&
/**/			v_ast.timtype !== ast_greaterThan
/**/			&&
/**/			v_ast.timtype !== ast_if
/**/			&&
/**/			v_ast.timtype !== ast_instanceof
/**/			&&
/**/			v_ast.timtype !== ast_lessThan
/**/			&&
/**/			v_ast.timtype !== ast_let
/**/			&&
/**/			v_ast.timtype !== ast_member
/**/			&&
/**/			v_ast.timtype !== ast_minus
/**/			&&
/**/			v_ast.timtype !== ast_minusAssign
/**/			&&
/**/			v_ast.timtype !== ast_multiply
/**/			&&
/**/			v_ast.timtype !== ast_multiplyAssign
/**/			&&
/**/			v_ast.timtype !== ast_negate
/**/			&&
/**/			v_ast.timtype !== ast_new
/**/			&&
/**/			v_ast.timtype !== ast_not
/**/			&&
/**/			v_ast.timtype !== ast_null
/**/			&&
/**/			v_ast.timtype !== ast_number
/**/			&&
/**/			v_ast.timtype !== ast_objLiteral
/**/			&&
/**/			v_ast.timtype !== ast_or
/**/			&&
/**/			v_ast.timtype !== ast_plus
/**/			&&
/**/			v_ast.timtype !== ast_plusAssign
/**/			&&
/**/			v_ast.timtype !== ast_postDecrement
/**/			&&
/**/			v_ast.timtype !== ast_postIncrement
/**/			&&
/**/			v_ast.timtype !== ast_preDecrement
/**/			&&
/**/			v_ast.timtype !== ast_preIncrement
/**/			&&
/**/			v_ast.timtype !== ast_return
/**/			&&
/**/			v_ast.timtype !== ast_string
/**/			&&
/**/			v_ast.timtype !== ast_switch
/**/			&&
/**/			v_ast.timtype !== ast_typeof
/**/			&&
/**/			v_ast.timtype !== ast_var
/**/			&&
/**/			v_ast.timtype !== ast_varDec
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_pos === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_pos === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		typeof( v_pos ) !== 'number'
/**/		||
/**/		Number.isNaN( v_pos )
/**/		||
/**/		Math.floor( v_pos ) !== v_pos
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_tokens === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_tokens === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_tokens.timtype !== jsParser_tokenList )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_ast === inherit.ast
			||
			v_ast !== undefined && v_ast.equals( inherit.ast )
		)
		&&
		v_pos === inherit.pos
		&&
		(
			v_tokens === inherit.tokens
			||
			v_tokens.equals( inherit.tokens )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_ast, v_pos, v_tokens );
};


/*
| Reflection.
*/
prototype.reflect = 'jsParser_state';


/*
| Type reflection.
*/
prototype.timtype = jsParser_state;


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

	if( obj.reflect !== 'jsParser_state' )
	{
		return false;
	}

	return (
		(
			this.ast === obj.ast
			||
			this.ast !== undefined && this.ast.equals( obj.ast )
		)
		&&
		this.pos === obj.pos
		&&
		(
			this.tokens === obj.tokens
			||
			this.tokens.equals( obj.tokens )
		)
	);
};


}
)( );
