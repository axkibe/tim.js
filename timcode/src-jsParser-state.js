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


let ast_and = require( '../ast/and' );


let ast_arrayLiteral = require( '../ast/arrayLiteral' );


let ast_assign = require( '../ast/assign' );


let ast_block = require( '../ast/block' );


let ast_boolean = require( '../ast/boolean' );


let ast_call = require( '../ast/call' );


let ast_check = require( '../ast/check' );


let ast_comma = require( '../ast/comma' );


let ast_comment = require( '../ast/comment' );


let ast_condition = require( '../ast/condition' );


let ast_const = require( '../ast/const' );


let ast_continue = require( '../ast/continue' );


let ast_delete = require( '../ast/delete' );


let ast_differs = require( '../ast/differs' );


let ast_divide = require( '../ast/divide' );


let ast_divideAssign = require( '../ast/divideAssign' );


let ast_dot = require( '../ast/dot' );


let ast_equals = require( '../ast/equals' );


let ast_fail = require( '../ast/fail' );


let ast_for = require( '../ast/for' );


let ast_forIn = require( '../ast/forIn' );


let ast_func = require( '../ast/func' );


let ast_greaterThan = require( '../ast/greaterThan' );


let ast_if = require( '../ast/if' );


let ast_instanceof = require( '../ast/instanceof' );


let ast_lessThan = require( '../ast/lessThan' );


let ast_let = require( '../ast/let' );


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


let ast_return = require( '../ast/return' );


let ast_string = require( '../ast/string' );


let ast_switch = require( '../ast/switch' );


let ast_typeof = require( '../ast/typeof' );


let ast_var = require( '../ast/var' );


let ast_varDec = require( '../ast/varDec' );


let jsParser_tokenList = require( '../jsParser/tokenList' );


let tim_proto = tim.proto;


/*
| Constructor.
*/
var
	Constructor,
	prototype;


Constructor =
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
prototype = Constructor.prototype;


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
	var
		a,
		aZ,
		arg,
		inherit,
		v_ast,
		v_pos,
		v_tokens;

	if( this !== jsParser_state )
	{
		inherit = this;

		v_ast = this.ast;

		v_pos = this.pos;

		v_tokens = this.tokens;
	}

	for(
		a = 0, aZ = arguments.length;
		a < aZ;
		a += 2
	)
	{
		arg = arguments[ a + 1 ];

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
