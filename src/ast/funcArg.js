/*
| Ast; a function argument.
*/
'use strict';


tim.define( module, ( def, ast_funcArg ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		// argument name
		name : { type : [ 'undefined', 'string' ] },

		// argument comment
		comment : { type : [ 'undefined', 'string' ] }
	};
}


/*
| Custom inspect.
*/
def.proto._inspect =
	function(
		recurse
	)
{
	return this.name;
};


} );
