/*
| Ast; return statement.
*/
'use strict';


tim.define( module, ( def, ast_return ) => {


if( TIM )
{
	def.attributes =
	{
		// the expression to return
		expr : { type : [ '< ./types-expr' ] },
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
		result = 'ast{ ';

		postfix = ' }';

		opts = tim.proto.copy( opts );

		opts.ast = true;
	}
	else
	{
		result = postfix = '';
	}

	result += 'return ( ' +  util.inspect( this.expr, opts ) + ' )';

	return result + postfix;
};


} );
