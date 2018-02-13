/*
| Ast; a while loop.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_while', ( def, ast_while ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		// the while condition
		condition : { type : tim.typemap( module, './expr' ), },

		// the looped block
		block : { type : './block' }
	};
}


} );
