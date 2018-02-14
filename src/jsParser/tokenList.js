/*
| A parser token list.
| can hold lexed token as well as ast subtrees.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, self ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.list =
		tim.typemap( module, '../ast/statement' )
		.concat( [ '../jsLexer/token' ] );
}


} );

