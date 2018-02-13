/*
| Case statements in abstract syntax trees.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_case ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{

	def.attributes =
	{
		// the statement
		block : { type : './block' }
	};

	// list of case values
	def.list =  tim.typemap( module, './expr' );
}


} );
