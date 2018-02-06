/*
| Ast; variable declarations.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_letEntry', ( def, ast_letEntry ) => {


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
		result = 'ast{ letEntry ';

		postfix = ' }';
	}
	else
	{
		result = postfix = '';
	}

	opts.ast = true;

	result += this.name;

	if( this.assign )
	{
		result += ' = ' + util.inspect( this.assign, opts );
	}

	return result + postfix;
};


} );

