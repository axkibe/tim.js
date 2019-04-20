/*
| Array literals in abstract syntax trees.
*/
'use strict';


tim.define( module, ( def, ast_arrayLiteral ) => {


def.extend = './node';


if( TIM )
{
	def.twig = [ '< ./types-expr' ];
}


/*
| Custom inspect.
*/
def.proto._inspect =
	function(
		recurse
	)
{
	let result = '';

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

			result += recurse( arg );
		}

		result += ' ]';
	}

	return result;
};


} );
