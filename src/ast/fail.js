/*
| Failures (error exceptions) for abstract syntax trees.
*/


/*
| Capsule
*/
(function() {
'use strict';


/*
| The jion definition.
*/
if( JION )
{
	return{
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


require( '../this' )( module, 'ouroboros' );


} )( );
