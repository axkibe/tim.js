/*
| Ast; failures (error exceptions).
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_fail', ( def, ast_fail ) => {


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
				require( '../typemaps/astExpression' )
				.concat( ['undefined' ] )
		}
	};
}


} );
