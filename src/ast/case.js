/*
| Case statements in abstract syntax trees.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_case', ( def, ast_case ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{

	def.attributes =
	{
		block :
		{
			// the statement
			type : 'jion$ast_block'
		}
	};

	// list of case values
	def.list = require( '../typemaps/astExpression' );
}


} );
