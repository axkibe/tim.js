/*
| A parser token list.
| can hold lexed token as well as ast subtrees.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.list = [ '< ../ast/types-statement', '< ../ast/types-expr', '../jsLexer/token' ];
}


} );

