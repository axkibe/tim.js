/*
| A catalog of timspec roots.
|
| This is all the timspecs in the current running instance.
*/
'use strict';


/*
| This part has to be in node.
*/
if( !global.NODE ) throw new Error( );


/*
| This module.
*/
const catalog = module.exports = { };

const timspec_root = require( './root' );


/*
| The list of all timspecRoots.
*/
const timspecRoots = [ ];


/*
| Adds a timspecRoot
*/
catalog.addRoot =
	function(
		path,         // path of the timspec_root
		id,           // id for timspec_root
		noTimcodeGen  // if true, do skip auto timcode generation for that timspec tree
	)
{
	const tsRoot =
		timspec_root.create(
			'path', path,
			'id', id,
			'noTimecodeGen', noTimcodeGen
		);

	// checks if this root or this id is already a timspecRoot
	for( let a = 0, aLen = timspecRoots.length; a < aLen; a++ )
	{
		const tsr = timspecRoots[ a ];

		if( tsr.path.equals( path ) ) throw new Error( );

		if( tsr.id === id ) throw new Error( );
	}

	timspecRoots.push( tsRoot );

	// sorts them, so timspecRoots in a subdir can override parents roots.
	timspecRoots.sort(
		function( a, b )
		{
			const as = a.string;

			const bs = b.string;

			if( as < bs ) return -1;
			if( as > bs ) return 1;
			return 0;
		}
	);
};


/*
| Creates and adds a timspec to the catalog.
| It determines the correct timspecRoot to add it to.
*/
catalog.addTimspec =
	function(
		filename, // filename of the tim
		def       // definition of the tim
	)
{
	console.log( 'XX ADDTIMSPEC', filename );
	/*
	let timtree;

	for( let t = 0; t < timtrees.length; t++ )
	{
		const tpath = timtrees[ t ].path;

		if( filename.substr( 0, tpath.length ) === tpath )
		{
			timtree = timtrees[ t ];

			break;
		}
	}

	if( !timtree ) throw new Error( );

	let path = filename.substr( timtree.path.length, filename.length );

	path = path.split( '/' );

	let branch = timtree.tree;

	for( let p = 0; p < path.length - 1; p++ )
	{
		let key = path[ p ];

		if( !branch[ key ] ) branch[ key ] = { _parent : branch  };

		branch = branch[ key ];
	}

	let key = path[ path.length - 1 ];

	// removes the .js from the key
	key = key.substr( 0, key.length - 3 );

	// already added?
	if( branch[ key ] )
	{
		// if the json name changed, there must be an error
		if( branch[ key ]._json !== json ) throw new Error( );
	}
	else
	{
		branch[ key ] =
			json
			? { _parent: branch, _json: json  }
			: { _parent: branch };
	}
	*/
};


if( FREEZE ) Object.freeze( catalog );

