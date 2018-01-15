'use strict';

/*
| This is in node obviously.
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

console.log( module );

tim._timPaths = [ ];

( ( ) => {
	let path = module.filename.split( '/' );
	path.pop( );
	path.pop( );
	tim._timPaths.push( path.join( '/' ) + '/' );
} ) ( );

/*
| Adds a path to the timPaths
*/
tim.addPath = ( path ) => tim._timPaths.push( path );

tim.ouroboros = require( './ouroboros' );

const proto = exports.proto = require( './proto.js' );

exports.path = require( './path.js' );

exports.pathList = require( './pathList.js' );

exports.stringList = require( './stringList' );

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

