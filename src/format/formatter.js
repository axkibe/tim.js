/*
| Formats an AST into a .js file.
*/
'use strict';


const MAX_TEXT_WIDTH = 99;

const format_formatter = module.exports;

const ast_and = require( '../ast/and' );

const ast_arrayLiteral = require( '../ast/arrayLiteral' );

const ast_assign = require( '../ast/assign' );

const ast_block = require( '../ast/block' );

const ast_boolean = require( '../ast/boolean' );

const ast_call = require( '../ast/call' );

const ast_check = require( '../ast/check' );

const ast_comma = require( '../ast/comma' );

const ast_comment = require( '../ast/comment' );

const ast_condition = require( '../ast/condition' );

const ast_const = require( '../ast/const' );

const ast_continue = require( '../ast/continue' );

const ast_delete = require( '../ast/delete' );

const ast_divide = require( '../ast/divide' );

const ast_divideAssign = require( '../ast/divideAssign' );

const ast_differs = require( '../ast/differs' );

const ast_dot = require( '../ast/dot' );

const ast_equals = require( '../ast/equals' );

const ast_fail = require( '../ast/fail' );

const ast_for = require( '../ast/for' );

const ast_forIn = require( '../ast/forIn' );

const ast_func = require( '../ast/func' );

const ast_greaterThan = require( '../ast/greaterThan' );

const ast_if = require( '../ast/if' );

const ast_instanceof = require( '../ast/instanceof' );

const ast_lessThan = require( '../ast/lessThan' );

const ast_let = require( '../ast/let' );

const ast_member = require( '../ast/member' );

const ast_minus = require( '../ast/minus' );

const ast_minusAssign = require( '../ast/minusAssign' );

const ast_multiplyAssign = require( '../ast/multiplyAssign' );

const ast_multiply = require( '../ast/multiply' );

const ast_negate = require( '../ast/negate' );

const ast_new = require( '../ast/new' );

const ast_not = require( '../ast/not' );

const ast_null = require( '../ast/null' );

const ast_number = require( '../ast/number' );

const ast_objLiteral = require( '../ast/objLiteral' );

const ast_or = require( '../ast/or' );

const ast_plus = require( '../ast/plus' );

const ast_plusAssign = require( '../ast/plusAssign' );

const ast_postIncrement = require( '../ast/postIncrement' );

const ast_postDecrement = require( '../ast/postDecrement' );

const ast_preDecrement = require( '../ast/preDecrement' );

const ast_preIncrement = require( '../ast/preIncrement' );

const ast_return = require( '../ast/return' );

const ast_string = require( '../ast/string' );

const ast_switch = require( '../ast/switch' );

const ast_typeof = require( '../ast/typeof' );

const ast_var = require( '../ast/var' );

const ast_varDec = require( '../ast/varDec' );

const format_context = require( './context' );

/*
| Expression precedence table.
*/
const precTable =
	new Map(
	[
		[ ast_and,            13 ],
		[ ast_arrayLiteral,   -1 ],
		[ ast_assign,         17 ],
		[ ast_boolean,        -1 ],
		[ ast_call,            2 ],
		[ ast_comma,          18 ],
		[ ast_condition,      15 ],
		[ ast_delete,          4 ],
		[ ast_differs,         9 ],
		[ ast_divide,          5 ],
		[ ast_dot,             1 ],
		[ ast_equals,          9 ],
		// this is random guess, must be larger than call
		// so the capsule is generated right.
		[ ast_func,            3 ],
		[ ast_greaterThan,     8 ],
//		[ ast_in,              8 ],
		[ ast_instanceof,      8 ],
		[ ast_lessThan,        8 ],
		[ ast_let,            -1 ],
		[ ast_member,          1 ],
		[ ast_minus,           6 ],
		[ ast_minusAssign,    17 ],
		[ ast_multiply,        5 ],
		[ ast_multiplyAssign, 17 ],
		[ ast_negate,          4 ],
		[ ast_new,             2 ],
		[ ast_not,             4 ],
		[ ast_null,           -1 ],
		[ ast_number,         -1 ],
		[ ast_objLiteral,     -1 ],
		[ ast_or,             14 ],
		[ ast_plus,            6 ],
		[ ast_plusAssign,     17 ],
		[ ast_postDecrement,   3 ],
		[ ast_postIncrement,   3 ],
		[ ast_preDecrement,    4 ],
		[ ast_preIncrement,    4 ],
		[ ast_string,         -1 ],
		[ ast_typeof,          4 ],
		[ ast_var,            -1 ]
	] );


/*
| Returns the length of a text
*/
const textLen =
	function(
		txt
	)
{
	return txt.replace( '\t', '    ' ).length;
};


