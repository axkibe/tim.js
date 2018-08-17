/*
| Ast; variable declarations.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_letEntry ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		// variable name
		name : { type : 'string' },

		// assignment of variable
		assign : { type : [ '< ./types-expr', 'undefined' ] },
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
