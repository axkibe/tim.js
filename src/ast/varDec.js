/*
| Ast; variable declarations.
*/
'use strict';


tim.define( module, ( def, ast_varDec ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		// variable name
		name : { type : 'string' },

		// assignment of variable
		assign : { type : [ '< ./types-expr', 'undefined' ] },
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
	let result = 'var ' + name;

	if( this.assign ) result += recurse( this.assign );

	return result;
};


} );
