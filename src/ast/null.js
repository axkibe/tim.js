/*
| A null to be generated.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_null ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	// there are not attributes
	def.attributes = { };
}


/*
| Walks the ast tree depth-first, pre-order
| creating a transformed copy.
*/
def.func.walk =
	function(
		transform	// a function to be called for all
		//			// walked nodes.
	)
{
	return transform( this );
};


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

	result += 'null';

	return result + postfix;
};


} );
