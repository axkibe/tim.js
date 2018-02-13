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
		message :
		{
			// the error message expression
			type :
				tim.typemap( module, './expr' )
				.concat( ['undefined' ] )
		}
	};
}


} );
