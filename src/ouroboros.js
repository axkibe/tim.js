/*
| Specifies the tim.js location to be used by tim.js.
|
| In case of changes, this can be changed to point to a previous version
| used to generate the new version. Otherwise it should refer to itself.
*/
'use strict';

const jion = require( 'jion' );

const recurse = require( 'recurse' );

module.exports = {
	this: jion.this,
	define: recurse.define
};
