/*
| Ast; variable declarations.
*/
'use strict';


tim.define( module, ( def, ast_let ) => {


def.extend = './node';


if( TIM )
{
	def.list = [ './letEntry' ];
}


/*
| Custom inspect.
*/
def.proto._inspect =
	function(
		recurse
	)
{
	let result = 'let ';

	let first = true;

	for( let e of this )
	{
		if( first ) first = false; else result += ', ';

		result += recurse( e );
	}

	return result;
};


} );
