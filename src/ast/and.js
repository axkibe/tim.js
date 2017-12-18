/*
| ast, logical and operation.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_and', ( def, ast_and ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		left : { type : require( '../typemaps/astExpression' ) },

		right : { type : require( '../typemaps/astExpression' ) }
	};
}


/*
| Walks the ast tree depth-first, pre-order
| creating a transformed copy.
*/
def.func.walk =
	function(
		transform	// a function to be called for all
		//			// walked nodes.
	)
{
	var
		left,
		right;

	left = this.left.walk( transform );

	right = this.right.walk( transform );

	return transform( this.create( 'left', left, 'right', right ) );
};


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

	result += ' && ';

	result += '( ' +  util.inspect( this.right, opts ) + ' )';

	return result + postfix;
};


} );