/*
| Formats an And.
*/
const formatAnd =
	function(
		context,
		expr
	)
{
/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_and ) throw new Error( );
/**/}

	return(
		formatExpression( context, expr.left, ast_and )
		+ context.sep
		+ context.tab
		+ '&&'
		+ context.sep
		+ formatExpression( context, expr.right, ast_and )
	);
};


/*
| Formats an array literal.
|
| FUTURE format also inline
*/
const formatArrayLiteral =
	function(
		context,
		expr
	)
{
	let text = '';

/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_arrayLiteral ) throw new Error( );
/**/}


	if( expr.length === 0 ) return context.tab + '[ ]';

	if( context.inline ) throw 'noinline';

	text += context.tab + '[\n';

	for( let a = 0, al = expr.length; a < al; a++ )
	{
		text +=
			formatExpression(
				context.inc,
				expr.get( a ),
				ast_arrayLiteral
			)
			+ (
				a + 1 < al
				? ',\n'
				: '\n'
			);
	}

	return text + context.tab + ']';
};


/*
| Formats an assignment.
*/
const formatAssign =
	function(
		context,
		assign
	)
{
	let text =
		formatExpression( context, assign.left, ast_assign )
		+ ' ='
		+ context.sep;

	if( assign.right.timtype !== ast_assign )
	{
		context = context.incSame;
	}

	let subtext;

	try
	{
		subtext =
			context.tab
			+ formatExpression(
				context.setInline,
				assign.right,
				ast_assign
			);
	}
	catch( e )
	{
		// rethrows any real error
		if( e !== 'noinline' )
		{
			throw e;
		}

		// forwards noinline if this was a noinline
		if( context.inline )
		{
			throw 'noinline';
		}
	}

	if( subtext !== undefined && textLen( subtext ) < MAX_TEXT_WIDTH )
	{
		text += subtext;
	}
	else
	{
		text += formatExpression( context, assign.right, ast_assign );
	}

	return text;
};


/*
| Formats a block.
*/
const formatBlock =
	function(
		context,   // the context to format in
		block,     // the block to format to
		noBrackets // omit brackets
	)
{
	let text = '';

	if( context.inline && block.length > 1 ) throw 'noinline';

	let blockContext;

	if( !noBrackets )
	{
		text = context.tab + '{' + context.sep;

		blockContext = context.inc;
	}
	else
	{
		blockContext = context;
	}

	for( let a = 0, al = block.length; a < al; a++ )
	{
		text +=
			formatStatement(
				blockContext,
				block.get( a ),
				a > 0 ?  block.get( a - 1 ) : undefined,
				a + 1 < al ?  block.get( a + 1 ) : undefined
			);
	}

	if( !noBrackets )
	{
		text += context.tab + '}';
	}

	return text;
};


/*
| Formats a boolean literal use.
*/
const formatBoolean =
	function(
		context,
		expr
	)
{

/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_boolean ) throw new Error( );
/**/}

	return (
		context.tab +
		(
			expr.boolean
			? 'true'
			: 'false'
		)
	);
};


/*
| Formats a call.
*/
const formatCall =
	function(
		context,
		call,
		snuggle
	)
{
/**/if( CHECK )
/**/{
/**/	if( call.timtype !== ast_call ) throw new Error( );
/**/}

	let text =
		formatExpression(
			snuggle ? context.setInline : context,
			call.func,
			ast_call
		);

	if( call.length === 0 )
	{
		text += '( )';
	}
	else
	{
		text += '(' + context.sep;

		for( let a = 0, al = call.length; a < al; a++ )
		{
			text += formatExpression( context.inc, call.get( a ) );

			if( a + 1 < al )
			{
				text += ',' + context.sep;
			}
			else
			{
				text += context.sep;
			}
		}

		text += context.tab + ')';
	}

	return text;
};


/*
| Formats a capsule function.
*/
const formatCapsuleFunc =
	function(
		context,
		func
	)
{
/**/if( CHECK )
/**/{
/**/	if( func.length !== 0 ) throw new Error( );
/**/}

	return(
		'function( ) {\n'
		+ formatBlock(
			context.dec.create( 'root', true ),
			func.block,
			true
		)
		+ '\n\n}'
	);
};


/*
| Formats a conditional checking code.
*/
const formatCheck =
	function(
		context,
		check
	)
{
/**/if( CHECK )
/**/{
/**/	if( context.check ) throw new Error( );
/**/}

	context = context.create( 'check', true );

	return (
		context.tab
		+ 'if( CHECK )\n'
		+ formatBlock( context, check.block )
	);
};


