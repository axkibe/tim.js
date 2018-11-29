/*
| Defines typed immutable classes.
|
| Runs the generator from node.js for the module
| that defines a tim class.
*/
'use strict';


if( !NODE ) throw new Error( );

const fs = require( 'fs' );

const tim_proto = require( './proto' );

const vm = require( 'vm' );


/*
| needs the 'pass' global being set.
*/
require( './proto' );

const readOptions = { encoding : 'utf8' };

if( FREEZE ) Object.freeze( readOptions );


/*
| Creates the timcode if missing or out of date.
*/
const createTimcode =
	function(
		def,                   // tim definition
		module,                // defining module
		timcodeRootDir,		   // root dir of timecode
		timcodeFilename        // filename of timcode file
	)
{
	// tests if the timcode is out of date or not existing
	// and creates it if so.

	const inStat = fs.statSync( module.filename );

	const timcodeRealFilename = timcodeRootDir + timcodeFilename;

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

		const ast = generator.createGenerator( def, module ).ast;

		const output = format_formatter.format( ast );

		fs.writeFileSync( timcodeRealFilename, output );
	}
};


/*
| Loads the timcode.
*/
const loadTimcode =
	function(
		def,                // tim definition
		module,                // defining module
		timcodeRootDir,		   // root dir of timecode
		timcodeFilename        // filename of timcode file
	)
{
	// runs the timcode within the handed module context
	// so module.exports match exactly even with
	// circula references
	const timcodeRealFilename = timcodeRootDir + timcodeFilename;

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
| Returns true if a def has a json component
*/
const timDefHasJson =
	function(
		def
	)
{
	if( def.json ) return true;

	const attributes = def.attributes;

	if( !attributes ) return false;

	for( let a in attributes )
	{
		if( attributes[ a ].json ) return true;
	}

	return false;
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

	// FUTURE this here adds too much.
	tim.tree.addLeaf( filename, def.json );

	const timcodeRootDir = tim.findTimcodeRootDir( filename );

	const timcodeFilename =
		'timcode/'
		+ filename
		.substr( timcodeRootDir.length )
		.replace( /\//g, '-' );

	if( !tim.ouroborosBuild )
	{
		createTimcode( def, module, timcodeRootDir, timcodeFilename );
	}

	loadTimcode( def, module, timcodeRootDir, timcodeFilename );

	const exports = module.exports;

	exports.def = def;

	exports.timcodeFilename = timcodeFilename;

	exports.hasJson = timDefHasJson( def );

	// assigns statics
	for( let name in def.static )
	{
		exports[ name ] = def.static[ name ];
	}

	// assigns lazy statics
	for( let name in def.staticLazy )
	{
		tim_proto.lazyStaticValue(
			exports,
			name,
			def.staticLazy[ name ]
		);
	}

	// assigns lazy values to the prototype
	for( let name in def.lazy )
	{
		tim_proto.lazyValue(
			exports.prototype,
			name,
			def.lazy[ name ]
		);
	}

	// assigns lazy integer functions to the prototype
	for( let name in def.lazyFuncInt )
	{
		tim_proto.lazyFunctionInteger(
			exports.prototype,
			name,
			def.lazyFuncInt[ name ]
		);
	}

	// assigns lazy string functions to the prototype
	for( let name in def.lazyFuncStr )
	{
		tim_proto.lazyFunctionString(
			exports.prototype,
			name,
			def.lazyFuncStr[ name ]
		);
	}

	// assigns functions to the prototype
	for( let name in def.func )
	{
		exports.prototype[ name ] = def.func[ name ];
	}

	// assigns transforms to the prototype
	for( let name in def.transform )
	{
		const tname = '__transform_' + name;

		exports.prototype[ tname ] = def.transform[ name ];
	}

	// assigns inherit optimizations to the prototype
	for( let name in def.inherit )
	{
		exports.prototype[ '__inherit_' + name ] = def.inherit[ name ];
	}

	return exports;
};
