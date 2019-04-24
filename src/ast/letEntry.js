/*
| Ast; variable declarations.
*/
'use strict';


tim.define( module, ( def, ast_letEntry ) => {


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
	const assign = this.assign;

	return(
		this.name
		+ ( assign ? ' = ( ' + recurse( this.assign ) + ' )' : '' )
	);
};


} );
