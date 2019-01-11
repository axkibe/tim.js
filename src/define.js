/*
| Defines typed immutable classes.
|
| Runs the generator from node.js for the module
| that defines a tim class.
*/
'use strict';


if( !NODE ) throw new Error( );

const fs = require( 'fs' );

const vm = require( 'vm' );

const prepare = require( './prepare' );

let timspec_timspec;

const readOptions = { encoding : 'utf8' };

if( FREEZE ) Object.freeze( readOptions );


/*
| Creates the timcode if missing or out of date.
*/
const createTimcode =
	function(
		def,                 // tim definition  // FIXME remove
		timspec,             // timspec
		module,              // defining module
		timcodeRealFilename  // absolute path filename of timcode file
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 4 ) throw new Error( );
/**/}

	// tests if the timcode is out of date or not existing
	// and creates it if so.

	const inStat = fs.statSync( module.filename );

	let outStat;

	try
	{
		outStat = fs.statSync( timcodeRealFilename );
	}
	catch( e ) { /* ignore */ }

	if( !outStat || inStat.mtime > outStat.mtime )
	{
		console.log( 'timcode: ' + timcodeRealFilename );

		// requires the generator stuff only when needed
		const generator = require( './generator' );

		const format_formatter = require( './format/formatter' );

		const ast = generator.createGenerator( timspec, module ).ast;

		const output = format_formatter.format( ast );

		fs.writeFileSync( timcodeRealFilename, output );
	}
};


/*
| Loads the timcode.
*/
const loadTimcode =
	function(
		def,                  // tim definition
		module,               // defining module
		timcodeRealFilename   // absolute path filename of timcode file
	)
{
	// runs the timcode within the handed module context
	// so module.exports match exactly even with
	// circula references

	let input =
		'( function( self, require ) {'
		+ fs.readFileSync( timcodeRealFilename, readOptions )
		+ '\n} )';

	input =
		vm.runInThisContext(
			input,
			{ filename: timcodeRealFilename }
		);

	input( module.exports, module.require.bind( module ) );
};


/*
| The tim.define function.
*/
module.exports =
	function(
		module,   // module that makes the define
		definer   // callback to get the tim definition
	)
{
	if( arguments.length !== 2 ) throw new Error( );

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

	const previousTIM = global.TIM;

	global.TIM = true;

	definer( def, module.exports );

	global.TIM = previousTIM;

	const filename = module.filename;

	const bootstrap = tim._BOOTSTRAP;

	let rootDir, rootPath, timspec, timcodePath;

	if( !bootstrap )
	{
		if( !timspec_timspec ) timspec_timspec = require( './timspec/timspec' );

		timspec = timspec_timspec.createFromDef( def, module, filename );

		timspec = tim.catalog.addTimspec( timspec );

		rootDir = tim.catalog.getRootDir( timspec );

		rootPath = rootDir.realpath;

		timcodePath = rootDir.timcodePath;
	}
	else
	{
		bootstrap.strapped.push( { def: def, filename: filename, module: module } );

		rootPath = bootstrap.rootPath;

		timcodePath = bootstrap.timcodePath;
	}

	const timcodeFilename =
		filename
		.substr( rootPath.length + 1 )
		.replace( /\//g, '-' );

	const timcodeRealFilename = timcodePath + '/' + timcodeFilename;

	if( rootDir && !rootDir.noTimcodeGen && timspec )
	{
		createTimcode( def, timspec, module, timcodeRealFilename );
	}

	loadTimcode( def, module, timcodeRealFilename );

	const exports = module.exports;

	//exports.def = def;

	exports.timcodeFilename = timcodeFilename;

	return prepare( module, def, exports );
};
