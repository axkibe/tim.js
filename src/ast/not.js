/*
| Ast; logical not expression.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_not ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		// the expression to negate
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

	result += '!( ' +  util.inspect( this.expr, opts ) + ' )';

	return result + postfix;
};


} );
