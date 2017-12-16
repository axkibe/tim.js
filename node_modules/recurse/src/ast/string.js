/*
| A string literal.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_string',
		attributes :
		{
			'string' :
			{
				comment : 'the literal',
				type : 'string'
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
	ast_string,
	prototype;

ast_string = require( '../ouroboros' ).this( module );

prototype = ast_string.prototype;


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
***/	ast_string.prototype.inspect =
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
/**/		result += '"' + this.string + '"';
/**/
/**/		return result + postfix;
/**/	};
/**/}

} )( );
