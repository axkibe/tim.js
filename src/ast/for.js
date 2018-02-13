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
		init :
		{
			type : tim.typemap( module, './expr' ).concat( [ './let' ] )
		},

		// the continue condition
		condition : { type : tim.typemap( module, './expr' ), },

		// the iteration expression
		iterate : { type : tim.typemap( module, './expr' ), },

		// the loop block
		block : { type : './block' }
	};
}


} );
