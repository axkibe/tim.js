/*
| Ast; a yield keyword.
*/
'use strict';


tim.define( module, ( def, ast_yield ) => {


if( TIM )
{
	def.attributes =
	{
		// the expression to yield
		expr : { type : [ '< ./types-expr' ] }
	};
}


const util = require( 'util' );


/*
| Custom inspect
*/
def.proto.inspect =
	function(
		depth,
		opts
	)
{
	let postfix;

	let result;

	if( !opts.ast )
	{
		result = 'yield{ ';

		postfix = ' }';

		opts = tim.proto.copy( opts );

		opts.ast = true;
	}
	else
	{
		result = postfix = '';
	}

	result += 'new ( ' +  util.inspect( this.expr, opts ) + ' )';

	return result + postfix;
};


} );
