/*
| Runs the jioncode generator for the jion package itself.
*/

/*
| Capsule.
*/
(function( ) {
'use strict';

Error.stackTraceLimit = 99999;
Error.stackTraceLimit = 20;

GLOBAL.CHECK = true;

GLOBAL.JION = false;

GLOBAL.FREEZE = true;

GLOBAL.NODE = true;


var
	a,
	all,
	ast,
	aZ,
	arg,
	argV,
	fs,
	format_formatter,
	generator,
	inFilename,
	inStat,
	jionDef,
	jionDefRequire,
	input,
	listing,
	myDir,
	outFilename,
	outStat,
	output,
	readOptions,
	vm;

argV = process.argv;

fs = require( 'fs' );

vm = require( 'vm' );

format_formatter = require( '../format/formatter' );

generator = require( '../generator' );

listing = require( './listing' );

all = false;

readOptions = { encoding : 'utf8' };


/*
| Parses arguments.
*/
for(
	a = 2, aZ = argV.length;
	a < aZ;
	a++
)
{
	arg = argV[ a ];

	switch( arg )
	{
		case '--all' :

			all = true;

			continue;

		default :

			console.log( 'Invalid argument: ' + arg );

			process.exit( -1 );
	}
}


myDir = module.filename;

for( a = 0; a < 3; a++ )
{
	myDir = myDir.substr( 0, myDir.lastIndexOf( '/' ) );
}

myDir += '/';


jionDefRequire =
	function( inFilename, requireFilename )
{
	return(
		require(
			myDir
			+ inFilename.substr( 0, inFilename.lastIndexOf( '/' ) )
			+ '/'
			+ requireFilename
		)
	);
};


/*
| Prepares the listings filenames
*/
for(
	a = 0, aZ = listing.length;
	a < aZ;
	a++
)
{
	inFilename = listing[ a ];

	outFilename =
		'./jioncode/'
		+ inFilename.replace( /\//g, '-' );

	inStat = fs.statSync(  inFilename );

	try
	{
		outStat = fs.statSync( outFilename );
	}
	catch( e )
	{
		outStat = undefined;
	}

	if(
		all
		|| !outStat
		|| outStat.mtime <= inStat.mtime
	)
	{
		console.log( 'Reading ' + inFilename );

		input =
		  	'( function( module, require, JION ) { '
			+ fs.readFileSync( inFilename, readOptions )
			+ '\n} )';


		try
		{
			input =
				vm.runInThisContext(
					input,
					{ filename: inFilename }
				);

			input(
				module,
				jionDefRequire.bind( undefined, inFilename ),
				true
			);

			throw new Error( 'Requested jion definition, but non thrown' );
		}
		catch( e )
		{
			if( e.id ) jionDef = e;
			else throw e;
		}

		ast = generator.generate( jionDef, 'ouroboros' );

		output = format_formatter.format( ast );

		console.log( 'Writing ' + outFilename );

		fs.writeFileSync( outFilename, output );
	}
}

console.log( 'jion ouroboros: done' );

} )( );
