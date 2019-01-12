/*
| Imports tims from other packages.
| FIXME remove
*/
'use strict';


if( !NODE ) throw new Error( );


module.exports =
	function(
		rmod, // required module (or 'tim.js' itself)
		path  // exported path
	)
{
	// FUTURE currently only imports from tim are allowed
	if( rmod !== 'tim.js' ) throw new Error( );

	return require( '../' + path );
};
