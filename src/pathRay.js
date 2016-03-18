/*
| A ray of paths.
*/


var
	jion,
	jion$pathRay;


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$pathRay',
		ray : [ 'jion$path' ]
	};
}


/*
| Capsule.
*/
(function( ) {
'use strict';


var
	prototype;


if( NODE )
{
	jion$pathRay = require( './this' )( module, 'ouroboros', 'source' );
}
else
{
	// export path like in node package for browser.
	jion.pathRay = jion$pathRay;
}


prototype = jion$pathRay.prototype;

/*
| Shorthand function
*/
jion$pathRay.pathRay =
	function(
		array
	)
{
	return jion$pathRay.create( 'ray:init', array );
};


/*
| Returns true if this ray contains path.
*/
prototype.contains =
	function(
		path
	)
{
	var
		p,
		pZ,
		pi;

	for( p = 0, pZ = this.length; p < pZ; p++ )
	{
		pi = this.get( p );

		if( pi.equals( path ) ) return true;
	}

	return false;
};


/*
| Combines another pathRay to this.
|
| Duplicates are not appended another time.
*/
prototype.combine =
	function(
		pathRay
	)
{
	var
		addRay,
		aZ,
		p,
		path,
		pZ;

	addRay = [ ];

	aZ = 0;

	for( p = 0, pZ = pathRay.length; p < pZ; p++ )
	{
		path = pathRay.get( p );

		if( !this.contains( path ) )
		{
			addRay[ aZ++] = path;
		}
	}

	return(
		this.appendRay(
			aZ !== pathRay.length
			? pathRay.create( 'ray:init', addRay )
			: pathRay
		)
	);
};


} )( );
