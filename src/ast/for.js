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
			type : require( './typemap-expression' )
		},
		iterate :
		{
			// the iteration expression
			type : require( './typemap-expression' )
		},
		block :
		{
			// the for block
			type : 'ast_block'
		}
	};
}


} );
