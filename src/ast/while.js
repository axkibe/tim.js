/*
| Ast; a while loop.
*/
'use strict';


tim.define( module, ( def, ast_while ) => {


if( TIM )
{
	def.attributes =
	{
		// the while condition
		condition : { type : [ '< ./types-expr' ] },

		// the looped block
		block : { type : './block' }
	};
}


} );
