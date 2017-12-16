/*
| A number literal.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_number',
		attributes :
		{
			'number' :
			{
				comment : 'the number',
				type : 'number'
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
	ast_number,
	prototype;


ast_number = require( '../ouroboros' ).this( module );

prototype = ast_number.prototype;


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
/**/		result += this.number;
/**/
/**/		return result + postfix;
/**/	};
/**/}

} )( );
