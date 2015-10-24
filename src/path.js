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
	return{
		id : 'jion$path',
		ray : [ 'string' ]
	};
}

var
	prototype;


if( NODE )
{
	jion$path = require( './this' )( module, 'ouroboros', 'source' );

	jion = require( './proto' );
}
else
{
	// export path like in node package for browser.
	jion.path = jion$path;
}


prototype = jion$path.prototype;


/*
| Returns a path with key appended
*/
jion.lazyFunctionString(
	prototype,
	'append',
	function( key )
{
	var
		result;

	result = this.create( 'ray:append', key );

	jion.aheadValue( result, 'shorten', this );

	return result;
}
);


/*
| Same as append but without caching.
*/
prototype.appendNC =
	function( key )
{
	var
		result;

	result = this.create( 'ray:append', key );

	jion.aheadValue( result, 'shorten', this );

	return result;
};


/*
| Returns a path with the first the entry chopped of.
*/
jion.lazyValue(
	prototype,
	'chop',
	function( )
{
	var
		result;

/**/if( CHECK )
/**/{
/**/	if( this.length === 0 )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	result = this.create( 'ray:remove', 0 );

	// FUTURE
	// jion_proto.aheadLazyStringFunc(
	//	result, 'prepend', this.ray[ 0 ], this
	// );

	return result;
}
);



/*
| Returns a path with the last entry removed.
*/
jion.lazyValue(
	prototype,
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

	// FUTURE aheadLazyStringFunc

	return result;
}
);


/*
| Returns a path limited to a specific length.
|
| FUTURE cache
*/
prototype.limit =
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
jion.lazyFunctionString(
	prototype,
	'prepend',
	function( entry )
{
	var
		result;

	result = this.create( 'ray:insert', 0, entry );

	jion.aheadValue( result, 'chop', this );

	return result;
}
);


/*
| True if this path is a subPath of another.
*/
prototype.subPathOf =
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
		if( len < 0 ) len += this.length;

		if( len < 0 )
		{
			throw new Error( 'subPathOf out of range' );
		}
	}

	if( len > o.length ) return false;

	for( a = 0; a < len; a++ )
	{
		if( this.get( a ) !== o.get( a ) ) return false;
	}

	return true;
};


/*
| Turns the path to a string.
*/
jion.lazyValue(
	prototype,
	'string',
	function( )
{
	var
		a,
		aZ,
		b;

	b = [ '[ '[ 0 ] ]; // FUTURE jshint bug

	for(
		a = 0, aZ = this.length;
		a < aZ;
		a++
	)
	{
		b.push(
			( a > 0 ?  ', ' : ' ' ),
			this.get( a )
		);
	}

	b.push( ' ]' );

	return b.join( '' );
}
);


/*
| Create from json.
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
prototype.toJSON =
	function( )
{
	return this._ray;
};


/*
| Returns true is this path is empty.
*/
jion.lazyValue(
	prototype,
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
