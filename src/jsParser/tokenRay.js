/*
| A parser token ray.
| can hold lexed token as well as ast subtrees.
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
		id : 'jsParser_tokenRay',
		ray : [ 'jsLexer_token', 'require( ../typemaps/astStatement )' ]
	};
}


require( '../this' )( module, 'ouroboros' );


} )( );
