/*
| For-in loops in abstract syntax trees.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_forIn', ( def, ast_forIn ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		variable :
		{
			// the loop variable
			type : [ 'string', 'ast_var' ]
		},
		object :
		{
			// the object expression to iterate over
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
