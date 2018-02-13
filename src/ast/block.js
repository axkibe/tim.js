/*
| A code block to be generated
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_block ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.list = tim.typemap( module, './statement' );
}


const ast_comment = require( './comment' );

const ast_return = require( './return' );

const parser = require( '../jsParser/parser' );

const shorthand = require( './shorthand' );


/*
| Returns the block with a parsed statement appended.
*/
def.func.$ =
	function( )
{
	const ast = parser.parseArray( arguments );

	if( ast === undefined ) return this;

	return(
		ast.timtype === ast_block
		? this.appendList( ast )
		: this.append( ast )
	);
};



/*
| Returns the block with an assignment appended.
*/
def.func.$assign =
	function(
		left,
		right
	)
{

/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 2 ) throw new Error( );
/**/}

	return this.append( shorthand.$assign( left, right ) );
};


/*
| Recreates the block with a call appended.
*/
def.func.$call =
	function(
		// func,
		// args...
	)
{
	return this.append( shorthand.$call.apply( shorthand, arguments ) );
};


/*
| Returns the block with a check appended.
*/
def.func.$check =
	function(
		// block
	)
{
	return this.append( shorthand.$check.apply( shorthand, arguments ) );
};


/*
| Returns the block with a comment appended.
*/
def.func.$comment =
	function(
		header
	)
{
	if( header.timtype !== ast_comment )
	{
		// arguments have to be a list of strings otherwise
		header =
			ast_comment.create(
				'list:init', Array.prototype.slice.call( arguments )
			);
	}

	return this.append( header );
};


/*
| Returns the block with a const decleration appended.
*/
def.func.$const =
	function(
		// name,
		// assign
	)
{
	return this.append( shorthand.$const.apply( shorthand, arguments ) );
};


/*
| Returns the block with a continue statement appended.
*/
def.func.$continue =
	function( )
{
	return this.append( shorthand.$continue );
};


/*
| Returns the block with a delete statement appended.
*/
def.func.$delete =
	function(
		expr
	)
{
	return this.append( shorthand.$delete( expr ) );

};


/*
| Returns the block with an if appended.
*/
def.func.$if =
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
def.func.$fail =
	function(
		message
	)
{
	return this.append( shorthand.$fail( message ) );
};


/*
| Returns the block with a classical for loop appended.
*/
def.func.$for =
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
def.func.$forIn =
	function(
		variable,
		object,
		block
	)
{
	return this.append( shorthand.$forIn( variable, object, block ) );
};


/*
| Returns the block with a for-in loop appended.
*/
def.func.$forInLet =
	function(
		variable,
		object,
		block
	)
{
	return this.append( shorthand.$forInLet( variable, object, block ) );
};


/*
| Returns the block with a variable decleration appended.
*/
def.func.$let =
	function(
		// name,   // variable name
		// assign  // variable assignment
	)
{
	return this.append( shorthand.$let.apply( shorthand, arguments ) );
};


/*
| Shorthand for creating new calls.
*/
def.func.$new =
	function(
		call
	)
{
	return this.append( shorthand.$new( call ) );
};


/*
| Returns the block with a plus-assignment appended.
*/
def.func.$plusAssign =
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
def.func.$return =
	function(
		expr
	)
{
	if( expr.timtype !== ast_return )
	{
		expr = shorthand.$return( expr );
	}

	return this.append( expr );
};


/*
| Returns the block with a variable decleration appended.
*/
def.func.$varDec =
	function(
		name,   // variable name
		assign  // variable assignment
	)
{
	return this.append( shorthand.$varDec( name, assign ) );
};


/*
| Returns the block with a classical for loop appended.
*/
def.func.$while =
	function(
		condition,
		block
	)
{
	return this.append( shorthand.$while( condition, block ) );
};



} );
