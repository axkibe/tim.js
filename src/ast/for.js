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
			type : require( '../typemaps/astExpression' )
		},
		condition :
		{
			// the continue condition
			type : require( '../typemaps/astExpression' )
		},
		iterate :
		{
			// the iteration expression
			type : require( '../typemaps/astExpression' )
		},
		block :
		{
			// the for block
			type : 'ast_block'
		}
	};
}


} );
