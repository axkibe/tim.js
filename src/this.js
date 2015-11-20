/*
| Runs the jion generator from node for the
| module that requires this.
*/

'use strict';


var
	cacheContext,
	cacheGlobal,
	findJionCodeRootDir,
	fs,
	format_formatter,
	generator,
	getContext,
	getJionDef,
	jion_proto,
	readOptions,
	vm;


fs = require( 'fs' );

jion_proto = require( './proto' );

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
| Returns the context to run the jion definiton in.
*/
getContext =
	function( module )
{
	if( cacheContext )
	{
		cacheGlobal.require = module.require.bind( module );

		return cacheContext;
	}	

	cacheGlobal = { JION : true };

	cacheGlobal.GLOBAL = cacheGlobal;

	cacheGlobal.require = module.require.bind( module );

	cacheContext = vm.createContext( cacheGlobal );

	return cacheContext;
};


/*
| Gets the jion definition.
*/
getJionDef =
	function(
		filename,
		module
	)
{
	var
		input,
		script;

	input = fs.readFileSync( filename, readOptions );

	script = new vm.Script( input, { filename : filename } );

	return script.runInContext( getContext( module ) );
};

/*
| Creates and requires the jioncode defined in the current module.
|
| Additional Arguments:
|
| 'source'
|    sets 'source' and 'jioncode' attributes of module exports.
|    to be used to forward the code to browser.
|
| 'ouroboros'
|    used by jion itself to force not recreating out of date jioncode
|    on the fly.
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
		ast,
		attributes,
		context,
		exports,
		filename,
		input,
		inStat,
		jionCodeRootDir,
		jionCodeFilename,
		jionCodeRealFilename,
		jionDef,
		k,
		ouroboros,
		output,
		outStat,
		source;

	// additional argument parsing

	for( a = 1, aZ = arguments.length; a < aZ; a++ )
	{
		switch( arguments[ a ] )
		{
			case 'ouroboros' : ouroboros = true; break;

			case 'source' : source = true; break;

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
		'jioncode/'
		+
			filename
			.substr( jionCodeRootDir.length )
			.replace( /\//g, '-' );

	jionCodeRealFilename = jionCodeRootDir + jionCodeFilename;

	// test if the jioncode is out of date
	// or if it isn't existing at all
	// and create it if so.

	if( !ouroboros )
	{
		inStat = fs.statSync( filename );

		try
		{
			outStat = fs.statSync( jionCodeRealFilename );
		}
		catch( e )
		{
			// ignore
		}

		if( !outStat || inStat.mtime > outStat.mtime )
		{
			console.log( 'jionCode: ' + jionCodeRealFilename );

			// requires the generator stuff only when needed
			generator = require( './generator' );

			format_formatter = require( './format/formatter' );

			if( !jionDef ) jionDef = getJionDef( filename, module );		

			ast = generator.generate( jionDef );

			output = format_formatter.format( ast );

			fs.writeFileSync( jionCodeRealFilename, output );
		}
	}

	// loads the jion code.

	// runs the jion code within the handed module context
	// so module.exports match exactly even with
	// circula references
	context = { };

	for( k in GLOBAL )
	{
		if( !GLOBAL.hasOwnProperty( k ) ) continue;

		context[ k ] = GLOBAL[ k ];
	}

	context.jion_proto = jion_proto;

	context.module = module;

	context.require = module.require.bind( module );

	vm.runInNewContext(
		fs.readFileSync( jionCodeRealFilename ),
		context,
		jionCodeRealFilename
	);

	exports = module.exports;

	if( source )
	{
		input = fs.readFileSync( filename, readOptions );

		if( !output )
		{
			output = fs.readFileSync( jionCodeRealFilename, readOptions );
		}

		exports.source = input;

		exports.jionCode = output;
			
		if( !jionDef ) jionDef = getJionDef( filename, module );

		exports.jionId = jionDef.id;

		exports.jionCodeFilename = jionCodeFilename;

		if( jionDef.json )
		{
			exports.hasJson = true;
		}
		else
		{
			exports.hasJson = false;

			attributes = jionDef.attributes;

			if( attributes )
			{
				for( a in attributes )
				{
					if( attributes[ a ].json )
					{
						exports.hasJson = true;

						break;
					}
				}
			}
		}
	}

	return exports;
};
