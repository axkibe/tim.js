/*
| A path of an entity in a tree.
*/


var
	jion_path,
	jools;


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
		id : 'jion_path',
		ray : [ 'string' ]
	};
}


/*
| Node imports.
*/
if( NODE )
{
	jion_path = require( './this' )( module, 'ouroboros' );

	jools = require( '../jools/jools' );
}


/*
| Returns a path with key appended
*/
jools.lazyFunctionString(
	jion_path.prototype,
	'append',
	function( key )
	{
		var
			result;

		result = this.create( 'ray:append', key );

		jools.aheadValue( result, 'shorten', this );

		return result;
	}
);


/*
| Same as append but without caching.
*/
jion_path.prototype.appendNC =
	function( key )
{
	var
		result;

	result = this.create( 'ray:append', key );

	jools.aheadValue( result, 'shorten', this );

	return result;
};


/*
| Returns a path with the first the entry chopped of.
*/
jools.lazyValue(
	jion_path.prototype,
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
		// jools.aheadLazyStringFunc( result, 'prepend', this.ray[ 0 ], this );

		return result;
	}
);



/*
| Returns a path with the last entry removed.
*/
jools.lazyValue(
	jion_path.prototype,
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
jion_path.prototype.limit =
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
jools.lazyFunctionString(
	jion_path.prototype,
	'prepend',
	function( entry )
	{
		var
			result;

		result = this.create( 'ray:insert', 0, entry );

		jools.aheadValue( result, 'chop', this );

		return result;
	}
);


/*
| True if this path is a subPath of another.
|
| FIXME: optimize by using local variables
*/
jion_path.prototype.subPathOf =
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
jools.lazyValue(
	jion_path.prototype,
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
jion_path.createFromJSON =
	function( json )
{
	if( !Array.isArray( json ) )
	{
		throw new Error( 'invalid json, path is no array' );
	}

	return jion_path.create( 'ray:init', json );
};


/*
| Jsonfy.
*/
jion_path.prototype.toJSON =
	function( )
{
	return this.ray; // FIXME _ray
};


/*
| Returns true is this path is empty.
*/
jools.lazyValue(
	jion_path.prototype,
	'isEmpty',
	function( )
	{
		return this.length === 0;
	}
);


/*
| An empty path.
*/
jion_path.empty = jion_path.create( 'ray:init', [ ] );


} )( );
