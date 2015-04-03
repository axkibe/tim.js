/*
| Gets a member of a table specified by a literal.
*/


/*
| Capsule
*/
(function() {
'use strict';


/*
| The jion definition.
*/
if( JION )
{
	return{
		id : 'ast_dot',
		attributes :
		{
			expr :
			{
				comment : 'the expression to get the member of',
				type : '->astExpression'
			},
			member :
			{
				comment : 'the members name',
				type : 'string'
			}
		},
		init : [ ]
	};
}



var
	ast_dot,
	ast_member,
	prototype;


ast_dot = require( '../jion/this' )( module, 'ouroboros' );

prototype = ast_dot.prototype;

ast_member = require( './member' );


/*
| Initializer.
*/
prototype._init =
	function( )
{
	var
		regex;

/**/if( CHECK )
/**/{
/**/	regex =
/**/		/^([a-zA-Z_])([a-zA-Z0-9_])*$/;
/**/
/**/	if( !regex.test( this.member ) )
/**/	{
/**/		throw new Error( 'invalid member name' );
/**/	}
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
prototype.walk =
	function(
		transform	// a function to be called for all
		//			// walked nodes.
	)
{
	var
		expr;

	expr = this.expr.walk( transform );

	return transform( this.create( 'expr', expr ) );
};


/*
| Creates a dot member access of a dot.
*/
prototype.$dot =
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
prototype.$member =
	function(
		member // member expression
	)
{
	return ast_member.create( 'expr', this, 'member', member );
};


/**/if( CHECK )
/**/{
/**/	var
/**/		util;
/**/
/**/	util = require( 'util' );
/**/
/***	/
****	| Custom inspect
****	/
***/	prototype.inspect =
/**/		function(
/**/			depth,
/**/			opts
/**/		)
/**/	{
/**/		var
/**/			postfix,
/**/			result;
/**/
/**/		if( !opts.ast )
/**/		{
/**/			result = 'ast{ ';
/**/
/**/			postfix = ' }';
/**/		}
/**/		else
/**/		{
/**/			result = postfix = '';
/**/		}
/**/
/**/		opts.ast = true;
/**/
/**/		result += '( ' + util.inspect( this.expr, opts ) + ' )';
/**/
/**/		result += '.' + this.member;
/**/
/**/		return result + postfix;
/**/	};
/**/}

} )( );
