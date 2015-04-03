/*
| ast negation expression.
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
	return {
		id : 'ast_not',
		attributes :
		{
			expr :
			{
				comment : 'the expression to negate',
				type : '->astExpression'
			}
		}
	};
}


var
	ast_not,
	prototype;

ast_not = require( '../jion/this' )( module, 'ouroboros' );


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
/**/		result += '!( ' +  util.inspect( this.expr, opts ) + ' )';
/**/
/**/		return result + postfix;
/**/	};
/**/}


} )( );
