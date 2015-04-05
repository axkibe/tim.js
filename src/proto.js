/*
| Common functions for jions.
*/

var
	isString,
	jion_proto,
	pass;


/*
| Capsule.
*/
(function( ) {
'use strict';


if( NODE )
{
	jion_proto = module.exports;

	// global pass flag for creators
	pass =
	GLOBAL.pass =
	jion_proto.pass =
		{ };

	// exports the own source for use in browsers
	jion_proto.src = require( 'fs' ).readFileSync( module.filename );
}
else
{
	jion_proto = { };

	// global pass flag for creators
	pass =
	jion_proto.pass =
		{ };
}


if( FREEZE )
{
	Object.freeze( pass );
}


/*
| Returns true if o is a String.
*/
isString =
jion_proto.isString  =
	function( o )
{
	return typeof( o ) === 'string' || ( o instanceof String );
};


/*
| Sets a key of a sub node described by a path.
*/
jion_proto.setPath =
	function(
		path,  // path to set
		value, // value to set to
		pos    // position in the path
	)
{
	var
		key,
		pZ;

	if( pos === undefined )
	{
		pos = 0;
	}

/**/if( CHECK )
/**/{
/**/	if( typeof( pos ) !== 'number' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( path.length === pos )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	pZ = path.length;

	key = path.get( pos );

	if( key === 'twig' )
	{
		if( pos + 1 === pZ )
		{
			throw new Error( );
		}

		key = path.get( pos + 1 );

		if( pos + 2 === pZ )
		{
			return(
				this.create(
					'twig:set',
					key,
					value
				)
			);
		}

		return(
			this.create(
				'twig:set',
				key,
				this.twig[ key ].setPath(
					path,
					value,
					pos + 2
				)
			)
		);
	}

	if( pos + 1 === pZ )
	{
		return (
			this.create(
				key,
				value
			)
		);
	}

	return(
		this.create(
			key,
			this[ key ].setPath(
				path,
				value,
				pos + 1
			)
		)
	);
};


/*
| Gets a key of a sub node described by a path.
*/
jion_proto.getPath =
	function(
		path,  // path to set
		pos    // position in the path
	)
{
	var
		key,
		pZ;

	if( pos === undefined )
	{
		pos = 0;
	}

	if( path.length === pos )
	{
		return this;
	}

	pZ = path.length,

	key = path.get( pos );

	if( key === 'twig' )
	{
		if( pos + 1 === pZ )
		{
			throw new Error( );
		}

		key = path.get( pos + 1 );

		if( pos + 2 === pZ )
		{
			return this.twig[ key ];
		}

		return this.twig[ key ].getPath( path, pos + 2 );
	}

	if( pos + 1 === pZ )
	{
		return this[ key ];
	}

	return this[ key ].getPath( path, pos + 1 );
};


/*
| Returns the group with another group added,
| overwriting collisions.
*/
jion_proto.groupAddGroup =
	function(
		group
	)
{
	var
		g,
		k;

/**/if( CHECK )
/**/{
/**/	if( this.reflect !== group.reflect )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	g = { };

	for( k in this.group )
	{
		g[ k ] = this.group[ k ];
	}

	for( k in group.group )
	{
		g[ k ] = group.group[ k ];
	}

	return this.create( 'group:init', g );
};


/*
| Gets one entry from the group.
*/
jion_proto.groupGet =
	function(
		key
	)
{
	return this.group[ key ];
};


/*
| Returns the group keys.
*/
jion_proto.groupKeys =
	function( )
{
	var
		keys;

	keys = Object.keys( this.group );

	if( FREEZE )
	{
		Object.freeze( keys );
	}

	return keys;
};


/*
| Returns the sorted group key.
*/
jion_proto.groupSortedKeys =
	function( )
{
	var
		keys;

	keys = this.keys;

	keys = keys.slice( ).sort( );

	if( FREEZE )
	{
		Object.freeze( keys );
	}

	return keys;
};


/*
| Returns the group with one element removed.
*/
jion_proto.groupRemove =
	function(
		key
	)
{
	return this.create( 'group:remove', key );
};


/*
| Returns the group with one element set.
*/
jion_proto.groupSet =
	function(
		key,
		e
	)
{
	return this.create( 'group:set', key, e );
};


/*
| Returns the size of the group.
*/
jion_proto.groupSize =
	function( )
{
	return this.keys.length;
};


/*
| Returns the ray with an element appended.
*/
jion_proto.rayAppend =
	function(
		e
	)
{
	return this.create( 'ray:append', e );
};


/*
| Returns the ray with another ray appended.
*/
jion_proto.rayAppendRay =
	function(
		ray
	)
{
	return this.create( 'ray:init', this.ray.concat( ray.ray ) );
};


/*
| Returns the length of the ray.
*/
jion_proto.rayLength =
	function( )
{
	return this.ray.length;
};


/*
| Returns one element of the ray.
*/
jion_proto.rayGet =
	function(
		idx
	)
{
	if( idx < 0 )
	{
		idx += this.length;
	}

/**/if( CHECK )
/**/{
/**/	if( idx < 0 || idx >= this.length )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	return this.ray[ idx ];
};


/*
| Returns the ray with one element inserted.
*/
jion_proto.rayInsert =
	function(
		idx,
		e
	)
{
	return this.create( 'ray:insert', idx, e );
};


/*
| Returns the ray with one element removed.
*/
jion_proto.rayRemove =
	function(
		idx
	)
{
	return this.create( 'ray:remove', idx );
};


/*
| Returns the ray with one element set.
*/
jion_proto.raySet =
	function(
		idx,
		e
	)
{
	if( idx < 0 )
	{
		idx += this.length;
	}

/**/if( CHECK )
/**/{
/**/	if( idx < 0 || idx >= this.length )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	return this.create( 'ray:set', idx, e );
};


/*
| Returns the element at rank.
*/
jion_proto.twigAtRank =
	function(
		rank
	)
{
	return this.twig[ this.ranks[ rank ] ];
};



/*
| Returns the element by key.
*/
jion_proto.twigGet =
	function(
		key
	)
{
	return this.twig[ key ];
};


/*
| Returns the key at a rank.
*/
jion_proto.twigGetKey =
	function(
		idx
	)
{
	return this.ranks[ idx ];
};


/*
| Returns the length of the twig.
*/
jion_proto.twigLength =
	function( )
{
	return this.ranks.length;
};


/*
| Returns the rank of the key.
|
| This means it returns the index of key in the ranks array.
*/
jion_proto.twigRankOf =
	function(
		key
	)
{

/**/if( CHECK )
/**/{
/**/	if( !isString( key ) )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	return(
		this.twig[ key ] !== undefined
		? this.ranks.indexOf( key )
		: -1
	);
};


/*
| Returns the twig with the element at key set.
*/
jion_proto.twigSet =
	function(
		key,
		entry
	)
{
	return this.create( 'twig:set', key, entry );
};


if( FREEZE )
{
	Object.freeze( jion_proto );
}


} )( );
