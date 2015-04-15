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
		id : 'jion$ast_block',
		ray : require( '../typemaps/astStatement' )
	};
}


var
	ast_block,
	ast_comment,
	ast_return,
	parser,
	prototype,
	shorthand;


ast_block = require( '../this' )( module, 'ouroboros' );

prototype = ast_block.prototype;

ast_comment = require( './comment' );

ast_return = require( './return' );

parser = require( '../jsParser/parser' );

shorthand = require( './shorthand' );


/*
| Returns the block with a parsed statement appended.
*/
prototype.$ =
	function( )
{
	var
		ast;

	ast = parser.parseArray( arguments );

	if( ast.reflect === 'ast_block' )
	{
		return this.appendRay( ast );
	}

	return this.append( ast );
};



/*
| Returns the block with an assignment appended.
*/
prototype.$assign =
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
prototype.$call =
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
prototype.$check =
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
prototype.$comment =
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
prototype.$continue =
	function(
	)
{
	return this.append( shorthand.$continue );
};


/*
| Returns the block with a delete statement appended.
*/
prototype.$delete =
	function(
		expr
	)
{
	return this.append( shorthand.$delete( expr ) );

};


/*
| Returns the block with an if appended.
*/
prototype.$if =
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
prototype.$fail =
	function(
		message
	)
{
	return this.append( shorthand.$fail( message ) );
};


/*
| Returns the block with a classical for loop appended.
*/
prototype.$for =
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
prototype.$forIn =
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
prototype.$new =
	function(
		call
	)
{
	return this.append( shorthand.$new( call ) );
};


/*
| Returns the block with a plus-assignment appended.
*/
prototype.$plusAssign =
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
prototype.$return =
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
prototype.$varDec =
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
