/*
| Ast; a mathematical multiplication.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_multiply ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		left : { type : tim.typemap( module, './expr' ) },

		right : { type : tim.typemap( module, './expr' ) },
	};
}


const util = require( 'util' );


/*
| Custom inspect.
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

	result += '( ' +  util.inspect( this.left, opts ) + ' )';

	result += ' * ';

	result += '( ' +  util.inspect( this.right, opts ) + ' )';

	return result + postfix;
};


} );
