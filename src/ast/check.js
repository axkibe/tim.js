/*
| Optional checks in abstract syntax trees.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_check', ( def, ast_check ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		block :
		{
			// the code block',
			type : 'ast_block'
		}
	};
}


} );
