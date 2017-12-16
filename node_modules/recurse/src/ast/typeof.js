/*
| A Typeof of an expression
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_typeof',
		attributes :
		{
			'expr' :
			{
				comment : 'the expression to get the type of',
				type : require( '../typemaps/astExpression' )
			},
		}
	};
}


/*
| Capsule
*/
(function() {
'use strict';


var
	ast_typeof,
	prototype;

ast_typeof = require( '../ouroboros' ).this( module );

prototype = ast_typeof.prototype;


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
/**/		result += 'typeof( ' +  util.inspect( this.expr, opts ) + ' )';
/**/
/**/		return result + postfix;
/**/	};
/**/}

} )( );
