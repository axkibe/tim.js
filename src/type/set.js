/*
| A group of types.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, type_set ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.set = tim.typemap( module, './type' );
}


const any = require( './any' );

const fs = require( 'fs' );


/*
| Creates an id repository from an
| array of id strings.
*/
def.static.createFromArray =
	function(
		module,
		array
	)
{
/**/if( CHECK )
/**/{
/**/	if( !Array.isArray( array ) ) throw new Error( );
/**/}

	const ids = new Set( );

	for( let a = 0, al = array.length; a < al; a++ )
	{
		const entry = array[ a ];

		if( entry[ 0 ] === '<' )
		{
			let s = 1;

			while( entry[ s ] === ' ' ) s++;

			const filename = entry.substr( s, entry.length ) + '.txt';

			let mpath = module.filename;

			mpath = mpath.substr( 0, mpath.lastIndexOf( '/' ) + 1 );

			const lines = ( fs.readFileSync( mpath + filename ) + '' ).split( '\n' );

			for( let a = 0, al = lines.length; a < al; a++ )
			{
				const line = lines[ a ].trim( );

				if( line === '' || line[ 0 ] === '#' ) continue;

				const id = any.createFromString( line );

				ids.add( id );
			}

			continue;
		}

		const id = any.createFromString( array[ a ] );

		ids.add( id );
	}

	return type_set.create( 'set:init', ids );
};


/*
| Returns if equalness of this object must be used by a
| .equals( ) call, may have an .equals( ) func or never
| has a .equals( ) call and equalness is simply to be
| determined by '===' operator.
*/
def.lazy.equalsConvention =
	function( )
{
	const it = this.iterator( );

	let i = it.next( );

	const ec = i.value.equalsConvention;

	if( ec === 'can' ) return 'can';

	for( i = it.next( ); !i.done; i = it.next( ) )
	{
		const iec = i.value.equalsConvention;

		if( iec === 'can' ) return 'can';

		switch( ec )
		{
			case 'must' :

				switch( iec )
				{
					case 'must' : continue;

					case 'mustnot' : return 'can';

					default : throw new Error( );
				}

				break;

			case 'mustnot' :

				switch( iec )
				{
					case 'must' : return 'can';

					case 'mustnot' : continue;

					default : throw new Error( );
				}

				break;

			default : throw new Error( );
		}
	}

	return ec;
};


} );

