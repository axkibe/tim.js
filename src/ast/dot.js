/*
| Ast; gets a member of a table specified by a literal.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_dot', ( def, ast_dot ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		expr :
		{
			// the expression to get the member of
			type : require( './typemap-expression' )
		},
		member :
		{
			// the members name
			type : 'string'
		}
	};

	def.init = [ ];
}


const ast_member = require( './member' );


/*
| Initializer.
*/
def.func._init =
	function( )
{
/**/if( CHECK )
/**/{
/**/	const regex = /^([a-zA-Z_$])([a-zA-Z0-9_$])*$/;
/**/
/**/	if( !regex.test( this.member ) ) throw new Error( 'invalid member name' );
/**/
/**/	switch( this.name )
/**/	{
/**/		case 'true' :
/**/		case 'false' :
/**/
/**/			throw new Error( 'member must not be a literal' );
/**/	}
/**/}
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


/*
| Creates a dot member access of a dot.
*/
def.func.$dot =
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
def.func.$member =
	function(
		member // member expression
	)
{
	return ast_member.create( 'expr', this, 'member', member );
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

	result += '.' + this.member;

	return result + postfix;
};


} );
