/*
| Ast; a post increment (x++).
*/
'use strict';


tim.ouroboros.define( module, ( def, ast_postIncrement ) => {


if( TIM )
{
	def.attributes =
	{
		// the expression to post-increment
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

	result += '( ' +  util.inspect( this.expr, opts ) + ' )++';

	return result + postfix;
};


} );
