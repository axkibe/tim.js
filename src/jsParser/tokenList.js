/*
| A parser token list.
| can hold lexed token as well as ast subtrees.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$jsParser_tokenList',
		list :
			require( '../typemaps/astStatement' )
			.concat( [ 'jion$jsLexer_token' ] )
	};
}


/*
| Capsule
*/
(function() {
'use strict';


require( '../ouroboros' ).this( module );


} )( );
