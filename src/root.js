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
GLOBAL.NODE = true;

GLOBAL.JION = false;

GLOBAL.CHECK = !!GLOBAL.CHECK;

/*
| If freezing is unconfigured, default to yes
*/
if( GLOBAL.FREEZE === undefined ) GLOBAL.FREEZE = true;

/*
|  The jion module.
*/
exports = module.exports;

exports.this = require( './this.js' );

proto =
exports.proto = require( './proto.js' );

exports.path = require( './path.js' );

exports.stringRay = require( './stringRay.js' );

exports.copy = proto.copy;

exports.isString = proto.isString;

exports.lazyFunctionString = proto.lazyFunctionString;

exports.lazyValue = proto.lazyValue;

if( FREEZE )
{
	Object.freeze( exports );
}
