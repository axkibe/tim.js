/*
| Ast; a string literal.
*/
'use strict';


tim.define( module, ( def, ast_string ) => {


if( TIM )
{
	def.attributes =
	{
		string : { type : 'string' }
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

		opts = tim.proto.copy( opts );

		opts.ast = true;
	}
	else
	{
		result = postfix = '';
	}

	result += '"' + this.string + '"';

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
