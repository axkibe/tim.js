/*
| Array literals in abstract syntax trees.
*/
'use strict';


tim.ouroboros.define( module, ( def, ast_arrayLiteral ) => {


if( TIM )
{
	def.twig = [ '< ./types-expr' ];
}


const util = require( 'util' );

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

		for( let r = 0, rZ = this.length; r < rZ; r++ )
		{
			const arg = this.get( r );

			if( r > 0 ) result += ', ';

			result += util.inspect( arg, opts );
		}

		result += ' ]';
	}

	return result + postfix;
};

} );
