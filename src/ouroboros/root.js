/*
| Runs the timcode generator for the tim package itself.
*/
'use strict';

Error.stackTraceLimit = 99999;
//Error.stackTraceLimit = 20;

global.CHECK = true;

global.TIM = false;

global.FREEZE = true;

global.NODE = true;

const argv = process.argv;

const fs = require( 'fs' );

const vm = require( 'vm' );

require( '../root' );

const format_formatter = require( '../format/formatter' );

const generator = require( '../generator' );

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

let myDir = module.filename;

for( let a = 0; a < 3; a++ )
{
	myDir = myDir.substr( 0, myDir.lastIndexOf( '/' ) );
}

myDir += '/';

if( targetDir !== myDir )
{
	tim.tree.addTree( targetDir, 'ouroborosTarget' );

	tim.catalog.addRootDir( targetDir, 'ouroborosTarget', true );
}


const listing = require( targetDir + 'src/ouroboros/listing' );

// "sub"-require
const srequire =
	function( stim, inFilename, requireFilename )
{
	if( requireFilename[ 0 ] !== '.' ) return require( requireFilename );

	return(
		require(
			inFilename.substr( 0, inFilename.lastIndexOf( '/' ) )
			+ '/'
			+ requireFilename
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
		func : { },
		inherit : { },
		lazy : { },
		lazyFuncInt : { },
		lazyFuncStr : { },
		static : { },
		staticLazy : { },
		transform : { },
	};

	stim.define = sdefine.bind( undefined, def );

	input =
		vm.runInThisContext(
			input,
			{ filename: inFilename }
		);

	const smodule =
	{
		filename : inFilename,
		require : srequire.bind( undefined, stim, inFilename ),
		exports : { }
	};

	input( smodule, smodule.require, stim );

	const ast = generator.createGenerator( def, smodule ).ast;

	const output = format_formatter.format( ast );

	console.log( '  writing ' + outFilename );

	fs.writeFileSync( outFilename, output );
}

console.log( '  done' );

