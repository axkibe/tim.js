/*
| Ast multiply assignment ( *= )
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_multiplyAssign',
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
	ast_multiplyAssign,
	prototype;

ast_multiplyAssign = require( '../ouroboros' ).this( module );

prototype = ast_multiplyAssign.prototype;


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
***/	ast_multiplyAssign.prototype.inspect =
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
/**/		result += ' *= ';
/**/
/**/		result += '( ' +  util.inspect( this.right, opts ) + ' )';
/**/
/**/		return result + postfix;
/**/	};
/**/}


} )( );
