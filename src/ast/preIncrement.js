/*
| Ast, a pre increments (++x operator).
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_preIncrement', ( def, ast_preIncrement ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		expr :
		{
			// the expression to pre increment
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

	result += '++( ' +  util.inspect( this.expr, opts ) + ' )';

	return result + postfix;
};


} );
