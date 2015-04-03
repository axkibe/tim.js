'use strict';

var
	fs;

fs = require( 'fs' );

/*
| This is in node obviously.
*/
GLOBAL.NODE = true;

/*
| If freezing is unconfigured, default to yes
*/
if( GLOBAL.FREEZE === undefined ) GLOBAL.FREEZE = true;

/*
|  the jion module
*/
module.exports.this = require( './jion/this.js' );

module.exports.proto = require( './jion/proto.js' );


if( FREEZE )
{
	Object.freeze( module.exports );
}
