/*
| Specifies the tim.js location to be used by tim.js.
|
| In case of changes, this can be changed to point to a previous version
| used to generate the new version. Otherwise it should refer to itself.
*/
'use strict';

// auto detects if there is an "ouroboros" module available
// (it ought to be an older version of tim.js to build itself)



let define, ouroboros;

try
{
	ouroboros = require( 'ouroboros' );
}
catch( e )
{
	// ignore
}


if( ouroboros && ouroboros.define )
{
	// there is an ouroboros module available
	// so thats used for tim.js to build it's tims

	// adds this timjs as timtree to the ouroboros
	let path = module.filename.split( '/' );

	path.pop( );

	path.pop( );

	path = path.join( '/' ) + '/';

	ouroboros.tree.addTree( path, 'timjs' );

	define = ouroboros.define;
}
else
{
	define = require( './define' );
}


module.exports =
{
	define: define
};
