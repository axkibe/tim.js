/*
| A list of paths.
*/


var
	jion,
	jion$pathList;


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$pathList',
		list : [ 'jion$path' ]
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
	jion$pathList = require( './ouroboros' ).this( module, 'source' );
}
else
{
	// export path like in node package for browser.
	jion.pathList = jion$pathList;
}


prototype = jion$pathList.prototype;

/*
| Shorthand function
*/
jion$pathList.pathList =
	function(
		array
	)
{
	return jion$pathList.create( 'list:init', array );
};


/*
| Returns true if this list contains path.
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
| Combines another pathList to this.
|
| Duplicates are not appended another time.
*/
prototype.combine =
	function(
		pathList
	)
{
	var
		addList,
		aZ,
		p,
		path,
		pZ;

	addList = [ ];

	aZ = 0;

	for( p = 0, pZ = pathList.length; p < pZ; p++ )
	{
		path = pathList.get( p );

		if( !this.contains( path ) )
		{
			addList[ aZ++] = path;
		}
	}

	return(
		this.appendList(
			aZ !== pathList.length
			? pathList.create( 'list:init', addList )
			: pathList
		)
	);
};


if( !NODE )
{
	// FIXME
	tim.pathList = jion$pathList;
}


} )( );
