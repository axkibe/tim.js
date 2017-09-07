/*
| Array literals in abstract syntax trees.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_arrayLiteral',
		list : require( '../typemaps/astExpression' )
	};
}


var
	ast_arrayLiteral;


/*
| Capsule
*/
(function() {
'use strict';


var
	prototype;

ast_arrayLiteral = require( '../this' )( module, 'ouroboros' );

prototype = ast_arrayLiteral.prototype;


/**/if( CHECK )
/**/{
/**/	var
/**/		arg,
/**/		r, rZ,
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
/**/		if( this.length === 0 )
/**/		{
/**/			result += '[ ]';
/**/		}
/**/		else
/**/		{
/**/			result += '[ ';
/**/
/**/			for(
/**/				r = 0, rZ = this.length;
/**/				r < rZ;
/**/				r++
/**/			)
/**/			{
/**/				arg = this.get( r );
/**/
/**/				if( r > 0 )
/**/				{
/**/					result += ', ';
/**/				}
/**/
/**/				result += util.inspect( arg, opts );
/**/			}
/**/
/**/			result += ' ]';
/**/		}
/**/
/**/		return result + postfix;
/**/	};
/**/}

} )( );
