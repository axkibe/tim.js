/*
| Optional checks in abstract syntax trees.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_check ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		// the code block',
		block : { type : './block' },
	};
}


} );
