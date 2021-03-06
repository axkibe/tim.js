/*
| Runs the timcode generator for the tim package itself.
*/
'use strict';

Error.stackTraceLimit = 99999;
//Error.stackTraceLimit = 20;

global.CHECK = true;

global.TIM = false;

global.NODE = true;

const argv = process.argv;

const fs = require( 'fs' );

const vm = require( 'vm' );

require( '../root' );

const format_formatter = require( '../format/formatter' );

const generator = require( '../generator' );

const timspec_timspec = require( '../timspec/timspec' );

const readOptions = { encoding : 'utf8' };


if( argv.length !== 3 )
{
	console.error( 'Usage: ' + argv[ 0 ] + ' ' + argv[ 1 ] + ' [tim.js root dir]' );

	process.exit( -1 );
}

const targetDir = argv[ 2 ];

if( targetDir[ targetDir.length - 1 ] !== '/' )
{
	console.error( argv[ 2 ] + ' does not end with a \'/\'' );

	process.exit( -1 );
}

let myDir;

{
	const ending = 'src/ouroboros/root.js';

	const filename = module.filename;

	// if this filename is not bootstrap.js something is seriously amiss.
	if( !filename.endsWith( ending ) ) throw new Error( );

	myDir = filename.substr( 0, filename.length - ending.length );
}


if( targetDir !== myDir )
{
	const targetTimcodeDir = targetDir + 'timcode/';

	tim.catalog.addRootDir( targetDir, 'ouroborosTarget', targetTimcodeDir, true );
}

const listing = require( targetDir + 'src/ouroboros/listing' );


// "sub"-require
const srequire =
	function(
		inFilename,   // basename of the requiring module
		requireName   // name of the required module
	)
{
	if( requireName[ 0 ] !== '.' ) return require( requireName );

	return(
		require(
			inFilename.substr( 0, inFilename.lastIndexOf( '/' ) )
			+ '/'
			+ requireName
		)
	);
};


// "sub"-define
const sdefine =
	function(
		def,
		module,
		definer
	)
{
	global.TIM = true;

/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 3 ) throw new Error( );
/**/}

	definer( def, { } );

	global.TIM = false;
};


/*
| Prepares the listings filenames
*/
for( let a = 0, al = listing.length; a < al; a++ )
{
	const inFilename = targetDir + listing[ a ];

	const outFilename = targetDir + 'timcode/' + listing[ a ].replace( /\//g, '-' );

	console.log( '  reading ' + inFilename );

	let input =
		'( function( module, require, tim ) { '
		+ fs.readFileSync( inFilename, readOptions )
		+ '\n} )';

	// "sub"-tim
	const stim = { };

	stim.typemap = tim.typemap;

	const def =
	{
		adjust : { },
		inherit : { },
		lazy : { },
		lazyFunc : { },
		proto : { },
		static : { },
		staticLazy : { },
	};

	stim.define = sdefine.bind( undefined, def );
	stim.copy = tim.copy;

	input = vm.runInThisContext( input, { filename: inFilename } );

	const smodule =
	{
		filename : inFilename,
		require : srequire.bind( undefined, inFilename ),
		exports : { }
	};

	stim.require = smodule.require;

	input( smodule, smodule.require, stim );

	const timspec = timspec_timspec.createFromDef( def, smodule, { } );

	const ast = generator.createGenerator( timspec, smodule ).ast;

	const output = format_formatter.format( ast );

	console.log( '  writing ' + outFilename );

	fs.writeFileSync( outFilename, output );
}

console.log( '  done' );

