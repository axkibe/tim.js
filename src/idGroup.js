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


} )( );
