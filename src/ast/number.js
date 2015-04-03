/*
| A number literal.
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
		id : 'ast_number',
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

var
	ast_number,
	prototype;


ast_number = require( '../jion/this' )( module, 'ouroboros' );

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
