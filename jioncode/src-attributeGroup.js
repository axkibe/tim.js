/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	jion$attributeGroup;


if( NODE )
{
	jion$attributeGroup = module.exports;
}
else
{
	jion$attributeGroup = { };
}


var
	jion$attribute,
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
	jion$attribute = require( './attribute' );

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


jion$attributeGroup.prototype = prototype;


/*
| Creates a new attributeGroup object.
*/
jion$attributeGroup.create =
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

	if( this !== jion$attributeGroup )
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
					group = jion_proto.copy( group );

					groupDup = true;
				}

				group[ arg ] = arguments[ ++a + 1 ];

				break;

			case 'group:remove' :

				if( !groupDup )
				{
					group = jion_proto.copy( group );

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
/**/		if( o.reflect !== 'attribute' )
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
prototype.reflect = 'attributeGroup';


/*
| Name Reflection.
*/
prototype.reflectName = 'attributeGroup';


/*
| Sets values by path.
*/
prototype.setPath = jion_proto.setPath;


/*
| Gets values by path
*/
prototype.getPath = jion_proto.getPath;


/*
| Returns the group with another group added,
| overwriting collisions.
*/
prototype.addGroup = jion_proto.groupAddGroup;


/*
| Gets one element from the group.
*/
prototype.get = jion_proto.groupGet;


/*
| Returns the group keys.
*/
jion_proto.lazyValue( prototype, 'keys', jion_proto.groupKeys );


/*
| Returns the sorted group keys.
*/
jion_proto.lazyValue( prototype, 'sortedKeys', jion_proto.groupSortedKeys );


/*
| Returns the group with one element removed.
*/
prototype.remove = jion_proto.groupRemove;


/*
| Returns the group with one element set.
*/
prototype.set = jion_proto.groupSet;


/*
| Returns the size of the group.
*/
jion_proto.lazyValue( prototype, 'size', jion_proto.groupSize );


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

	if( obj.reflect !== 'attributeGroup' )
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
