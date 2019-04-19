/*
| A code block to be generated
*/
'use strict';


tim.define( module, ( def, ast_block ) => {


if( TIM )
{
	def.list = [ '< ./types-statement', '< ./types-expr' ];
}


const ast_comment = tim.require( './comment' );

const ast_return = tim.require( './return' );

const parser = tim.require( '../parser/parser' );

const shorthand = tim.require( './shorthand' );


/*
| Returns the block with a parsed statement appended.
*/
def.proto.$ =
	function( )
{
	const ast = parser.parseArray( arguments, 'statement' );

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
def.proto.$assign =
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
| Returns the block with a break statement appended.
*/
def.proto.$break =
	function( )
{
	return this.append( shorthand.$break );
};


/*
| Recreates the block with a call appended.
*/
def.proto.$call =
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
def.proto.$check =
	function(
		// block
	)
{
	return this.append( shorthand.$check.apply( shorthand, arguments ) );
};


/*
| Returns the block with a comment appended.
*/
def.proto.$comment =
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
def.proto.$const =
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
def.proto.$continue =
	function( )
{
	return this.append( shorthand.$continue );
};


/*
| Returns the block with a delete statement appended.
*/
def.proto.$delete =
	function(
		expr
	)
{
	return this.append( shorthand.$delete( expr ) );

};


/*
| Returns the block with an if appended.
*/
def.proto.$if =
	function(
		condition,
		then,
		elsewise
	)
{
	return this.append( shorthand.$if( condition, then, elsewise ) );
};


/*
| Returns the block with a error throwing appended.
*/
def.proto.$fail =
	function(
		message
	)
{
	return this.append( shorthand.$fail( message ) );
};


/*
| Returns the block with a classical for loop appended.
*/
def.proto.$for =
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
def.proto.$forIn =
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
def.proto.$forInLet =
	function(
		variable,
		object,
		block
	)
{
	return this.append( shorthand.$forInLet( variable, object, block ) );
};


/*
| Returns the block with a for-of loop appended.
*/
def.proto.$forOf =
	function(
		variable,
		object,
		block
	)
{
	return this.append( shorthand.$forOf( variable, object, block ) );
};


/*
| Returns the block with a for-of loop appended.
*/
def.proto.$forOfLet =
	function(
		variable,
		object,
		block
	)
{
	return this.append( shorthand.$forOfLet( variable, object, block ) );
};


/*
| Returns the block with a variable decleration appended.
*/
def.proto.$let =
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
def.proto.$new =
	function(
		call
	)
{
	return this.append( shorthand.$new( call ) );
};


/*
| Returns the block with a plus-assignment appended.
*/
def.proto.$plusAssign =
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
def.proto.$return =
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
def.proto.$varDec =
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
def.proto.$while =
	function(
		condition,
		block
	)
{
	return this.append( shorthand.$while( condition, block ) );
};


/*
| Returns the block with a yield keyword appended.
*/
def.proto.$yield =
	function(
		expr
	)
{
	return this.append( shorthand.$yield( expr ) );
};


const util = require( 'util' );


/*
| Custom inspect.
*/
def.inspect =
	function(
		depth,
		opts
	)
{
	let postfix;

	let result;

	if( !opts.ast )
	{
		result = 'ast{ ';

		postfix = ' }';

		opts = tim.copy( opts );

		opts.ast = true;
	}
	else
	{
		result = postfix = '';
	}

	result += '{ ';

	for( let a = 0, al = this.length; a < al; a++ )
	{
		result += util.inspect( this.get( a ), opts ) + '; ';
	}

	result += '} ';

	return result + postfix;
};


} );
