/*
| A null to be generated.
*/
'use strict';


tim.define( module, ( def, ast_null ) => {


if( TIM )
{
	// there are not attributes
	def.attributes = { };
}


/*
| Custom inspect.
*/
def.inspect =
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

		opts = tim.copy( opts );

		opts.ast = true;
	}
	else
	{
		result = postfix = '';
	}

	result += 'null';

	return result + postfix;
};


/*
| Walks the ast tree depth-first, pre-order
| creating a transformed copy.
*/
def.proto.walk =
	function(
		transform	// a function to be called for all walked nodes.
	)
{
	return transform( this );
};


} );
