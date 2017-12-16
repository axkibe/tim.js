/*
| AST: test for difference.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_differs',
		attributes :
		{
			left :
			{
				comment : 'left expression',
				type : require( '../typemaps/astExpression' )
			},
			right :
			{
				comment : 'right expression',
				type : require( '../typemaps/astExpression' )
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
	ast_differs,
	prototype;


ast_differs = require( '../this' )( module, 'ouroboros' );

prototype = ast_differs.prototype;


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
	var
		left,
		right;

	left = this.left.walk( transform );

	right = this.right.walk( transform );

	return transform( this.create( 'left', left, 'right', right ) );
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
/**/		result += '( ' +  util.inspect( this.left, opts ) + ' )';
/**/
/**/		result += ' !== ';
/**/
/**/		result += '( ' +  util.inspect( this.right, opts ) + ' )';
/**/
/**/		return result + postfix;
/**/	};
/**/}


} )( );
