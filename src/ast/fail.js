/*
| Ast; failures (error exceptions).
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_fail ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		// the error message expression
		message : { type : [ '< ./types-expr', 'undefined' ] },
	};
}


} );
