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
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 2 ) throw new Error( );
/**/}

	const lio = path.lastIndexOf( '/' );

	const prefix = lio >= 0 ? path.substr( 0, lio + 1 ) : './';

	const postfix = lio >= 0 ? path.substr( lio + 1, path.length ) : path;

	const ar = module.require( prefix + 'typemap-' + postfix ).slice( );

	if( prefix )
	{
		for( let a = 0, al = ar.length; a < al; a++ )
		{
			// FIXME this is a whacky workaround solution
			if( ar[ a ].substr( 0, 2 ) === './' )
			{
				ar[ a ] = ar[ a ].substr( 2, ar[ a ].length );
			}
			else
			{
				switch( ar[ a ] )
				{
					// FIXME this wouldn't be necesarry if typemaps would
					//       enforce relative types
					case 'number' : continue;
				}
			}

			ar[ a ] = prefix + ar[ a ];
		}
	}

	return ar;
};

