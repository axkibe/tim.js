/*
| A call to delete.
*/
'use strict';


tim.define( module, ( def, ast_delete ) => {


if( TIM )
{
	def.attributes =
	{
		// the expression to delete
		expr : { type : [ '< ./types-expr' ] },
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

		opts = tim.proto.copy( opts );

		opts.ast = true;
	}
	else
	{
		result = postfix = '';
	}

	result += 'delete ( ' +  util.inspect( this.expr, opts ) + ' )';

	return result + postfix;
};


} );
