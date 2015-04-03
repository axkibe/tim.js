/*
| A code block to be generated
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
		id : 'ast_block',
		ray : '->astStatement'
	};
}


var
	ast_block,
	ast_comment,
	ast_return,
	jools,
	parser,
	shorthand,
	tools;


ast_block = require( '../jion/this' )( module, 'ouroboros' );

ast_comment = require( './comment' );

ast_return = require( './return' );

jools = require( '../jools/jools' );

parser = require( '../jsParser/parser' );

shorthand = require( './shorthand' );

tools = require( './tools' );


/*
| Returns the block with a parsed statement appended.
*/
ast_block.prototype.$ =
	function( )
{
	var
		ast;

	ast = parser.parse.apply( parser, arguments );

	if( ast.reflect === 'ast_block' )
	{
		return this.appendRay( ast );
	}

	return this.append( ast );
};



/*
| Returns the block with an assignment appended.
*/
ast_block.prototype.$assign =
	function(
		left,
		right
	)
{

/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 2 )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	return this.append( shorthand.$assign( left, right ) );
};


/*
| Recreates the block with a call appended.
*/
ast_block.prototype.$call =
	function(
		// func,
		// args...
	)
{
	return(
		this.append(
			shorthand.$call.apply( shorthand, arguments )
		)
	);
};


/*
| Returns the block with a check appended.
*/
ast_block.prototype.$check =
	function(
		// block
	)
{
	return(
		this.append(
			shorthand.$check.apply( shorthand, arguments )
		)
	);
};


/*
| Returns the block with a comment appended.
*/
ast_block.prototype.$comment =
	function(
		header
	)
{
	if( header.reflect !== 'ast_comment' )
	{
		// arguments have to be a list of strings otherwise
		header =
			ast_comment.create(
				'ray:init', Array.prototype.slice.call( arguments )
			);
	}

	return this.append( header );
};

/*
| Returns the block with a continue statement appended.
*/
ast_block.prototype.$continue =
	function(
	)
{
	return this.append( shorthand.$continue );
};


/*
| Returns the block with a delete statement appended.
*/
ast_block.prototype.$delete =
	function(
		expr
	)
{
	return this.append( shorthand.$delete( expr ) );

};


/*
| Returns the block with an if appended.
*/
ast_block.prototype.$if =
	function(
		condition,
		then,
		elsewise
	)
{
	return(
		this.append(
			shorthand.$if( condition, then, elsewise )
		)
	);
};


/*
| Returns the block with a error throwing appended.
*/
ast_block.prototype.$fail =
	function(
		message
	)
{
	return this.append( shorthand.$fail( message ) );
};


/*
| Returns the block with a classical for loop appended.
*/
ast_block.prototype.$for =
	function(
		init,
		condition,
		iterate,
		block
	)
{
	return this.append( shorthand.$for( init, condition, iterate, block ) );
};


/*
| Returns the block with a for-in loop appended.
*/
ast_block.prototype.$forIn =
	function(
		variable,
		object,
		block
	)
{
	return(
		this.append(
			shorthand.$forIn( variable, object, block )
		)
	);
};

/*
| Shorthand for creating new calls.
*/
ast_block.prototype.$new =
	function(
		call
	)
{
	return this.append( shorthand.$new( call ) );
};


/*
| Returns the block with a plus-assignment appended.
*/
ast_block.prototype.$plusAssign =
	function(
		left,
		right
	)
{
	return this.append( shorthand.$plusAssign( left, right ) );
};


/*
| Returns the block with a term appended.
*/
ast_block.prototype.$return =
	function(
		expr
	)
{
	if( expr.reflect !== 'ast_return' )
	{
		expr = shorthand.$return( expr );
	}

	return this.append( expr );
};


/*
| Returns the block with a variable decleration appended.
*/
ast_block.prototype.$varDec =
	function(
		// name,   // variable name
		// assign  // variable assignment
	)
{
	return(
		this.append(
			shorthand.$varDec.apply( shorthand, arguments )
		)
	);
};


} )( );
