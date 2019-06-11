'use strict';


/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
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


const tt_block = require( './block' );


const tt_case = require( './case' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		list, // list
		v_defaultCase,
		v_statement
	)
{
	this.__lazy = { };

	this.defaultCase = v_defaultCase;

	this.statement = v_statement;

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

	let v_defaultCase;

	let v_statement;

	if( this !== self )
	{
		inherit = this;

		list = inherit._list;

		listDup = false;

		v_defaultCase = this.defaultCase;

		v_statement = this.statement;
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
			case 'defaultCase' :

				if( arg !== pass )
				{
					v_defaultCase = arg;
				}

				break;

			case 'statement' :

				if( arg !== pass )
				{
					v_statement = arg;
				}

				break;

			case 'list:init' :

				if( Array.isArray( arg ) )
				{
					list = arg;

					listDup = true;
				}
				else
				{
					list = arg._list;

					listDup = false;
				}

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
/**/	if( v_defaultCase !== undefined && v_defaultCase.timtype !== tt_block )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_statement.timtype !== tt_and
/**/		&&
/**/		v_statement.timtype !== tt_arrayLiteral
/**/		&&
/**/		v_statement.timtype !== tt_assign
/**/		&&
/**/		v_statement.timtype !== tt_boolean
/**/		&&
/**/		v_statement.timtype !== tt_call
/**/		&&
/**/		v_statement.timtype !== tt_comma
/**/		&&
/**/		v_statement.timtype !== tt_condition
/**/		&&
/**/		v_statement.timtype !== tt_delete
/**/		&&
/**/		v_statement.timtype !== tt_differs
/**/		&&
/**/		v_statement.timtype !== tt_divide
/**/		&&
/**/		v_statement.timtype !== tt_divideAssign
/**/		&&
/**/		v_statement.timtype !== tt_dot
/**/		&&
/**/		v_statement.timtype !== tt_equals
/**/		&&
/**/		v_statement.timtype !== tt_func
/**/		&&
/**/		v_statement.timtype !== tt_generator
/**/		&&
/**/		v_statement.timtype !== tt_greaterOrEqual
/**/		&&
/**/		v_statement.timtype !== tt_greaterThan
/**/		&&
/**/		v_statement.timtype !== tt_instanceof
/**/		&&
/**/		v_statement.timtype !== tt_lessOrEqual
/**/		&&
/**/		v_statement.timtype !== tt_lessThan
/**/		&&
/**/		v_statement.timtype !== tt_member
/**/		&&
/**/		v_statement.timtype !== tt_minus
/**/		&&
/**/		v_statement.timtype !== tt_minusAssign
/**/		&&
/**/		v_statement.timtype !== tt_multiply
/**/		&&
/**/		v_statement.timtype !== tt_multiplyAssign
/**/		&&
/**/		v_statement.timtype !== tt_negate
/**/		&&
/**/		v_statement.timtype !== tt_new
/**/		&&
/**/		v_statement.timtype !== tt_not
/**/		&&
/**/		v_statement.timtype !== tt_null
/**/		&&
/**/		v_statement.timtype !== tt_number
/**/		&&
/**/		v_statement.timtype !== tt_objLiteral
/**/		&&
/**/		v_statement.timtype !== tt_or
/**/		&&
/**/		v_statement.timtype !== tt_plus
/**/		&&
/**/		v_statement.timtype !== tt_plusAssign
/**/		&&
/**/		v_statement.timtype !== tt_postDecrement
/**/		&&
/**/		v_statement.timtype !== tt_postIncrement
/**/		&&
/**/		v_statement.timtype !== tt_preDecrement
/**/		&&
/**/		v_statement.timtype !== tt_preIncrement
/**/		&&
/**/		v_statement.timtype !== tt_string
/**/		&&
/**/		v_statement.timtype !== tt_typeof
/**/		&&
/**/		v_statement.timtype !== tt_undefined
/**/		&&
/**/		v_statement.timtype !== tt_var
/**/		&&
/**/		v_statement.timtype !== tt_yield
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	for( let o of list )
/**/	{
/**/		if( o.timtype !== tt_case )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if(
		inherit
		&&
		listDup === false
		&&
		(
			v_defaultCase === inherit.defaultCase
			||
			v_defaultCase !== undefined
			&&
			v_defaultCase.timtype
			&&
			v_defaultCase.equals( inherit.defaultCase )
		)
		&&
		(
			v_statement === inherit.statement
			||
			v_statement.equals( inherit.statement )
		)
	)
	{
		return inherit;
	}

	return new Constructor( list, v_defaultCase, v_statement );
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
| Returns the first element of the list.
*/
tim_proto.lazyValue( prototype, 'first', tim_proto.listFirst );


/*
| Returns one element from the list.
*/
prototype.get = tim_proto.listGet;


/*
| Returns the list with one element inserted.
*/
prototype.insert = tim_proto.listInsert;


/*
| Returns the last element of the list.
*/
tim_proto.lazyValue( prototype, 'last', tim_proto.listLast );


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
| Reverse iterates over the list.
*/
prototype.reverse =
	function*( ) { for(
let a = this.length - 1;
a >= 0;
a--
)
{ yield this._list[ a ]; } };


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

	return (
		(
			this.defaultCase === obj.defaultCase
			||
			this.defaultCase !== undefined
			&&
			this.defaultCase.timtype
			&&
			this.defaultCase.equals( obj.defaultCase )
		)
		&&
		(
			this.statement === obj.statement
			||
			this.statement.equals( obj.statement )
		)
	);
};
