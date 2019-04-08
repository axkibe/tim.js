'use strict';


/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
const tt_block = require( './block' );


const tt_break = require( './break' );


const tt_check = require( './check' );


const tt_comment = require( './comment' );


const tt_const = require( './const' );


const tt_continue = require( './continue' );


const tt_fail = require( './fail' );


const tt_for = require( './for' );


const tt_forIn = require( './forIn' );


const tt_forOf = require( './forOf' );


const tt_if = require( './if' );


const tt_let = require( './let' );


const tt_return = require( './return' );


const tt_switch = require( './switch' );


const tt_varDec = require( './varDec' );


const tt_while = require( './while' );


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


const tt_generator = require( './generator' );


const tt_greaterOrEqual = require( './greaterOrEqual' );


const tt_greaterThan = require( './greaterThan' );


const tt_instanceof = require( './instanceof' );


const tt_lessOrEqual = require( './lessOrEqual' );


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


const tt_undefined = require( './undefined' );


const tt_var = require( './var' );


const tt_yield = require( './yield' );


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
/**/			o.timtype !== tt_block
/**/			&&
/**/			o.timtype !== tt_break
/**/			&&
/**/			o.timtype !== tt_check
/**/			&&
/**/			o.timtype !== tt_comment
/**/			&&
/**/			o.timtype !== tt_const
/**/			&&
/**/			o.timtype !== tt_continue
/**/			&&
/**/			o.timtype !== tt_fail
/**/			&&
/**/			o.timtype !== tt_for
/**/			&&
/**/			o.timtype !== tt_forIn
/**/			&&
/**/			o.timtype !== tt_forOf
/**/			&&
/**/			o.timtype !== tt_if
/**/			&&
/**/			o.timtype !== tt_let
/**/			&&
/**/			o.timtype !== tt_return
/**/			&&
/**/			o.timtype !== tt_switch
/**/			&&
/**/			o.timtype !== tt_varDec
/**/			&&
/**/			o.timtype !== tt_while
/**/			&&
/**/			o.timtype !== tt_and
/**/			&&
/**/			o.timtype !== tt_arrayLiteral
/**/			&&
/**/			o.timtype !== tt_assign
/**/			&&
/**/			o.timtype !== tt_boolean
/**/			&&
/**/			o.timtype !== tt_call
/**/			&&
/**/			o.timtype !== tt_comma
/**/			&&
/**/			o.timtype !== tt_condition
/**/			&&
/**/			o.timtype !== tt_delete
/**/			&&
/**/			o.timtype !== tt_differs
/**/			&&
/**/			o.timtype !== tt_divide
/**/			&&
/**/			o.timtype !== tt_divideAssign
/**/			&&
/**/			o.timtype !== tt_dot
/**/			&&
/**/			o.timtype !== tt_equals
/**/			&&
/**/			o.timtype !== tt_func
/**/			&&
/**/			o.timtype !== tt_generator
/**/			&&
/**/			o.timtype !== tt_greaterOrEqual
/**/			&&
/**/			o.timtype !== tt_greaterThan
/**/			&&
/**/			o.timtype !== tt_instanceof
/**/			&&
/**/			o.timtype !== tt_lessOrEqual
/**/			&&
/**/			o.timtype !== tt_lessThan
/**/			&&
/**/			o.timtype !== tt_member
/**/			&&
/**/			o.timtype !== tt_minus
/**/			&&
/**/			o.timtype !== tt_minusAssign
/**/			&&
/**/			o.timtype !== tt_multiply
/**/			&&
/**/			o.timtype !== tt_multiplyAssign
/**/			&&
/**/			o.timtype !== tt_negate
/**/			&&
/**/			o.timtype !== tt_new
/**/			&&
/**/			o.timtype !== tt_not
/**/			&&
/**/			o.timtype !== tt_null
/**/			&&
/**/			o.timtype !== tt_number
/**/			&&
/**/			o.timtype !== tt_objLiteral
/**/			&&
/**/			o.timtype !== tt_or
/**/			&&
/**/			o.timtype !== tt_plus
/**/			&&
/**/			o.timtype !== tt_plusAssign
/**/			&&
/**/			o.timtype !== tt_postDecrement
/**/			&&
/**/			o.timtype !== tt_postIncrement
/**/			&&
/**/			o.timtype !== tt_preDecrement
/**/			&&
/**/			o.timtype !== tt_preIncrement
/**/			&&
/**/			o.timtype !== tt_string
/**/			&&
/**/			o.timtype !== tt_typeof
/**/			&&
/**/			o.timtype !== tt_undefined
/**/			&&
/**/			o.timtype !== tt_var
/**/			&&
/**/			o.timtype !== tt_yield
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
| Returns one element from the list.
*/
prototype.get = tim_proto.listGet;


/*
| Returns the list with one element inserted.
*/
prototype.insert = tim_proto.listInsert;


/*
| Returns the length of the list.
*/
tim_proto.lazyValue( prototype, 'length', tim_proto.listLength );


/*
| Returns the list with one element removed.
*/
prototype.remove = tim_proto.listRemove;


/*
| Returns the list with one element set.
*/
prototype.set = tim_proto.listSet;


/*
| Returns a slice from the list.
*/
prototype.slice = tim_proto.listSlice;


/*
| Returns a slice from the list.
*/
prototype.sort = tim_proto.listSort;


/*
| Forwards the iterator.
*/
prototype[ Symbol.iterator ] = function( ) { return this._list[ Symbol.iterator ]( ); };


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
