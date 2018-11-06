/*
| For-in loops in abstract syntax trees.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_forIn ) => {


if( TIM )
{
	def.attributes =
	{
		// the loop variable
		variable : { type : './var' },

		// true if the for loop variable has a let
		letVar : { type : 'boolean' },

		// the object expression to iterate over
		object : { type : [ '< ./types-expr' ] },

		// the loop block
		block : { type : './block' },
	};
}


} );
