/*
| A jion id group.
*/
'use strict';


require( './ouroboros' )
.define( module, 'idGroup', ( def, tim_idGroup ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.group = [ 'id' ];
}


const tim_id = require( './id' );


/*
| Creates an id repository from an
| array of id strings.
*/
def.static.createFromIDStrings =
	function(
		idStrings
	)
{
/**/if( CHECK )
/**/{
/**/	if( !Array.isArray( idStrings ) ) throw new Error( );
/**/}

	const ids = { };

	for( let a = 0, aZ = idStrings.length; a < aZ; a++ )
	{
		const s = idStrings[ a ];

		if( s.substring( 0, 2 ) !== '->' )
		{
			const id = tim_id.createFromString( idStrings[ a ] );

			ids[ id.pathName ] = id;
		}
		else
		{
			// FUTURE may check for circular requirements
			const subList =
				tim_idGroup.createFromIDStrings(
					require( '../typemaps/' + s.substring( 2 ) )
				).idList;

			for( let b = 0, bZ = subList.length; b < bZ; b++ )
			{
				const subId = subList[ b ];

				ids[ subId.pathName ] = subId;
			}
		}
	}

	return tim_idGroup.create( 'group:init', ids );
};


/*
| Returns an idGroup with an id added.
*/
def.func.add =
	function(
		id
	)
{
	return this.create( 'group:set', id.pathName, id );
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
	const keys = this.keys;

	const ec = this.get( keys[ 0 ] ).equalsConvention;

	if( ec === 'can' ) return 'can';

	for( let a = 1, aZ = keys.length; a < aZ; a++ )
	{
		const iec = this.get( keys[ a ] ).equalsConvention;

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


/*
| Returns true if the idGroup has that id.
*/
def.func.has =
	function(
		id
	)
{
	return this.get( id.pathName ) !== undefined;
};


} );

