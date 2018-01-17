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
	timtrees.push( { path: path, id: id, tree: { } } );
};


/*
| Adds tim.js itself as timTree
*/
( ( ) => {
	let path = module.filename.split( '/' );

	path.pop( );

	path.pop( );

	path = path.join( '/' ) + '/';

	tree.addTree( path, 'timjs' );
} )( );


/*
| Adds a leaf to a timTree.
*/
tree.addLeaf =
	function(
		filename
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

	for( let p = 0; p < path.length; p++ )
	{
		let key = path[ p ];

		if( p + 1 === path.length )
		{
			// removes the .js from the key
			key = key.substr( 0, key.length - 3 );
		}


		if( !branch[ key ] )
		{
			branch[ key ] = { _parent : branch  };
		}

		branch = branch[ key ];
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

		const b = branch[ key ];

		// if it has only the _parent bacllink
		if( Object.keys( b ).length === 1 )
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

		text += '\t' + timtree.id + ': {\n';

		text += getBrowserTreeBranch( '\t\t', timtree.tree );

		text += '\t},\n';
	}

	text += '};\n';

	return text;
};



/*
| Returns the preamble to be prepended
| to sources for browser mode.
*/
tree.getBrowserPreamble =
	function(
		filename
	)
{
	let timtree;

	let text = '';

	text += 'var _leaf = _timtrees.';

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

	text += timtree.id;

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

	text += '; var require = _require.bind( _leaf );';

	return text;
};


if( FREEZE ) Object.freeze( tree );

