/*
| A group of types.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'type_set', ( def, type_set ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.set = require( './typemap' );
}


const any = require( './any' );


/*
| Creates an id repository from an
| array of id strings.
*/
def.static.createFromArray =
	function(
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

