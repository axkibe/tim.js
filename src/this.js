/*
| Runs the jion generator from node for the
| module that requires this.
*/

'use strict';


var
	findJionCodeRootDir,
	fs,
	format_formatter,
	generator,
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
		global,
		filename,
		input,
		inStat,
		jionCodeRootDir,
		jionCodeFilename,
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
		jionCodeRootDir
		+ 'jioncode/'
		+ filename.substr( jionCodeRootDir.length ).replace( /\//g, '-' );

	global = { JION : true };

	global.GLOBAL = global;

	global.require = module.require.bind( module );

	input = fs.readFileSync( filename, readOptions );

	jionDef = vm.runInNewContext( input, global, filename );

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
			console.log( 'jioncode: ' + jionCodeFilename );

			// requires the generator stuff only when needed
			generator = require( './generator' );

			format_formatter = require( './format/formatter' );

			ast = generator.generate( jionDef );

			output = format_formatter.format( ast );

			fs.writeFileSync( jionCodeFilename, output );
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
		fs.readFileSync( jionCodeFilename ),
		context,
		jionCodeFilename
	);

	if( source )
	{
		if( !input )
		{
			input = fs.readFileSync( filename, readOptions );
		}

		if( !output )
		{
			output = fs.readFileSync( jionCodeFilename, readOptions );
		}

		module.exports.source = input;

		module.exports.jioncode = output;

		module.exports.jionId = jionDef.id;

		if( jionDef.json )
		{
			module.exports.hasJson = true;
		}
		else
		{
			module.exports.hasJson = false;

			attributes = jionDef.attributes;

			if( attributes )
			{
				for( a in attributes )
				{
					if( attributes[ a ].json )
					{
						module.exports.hasJson = true;

						break;
					}
				}
			}
		}
	}

	return module.exports;
};
