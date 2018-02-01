/*
| A parser token list.
| can hold lexed token as well as ast subtrees.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'jsParser_tokenList', ( def, jsParser_tokenList ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.list =
		require( '../typemaps/astStatement' )
		.concat( [ 'jsLexer_token' ] );
}


} );
