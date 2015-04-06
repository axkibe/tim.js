/*
| Runs the jioncode generator for the jion package itself.
*/

/*
| Capsule.
*/
(function( ) {
'use strict';

Error.stackTraceLimit = 99999;

GLOBAL.CHECK = true;

GLOBAL.JION = false;

GLOBAL.FREEZE = true;

GLOBAL.SERVER = true;  // FIXME

GLOBAL.NODE = true;


var
	a,
	all,
	ast,
	aZ,
	arg,
	argV,
	file,
	fs,
	format_formatter,
	generator,
	global,
	inFilename,
	inStat,
	jion,
	input,
	listing,
	list,
	outFilename,
	outStat,
	output,
	readOptions,
	vm;

argV = process.argv;

fs = require( 'fs' );

vm = require( 'vm' );

format_formatter = require( '../format/formatter' );

generator = require( '../jion/generator' );

listing = require( './listing' );

all = false;

list = [ ];

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


/*
| Prepares the listings filenames
*/
for(
	a = 0, aZ = listing.list.length;
	a < aZ;
	a++
)
{
	inFilename = listing.list[ a ];

	outFilename =
		'./jioncode/'
		+ inFilename.replace( /\//g, '-' );

	list.push(
		{
			inFilename : inFilename,
			outFilename : outFilename
		}
	);
}


/*
| Generates jions if the input file is newer
| than the output or if --all is set.
*/
for(
	a = 0, aZ = list.length;
	a < aZ;
	a++
)
{
	file = list[ a ];

	inStat = fs.statSync(  file.inFilename );

	try
	{
		outStat = fs.statSync( file.outFilename );
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
		console.log( 'Reading ' + file.inFilename );

		input = fs.readFileSync( file.inFilename, readOptions );

		global = { JION : true };

		global.GLOBAL = global;

		jion = vm.runInNewContext( input, global, file.inFilename );

		ast = generator.generate( jion, 'ouroboros' );

		output = format_formatter.format( ast );

		console.log( 'Writing ' + file.outFilename );

		fs.writeFileSync( file.outFilename, output );
	}
}

console.log( 'jion ouroboros: done' );

} )( );
