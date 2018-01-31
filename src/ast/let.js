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
	def.attributes =
	{
		name :
		{
			// variable name
			type : 'string'
		},
		assign :
		{
			// assignment of variable
			type :
				require( '../typemaps/astExpression' )
				.concat( [ 'undefined' ] )
		}
	};
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

	result += this.name;

	if( this.assign )
	{
		result += util.inspect( this.assign, opts );
	}

	return result + postfix;
};


} );

