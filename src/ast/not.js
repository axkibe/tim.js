/*
| Ast; logical not expression.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_not', ( def, ast_not ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		// the expression to negate
		expr : { type : tim.typemap( module, './expr' ) },
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
