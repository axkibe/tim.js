/*
| A boolean literal (true or false).
*/
'use strict';


tim.define( module, ( def, ast_boolean ) => {


if( TIM )
{
	def.attributes =
	{
		'boolean' : { type : 'boolean' }
	};
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
	}
	else
	{
		result = postfix = '';
	}

	result += this.boolean ? 'true' : 'false';

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
