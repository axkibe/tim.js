/*
| A comment in an abstract syntax tree.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_comment ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.list = [ 'string' ];
}


} );
