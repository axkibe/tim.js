/*
| ast negation expression.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_not',
		attributes :
		{
			expr :
			{
				comment : 'the expression to negate',
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
	ast_not,
	prototype;

ast_not = require( '../this' )( module, 'ouroboros' );

prototype = ast_not.prototype;


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
