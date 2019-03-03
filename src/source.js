/*
| Provides some files as source for browser.
*/
'use strict';


tim.define( module, ( def ) => {

const fs = require( 'fs' );

def.abstract = true;

const dir = module.filename.substr( 0, module.filename.lastIndexOf( '/' ) + 1 );

def.staticLazy.browserCatalog = ( ) =>
	fs.readFileSync( dir + 'browser/catalog.js' ) + '';

def.staticLazy.browserInit = ( ) =>
	fs.readFileSync( dir + 'browser/init.js' ) + '';

def.staticLazy.common = ( ) =>
	fs.readFileSync( dir + 'common.js' ) + '';

def.staticLazy.proto = ( ) =>
	fs.readFileSync( dir + 'proto.js' ) + '';

} );
