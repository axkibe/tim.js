/*
| A timtree is a set of 'modules' using tim
|
| This part provides utils in browser mode.
*/
'use strict';


/* created by browserTreeInitCode */
var _timtrees;

/*
| Initializes the _parent links in the
| timtrees
*/
( ( ) => {
	const initBranch =
		function( branch )
	{
		for( let name in branch )
		{
			if( name === '_parent' ) continue;

			const b = branch[ name ];

			b._parent = branch;

			initBranch( b );
		}
	};

	for( let tname in _timtrees )
	{
		const timtree = _timtrees[ tname ];

		initBranch( timtree );
	}
} )( );


/*
| Require's function for a module to bound to
| it's leaf.
*/
var _require;

_require =
	function( path )
{
	let branch = this._parent;

	path = path.split( '/' );

	for( let p = 0; p < path.length; p++ )
	{
		const pp = path[ p ];

		switch( pp )
		{
			case '.'  : continue;
			case '..' : branch = branch._parent; continue;
			default   : branch = branch[ pp ]; continue;
		}
	}

	return branch;
};
