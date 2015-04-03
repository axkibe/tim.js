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
	return {
		id :
			'jion_idGroup',
		group :
			[ 'jion_id' ]
	};
}


var
	jion_id,
	jion_idGroup,
	jools;


jion_idGroup = require( '../jion/this' )( module );

jion_id = require( './id' );

jools = require( '../jools/jools' );


/*
| Creates an id repository from an
| array of id strings.
*/
jion_idGroup.createFromIDStrings =
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
/**/	if( !Array.isArray( idStrings ) )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	ids = { };

	for( a = 0, aZ = idStrings.length; a < aZ; a++ )
	{
		s = idStrings[ a ];

		if( s.substring( 0, 2 ) !== '->' )
		{
			id = jion_id.createFromString( idStrings[ a ] );

			ids[ id.string ] = id;
		}
		else
		{
			// FUTURE may check for circular requirements
			subList =
				jion_idGroup.createFromIDStrings(
					require( '../typemaps/' + s.substring( 2 ) )
				).idList;

			for( b = 0, bZ = subList.length; b < bZ; b++ )
			{
				subId = subList[ b ];

				ids[ subId.string ] = subId;
			}
		}
	}

	return jion_idGroup.create( 'group:init', ids );
};


/*
| Returns an idGroup with an id added.
*/
jion_idGroup.prototype.add =
	function(
		id
	)
{
	return this.create( 'group:set', id.string, id );
};


/*
| Returns all units as alphasorted list.
*/
jools.lazyValue(
	jion_idGroup.prototype,
	'idList',
	function( )
{
	var
		a,
		aZ,
		il,
		keys;

	il = [ ];

	keys = this.sortedKeys;

	for(
		a = 0, aZ = keys.length;
		a < aZ;
		a++
	)
	{
		il[ a ] = this.get( keys[ a ] );
	}

/**/if( FREEZE )
/**/{
/**/	Object.freeze( il );
/**/}

	return il;
}
);


/*
| Returns all units as alphasorted list.
*/
jools.lazyValue(
	jion_idGroup.prototype,
	'unitList',
	function( )
{
	var
		a,
		aZ,
		id,
		keys,
		units,
		ul;

	keys = this.keys;

	units = { };

	for(
		a = 0, aZ = keys.length;
		a < aZ;
		a++
	)
	{
		id = this.get( keys[ a ] );

		if( id.unit )
		{
			units[ id.unit ] = true;
		}
	}


	ul = Object.keys( units ).sort( );

/**/if( FREEZE )
/**/{
/**/	Object.freeze( ul );
/**/}

	return ul;
}
);


/*
| Returns the id names as list of an unit.
|
| FIXME jools.lazyStringFunc
| FIXME make it return an idGroup again
*/
jion_idGroup.prototype.nameListOfUnit =
	function(
		unit
	)
{
	var
		a,
		aZ,
		id,
		keys,
		nameList;

	keys = this.sortedKeys;

	nameList = [ ];

	for(
		a = 0, aZ = keys.length;
		a < aZ;
		a++
	)
	{
		id = this.get( keys[ a ] );

		if( id.unit === unit )
		{
			nameList.push( id.name );
		}
	}

/**/if( FREEZE )
/**/{
/**/	Object.freeze( nameList );
/**/}

	return nameList;
};


} )( );
