/*
| Ast; variable declarations.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_let', ( def, ast_let ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.list = [ 'ast_letEntry' ];
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

