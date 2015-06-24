/*
| Formats an AST into a .js file.
*/


var
	format_context,
	format_formatter;

/*
| Capsule
*/
(function() {
'use strict';


/*
| Constants.
*/
var MAX_TEXT_WIDTH = 79;


format_formatter = module.exports;


var
	exprFormatter,
	formatAnd,
	formatArrayLiteral,
	formatAssign,
	formatBlock,
	formatBoolean,
	formatCall,
	formatCapsuleFunc,
	formatCheck,
	formatComma,
	formatComment,
	formatCondition,
	formatContinue,
	formatDelete,
	formatDiffers,
	formatDot,
	formatEquals,
	formatExpression,
	formatFail,
	formatFor,
	formatForIn,
	formatFunc,
	formatGreaterThan,
	formatIf,
	formatInstanceof,
	formatLessThan,
	formatMember,
	formatMultiply,
	formatMultiplyAssign,
	formatNew,
	formatNot,
	formatNumber,
	formatNull,
	formatOr,
	formatPlus,
	formatPlusAssign,
	formatPreIncrement,
	formatReturn,
	formatStatement,
	formatString,
	formatSwitch,
	formatTypeof,
	formatVar,
	formatVarDec,
	textLen,
	precTable;


format_context = require( './context' );

/*
| Expression precedence table.
*/
precTable =
	{
		'ast_and' : 13,
		'ast_arrayLiteral' : -1,
		'ast_assign' : 17,
		'ast_boolean' : -1,
		'ast_call' : 2,
		'ast_comma' : 18,
		'ast_condition' : 15,
		'ast_delete' : 4,
		'ast_differs' : 9,
		'ast_dot' : 1,
		'ast_equals' : 9,
		// this is random guess, must be larger than call
		// so the capsule is generated right.
		'ast_func' : 3,
		'ast_greaterThan' : 8,
		'ast_in' : 8,
		'ast_instanceof' : 8,
		'ast_lessThan' : 8,
		'ast_member' : 1,
		'ast_multiply' : 5,
		'ast_multiplyAssign' : 17,
		'ast_new' : 2,
		'ast_not' : 4,
		'ast_null' : -1,
		'ast_number' : -1,
		'ast_objLiteral' : -1,
		'ast_or' : 14,
		'ast_plus' : 6,
		'ast_plusAssign' : 17,
		'ast_preIncrement' : 3,
		'ast_string' : -1,
		'ast_typeof' : 4,
		'ast_var' : -1
	};


/*
| Returns the length of a text
*/
textLen =
	function(
		txt
	)
{
	return txt.replace( '\t', '        ' ).length;
};


/*
| Formats an And.
*/
formatAnd =
	function(
		context,
		expr
	)
{
	var
		text;

/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_and' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	text =
		formatExpression( context, expr.left, 'ast_and')
		+ context.sep
		+ context.tab
		+ '&&'
		+ context.sep
		+ formatExpression( context, expr.right, 'ast_and' );

	return text;
};


/*
| Formats an array literal.
|
| FUTURE format also inline
*/
formatArrayLiteral =
	function(
		context,
		expr
	)
{
	var
		a,
		aZ,
		text;

	text = '';

/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_arrayLiteral' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}


	if( expr.length === 0 )
	{
		return context.tab + '[ ]';
	}

	if( context.inline )
	{
		throw 'noinline';
	}

	text += context.tab + '[\n';

	for(
		a = 0, aZ = expr.length;
		a < aZ;
		a++
	)
	{
		text +=
			formatExpression(
				context.inc,
				expr.get( a ),
				'ast_arrayLiteral'
			)
			+ (
				a + 1 < aZ
				? ',\n'
				: '\n'
			);
	}

	text += context.tab + ']';

	return text;
};


/*
| Formats an assignment.
*/
formatAssign =
	function(
		context,
		assign
	)
{
	var
		subtext,
		text;

	text = '';

	text +=
		formatExpression( context, assign.left, 'ast_assign' )
		+ ' ='
		+ context.sep;

	if( assign.right.reflect !== 'ast_assign' )
	{
		context = context.incSame;
	}

	try
	{
		subtext =
			context.tab
			+ formatExpression(
				context.setInline,
				assign.right,
				'ast_assign'
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
		text += formatExpression( context, assign.right, 'ast_assign' );
	}

	return text;
};


/*
| Formats a block.
*/
formatBlock =
	function(
		context,   // the context to format in
		block,     // the block to format to
		noBrackets // omit brackets
	)
{
	var
		a, aZ,
		blockContext,
		text;

	text = '';

	if( context.inline && block.length > 1 )
	{
		throw 'noinline';
	}

	if( !noBrackets )
	{
		text = context.tab + '{' + context.sep;

		blockContext = context.inc;
	}
	else
	{
		blockContext = context;
	}

	for(
		a = 0, aZ = block.length;
		a < aZ;
		a++
	)
	{
		text +=
			formatStatement(
				blockContext,
				block.get( a ),
				a > 0 ?  block.get( a - 1 ) : undefined,
				a + 1 < aZ ?  block.get( a + 1 ) : undefined
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
formatBoolean =
	function(
		context,
		expr
	)
{

/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
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
formatCall =
	function(
		context,
		call,
		snuggle
	)
{
	var
		a, aZ,
		text;

/**/if( CHECK )
/**/{
/**/	if( call.reflect !== 'ast_call' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	text =
		formatExpression(
			snuggle ? context.setInline : context,
			call.func,
			'ast_call'
		);

	if( call.length === 0 )
	{
		text += '( )';
	}
	else
	{
		text += '(' + context.sep;

		for(
			a = 0, aZ = call.length;
			a < aZ;
			a++
		)
		{
			text += formatExpression( context.inc, call.get( a ) );

			if( a + 1 < aZ )
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
formatCapsuleFunc =
	function(
		context,
		func
	)
{
	var
		text;

	if( func.length !== 0 )
	{
		throw new Error( );
	}

	text =
		'function( ) {\n'
		+ formatBlock(
			context.dec.create( 'root', true ),
			func.block,
			true
		)
		+ '\n\n}';

	return text;
};


/*
| Formats a conditional checking code.
*/
formatCheck =
	function(
		context,
		check
	)
{
	if( context.check )
	{
		throw new Error( );
	}

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
formatComma =
	function(
		context,
		expr
	)
{
	var
		text;

/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_comma' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	text =
		formatExpression( context, expr.left, 'ast_comma' )
		+ ','
		+ context.sep
		+ context.tab
		+ formatExpression( context, expr.right, 'ast_comma' );

	return text;
};


/*
| Formats a comment.
*/
formatComment =
	function(
		context,
		comment
	)
{
	var
		a,
		aZ,
		c,
		text;

	text = context.tab + '/*' + '\n';

	for(
		a = 0, aZ = comment.length;
		a < aZ;
		a++
	)
	{
		c = comment.get( a );

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
formatCondition =
	function(
		context,
		expr
	)
{

/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_condition' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	return (
		formatExpression( context, expr.condition, 'ast_condition' )
		+ context.sep
		+ context.tab
		+ '? '
		+ formatExpression(
			context.setInline,
			expr.then,
			'ast_condition'
		)
		+ context.sep
		+ context.tab
		+ ': '
		+ formatExpression( context.setInline, expr.elsewise, 'ast_condition' )
	);
};


/*
| Formats a continue statement.
*/
formatContinue =
	function(
		context,
		statement
	)
{

/**/if( CHECK )
/**/{
/**/	if( statement.reflect !== 'ast_continue' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	return context.tab + 'continue';
};



/*
| Formats a delete expression.
*/
formatDelete =
	function(
		context,
		expr
	)
{

/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_delete' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	return(
		context.tab
		+ 'delete '
		+ formatExpression( context, expr.expr, 'ast_delete' )
	);
};


/*
| Formats a difference check.
*/
formatDiffers =
	function(
		context,
		expr
	)
{
	var
		text;

/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_differs' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	text =
		formatExpression( context, expr.left, 'ast_differs' )
		+ context.sep
		+ context.tab + '!==' + context.sep
		+ formatExpression( context, expr.right, 'ast_differs' );

	return text;
};


/*
| Formats a Dot.
*/
formatDot =
	function(
		context,
		expr
	)
{
/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_dot' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	return(
		formatExpression( context, expr.expr, 'ast_dot' )
		+ '.'
		+ expr.member
	);
};


/*
| Formats an equality check.
*/
formatEquals =
	function(
		context,
		expr
	)
{
	var
		text;

/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_equals' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	text =
		formatExpression( context, expr.left, 'ast_equals' )
		+ context.sep
		+ context.tab
		+ '==='
		+ context.sep
		+ formatExpression( context, expr.right, 'ast_equals' );

	return text;
};


/*
| Formats an expression.
*/
formatExpression =
	function(
		context, // context to be formated in
		expr,    // the expression to format
		preflect // reflection string of parenting expression
		//       // may be undefined
	)
{
	var
		bracket,
		formatter,
		prec,
		pprec,
		subcontext,
		subtext,
		text;

	prec = precTable[ expr.reflect ];

	pprec = precTable[ preflect ];
	
	if( !prec )
	{
		throw new Error( 'cannot handle: ' + expr.reflectName );
	}

	formatter = exprFormatter[ expr.reflect ];

	if( !formatter ) throw new Error( expr.reflect );

	bracket = pprec !== undefined && prec > pprec;
	
	// special case, a( ).b would look ugly
	// as ( a( ) ).b
	if( preflect === 'ast_dot' && expr.reflect === 'ast_call' )
	{
		bracket = false;
	}

	subcontext = context;

	text = '';

	if( bracket )
	{
		text = context.tab + '(' + context.sep;

		subcontext = context.inc;
	}

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
formatFail =
	function(
		context,
		fail
	)
{
	var
		checkContext,
		messageContext,
		result;

/**/if( CHECK )
/**/{
/**/	if( fail.reflect !== 'ast_fail' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if( !fail.message )
	{
		return context.tab + 'throw new Error( )';
	}

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
formatFor =
	function(
		context,
		forExpr
	)
{
	var
		forContext,
		text;

	forContext = context.inc;

	text =
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
		+ formatBlock( context, forExpr.block );

	return text;
};


/*
| Formats a for-in loop.
*/
formatForIn =
	function(
		context,
		expr
	)
{
	var
		text;

	text =
		context.tab
		+ 'for( var '
		+ expr.variable.name
		+ ' in '
		+ formatExpression( context.setInline, expr.object, 'ast_in' )
		+ ' )\n'
		+ formatBlock( context, expr.block );

	return text;
};


/*
| Formats a function.
*/
formatFunc =
	function(
		context,
		func
	)
{
	var
		a,
		arg,
		argSpace,
		aZ,
		comma,
		text;

	if( func.capsule )
	{
		return formatCapsuleFunc( context, func );
	}

	text = context.tab;

	if( func.length === 0 )
	{
		text += 'function( )' + context.sep;
	}
	else
	{
		text += 'function(' + context.sep;

		for(
			a = 0, aZ = func.length;
			a < aZ;
			a++
		)
		{
			arg = func.get( a );

			comma = a + 1 < aZ ? ',' : '';

			argSpace = arg.name ? ' ' : '';

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
| Formats a more-than check.
*/
formatGreaterThan =
	function(
		context,
		expr
	)
{
	var
		text;

/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_greaterThan' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	text =
		formatExpression( context, expr.left, 'ast_greaterThan' )
		+ context.sep
		+ context.tab
		+ '>'
		+ context.sep
		+ formatExpression( context, expr.right, 'ast_greaterThan' );

	return text;
};


/*
| Formats an if statement.
*/
formatIf =
	function(
		context,
		statement
	)
{
	var
		cond,
		text;

	cond = statement.condition;

	if( context.inline )
	{
		throw 'noinline';
	}

/**/if( CHECK )
/**/{
/**/	if( statement.reflect !== 'ast_if' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

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
formatInstanceof =
	function(
		context,
		expr
	)
{
	var
		text;

/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_instanceof' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	text =
		formatExpression( context, expr.left, 'ast_instanceof' )
		+ context.sep
		+ context.tab
		+ 'instanceof'
		+ context.sep
		+ formatExpression( context, expr.right, 'ast_instanceof' );

	return text;
};


/*
| Formats a less-than check.
*/
formatLessThan =
	function(
		context,
		expr
	)
{
	var
		text;

/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_lessThan' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	text =
		formatExpression( context, expr.left, 'ast_lessThan' )
		+ context.sep
		+ context.tab
		+ '<'
		+ context.sep
		+ formatExpression( context, expr.right, 'ast_lessThan' );

	return text;
};



/*
| Formats a member.
*/
formatMember =
	function(
		context,
		expr
	)
{
/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_member' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	return (
		formatExpression( context, expr.expr, 'ast_member' )
		+ '['
		+ context.sep
		+ formatExpression( context.inc, expr.member )
		+ context.sep
		+ context.tab
		+ ']'
	);
};


/*
| Formats a Multiply
*/
formatMultiply =
	function(
		context,
		expr
	)
{
	var
		text;

/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_multiply' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	text =
		formatExpression( context, expr.left, 'ast_multiply' )
		+ context.sep
		+ context.tab
		+ '*'
		+ context.sep
		+ formatExpression( context, expr.right, 'ast_multiply' );

	return text;
};


/*
| Formats a plus-assignment.
*/
formatMultiplyAssign =
	function(
		context,
		assign
	)
{
	var
		text;

	context = context.incSame;

	try
	{
		// first tries to inline the
		// return expression.
		text =
			formatExpression( context.setInline, assign.left, 'ast_assign' )
			+ ' *= '
			+ formatExpression(
				context.setInline,
				assign.right,
				'ast_assign'
			);
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

	throw 'FUTURE: implement noinline *=';
};



/*
| Formats a new expression.
*/
formatNew =
	function(
		context,
		expr
	)
{

/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_new' )
/**/	{
/**/		throw new Error( );
/**/	}
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
| Formats a not expression.
*/
formatNot =
	function(
		context,
		expr
	)
{

/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_not' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	return(
		context.tab
		+ '!'
		+ formatExpression( context, expr.expr, 'ast_not' )
	);
};


/*
| Formats a null.
*/
formatNull =
	function(
		context,
		expr
	)
{
/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_null' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	return context.tab + 'null';
};


/*
| Formats a string literal use.
*/
formatNumber =
	function(
		context,
		expr
	)
{

/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_number' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	return context.tab + '' + expr.number;
};


/*
| Formats a logical or.
*/
formatOr =
	function(
		context,
		expr
	)
{
	var
		text;

/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_or' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	text =
		formatExpression( context, expr.left, 'ast_or' )
		+ context.sep
		+ context.tab
		+ '||'
		+ context.sep
		+ formatExpression( context, expr.right, 'ast_or' );

	return text;
};


/*
| Formats a Plus.
*/
formatPlus =
	function(
		context,
		expr
	)
{
	var
		text;

/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_plus' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	text =
		formatExpression( context, expr.left, 'ast_plus' )
		+ context.sep
		+ context.tab
		+ '+'
		+ context.sep
		+ formatExpression( context, expr.right, 'ast_plus' );

	return text;
};


/*
| Formats a plus-assignment.
*/
formatPlusAssign =
	function(
		context,
		assign
	)
{
	var
		text;

	context = context.incSame;

	try
	{
		// first tries to inline the
		// return expression.
		text =
			formatExpression( context.setInline, assign.left, 'ast_assign' )
			+ ' += '
			+ formatExpression(
				context.setInline,
				assign.right,
				'ast_assign'
			);
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

	throw 'FUTURE: implement noinline +=';
};


/*
| Formats a pre-increment.
*/
formatPreIncrement =
	function(
		context,
		expr
	)
{

/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_preIncrement' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	return(
		context.tab
		+ '++'
		+ formatExpression( context, expr.expr, 'ast_preIncrement' )
	);
};




/*
| Formats a return statement.
*/
formatReturn =
	function(
		context,
		statement
	)
{
	var
		text;

/**/if( CHECK )
/**/{
/**/	if( statement.reflect !== 'ast_return' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

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
formatStatement =
	function(
		context,    // context to be formated in
		statement,  // the statement to be formated
		lookBehind, // the previous statement (or undefined)
		lookAhead   // the next statement (or undefined)
	)
{
	var
		text,
		subtext;

	text = '';

	if(
		lookBehind
		&& lookBehind.reflect !== 'ast_comment'
		&& !(
			lookBehind.reflect === 'ast_varDec'
			&& statement.reflect === 'ast_varDec'
		)
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

	if( statement.reflect === 'ast_comment' )
	{
		if(
			lookBehind
			&& lookBehind.reflect === 'ast_comment'
		)
		{
			text += '\n\n';
		}

		text += formatComment( context, statement );

		return text;
	}

	switch( statement.reflect )
	{
		case 'ast_check' :

			text += formatCheck( context, statement );

			break;

		case 'ast_continue' :

			text += formatContinue( context, statement );

			break;

		case 'ast_if' :

			text += formatIf( context, statement );

			break;

		case 'ast_fail' :

			try
			{
				subtext =
					context.tab
					+ formatFail( context.setInline, statement );
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
				text += formatFail( context, statement );
			}

			break;

		case 'ast_for' :

			text += formatFor( context, statement );

			break;

		case 'ast_forIn' :

			text += formatForIn( context, statement );

			break;

		case 'ast_return' :

			text += formatReturn( context, statement );

			break;

		case 'ast_switch' :

			text += formatSwitch( context, statement );

			break;

		case 'ast_varDec' :

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

	switch( statement.reflect )
	{
		case 'ast_varDec' :

			if(
				lookAhead
				&&
				lookAhead.reflect === 'ast_varDec'
			)
			{
				return text += ',\n';
			}
			else
			{
				return text += ';\n';
			}

			break;

		case 'ast_assign' :
		case 'ast_boolean' :
		case 'ast_call' :
		case 'ast_continue' :
		case 'ast_delete' :
		case 'ast_dot' :
		case 'ast_fail' :
		case 'ast_member' :
		case 'ast_multiply' :
		case 'ast_new' :
		case 'ast_number' :
		case 'ast_plus' :
		case 'ast_plusAssign' :
		case 'ast_return' :
		case 'ast_string' :
		case 'ast_var' :

			return text + ';' + context.sep;

		case 'ast_check' :
		case 'ast_for' :
		case 'ast_forIn' :
		case 'ast_if' :
		case 'ast_switch' :

			return text + context.sep;

		default :

			throw new Error( statement.reflect );
	}
};


/*
| Formats a string literal.
*/
formatString =
	function(
		context,
		expr
	)
{

/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_string' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	return context.tab + '\'' + expr.string + '\'';
};


/*
| Formats a switch statement
*/
formatSwitch =
	function(
		context,
		switchExpr
	)
{
	var
		a,
		aZ,
		b,
		bZ,
		caseContext,
		caseExpr,
		text;

	caseContext = context.inc;

	text =
		context.tab
		+ 'switch( '
		+ formatExpression( context.setInline, switchExpr.statement )
		+ ' )\n'
		+ context.tab
		+ '{\n';

	for(
		a = 0, aZ = switchExpr.length;
		a < aZ;
		a++
	)
	{
		caseExpr = switchExpr.get( a );

		if( a > 0 )
		{
			text += '\n';
		}

		// FUTURE this is broken for
		// caseExpr.length > 1
		for( b = 0, bZ = caseExpr.length; b < bZ; b++ )
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
formatTypeof =
	function(
		context,
		expr
	)
{

/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_typeof' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	return(
		context.tab
		+ 'typeof('
		+ context.sep
		+ formatExpression(
			context.inc,
			expr.expr,
			precTable.ast_typeof
		)
		+
		context.sep
		+
		')'
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
		a,
		aZ,
		key,
		text;

	text = '';

/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_objLiteral' )
/**/	{
/**/		throw new Error( );
/**/	}
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

	for(
		a = 0, aZ = expr.length;
		a < aZ;
		a++
	)
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
			+ ( a + 1 < aZ ? ',\n' : '\n' );
	}

	text += context.tab + '}';

	return text;
};


/*
| Formats a variable use.
*/
formatVar =
	function(
		context,
		expr
	)
{

/**/if( CHECK )
/**/{
/**/	if( expr.reflect !== 'ast_var' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	return context.tab + expr.name;
};


/*
| Formats a variable declaration.
*/
formatVarDec =
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
		if( varDec.assign.reflect === 'ast_func' )
		{
			isRootFunc = true;
		}
		else if(
			varDec.assign.reflect === 'ast_assign'
			&& varDec.assign.right.reflect === 'ast_func'
		)
		{
			// FUTURUE allow abitrary amount of assignments
			isRootFunc = true;
		}
	}

	if( !isRootFunc )
	{
		if(
			!lookBehind
			|| lookBehind.reflect !== 'ast_varDec'
		)
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

		if( varDec.assign.reflect !== 'ast_assign' )
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
	var
		context;

	context = format_context.create( 'root', true );

	if( context.reflect === 'ast_block' )
		return formatBlock( context, block, true );
	else
		return formatStatement( context, block );
};


/*
| Table of all expression formatters.
*/
exprFormatter =
{
	'ast_and' : formatAnd,
	'ast_arrayLiteral' : formatArrayLiteral,
	'ast_assign' : formatAssign,
	'ast_boolean' : formatBoolean,
	'ast_call' : formatCall,
	'ast_comma' : formatComma,
	'ast_condition' : formatCondition,
	'ast_delete' : formatDelete,
	'ast_differs' : formatDiffers,
	'ast_dot' : formatDot,
	'ast_equals' : formatEquals,
	'ast_func' : formatFunc,
	'ast_greaterThan' : formatGreaterThan,
	'ast_instanceof' : formatInstanceof,
	'ast_lessThan' : formatLessThan,
	'ast_member' : formatMember,
	'ast_multiply' : formatMultiply,
	'ast_multiplyAssign' : formatMultiplyAssign,
	'ast_new' : formatNew,
	'ast_not' : formatNot,
	'ast_null' : formatNull,
	'ast_number' : formatNumber,
	'ast_objLiteral' : formatObjLiteral,
	'ast_or' : formatOr,
	'ast_plus' : formatPlus,
	'ast_plusAssign' : formatPlusAssign,
	'ast_preIncrement' : formatPreIncrement,
	'ast_string' : formatString,
	'ast_typeof' : formatTypeof,
	'ast_var' : formatVar
};




} )( );
