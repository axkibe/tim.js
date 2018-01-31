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
let stringList = NODE ? module.exports : module;


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


stringList.prototype = prototype;


/*
| Creates a new stringList object.
*/
stringList.create =
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

	if( this !== stringList )
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
/**/		if( typeof( o ) !== 'string' && !( o instanceof String ) )
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
prototype.reflect = 'stringList';


/*
| Type reflection.
*/
prototype.timtype = stringList;


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

	if( obj.reflect !== 'stringList' )
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
