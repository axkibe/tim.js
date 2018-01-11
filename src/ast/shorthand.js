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


var
	ast_and,
	ast_arrayLiteral,
	ast_assign,
	ast_block,
	ast_boolean,
	ast_call,
	ast_check,
	ast_comma,
	ast_comment,
	ast_condition,
	ast_continue,
	ast_delete,
	ast_differs,
	ast_dot,
	ast_equals,
	ast_fail,
	ast_for,
	ast_forIn,
	ast_func,
	ast_funcArg,
	ast_greaterThan,
	ast_if,
	ast_instanceof,
	ast_lessThan,
	ast_member,
	ast_multiply,
	ast_multiplyAssign,
	ast_new,
	ast_not,
	ast_null,
	ast_number,
	ast_objLiteral,
	ast_or,
	ast_plus,
	ast_plusAssign,
	ast_preIncrement,
	ast_return,
	ast_string,
	ast_switch,
	ast_typeof,
	ast_var,
	ast_varDec,
	ensureBlock,
	parser,
	jion_proto;


ast_and = require( './and' );

ast_arrayLiteral = require( './arrayLiteral' );

ast_assign = require( './assign' );

ast_block = require( './block' );

ast_boolean = require( './boolean' );

ast_call = require( './call' );

ast_check = require( './check' );

ast_comma = require( './comma' );

ast_comment = require( './comment' );

ast_condition = require( './condition' );

ast_continue = require( './continue' );

ast_delete = require( './delete' );

ast_differs = require( './differs' );

ast_dot = require( './dot' );

ast_equals = require( './equals' );

ast_fail = require( './fail' );

ast_for = require( './for' );

ast_forIn = require( './forIn' );

ast_func = require( './func' );

ast_funcArg = require( './funcArg' );

ast_greaterThan = require( './greaterThan' );

ast_if = require( './if' );

ast_instanceof = require( './instanceof' );

ast_lessThan = require( './lessThan' );

ast_member = require( './member' );

ast_multiply = require( './multiply' );

ast_multiplyAssign = require( './multiplyAssign' );

ast_new = require( './new' );

ast_not = require( './not' );

ast_null = require( './null' );

ast_number = require( './number' );

ast_objLiteral = require( './objLiteral' );

ast_or = require( './or' );

ast_plus = require( './plus' );

ast_plusAssign = require( './plusAssign' );

ast_preIncrement = require( './preIncrement' );

ast_return = require( './return' );

ast_string = require( './string' );

ast_switch = require( './switch' );

ast_typeof = require( './typeof' );

ast_var = require( './var' );

ast_varDec = require( './varDec' );

jion_proto = require( '../proto' );

parser = require( '../jsParser/parser' );


/*
| Ensures ast is a block.
| Ff not appends it to a new block.
*/
ensureBlock =
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
	var
		args;

	if( arguments.length > 2 )
	{
		args = Array.prototype.slice.call( arguments );

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
	var
		call;

	call = ast_call.create( 'func', parser.parse( func ) );

	for(
		var a = 1, aZ = arguments.length;
		a < aZ;
		a++
	)
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
	var
		args;

	if( arguments.length > 2 )
	{
		args = Array.prototype.slice.call( arguments );

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
