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
	idGroup;


if( !idGroup )
{
	idGroup = { };
}


if( !NODE )
{
/**/if( CHECK )
/**/{
/**/	if( timModules.idGroup !== undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	timModules.idGroup = idGroup;
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
		group // group
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this._group = group;

	if( FREEZE )
	{
		Object.freeze( group );

		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


idGroup.prototype = prototype;


/*
| Creates a new idGroup object.
*/
idGroup.create =
prototype.create =
	function(
		// free strings
	)
{
	var
		a,
		aZ,
		arg,
		group,
		groupDup,
		inherit,
		o;

	if( this !== idGroup )
	{
		inherit = this;

		group = inherit._group;

		groupDup = false;
	}
	else
	{
		group = { };

		groupDup = true;
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
			case 'group:init' :

				group = arg;

				groupDup = 'init';

				break;

			case 'group:set' :

				if( !groupDup )
				{
					group = tim_proto.copy( group );

					groupDup = true;
				}

				group[ arg ] = arguments[ ++a + 1 ];

				break;

			case 'group:remove' :

				if( !groupDup )
				{
					group = tim_proto.copy( group );

					groupDup = true;
				}

				delete group[ arg ];

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	for( var k in group )
/**/	{
/**/		o = group[ k ];
/**/
/**/		if( o.reflect !== 'id' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if( inherit && groupDup === false )
	{
		return inherit;
	}

	return new Constructor( group );
};


/*
| Reflection.
*/
prototype.reflect = 'idGroup';


/*
| Sets values by path.
*/
prototype.setPath = tim_proto.setPath;


/*
| Gets values by path
*/
prototype.getPath = tim_proto.getPath;


/*
| Returns the group with another group added,
| overwriting collisions.
*/
prototype.addGroup = tim_proto.groupAddGroup;


/*
| Gets one element from the group.
*/
prototype.get = tim_proto.groupGet;


/*
| Returns the group keys.
*/
tim_proto.lazyValue( prototype, 'keys', tim_proto.groupKeys );


/*
| Returns the sorted group keys.
*/
tim_proto.lazyValue( prototype, 'sortedKeys', tim_proto.groupSortedKeys );


/*
| Returns the group with one element removed.
*/
prototype.remove = tim_proto.groupRemove;


/*
| Returns the group with one element set.
*/
prototype.set = tim_proto.groupSet;


/*
| Returns the size of the group.
*/
tim_proto.lazyValue( prototype, 'size', tim_proto.groupSize );


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

	if( obj.reflect !== 'idGroup' )
	{
		return false;
	}

	if( this._group !== obj._group )
	{
		if( this.size !== obj.size )
		{
			return false;
		}

		for( var k in this._group )
		{
			if(
				this._group[ k ] !== obj._group[ k ]
				&&
				(
					!this._group[ k ].equals
					||
					!this._group[ k ].equals( obj._group[ k ] )
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
