/*
| Ast; a for loop.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_for ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		// the initialization
		init : { type : [ '< ./types-expr', './let' ] },

		// the continue condition
		condition : { type : [ '< ./types-expr' ] },

		// the iteration expression
		iterate : { type : [ '< ./types-expr' ] },

		// the loop block
		block : { type : './block' }
	};
}


} );
