/*
| Array literals in abstract syntax trees.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_arrayLiteral ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.list =  tim.typemap( module, './expr' );
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
	}
	else
	{
		result = postfix = '';
	}

	opts.ast = true;

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
