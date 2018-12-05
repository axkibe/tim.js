/*
| Ast; logical not expression.
*/
'use strict';


tim.define( module, ( def, ast_not ) => {


if( TIM )
{
	def.attributes =
	{
		// the expression to negate
		expr : { type : [ '< ./types-expr' ] },
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

		opts = tim.proto.copy( opts );

		opts.ast = true;
	}
	else
	{
		result = postfix = '';
	}

	result += '!( ' +  util.inspect( this.expr, opts ) + ' )';

	return result + postfix;
};


} );
