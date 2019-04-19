/*
| Array literals in abstract syntax trees.
*/
'use strict';


tim.define( module, ( def, ast_arrayLiteral ) => {


if( TIM )
{
	def.twig = [ '< ./types-expr' ];
}


const util = require( 'util' );


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

	if( this.length === 0 )
	{
		result += '[ ]';
	}
	else
	{
		result += '[ ';

		let first = true;

		for( let arg of this )
		{
			if( first ) first = false; else result += ', ';

			result += util.inspect( arg, opts );
		}

		result += ' ]';
	}

	return result + postfix;
};


} );
