/*
| Bootstraps tim.js useage of tim objects.
*/
'use strict';


/*
| This has to be in node.
*/
if( !global.NODE ) throw new Error( );


//const define = require( './define' );

const bootstrap = tim._BOOTSTRAP = { };

const ending = '/src/bootstrap.js';

const filename = module.filename;

// if this filename is not bootstrap.js something is seriously amiss.
if( !filename.endsWith( ending ) ) throw new Error( );

bootstrap.rootDir = filename.substr( 0, filename.length - ending.length + 1 );

bootstrap.strapped = [ ];

/*
| Catalog of all timspecs in current instace.
*/
tim.catalog = require( './timspec/catalog' );

tim._BOOTSTRAP = undefined;

// XXX
for( let a = 0, aLen = bootstrap.strapped.length; a < aLen; a++ )
{
	console.log( 'XX STRAPPED', bootstrap.strapped[ a ].filename );
}
