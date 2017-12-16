/*
| Ast divide assignment ( /= )
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_divideAssign',
		attributes :
		{
			left :
			{
				comment : 'left-hand side',
				type : require( '../typemaps/astExpression' )
			},
			right :
			{
				comment : 'right-hand side',
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
	ast_divideAssign,
	prototype;

ast_divideAssign = require( '../ouroboros' ).this( module );

prototype = ast_divideAssign.prototype;


/**/if( CHECK )
/**/{
/**/	var
/**/		util;
/**/
/**/	util = require( 'util' );
/**/
/***	/
****	| Custom inspect.
****	/
***/	ast_divideAssign.prototype.inspect =
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
/**/		result += '( ' +  util.inspect( this.left, opts ) + ' )';
/**/
/**/		result += ' /= ';
/**/
/**/		result += '( ' +  util.inspect( this.right, opts ) + ' )';
/**/
/**/		return result + postfix;
/**/	};
/**/}


} )( );
