/*
| Ast; a for loop.
*/
'use strict';


tim.define( module, ( def, ast_for ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		// the initialization
		init : { type : [ '< ./types-expr', './let' ] },

		// the continue condition
		condition : { type : [ '< ./types-expr' ] },

		// the iteration expression
		iterate : { type : [ '< ./types-expr' ] },

		// the loop block
		block : { type : './block' }
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
	return(
		'for( '
		+ recurse( this.init ) + ' ; '
		+ recurse( this.condition ) + ' ; '
		+ recurse( this.iterate ) + ' ) '
		+ recurse( this.block ) + ' '
	);
};


} );
