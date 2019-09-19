/*
| A path of an entity in a tree.
*/
'use strict';


tim.define( module, ( def, self ) => {


if( TIM )
{
	def.list = [ 'string' ];

	def.json = 'path';
}


/*
| Returns a path with key appended
*/
def.lazyFunc.append =
	function(
		key
	)
{
	const result = this.create( 'list:append', key );

	tim.aheadValue( result, 'shorten', this );

	return result;
};


/*
| Returns a path with the first the entry chopped of.
*/
def.lazy.chop =
	function( )
{
/**/if( CHECK )
/**/{
/**/	if( this.length === 0 ) throw new Error( );
/**/}

	const result = this.create( 'list:remove', 0 );

	// FUTURE
	// aheadLazyStringFunc(	result, 'prepend', this.list[ 0 ], this );

	return result;
};


/*
| Creates a path from string
*/
def.static.createFromString =
	function(
		string
	)
{
/**/if( CHECK )
/**/{
/**/	if( typeof( string ) !== 'string' ) throw new Error( );
/**/
/**/	if( string[ 0 ] === '/' ) throw new Error( );
/*/
/**/	if( string[ string.length - 1 ] === '/' ) throw new Error( );
/**/}

	const array = string.split( '/' );

	let result = self.empty;

	for( let a  = 0, al = array.length; a < al; a++ )
	{
		result = result.append( array[ a ] );
	}

	return result;
};


def.staticLazy.empty = ( ) => self.create( 'list:init', [ ] );


/*
| Turns the path to a filepath.
*/
def.lazy.filepath =
	function( )
{
	let s = '';

	for( let a = 0, al = this.length; a < al; a++ )
	{
		if( a > 0 ) s += '/';

		s += this.get( a );
	}

	return s;
};


/*
| Returns true is this path is empty.
*/
def.lazy.isEmpty =
	function( )
{
	return this.length === 0;
};


/*
| Returns a path limited to a specific length.
|
| FUTURE cache
*/
def.proto.limit =
	function(
		n
	)
{
/**/if( CHECK )
/**/{
/**/	if( n > this.length || n < 0 ) throw new Error( );
/**/}

	let path = this;

	while( path.length > n )
	{
		path = path.shorten;
	}

	return path;
};


/*
| Returns a path with an entry prepended.
*/
def.lazyFunc.prepend =
	function(
		entry
	)
{
	const result = this.create( 'list:insert', 0, entry );

	tim.aheadValue( result, 'chop', this );

	return result;
};


/*
| Returns a path with the last entry removed.
*/
def.lazy.shorten =
	function( )
{
/**/	if( CHECK )
/**/	{
/**/		if( this.length === 0 ) throw new Error( );
/**/	}

	const result = this.create( 'list:remove', this.length - 1 );

	// FUTURE aheadLazyStringFunc

	return result;
};


/*
| Turns the path to a string.
*/
def.lazy.string =
	function( )
{
	const b = [ '[' ];

	for( let a = 0, al = this.length; a < al; a++ )
	{
		b.push( ( a > 0 ?  ', ' : ' ' ), this.get( a ) );
	}

	b.push( ' ]' );

	return b.join( '' );
};


/*
| True if this path is a subPath of another.
*/
def.proto.subPathOf =
	function(
		o,     // the other path
		len    // the length of this path to consider.
	)
{
	if( len === undefined )
	{
		len = this.length;
	}
	else
	{
		if( len < 0 ) len += this.length;

		if( len < 0 ) throw new Error( 'subPathOf out of range' );
	}

	if( len > o.length ) return false;

	for( let a = 0; a < len; a++ )
	{
		if( this.get( a ) !== o.get( a ) ) return false;
	}

	return true;
};


} );
