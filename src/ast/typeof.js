/*
| Ast; a typeof of an expression.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_typeof', ( def, ast_typeof ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		// the expression to get the type of
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

	result += 'typeof( ' +  util.inspect( this.expr, opts ) + ' )';

	return result + postfix;
};


} );
