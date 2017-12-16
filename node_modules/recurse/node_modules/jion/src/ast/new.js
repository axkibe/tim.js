/*
| ast new calls
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_new',
		attributes :
		{
			'call' :
			{
				comment : 'the constrcutor call',
				type : 'jion$ast_call'
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
	ast_new,
	prototype;

ast_new = require( '../this' )( module, 'ouroboros' );

prototype = ast_new.prototype;


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
/**/		result += 'new ( ' +  util.inspect( this.call, opts ) + ' )';
/**/
/**/		return result + postfix;
/**/	};
/**/}


} )( );
