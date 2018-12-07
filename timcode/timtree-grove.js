/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
'use strict';


const tt_branch = require( './branch' );


const tt_leaf = require( './leaf' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		group, // group
		v_id,
		v_path
	)
{
	this.__lazy = { };

	this.id = v_id;

	this.path = v_path;

	this._group = group;

	if( FREEZE )
	{
		Object.freeze( this, group );
	}
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
	let group;

	let groupDup;

	let inherit;

	let v_id;

	let v_path;

	if( this !== self )
	{
		inherit = this;

		group = inherit._group;

		groupDup = false;

		v_id = this.id;

		v_path = this.path;
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
			case 'id' :

				if( arg !== pass )
				{
					v_id = arg;
				}

				break;

			case 'path' :

				if( arg !== pass )
				{
					v_path = arg;
				}

				break;

			case 'group:init' :

				group = arg;

				groupDup = true;

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
/**/	if( typeof( v_id ) !== 'string' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_path ) !== 'string' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	for( let k in group )
/**/	{
/**/		const o = group[ k ];
/**/
/**/		if( o.timtype !== tt_branch && o.timtype !== tt_leaf )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if( inherit && groupDup === false && v_id === inherit.id && v_path === inherit.path )
	{
		return inherit;
	}

	return new Constructor( group, v_id, v_path );
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

	if( obj.timtype !== self )
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

	return this.id === obj.id && this.path === obj.path;
};
