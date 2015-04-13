/*
| Optional checks in abstract syntax trees.
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
		id : 'jion$ast_check',
		attributes :
		{
			'block' :
			{
				comment : 'the code block',
				type : 'jion$ast_block'
			}
		}
	};
}


require( '../this' )( module, 'ouroboros' );


} )( );
