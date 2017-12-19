/*
| Ast; a number literal.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_number', ( def, ast_number ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		number : { type : 'number' }
	};
}


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

	result += this.number;

	return result + postfix;
};


} );
