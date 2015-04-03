/*
| Runs the jion generator from node for the
| module that requires this.
*/

'use strict';


var
	findJionCodeRootDir,
	format_formatter,
	generateJionCode,
	generator,
	requireGenerator,
	fs,
	readOptions,
	vm;


fs = require( 'fs' );

vm = require( 'vm' );

/*
| needs the 'pass' global being set.
*/
require( './proto' );

readOptions = { encoding : 'utf8' };

if( FREEZE )
{
	Object.freeze( readOptions );
}

/*
| Returns the first parent directory
| of a filepath that contains a 'jioncode'
| subdirectory.
|
| Or returns undefined if no such exists.
*/
findJionCodeRootDir =
	function(
		path
	)
{
	var
		slash,
		stat;

	while( true )
	{
		slash = path.lastIndexOf( '/' );

		if( slash < 0 ) return;

		path = path.substr( 0, slash );

		try
		{
			stat = fs.statSync( path + '/jioncode/' );
		}
		catch( e )
		{
			// ignore
		}

		if( stat ) return path + '/';
	}
};


/*
| Generates the jioncode for a jion
| defined in 'filename'.
*/
generateJionCode =
	function(
		filename,  // the file to get the jion definition of
		jionCodeFilename // the file to write the jioncode to
	)
{
	var
		ast,
		global,
		input,
		jion,
		output;

	if( !requireGenerator )
	{
		// requires the generator stuff only when needed
		generator = require( './generator' );

		format_formatter = require( '../format/formatter' );
	}

	input = fs.readFileSync( filename, readOptions );

	global = { JION : true };

	global.GLOBAL = global;

	jion = vm.runInNewContext( input, global, filename );

	ast = generator.generate( jion );

	output = format_formatter.format( ast );

	fs.writeFileSync( jionCodeFilename, output );
};


/*
| Creates and requires the jioncode defined in the current module.
|
| Additional Arguments:
|
| 'ouroboros'
|    used by jion itself to force loading its own jioncode without
|    creating it on the fly.
*/
module.exports =
	function(
		module
		// + additional arguments
	)
{
	var
		a,
		aZ,
		context,
		filename,
		inStat,
		jionCodeRootDir,
		jionCodeFilename,
		k,
		ouroboros,
		outStat;

	// additional argument parsing

	for( a = 1, aZ = arguments.length; a < aZ; a++ )
	{
		switch( arguments[ a ] )
		{
			case 'ouroboros' : ouroboros = true; break;

			default :

				throw new Error(
					'unknown jion.this argument: ' + arguments[ a ]
				);
		}
	}

	// find the filename to find/write this jioncode

	filename = module.filename;

	jionCodeRootDir = findJionCodeRootDir( filename );

	if( !jionCodeRootDir )
	{
		throw new Error(
			'cannot find a parent directory '
			+ 'containing a jioncode/ directory for: '
			+ filename
		);
	}

	jionCodeFilename =
		jionCodeRootDir
		+ 'jioncode/'
		+ filename.substr( jionCodeRootDir.length ).replace( /\//g, '-' );

	// test if the jioncode is out of date
	// or if it isn't existing at all
	// and create it if so.
	if( !ouroboros )
	{
		inStat = fs.statSync( filename );

		try
		{
			outStat = fs.statSync( jionCodeFilename );
		}
		catch( e )
		{
			// ignore
		}

		if( !outStat || inStat.mtime > outStat.mtime )
		{
			console.log(
				'Generating jioncode for '
				+ filename
				+ ' -> '
				+ jionCodeFilename
			);

			generateJionCode( filename, jionCodeFilename );
		}
	}

	// loads the jion code.

	// runs the jion code within the handed module context
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

	// FIXME fix pathign
	context.require =
		function( path )
	{
		return require( path );
	};

	vm.runInNewContext(
		fs.readFileSync( jionCodeFilename ) + '', // FIXME '' needed?
		context,
		jionCodeFilename
	);

	return module.exports;
};
