/*
| A path of an entity in a tree.
*/


var
	jion,
	jion$path;


/*
| Capsule
*/
( function ( ) {
"use strict";


/*
| The jion definition.
*/
if( JION )
{
	return {
		id : 'jion$path',
		ray : [ 'string' ]
	};
}

var
	lazy;


if( NODE )
{
	jion$path = require( './this' )( module, 'ouroboros' );

	lazy = require( './proto' );
}
else
{
	// in browser take the functions form the jion module.

	lazy = jion;
}

// XXX prototype


/*
| Returns a path with key appended
*/
lazy.lazyFunctionString(
	jion$path.prototype,
	'append',
	function( key )
	{
		var
			result;

		result = this.create( 'ray:append', key );

		lazy.aheadValue( result, 'shorten', this );

		return result;
	}
);


/*
| Same as append but without caching.
*/
jion$path.prototype.appendNC =
	function( key )
{
	var
		result;

	result = this.create( 'ray:append', key );

	lazy.aheadValue( result, 'shorten', this );

	return result;
};


/*
| Returns a path with the first the entry chopped of.
*/
lazy.lazyValue(
	jion$path.prototype,
	'chop',
	function( )
	{
		var
			result;

/**/	if( CHECK )
/**/	{
/**/		if( this.length === 0 )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}

		result = this.create( 'ray:remove', 0 );

		// FIXME
		// jion_proto.aheadLazyStringFunc(
		//	result, 'prepend', this.ray[ 0 ], this
		// );

		return result;
	}
);



/*
| Returns a path with the last entry removed.
*/
lazy.lazyValue(
	jion$path.prototype,
	'shorten',
	function( )
	{
		var
			result;

/**/	if( CHECK )
/**/	{
/**/		if( this.length === 0 )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}

		result = this.create( 'ray:remove', this.length - 1 );

		// FIXME aheadLazyStringFunc

		return result;
	}
);


/*
| Returns a path limited to a specific length.
|
| FUTURE cache
*/
jion$path.prototype.limit =
	function(
		n
	)
{
	var
		path;

/**/if( CHECK )
/**/{
/**/	if( n > this.length || n < 0 )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	path = this;

	while( path.length > n )
	{
		path = path.shorten;
	}

	return path;
};

/*
| Returns a path with an entry prepended.
*/
lazy.lazyFunctionString(
	jion$path.prototype,
	'prepend',
	function( entry )
	{
		var
			result;

		result = this.create( 'ray:insert', 0, entry );

		lazy.aheadValue( result, 'chop', this );

		return result;
	}
);


/*
| True if this path is a subPath of another.
|
| FIXME: optimize by using local variables
*/
jion$path.prototype.subPathOf =
	function(
		o,     // the other path
		len    // the length of this path to consider.
	)
{
	var
		a;

	if( len === undefined )
	{
		len = this.length;
	}
	else
	{
		if( len < 0 )
		{
			len += this.length;
		}

		if( len < 0 )
		{
			throw new Error( 'subPathOf out of range' );
		}
	}

	if( len > o.length )
	{
		return false;
	}

	for(
		a = 0;
		a < len;
		a++
	)
	{
		if( this.ray[ a ] !== o.ray[ a ] )
		{
			return false;
		}
	}

	return true;
};


/*
| Turns the path to a string.
*/
lazy.lazyValue(
	jion$path.prototype,
	'string',
	function( )
	{
		var
			a,
			aZ,
			b,
			ray;

		ray = this.ray,

		b = [ '[ '[ 0 ] ]; // FUTURE jshint bug

		for(
			a = 0, aZ = this.length;
			a < aZ;
			a++
		)
		{
			b.push(
				( a > 0 ?  ', ' : ' ' ),
				ray[ a ]
			);
		}

		b.push( ' ]' );

		return b.join( '' );
	}
);


/*
| CreateFromJSON
*/
jion$path.createFromJSON =
	function( json )
{
	if( !Array.isArray( json ) )
	{
		throw new Error( 'invalid json, path is no array' );
	}

	return jion$path.create( 'ray:init', json );
};


/*
| Jsonfy.
*/
jion$path.prototype.toJSON =
	function( )
{
	return this.ray; // FIXME _ray
};


/*
| Returns true is this path is empty.
*/
lazy.lazyValue(
	jion$path.prototype,
	'isEmpty',
	function( )
	{
		return this.length === 0;
	}
);


/*
| An empty path.
*/
jion$path.empty = jion$path.create( 'ray:init', [ ] );


} )( );
