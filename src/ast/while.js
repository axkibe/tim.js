/*
| Ast; a while loop.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_while ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		// the while condition
		condition : { type : [ '< ./types-expr' ] },

		// the looped block
		block : { type : './block' }
	};
}


} );
