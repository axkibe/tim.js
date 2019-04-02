/*
| A catalog of timspec roots.
|
| This is all the timspecs in the current running instance.
*/
'use strict';


tim.define( module, ( def, timspec_catalog ) => {

/*
| This has to be in node.
*/
if( !NODE ) throw new Error( );


if( TIM )
{
	def.list = [ './rootDir' ];
}


const timspec_dir = require( './dir' );

const timspec_rootDir = require( './rootDir' );

const timspec_timspec = require( './timspec' );

const tim_path = require( '../path/path' );

const type_tim = require( '../type/tim' );


/*
| Adds a timspecRootDir
*/
def.proto.addRootDir =
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
	for( let tsr of tim.catalog )
	{
		if( tsr.realpath === realpath ) throw new Error( );

		if( tsr.id === id ) throw new Error( );
	}

	tim.catalog = tim.catalog.append( tsRoot );

	// sorts them, so a root dir as a subdir can override parents roots.
	tim.catalog =
		tim.catalog.sort(
			( a, b ) =>
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
def.proto.addEntry =
	function(
		entry   // timspec or provisional to add
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 1 ) throw new Error( );
/**/}

	const filename = entry.filename;

	// timspecRoot
	let tsr, tsrPos = 0;

	const catalog = tim.catalog;

	const tsrLen = catalog.length;

	while( tsrPos < tsrLen )
	{
		tsr = catalog.get( tsrPos );

		if( filename.startsWith( tsr.realpath ) ) break;

		tsrPos++;
	}

	if( tsrPos >= tsrLen ) throw new Error( );

	let path = filename.substr( tsr.realpath.length, filename.length );

	path = path.split( '/' );

	path.unshift( tsr.id );

	path = tim_path.create( 'list:init', path );

	entry = entry.create( 'path', path );

	tim.catalog = catalog.set( tsrPos, tsr.addEntry( entry ) );

	return entry;
};


/*
| Returns the rootDir by it's id (string)
| or atlernativly by a timspec
*/
def.proto.getRootDir =
	function(
		consult // id or timspec
	)
{
	if( consult.timtype === timspec_timspec ) consult = consult.path.get( 0 );

	for( let tsr of tim.catalog )
	{
		if( tsr.id === consult ) return tsr;
	}

	// this shouldn't happen
	console.inspect( consult );

	throw new Error( );
};


/*
| Returns the timspec for a given realpath.
*/
def.proto.getByRealpath =
	function(
		realpath
	)
{
	// first find the root dir
	let tsr;

	for( let t of tim.catalog )
	{
		if( realpath.length < t.realpath.length ) continue;

		if( realpath.startsWith( t.realpath ) ) { tsr = t; break; }
	}

	// no match rootDir found!
	if( !tsr ) throw new Error( );

	let path = realpath.substr( tsr.realpath.length );

	path = path.split( '/' );

	let entry = tsr;

	for( let p = 0, pl = path.length; p < pl; p++ )
	{
		entry = entry.get( path[ p ] );

		if( !entry ) return;
	}

	return entry;
};


/*
| Returns the timspec for a relative path.
| (used by generator)
*/
def.proto.getByRelativePath =
	function(
		base,    // the filename relative to which the path is given
		path     // the relative path (of type tim_path)
	)
{
/**/if( CHECK )
/**/{
/**/	if( base[ base.length - 1 ] === '/' ) throw new Error( );
/**/
/**/	if( path.timtype !== tim_path ) throw new Error( );
/**/}

	// first the directory of the base
	base = base.substr( 0, base.lastIndexOf( '/' ) );

	// combines the relative timtype with the base
	for( let p = 0, pl = path.length; p < pl; p++ )
	{
		let key = path.get( p );

		switch( key )
		{
			case '.' : /* ignored */ continue;

			case '..' : base = base.substr( 0, base.lastIndexOf( '/' ) ); continue;

			default : base = base + '/' + key + ( p + 1 >= pl ? '.js' : '' ); continue;
		}
	}

	return tim.catalog.getByRealpath( base );
};


/*
| Returns the timspec by a timtype
| (used by generator)
*/
def.proto.getByTimtype =
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
		//let entry = catalog.getRootDir( timtype.imported );

		if( timtype.imported !== 'tim.js' ) throw new Error( );

		// place holder system for something more elaborate
		if( timtype.length !== 1 ) throw new Error( );

		// FIXME duplicate code to timspec_timspec
		switch( timtype.pathString )
		{
			case 'path.js' : return tim.catalog.getRootDir( 'tim.js' ).get( 'src' ).get( 'path' ).get( 'path.js' );

			case 'pathList.js' : return tim.catalog.getRootDir( 'tim.js' ).get( 'src' ).get( 'path' ).get( 'list.js' );

			case 'stringList.js' : return tim.catalog.getRootDir( 'tim.js' ).get( 'src' ).get( 'string' ).get( 'list.js' );

			case 'stringSet.js' : return tim.catalog.getRootDir( 'tim.js' ).get( 'src' ).get( 'string' ).get( 'set.js' );

			case 'timspecTwig.js' : return tim.catalog.getRootDir( 'tim.js' ).get( 'src' ).get( 'timspec' ).get( 'twig.js' );

			default : throw new Error( );
		}

		/*
		for( let p = 0, pl = timtype.length; p < pl; p++ )
		{
			let key = timtype.get( p );

			if( p + 1 >= pl ) key = key + '.js';

			entry = entry.get( key );
		}

		return entry;
		*/
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

	return tim.catalog.getByRealpath( base );
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
def.proto.getBrowserInitCode =
	function( )
{
	let text = 'var _catalog = {\n';

	for( let t = 0; t < tim.catalog.length; t++ )
	{
		const tsr = tim.catalog.get( t );

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
def.proto.getBrowserNoMangle =
	function( )
{
	const table = { };

	for( let t = 0, tl = tim.catalog.length; t < tl; t++ )
	{
		getBrowserNoMangleDir( table, tim.catalog.get( t ) );
	}

	return table;
};


} );
