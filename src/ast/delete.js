/*
| A call to delete.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_delete',
		attributes :
		{
			'expr' :
			{
				comment : 'the expression to delete',
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
	ast_delete;

ast_delete = require( '../ouroboros' ).this( module );

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
***/	ast_delete.prototype.inspect =
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
/**/		result += 'delete ( ' +  util.inspect( this.expr, opts ) + ' )';
/**/
/**/		return result + postfix;
/**/	};
/**/}

} )( );
