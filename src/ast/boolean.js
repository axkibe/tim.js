/*
| A boolean literal.
| ( true or false )
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_boolean',
		attributes :
		{
			'boolean' :
			{
				comment : 'the boolean',
				type : 'boolean'
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
	ast_boolean,
	prototype;

ast_boolean = require( '../this' )( module, 'ouroboros' );

prototype = ast_boolean.prototype;


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
/**/		result += this.boolean ? 'true' : 'false';
/**/
/**/		return result + postfix;
/**/	};
/**/}

} )( );
