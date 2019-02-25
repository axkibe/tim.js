/*
| Bootstraps tim.js in node environment.
*/
'use strict';


/*
| This has to be in node.
*/
if( !global.NODE ) throw new Error( );

if( typeof( global.CHECK ) !== 'boolean' ) throw new Error( );

require( './inspect' );


/*
| If freezing is unconfigured, default to yes
*/
if( global.FREEZE === undefined ) global.FREEZE = true;
// freezes only when configured to do so

/*
tim.setFreeze =
	function(
		freeze
	)
{
	if( typeof( freeze ) !== 'boolean' ) throw new Error( );

	tim.freeze = freeze ? Object.freeze : ( o ) -> o;
};
*/


/*
|  The tim module.
*/
exports = global.tim = module.exports;


/*
| In case a peer ouroboros changed the global, change it back.
*/
global.tim = module.exports;


// global pass flag for creators
global.pass = Object.freeze( { } );


require( './common' );


const proto =
exports.proto =
	require( './proto' );

const ending = 'src/root.js';

const filename = module.filename;

// if this filename is not bootstrap.js something is seriously amiss.
if( !filename.endsWith( ending ) ) throw new Error( );

const bootstrap =
tim._BOOTSTRAP =
	{ };

// the (src) root directory
const rootPath =
bootstrap.rootPath =
	filename.substr( 0, filename.length - ending.length );

// the timcode path
const timcodePath =
bootstrap.timcodePath =
	rootPath + 'timcode/';

const strapped = bootstrap.strapped = [ ];

tim.define = require( './define' );

// Catalog of all timspecs in current instace.
tim.catalog = require( './timspec/catalog' );

const timspec_timspec = require( './timspec/timspec' );

// finished bootstrapping
tim._BOOTSTRAP = undefined;

// adds tim.js itself to the catalog
tim.catalog.addRootDir( rootPath, 'tim.js', timcodePath, true );

// adds the previously skipped entries to the catalog
for( let a = 0, al = strapped.length; a < al; a++ )
{
	const strap = strapped[ a ];

	const timspec =
		timspec_timspec.createFromDef(
			strap.def,
			strap.module,
			strap.filename,
			strap.requires
		);

	tim.catalog.addTimspec( timspec );
}

tim.lazyFunctionInteger = proto.lazyFunctionInteger;

tim.lazyFunctionString = proto.lazyFunctionString;

tim.lazyStaticValue = proto.lazyStaticValue;

const fs = require( 'fs' );

tim.browserSource =
	fs.readFileSync(
		module.filename.substr( 0, module.filename.lastIndexOf( '/' ) + 1 )
		+ 'browser/init.js'
	);

tim.commonSource =
	fs.readFileSync(
		module.filename.substr( 0, module.filename.lastIndexOf( '/' ) + 1 )
		+ 'common.js'
	);

if( FREEZE ) Object.freeze( exports );
