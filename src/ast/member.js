/*
| Ast; the [ ] operator.
*/
'use strict';


tim.define( module, ( def, ast_member ) => {


def.extend = './node';


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


const ast_dot = tim.require( './dot' );


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


/*
| Custom inspect.
*/
def.proto._inspect =
	function(
		recurse
	)
{
	return(
		'( ' + recurse( this.expr ) + ' )'
		+ '[ ' + recurse( this.member ) + ' ]'
	);
};


} );
