/*
| Ast; the [ ] operator.
*/
'use strict';


tim.define( module, ( def, ast_member ) => {


if( TIM )
{
	def.attributes =
	{
		// the expression to get the member of
		expr : { type : [ '< ./types-expr' ] },

		// the member expression
		member : { type : [ '< ./types-expr' ] },
	};
}


const ast_dot = require( './dot' );


/*
| Creates a dot member access of a dot.
*/
def.proto.$dot =
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
def.proto.walk =
	function(
		transform	// a function to be called for all walked nodes.
	)
{
	const expr = this.expr.walk( transform );

	return transform( this.create( 'expr', expr ) );
};


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

	result += '( ' + util.inspect( this.expr, opts ) + ' )';

	result += '[ ' + util.inspect( this.member, opts ) + ' ]';

	return result + postfix;
};


} );
