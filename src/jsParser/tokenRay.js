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
		id : 'jion$jsParser_tokenRay',
		ray :
			require( '../typemaps/astStatement' )
			.concat( [ 'jsLexer_token' ] )
	};
}


require( '../this' )( module, 'ouroboros' );


} )( );
