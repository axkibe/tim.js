/*
| A jion id group.
*/


/*
| Capsule.
*/
(function( ) {
'use strict';


/*
| The jion definition.
*/
if( JION )
{
	return{
		id : 'jion$idGroup',
		group : [ 'jion$id' ]
	};
}


var
	jion$id,
	jion$idGroup,
	jion$proto,
	prototype;


jion$idGroup = require( './this' )( module, 'ouroboros' );

prototype = jion$idGroup.prototype;

jion$id = require( './id' );

jion$proto = require( './proto' );


/*
| Creates an id repository from an
| array of id strings.
*/
jion$idGroup.createFromIDStrings =
	function(
		idStrings
	)
{
	var
		a,
		aZ,
		b,
		bZ,
		id,
		ids,
		s,
		subId,
		subList;

/**/if( CHECK )
/**/{
/**/	if( !Array.isArray( idStrings ) ) throw new Error( );
/**/}

	ids = { };

	for( a = 0, aZ = idStrings.length; a < aZ; a++ )
	{
		s = idStrings[ a ];

		if( s.substring( 0, 2 ) !== '->' )
		{
			id = jion$id.createFromString( idStrings[ a ] );

			ids[ id.pathName ] = id;
		}
		else
		{
			// FUTURE may check for circular requirements
			subList =
				jion$idGroup.createFromIDStrings(
					require( '../typemaps/' + s.substring( 2 ) )
				).idList;

			for( b = 0, bZ = subList.length; b < bZ; b++ )
			{
				subId = subList[ b ];

				ids[ subId.pathName ] = subId;
			}
		}
	}

	return jion$idGroup.create( 'group:init', ids );
};


/*
| Returns an idGroup with an id added.
*/
prototype.add =
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
jion$proto.lazyValue(
	prototype,
	'equalsConvention',
	function( )
{
	var
		a,
		aZ,
		ec,
		iec,
		keys;

	keys = this.keys;

	ec = this.get( keys[ 0 ] ).equalsConvention;

	if( ec === 'can' ) return 'can';

	for( a = 1, aZ = keys.length; a < aZ; a++ )
	{
		iec = this.get( keys[ a ] ).equalsConvention;

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
}
);




/*
| Returns true if the idGroup has that id.
*/
prototype.has =
	function(
		id
	)
{
	return this.get( id.pathName ) !== undefined;
};


} )( );
