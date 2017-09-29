/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	jion$id;


if( NODE )
{
	jion$id = module.exports;
}
else
{
	jion$id = { };
}


var
	jion_proto;


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
	require( './proto' );
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
		v_packet // the jion is in/from a package
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.packet = v_packet;

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


jion$id.prototype = prototype;


/*
| Creates a new id object.
*/
jion$id.create =
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
		v_packet;

	if( this !== jion$id )
	{
		inherit = this;

		list = inherit._list;

		listDup = false;

		v_packet = this.packet;
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
			case 'packet' :

				if( arg !== pass )
				{
					v_packet = arg;
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
/**/	if( v_packet === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_packet !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_packet ) !== 'string'
/**/			&&
/**/			!( v_packet instanceof String )
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
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
/**/		if( typeof( o ) !== 'string' && !( o instanceof String ) )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if( inherit && listDup === false && v_packet === inherit.packet )
	{
		return inherit;
	}

	return new Constructor( list, v_packet );
};


/*
| Reflection.
*/
prototype.reflect = 'id';


/*
| Name Reflection.
*/
prototype.reflectName = 'id';


/*
| Sets values by path.
*/
prototype.setPath = jion_proto.setPath;


/*
| Gets values by path
*/
prototype.getPath = jion_proto.getPath;


/*
| Returns the list with an element appended.
*/
prototype.append = jion_proto.listAppend;


/*
| Returns the list with another list appended.
*/
prototype.appendList = jion_proto.listAppendList;


/*
| Returns the length of the list.
*/
jion_proto.lazyValue( prototype, 'length', jion_proto.listLength );


/*
| Returns one element from the list.
*/
prototype.get = jion_proto.listGet;


/*
| Returns a slice from the list.
*/
prototype.slice = jion_proto.listSlice;


/*
| Returns the list with one element inserted.
*/
prototype.insert = jion_proto.listInsert;


/*
| Returns the list with one element removed.
*/
prototype.remove = jion_proto.listRemove;


/*
| Returns the list with one element set.
*/
prototype.set = jion_proto.listSet;


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

	if( obj.reflect !== 'id' )
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

	return this.packet === obj.packet;
};


}
)( );