/*
| Formats a comma operator.
*/
const formatComma =
	function(
		context,
		expr
	)
{
/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_comma ) throw new Error( );
/**/}

	return(
		formatExpression( context, expr.left, ast_comma )
		+ ','
		+ context.sep
		+ context.tab
		+ formatExpression( context, expr.right, ast_comma )
	);
};


/*
| Formats a comment.
*/
const formatComment =
	function(
		context,
		comment
	)
{
	let text = context.tab + '/*' + '\n';

	for( let a = 0, al = comment.length; a < al; a++ )
	{
		const c = comment.get( a );

		if( c === '' )
		{
			text += context.tab + '|' + '\n';
		}
		else
		{
			text += context.tab + '| ' + c + '\n';
		}
	}

	text += context.tab + '*/' + '\n';

	return text;
};


/*
| Formats a condition expression.
|
| The ? : thing.
*/
const formatCondition =
	function(
		context,
		expr
	)
{

/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_condition ) throw new Error( );
/**/}

	return (
		formatExpression( context, expr.condition, ast_condition )
		+ context.sep
		+ context.tab
		+ '? '
		+ formatExpression( context.setInline, expr.then, ast_condition )
		+ context.sep
		+ context.tab
		+ ': '
		+ formatExpression( context.setInline, expr.elsewise, ast_condition )
	);
};


/*
| Formats a constant variable declaration.
*/
const formatConst =
	function(
		context,
		expr
	)
{
	let text = context.tab + 'const ' + expr.name;

	if( expr.assign )
	{
		text += ' =' + context.sep;

		if( expr.assign.timtype !== ast_assign ) context = context.inc;

		let aText;

		try
		{
			aText =
				context.tab
				+ formatExpression( context.setInline, expr.assign );
		}
		catch( e )
		{
			// rethrows any real error
			if( e !== 'noinline' ) throw e;
		}

		if( aText === undefined || textLen( aText ) > MAX_TEXT_WIDTH )
		{
			aText = formatExpression( context, expr.assign );
		}

		text += aText;
	}

	return text;
};


/*
| Formats a continue statement.
*/
const formatContinue =
	function(
		context,
		statement
	)
{

/**/if( CHECK )
/**/{
/**/	if( statement.timtype !== ast_continue ) throw new Error( );
/**/}

	return context.tab + 'continue';
};



/*
| Formats a delete expression.
*/
const formatDelete =
	function(
		context,
		expr
	)
{

/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_delete ) throw new Error( );
/**/}

	return(
		context.tab
		+ 'delete '
		+ formatExpression( context, expr.expr, ast_delete )
	);
};


/*
| Formats a difference check.
*/
const formatDiffers =
	function(
		context,
		expr
	)
{
/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_differs ) throw new Error( );
/**/}

	return(
		formatExpression( context, expr.left, ast_differs )
		+ context.sep
		+ context.tab + '!==' + context.sep
		+ formatExpression( context, expr.right, ast_differs )
	);
};


/*
| Formats a Dot.
*/
const formatDot =
	function(
		context,
		expr
	)
{
/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_dot ) throw new Error( );
/**/}

	return(
		formatExpression( context, expr.expr, ast_dot )
		+ '.'
		+ expr.member
	);
};


/*
| Formats an equality check.
*/
const formatEquals =
	function(
		context,
		expr
	)
{
/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_equals ) throw new Error( );
/**/}

	return(
		formatExpression( context, expr.left, ast_equals )
		+ context.sep
		+ context.tab
		+ '==='
		+ context.sep
		+ formatExpression( context, expr.right, ast_equals )
	);
};


/*
| Formats an expression.
*/
const formatExpression =
	function(
		context, // context to be formated in
		expr,    // the expression to format
		ptimtype // timtype of parenting expression
		//       // may be undefined
	)
{
	const prec = precTable.get( expr.timtype );

	const pprec = precTable.get( ptimtype );

	if( !prec ) throw new Error( );

	const formatter = exprFormatter.get( expr.timtype );

	if( !formatter ) throw new Error( );

	let bracket = pprec !== undefined && prec > pprec;

	// special case, a( ).b would look ugly
	// as ( a( ) ).b
	if( ptimtype === ast_dot && expr.timtype === ast_call )
	{
		bracket = false;
	}

	let subcontext = context;

	let text = '';

	if( bracket )
	{
		text = context.tab + '(' + context.sep;

		subcontext = context.inc;
	}

	let subtext;

	if(
		!subcontext.inline
		&& !bracket
		&& pprec !== undefined && prec < pprec
	)
	{
		// tries to go inline
		try
		{
			subtext =
				subcontext.tab
				+ formatter( subcontext.setInline, expr );
		}
		catch( e )
		{
			// rethrows any real error
			if( e !== 'noinline' ) throw e;
		}
	}

	if( subtext === undefined || textLen( subtext ) > MAX_TEXT_WIDTH )
	{
		subtext = formatter( subcontext, expr );
	}

	text += subtext;

	if( bracket )
	{
		text += context.sep + context.tab + ')';
	}

	return text;
};


