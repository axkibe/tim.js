/*
| A call to delete.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_and', ( def, ast_and ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		expr :
		{
			// the expression to delete
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

	result += 'delete ( ' +  util.inspect( this.expr, opts ) + ' )';

	return result + postfix;
};


} );
