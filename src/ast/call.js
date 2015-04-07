/*
| A call in an abstract syntax tree.
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
	return {
		id : 'ast_call',
		attributes :
		{
			'func' :
			{
				comment : 'the function to call',
				type : 'require( ../typemaps/astExpression )'
			},
		},
		ray : 'require( ../typemaps/astExpression )'
	};
}

var
	ast_call,
	jools,
	prototype,
	tools;


ast_call = require( '../this' )( module, 'ouroboros' );

jools = require( '../jools/jools' );

prototype = ast_call.prototype;

// FIXME remove
tools = require( './tools' );


/*
| Returns a call with a parameter appended
*/
prototype.addArgument =
	function(
		expr
	)
{
	return this.append( tools.convert( expr ) );
};


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
		a,
		aZ,
		args,
		func;

	func = this.func.walk( transform );

	args = [ ];

	for( a = 0, aZ = this.length; a < aZ; a++ )
	{
		args[ a ] = this.get( a ).walk( transform );
	}

	return(
		transform(
			this.create( 'func', func, 'ray:init', args )
		)
	);
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
***/	ast_call.prototype.inspect =
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
/**/		result += '( ' +  util.inspect( this.func, opts ) + ' )';
/**/
/**/		if( this.length === 0 )
/**/		{
/**/			result += '( )';
/**/		}
/**/		else
/**/		{
/**/			result += '( ';
/**/
/**/			for(
/**/				r = 0, rZ = this.ray.length;
/**/				r < rZ;
/**/				r++
/**/			)
/**/			{
/**/				arg = this.ray[ r ];
/**/
/**/				if( r > 0 )
/**/				{
/**/					result += ', ';
/**/				}
/**/
/**/				result += util.inspect( arg, opts );
/**/			}
/**/
/**/			result += ' )';
/**/		}
/**/
/**/		return result + postfix;
/**/	};
/**/}

} )( );