/*
| Formats a fail statement.
*/
const formatFail =
	function(
		context,
		fail
	)
{
/**/if( CHECK )
/**/{
/**/	if( fail.timtype !== ast_fail ) throw new Error( );
/**/}

	if( !fail.message ) return context.tab + 'throw new Error( )';

	let checkContext;

	let messageContext;

	let result;

	if( context.check )
	{
		messageContext = context;

		result = '';
	}
	else
	{
		checkContext = context.create( 'check', true );

		messageContext = checkContext.inc;

		result =
			checkContext.tab
			+ 'if( CHECK )'
			+ checkContext.sep
			+ checkContext.tab
			+ '{'
			+ checkContext.sep;
	}

	result +=
		messageContext.tab
		+ 'throw new Error('
		+ messageContext.sep
		+ formatExpression( messageContext.inc, fail.message )
		+ messageContext.sep
		+ messageContext.tab
		+ ')';

	if( !context.check )
	{
		result +=
			';'
			+ checkContext.sep
			+ checkContext.tab
			+ '}'
			+ checkContext.sep
			+ checkContext.sep
			+ context.tab
			+ 'throw new Error( )';
	}

	return result;
};


/*
| Formats a classical for loop.
*/
const formatFor =
	function(
		context,
		forExpr
	)
{
	const forContext = context.inc;

	return(
		context.tab
		+ 'for(\n'
		+ forContext.tab
		+ formatExpression( forContext.setInline, forExpr.init )
		+ ';\n'
		+ forContext.tab
		+ formatExpression( forContext.setInline, forExpr.condition )
		+ ';\n'
		+ forContext.tab
		+ formatExpression( forContext.setInline, forExpr.iterate )
		+ '\n'
		+ context.tab
		+ ')\n'
		+ formatBlock( context, forExpr.block )
	);
};


/*
| Formats a for-in loop.
*/
const formatForIn =
	function(
		context,
		expr
	)
{
	return(
		context.tab
		+ 'for( '
		+ ( expr.letVar ? 'let ' : '' )
		+ expr.variable.name
		+ ' in '
		+ formatExpression( context.setInline, expr.object, ast_instanceof )
		+ ' )\n'
		+ formatBlock( context, expr.block )
	);
};


/*
| Formats a function.
*/
const formatFunc =
	function(
		context,
		func
	)
{
	if( func.capsule )
	{
		return formatCapsuleFunc( context, func );
	}

	let text = context.tab;

	if( func.length === 0 )
	{
		text += 'function( )' + context.sep;
	}
	else
	{
		text += 'function(' + context.sep;

		for( let a = 0, al = func.length; a < al; a++ )
		{
			const arg = func.get( a );

			const comma = a + 1 < al ? ',' : '';

			const argSpace = arg.name ? ' ' : '';

			text +=
				context.inc.tab
				+ ( arg.name || '' )
				+ comma
				+ (
					arg.comment
					?  argSpace + '// ' + arg.comment
					: ''
				)
				+ '\n';
		}

		text += context.tab + ')' + context.sep;
	}

	// formats to body at one indentation decremented.
	context = context.dec;

	text += formatBlock( context, func.block );

	return text;
};


/*
| Formats an if statement.
*/
const formatIf =
	function(
		context,
		statement
	)
{
/**/if( CHECK )
/**/{
/**/	if( statement.timtype !== ast_if ) throw new Error( );
/**/}

	const cond = statement.condition;

	if( context.inline ) throw 'noinline';

	let text;

	try {
		text =
			context.tab
			+ 'if( '
			+ formatExpression( context.setInline, cond )
			+ ' )\n';
	}
	catch ( e )
	{
		// rethrows any real error
		if( e !== 'noinline' )
		{
			throw e;
		}
	}

	if( text === undefined || textLen( text ) > MAX_TEXT_WIDTH )
	{
		text =
			context.tab
			+ 'if(\n'
			+ formatExpression( context.inc, cond )
			+ '\n'
			+ context.tab
			+ ')\n';
	}

	text += formatBlock( context, statement.then );

	if( statement.elsewise )
	{
		text +=
			'\n'
			+ context.tab
			+ 'else\n'
			+ formatBlock( context, statement.elsewise );
	}

	return text;
};


