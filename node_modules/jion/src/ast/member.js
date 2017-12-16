/*
| ast [ ] operator.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_member',
		attributes :
		{
			expr :
			{
				comment : 'the expression to get the member of',
				type : require( '../typemaps/astExpression' )
			},
			member :
			{
				comment : 'the members expression',
				type : require( '../typemaps/astExpression' )
			}
		}
	};
}


/*
| Capsule
*/
(function() {
'use strict';


var
	ast_dot,
	ast_member,
	prototype;


ast_member = require( '../this' )( module, 'ouroboros' );

prototype = ast_member.prototype;

ast_dot = require( './dot' );


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
/**/		result += '[ ' + util.inspect( this.member, opts ) + ' ]';
/**/
/**/		return result + postfix;
/**/	};
/**/}


} )( );
