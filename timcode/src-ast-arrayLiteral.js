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
let ast_arrayLiteral = NODE ? module.exports : module;


const ast_and = require( '../ast/and' );


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


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		list // list
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

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


ast_arrayLiteral.prototype = prototype;


/*
| Creates a new arrayLiteral object.
*/
ast_arrayLiteral.create =
prototype.create =
	function(
		// free strings
	)
{
	let inherit;

	let list;

	let listDup;

	if( this !== ast_arrayLiteral )
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
/**/	for(
/**/		let r = 0, rl = list.length;
/**/		r < rl;
/**/		++r
/**/	)
/**/	{
/**/		const o = list[ r ];
/**/
/**/		if(
/**/			o.timtype !== ast_and
/**/			&&
/**/			o.timtype !== ast_arrayLiteral
/**/			&&
/**/			o.timtype !== ast_assign
/**/			&&
/**/			o.timtype !== ast_boolean
/**/			&&
/**/			o.timtype !== ast_call
/**/			&&
/**/			o.timtype !== ast_comma
/**/			&&
/**/			o.timtype !== ast_condition
/**/			&&
/**/			o.timtype !== ast_delete
/**/			&&
/**/			o.timtype !== ast_differs
/**/			&&
/**/			o.timtype !== ast_divide
/**/			&&
/**/			o.timtype !== ast_divideAssign
/**/			&&
/**/			o.timtype !== ast_dot
/**/			&&
/**/			o.timtype !== ast_equals
/**/			&&
/**/			o.timtype !== ast_func
/**/			&&
/**/			o.timtype !== ast_greaterThan
/**/			&&
/**/			o.timtype !== ast_instanceof
/**/			&&
/**/			o.timtype !== ast_lessThan
/**/			&&
/**/			o.timtype !== ast_member
/**/			&&
/**/			o.timtype !== ast_minus
/**/			&&
/**/			o.timtype !== ast_minusAssign
/**/			&&
/**/			o.timtype !== ast_multiply
/**/			&&
/**/			o.timtype !== ast_multiplyAssign
/**/			&&
/**/			o.timtype !== ast_negate
/**/			&&
/**/			o.timtype !== ast_new
/**/			&&
/**/			o.timtype !== ast_not
/**/			&&
/**/			o.timtype !== ast_null
/**/			&&
/**/			o.timtype !== ast_number
/**/			&&
/**/			o.timtype !== ast_objLiteral
/**/			&&
/**/			o.timtype !== ast_or
/**/			&&
/**/			o.timtype !== ast_plus
/**/			&&
/**/			o.timtype !== ast_plusAssign
/**/			&&
/**/			o.timtype !== ast_postDecrement
/**/			&&
/**/			o.timtype !== ast_postIncrement
/**/			&&
/**/			o.timtype !== ast_preDecrement
/**/			&&
/**/			o.timtype !== ast_preIncrement
/**/			&&
/**/			o.timtype !== ast_string
/**/			&&
/**/			o.timtype !== ast_typeof
/**/			&&
/**/			o.timtype !== ast_var
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
| Reflection.
*/
prototype.reflect = 'ast_arrayLiteral';


/*
| Type reflection.
*/
prototype.timtype = ast_arrayLiteral;


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

	if( obj.reflect !== 'ast_arrayLiteral' )
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


}
)( );
