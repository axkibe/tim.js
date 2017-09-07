'use strict';

var
	exports,
	fs,
	proto;

fs = require( 'fs' );

/*
| This is in node obviously.
|
| FUTURE: Altering globals as package is not nice
|         but dunno better right now.
*/
global.NODE = true;

global.JION = false;

global.CHECK = !!global.CHECK;

/*
| If freezing is unconfigured, default to yes
*/
if( global.FREEZE === undefined ) global.FREEZE = true;

/*
|  The jion module.
*/
exports = module.exports;

exports.this = require( './this.js' );

proto =
exports.proto = require( './proto.js' );

exports.path = require( './path.js' );

exports.pathList = require( './pathList.js' );

exports.stringList = require( './stringList.js' );

exports.copy = proto.copy;

exports.isString = proto.isString;

exports.lazyFunctionInteger = proto.lazyFunctionInteger;

exports.lazyFunctionString = proto.lazyFunctionString;

exports.lazyValue = proto.lazyValue;

exports.aheadFunctionInteger = proto.aheadFunctionInteger;

exports.aheadValue = proto.aheadValue;

if( FREEZE )
{
	Object.freeze( exports );
}
