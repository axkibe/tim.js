/*
| Ast; a for loop.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_for', ( def, ast_for ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		init :
		{
			// the initialization
			type :
				require( './typemap-expression' )
				.concat( [ 'ast_let' ] )
		},
		condition :
		{
			// the continue condition
			type : tim.typemap( module, './expr' ),
		},
		iterate :
		{
			// the iteration expression
			type : tim.typemap( module, './expr' ),
		},
		block :
		{
			// the for block
			type : './block'
		}
	};
}


} );
