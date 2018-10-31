/*
| Returns the first parent directory
| of a filepath that contains a 'timcode'
| subdirectory.
|
| Throw and error if no such exists.
*/
'use strict';

if( !NODE ) throw new Error( );

const fs = require( 'fs' );

module.exports =
	function(
		path       // path to start looking at
	)
{
	let stat;

	let subpath = path;

	while( true )
	{
		const slash = subpath.lastIndexOf( '/' );

		if( slash < 0 )
		{
			throw new Error(
				'cannot find a parent directory '
				+ 'containing a timcode/ directory for: '
				+ path
			);
		}

		subpath = subpath.substr( 0, slash );

		try
		{
			stat = fs.statSync( subpath + '/timcode/' );
		}
		catch( e ) { /* ignore */ }

		if( stat ) return subpath + '/';
	}
};

