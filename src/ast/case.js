/*
| Case statements in abstract syntax trees.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_case ) => {


if( TIM )
{

	def.attributes =
	{
		// the statement
		block : { type : './block' }
	};

	// list of case values
	def.list =  [ '< ./types-expr' ];
}


} );
