/*
| A parser token list.
| can hold lexed token as well as ast subtrees.
*/
'use strict';


tim.ouroboros.define( module, ( def ) => {


if( TIM )
{
	def.list = [ '< ../ast/types-statement', '< ../ast/types-expr', '../lexer/token' ];
}


} );
