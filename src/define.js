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

let tim_path;
let timspec_provisional;
let timspec_timspec;

const readOptions = Object.freeze( { encoding : 'utf8' } );


/*
| Returns the realpath of a basefilename with a relative path.
*/
const getRealpath =
	function(
		base,    // the filename of the base
		relative // the relative path
	)
{
	// first the directory of the base
	base = base.substr( 0, base.lastIndexOf( '/' ) );

	return fs.realpathSync( base + '/' + relative + '.js' ) + '';
};


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
		timcodeRealFilename,  // absolute path filename of timcode file
		bootstrap,            // bootstrap mode
		provisionals          // to be post-loaded dependencies
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

	const subrequire =
		function(
			required
		)
	{
		// is this actually a classical require?
		if( required.indexOf( '/' ) < 0 ) return module.require.call( module, required );

		if( !tim_path ) tim_path = require( './path/path' );
		if( !timspec_provisional ) timspec_provisional = require( './timspec/provisional' );

		if( required === 'tim.js/path' ) return tim_path;
		if( required === 'tim.js/pathList' ) return require( './path/list' );
		if( required === 'tim.js/stringList' ) return require( './string/list' );
		if( required === 'tim.js/timspecTwig' ) return require( './timspec/twig' );

		let entry =
			tim.catalog.getByRelativePath(
				module.filename,
				tim_path.createFromString( required )
			);

		// already in the catalog
		// FIXME XXX privacy violation
		if( entry ) return entry.placeholder || entry._module.exports;

		const realpath = getRealpath( module.filename, required );

		entry = timspec_provisional.create( 'filename', realpath, 'placeholder', { } );

		provisionals.push( entry );

		tim.catalog.addEntry( entry );

		return entry.placeholder;
	};

	input( module.exports, bootstrap ? module.require.bind( module ) : subrequire );
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

	const bootstrap = tim._BOOTSTRAP;

	// FIXME
	const provisionals = [ ];

	let provisional;

	if( !bootstrap )
	{
		provisional = tim.catalog.getByRealpath( module.filename );

		if( provisional && provisional.timtype !== timspec_provisional ) provisional = undefined;
	}

	{
		const previousTIM = global.TIM;

		const previousRequire = module.require;

		const previousTimRequire = tim.require;

		global.TIM = true;

		module.require =
			function( required )
		{
			if( required.indexOf( '/' ) >= 0 )
			{
				requires[ required ] = true;

				console.log( 'WARN, old style require in ' + module.filename );
			}

			return previousRequire.call( module, required );
		};

		tim.require =
			function( required, now )
		{
			// is this actually a classical require?
			if( required.indexOf( '/' ) < 0 ) return previousRequire.call( module, required );

			if( bootstrap ) throw new Error( );

			if( !tim_path ) tim_path = require( './path/path' );
			if( !timspec_provisional ) timspec_provisional = require( './timspec/provisional' );

			if( required === 'tim.js/path' ) return tim_path;
			if( required === 'tim.js/pathList' ) return require( './path/list' );
			if( required === 'tim.js/stringList' ) return require( './string/list' );
			if( required === 'tim.js/timspecTwig' ) return require( './timspec/twig' );

			requires[ required ] = true;

			if( now === 'NOW' ) return previousRequire.call( module, required );

			let entry =
				tim.catalog.getByRelativePath(
					module.filename,
					tim_path.createFromString( required )
				);

			// already in the catalog
			// FIXME XXX privacy violation
			if( entry ) return entry.placeholder || entry._module.exports;

			const realpath = getRealpath( module.filename, required );

			entry = timspec_provisional.create( 'filename', realpath, 'placeholder', { } );

			provisionals.push( entry );

			tim.catalog.addEntry( entry );

			return entry.placeholder;
		};

		definer( def, provisional ? provisional.placeholder : module.exports );

		tim.require = previousTimRequire;

		global.TIM = previousTIM;

		module.require = previousRequire;
	}

	let rootDir, rootPath, timspec, timcodePath;

	if( !bootstrap )
	{
		if( !timspec_provisional ) timspec_provisional = require( './timspec/provisional' );
		if( !timspec_timspec ) timspec_timspec = require( './timspec/timspec' );

		timspec = timspec_timspec.createFromDef( def, module, requires );

		timspec = tim.catalog.addEntry( timspec );

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

	if( provisional ) module.exports = provisional.placeholder;

	loadTimcode( def, module, timcodeRealFilename, bootstrap, provisionals );

	const result = tim._prepare( module, def, module.exports );

	for( let a = 0, al = provisionals.length; a < al; a++ )
	{
		module.require( provisionals[ a ].filename );
	}

	module.exports.timcodeFilename = timcodeFilename;

	return result;
};