/*
| Formats an instanceof expression.
*/
const formatInstanceof =
	function(
		context,
		expr
	)
{
/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_instanceof ) throw new Error( );
/**/}

	return(
		formatExpression( context, expr.left, ast_instanceof )
		+ context.sep
		+ context.tab
		+ 'instanceof'
		+ context.sep
		+ formatExpression( context, expr.right, ast_instanceof )
	);
};


/*
| Formats a variable declaration.
*/
const formatLet =
	function(
		context,
		expr
	)
{
	let text = context.tab + 'let ';

	for( let a = 0, al = expr.length; a < al; a++ )
	{
		if( a > 0 ) text += ',' + context.sep + context.tab + context.tab;

		const entry = expr.get( a );

		text += entry.name;

		if( entry.assign )
		{
			text += ' =' + context.sep;

			if( entry.assign.timtype !== ast_assign ) context = context.inc;

			let aText;

			try
			{
				aText =
					context.tab
					+ formatExpression( context.setInline, entry.assign );
			}
			catch( e )
			{
				// rethrows any real error
				if( e !== 'noinline' ) throw e;
			}

			if( aText === undefined || textLen( aText ) > MAX_TEXT_WIDTH )
			{
				aText = formatExpression( context, entry.assign );
			}

			text += aText;
		}
	}

	return text;
};


/*
| Formats a member.
*/
const formatMember =
	function(
		context,
		expr
	)
{
/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_member ) throw new Error( );
/**/}

	return (
		formatExpression( context, expr.expr, ast_member )
		+ '['
		+ context.sep
		+ formatExpression( context.inc, expr.member )
		+ context.sep
		+ context.tab
		+ ']'
	);
};


let formatDualOpMap = () => {
	const map = new Map( );

	map.set( ast_divide, '/' );
	map.set( ast_greaterThan, '>' );
	map.set( ast_lessThan, '<' );
	map.set( ast_minus, '-' );
	map.set( ast_multiply, '*' );
	map.set( ast_plus, '+' );

	return map;
};


/*
| Formats a dualistic operation
*/
const formatDualOp =
	function(
		context,
		expr
	)
{
	if( typeof( formatDualOpMap ) === 'function' )
	{
		formatDualOpMap = formatDualOpMap( );
	}

	const op = formatDualOpMap.get( expr.timtype );

	if( !op ) throw new Error( );

	return(
		formatExpression( context, expr.left, expr.timtype )
		+ context.sep
		+ context.tab
		+ op
		+ context.sep
		+ formatExpression( context, expr.right, expr.timtype )
	);
};


/*
| Formats a new expression.
*/
const formatNew =
	function(
		context,
		expr
	)
{

/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_new ) throw new Error( );
/**/}

	return(
		context.tab
		+ 'new '
		+ formatCall(
			context,
			expr.call,
			true
		)
	);
};


/*
| Formats a monoistic operator.
*/
const formatMonoOp =
	function(
		context,
		expr
	)
{
	let op;

	switch( expr.timtype )
	{
		case ast_negate : op = '-'; break;

		case ast_not : op = '!'; break;

		default : throw new Error( );
	}

	return(
		context.tab
		+ op
		+ formatExpression( context, expr.expr, expr.timtype )
	);
};


/*
| Formats a null.
*/
const formatNull =
	function(
		context,
		expr
	)
{
/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_null ) throw new Error( );
/**/}

	return context.tab + 'null';
};


/*
| Formats a string literal use.
*/
const formatNumber =
	function(
		context,
		expr
	)
{

/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_number ) throw new Error( );
/**/}

	return context.tab + '' + expr.number;
};


/*
| Formats a logical or.
*/
const formatOr =
	function(
		context,
		expr
	)
{

/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_or ) throw new Error( );
/**/}

	return(
		formatExpression( context, expr.left, ast_or )
		+ context.sep
		+ context.tab
		+ '||'
		+ context.sep
		+ formatExpression( context, expr.right, ast_or )
	);
};



/*
| Formats an operation assignment (+=,-=,*=,/=)
*/
const formatOpAssign =
	function(
		context,
		assign
	)
{
	context = context.incSame;

	let op;

	switch( assign.timtype )
	{
		case ast_divideAssign : op = '/='; break;

		case ast_minusAssign : op = '-='; break;

		case ast_multiplyAssign : op = '*='; break;

		case ast_plusAssign : op = '+='; break;

		default : throw new Error( );
	}

	let text;

	try
	{
		// first tries to inline the
		// return expression.
		text =
			formatExpression(
				context.setInline,
				assign.left,
				assign.timtype
			)
			+ ' ' + op + ' '
			+ formatExpression(
				context.setInline,
				assign.right,
				assign.timtype
			);
	}
	catch( e )
	{
		// rethrows any real error
		if( e !== 'noinline' ) throw e;
	}

	if( text !== undefined && textLen( text ) < MAX_TEXT_WIDTH )
	{
		return text;
	}

	// caller requested inline, but cannot do.
	if( context.inline ) throw 'noinline';

	throw 'FUTURE: implement noinline +=';
};


