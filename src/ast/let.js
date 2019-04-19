/*
| Ast; variable declarations.
*/
'use strict';


tim.define( module, ( def, ast_let ) => {


if( TIM )
{
	def.list = [ './letEntry' ];
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

		opts = tim.copy( opts );

		opts.ast = true;
	}
	else
	{
		result = postfix = '';
	}

	result += 'let ';

	let first = true;

	for( let e of this )
	{
		if( first ) first = false; else result += ', ';

		result += util.inspect( e, opts );
	}

	return result + postfix;
};


} );
