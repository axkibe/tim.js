/*
| Various shorthands for abstract syntax trees.
*/
'use strict';


tim.define( module, ( def, ast_shorthand ) => {


const ast_and = require( './and' );

const ast_assign = require( './assign' );

const ast_block = require( './block' );

const ast_boolean = require( './boolean' );

const ast_break = require( './break' );

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

const ast_generator = require( './generator' );

const ast_greaterThan = require( './greaterThan' );

const ast_if = require( './if' );

const ast_instanceof = require( './instanceof' );

const ast_lessThan = require( './lessThan' );

const ast_let = require( './let' );

const ast_letEntry = require( './letEntry' );

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

const ast_undefined = require( './undefined' );

const ast_var = require( './var' );

const ast_varDec = require( './varDec' );

const ast_while = require( './while' );

const ast_yield = require( './yield' );

const parser = require( '../parser/parser' );


/*
| Ensures argument becomes a block.
*/
const ensureBlock =
	function(
		arg
	)
{
	if( arg.timtype === ast_block ) return arg;

	return ast_block.create( ).append( parser.parse( arg ) );
};


/*
| Shorthand for creating ands.
*/
def.static.$and =
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

		return ast_shorthand.$and.apply( this, args );
	}

	return(
		ast_and.create(
			'left', parser.parse( left ),
			'right', parser.parse( right )
		)
	);
};


/*
| Shorthand for creating assignments.
*/
def.static.$assign =
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
def.staticLazy.$block = ( ) => ast_block.create( );


/*
| Shorthand for ast break.
*/
def.staticLazy.$break = ( ) => ast_break.create( );


/*
| Shorthand for creating calls.
*/
def.static.$call =
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
def.static.$check =
	function(
		arg
	)
{
	return ast_check.create( 'block', ensureBlock( arg ) );
};


/*
| Shorthand for creating comma operators
*/
def.static.$comma =
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

		return ast_shorthand.$comma.apply( this, args );
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
def.static.$comment =
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
def.static.$condition =
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
def.static.$const =
	function(
		name,   // variable name
		assign  // variable assignment
	)
{
	return(
		ast_const.create(
			'name', name,
			'assign', assign && parser.parse( assign )
		)
	);
};


/*
| Shorthand for ast continue.
*/
def.staticLazy.$continue = ( ) => ast_continue.create( );


/*
| Shorthand for creating differs.
*/
def.static.$differs =
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
def.static.$delete =
	function(
		expr
	)
{
	return ast_delete.create( 'expr', parser.parse( expr ) );
};


/*
| Shorthand for creating dots.
*/
def.static.$dot =
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
def.static.$equals =
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
def.staticLazy.$false = ( ) => ast_boolean.create( 'boolean', false );


/*
| Shorthand for ast code that throws a fail.
*/
def.static.$fail =
	function(
		message
	)
{
	if( !message )
	{
		message = undefined;
	}
	else if( typeof( message ) === 'string' )
	{
		message = ast_string.create( 'string', message );
	}

	return ast_fail.create( 'message', message );
};


/*
| Shorthand for creating less-than comparisons.
*/
def.static.$lessThan =
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
def.static.$let =
	function(
		name,   // variable name
		assign  // variable assignment
	)
{
	return(
		ast_let.create(
			'list:init',
			[
				ast_letEntry.create(
					'name', name,
					'assign', assign && parser.parse( assign )
				)
			]
		)
	);
};


/*
| Shorthand for creating greater-than comparisons.
*/
def.static.$greaterThan =
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
def.static.$if =
	function(
		condition,
		then,
		elsewise
	)
{
	return(
		ast_if.create(
			'condition', parser.parse( condition ),
			'then', ensureBlock( then ),
			'elsewise', elsewise && ensureBlock( elsewise )
		)
	);
};


/*
| Shorthand for creating for loops.
*/
def.static.$for =
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
			'block', ensureBlock( block )
		)
	);
};


