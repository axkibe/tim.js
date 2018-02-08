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
let attributeGroup = NODE ? module.exports : module;


const attribute = require( './attribute' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
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
const prototype = Constructor.prototype;


attributeGroup.prototype = prototype;


/*
| Creates a new attributeGroup object.
*/
attributeGroup.create =
prototype.create =
	function(
		// free strings
	)
{
	let group;

	let groupDup;

	let inherit;

	if( this !== attributeGroup )
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
		let a = 0, al = arguments.length;
		a < al;
		a += 2
	)
	{
		let arg = arguments[ a + 1 ];

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
/**/	for( let k in group )
/**/	{
/**/		const o = group[ k ];
/**/
/**/		if( o.timtype !== attribute )
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
| Type reflection.
*/
prototype.timtype = attributeGroup;


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

	if( obj.timtype !== attributeGroup )
	{
		return false;
	}

	if( this._group !== obj._group )
	{
		if( this.size !== obj.size )
		{
			return false;
		}

		for( let k in this._group )
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
