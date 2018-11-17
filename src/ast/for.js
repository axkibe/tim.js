/*
| Ast; a for loop.
*/
'use strict';


tim.ouroboros.define( module, ( def, ast_for ) => {


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


const util = require( 'util' );


/*
| Custom inspect
*/
def.func.inspect =
	function(
		depth,
		opts
	)
{
	let postfix;

	let result;

	if( !opts.ast )
	{
		result = 'ast{ ';

		postfix = ' }';

		opts = tim.proto.copy( opts );

		opts.ast = true;
	}
	else
	{
		result = postfix = '';
	}

	result +=
		'for( '
		+ util.inspect( this.init, opts )
		+ ' ; '
		+ util.inspect( this.condition, opts )
		+ ' ; '
		+ util.inspect( this.iterate, opts )
		+ ' ) '
		+ util.inspect( this.block, opts ) + ' ';

	return result + postfix;
};

} );
