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

let timspec_timspec;

const readOptions = Object.freeze( { encoding : 'utf8' } );


/*
| Creates the timcode if missing or out of date.
*/
const createTimcode =
	function(
		timspec,             // timspec
		module,              // defining module
		timcodeRealFilename  // absolute path filename of timcode file
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 3 ) throw new Error( );
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
		adjust : { },
		inherit : { },
		proto : { },
		lazy : { },
		lazyFuncInt : { },
		lazyFuncStr : { },
		static : { },
		staticLazy : { },
	};

	const requires = { };

	{
		const previousTIM = global.TIM;

		const previousRequire = module.require;

		global.TIM = true;

		module.require =
			function( required )
		{
			if( required.indexOf( '/' ) >= 0 ) requires[ required ] = true;

			return previousRequire.call( module, required );
		};

		definer( def, module.exports );

		global.TIM = previousTIM;

		module.require = previousRequire;
	}

	const bootstrap = tim._BOOTSTRAP;

	let rootDir, rootPath, timspec, timcodePath;

	if( !bootstrap )
	{
		if( !timspec_timspec ) timspec_timspec = require( './timspec/timspec' );

		timspec = timspec_timspec.createFromDef( def, module, requires );

		timspec = tim.catalog.addTimspec( timspec );

		rootDir = tim.catalog.getRootDir( timspec );

		rootPath = rootDir.realpath;

		timcodePath = rootDir.timcodePath;
	}
	else
	{
		bootstrap.strapped.push( {
			def: def,
			module: module,
			requires: requires
		} );

		rootPath = bootstrap.rootPath;

		timcodePath = bootstrap.timcodePath;
	}

	const timcodeFilename =
		module
		.filename
		.substr( rootPath.length )
		.replace( /\//g, '-' );

	const timcodeRealFilename = timcodePath + timcodeFilename;

	if( rootDir && !rootDir.noTimcodeGen && timspec )
	{
		createTimcode( timspec, module, timcodeRealFilename );
	}

	loadTimcode( def, module, timcodeRealFilename );

	const exports = module.exports;

	exports.timcodeFilename = timcodeFilename;

	return tim._prepare( module, def, exports );
};
