/*
| Ast; post decrement (x-- operator)
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_postDecrement ) => {


if( TIM )
{
	def.attributes =
	{
		// the expression to post-decrement
		expr : { type : [ '< ./types-expr' ] },
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
	}
	else
	{
		result = postfix = '';
	}

	opts.ast = true;

	result += '( ' +  util.inspect( this.expr, opts ) + ' )--';

	return result + postfix;
};


} );
