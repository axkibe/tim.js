/*
| Ast object literal.
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
		id : 'jion$ast_objLiteral',
		twig : require( '../typemaps/astExpression' )
	};
}


var
	ast_objLiteral,
	parser,
	prototype;


ast_objLiteral = require( '../this' )( module, 'ouroboros' );

prototype = ast_objLiteral.prototype;

parser = require( '../jsParser/parser' );


/*
| Returns an object literal with a key-expr pair added.
*/
prototype.add =
	function(
		key
		// ... parseables
	)
{
	var
		args;

	args = Array.prototype.slice.call( args );

	args.shift( );

	return this.create( 'twig:add', key, parser.parseArray( args ) );
};


/**/if( CHECK )
/**/{
/**/	var
/**/		arg,
/**/		r, rZ,
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
/**/		if( this.length === 0 )
/**/		{
/**/			result += '{ }';
/**/		}
/**/		else
/**/		{
/**/			result += '{ ';
/**/
/**/			for(
/**/				r = 0, rZ = this.length;
/**/				r < rZ;
/**/				r++
/**/			)
/**/			{
/**/				arg = this.atRank( r );
/**/
/**/				if( r > 0 )
/**/				{
/**/					result += ', ';
/**/				}
/**/
/**/				result += util.inspect( arg, opts );
/**/			}
/**/
/**/			result += ' }';
/**/		}
/**/
/**/		return result + postfix;
/**/	};
/**/}

} )( );
