/*
| Ast; the [ ] operator.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_member ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		// the expression to get the member of
		expr : { type : tim.typemap( module, './expr' ) },

		// the member expression
		member : { type : tim.typemap( module, './expr' ) },
	};
}


const ast_dot = require( './dot' );


/*
| Creates a dot member access of a dot.
*/
def.func.$dot =
	function(
		member // member string
	)
{
	// checks if member is a string are done in 'ast_dot.create'
	return ast_dot.create( 'expr', this, 'member', member );
};


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
	const expr = this.expr.walk( transform );

	return transform( this.create( 'expr', expr ) );
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

	result += '( ' + util.inspect( this.expr, opts ) + ' )';

	result += '[ ' + util.inspect( this.member, opts ) + ' ]';

	return result + postfix;
};


} );
