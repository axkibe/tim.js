/*
| Ast; a generator function.
*/
'use strict';


tim.define( module, ( def, ast_generator ) => {


def.extend = './func';


if( TIM )
{
	def.attributes =
	{
		// function code
		block : { type : [ 'undefined', './block' ] },
	};

	def.list = [ './funcArg' ];
}


} );
