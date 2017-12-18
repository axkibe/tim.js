/*
| A comma operator list
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_comma', ( def, ast_comma ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		left :
		{
			// left expression
			type : require( '../typemaps/astExpression' )
		},
		right :
		{
			// right expression
			type : require( '../typemaps/astExpression' )
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

	result += ', ';

	result += '( ' +  util.inspect( this.right, opts ) + ' )';

	return result + postfix;
};


} );
