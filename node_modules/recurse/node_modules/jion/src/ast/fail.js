/*
| Failures (error exceptions) for abstract syntax trees.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_fail',
		attributes :
		{
			message :
			{
				comment : 'the error message expression',
				type :
					require( '../typemaps/astExpression' )
					.concat( ['undefined' ] )
			}
		}
	};
}


/*
| Capsule
*/
(function() {
'use strict';


require( '../this' )( module, 'ouroboros' );


} )( );
