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

const timspec_dir = require( './dir' );

const timspec_rootDir = require( './rootDir' );

const timspec_timspec = require( './timspec' );

const tim_path = require( '../path' );

const type_tim = require( '../type/tim' );


/*
| The list of all timspecRoots.
*/
const timspecRoots = [ ];


/*
| Adds a timspecRootDir
*/
catalog.addRootDir =
	function(
		realpath,     // absolute path of the timspec_rootDir
		id,           // id for timspec tree
		timcodePath,  // path where the timcode is placed
		noTimcodeGen  // if true, do skip auto timcode generation for that timspec tree
	)
{

/**/if( CHECK )
/**/{
/**/	if( arguments.length < 3 ) throw new Error( );
/**/}

	const tsRoot =
		timspec_rootDir.create(
			'id', id,
			'noTimcodeGen', noTimcodeGen,
			'realpath', realpath,
			'timcodePath', timcodePath
		);

	// checks if this root or this id is already a timspecRoot
	for( let a = 0, al = timspecRoots.length; a < al; a++ )
	{
		const tsr = timspecRoots[ a ];

		if( tsr.realpath === realpath ) throw new Error( );

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
		timspec   // timspec to add
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 1 ) throw new Error( );
/**/}

	const filename = timspec.filename;

	// timspecRoot
	let tsr, tsrPos = 0;

	const tsrLen = timspecRoots.length;

	while( tsrPos < tsrLen )
	{
		tsr = timspecRoots[ tsrPos ];

		if( filename.startsWith( tsr.realpath ) ) break;

		tsrPos++;
	}

	if( tsrPos >= tsrLen ) throw new Error( );

	let path = filename.substr( tsr.realpath.length + 1, filename.length );

	path = path.split( '/' );

	path.unshift( tsr.id );

	path = tim_path.create( 'list:init', path );

	timspec = timspec.create( 'path', path );

	timspecRoots[ tsrPos ] = tsr.addTimspec( timspec );

	return timspec;
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


/*
| Returns the timspec for a given realpath.
*/
catalog.getTimspec =
	function(
		realpath
	)
{
	// first find the root dir
	let tsr;

	for( let t = 0, tLen = timspecRoots.length; ; t++ )
	{
		tsr = timspecRoots[ t ];

		if( realpath.length < tsr.realpath.length ) continue;

		if( realpath.startsWith( tsr.realpath ) ) break;

		// no match rootDir found!
		if( t + 1 >= tLen ) throw new Error( );
	}

	let path = realpath.substr( tsr.realpath.length + 1 );

	path = path.split( '/' );

	let entry = tsr;

	for( let p = 0, pl = path.length; p < pl; p++ )
	{
		entry = entry.get( path[ p ] );
	}

	if( entry.timtype !== timspec_timspec ) throw new Error( );

	return entry;
};


/*
| Returns the timspec for a relative path.
| (used by generator)
*/
catalog.getTimspecRelative =
	function(
		base,    // the filename relative to which the path is given
		timtype  // the relative timtype
	)
{
/**/if( CHECK )
/**/{
/**/	if( timtype.timtype !== type_tim ) throw new Error( );
/**/
/**/	if( base[ base.length - 1 ] === '/' ) throw new Error( );
/**/}

	if( timtype.imported )
	{
		let entry = catalog.getRootDir( timtype.imported );

		for( let p = 0, pl = timtype.length; p < pl; p++ )
		{
			let key = timtype.get( p );

			if( p + 1 >= pl ) key = key + '.js';

			entry = entry.get( key );
		}

		return entry;
	}

	// first the directory of the base
	base = base.substr( 0, base.lastIndexOf( '/' ) );

	// combines the relative timtype with the base
	for( let p = 0, pl = timtype.length; p < pl; p++ )
	{
		let key = timtype.get( p );

		switch( key )
		{
			case '.' : /* ignored */ continue;

			case '..' : base = base.substr( 0, base.lastIndexOf( '/' ) ); continue;

			default : base = base + '/' + key + ( p + 1 >= pl ? '.js' : '' ); continue;
		}
	}

	return catalog.getTimspec( base );
};


/*
| Recursive helper for tree.getBrowserCatalogInitCode
*/
const getBrowserTimspecDir =
	function(
		indent,  // indent to write code with
		dir      // the (root)dir to write
	)
{
	let text = '';

	const keys = dir.sortedKeys;

	for( let k = 0; k < keys.length; k++ )
	{
		const key = keys[ k ];

		const entry = dir.get( key );

		// in case the name has a dot single quotes are put around it
		const sq =
			key.indexOf( '.' ) >= 0
			? '\''
			: '';

		if( entry.timtype === timspec_timspec )
		{
			text += indent + sq + key + sq + ': { },\n';

			continue;
		}

		text += indent + sq + key + sq + ': {\n';

		text += getBrowserTimspecDir( indent + '\t', entry );

		text += indent + '},\n';
	}

	return text;
};


/*
| Returns the tree initialization code
| to be used in the browser.
*/
catalog.getBrowserInitCode =
	function( )
{
	let text = 'var _catalog = {\n';

	for( let t = 0; t < timspecRoots.length; t++ )
	{
		const tsr = timspecRoots[ t ];

		// in case the name has a dot single quotes are put around it
		const sq =
			tsr.id.indexOf( '.' ) >= 0
			? '\''
			: '';

		text += '\t' + sq + tsr.id + sq + ': {\n';

		text += getBrowserTimspecDir( '\t\t', tsr );

		text += '\t},\n';
	}

	text += '};\n';

	return text;
};


/*
| Recursive helper for catalog.getBrowserNoMangle
*/
const getBrowserNoMangleDir =
	function(
		table, // add this branch to this table
		dir    // the (root) dir to process
	)
{
	const keys = dir.keys;

	for( let a = 0, al = keys.length; a < al; a++ )
	{
		const key = keys[ a ];

		const entry = dir.get( key );

		switch( entry.timtype )
		{
			case timspec_timspec :

				table[ key ] = true;

				if( entry.json ) table[ entry.json ] = true;

				continue;

			case timspec_dir :

				table[ key ] = true;

				getBrowserNoMangleDir( table, entry );

				continue;
		}

		// shouldn't happen
		throw new Error( );
	}
};


/*
| Returns a table of all names better not to mangle.
*/
catalog.getBrowserNoMangle =
	function( )
{
	const table = { };

	for( let t = 0, tl = timspecRoots.length; t < tl; t++ )
	{
		getBrowserNoMangleDir( table, timspecRoots[ t ] );
	}

	return table;
};



if( FREEZE ) Object.freeze( catalog );

