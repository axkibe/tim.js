/*
| A null to be generated.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{ id : 'jion$ast_null' };
}


/*
| Capsule
*/
(function() {
'use strict';


var
	ast_null,
	prototype;

ast_null = require( '../this' )( module, 'ouroboros' );

prototype = ast_null.prototype;


/*
| Walks the ast tree depth-first, pre-order
| creating a transformed copy.
*/
prototype.walk =
	function(
		transform	// a function to be called for all
		//			// walked nodes.
	)
{
	return transform( this );
};


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
/**/		result += 'null';
/**/
/**/		return result + postfix;
/**/	};
/**/}


} )( );
