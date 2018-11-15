/*
| Ast; a new call.
*/
'use strict';


tim.ouroboros.define( module, ( def, ast_new ) => {


if( TIM )
{
	def.attributes =
	{
		// the constructor call
		call : { type : './call' }
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
