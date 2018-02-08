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
let ast_switch = NODE ? module.exports : module;


const ast_and = require( '../ast/and' );


const ast_arrayLiteral = require( '../ast/arrayLiteral' );


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


const ast_block = require( '../ast/block' );


const ast_case = require( '../ast/case' );


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
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.defaultCase = v_defaultCase;

	this.statement = v_statement;

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


ast_switch.prototype = prototype;


/*
| Creates a new switch object.
*/
ast_switch.create =
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

	if( this !== ast_switch )
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
/**/	if( v_defaultCase === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_defaultCase !== undefined )
/**/	{
/**/		if( v_defaultCase.timtype !== ast_block )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_statement === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_statement === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_statement.timtype !== ast_and
/**/		&&
/**/		v_statement.timtype !== ast_arrayLiteral
/**/		&&
/**/		v_statement.timtype !== ast_assign
/**/		&&
/**/		v_statement.timtype !== ast_boolean
/**/		&&
/**/		v_statement.timtype !== ast_call
/**/		&&
/**/		v_statement.timtype !== ast_comma
/**/		&&
/**/		v_statement.timtype !== ast_condition
/**/		&&
/**/		v_statement.timtype !== ast_delete
/**/		&&
/**/		v_statement.timtype !== ast_differs
/**/		&&
/**/		v_statement.timtype !== ast_divide
/**/		&&
/**/		v_statement.timtype !== ast_divideAssign
/**/		&&
/**/		v_statement.timtype !== ast_dot
/**/		&&
/**/		v_statement.timtype !== ast_equals
/**/		&&
/**/		v_statement.timtype !== ast_func
/**/		&&
/**/		v_statement.timtype !== ast_greaterThan
/**/		&&
/**/		v_statement.timtype !== ast_instanceof
/**/		&&
/**/		v_statement.timtype !== ast_lessThan
/**/		&&
/**/		v_statement.timtype !== ast_member
/**/		&&
/**/		v_statement.timtype !== ast_minus
/**/		&&
/**/		v_statement.timtype !== ast_minusAssign
/**/		&&
/**/		v_statement.timtype !== ast_multiply
/**/		&&
/**/		v_statement.timtype !== ast_multiplyAssign
/**/		&&
/**/		v_statement.timtype !== ast_negate
/**/		&&
/**/		v_statement.timtype !== ast_new
/**/		&&
/**/		v_statement.timtype !== ast_not
/**/		&&
/**/		v_statement.timtype !== ast_null
/**/		&&
/**/		v_statement.timtype !== ast_number
/**/		&&
/**/		v_statement.timtype !== ast_objLiteral
/**/		&&
/**/		v_statement.timtype !== ast_or
/**/		&&
/**/		v_statement.timtype !== ast_plus
/**/		&&
/**/		v_statement.timtype !== ast_plusAssign
/**/		&&
/**/		v_statement.timtype !== ast_postDecrement
/**/		&&
/**/		v_statement.timtype !== ast_postIncrement
/**/		&&
/**/		v_statement.timtype !== ast_preDecrement
/**/		&&
/**/		v_statement.timtype !== ast_preIncrement
/**/		&&
/**/		v_statement.timtype !== ast_string
/**/		&&
/**/		v_statement.timtype !== ast_typeof
/**/		&&
/**/		v_statement.timtype !== ast_var
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
/**/		if( o.timtype !== ast_case )
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
			v_defaultCase !== undefined && v_defaultCase.equals( inherit.defaultCase )
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
prototype.timtype = ast_switch;


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

	if( obj.timtype !== ast_switch )
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
			this.defaultCase !== undefined && this.defaultCase.equals( obj.defaultCase )
		)
		&&
		(
			this.statement === obj.statement
			||
			this.statement.equals( obj.statement )
		)
	);
};


}
)( );
