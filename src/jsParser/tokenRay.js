/*
| A parser token ray.
| can hold lexed token as well as ast subtrees.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$jsParser_tokenRay',
		ray :
			require( '../typemaps/astStatement' )
			.concat( [ 'jion$jsLexer_token' ] )
	};
}


/*
| Capsule
*/
(function() {
'use strict';


require( '../this' )( module, 'ouroboros' );


} )( );
