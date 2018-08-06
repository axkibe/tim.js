/*
| A boolean literal.
| ( true or false )
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_boolean ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		'boolean' : { type : 'boolean' }
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

	result += this.boolean ? 'true' : 'false';

	return result + postfix;
};


/*
| Walks the ast tree depth-first, pre-order
| creating a transformed copy.
*/
def.func.walk =
	function(
		transform	// a function to be called for all walked nodes.
	)
{
	return transform( this );
};


} );

