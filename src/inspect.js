/*
| Comfort utility for better debug inspection.
*/
'use strict';


const util = require( 'util' );

const utilOpts = { depth: null };

console.inspect =
	function( )
{
	const args = Array.prototype.slice.call( arguments );

	for( let a = 0, al = args.length; a < al; a++ )
	{
		args[ a ] = util.inspect( args[ a ], utilOpts );
	}

	console.log.apply( console.log, args );
};
