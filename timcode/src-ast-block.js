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
let ast_block = NODE ? module.exports : module;


let ast_and = require( '../ast/and' );


let ast_arrayLiteral = require( '../ast/arrayLiteral' );


let ast_assign = require( '../ast/assign' );


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


let tim_proto = tim.proto;


/*
| Constructor.
*/
var
	Constructor,
	prototype;


Constructor =
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
prototype = Constructor.prototype;


ast_block.prototype = prototype;


/*
| Creates a new block object.
*/
ast_block.create =
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
		list,
		listDup,
		o,
		r,
		rZ;

	if( this !== ast_block )
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
		a = 0, aZ = arguments.length;
		a < aZ;
		a += 2
	)
	{
		arg = arguments[ a + 1 ];

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
/**/		r = 0, rZ = list.length;
/**/		r < rZ;
/**/		++r
/**/	)
/**/	{
/**/		o = list[ r ];
/**/
/**/		if(
/**/			o.timtype !== ast_and
/**/			&&
/**/			o.timtype !== ast_arrayLiteral
/**/			&&
/**/			o.timtype !== ast_assign
/**/			&&
/**/			o.timtype !== ast_block
/**/			&&
/**/			o.timtype !== ast_boolean
/**/			&&
/**/			o.timtype !== ast_call
/**/			&&
/**/			o.timtype !== ast_check
/**/			&&
/**/			o.timtype !== ast_comma
/**/			&&
/**/			o.timtype !== ast_comment
/**/			&&
/**/			o.timtype !== ast_condition
/**/			&&
/**/			o.timtype !== ast_const
/**/			&&
/**/			o.timtype !== ast_continue
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
/**/			o.timtype !== ast_fail
/**/			&&
/**/			o.timtype !== ast_for
/**/			&&
/**/			o.timtype !== ast_forIn
/**/			&&
/**/			o.timtype !== ast_func
/**/			&&
/**/			o.timtype !== ast_greaterThan
/**/			&&
/**/			o.timtype !== ast_if
/**/			&&
/**/			o.timtype !== ast_instanceof
/**/			&&
/**/			o.timtype !== ast_lessThan
/**/			&&
/**/			o.timtype !== ast_let
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
/**/			o.timtype !== ast_return
/**/			&&
/**/			o.timtype !== ast_string
/**/			&&
/**/			o.timtype !== ast_switch
/**/			&&
/**/			o.timtype !== ast_typeof
/**/			&&
/**/			o.timtype !== ast_var
/**/			&&
/**/			o.timtype !== ast_varDec
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
prototype.reflect = 'ast_block';


/*
| Type reflection.
*/
prototype.timtype = ast_block;


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
	var
		a,
		aZ;

	if( this === obj )
	{
		return true;
	}

	if( !obj )
	{
		return false;
	}

	if( obj.reflect !== 'ast_block' )
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
			a = 0, aZ = this.length;
			a < aZ;
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
