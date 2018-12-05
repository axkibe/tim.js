/*
| A catalog of timspec roots.
|
| This is all the timspecs in the current running instance.
|
| FIXME make this a tim.
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

const timspec_rootDir = require( './rootDir' );

const timspec_timspec = require( './timspec' );

const tim_path = require( '../export/path' );


/*
| The list of all timspecRoots.
*/
const timspecRoots = [ ];


/*
| Adds a timspecRootDir
*/
catalog.addRootDir =
	function(
		absolutePath, // path of the timspec_rootDir
		id,           // id for timspec tree
		noTimcodeGen  // if true, do skip auto timcode generation for that timspec tree
	)
{
	const tsRoot =
		timspec_rootDir.create(
			'absolutePath', absolutePath,
			'id', id,
			'noTimcodeGen', noTimcodeGen
		);

	// checks if this root or this id is already a timspecRoot
	for( let a = 0, aLen = timspecRoots.length; a < aLen; a++ )
	{
		const tsr = timspecRoots[ a ];

		if( tsr.absolutePath === absolutePath ) throw new Error( );

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
	// timspecRoot
	let tsr, tsrPos = 0;

	const tsrLen = timspecRoots.length;

	while( tsrPos < tsrLen )
	{
		tsr = timspecRoots[ tsrPos ];

		const ap = tsr.absolutePath;

		if( filename.substr( 0, ap.length ) === ap ) break;

		tsrPos++;
	}

	if( tsrPos >= tsrLen ) throw new Error( );

	let path = filename.substr( tsr.absolutePath.length, filename.length );

	// removes the .js ending from the key
	if( path.substr( path.length - 3, path.length ) !== '.js' ) throw new Error( );

	path = path.substr( 0, path.length - 3 );

	path = path.split( '/' );

	path.unshift( tsr.id );

	path = tim_path.create( 'list:init', path );

	const timspec = timspec_timspec.createFromDef( def, path );

	timspecRoots[ tsrPos ] = tsr.addTimspec( timspec );

	return timspec;
};



/*
| Prints the catalog on console.
*/
catalog.print =
	function( )
{
	const util = require( 'util' );

	for( let t = 0, tLen = timspecRoots.length; t < tLen; t++ )
	{
		console.log( util.inspect( timspecRoots, { depth: null } ) );
	}
};


/*
| Returns the rootDir by it's id (string)
| or atlernativly by a timspec
*/
catalog.getRootDir =
	function(
		consult // id or timspec
	)
{
	if( consult.timtype === timspec_timspec )
	{
		consult = consult.path.get( 0 );
	}

	for( let t = 0, tLen = timspecRoots.length; t < tLen; t++ )
	{
		const tsr = timspecRoots[ t ];

		if( tsr.id === consult ) return tsr;
	}

	// this shouldn't happen
	throw new Error( );
};


if( FREEZE ) Object.freeze( catalog );

