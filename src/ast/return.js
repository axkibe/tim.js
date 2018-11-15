/*
| Ast; return statement.
*/
'use strict';


tim.ouroboros.define( module, ( def, ast_return ) => {


if( TIM )
{
	def.attributes =
	{
		// the expression to return
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

	result += 'return ( ' +  util.inspect( this.expr, opts ) + ' )';

	return result + postfix;
};


} );
