/*
| FIXME
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

tim.ouroboros = require( './ouroboros' );


/*
| In case a peer ouroboros changed the global, change it back.
*/
global.tim = module.exports;

const proto = exports.proto = require( './proto' );


require( './bootstrap' );



/*
| FIXME remove
*/
exports.tree = require( './tree/node' );

exports.import = require( './import' );

exports.copy = proto.copy;

exports.lazyFunctionInteger = proto.lazyFunctionInteger;

exports.lazyFunctionString = proto.lazyFunctionString;

exports.lazyStaticValue = proto.lazyStaticValue;

exports.lazyValue = proto.lazyValue;

exports.aheadFunctionInteger = proto.aheadFunctionInteger;

exports.aheadValue = proto.aheadValue;

exports.define = require( './define' );

const fs = require( 'fs' );

exports.browserSource =
	fs.readFileSync(
		module.filename.substr( 0, module.filename.lastIndexOf( '/' ) + 1 )
		+ 'browser.js'
	);

exports.browserTreeSource =
	fs.readFileSync(
		module.filename.substr( 0, module.filename.lastIndexOf( '/' ) + 1 )
		+ 'tree/browser.js'
	);

exports.findTimcodeRootDir = require( './findTimcodeRootDir' );




if( FREEZE ) Object.freeze( exports );

