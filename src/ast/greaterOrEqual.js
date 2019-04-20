/*
| Ast; >= operator.
*/
'use strict';


tim.define( module, ( def, ast_greaterOrEqual ) => {


if( TIM )
{
	def.attributes =
	{
		left : { type : [ '< ./types-expr' ] },

		right : { type : [ '< ./types-expr' ] },
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

	result += '( ' +  util.inspect( this.left, opts ) + ' )';

	result += ' >= ';

	result += '( ' +  util.inspect( this.right, opts ) + ' )';

	return result + postfix;
};


} );