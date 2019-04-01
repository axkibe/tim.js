/*
| Bootstraps tim.js in node environment.
*/
'use strict';


// this has to be in node.
if( !global.NODE ) throw new Error( );

if( typeof( global.CHECK ) !== 'boolean' ) throw new Error( );

require( './inspect' );

// sets tim global false.
global.TIM = false;

// the tim module.
exports = global.tim = module.exports;

// in case a peer ouroboros changed the global, change it back.
global.tim = module.exports;

// global pass flag for creators
global.pass = Object.freeze( { } );


require( './common' );


exports.proto = require( './proto' );

const ending = 'src/root.js';

const filename = module.filename;

// if this filename is not bootstrap.js something is seriously amiss.
if( !filename.endsWith( ending ) ) throw new Error( );

const bootstrap = tim._BOOTSTRAP = { };

// the (src) root directory
const rootPath = bootstrap.rootPath = filename.substr( 0, filename.length - ending.length );

// the timcode path
const timcodePath = bootstrap.timcodePath = rootPath + 'timcode/';

const strapped = bootstrap.strapped = [ ];

tim.define = require( './define' );

// Catalog of all timspecs in current instace.
const timspec_catalog = require( './timspec/catalog' );

tim.catalog = timspec_catalog.create( );

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
			strap.requires
		);

	tim.catalog.addEntry( timspec );
}

// additional exports
tim.source = require( './source' );
