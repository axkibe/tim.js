/*
| Optional checks in abstract syntax trees.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
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


/*
| Capsule
*/
(function() {
'use strict';


require( '../ouroboros' ).this( module );


} )( );
