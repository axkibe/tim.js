/*
| A comment in an abstract syntax tree.
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
		id : 'jion$ast_comment',
		ray : [ 'string' ]
	};
}


require( '../this' )( module, 'ouroboros' );


} )( );
