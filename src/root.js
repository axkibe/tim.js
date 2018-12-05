/*
| Bootstraps tim.js
*/
'use strict';


/*
| This has to be in node.
*/
if( !global.NODE ) throw new Error( );

if( typeof( global.CHECK ) !== 'boolean' ) throw new Error( );


/*
| If freezing is unconfigured, default to yes
*/
if( global.FREEZE === undefined ) global.FREEZE = true;


/*
|  The tim module.
*/
exports = global.tim = module.exports;


/*
| In case a peer ouroboros changed the global, change it back.
*/
global.tim = module.exports;

const proto = exports.proto = require( './proto' );

const bootstrap = tim._BOOTSTRAP = { };

const ending = '/src/root.js';

const filename = module.filename;

// if this filename is not bootstrap.js something is seriously amiss.
if( !filename.endsWith( ending ) ) throw new Error( );

const rootDir = filename.substr( 0, filename.length - ending.length + 1 );

const strapped = bootstrap.strapped = [ ];

// FIXME remove
tim.findTimcodeRootDir = require( './findTimcodeRootDir' );

tim.define = require( './define' );

// FIXME remove
tim.tree = require( './tree/node' );

// Catalog of all timspecs in current instace.
tim.catalog = require( './timspec/catalog' );

tim._BOOTSTRAP = undefined;

// adds tim.js itself to the catalog
tim.catalog.addRootDir( rootDir, 'tim.js', true );

// adds the previously skipped entries to the catalog
for( let a = 0, aLen = strapped.length; a < aLen; a++ )
{
	const strap = strapped[ a ];

	tim.catalog.addTimspec( strap.filename, strap.def );
}

tim.import = require( './import' );

tim.copy = proto.copy;

tim.lazyFunctionInteger = proto.lazyFunctionInteger;

tim.lazyFunctionString = proto.lazyFunctionString;

tim.lazyStaticValue = proto.lazyStaticValue;

tim.lazyValue = proto.lazyValue;

tim.aheadFunctionInteger = proto.aheadFunctionInteger;

tim.aheadValue = proto.aheadValue;

//exports.define = require( './define' );

const fs = require( 'fs' );

tim.browserSource =
	fs.readFileSync(
		module.filename.substr( 0, module.filename.lastIndexOf( '/' ) + 1 )
		+ 'browser.js'
	);

tim.browserTreeSource =
	fs.readFileSync(
		module.filename.substr( 0, module.filename.lastIndexOf( '/' ) + 1 )
		+ 'tree/browser.js'
	);


if( FREEZE ) Object.freeze( exports );
