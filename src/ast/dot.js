/*
| Ast; gets a member of a table specified by a literal.
*/
'use strict';


tim.define( module, ( def, ast_dot ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		// the expression to get the member of
		expr : { type : [ '< ./types-expr' ] },

		// the members name
		member : { type : 'string' },
	};
}


const ast_member = tim.require( './member' );


/*
| Exta checking
*/
def.proto._check =
	function( )
{
	const regex = /^([a-zA-Z_$])([a-zA-Z0-9_$])*$/;

	if( !regex.test( this.member ) ) throw new Error( 'invalid member name' );

	switch( this.name )
	{
		case 'true' :
		case 'false' :

			throw new Error( 'member must not be a literal' );
	}
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
| Creates a dot member access of a dot.
*/
def.proto.$dot =
	function(
		member // member string
	)
{
	// checks if member is a string is done in 'ast_dot.create'

	return ast_dot.create( 'expr', this, 'member', member );
};


/*
| Creates a generic member access of a variable.
*/
def.proto.$member =
	function(
		member // member expression
	)
{
	return ast_member.create( 'expr', this, 'member', member );
};


/*
| Custom inspect.
*/
def.proto._inspect =
	function(
		recurse
	)
{
	return '( ' + recurse( this.expr ) + ' )' + this.member;
};


} );
