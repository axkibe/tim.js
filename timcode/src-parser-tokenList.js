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


const tt_$_lexer_token = require( './../lexer/token.js' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		list // list
	)
{
	this.__lazy = { };

	this._list = list;

	Object.freeze( this, list );
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

	let list;

	let listDup;

	if( this !== self )
	{
		inherit = this;

		list = inherit._list;

		listDup = false;
	}
	else
	{
		list = [ ];

		listDup = true;
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
			case 'list:init' :

/**/			if( CHECK )
/**/			{
/**/				if( !Array.isArray( arg ) )
/**/				{
/**/					throw new Error( );
/**/				}
/**/			}

				list = arg;

				listDup = true;

				break;

			case 'list:append' :

				if( !listDup )
				{
					list = list.slice( );

					listDup = true;
				}

				list.push( arg );

				break;

			case 'list:insert' :

				if( !listDup )
				{
					list = list.slice( );

					listDup = true;
				}

				list.splice( arg, 0, arguments[ ++a + 1 ] );

				break;

			case 'list:remove' :

				if( !listDup )
				{
					list = list.slice( );

					listDup = true;
				}

				list.splice( arg, 1 );

				break;

			case 'list:set' :

				if( !listDup )
				{
					list = list.slice( );

					listDup = true;
				}

				list[ arg ] = arguments[ ++a + 1 ];

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	for(
/**/		let r = 0, rl = list.length;
/**/		r < rl;
/**/		++r
/**/	)
/**/	{
/**/		const o = list[ r ];
/**/
/**/		if(
/**/			o.timtype !== tt_$_ast_block
/**/			&&
/**/			o.timtype !== tt_$_ast_break
/**/			&&
/**/			o.timtype !== tt_$_ast_check
/**/			&&
/**/			o.timtype !== tt_$_ast_comment
/**/			&&
/**/			o.timtype !== tt_$_ast_const
/**/			&&
/**/			o.timtype !== tt_$_ast_continue
/**/			&&
/**/			o.timtype !== tt_$_ast_fail
/**/			&&
/**/			o.timtype !== tt_$_ast_for
/**/			&&
/**/			o.timtype !== tt_$_ast_forIn
/**/			&&
/**/			o.timtype !== tt_$_ast_if
/**/			&&
/**/			o.timtype !== tt_$_ast_let
/**/			&&
/**/			o.timtype !== tt_$_ast_return
/**/			&&
/**/			o.timtype !== tt_$_ast_switch
/**/			&&
/**/			o.timtype !== tt_$_ast_varDec
/**/			&&
/**/			o.timtype !== tt_$_ast_while
/**/			&&
/**/			o.timtype !== tt_$_ast_and
/**/			&&
/**/			o.timtype !== tt_$_ast_arrayLiteral
/**/			&&
/**/			o.timtype !== tt_$_ast_assign
/**/			&&
/**/			o.timtype !== tt_$_ast_boolean
/**/			&&
/**/			o.timtype !== tt_$_ast_call
/**/			&&
/**/			o.timtype !== tt_$_ast_comma
/**/			&&
/**/			o.timtype !== tt_$_ast_condition
/**/			&&
/**/			o.timtype !== tt_$_ast_delete
/**/			&&
/**/			o.timtype !== tt_$_ast_differs
/**/			&&
/**/			o.timtype !== tt_$_ast_divide
/**/			&&
/**/			o.timtype !== tt_$_ast_divideAssign
/**/			&&
/**/			o.timtype !== tt_$_ast_dot
/**/			&&
/**/			o.timtype !== tt_$_ast_equals
/**/			&&
/**/			o.timtype !== tt_$_ast_func
/**/			&&
/**/			o.timtype !== tt_$_ast_greaterThan
/**/			&&
/**/			o.timtype !== tt_$_ast_instanceof
/**/			&&
/**/			o.timtype !== tt_$_ast_lessThan
/**/			&&
/**/			o.timtype !== tt_$_ast_member
/**/			&&
/**/			o.timtype !== tt_$_ast_minus
/**/			&&
/**/			o.timtype !== tt_$_ast_minusAssign
/**/			&&
/**/			o.timtype !== tt_$_ast_multiply
/**/			&&
/**/			o.timtype !== tt_$_ast_multiplyAssign
/**/			&&
/**/			o.timtype !== tt_$_ast_negate
/**/			&&
/**/			o.timtype !== tt_$_ast_new
/**/			&&
/**/			o.timtype !== tt_$_ast_not
/**/			&&
/**/			o.timtype !== tt_$_ast_null
/**/			&&
/**/			o.timtype !== tt_$_ast_number
/**/			&&
/**/			o.timtype !== tt_$_ast_objLiteral
/**/			&&
/**/			o.timtype !== tt_$_ast_or
/**/			&&
/**/			o.timtype !== tt_$_ast_plus
/**/			&&
/**/			o.timtype !== tt_$_ast_plusAssign
/**/			&&
/**/			o.timtype !== tt_$_ast_postDecrement
/**/			&&
/**/			o.timtype !== tt_$_ast_postIncrement
/**/			&&
/**/			o.timtype !== tt_$_ast_preDecrement
/**/			&&
/**/			o.timtype !== tt_$_ast_preIncrement
/**/			&&
/**/			o.timtype !== tt_$_ast_string
/**/			&&
/**/			o.timtype !== tt_$_ast_typeof
/**/			&&
/**/			o.timtype !== tt_$_ast_undefined
/**/			&&
/**/			o.timtype !== tt_$_ast_var
/**/			&&
/**/			o.timtype !== tt_$_lexer_token
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if( inherit && listDup === false )
	{
		return inherit;
	}

	return new Constructor( list );
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
| Returns the list with an element appended.
*/
prototype.append = tim_proto.listAppend;


/*
| Returns the list with another list appended.
*/
prototype.appendList = tim_proto.listAppendList;


/*
| Returns the length of the list.
*/
tim_proto.lazyValue( prototype, 'length', tim_proto.listLength );


/*
| Returns one element from the list.
*/
prototype.get = tim_proto.listGet;


/*
| Returns a slice from the list.
*/
prototype.slice = tim_proto.listSlice;


/*
| Returns the list with one element inserted.
*/
prototype.insert = tim_proto.listInsert;


/*
| Returns the list with one element removed.
*/
prototype.remove = tim_proto.listRemove;


/*
| Returns the list with one element set.
*/
prototype.set = tim_proto.listSet;


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

	if( this._list !== obj._list )
	{
		if( this.length !== obj.length )
		{
			return false;
		}

		for(
			let a = 0, al = this.length;
			a < al;
			++a
		)
		{
			if(
				this._list[ a ] !== obj._list[ a ]
				&&
				(
					!this._list[ a ].equals
					||
					!this._list[ a ].equals( obj._list[ a ] )
				)
			)
			{
				return false;
			}
		}
	}

	return true;
};
