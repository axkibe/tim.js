/*
| A call in an abstract syntax tree.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_call',
		attributes :
		{
			'func' :
			{
				comment : 'the function to call',
				type : require( '../typemaps/astExpression' )
			},
		},
		ray : require( '../typemaps/astExpression' )
	};
}


/*
| Capsule
*/
(function() {
'use strict';


var
	ast_call,
	parser,
	prototype;


ast_call = require( '../this' )( module, 'ouroboros' );

prototype = ast_call.prototype;

parser = require( '../jsParser/parser' );


/*
| Returns a call with a parameter appended
*/
prototype.$argument =
	function(
		// parseables
	)
{
	var
		ast;

	ast = parser.parseArray( arguments );

	return this.append( ast );
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
/**/			for( r = 0, rZ = this.length; r < rZ; r++ )
/**/			{
/**/				arg = this.get( r );
/**/
/**/				if( r > 0 ) result += ', ';
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