/*
| Formats a pre-decrement.
*/
const formatPreDecrement =
	function(
		context,
		expr
	)
{

/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_preDecrement ) throw new Error( );
/**/}

	return(
		context.tab
		+ '--'
		+ formatExpression( context, expr.expr, ast_preDecrement )
	);
};


/*
| Formats a pre-increment.
*/
const formatPreIncrement =
	function(
		context,
		expr
	)
{

/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_preIncrement ) throw new Error( );
/**/}

	return(
		context.tab
		+ '++'
		+ formatExpression( context, expr.expr, ast_preIncrement )
	);
};


/*
| Formats a post-decrement.
*/
const formatPostDecrement =
	function(
		context,
		expr
	)
{

/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_postDecrement ) throw new Error( );
/**/}

	return(
		context.tab
		+ formatExpression( context, expr.expr, ast_postIncrement )
		+ '--'
	);
};


/*
| Formats a post-increment.
*/
const formatPostIncrement =
	function(
		context,
		expr
	)
{
/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_postIncrement ) throw new Error( );
/**/}

	return(
		context.tab
		+ formatExpression( context, expr.expr, ast_postIncrement )
		+ '++'
	);
};


/*
| Formats a return statement.
*/
const formatReturn =
	function(
		context,
		statement
	)
{
/**/if( CHECK )
/**/{
/**/	if( statement.timtype !== ast_return ) throw new Error( );
/**/}

	let text;

	try
	{
		// first tries to inline the
		// return expression.
		text =
			context.tab
			+ 'return '
			+ formatExpression( context.setInline, statement.expr );
	}
	catch( e )
	{
		// rethrows any real error
		if( e !== 'noinline' )
		{
			throw e;
		}
	}

	if( text !== undefined && textLen( text ) < MAX_TEXT_WIDTH )
	{
		return text;
	}

	// caller requested inline, but cannot do.
	if( context.inline )
	{
		throw 'noinline';
	}

	// no inline mode
	text =
		context.tab
		+ 'return (\n'
		+ formatExpression( context.inc, statement.expr )
		+ '\n'
		+ context.tab
		+ ')';

	return text;
};


