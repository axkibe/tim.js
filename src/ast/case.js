/*
| Case statements in abstract syntax trees.
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
	return {
		id : 'jion$ast_case',
		attributes :
		{
			block :
			{
				comment : 'the statement',
				type : 'ast_block'
			}
		},
		ray : require( '../typemaps/astExpression' )
	};
}


require( '../this' )( module, 'ouroboros' );


} )( );
