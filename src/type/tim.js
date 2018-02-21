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

	let imported;

	switch( split[ 0 ] )
	{
		case '.' : split.shift( ); break;

		case '..' : break;

		default : imported = split.shift( ); break;
	}

	// FIXME this is a dirty hack to counteract created '././' nonsense
	while( split[ 0 ] === '.' ) split.shift( );

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
| Compares two ids.
*/
/*
def.static.compare =
	function(
		o1,
		o2
	)
{
	const l1 = o1.length;

	const l2 = o2.length;

	for( let a = 0; a < l1; a++ )
	{
		const u1 = o1.get( a );

		const u2 = o2.get( a );

		if( u1 > u2 ) return 1;

		if( u1 < u2 ) return -1;
	}

	if( l1 !== l2 ) return 1;

	return 0;
};
*/


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
		return 'tim.import( "' + this.imported + '", "' + this.path + '" )';
	}
	else
	{
		return 'require( "./' + this.path + '" )';
	}
};


/*
| This id as path relative to the owner.
*/
def.lazy.path =
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

