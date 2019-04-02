/*
| Ast; a for-of loop
*/
'use strict';


tim.define( module, ( def, ast_forOf ) => {


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
