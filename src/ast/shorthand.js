/*
| Various shorthands for abstract syntax trees.
*/


var
	shorthand;

shorthand =
module.exports =
	{ };


/*
| Capsule
*/
(function() {
'use strict';


const ast_and = require( './and' );

const ast_arrayLiteral = require( './arrayLiteral' );

const ast_assign = require( './assign' );

const ast_block = require( './block' );

const ast_boolean = require( './boolean' );

const ast_call = require( './call' );

const ast_check = require( './check' );

const ast_comma = require( './comma' );

const ast_comment = require( './comment' );

const ast_condition = require( './condition' );

const ast_const = require( './const' );

const ast_continue = require( './continue' );

const ast_delete = require( './delete' );

const ast_differs = require( './differs' );

const ast_dot = require( './dot' );

const ast_equals = require( './equals' );

const ast_fail = require( './fail' );

const ast_for = require( './for' );

const ast_forIn = require( './forIn' );

const ast_func = require( './func' );

const ast_greaterThan = require( './greaterThan' );

const ast_if = require( './if' );

const ast_instanceof = require( './instanceof' );

const ast_lessThan = require( './lessThan' );

const ast_let = require( './let' );

const ast_member = require( './member' );

const ast_multiply = require( './multiply' );

const ast_multiplyAssign = require( './multiplyAssign' );

const ast_new = require( './new' );

const ast_not = require( './not' );

const ast_null = require( './null' );

const ast_number = require( './number' );

const ast_objLiteral = require( './objLiteral' );

const ast_or = require( './or' );

const ast_plus = require( './plus' );

const ast_plusAssign = require( './plusAssign' );

const ast_preIncrement = require( './preIncrement' );

const ast_return = require( './return' );

const ast_string = require( './string' );

const ast_switch = require( './switch' );

const ast_typeof = require( './typeof' );

const ast_var = require( './var' );

const ast_varDec = require( './varDec' );

const jion_proto = require( '../proto' );

const parser = require( '../jsParser/parser' );


/*
| Ensures ast is a block.
| Ff not appends it to a new block.
*/
const ensureBlock =
	function( ast )
{
	if( ast.timtype === ast_block ) return ast;

	return ast_block.create( ).append( ast );
};


/*
| Shorthand for creating ands.
*/
shorthand.$and =
	function(
		left,
		right
		// or more
	)
{
	if( arguments.length > 2 )
	{
		const args = Array.prototype.slice.call( arguments );

		args.splice(
			0,
			2,
			ast_and.create(
				'left', parser.parse( left ),
				'right', parser.parse( right )
			)
		);

		return shorthand.$and.apply( this, args );
	}

	return(
		ast_and.create(
			'left', parser.parse( left ),
			'right', parser.parse( right )
		)
	);
};


/*
| Shorthand for creating array literals.
*/
shorthand.astArrayLiteral =
	function( )
{
	return ast_arrayLiteral.create( );
};


/*
| Shorthand for creating assignments.
*/
shorthand.$assign =
	function(
		left,
		right
	)
{
	return(
		ast_assign.create(
			'left', parser.parse( left ),
			'right', parser.parse( right )
		)
	);
};


/*
| Shorthand for creating blocks.
*/
shorthand.$block =
	function( )
{
	return ast_block.create( );
};


/*
| Shorthand for creating capsule function.
*/
shorthand.$capsule =
	function(
		block
	)
{
	if( block ) block = ensureBlock( block );

	return(
		ast_call.create(
			'func',
			ast_func.create(
				'block', block || undefined,
				'capsule', true
			)
		)
	);
};


/*
| Shorthand for creating calls.
*/
shorthand.$call =
	function(
		func
		// args
	)
{
	let call = ast_call.create( 'func', parser.parse( func ) );

	for( let a = 1, al = arguments.length; a < al; a++ )
	{
		call = call.$argument( arguments[ a ] );
	}

	return call;
};


/*
| Shorthand for creating ast check blocks.
*/
shorthand.$check =
	function(
		block // or statement/expression
	)
{
	return(
		ast_check.create( 'block', ensureBlock( block ) )
	);
};


/*
| Shorthand for creating comma operators
*/
shorthand.$comma =
	function(
		left,
		right
		// or more
	)
{
	if( arguments.length > 2 )
	{
		const args = Array.prototype.slice.call( arguments );

		args.splice(
			0,
			2,
			ast_comma.create(
				'left', parser.parse( left ),
				'right', parser.parse( right )
			)
		);

		return shorthand.$comma.apply( this, args );
	}

	return(
		ast_comma.create(
			'left', parser.parse( left ),
			'right', parser.parse( right )
		)
	);
};


/*
| Shorthand for creating comments
*/
shorthand.$comment =
	function(
		// list of strings
	)
{
	return(
		ast_comment.create(
			'list:init', Array.prototype.slice.call( arguments )
		)
	);
};



/*
| Shorthand for creating conditions.
*/
shorthand.$condition =
	function(
		condition,
		then,
		elsewise
	)
{
	return(
		ast_condition.create(
			'condition', parser.parse( condition ),
			'then', parser.parse( then ),
			'elsewise', parser.parse( elsewise )
		)
	);
};


/*
| Shorthand for let variable declerations.
*/
shorthand.$const =
	function(
		name,   // variable name
		assign  // variable assignment
	)
{
	return(
		ast_const.create(
			'name', name,
			'assign',
				arguments.length > 1
				? parser.parse( assign )
				: undefined
		)
	);
};


/*
| Shorthand for ast continue.
*/
shorthand.$continue = ast_continue.create( );

/*
| Shorthand for creating differs.
*/
shorthand.$differs =
	function(
		left,
		right
	)
{
	return(
		ast_differs.create(
			'left', parser.parse( left ),
			'right', parser.parse( right )
		)
	);
};


/*
| Shorthand for creating delete calls.
*/
shorthand.$delete =
	function(
		expr
	)
{
	return ast_delete.create( 'expr', parser.parse( expr ) );
};


/*
| Shorthand for creating dots.
*/
shorthand.$dot =
	function(
		expr,
		member
	)
{
	return ast_dot.create( 'expr', expr, 'member', member );
};


/*
| Shorthand for creating equals.
*/
shorthand.$equals =
	function(
		left,
		right
	)
{
	return(
		ast_equals.create(
			'left', parser.parse( left ),
			'right', parser.parse( right )
		)
	);
};


/*
| Shorthand for 'false' literals.
*/
shorthand.$false = ast_boolean.create( 'boolean', false );


/*
| Shorthand for ast code that throws a fail.
*/
shorthand.$fail =
	function(
		message
	)
{
	if( !message )
	{
		message = undefined;
	}
	else if( jion_proto.isString( message ) )
	{
		message = ast_string.create( 'string', message );
	}

	return ast_fail.create( 'message', message );
};


/*
| Shorthand for creating less-than comparisons.
*/
shorthand.$lessThan =
	function(
		left,
		right
	)
{
	return(
		ast_lessThan.create(
			'left', parser.parse( left ),
			'right', parser.parse( right )
		)
	);
};


/*
| Shorthand for let variable declerations.
*/
shorthand.$let =
	function(
		name,   // variable name
		assign  // variable assignment
	)
{
	return(
		ast_let.create(
			'name', name,
			'assign',
				arguments.length > 1
				? parser.parse( assign )
				: undefined
		)
	);
};


/*
| Shorthand for creating greater-than comparisons.
*/
shorthand.$greaterThan =
	function(
		left,
		right
	)
{
	return(
		ast_greaterThan.create(
			'left', parser.parse( left ),
			'right', parser.parse( right )
		)
	);
};


/*
| Shorthand for creating ifs.
*/
shorthand.$if =
	function(
		condition,
		then,
		elsewise
	)
{
	return(
		ast_if.create(
			'condition', parser.parse( condition ),
			'then', ensureBlock( parser.parse( then ) ),
			'elsewise', elsewise && ensureBlock( parser.parse( elsewise ) )
		)
	);
};


/*
| Shorthand for creating for loops.
*/
shorthand.$for =
	function(
		init,
		condition,
		iterate,
		block
	)
{
	return(
		ast_for.create(
			'init', parser.parse( init ),
			'condition', parser.parse( condition ),
			'iterate', parser.parse( iterate ),
			'block', ensureBlock( parser.parse( block ) )
		)
	);
};


/*
| Shorthand for creating for in loops.
*/
shorthand.$forIn =
	function(
		variable,
		object,
		block
	)
{
	return(
		ast_forIn.create(
			'variable', parser.parse( variable ),
			'object', parser.parse( object ),
			'block', ensureBlock( parser.parse( block ) )
		)
	);
};


/*
| Shorthand for creating functions.
*/
shorthand.$func =
	function(
		block
	)
{
	return ast_func.create( 'block', ensureBlock( parser.parse( block ) ) );
};


/*
| Shorthand for creating instanceof expressions.
*/
shorthand.$instanceof =
	function(
		left,
		right
	)
{
	return(
		ast_instanceof.create(
			'left', parser.parse( left ),
			'right', parser.parse( right )
		)
	);
};



/*
| Shorthand for creating members.
*/
shorthand.$member =
	function(
		expr,
		member
	)
{
	return ast_member.create( 'expr', expr, 'member', member );
};


/*
| Shorthand for creating multiplies.
*/
shorthand.$multiply =
	function(
		left,
		right
		// or more
	)
{
	var
		args;

	if( arguments.length > 2 )
	{
		args = Array.prototype.slice.call( arguments );

		args.splice(
			0,
			2,
			ast_multiply.create(
				'left', parser.parse( left ),
				'right', parser.parse( right )
			)
		);

		return shorthand.$multiply.apply( this, args );
	}

	return(
		ast_multiply.create(
			'left', parser.parse( left ),
			'right', parser.parse( right )
		)
	);
};


/*
| Shorthand for creating multiply-assignments.
*/
shorthand.$multiplyAssign =
	function(
		left,
		right
	)
{
	return(
		ast_multiplyAssign.create(
			'left', parser.parse( left ),
			'right', parser.parse( right )
		)
	);
};


/*
| Shorthand for creating new calls.
*/
shorthand.$new =
	function(
		call
	)
{
	return ast_new.create( 'call', call );
};


/*
| Shorthand for creating negations.
*/
shorthand.$not =
	function(
		expr
	)
{
	return ast_not.create( 'expr', parser.parse( expr ) );
};


/*
| Shorthand for ast nulls.
*/
shorthand.$null = ast_null.create( );


/*
| Shorthand for creating number literals.
*/
shorthand.$number =
	function(
		number
	)
{
	return ast_number.create( 'number', number );
};


/*
| Shorthand for creating object literals.
*/
shorthand.$objLiteral =
	function( )
{
	return ast_objLiteral.create( );
};


/*
| Shorthand for creating ors.
*/
shorthand.$or =
	function(
		left,
		right
		// or more
	)
{
	var
		args;

	if( arguments.length > 2 )
	{
		args = Array.prototype.slice.call( arguments );

		args.splice(
			0,
			2,
			ast_or.create(
				'left', parser.parse( left ),
				'right', parser.parse( right )
			)
		);

		return shorthand.$or.apply( this, args );
	}

	return(
		ast_or.create(
			'left', parser.parse( left ),
			'right', parser.parse( right )
		)
	);
};


/*
| Shorthand for creating pluses.
*/
shorthand.$plus =
	function(
		left,
		right
		// or more
	)
{
	var
		args;

	if( arguments.length > 2 )
	{
		args = Array.prototype.slice.call( arguments );

		args.splice(
			0,
			2,
			ast_plus.create(
				'left', parser.parse( left ),
				'right', parser.parse( right )
			)
		);

		return shorthand.$plus.apply( this, args );
	}

	return(
		ast_plus.create(
			'left', parser.parse( left ),
			'right', parser.parse( right )
		)
	);
};


/*
| Shorthand for creating plus-assignments.
*/
shorthand.$plusAssign =
	function(
		left,
		right
	)
{
	return(
		ast_plusAssign.create(
			'left', parser.parse( left ),
			'right', parser.parse( right )
		)
	);
};



/*
| Shorthand for creating pre-increments.
*/
shorthand.$preIncrement =
	function(
		expr
	)
{
	expr = parser.parse( expr );

	return ast_preIncrement.create( 'expr', expr );
};


/*
| Shorthand for creating a return statement
*/
shorthand.$return =
	function(
		expr
	)
{
	return ast_return.create( 'expr', parser.parse( expr ) );
};



/*
| Shorthand for creating string literals.
*/
shorthand.$string =
	function(
		string
	)
{
	return ast_string.create( 'string', string );
};


/*
| Shorthand for creating switch statements.
*/
shorthand.$switch =
	function(
		statement
	)
{
	return ast_switch.create( 'statement', parser.parse( statement ) );
};


/*
| Shorthand for 'true' literals.
*/
shorthand.$true = ast_boolean.create( 'boolean', true );



/*
| Shorthand for creating typeofs.
*/
shorthand.$typeof =
	function(
		expr
	)
{
	return ast_typeof.create( 'expr', parser.parse( expr ) );
};



/*
| Shorthand for creating variable uses.
*/
shorthand.$var =
	function(
		name
	)
{
	return ast_var.create( 'name', name );
};


/*
| Shorthand for variable declerations.
*/
shorthand.$varDec =
	function(
		name,   // variable name
		assign  // variable assignment
	)
{
	return(
		ast_varDec.create(
			'name', name,
			'assign',
				arguments.length > 1
				? parser.parse( assign )
				: undefined
		)
	);
};


/*
| Shorthand for 'undefined'
*/
shorthand.$undefined = ast_var.create( 'name', 'undefined' );


} )( );
