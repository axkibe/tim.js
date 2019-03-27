/*
| The catalog of all tim's in browser mode.
*/
'use strict';


/* created by catalog.getBrowserInitCode( ) */
var _catalog;

/*
| Initializes the _parent links in the
| timtrees
*/
( ( ) => {
	const initDir =
		function( branch )
	{
		for( let name in branch )
		{
			if( name === '_parent' ) continue;

			const b = branch[ name ];

			b._parent = branch;

			initDir( b );
		}
	};

	for( let id in _catalog )
	{
		const rootDir = _catalog[ id ];

		initDir( rootDir );
	}
} )( );


/*
| Require function for a module to bind to it's leaf.
*/
var _require;

_require =
	function( path )
{
	let entry = path[ 0 ] === '.' ? this._parent : _catalog;

	// FIXME placehold for future
	switch( path )
	{
		case 'tim.js/path' : return _catalog[ 'tim.js' ].src.path[ 'path.js' ];
		case 'tim.js/pathList' : return _catalog[ 'tim.js' ].src.path[ 'list.js' ];
		case 'tim.js/stringList' : return _catalog[ 'tim.js' ].src.string[ 'list.js' ];
		case 'tim.js/stringSet' : return _catalog[ 'tim.js' ].src.string[ 'set.js' ];
	}

	path = path.split( '/' );

	for( let p = 0, pl = path.length; p < pl; p++ )
	{
		let pp = path[ p ];

		switch( pp )
		{
			case '.' : continue;

			case '..' : entry = entry._parent; continue;

			default :

				if( p + 1 === pl && !pp.endsWith( '.js' ) ) pp = pp + '.js';

				entry = entry[ pp ];

				continue;
		}
	}

	return entry;
};
