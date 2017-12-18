/*
| ast negation (unary minus)
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_negate', ( def, ast_negate ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		expr :
		{
			// the expression to negate
			type : require( '../typemaps/astExpression' )
		}
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

	result += '-( ' +  util.inspect( this.expr, opts ) + ' )';

	return result + postfix;
};


} );
