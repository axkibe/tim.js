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
	global.pass =
	jion_proto.pass =
		{ };

	// exports the own source for use in browsers
	jion_proto.source = require( 'fs' ).readFileSync( module.filename );
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


if( FREEZE ) Object.freeze( pass );

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
	proto.__have_lazy = true;

/**/if( CHECK )
/**/{
/**/	// lazy valued stuff must be jions
/**/	if( !proto.create ) throw new Error( );
/**/
/**/	// there is something amiss if static and jion obj
/**/	// lazyness is used together
/**/	if( proto.__lazy ) throw new Error( );
/**/}

	Object.defineProperty(
		proto,
		key,
		{
			get : function( )
			{
				var
					val;

				val = this.__lazy[ key ];

				if( val !== undefined ) return val;

				val = getter.call( this );

				// FIXME freeze

				return( this.__lazy[ key ] = val );
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
	return obj.__lazy[ key ] !== undefined;
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

/**/if( CHECK )
/**/{
/**/	if( value === undefined ) throw new Error( );
/**/}

	// FUTURE CHECK if value is already set.

	return( obj.__lazy[ key ] = value );
};


/*
| A function taking a string and no side effects.
|
| Computed values are cached.
*/
jion_proto.lazyFunctionString =
	function(
		proto,
		key,
		getter
	)
{
/**/if( CHECK )
/**/{
/**/	// lazy valued stuff must be jions
/**/	if( !proto.create ) throw new Error( );
/**/
/**/	// there is something amiss if static and jion obj
/**/	// lazyness is used together
/**/	if( proto.__lazy ) throw new Error( );
/**/}

	proto.__have_lazy = true;

	proto[ key ] =
		function( str )
	{
		var
			ckey,
			val;

		ckey = key + '__' + str;

		val = this.__lazy[ ckey ];

		if( val !== undefined ) return val;

		return( this.__lazy[ ckey ] = getter.call( this, str ) );
	};
};


/*
| A function taking an integer and no side effects.
|
| Computed values are cached.
*/
jion_proto.lazyFunctionInteger =
	function(
		proto,
		key,
		getter
	)
{

/**/if( CHECK )
/**/{
/**/	// lazy valued stuff must be jions
/**/	if( !proto.create ) throw new Error( );
/**/
/**/	// there is something amiss if static and jion obj
/**/	// lazyness is used together
/**/	if( proto.__lazy ) throw new Error( );
/**/}

	proto.__have_lazy = true;

	proto[ key ] =
		function( integer )
	{
		var
			cArr,
			val;

/**/	if( CHECK )
/**/	{
/**/		if(
/**/			typeof( integer ) !== 'number'
/**/			|| Math.floor( integer ) !== integer
/**/		) throw new Error( );
/**/	}

		cArr = this.__lazy[ key ];

		if( !cArr ) cArr = this.__lazy[ key ] = [ ];

		val = cArr[ integer ];

		if( val !== undefined ) return val;

		return( cArr[ integer ] = getter.call( this, integer ) );
	};
};


/*
| A function taking an integer and no side effects
| is computed for a value and fixated before it is needed.
*/
jion_proto.aheadFunctionInteger =
	function(
		obj,      // object to ahead for
		key,      // property to ahead
		integer,  // function ( integer ) value to ahead
		value     // value ( result ) to ahead
	)
{
	var
		cArr;

/**/if( CHECK )
/**/{
/**/	if( value === undefined ) throw new Error( );
/**/
/**/	if( integer === undefined ) throw new Error( );
/**/}

	cArr = obj.__lazy[ key ];

	if( !cArr ) cArr = obj.__lazy[ key ] = [ ];

	return( cArr[ integer ] = value );
};


/*
| A value is computed and fixated only when needed
| but not from a jion but a static object.
*/
jion_proto.lazyStaticValue =
	function(
		obj,
		key,
		getter
	)
{
/**/if( CHECK )
/**/{
/**/	// there is something amiss if static and jion obj
/**/	// lazyness is used together
/**/	if( obj.__have_lazy ) throw new Error( );
/**/}

	if( !obj.__lazy ) obj.__lazy = { };

	Object.defineProperty(
		obj,
		key,
		{
			get : function( )
			{
				if( this.__lazy[ key ] !== undefined )
				{
					return this.__lazy[ key ];
				}

				return(
					this.__lazy[ key ] = getter.call( this )
				);
			}
		}
	);
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
				this._twig[ key ].setPath( path, value, pos + 2 )
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
		pZ,
		tk;

	if( pos === undefined ) pos = 0;

	if( path.length === pos ) return this;

	pZ = path.length,

	key = path.get( pos );

	if( key === 'twig' )
	{
		if( pos + 1 === pZ ) throw new Error( );

		key = path.get( pos + 1 );

		tk = this._twig[ key ];

		if( pos + 2 === pZ || tk === undefined ) return tk;

		return tk.getPath( path, pos + 2 );
	}

	if( pos + 1 === pZ ) return this[ key ];

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

	for( k in this._group )
	{
		g[ k ] = this._group[ k ];
	}

	for( k in group._group )
	{
		g[ k ] = group._group[ k ];
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
	return this._group[ key ];
};


/*
| Returns the group keys.
*/
jion_proto.groupKeys =
	function( )
{
	var
		keys;

	keys = Object.keys( this._group );

	if( FREEZE ) Object.freeze( keys );

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

	if( FREEZE ) Object.freeze( keys );

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
	return this.create( 'ray:init', this._ray.concat( ray._ray ) );
};


/*
| Returns the length of the ray.
*/
jion_proto.rayLength =
	function( )
{
	return this._ray.length;
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

	return this._ray[ idx ];
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
	return this._twig[ this._ranks[ rank ] ];
};



/*
| Returns the element by key.
*/
jion_proto.twigGet =
	function(
		key
	)
{
	return this._twig[ key ];
};


/*
| Returns the key at a rank.
*/
jion_proto.twigGetKey =
	function(
		idx
	)
{
	return this._ranks[ idx ];
};


/*
| Returns the length of the twig.
*/
jion_proto.twigLength =
	function( )
{
	return this._ranks.length;
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
		this._twig[ key ] !== undefined
		? this._ranks.indexOf( key )
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


//FUTURE right now disabled since
//browser makes jion_proto to jion and adds jion.path.
//if( FREEZE )
//{
//	Object.freeze( jion_proto );
//}


} )( );
