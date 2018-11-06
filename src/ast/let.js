/*
| Ast; variable declarations.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_let ) => {


if( TIM )
{
	def.list = [ './letEntry' ];
}


const util = require( 'util' );


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

	result += 'let ';

	for( let a = 0, al = this.length; a < al; a++ )
	{
		if( a > 0 ) result += ', ';

		result += util.inspect( this.get( a ), opts );
	}

	return result + postfix;
};


} );
