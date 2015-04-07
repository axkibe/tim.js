/*
| Abstract syntax tree returns statements.
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
		id : 'ast_return',
		attributes :
		{
			expr :
			{
				comment : 'the expression to return',
				type : require( '../typemaps/astExpression' )
			}
		}
	};
}


var
	ast_return,
	prototype;


ast_return = require( '../this' )( module, 'ouroboros' );

prototype = ast_return.prototype;


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
/**/		result += 'return ( ' +  util.inspect( this.expr, opts ) + ' )';
/**/
/**/		return result + postfix;
/**/	};
/**/}

} )( );