/*
| Formats a statement.
*/
const formatStatement =
	function(
		context,    // context to be formated in
		statement,  // the statement to be formated
		lookBehind, // the previous statement (or undefined)
		lookAhead   // the next statement (or undefined)
	)
{
	let text = '';

	let subtext;

	if(
		lookBehind
		&& lookBehind.timtype !== ast_comment
		&& !( lookBehind.timtype === ast_varDec && statement.timtype === ast_varDec )
	)
	{
		text +=
			context.check
			? '/**/\n'
			: '\n';

		if( context.root )
		{
			text +=
				context.check
				?  '/**/\n'
				: '\n';
		}
	}

	if( statement.timtype === ast_comment )
	{
		if( lookBehind && lookBehind.timtype === ast_comment )
		{
			text += '\n\n';
		}

		text += formatComment( context, statement );

		return text;
	}

	switch( statement.timtype )
	{
		case ast_check :

			text += formatCheck( context, statement );

			break;

		case ast_const :

			try
			{
				subtext = context.tab + formatConst( context.setInline, statement );
			}
			catch( e )
			{
				// rethrows any real error
				if( e !== 'noinline' ) throw e;
			}

			if( subtext !== undefined && textLen( subtext ) < MAX_TEXT_WIDTH )
			{
				text += subtext;
			}
			else
			{
				text += formatConst( context, statement );
			}

			break;

		case ast_continue :

			text += formatContinue( context, statement );

			break;

		case ast_if :

			text += formatIf( context, statement );

			break;

		case ast_fail :

			try
			{
				subtext = context.tab + formatFail( context.setInline, statement );
			}
			catch( e )
			{
				// rethrows any real error
				if( e !== 'noinline' ) throw e;
			}

			if( subtext !== undefined && textLen( subtext ) < MAX_TEXT_WIDTH )
			{
				text += subtext;
			}
			else
			{
				text += formatFail( context, statement );
			}

			break;

		case ast_for :

			text += formatFor( context, statement );

			break;

		case ast_forIn :

			text += formatForIn( context, statement );

			break;

		case ast_let :

			try
			{
				subtext = context.tab + formatLet( context.setInline, statement );
			}
			catch( e )
			{
				// rethrows any real error
				if( e !== 'noinline' ) throw e;
			}

			if( subtext !== undefined && textLen( subtext ) < MAX_TEXT_WIDTH )
			{
				text += subtext;
			}
			else
			{
				text += formatLet( context, statement );
			}

			break;

		case ast_return :

			text += formatReturn( context, statement );

			break;

		case ast_switch :

			text += formatSwitch( context, statement );

			break;

		case ast_varDec :

			text += formatVarDec( context, statement, lookBehind );

			break;

		default :

			try
			{
				// tries to format inline
				subtext =
					context.tab
					+ formatExpression( context.setInline, statement );
			}
			catch( e )
			{
				// rethrows any real error
				if( e !== 'noinline' )
				{
					throw e;
				}
			}

			if( subtext !== undefined && textLen( subtext ) < MAX_TEXT_WIDTH )
			{
				text += subtext;
			}
			else
			{
				// reformats as noinline

				text += formatExpression( context, statement );
			}
	}

	switch( statement.timtype )
	{
		case ast_varDec :

			if( lookAhead && lookAhead.timtype === ast_varDec )
			{
				return text += ',\n';
			}
			else
			{
				return text += ';\n';
			}

			break;

		case ast_assign :
		case ast_boolean :
		case ast_call :
		case ast_const :
		case ast_continue :
		case ast_delete :
		case ast_divide :
		case ast_dot :
		case ast_fail :
		case ast_greaterThan :
		case ast_lessThan :
		case ast_let :
		case ast_member :
		case ast_minus :
		case ast_minusAssign :
		case ast_multiply :
		case ast_multiplyAssign :
		case ast_negate :
		case ast_new :
		case ast_not :
		case ast_number :
		case ast_plus :
		case ast_plusAssign :
		case ast_postIncrement :
		case ast_postDecrement :
		case ast_preIncrement :
		case ast_preDecrement :
		case ast_return :
		case ast_string :
		case ast_var :

			return text + ';' + context.sep;

		case ast_check :
		case ast_for :
		case ast_forIn :
		case ast_if :
		case ast_switch :

			return text + context.sep;

		default :

			throw new Error( );
	}
};


/*
| Formats a string literal.
*/
const formatString =
	function(
		context,
		expr
	)
{

/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_string ) throw new Error( );
/**/}

	return context.tab + '\'' + expr.string + '\'';
};


/*
| Formats a switch statement
*/
const formatSwitch =
	function(
		context,
		switchExpr
	)
{
	const caseContext = context.inc;

	let text =
		context.tab
		+ 'switch( '
		+ formatExpression( context.setInline, switchExpr.statement )
		+ ' )\n'
		+ context.tab
		+ '{\n';

	for( let a = 0, al = switchExpr.length; a < al; a++ )
	{
		const caseExpr = switchExpr.get( a );

		if( a > 0 ) text += '\n';

		// FUTURE this is broken for
		// caseExpr.length > 1
		for( let b = 0, bl = caseExpr.length; b < bl; b++ )
		{
			text +=
				caseContext.tab
				+ 'case '
				+ formatExpression( caseContext.setInline, caseExpr.get( b ) )
				+ ' :\n\n'
				+ formatBlock( caseContext.inc, caseExpr.block, true )
				+ '\n'
				+ caseContext.inc.tab
				+ 'break;\n';
		}
	}

	if( switchExpr.defaultCase )
	{
		if( switchExpr.length > 0 )
		{
			text += '\n';
		}

		text +=
			caseContext.tab +
			'default :\n\n'
			+
			formatBlock(
				caseContext.inc,
				switchExpr.defaultCase,
				true
			);
	}

	text += context.tab + '}';

	return text;
};


/*
| Formats a typeof expression.
*/
const formatTypeof =
	function(
		context,
		expr
	)
{

/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_typeof ) throw new Error( );
/**/}

	return(
		context.tab
		+ 'typeof('
		+ context.sep
		+ formatExpression( context.inc, expr.expr, ast_typeof )
		+ context.sep
		+ ')'
	);
};


/*
| Formats an object literal.
|
| FUTURE format also inline
*/
var
formatObjLiteral =
	function(
		context,
		expr
	)
{
	var
		key,
		text;

	text = '';

/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_objLiteral ) throw new Error( );
/**/}

	if( expr.length === 0 )
	{
		return context.tab + '{ }';
	}

	if( context.inline )
	{
		throw 'noinline';
	}

	text += context.tab + '{\n';

	for( let a = 0, al = expr.length; a < al; a++ )
	{
		key = expr.getKey( a );

		text +=
			context.inc.tab
			+ key
			+ ' :\n';

		text +=
			formatExpression(
				context.inc.inc,
				expr.get( key )
				// FUTURE, precTable.Objliteral
			)
			+ ( a + 1 < al ? ',\n' : '\n' );
	}

	text += context.tab + '}';

	return text;
};


