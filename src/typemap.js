/*
| A utility function for typemaps.
*/
'use strict';


if( !NODE ) throw new Error( );


module.exports =
	function(
		module,  // the module using this
		path     // the path of the typemap
	)
{
	const lio = path.lastIndexOf( '/' );

	const prefix = lio >= 0 ? path.substr( 0, lio + 1 ) : './';

	const postfix = lio >= 0 ? path.substr( lio + 1, path.length ) : path;

	const ar = module.require( prefix + 'typemap-' + postfix ).slice( );

	if( prefix )
	{
		for( let a = 0, al = ar.length; a < al; a++ )
		{
			ar[ a ] = prefix + ar[ a ];
		}
	}

	return ar;
};

