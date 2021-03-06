'use strict';


/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
const tt_rootDir = require( './rootDir' );


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
/**/	for( let o of list )
/**/	{
/**/		if( o.timtype !== tt_rootDir )
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
| Creates the list with direct elements
*/
self.createWithElements =
	function( ) { return self.create( 'list:init', Array.prototype.slice.call( arguments ) ); };


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
