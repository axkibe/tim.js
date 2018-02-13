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
let self = NODE ? module.exports : module;


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


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		list, // list
		v_func
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.func = v_func;

	this._list = list;

	if( FREEZE )
	{
		Object.freeze( list );

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

	let list;

	let listDup;

	let v_func;

	if( this !== self )
	{
		inherit = this;

		list = inherit._list;

		listDup = false;

		v_func = this.func;
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
			case 'func' :

				if( arg !== pass )
				{
					v_func = arg;
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

				listDup = 'init';

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
/**/	if( v_func === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_func === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_func.timtype !== tt_and
/**/		&&
/**/		v_func.timtype !== tt_arrayLiteral
/**/		&&
/**/		v_func.timtype !== tt_assign
/**/		&&
/**/		v_func.timtype !== tt_boolean
/**/		&&
/**/		v_func.timtype !== tt_call
/**/		&&
/**/		v_func.timtype !== tt_comma
/**/		&&
/**/		v_func.timtype !== tt_condition
/**/		&&
/**/		v_func.timtype !== tt_delete
/**/		&&
/**/		v_func.timtype !== tt_differs
/**/		&&
/**/		v_func.timtype !== tt_divide
/**/		&&
/**/		v_func.timtype !== tt_divideAssign
/**/		&&
/**/		v_func.timtype !== tt_dot
/**/		&&
/**/		v_func.timtype !== tt_equals
/**/		&&
/**/		v_func.timtype !== tt_func
/**/		&&
/**/		v_func.timtype !== tt_greaterThan
/**/		&&
/**/		v_func.timtype !== tt_instanceof
/**/		&&
/**/		v_func.timtype !== tt_lessThan
/**/		&&
/**/		v_func.timtype !== tt_member
/**/		&&
/**/		v_func.timtype !== tt_minus
/**/		&&
/**/		v_func.timtype !== tt_minusAssign
/**/		&&
/**/		v_func.timtype !== tt_multiply
/**/		&&
/**/		v_func.timtype !== tt_multiplyAssign
/**/		&&
/**/		v_func.timtype !== tt_negate
/**/		&&
/**/		v_func.timtype !== tt_new
/**/		&&
/**/		v_func.timtype !== tt_not
/**/		&&
/**/		v_func.timtype !== tt_null
/**/		&&
/**/		v_func.timtype !== tt_number
/**/		&&
/**/		v_func.timtype !== tt_objLiteral
/**/		&&
/**/		v_func.timtype !== tt_or
/**/		&&
/**/		v_func.timtype !== tt_plus
/**/		&&
/**/		v_func.timtype !== tt_plusAssign
/**/		&&
/**/		v_func.timtype !== tt_postDecrement
/**/		&&
/**/		v_func.timtype !== tt_postIncrement
/**/		&&
/**/		v_func.timtype !== tt_preDecrement
/**/		&&
/**/		v_func.timtype !== tt_preIncrement
/**/		&&
/**/		v_func.timtype !== tt_string
/**/		&&
/**/		v_func.timtype !== tt_typeof
/**/		&&
/**/		v_func.timtype !== tt_var
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
/**/		if(
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
/**/			o.timtype !== tt_greaterThan
/**/			&&
/**/			o.timtype !== tt_instanceof
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
/**/			o.timtype !== tt_var
/**/		)
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
			v_func === inherit.func
			||
			v_func.equals( inherit.func )
		)
	)
	{
		return inherit;
	}

	return new Constructor( list, v_func );
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

	return this.func === obj.func || this.func.equals( obj.func );
};


}
)( );