/*
| Formats a variable use.
*/
const formatVar =
	function(
		context,
		expr
	)
{

/**/if( CHECK )
/**/{
/**/	if( expr.timtype !== ast_var ) throw new Error( );
/**/}

	return context.tab + expr.name;
};


/*
| Formats a variable declaration.
*/
const formatVarDec =
	function(
		context,
		varDec,
		lookBehind
	)
{
	var
		// formated assignment
		aText,
		isRootFunc,
		text;

	// true when this is a root function
	isRootFunc = false;

	text = '';

	if( context.root && varDec.assign )
	{
		if( varDec.assign.timtype === ast_func )
		{
			isRootFunc = true;
		}
		else if(
			varDec.assign.timtype === ast_assign
			&& varDec.assign.right.timtype === ast_func
		)
		{
			// FUTURUE allow abitrary amount of assignments
			isRootFunc = true;
		}
	}

	if( !isRootFunc )
	{
		if( !lookBehind || lookBehind.timtype !== ast_varDec )
		{
			if( !context.inline )
			{
				text += context.tab + 'var' + '\n';
			}
			else
			{
				text += 'var ';
			}
		}

		if( !context.inline )
		{
			context = context.inc;

			text += context.tab;
		}

		text += varDec.name;
	}
	else
	{
		// root functions are not combined in VarDecs
		text = context.tab + 'var ' + varDec.name;
	}

	if( varDec.assign )
	{
		text += ' =' + context.sep;

		if( varDec.assign.timtype !== ast_assign )
		{
			context = context.inc;
		}

		try
		{
			aText =
				context.tab
				+ formatExpression( context.setInline, varDec.assign );
		}
		catch( e )
		{
			// rethrows any real error
			if( e !== 'noinline' )
			{
					throw e;
			}
		}

		if( aText === undefined || textLen( aText ) > MAX_TEXT_WIDTH )
		{
			aText = formatExpression( context, varDec.assign );
		}

		text += aText;
	}

	return text;
};


/*
| Formats a block as file.
*/
format_formatter.format =
	function(
		block
	)
{
	const context = format_context.create( 'root', true );

	if( block.timtype === ast_block )
		return formatBlock( context, block, true );
	else
		return formatStatement( context, block );
};


/*
| Table of all expression formatters.
*/
const exprFormatter =
	new Map( [
		[ ast_and,            formatAnd           ],
		[ ast_arrayLiteral,   formatArrayLiteral  ],
		[ ast_assign,         formatAssign        ],
		[ ast_boolean,        formatBoolean       ],
		[ ast_call,           formatCall          ],
		[ ast_comma,          formatComma         ],
		[ ast_condition,      formatCondition     ],
		[ ast_delete,         formatDelete        ],
		[ ast_differs,        formatDiffers       ],
		[ ast_divide,         formatDualOp        ],
		[ ast_dot,            formatDot           ],
		[ ast_equals,         formatEquals        ],
		[ ast_func,           formatFunc          ],
		[ ast_greaterThan,    formatDualOp        ],
		[ ast_instanceof,     formatInstanceof    ],
		[ ast_lessThan,       formatDualOp        ],
		[ ast_let,            formatLet           ],
		[ ast_member,         formatMember        ],
		[ ast_minus,          formatDualOp        ],
		[ ast_minusAssign,    formatOpAssign      ],
		[ ast_multiply,       formatDualOp        ],
		[ ast_multiplyAssign, formatOpAssign      ],
		[ ast_negate,         formatMonoOp        ],
		[ ast_new,            formatNew           ],
		[ ast_not,            formatMonoOp        ],
		[ ast_null,           formatNull          ],
		[ ast_number,         formatNumber        ],
		[ ast_objLiteral,     formatObjLiteral    ],
		[ ast_or,             formatOr            ],
		[ ast_plus,           formatDualOp        ],
		[ ast_plusAssign,     formatOpAssign      ],
		[ ast_postDecrement,  formatPostDecrement ],
		[ ast_postIncrement,  formatPostIncrement ],
		[ ast_preDecrement,   formatPreDecrement  ],
		[ ast_preIncrement,   formatPreIncrement  ],
		[ ast_string,         formatString        ],
		[ ast_typeof,         formatTypeof        ],
		[ ast_var,            formatVar           ]
	] );