/*
| Shorthand for creating for in loops.
*/
def.static.$forIn =
	function(
		variable,
		object,
		block
	)
{
	return(
		ast_forIn.create(
			'variable', parser.parse( variable ),
			'letVar', false,
			'object', parser.parse( object ),
			'block', ensureBlock( block )
		)
	);
};


/*
| Shorthand for creating for in loops with 'let' for variable.
*/
def.static.$forInLet =
	function(
		variable,
		object,
		block
	)
{
	return(
		ast_forIn.create(
			'variable', parser.parse( variable ),
			'letVar', true,
			'object', parser.parse( object ),
			'block', ensureBlock( block )
		)
	);
};


/*
| Shorthand for creating functions.
*/
def.static.$func =
	function(
		arg
	)
{
	return ast_func.create( 'block', ensureBlock( arg ) );
};


/*
| Shorthand for creating generator functions.
*/
def.static.$generator =
	function(
		arg
	)
{
	return ast_generator.create( 'block', ensureBlock( arg ) );
};


/*
| Shorthand for creating instanceof expressions.
*/
def.static.$instanceof =
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
def.static.$member =
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
def.static.$multiply =
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
			ast_multiply.create(
				'left', parser.parse( left ),
				'right', parser.parse( right )
			)
		);

		return ast_shorthand.$multiply.apply( this, args );
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
def.static.$multiplyAssign =
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
def.static.$new =
	function(
		call
	)
{
	return ast_new.create( 'call', call );
};


/*
| Shorthand for creating negations.
*/
def.static.$not =
	function(
		expr
	)
{
	return ast_not.create( 'expr', parser.parse( expr ) );
};


/*
| Shorthand for ast nulls.
*/
def.staticLazy.$null = ( ) => ast_null.create( );


/*
| Shorthand for creating number literals.
*/
def.static.$number =
	function(
		number
	)
{
	return ast_number.create( 'number', number );
};


/*
| Shorthand for creating object literals.
*/
def.static.$objLiteral =
	function( )
{
	return ast_objLiteral.create( );
};


/*
| Shorthand for creating ors.
*/
def.static.$or =
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
			ast_or.create(
				'left', parser.parse( left ),
				'right', parser.parse( right )
			)
		);

		return ast_shorthand.$or.apply( this, args );
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
def.static.$plus =
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
			ast_plus.create(
				'left', parser.parse( left ),
				'right', parser.parse( right )
			)
		);

		return ast_shorthand.$plus.apply( this, args );
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
def.static.$plusAssign =
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
def.static.$preIncrement =
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
def.static.$return =
	function(
		expr
	)
{
	return ast_return.create( 'expr', parser.parse( expr ) );
};



/*
| Shorthand for creating string literals.
*/
def.static.$string =
	function(
		string
	)
{
	return ast_string.create( 'string', string );
};


/*
| Shorthand for creating switch statements.
*/
def.static.$switch =
	function(
		statement
	)
{
	return ast_switch.create( 'statement', parser.parse( statement ) );
};


/*
| Shorthand for 'true' literals.
*/
def.staticLazy.$true = ( ) => ast_boolean.create( 'boolean', true );



/*
| Shorthand for creating typeofs.
*/
def.static.$typeof =
	function(
		expr
	)
{
	return ast_typeof.create( 'expr', parser.parse( expr ) );
};


/*
| Shorthand for 'undefined'
*/
def.staticLazy.$undefined = ( ) => ast_undefined.create( );


/*
| Shorthand for creating variable uses.
*/
def.static.$var =
	function(
		name
	)
{
	return ast_var.create( 'name', name );
};


/*
| Shorthand for variable declerations.
*/
def.static.$varDec =
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
| Shorthand for creating for loops.
*/
def.static.$while =
	function(
		condition,
		block
	)
{
	return(
		ast_while.create(
			'condition', parser.parse( condition ),
			'block', ensureBlock( block )
		)
	);
};


/*
| Shorthand for creating yield keywords.
*/
def.static.$yield =
	function(
		expr
	)
{
	return ast_yield.create( 'expr', parser.parse( expr ) );
};


} );
