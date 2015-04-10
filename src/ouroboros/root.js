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
	jionDef,
	jionDefRequire,
	input,
	listing,
	list,
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
|
| FIXME combine this two loops
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

	list.push(
		{
			inFilename : inFilename,
			outFilename : outFilename
		}
	);
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

	inFilename = file.inFilename;

	outFilename = file.outFilename;

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

		input = fs.readFileSync( inFilename, readOptions );

		global = { JION : true };

		global.GLOBAL = global;

		global.require = jionDefRequire.bind( undefined, inFilename );

		jionDef = vm.runInNewContext( input, global, file.inFilename );

		ast = generator.generate( jionDef, 'ouroboros' );

		output = format_formatter.format( ast );

		console.log( 'Writing ' + file.outFilename );

		fs.writeFileSync( file.outFilename, output );
	}
}

console.log( 'jion ouroboros: done' );

} )( );
