/*
| Ast; a function argument.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_funcArg', ( def, ast_funcArg ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		name :
		{
			// argument name
			type : [ 'undefined', 'string' ]
		},
		comment :
		{
			// argument comment, FIXME remove!
			type : [ 'undefined', 'string' ]
		}
	};
}


} );
