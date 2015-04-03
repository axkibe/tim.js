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
		id : 'ast_check',
		attributes :
		{
			'block' :
			{
				comment : 'the code block',
				type : 'ast_block'
			}
		}
	};
}


require( '../jion/this' )( module, 'ouroboros' );


} )( );
