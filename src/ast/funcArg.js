/*
| Ast; a function argument.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_funcArg ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		// argument name
		name : { type : [ 'undefined', 'string' ] },

		// argument comment, FIXME remove!
		comment : { type : [ 'undefined', 'string' ] }
	};
}


} );
