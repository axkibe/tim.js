/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
'use strict';


const tt_and = require( './and.js' );


const tt_arrayLiteral = require( './arrayLiteral.js' );


const tt_assign = require( './assign.js' );


const tt_boolean = require( './boolean.js' );


const tt_call = require( './call.js' );


const tt_comma = require( './comma.js' );


const tt_condition = require( './condition.js' );


const tt_delete = require( './delete.js' );


const tt_differs = require( './differs.js' );


const tt_divide = require( './divide.js' );


const tt_divideAssign = require( './divideAssign.js' );


const tt_dot = require( './dot.js' );


const tt_equals = require( './equals.js' );


const tt_func = require( './func.js' );


const tt_greaterThan = require( './greaterThan.js' );


const tt_instanceof = require( './instanceof.js' );


const tt_lessThan = require( './lessThan.js' );


const tt_member = require( './member.js' );


const tt_minus = require( './minus.js' );


const tt_minusAssign = require( './minusAssign.js' );


const tt_multiply = require( './multiply.js' );


const tt_multiplyAssign = require( './multiplyAssign.js' );


const tt_negate = require( './negate.js' );


const tt_new = require( './new.js' );


const tt_not = require( './not.js' );


const tt_null = require( './null.js' );


const tt_number = require( './number.js' );


const tt_objLiteral = require( './objLiteral.js' );


const tt_or = require( './or.js' );


const tt_plus = require( './plus.js' );


const tt_plusAssign = require( './plusAssign.js' );


const tt_postDecrement = require( './postDecrement.js' );


const tt_postIncrement = require( './postIncrement.js' );


const tt_preDecrement = require( './preDecrement.js' );


const tt_preIncrement = require( './preIncrement.js' );


const tt_string = require( './string.js' );


const tt_typeof = require( './typeof.js' );


const tt_undefined = require( './undefined.js' );


const tt_var = require( './var.js' );


const tt_block = require( './block.js' );


const tt_case = require( './case.js' );


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

	if( FREEZE )
	{
		Object.freeze( this, list );
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
/**/		v_statement.timtype !== tt_greaterThan
/**/		&&
/**/		v_statement.timtype !== tt_instanceof
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
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	for(
/**/		let r = 0, rl = list.length;
/**/		r < rl;
/**/		++r
/**/	)
/**/	{
/**/		const o = list[ r ];
/**/
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
