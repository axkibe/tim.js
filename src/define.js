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
| Returns the first parent directory
| of a filepath that contains a 'timcode'
| subdirectory.
|
| Or returns undefined if no such exists.
*/
const findTimCodeRootDir =
	function(
		path       // path to start looking at
	)
{
	let stat;

	while( true )
	{
		const slash = path.lastIndexOf( '/' );

		if( slash < 0 )
		{
			throw new Error(
				'cannot find a parent directory '
				+ 'containing a timcode/ directory for: '
				+ path
			);
		}

		path = path.substr( 0, slash );

		try
		{
			stat = fs.statSync( path + '/timcode/' );
		}
		catch( e ) { /* ignore */ }

		if( stat ) return path + '/';
	}
};


const createAndLoadTimcode =
	function(
		timDef,                // tim definition
		id,                    // tim id
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

		let jsonTypeMap;

		try
		{
			jsonTypeMap = require( timcodeRootDir + 'src/json/typemap' );
		}
		catch( e ) { /* ignore */ }
		
		const ast = generator.generate( timDef, id, jsonTypeMap );

		const output = format_formatter.format( ast );

		fs.writeFileSync( timcodeRealFilename, output );
	}
	
	// loads the timcode.

	// runs the timcode within the handed module context
	// so module.exports match exactly even with
	// circula references

	let input =
		'( function( ' + id + ', module, require, tim_proto ) { '
		+ fs.readFileSync( timcodeRealFilename, readOptions )
		+ '\n} )';

	input =
		vm.runInThisContext(
			input,
			{ filename: timcodeRealFilename }
		);

	input( module.exports, module, module.require.bind( module ), tim_proto );
};


/*
| Returns true if a timDef has a json component
*/
const timDefHasJson =
	function(
		timDef
	)
{
	if( timDef.json ) return true;

	const attributes = timDef.attributes;

	if( !attributes ) return false;

	for( let a in attributes )
	{
		if( attributes[ a ].json ) return true;
	}

	return false;
};	


module.exports =
	function(
		module,   // module that makes the define
		id,       // the id to be generated
		definer   // callback to get the timDef
	)
{
	const timDef =
	{
		static : { },

		staticLazy : { },

		func : { },

		lazy : { },
	};

	definer( timDef, module.exports );

	const filename = module.filename;

	const timcodeRootDir = findTimCodeRootDir( filename );

	const timcodeFilename =
		'timcode/'
		+ filename
		.substr( timcodeRootDir.length )
		.replace( /\//g, '-' );
	
	createAndLoadTimcode( timDef, id, module, timcodeRootDir, timcodeFilename );

	const exports = module.exports;

	// FIXME check if this is really needs to be here
	exports.source = fs.readFileSync( filename, readOptions );

	exports.timcode = fs.readFileSync( timcodeRootDir + timcodeFilename, readOptions );

	// FIXME
	exports.jionId = timDef.id;

	exports.timcodeFilename = timcodeFilename;

	exports.hasJson = timDefHasJson( timDef );

	// assigns statics
	for( let name in timDef.static )
	{
		exports[ name ] = timDef.static[ name ];
	}

	// assigns lazy statics
	for( let name in timDef.staticLazy )
	{
		tim_proto.lazyStaticValue(
			exports,
			name,
			timDef.staticLazy[ name ]
		);
	}

	// assigns lazy values to the prototype
	for( let name in timDef.lazy )
	{
		tim_proto.lazyValue(
			exports.prototype,
			name,
			timDef.lazy[ name ]
		);
	}

	// assigns functions to the prototype
	for( let name in timDef.func )
	{
		exports.prototype[ name ] = timDef.func[ name ];
	}
	
	return exports;
};
