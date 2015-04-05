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
		id : 'ast_fail',
		attributes :
		{
			message :
			{
				comment : 'the error message expression',
				type : '->astExpression',
				defaultValue : 'undefined'
			}
		}
	};
}


require( '../this' )( module, 'ouroboros' );


} )( );
