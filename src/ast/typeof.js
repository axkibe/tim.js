/*
| Ast; a typeof of an expression.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_typeof ) => {


if( TIM )
{
	def.attributes =
	{
		// the expression to get the type of
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

	result += 'typeof( ' +  util.inspect( this.expr, opts ) + ' )';

	return result + postfix;
};


} );
