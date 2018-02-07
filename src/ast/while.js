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
		condition :
		{
			// the while condition
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
