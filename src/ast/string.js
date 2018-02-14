/*
| Ast; a string literal.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_string ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		string : { type : 'string' }
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

	result += '"' + this.string + '"';

	return result + postfix;
};


} );
