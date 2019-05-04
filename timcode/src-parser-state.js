'use strict';


/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
const tt_$_ast_block = require( './../ast/block' );


const tt_$_ast_break = require( './../ast/break' );


const tt_$_ast_check = require( './../ast/check' );


const tt_$_ast_comment = require( './../ast/comment' );


const tt_$_ast_continue = require( './../ast/continue' );


const tt_$_ast_for = require( './../ast/for' );


const tt_$_ast_forIn = require( './../ast/forIn' );


const tt_$_ast_forOf = require( './../ast/forOf' );


const tt_$_ast_if = require( './../ast/if' );


const tt_$_ast_let = require( './../ast/let' );


const tt_$_ast_return = require( './../ast/return' );


const tt_$_ast_switch = require( './../ast/switch' );


const tt_$_ast_throw = require( './../ast/throw' );


const tt_$_ast_varDec = require( './../ast/varDec' );


const tt_$_ast_while = require( './../ast/while' );


const tt_$_ast_and = require( './../ast/and' );


const tt_$_ast_arrayLiteral = require( './../ast/arrayLiteral' );


const tt_$_ast_assign = require( './../ast/assign' );


const tt_$_ast_boolean = require( './../ast/boolean' );


const tt_$_ast_call = require( './../ast/call' );


const tt_$_ast_comma = require( './../ast/comma' );


const tt_$_ast_condition = require( './../ast/condition' );


const tt_$_ast_delete = require( './../ast/delete' );


const tt_$_ast_differs = require( './../ast/differs' );


const tt_$_ast_divide = require( './../ast/divide' );


const tt_$_ast_divideAssign = require( './../ast/divideAssign' );


const tt_$_ast_dot = require( './../ast/dot' );


const tt_$_ast_equals = require( './../ast/equals' );


const tt_$_ast_func = require( './../ast/func' );


const tt_$_ast_generator = require( './../ast/generator' );


const tt_$_ast_greaterOrEqual = require( './../ast/greaterOrEqual' );


const tt_$_ast_greaterThan = require( './../ast/greaterThan' );


const tt_$_ast_instanceof = require( './../ast/instanceof' );


const tt_$_ast_lessOrEqual = require( './../ast/lessOrEqual' );


const tt_$_ast_lessThan = require( './../ast/lessThan' );


const tt_$_ast_member = require( './../ast/member' );


const tt_$_ast_minus = require( './../ast/minus' );


const tt_$_ast_minusAssign = require( './../ast/minusAssign' );


const tt_$_ast_multiply = require( './../ast/multiply' );


const tt_$_ast_multiplyAssign = require( './../ast/multiplyAssign' );


const tt_$_ast_negate = require( './../ast/negate' );


const tt_$_ast_new = require( './../ast/new' );


const tt_$_ast_not = require( './../ast/not' );


const tt_$_ast_null = require( './../ast/null' );


const tt_$_ast_number = require( './../ast/number' );


const tt_$_ast_objLiteral = require( './../ast/objLiteral' );


const tt_$_ast_or = require( './../ast/or' );


const tt_$_ast_plus = require( './../ast/plus' );


const tt_$_ast_plusAssign = require( './../ast/plusAssign' );


const tt_$_ast_postDecrement = require( './../ast/postDecrement' );


const tt_$_ast_postIncrement = require( './../ast/postIncrement' );


const tt_$_ast_preDecrement = require( './../ast/preDecrement' );


const tt_$_ast_preIncrement = require( './../ast/preIncrement' );


const tt_$_ast_string = require( './../ast/string' );


const tt_$_ast_typeof = require( './../ast/typeof' );


const tt_$_ast_undefined = require( './../ast/undefined' );


const tt_$_ast_var = require( './../ast/var' );


const tt_$_ast_yield = require( './../ast/yield' );


const tt_tokenList = require( './tokenList' );


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
	this.__lazy = { };

	this.ast = v_ast;

	this.pos = v_pos;

	this.tokens = v_tokens;

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

	let v_ast;

	let v_pos;

	let v_tokens;

	if( this !== self )
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
/**/	if(
/**/		v_ast !== undefined
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_block
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_break
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_check
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_comment
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_continue
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_for
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_forIn
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_forOf
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_if
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_let
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_return
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_switch
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_throw
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_varDec
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_while
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_and
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_arrayLiteral
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_assign
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_boolean
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_call
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_comma
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_condition
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_delete
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_differs
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_divide
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_divideAssign
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_dot
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_equals
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_func
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_generator
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_greaterOrEqual
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_greaterThan
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_instanceof
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_lessOrEqual
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_lessThan
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_member
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_minus
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_minusAssign
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_multiply
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_multiplyAssign
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_negate
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_new
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_not
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_null
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_number
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_objLiteral
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_or
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_plus
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_plusAssign
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_postDecrement
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_postIncrement
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_preDecrement
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_preIncrement
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_string
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_typeof
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_undefined
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_var
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_yield
/**/	)
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
/**/	if( v_tokens.timtype !== tt_tokenList )
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
			v_ast !== undefined && v_ast.timtype && v_ast.equals( inherit.ast )
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
			this.ast === obj.ast
			||
			this.ast !== undefined && this.ast.timtype && this.ast.equals( obj.ast )
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
