/*
| Ast; const variable declarations.
*/
'use strict';


tim.define( module, ( def, ast_const ) => {


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
	return 'let ' + this.name + ( this.assign ? recurse( this.assign ) : '' );
};


} );
