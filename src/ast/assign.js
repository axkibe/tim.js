/*
| An assignment in an abstract syntax tree.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_assign ) => {


if( TIM )
{
	def.attributes =
	{
		left :
		{
			// left-hand side
			type : tim.typemap( module, './expr' )
		},
		right :
		{
			// right-hand side
			type : tim.typemap( module, './expr' )
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

	result += '( ' +  util.inspect( this.left, opts ) + ' )';

	result += ' = ';

	result += '( ' +  util.inspect( this.right, opts ) + ' )';

	return result + postfix;
};


} );
