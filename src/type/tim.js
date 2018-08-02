/*
| A tim as type.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, type_tim ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		// defined if the tim is imported from a another package
		imported : { type : [ 'undefined', 'string' ] }
	};

	def.list = [ 'string' ];
}


const shorthand = require( '../ast/shorthand' );

const pool = { };


/*
| Create the id from a string specifier.
*/
def.static.createFromString =
	function(
		string
	)
{
	const split = string.split( '/' );

	// FIXME use createFromPath

	let imported;

	switch( split[ 0 ] )
	{
		case '.' : split.shift( ); break;

		case '..' : break;

		default : imported = split.shift( ); break;
	}

	let p = pool;

	for( let a = 0, al = split.length; a < al; a++ )
	{
		let s = split[ a ];

		let pn = p[ s ];

		if( !pn ) pn = p[ s ] = { };

		p = pn;
	}

	let pn = p[ '.js' ];

	if( pn ) return pn;

	return( p[ '.js' ] = type_tim.create( 'list:init', split, 'imported', imported ) );
};


/*
| Create the id from an array of path parts.
*/
def.static.createFromPath =
	function(
		path
	)
{
	let imported;

	path = path.slice( );

	switch( path[ 0 ] )
	{
		case '.' : path.shift( ); break;

		case '..' : break;

		default : imported = path.shift( ); break;
	}

	let p = pool;

	for( let a = 0, al = path.length; a < al; a++ )
	{
		let s = path[ a ];

		let pn = p[ s ];

		if( !pn ) pn = p[ s ] = { };

		p = pn;
	}

	let pn = p[ '.js' ];

	if( pn ) return pn;

	return( p[ '.js' ] = type_tim.create( 'list:init', path, 'imported', imported ) );
};



/*
| Returns if equalness of this object must be used by a
| .equals( ) call, may have an .equals( ) func or never
| has a .equals( ) call and equalness is simply to be
| determined by '===' operator.
*/
def.lazy.equalsConvention = ( ) => 'must';


/*
| The timtype as imported varname
*/
def.lazy.varname =
	function( )
{
	let name = 'tt_';

	for( let a = 0, al = this.length; a < al; a++ )
	{
		const s = this.get( a );

		if( a > 0 ) name += '_';

		name +=
			s === '..'
			? '$'
			: s;
	}

	return name;
};


/*
| This varname as ast var.
*/
def.lazy.$varname =
	function( )
{
	return shorthand.$var( this.varname );
};


/*
| This id references a primitive.
*/
def.func.isPrimitive = false;


/*
| The require statement used for this type.
*/
def.lazy.require =
	function( )
{
	if( this.imported )
	{
		return 'tim.import( "' + this.imported + '", "' + this.pathString + '" )';
	}
	else
	{
		return 'require( "./' + this.pathString + '" )';
	}
};


/*
| This id as string path relative to the owner.
*/
def.lazy.pathString =
	function( )
{
	let p = '';

	for( let a = 0, aZ = this.length; a < aZ; a++ )
	{
		if( a > 0 ) p += '/';

		p += this.get( a );
	}

	return p;
};


} );

