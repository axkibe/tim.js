/*
| Ast; a while loop.
*/
'use strict';


tim.define( module, ( def, ast_while ) => {


def.extend = './node';


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


/*
| Custom inspect.
*/
def.proto._inspect =
	function(
		recurse
	)
{
	return(
		'while( '
		+ recurse( this.condition )
		+ ' ) ' + recurse( this.block )
		+ ' '
	);
};


} );
