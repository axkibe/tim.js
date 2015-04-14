'use strict';

var
	exports,
	formatter,
	fs,
	generator,
	proto;

fs = require( 'fs' );

/*
| This is in node obviously.
*/
GLOBAL.NODE = true;

// FIXME
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


// FIXME remove/fix
generator = require( './generator' );
formatter = require( './format/formatter' );
exports.makeJionCode =
	function(
		jionDef
	)
{
	var
		ast;

	ast = generator.generate( jionDef );

	return formatter.format( ast );
};


if( FREEZE )
{
	Object.freeze( exports );
}
