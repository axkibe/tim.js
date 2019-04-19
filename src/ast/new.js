/*
| Ast; a new call.
*/
'use strict';


tim.define( module, ( def, ast_new ) => {


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

	result += 'new ( ' +  util.inspect( this.call, opts ) + ' )';

	return result + postfix;
};


} );
