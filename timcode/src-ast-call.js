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
let ast_call = NODE ? module.exports : module;


let tim_proto = tim.proto;


/*
| Constructor.
*/
var
	Constructor,
	prototype;


Constructor =
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
prototype = Constructor.prototype;


ast_call.prototype = prototype;


/*
| Creates a new call object.
*/
ast_call.create =
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
		v_func;

	if( this !== ast_call )
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
		a = 0, aZ = arguments.length;
		a < aZ;
		a += 2
	)
	{
		arg = arguments[ a + 1 ];

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
/**/		v_func.reflect !== 'ast_and'
/**/		&&
/**/		v_func.reflect !== 'ast_arrayLiteral'
/**/		&&
/**/		v_func.reflect !== 'ast_assign'
/**/		&&
/**/		v_func.reflect !== 'ast_boolean'
/**/		&&
/**/		v_func.reflect !== 'ast_call'
/**/		&&
/**/		v_func.reflect !== 'ast_comma'
/**/		&&
/**/		v_func.reflect !== 'ast_condition'
/**/		&&
/**/		v_func.reflect !== 'ast_delete'
/**/		&&
/**/		v_func.reflect !== 'ast_differs'
/**/		&&
/**/		v_func.reflect !== 'ast_divide'
/**/		&&
/**/		v_func.reflect !== 'ast_divideAssign'
/**/		&&
/**/		v_func.reflect !== 'ast_dot'
/**/		&&
/**/		v_func.reflect !== 'ast_equals'
/**/		&&
/**/		v_func.reflect !== 'ast_func'
/**/		&&
/**/		v_func.reflect !== 'ast_greaterThan'
/**/		&&
/**/		v_func.reflect !== 'ast_instanceof'
/**/		&&
/**/		v_func.reflect !== 'ast_lessThan'
/**/		&&
/**/		v_func.reflect !== 'ast_member'
/**/		&&
/**/		v_func.reflect !== 'ast_minus'
/**/		&&
/**/		v_func.reflect !== 'ast_minusAssign'
/**/		&&
/**/		v_func.reflect !== 'ast_multiply'
/**/		&&
/**/		v_func.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_func.reflect !== 'ast_negate'
/**/		&&
/**/		v_func.reflect !== 'ast_new'
/**/		&&
/**/		v_func.reflect !== 'ast_not'
/**/		&&
/**/		v_func.reflect !== 'ast_null'
/**/		&&
/**/		v_func.reflect !== 'ast_number'
/**/		&&
/**/		v_func.reflect !== 'ast_objLiteral'
/**/		&&
/**/		v_func.reflect !== 'ast_or'
/**/		&&
/**/		v_func.reflect !== 'ast_plus'
/**/		&&
/**/		v_func.reflect !== 'ast_plusAssign'
/**/		&&
/**/		v_func.reflect !== 'ast_postDecrement'
/**/		&&
/**/		v_func.reflect !== 'ast_postIncrement'
/**/		&&
/**/		v_func.reflect !== 'ast_preDecrement'
/**/		&&
/**/		v_func.reflect !== 'ast_preIncrement'
/**/		&&
/**/		v_func.reflect !== 'ast_string'
/**/		&&
/**/		v_func.reflect !== 'ast_typeof'
/**/		&&
/**/		v_func.reflect !== 'ast_var'
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
/**/		if(
/**/			o.reflect !== 'ast_and'
/**/			&&
/**/			o.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			o.reflect !== 'ast_assign'
/**/			&&
/**/			o.reflect !== 'ast_boolean'
/**/			&&
/**/			o.reflect !== 'ast_call'
/**/			&&
/**/			o.reflect !== 'ast_comma'
/**/			&&
/**/			o.reflect !== 'ast_condition'
/**/			&&
/**/			o.reflect !== 'ast_delete'
/**/			&&
/**/			o.reflect !== 'ast_differs'
/**/			&&
/**/			o.reflect !== 'ast_divide'
/**/			&&
/**/			o.reflect !== 'ast_divideAssign'
/**/			&&
/**/			o.reflect !== 'ast_dot'
/**/			&&
/**/			o.reflect !== 'ast_equals'
/**/			&&
/**/			o.reflect !== 'ast_func'
/**/			&&
/**/			o.reflect !== 'ast_greaterThan'
/**/			&&
/**/			o.reflect !== 'ast_instanceof'
/**/			&&
/**/			o.reflect !== 'ast_lessThan'
/**/			&&
/**/			o.reflect !== 'ast_member'
/**/			&&
/**/			o.reflect !== 'ast_minus'
/**/			&&
/**/			o.reflect !== 'ast_minusAssign'
/**/			&&
/**/			o.reflect !== 'ast_multiply'
/**/			&&
/**/			o.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			o.reflect !== 'ast_negate'
/**/			&&
/**/			o.reflect !== 'ast_new'
/**/			&&
/**/			o.reflect !== 'ast_not'
/**/			&&
/**/			o.reflect !== 'ast_null'
/**/			&&
/**/			o.reflect !== 'ast_number'
/**/			&&
/**/			o.reflect !== 'ast_objLiteral'
/**/			&&
/**/			o.reflect !== 'ast_or'
/**/			&&
/**/			o.reflect !== 'ast_plus'
/**/			&&
/**/			o.reflect !== 'ast_plusAssign'
/**/			&&
/**/			o.reflect !== 'ast_postDecrement'
/**/			&&
/**/			o.reflect !== 'ast_postIncrement'
/**/			&&
/**/			o.reflect !== 'ast_preDecrement'
/**/			&&
/**/			o.reflect !== 'ast_preIncrement'
/**/			&&
/**/			o.reflect !== 'ast_string'
/**/			&&
/**/			o.reflect !== 'ast_typeof'
/**/			&&
/**/			o.reflect !== 'ast_var'
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
| Reflection.
*/
prototype.reflect = 'ast_call';


/*
| Type reflection.
*/
prototype.timtype = ast_call;


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

	if( obj.reflect !== 'ast_call' )
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

	return this.func === obj.func || this.func.equals( obj.func );
};


}
)( );
