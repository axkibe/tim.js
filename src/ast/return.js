/*
| Ast; return statement.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_return', ( def, ast_return ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		expr :
		{
			// the expression to return
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

	result += 'return ( ' +  util.inspect( this.expr, opts ) + ' )';

	return result + postfix;
};


} );
