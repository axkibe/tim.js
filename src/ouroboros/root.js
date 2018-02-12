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

const proto = require( '../proto' );

global.tim =
{
	define         : require( '../define' ),
	proto          : proto,
	tree           : require( '../tree/node' ),
	aheadValue     : proto.aheadValue,
	ouroborosBuild : true,
	typemap        : require( '../typemap' ),
};

const argV = process.argv;

const fs = require( 'fs' );

const vm = require( 'vm' );

const format_formatter = require( '../format/formatter' );

const generator = require( '../generator' );

const listing = require( './listing' );

let all = false;

const readOptions = { encoding : 'utf8' };


/*
| Parses arguments.
*/
for( let a = 2, al = argV.length; a < al; a++ )
{
	const arg = argV[ a ];

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


let myDir = module.filename;

for( let a = 0; a < 3; a++ )
{
	myDir = myDir.substr( 0, myDir.lastIndexOf( '/' ) );
}

myDir += '/';


// "sub"-require
const srequire =
	function( stim, inFilename, requireFilename )
{
	if( requireFilename === '../ouroboros' || requireFilename === './ouroboros' )
	{
		return stim;
	}

	if( requireFilename[ 0 ] !== '.' )
	{
		return require( requireFilename );
	}

	return(
		require(
			myDir
			+ inFilename.substr( 0, inFilename.lastIndexOf( '/' ) )
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
		id,
		definer
	)
{
	global.TIM = true;

	definer( def, { } );

	def.id = id;

	global.TIM = false;
};


/*
| Prepares the listings filenames
*/
for( let a = 0, al = listing.length; a < al; a++ )
{
	const inFilename = listing[ a ];

	const outFilename = './timcode/' + inFilename.replace( /\//g, '-' );

	const inStat = fs.statSync(  inFilename );

	let outStat;

	try
	{
		outStat = fs.statSync( outFilename );
	}
	catch( e )
	{
		// nothing
	}

	if(
		all
		|| !outStat
		|| outStat.mtime <= inStat.mtime
	)
	{
		console.log( 'Reading ' + inFilename );

		let input =
		  	'( function( module, require, tim ) { '
			+ fs.readFileSync( inFilename, readOptions )
			+ '\n} )';

		// "sub"-tim
		const stim = { };

		stim.ouroboros = stim;

		stim.typemap = tim.typemap;

		const def =
		{
			static : { },
			staticLazy : { },
			func : { },
			lazy : { },
			lazyFuncInt : { },
			lazyFuncStr : { },
		};

		stim.define = sdefine.bind( undefined, def );

		input =
			vm.runInThisContext(
				input,
				{ filename: inFilename }
			);

		const smodule =
		{
			filename : myDir + inFilename,
			require : srequire.bind( undefined, stim, inFilename ),
			exports : { }
		};

		input( smodule, smodule.require, stim );

		const ast = generator.generate( def, def.id, undefined );

		const output = format_formatter.format( ast );

		console.log( 'Writing ' + outFilename );

		fs.writeFileSync( outFilename, output );
	}
}

console.log( 'tim ouroboros: done' );

