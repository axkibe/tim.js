/*
| Ast; a new call.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_new', ( def, ast_new ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		call :
		{
			// the constructor call
			type : './call'
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

	result += 'new ( ' +  util.inspect( this.call, opts ) + ' )';

	return result + postfix;
};


} );
