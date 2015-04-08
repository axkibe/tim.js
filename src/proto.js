/*
| Common functions for jions.
*/

var
	jion,
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
	jion =
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

var
	innumerable,
	isString;

/*
| Sets a not enumerable value.
*/
innumerable =
	function(
		obj,
		key,
		value
	)
{
	Object.defineProperty(
		obj,
		key,
		{
			value : value,
			writable : false
		}
	);

	return value;
};


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
| A value is computed and fixated only when needed.
*/
jion_proto.lazyValue =
	function(
		proto,
		key,
		getter
	)
{

/**/if( FREEZE )
/**/{
/**/	proto.__have_lazy = true;
/**/}

/**/if( CHECK )
/**/{
/**/	// lazy valued stuff must be jions
/**/
/**/	if( !proto.create )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	Object.defineProperty(
		proto,
		key,
		{
			// this clever overriding does not work in IE9 :-(
			// or Android 2.2 Browser
			// get : function() { return fixate(this, key, getter.call(this)); },
			get : function( )
			{
				var
					ckey;

/**/			if( FREEZE )
/**/			{
/**/				if( this.__lazy[ key ] !== undefined )
/**/				{
/**/					return this.__lazy[ key ];
/**/				}
/**/
/**/				return(
/**/					this.__lazy[ key ] = getter.call( this )
/**/				);
/**/			}
/**/			else
				{
					ckey = '__lazy_' + key;

					if( this[ ckey ] !== undefined )
					{
						return this[ ckey ];
					}

					return innumerable( this, ckey, getter.call( this ) );
				}
			}
		}
	);
};


/*
| Tests if the object has a lazy value set.
*/
jion_proto.hasLazyValueSet =
	function(
		obj,
		key
	)
{
	var
		ckey;

/**/if( FREEZE )
/**/{
/**/	return obj.__lazy[ key ] !== undefined;
/**/}
/**/else
	{
		ckey = '__lazy_' + key;

		return obj[ ckey ] !== undefined;
	}
};


/*
| A lazy value is computed and fixated before it is needed.
*/
jion_proto.aheadValue =
	function(
		obj,   // object to ahead the lazy value for
		key,   // key to ahead
		value  // value to ahead
	)
{
	var
		ckey;

/**/if( CHECK )
/**/{
/**/	if( value === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

/**/if( FREEZE )
/**/{
/**/	if( obj.__lazy[ key ] !== undefined )
/**/	{
/**/		return value;
/**/	}
/**/
/**/	return(
/**/		obj.__lazy[ key ] = value
/**/	);
/**/}
/**/else
	{
		ckey = '__lazy_' + key;

		if( obj[ ckey ] !== undefined )
		{
			return value;
		}

		return innumerable( obj, ckey, value );
	}
};


/*
| A value is computed and fixated only when needed.
*/
jion_proto.lazyFunctionString =
	function(
		proto,
		key,
		getter
	)
{
/**/if( FREEZE )
/**/{
/**/	proto.__have_lazy = true;
/**/}

	proto[ key ] =
		function( str )
	{
		var
			ckey;

/**/	if( FREEZE )
/**/	{
/**/		ckey = key + '__' + str;
/**/
/**/		if( this.__lazy[ ckey ] !== undefined )
/**/		{
/**/			return this.__lazy[ ckey ];
/**/		}
/**/
/**/		return(
/**/			this.__lazy[ ckey ] = getter.call( this, str )
/**/		);
/**/	}
/**/	else
		{
			ckey = '__lazy_' + key + '__' + str;

			if( this[ ckey ] !== undefined )
			{
				return this[ ckey ];
			}

			return innumerable( this, ckey, getter.call( this, str ) );
		}
	};
};


/*
| Copies one object (not deep!)
|
| Also doesn't do hasOwnProperty checking since that one
| is only to be used on vanilla objects.
*/
jion_proto.copy =
	function(
		o  // the object to copy from
	)
{
	var c, k;

	c = { };

	for( k in o )
	{
		c[ k ] = o[ k ];
	}

	return c;
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
	var key, pZ;

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
			return this.create( 'twig:set', key, value );
		}

		return(
			this.create(
				'twig:set',
				key,
				this.twig[ key ].setPath( path, value, pos + 2 )
			)
		);
	}

	if( pos + 1 === pZ )
	{
		return this.create( key, value );
	}

	return this.create( key, this[ key ].setPath( path, value, pos + 1 ) );
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
