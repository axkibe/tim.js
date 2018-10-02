/*
| A timtree is a set of 'modules' using tim
|
| This is stored so the browser can 'require' these
| things as well.
*/
'use strict';

/*
| This part has to be in node.
*/
if( !global.NODE ) throw new Error( );


/*
| The tim tree object
*/
const tree = module.exports = { };


/*
| The list of trees using tim.js.
*/
const timtrees = [ ];


/*
| Adds a path to the timPaths
*/
tree.addTree =
	function( path, id )
{
	timtrees.push(
		{
			path: path,
			id: id,
			tree: { }
		}
	);
};


/*
| Adds tim.js itself as timTree
*/
( ( ) => {
	let path = module.filename.split( '/' );

	path.pop( );

	path.pop( );

	path = path.join( '/' ) + '/';

	// auto detects if this is the backed of
	// an ouroboros build

	tree.addTree(
		path,
		path.indexOf( '/ouroboros/' ) >= 0
		? 'ouroboros'
		: 'tim.js'
	);
} )( );


/*
| Adds a leaf to a timTree.
*/
tree.addLeaf =
	function(
		filename,
		json
	)
{
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
};


/*
| Recursive helper for tree.getBrowserTreeInitCode
*/
const getBrowserTreeBranch =
	function(
		indent,  // indent to write code with
		branch   // the branch to write
	)
{
	let text = '';

	const keys = Object.keys( branch ).sort( );

	for( let k = 0; k < keys.length; k++ )
	{
		const key = keys[ k ];

		if( key === '_parent' ) continue;

		if( key === '_json' ) continue;

		const b = branch[ key ];

		// if it has only the _parent backlink
		// or the _json specifier
		let hasChildren = false;

		for( let ck in b )
		{
			if( ck === '_parent' || ck === '_json' ) continue;

			hasChildren = true;

			break;
		}

		if( !hasChildren )
		{
			text += indent + key + ': { },\n';
		}
		else
		{
			text += indent + key + ': {\n';

			text += getBrowserTreeBranch( indent + '\t', b );

			text += indent + '},\n';
		}
	}

	return text;
};


/*
| Returns the tree initialization code
| to be used in the browser.
*/
tree.getBrowserTreeInitCode =
	function( )
{
	let text = 'var _timtrees = {\n';

	for( let t = 0; t < timtrees.length; t++ )
	{
		const timtree = timtrees[ t ];

		// in case the name has a dot single quotes are put around it
		const sq = timtree.id.indexOf( '.' ) >= 0 ? '\'' : '';

		text += '\t' + sq + timtree.id + sq + ': {\n';

		text += getBrowserTreeBranch( '\t\t', timtree.tree );

		text += '\t},\n';
	}

	text += '};\n';

	return text;
};


/*
| Recursive helper for tree.getBrowserNoMangle
*/
const getBrowserNoMangleBranch =
	function(
		table,   // add this branch to this table
		branch   // the branch to process
	)
{
	for( let key in branch )
	{
		if( key === '_parent' ) continue;

		// don't mangle json names
		if( key === '_json' )
		{
			table[ branch._json ] = true;

			continue;
		}

		table[ key ] = true;

		getBrowserNoMangleBranch( table, branch[ key ] );
	}
};


/*
| Returns a table of all names better not to mangle.
*/
tree.getBrowserNoMangle =
	function( )
{
	const table = { };

	for( let t = 0; t < timtrees.length; t++ )
	{
		getBrowserNoMangleBranch( table, timtrees[ t ].tree );
	}

	return table;
};


/*
| Returns the preamble to be prepended
| to sources for browser mode.
*/
tree.getBrowserPreamble =
	function(
		filename,  // the filename to preamble
		timcode    // true if this is for timcode
	)
{

/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 2 ) throw new Error( );
/**/}

	let timtree;

	let text = '';

	text +=
		'( ( ) => { let '
		+ ( timcode ? 'self' : 'module' )
		+ ' = _timtrees';

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

	if( timtree.id.indexOf( '.' ) >= 0 )
	{
		text += '[ \'' + timtree.id + '\' ]';
	}
	else
	{
		text += '.' + timtree.id;
	}

	let path = filename.substr( timtree.path.length, filename.length );

	path = path.split( '/' );

	let branch = timtree.tree;

	for( let p = 0; p < path.length; p++ )
	{
		let key = path[ p ];

		if( p + 1 === path.length )
		{
			// removes the .js from the key
			key = key.substr( 0, key.length - 3 );
		}

		branch = branch[ key ];

		text += '.' + key;

		if( !branch ) throw new Error( );
	}

	text +=
		'; let require = _require.bind( '
		+ ( timcode ? 'self' : 'module' )
		+ ' );';

	return text;
};


/*
| Returns the leaf for a path.
*/
tree.getLeaf =
	function(
		module,   // the module relative to which the path is given
		path      // the relative path
	)
{
/**/if( CHECK )
/**/{
/**/	if( !path.pathString ) throw new Error( );
/**/}

	// first makes sure the leaf is loaded
	module.require( './' + path.pathString );

	let timtree;

	const filename = module.filename;

	// gets the leaf for the current module
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

	let split = filename.substr( timtree.path.length, filename.length ).split( '/' );

	let branch = timtree.tree;

	for( let p = 0; p < split.length - 1; p++ )
	{
		branch = branch[ split[ p ] ];
	}

	// the last step is actually not necessary since the directory
	// is taken again. However just for completeness it is currently left there.

	let key = split[ split.length - 1 ];

	// removes the .js from the key
	key = key.substr( 0, key.length - 3 );

	branch = branch[ key ]._parent;

	// now moves from this branch according to relative path

	for( let p = 0; p < path.length; p++ )
	{
		let key = path.get( p );

		switch( key )
		{
			case '.' : continue;

			case '..' : branch = branch._parent; continue;

			default : branch = branch[ key ]; continue;
		}
	}

	return branch;
};


if( FREEZE ) Object.freeze( tree );

