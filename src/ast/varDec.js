/*
| Variable declarations in abstract syntax trees.
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
		id : 'ast_varDec',
		attributes :
		{
			name :
			{
				comment : 'variable name',
				type : 'string'
			},
			assign :
			{
				comment : 'Assignment of variable',
				type : '->astExpression',
				defaultValue : 'undefined'
			}
		}
	};
}


var
	ast_varDec,
	prototype;

ast_varDec = require( '../jion/this' )( module, 'ouroboros' );

prototype = ast_varDec.prototype;


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
/**/		result += 'var ';
/**/
/**/		result += this.name;
/**/
/**/		if( this.assign )
/**/		{
/**/			result += util.inspect( this.assign, opts );
/**/		}
/**/
/**/		return result + postfix;
/**/	};
/**/}

} )( );
