/*
| A set of types.
*/
'use strict';


tim.define( module, ( def, type_set ) => {


if( TIM )
{
	def.set = [ '< ./types' ];
}


const fs = require( 'fs' );

const any = tim.require( './any' );

const type_tim = tim.require( './tim' );


/*
| Creates a type set from an
| array of type strings.
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

	const types = new Set( );

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

			for( let line of lines )
			{
				line = line.trim( );

				if( line === '' || line[ 0 ] === '#' ) continue;

				if( line[ 0 ] !== '.' )
				{
					// it is not a tim or an imported tim
					const id = any.createFromString( line );

					types.add( id );

					continue;
				}

				// the relative used to get the typeset file has to
				// be combined with the relative path of tims

				const rpath = filename.substr( 0, filename.lastIndexOf( '/' ) );
				const rpa = rpath.split( '/' );
				const la = line.split( '/' );

				// just cut out all the '.' and empty path parts
				for( let a = 0, al = rpa.length; a < al; a++ )
				{
					const e = rpa[ a ];

					if( e !== '' && e !== '.' ) continue;

					rpa.splice( a, 1 ); a--; al--;
				}

				for( let a = 0, al = la.length; a < al; a++ )
				{
					const e = la[ a ];

					if( e !== '' && e !== '.' ) continue;

					la.splice( a, 1 ); a--; al--;
				}

				const id = type_tim.createFromPath( [ '.' ].concat( rpa ).concat( la ) );
				types.add( id );
			}

			continue;
		}

		const id = any.createFromString( array[ a ] );
		types.add( id );
	}

	return type_set.create( 'set:init', types );
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
	let first = true;

	let ec;

	for( let type of this )
	{
		if( first )
		{
			first = false;

			ec = type.equalsConvention;

			if( ec === 'can' ) return 'can';

			continue;
		}

		const iec = type.equalsConvention;

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

			case 'mustnot' :

				switch( iec )
				{
					case 'must' : return 'can';

					case 'mustnot' : continue;

					default : throw new Error( );
				}

			default : throw new Error( );
		}
	}

	return ec;
};


} );
