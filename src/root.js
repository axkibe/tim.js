'use strict';

/*
| This is in node obviously.
|
| FUTURE: Altering globals as package is not nice
|         but dunno better right now.
*/
global.NODE = true;

global.CHECK = !!global.CHECK;

/*
| If freezing is unconfigured, default to yes
*/
if( global.FREEZE === undefined ) global.FREEZE = true;


/*
|  The tim module.
*/
global.tim =
exports = module.exports;

tim.ouroboros = require( './ouroboros' );

const proto =
exports.proto = require( './proto.js' );

exports.path = require( './path.js' );

exports.pathList = require( './pathList.js' );

exports.stringList = require( './stringList.js' );

exports.copy = proto.copy;

exports.isString = proto.isString;

exports.lazyFunctionInteger = proto.lazyFunctionInteger;

exports.lazyFunctionString = proto.lazyFunctionString;

exports.lazyStaticValue = proto.lazyStaticValue;

exports.lazyValue = proto.lazyValue;

exports.aheadFunctionInteger = proto.aheadFunctionInteger;

exports.aheadValue = proto.aheadValue;

exports.define = require( './define' );

exports.browserSource =
	require( 'fs' ).readFileSync(
		module.filename.substr( 0, module.filename.lastIndexOf( '/' ) + 1 )
		+ 'browser.js'
	);

if( FREEZE ) Object.freeze( exports );

