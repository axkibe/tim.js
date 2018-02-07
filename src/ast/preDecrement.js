/*
| Ast; pre increments.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_preDecrement', ( def, ast_preDecrement ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		expr :
		{
			// the expression to pre decrement
			type : require( './typemap-expression' )
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

	result += '--( ' +  util.inspect( this.expr, opts ) + ' )';

	return result + postfix;
};


} );
