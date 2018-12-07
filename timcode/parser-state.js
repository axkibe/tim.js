/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
'use strict';


const tt_$_ast_block = require( './../ast/block.js' );


const tt_$_ast_break = require( './../ast/break.js' );


const tt_$_ast_check = require( './../ast/check.js' );


const tt_$_ast_comment = require( './../ast/comment.js' );


const tt_$_ast_const = require( './../ast/const.js' );


const tt_$_ast_continue = require( './../ast/continue.js' );


const tt_$_ast_fail = require( './../ast/fail.js' );


const tt_$_ast_for = require( './../ast/for.js' );


const tt_$_ast_forIn = require( './../ast/forIn.js' );


const tt_$_ast_if = require( './../ast/if.js' );


const tt_$_ast_let = require( './../ast/let.js' );


const tt_$_ast_return = require( './../ast/return.js' );


const tt_$_ast_switch = require( './../ast/switch.js' );


const tt_$_ast_varDec = require( './../ast/varDec.js' );


const tt_$_ast_while = require( './../ast/while.js' );


const tt_$_ast_and = require( './../ast/and.js' );


const tt_$_ast_arrayLiteral = require( './../ast/arrayLiteral.js' );


const tt_$_ast_assign = require( './../ast/assign.js' );


const tt_$_ast_boolean = require( './../ast/boolean.js' );


const tt_$_ast_call = require( './../ast/call.js' );


const tt_$_ast_comma = require( './../ast/comma.js' );


const tt_$_ast_condition = require( './../ast/condition.js' );


const tt_$_ast_delete = require( './../ast/delete.js' );


const tt_$_ast_differs = require( './../ast/differs.js' );


const tt_$_ast_divide = require( './../ast/divide.js' );


const tt_$_ast_divideAssign = require( './../ast/divideAssign.js' );


const tt_$_ast_dot = require( './../ast/dot.js' );


const tt_$_ast_equals = require( './../ast/equals.js' );


const tt_$_ast_func = require( './../ast/func.js' );


const tt_$_ast_greaterThan = require( './../ast/greaterThan.js' );


const tt_$_ast_instanceof = require( './../ast/instanceof.js' );


const tt_$_ast_lessThan = require( './../ast/lessThan.js' );


const tt_$_ast_member = require( './../ast/member.js' );


const tt_$_ast_minus = require( './../ast/minus.js' );


const tt_$_ast_minusAssign = require( './../ast/minusAssign.js' );


const tt_$_ast_multiply = require( './../ast/multiply.js' );


const tt_$_ast_multiplyAssign = require( './../ast/multiplyAssign.js' );


const tt_$_ast_negate = require( './../ast/negate.js' );


const tt_$_ast_new = require( './../ast/new.js' );


const tt_$_ast_not = require( './../ast/not.js' );


const tt_$_ast_null = require( './../ast/null.js' );


const tt_$_ast_number = require( './../ast/number.js' );


const tt_$_ast_objLiteral = require( './../ast/objLiteral.js' );


const tt_$_ast_or = require( './../ast/or.js' );


const tt_$_ast_plus = require( './../ast/plus.js' );


const tt_$_ast_plusAssign = require( './../ast/plusAssign.js' );


const tt_$_ast_postDecrement = require( './../ast/postDecrement.js' );


const tt_$_ast_postIncrement = require( './../ast/postIncrement.js' );


const tt_$_ast_preDecrement = require( './../ast/preDecrement.js' );


const tt_$_ast_preIncrement = require( './../ast/preIncrement.js' );


const tt_$_ast_string = require( './../ast/string.js' );


const tt_$_ast_typeof = require( './../ast/typeof.js' );


const tt_$_ast_undefined = require( './../ast/undefined.js' );


const tt_$_ast_var = require( './../ast/var.js' );


const tt_tokenList = require( './tokenList.js' );


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

	if( FREEZE )
	{
		Object.freeze( this );
	}
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
/**/		v_ast.timtype !== tt_$_ast_const
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_continue
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_fail
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_for
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_forIn
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_if
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_let
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_return
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_switch
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
/**/		v_ast.timtype !== tt_$_ast_greaterThan
/**/		&&
/**/		v_ast.timtype !== tt_$_ast_instanceof
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
