/*
| Tests for equality.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_equals',
		attributes :
		{
			left :
			{
				comment : 'left expression',
				type : require( '../typemaps/astExpression' )
			},
			right :
			{
				comment : 'right expression',
				type : require( '../typemaps/astExpression' )
			}
		}
	};
}


/*
| Capsule.
*/
(function() {
'use strict';


var
	ast_equals;

ast_equals = require( '../ouroboros' ).this( module );


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
***/	ast_equals.prototype.inspect =
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
/**/		result += ' === ';
/**/
/**/		result += '( ' +  util.inspect( this.right, opts ) + ' )';
/**/
/**/		return result + postfix;
/**/	};
/**/}


} )( );
