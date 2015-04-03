/*
| Runs the jion generator from node for the
| module that requires this.
*/


/*
| Capsule.
*/
(function( ) {
'use strict';


var
	findJionCodeDir,
	fs,
	vm;

fs = require( 'fs' );

vm = require( 'vm' );

/*
| needs the 'pass' global being set.
*/
require( './proto' );


/*
| Returns the first 'jioncode' directory going
| from a fileame backwards.
|
| Or returns undefined if not found.
*/
findJionCodeDir =
	function(
		filename
	)
{
	var
		jionCodeDir,
		slash,
		stat;
		

	while( true )
	{
		slash = filename.lastIndexOf( '/' );

		if( slash < 0 ) return;

		jionCodeDir = filename.substr( 0, slash - 1 );

		stat = fs.fileStatSync( jionCodeDir );

		if( stat ) return jionCodeDir;
	}
};


module.exports =
	function(
		module
		// + arguments
	)
{
	var
		filename,
		jionCodeDir;

	filename = module.filename;

	jionCodeDir = findJionCodeDir( filename );

	console.log( 'jcd', jionCodeDir );

if( true ) throw new Error( 'TODO' );

	/*
	si = server.filename.indexOf( separator );

	if( si < 0 )
	{
		si = server.filename.indexOf( '/repl' );
	}

	if( si < 0 )
	{
		throw new Error(
			'root module ("'
			+ server.filename
			+ '") has no "'
			+ separator
			+ '" separator'
		);
	}

	inFilename = module.filename.substring( si + 1 );

	outFilename =
		'jion/'
		+ ( GLOBAL.APP ? APP + '/' : '' )
		+ inFilename.replace( /\//g, '-' );

	inStat = fs.statSync( inFilename );

	outStat = fs.statSync( outFilename );

	if( inStat.mtime > outStat.mtime )
	{
		if( !GLOBAL.FORCE_JION_LOADING ) // FIXME
		{
			throw new Error(
				'Out of date jion: '
				+ inFilename
				+ ' -> '
				+ outFilename
			);
		}
	}

	// loads the jion code.

	// runs the jion code with this module context
	// so module.exports match exactly even with
	// circula references
	context = { };

	for( k in GLOBAL )
	{
		if( !GLOBAL.hasOwnProperty( k ) )
		{
			continue;
		}

		context[ k ] = GLOBAL[ k ];
	}

	context.module = module;

	// currently paths matches of this.require
	// and the jion require places. However
	// this might need some path adapting if things
	// change
	context.require =
		function( path )
	{
		return require( path );
	};

	vm.runInNewContext(
		fs.readFileSync( outFilename ) + '',
		context,
		outFilename
	);

	return module.exports;
	*/
};


} )( );
