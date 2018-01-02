/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
var
	tim_proto,
	timModules;


/*
| The typed immutable.
*/
var
	ast_switch;


if( !ast_switch )
{
	ast_switch = { };
}


if( !NODE )
{
/**/if( CHECK )
/**/{
/**/	if( timModules.ast_switch !== undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	timModules.ast_switch = ast_switch;
}


/*
| Capsule
*/
(
function( ) {
'use strict';


/*
| Node includes.
*/
if( NODE )
{
	tim_proto = tim.proto;
}


/*
| Constructor.
*/
var
	Constructor,
	prototype;


Constructor =
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
prototype = Constructor.prototype;


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
	var
		a,
		aZ,
		arg,
		inherit,
		list,
		listDup,
		o,
		r,
		rZ,
		v_defaultCase,
		v_statement;

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
		a = 0, aZ = arguments.length;
		a < aZ;
		a += 2
	)
	{
		arg = arguments[ a + 1 ];

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
/**/		if( v_defaultCase.reflect !== 'ast_block' )
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
/**/		v_statement.reflect !== 'ast_and'
/**/		&&
/**/		v_statement.reflect !== 'ast_arrayLiteral'
/**/		&&
/**/		v_statement.reflect !== 'ast_assign'
/**/		&&
/**/		v_statement.reflect !== 'ast_boolean'
/**/		&&
/**/		v_statement.reflect !== 'ast_call'
/**/		&&
/**/		v_statement.reflect !== 'ast_comma'
/**/		&&
/**/		v_statement.reflect !== 'ast_condition'
/**/		&&
/**/		v_statement.reflect !== 'ast_delete'
/**/		&&
/**/		v_statement.reflect !== 'ast_differs'
/**/		&&
/**/		v_statement.reflect !== 'ast_divide'
/**/		&&
/**/		v_statement.reflect !== 'ast_divideAssign'
/**/		&&
/**/		v_statement.reflect !== 'ast_dot'
/**/		&&
/**/		v_statement.reflect !== 'ast_equals'
/**/		&&
/**/		v_statement.reflect !== 'ast_func'
/**/		&&
/**/		v_statement.reflect !== 'ast_greaterThan'
/**/		&&
/**/		v_statement.reflect !== 'ast_instanceof'
/**/		&&
/**/		v_statement.reflect !== 'ast_lessThan'
/**/		&&
/**/		v_statement.reflect !== 'ast_member'
/**/		&&
/**/		v_statement.reflect !== 'ast_minus'
/**/		&&
/**/		v_statement.reflect !== 'ast_minusAssign'
/**/		&&
/**/		v_statement.reflect !== 'ast_multiply'
/**/		&&
/**/		v_statement.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_statement.reflect !== 'ast_negate'
/**/		&&
/**/		v_statement.reflect !== 'ast_new'
/**/		&&
/**/		v_statement.reflect !== 'ast_not'
/**/		&&
/**/		v_statement.reflect !== 'ast_null'
/**/		&&
/**/		v_statement.reflect !== 'ast_number'
/**/		&&
/**/		v_statement.reflect !== 'ast_objLiteral'
/**/		&&
/**/		v_statement.reflect !== 'ast_or'
/**/		&&
/**/		v_statement.reflect !== 'ast_plus'
/**/		&&
/**/		v_statement.reflect !== 'ast_plusAssign'
/**/		&&
/**/		v_statement.reflect !== 'ast_postDecrement'
/**/		&&
/**/		v_statement.reflect !== 'ast_postIncrement'
/**/		&&
/**/		v_statement.reflect !== 'ast_preDecrement'
/**/		&&
/**/		v_statement.reflect !== 'ast_preIncrement'
/**/		&&
/**/		v_statement.reflect !== 'ast_string'
/**/		&&
/**/		v_statement.reflect !== 'ast_typeof'
/**/		&&
/**/		v_statement.reflect !== 'ast_var'
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	for(
/**/		r = 0, rZ = list.length;
/**/		r < rZ;
/**/		++r
/**/	)
/**/	{
/**/		o = list[ r ];
/**/
/**/		if( o.reflect !== 'ast_case' )
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
| Reflection.
*/
prototype.reflect = 'ast_switch';


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

	if( obj.reflect !== 'ast_switch' )
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

	return (
		(
			this.defaultCase === obj.defaultCase
			||
			this.defaultCase !== undefined
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


}
)( );
