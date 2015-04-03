'use strict';

var
	fs;

fs = require( 'fs' );

/*
| This is in node obviously.
*/
GLOBAL.NODE = true;

// FIXME
GLOBAL.SERVER = true;

// FIXME
GLOBAL.JION = false;

GLOBAL.CHECK = !!GLOBAL.CHECK;

/*
| If freezing is unconfigured, default to yes
*/
if( GLOBAL.FREEZE === undefined ) GLOBAL.FREEZE = true;

/*
|  the jion module
*/
module.exports.this = require( './root/this.js' );

module.exports.proto = require( './root/proto.js' );


if( FREEZE )
{
	Object.freeze( module.exports );
}
