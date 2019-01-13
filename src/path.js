/*
| A path of an entity in a tree.
*/
'use strict';


tim.define( module, ( def, self ) => {


if( TIM )
{
	def.list = [ 'string' ];
}


/*
| Returns a path with key appended
*/
def.lazyFuncStr.append =
	function( key )
{
	const result = this.create( 'list:append', key );

	tim.aheadValue( result, 'shorten', this );

	return result;
};


/*
| Same as append but without caching.
*/
def.func.appendNC =
	function( key )
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
	// jion_proto.aheadLazyStringFunc(
	//	result, 'prepend', this.list[ 0 ], this
	// );

	return result;
};


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
| Returns a path limited to a specific length.
|
| FUTURE cache
*/
def.func.limit =
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
def.lazyFuncStr.prepend =
	function( entry )
{
	const result = this.create( 'list:insert', 0, entry );

	tim.aheadValue( result, 'chop', this );

	return result;
};


/*
| True if this path is a subPath of another.
*/
def.func.subPathOf =
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
| Create from json.
*/
def.static.createFromJSON =
	function( json )
{
	if( !Array.isArray( json ) )
	{
		throw new Error( 'invalid json, path is no array' );
	}

	return self.create( 'list:init', json );
};


/*
| Jsonfy.
*/
def.func.toJSON =
	function( )
{
	return this._list;
};


/*
| Returns true is this path is empty.
*/
def.lazy.isEmpty =
	function( )
{
	return this.length === 0;
};


def.staticLazy.empty = () => self.create( 'list:init', [ ] );


} );
