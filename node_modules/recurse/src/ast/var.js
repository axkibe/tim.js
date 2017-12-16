/*
| A variable reference to be generated
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_var',
		attributes :
		{
			'name' :
			{
				comment : 'the variable name',
				type : 'string'
			}
		},
		init : [ ]
	};
}


/*
| Capsule
*/
(function() {
'use strict';


var
	ast_dot,
	ast_member,
	ast_var,
	parser,
	prototype;


ast_var = require( '../ouroboros' ).this( module );

parser = require( '../jsParser/parser' );

prototype = ast_var.prototype;

ast_dot = require( './dot' );

ast_member = require( './member' );

/*
| Initializer.
*/
prototype._init =

	function( )
{
	var
		regex;

/**/if( CHECK )
/**/{
/**/	regex =
/**/		/^([a-zA-Z_$])([a-zA-Z0-9_$])*$/;
/**/
/**/	if( !regex.test( this.name ) )
/**/	{
/**/		throw new Error( 'invalid variable name' );
/**/	}
/**/
/**/	switch( this.name )
/**/	{
/**/		case 'true' :
/**/		case 'false' :
/**/
/**/			throw new Error( 'var must not be a literal' );
/**/	}
/**/}
};


/*
| Creates a dot member access of a variable.
*/
prototype.$dot =
	function(
		member // member string
	)
{
	// checking if member is a string is done in 'ast_dot.create'

	return ast_dot.create( 'expr', this, 'member', member );
};


/*
| Creates a generic member access of a variable.
*/
prototype.$member =
	function(
		// parseables
	)
{
	return(
		ast_member.create(
			'expr', this,
			'member', parser.parseArray( arguments )
		)
	);
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
/**/		result += this.name;
/**/
/**/		return result + postfix;
/**/	};
/**/}


} )( );
