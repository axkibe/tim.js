/*
| A partial parser for javascript.
|
| This parser must not use ast-shorthands,
| because these are using the parser.
*/
'use strict';


tim.define( module, ( def, parser ) => {


def.abstract = true;


const ast_and = tim.require( '../ast/and' );

const ast_arrayLiteral = tim.require( '../ast/arrayLiteral' );

const ast_assign = tim.require( '../ast/assign' );

const ast_block = tim.require( '../ast/block' );

const ast_boolean = tim.require( '../ast/boolean' );

const ast_call = tim.require( '../ast/call' );

const ast_comma = tim.require( '../ast/comma' );

const ast_condition = tim.require( '../ast/condition' );

const ast_delete = tim.require( '../ast/delete' );

const ast_differs = tim.require( '../ast/differs' );

const ast_divide = tim.require( '../ast/divide' );

const ast_divideAssign = tim.require( '../ast/divideAssign' );

const ast_dot = tim.require( '../ast/dot' );

const ast_equals = tim.require( '../ast/equals' );

const ast_for = tim.require( '../ast/for' );

const ast_forIn = tim.require( '../ast/forIn' );

const ast_forOf = tim.require( '../ast/forOf' );

const ast_greaterOrEqual = tim.require( '../ast/greaterOrEqual' );

const ast_greaterThan = tim.require( '../ast/greaterThan' );

const ast_if = tim.require( '../ast/if' );

const ast_instanceof = tim.require( '../ast/instanceof' );

const ast_lessOrEqual = tim.require( '../ast/lessOrEqual' );

const ast_lessThan = tim.require( '../ast/lessThan' );

const ast_let = tim.require( '../ast/let' );

const ast_letEntry = tim.require( '../ast/letEntry' );

const ast_member = tim.require( '../ast/member' );

const ast_minus = tim.require( '../ast/minus' );

const ast_minusAssign = tim.require( '../ast/minusAssign' );

const ast_multiply = tim.require( '../ast/multiply' );

const ast_multiplyAssign = tim.require( '../ast/multiplyAssign' );

const ast_negate = tim.require( '../ast/negate' );

const ast_new = tim.require( '../ast/new' );

const ast_not = tim.require( '../ast/not' );

const ast_null = tim.require( '../ast/null' );

const ast_number = tim.require( '../ast/number' );

const ast_objLiteral = tim.require( '../ast/objLiteral' );

const ast_or = tim.require( '../ast/or' );

const ast_plus = tim.require( '../ast/plus' );

const ast_plusAssign = tim.require( '../ast/plusAssign' );

const ast_postDecrement = tim.require( '../ast/postDecrement' );

const ast_postIncrement = tim.require( '../ast/postIncrement' );

const ast_preDecrement = tim.require( '../ast/preDecrement' );

const ast_preIncrement = tim.require( '../ast/preIncrement' );

const ast_return = tim.require( '../ast/return' );

const ast_string = tim.require( '../ast/string' );

const ast_throw = tim.require( '../ast/throw' );

const ast_typeof = tim.require( '../ast/typeof' );

const ast_var = tim.require( '../ast/var' );

const ast_yield = tim.require( '../ast/yield' );

const lexer_lexer = tim.require( '../lexer/lexer' );

const lexer_token = tim.require( '../lexer/token' );

const parser_state = tim.require( './state' );

const parser_tokenList = tim.require( './tokenList' );

const parser_spec = tim.require( './spec' );


/*
| Forces expr into a block.
*/
const forceBlock =
	( expr ) =>
{
	if( expr.timtype === ast_block ) return expr;

	return ast_block.create( ).append( expr );
};

/*
| Ast nodes which ate their semicolon.
*/
def.staticLazy.noSemicolon = ( ) =>
{
	const set = new Set( );

	set.add( ast_block );
	set.add( ast_if );

	return set;
};


/*
| Handler for array literals.
*/
def.static.handleArrayLiteral =
	function(
		state, // current parser state
		spec   // operator spec
	)
{
/**/if( CHECK )
/**/{
/**/	if( state.ast ) throw new Error( );
/**/}

	// this is an array literal
	let alit = ast_arrayLiteral.create( );

	state = state.advance( undefined );

	if( state.reachedEnd ) throw new Error( 'missing "]"' );

	if( state.current.type !== ']' )
	{
		// there are elements

		for( ;; )
		{
			do
			{
				state = parseToken( state, spec );
			}
			while(
				!state.reachedEnd
				&& state.current.type !== ']'
				&& state.current.type !== ','
			);

			if( state.reachedEnd ) throw new Error( 'missing "]"' );

			if( state.ast ) alit = alit.append( state.ast );

			// fiinished array literal?
			if( state.current.type === ']' ) break;

			if( state.current.type === ',' )
			{
				state = state.advance( undefined );

				if( state.current.type === ']' ) throw new Error( 'parse error' );

				continue;
			}

			throw new Error( 'parse error' );
		}
	}

	// advances over closing square bracket
	return state.advance( alit );
};


/*
| Handler for boolean
*/
def.static.handleBlock =
	function(
		state // current parser state
	)
{
/**/if( CHECK )
/**/{
/**/	if( state.ast ) throw new Error( );
/**/
/**/	if( state.current.type !== '{' ) throw new Error( );
/**/}

	state = state.advance( ); // skip the '{';

	let block = ast_block.create( );

	while( state.current.type !== '}' )
	{
		state = parseToken( state, parser.parseStatementStart );

		block = block.append( state.ast );

		if( state.current.type === ';' ) state = state.advance( );

		state = state.stay( undefined );

		if( state.reachedEnd ) throw new Error( 'missing "}"' );
	}

	return state.advance( block );
};


/*
| Handler for boolean literals.
*/
def.static.handleBooleanLiteral =
	function(
		state // current parser state
		// spec   // operator spec
	)
{
	let bool;

	switch( state.current.type )
	{
		case 'true' : bool = true; break;
		case 'false' : bool = false; break;
		default : throw new Error( );
	}

	return state.advance( ast_boolean.create( 'boolean', bool ) );
};


/*
| Handler for ( ) in case of calls.
*/
def.static.handleCall =
	function(
		state, // current parser state
		spec   // operator spec
	)
{
	const ast = state.ast;

/**/if( CHECK )
/**/{
/**/	if( !ast ) throw new Error( );
/**/}

	let call = ast_call.create( 'func', ast );

	state = state.advance( undefined );

	if( state.reachedEnd ) throw new Error( 'missing ")"' );

	if( state.current.type !== ')' )
	{
		// there are arguments

		for( ;; )
		{
			do
			{
				state = parseToken( state, spec );

				if( state.current.type === ';' ) throw new Error( 'parse error' );
			}
			while(
				!state.reachedEnd
				&& state.current.type !== ')'
				&& state.current.type !== ','
			);

			if( state.reachedEnd ) throw new Error( 'missing ")"' );

			if( state.ast ) call = call.append( state.ast );

			// finished call?
			if( state.current.type === ')' ) break;

			if( state.current.type === ',' )
			{
				state = state.advance( undefined );

				if( state.current.type === ')' ) throw new Error( 'parse error' );

				continue;
			}

			throw new Error( 'parse error' );
		}
	}

	// advances over closing bracket
	return state.advance( call );
};


/*
| Handler for ? : conditionals
*/
def.static.handleCondition =
	function(
		state, // current parser state
		spec   // operator spec
	)
{
	const condition = state.ast;

/**/if( CHECK )
/**/{
/**/	if( !condition ) throw new Error( );
/**/
/**/	if( state.current.type !== '?' ) throw new Error( );
/**/}

	state = state.advance( undefined );

	if( state.reachedEnd ) throw new Error( 'parse error' );

	state = parseToken( state, spec );

	const then = state.ast;

	if( state.current.type !== ':' ) throw new Error( 'missing ":"' );

	state = parseToken( state.advance( undefined ), spec );

	return(
		state.stay(
			ast_condition.create(
				'condition', condition,
				'then', then,
				'elsewise', state.ast
			)
		)
	);
};


/*
| Handler for dots.
*/
def.static.handleDot =
	function(
		state // current parser state
		// spec   // operator spec
	)
{
	const ast = state.ast;

	if( !ast ) throw new Error( );

	let name = state.preview;

	if( name.type === 'delete' )
	{
		// "delete" may be used as identifier here
		name = lexer_token.createTv( 'identifier', 'delete' );
	}
	else if( name.type !== 'identifier' ) throw new Error( );

	state =
		state.create(
			'ast', ast_dot.create( 'expr', state.ast, 'member', name.value ),
			'pos', state.pos + 2
		);

	return state;
};


/*
| Generic handler for dualistic operations.
*/
def.static.handleDualisticOps =
	function(
		state, // current parser state
		spec   // operator spec
	)
{
	const ast = state.ast;

	if( !ast ) throw new Error( 'parse error' );

	state = parseToken( state.advance( undefined ), spec );

	return state.stay( spec.astCreator.create( 'left', ast, 'right', state.ast ) );
};


/*
| Handler for ( ) in case of groupings.
*/
def.static.handleGrouping =
	function(
		state, // current parser state
		spec   // operator spec
	)
{

/**/if( CHECK )
/**/{
/**/	if( state.ast ) throw new Error( );
/**/}

	state = parseToken( state.advance( undefined ), spec );

	while( state.current.type !== ')' )
	{
		state = parseToken( state, spec );

		if( state.reachedEnd ) throw new Error( 'missing ")"' );
	}

	return state.advance( );
};


/*
| Handler for identifiers.
*/
def.static.handleIdentifier =
	function(
		state // current parser state
		// spec   // operator spec
	)
{
	return state.advance( ast_var.create( 'name', state.current.value ) );
};


/*
| Handler for member operations.
*/
def.static.handleMember =
	function(
		state, // current parser state
		spec   // operator spec
	)
{
	const ast = state.ast;

/**/if( CHECK )
/**/{
/**/	if( !ast ) throw new Error( );
/**/}

	state = parseToken( state.advance( undefined ), spec );

	while( state.current.type !== ']' )
	{
		state = parseToken( state, spec );

		if( state.reachedEnd ) throw new Error( );
	}

	return state.advance( ast_member.create( 'expr', ast, 'member', state.ast ) );
};


/*
| Generic handler for left side mono operations.
*/
def.static.handleMonoOps =
	function(
		state, // current parser state
		spec   // operator spec
	)
{
	const ast = state.ast;

	if( ast )
	{
		// postfix (increment or decrement)
		return state.advance( spec.astCreator.create( 'expr', state.ast ) );
	}

	state = parseToken( state.advance( undefined ), spec );

	return state.stay( spec.astCreator.create( 'expr', state.ast ) );
};


/*
| Handler for for.
*/
def.static.handleFor =
	function(
		state // current parser state
	)
{
/**/if( CHECK )
/**/{
/**/	if( state.ast ) throw new Error( );
/**/
/**/	if( state.current.type !== 'for' ) throw new Error( );
/**/}

	state = state.advance( );

	if( state.current.type !== '(' ) throw new Error( '"(" expected' );

	state = state.advance( undefined );

	if( state.reachedEnd ) throw new Error( 'unexpected end of file' );

	if( state.current.type === 'let' )
	{
		state = parser.handleLet( state );
	}
	else
	{
		state = parseToken( state, parser.parseExprStart );
	}

	if( state.current.type === 'in' || state.current.type === 'of' )
	{
		let loopVar = state.ast;

		let letVar = false;

		const forType = state.current.type;

		if( loopVar.timtype === ast_let )
		{
			if( loopVar.length !== 1 ) throw new Error( 'invalid let in for of/in loop' );

			const letEntry = loopVar.get( 0 );

			if( letEntry.assign ) throw new Error( 'invalid assignment in for of/in loop' );

			loopVar = ast_var.create( 'name', letEntry.name );

			letVar = true;
		}
		else if( loopVar.timtype !== ast_var )
		{
			throw new Error( 'invalid loop variable' );
		}

		state = parseToken( state.advance( undefined ), parser.parseExprStart );

		const obj = state.ast;

		if( state.current.type !== ')' ) throw new Error( '")" expected' );

		state = parseToken( state.advance( undefined ), parser.parseStatementStart );

		const block = state.ast;

		if( !parser.noSemicolon.has( block.timtype ) )
		{
			if( !state.current || state.current.type !== ';' ) throw new Error( 'missing ";"' );

			state = state.advance( );
		}

		switch( forType )
		{
			case 'in' :

				return(
					state.stay(
						ast_forIn.create(
							'variable', loopVar,
							'letVar', letVar,
							'object', obj,
							'block', forceBlock( block )
						)
					)
				);

			case 'of' :

				return(
					state.stay(
						ast_forOf.create(
							'variable', loopVar,
							'letVar', letVar,
							'object', obj,
							'block', forceBlock( block )
						)
					)
				);

			default : throw new Error( );
		}
	}

	if( state.current.type !== ';' ) throw new Error( '";" or "in" or "of" expected' );

	state = state.advance( );

	const init = state.ast;

	state = parseToken( state.stay( undefined ), parser.parseExprStart );

	const condition = state.ast;

	if( state.current.type !== ';' ) throw new Error( '";" expected' );

	state = parseToken( state.advance( undefined ), parser.parseExprStart );

	const iterate = state.ast;

	if( state.current.type !== ')' ) throw new Error( '")" expected' );

	state = parseToken( state.advance( undefined ), parser.parseStatementStart );

	const block = state.ast;

	if( !parser.noSemicolon.has( block.timtype ) )
	{
		if( !state.current || state.current.type !== ';' ) throw new Error( 'missing ";"' );

		state = state.advance( );
	}

	return(
		state.stay(
			ast_for.create(
				'init', init,
				'condition', condition,
				'iterate', iterate,
				'block', forceBlock( block )
			)
		)
	);
};


/*
| Handler for if.
*/
def.static.handleIf =
	function(
		state // current parser state
	)
{
/**/if( CHECK )
/**/{
/**/	if( state.ast ) throw new Error( );
/**/
/**/	if( state.current.type !== 'if' ) throw new Error( );
/**/}

	state = state.advance( );

	if( state.current.type !== '(' ) throw new Error( '"(" expected' );

	state = state.advance( undefined );

	if( state.reachedEnd ) throw new Error( 'parse error' );

	state = parseToken( state, parser.parseExprStart );

	const condition = state.ast;

	if( state.current.type !== ')' ) throw new Error( 'missing ")"' );

	state = parseToken( state.advance( undefined ), parser.parseStatementStart );

	const then = state.ast;

	if( !parser.noSemicolon.has( then.timtype ) )
	{
		if( !state.current || state.current.type !== ';' ) throw new Error( 'missing ";"' );

		state = state.advance( );
	}

	let elsewise;

	if( state.current && state.current.type === 'else' )
	{
		state = parseToken( state.advance( undefined ), parser.parseStatementStart );

		elsewise = state.ast;

		if( !parser.noSemicolon.has( elsewise.timtype ) )
		{
			if( !state.current || state.current.type !== ';' ) throw new Error( 'missing ";"' );

			state = state.advance( );
		}
	}

	return(
		state.stay(
			ast_if.create(
				'condition', condition,
				'then', forceBlock( then ),
				'elsewise', elsewise && forceBlock( elsewise )
			)
		)
	);
};


/*
| Handler for let.
*/
def.static.handleLet =
	function(
		state // current parser state
	)
{
	const type = state.current.type;

/**/if( CHECK )
/**/{
/**/	if( state.ast ) throw new Error( );
/**/
/**/	if( type !== 'const' && type !== 'let' ) throw new Error( );
/**/}

	let _let = ast_let.create( 'isConst', type === 'const' );

	state = state.advance( );

	for( ;; )
	{
		if( state.reachedEnd ) return state.stay( _let );

		if( state.current.type === ';' ) return state.stay( _let );

		if( state.current.type !== 'identifier' ) throw new Error( 'identifier expected' );

		let name = state.current.value;

		state = state.advance( );

		if( state.reachedEnd )
		{
			let entry = ast_letEntry.create( 'name', name );

			_let = _let.append( entry );

			return state.stay( _let );
		}

		switch( state.current.type )
		{
			case '=' :
			{
				state = parseToken( state.advance( undefined ), parser.statementSpecs[ 'let' ] );

				let entry = ast_letEntry.create( 'name', name, 'assign', state.ast );

				_let = _let.append( entry );

				if( !state.reachedEnd && state.current.type === ',' ) state = state.advance( );

				break;
			}

			case ',' :
			{
				state = state.advance( undefined );

				_let = _let.append( ast_letEntry.create( 'name', name ) );

				break;
			}

			case ';' :
			case 'of' :
			case 'in' :
			{
				_let = _let.append( ast_letEntry.create( 'name', name ) );

				return state.stay( _let );
			}

			default : throw new Error( 'unexpected token', state.current.type );
		}
	}
};

/*
| Handler for new operations.
*/
def.static.handleNew =
	function(
		state, // current parser state
		spec   // operator spec
	)
{
	const ast = state.ast;

	if( ast ) throw new Error( 'parse error' );

	state = parseToken( state.advance( undefined ), spec );

	return state.stay( ast_new.create( 'call', state.ast ) );
};


/*
| Handler for null.
*/
def.static.handleNull =
	function(
		state // current parser state
		// spec   // operator spec
	)
{
	return state.advance( ast_null.create( ) );
};



/*
| Handler for numeric literals.
*/
def.static.handleNumber =
	function(
		state // current parser state
		// spec   // operator spec
	)
{
	return state.advance( ast_number.create( 'number', state.current.value ) );
};


/*
| Handler for { } Object literals
*/
def.static.handleObjectLiteral =
	function(
		state // current parser state
		// spec   // operator spec
	)
{
	const ast = state.ast;

	if( ast ) throw new Error( 'parse error' );

	// this is an array literal
	const olit = ast_objLiteral.create( );

	state = state.advance( undefined );

	if( state.reachedEnd ) throw new Error( 'missing "}"' );

	// FUTURE cannot handle elements currently
	if( state.current.type !== '}' ) throw new Error( );

	// advances over closing square bracket
	return state.advance( olit );
};


/*
| Generic parser error.
*/
def.static.handleParserError =
	function(
		// state // current parser state
		// spec   // operator spec
	)
{
	throw new Error( 'parse error' );
};



/*
| Generic pass handler.
| It just passes back up
*/
def.static.handlePass =
	function(
		state // current parser state
		// spec   // operator spec
	)
{
	return state;
};


/*
| Handler for return.
*/
def.static.handleReturn =
	function(
		state // current parser state
	)
{
/**/if( CHECK )
/**/{
/**/	if( state.ast ) throw new Error( );
/**/
/**/	if( state.current.type !== 'return' ) throw new Error( );
/**/}

	state = parseToken( state.advance( ), parser.parseExprStart );

	return state.stay( ast_return.create( 'expr', state.ast ) );
};


/*
| Handler for string literals.
*/
def.static.handleString =
	function(
		state // current parser state
		// spec   // operator spec
	)
{
	return state.advance( ast_string.create( 'string', state.current.value ) );
};


/*
| Handler for throw.
*/
def.static.handleThrow =
	function(
		state // current parser state
	)
{
/**/if( CHECK )
/**/{
/**/	if( state.ast ) throw new Error( );
/**/
/**/	if( state.current.type !== 'throw' ) throw new Error( );
/**/}

	state = parseToken( state.advance( ), parser.parseExprStart );

	return state.stay( ast_throw.create( 'expr', state.ast ) );
};


/*
| Left token specifications for unary operants.
| They are consulted when the current parse buffer is *not* empty.
*/
def.staticLazy.leftSpecs = ( ) =>
{
	const c = parser_spec.createHandler;

	const s = { };

	s.identifier = c( 'handleIdentifier', -1 );

	s.null = c( 'handleNull', -1 );

	s.number = c( 'handleNumber', -1 );

	s.string = c( 'handleString', -1 );

	s[ 'true' ] = c( 'handleBooleanLiteral', -1 );

	s[ 'false' ] = c( 'handleBooleanLiteral', -1 );

	s[ '[' ] = c( 'handleArrayLiteral', 1, 'l2r' );

	s[ '{' ] = c( 'handleObjectLiteral', -1 );

	s[ '(' ] = c( 'handleGrouping', 0, 'l2r' );

	s[ 'new' ] = c( 'handleNew', 2, 'r2l' );

	s[ '++' ] = c( 'handleMonoOps', 4, 'n/a', ast_preIncrement );

	s[ '--' ] = c( 'handleMonoOps', 4, 'n/a', ast_preDecrement );

	s[ '-' ] = c( 'handleMonoOps', 4, 'r2l', ast_negate );

	s[ '!' ] = c( 'handleMonoOps', 4, 'r2l', ast_not );

	s[ 'delete' ] = c( 'handleMonoOps', 4, 'r2l', ast_delete );

	s[ 'typeof' ] = c( 'handleMonoOps', 4, 'r2l', ast_typeof );

	s[ 'yield' ] = c( 'handleMonoOps', 18, 'r2l', ast_yield );

	s[ ',' ] = c( 'handleDualisticOps', 19, 'l2r', ast_comma );

	return s;
};


/*
| Right token specifications for unary operants.
| They are consulted when the current parse buffer is empty.
*/
def.staticLazy.rightSpecs = ( ) =>
{
	const c = parser_spec.createHandler;

	const s = { };

	s[ '(' ] = c( 'handleCall', 1, 'l2r' );

	s[ '[' ] = c( 'handleMember', 1, 'l2r' );

	s[ ']' ] = c( 'handlePass', 1 ); // 98?

	s[ '.' ] = c( 'handleDot', 1, 'l2r' );

	s[ '++' ] = c( 'handleMonoOps', 3, 'n/a', ast_postIncrement );

	s[ '--' ] = c( 'handleMonoOps', 3, 'n/a', ast_postDecrement );

	s[ '*' ] = c( 'handleDualisticOps', 5, 'l2r', ast_multiply );

	s[ '/' ] = c( 'handleDualisticOps', 5, 'l2r', ast_divide );

	s[ '+' ] = c( 'handleDualisticOps', 6, 'l2r', ast_plus );

	s[ '-' ] = c( 'handleDualisticOps', 6, 'l2r', ast_minus );

	s[ '<=' ] = c( 'handleDualisticOps', 8, 'l2r', ast_lessOrEqual );

	s[ '<' ] = c( 'handleDualisticOps', 8, 'l2r', ast_lessThan );

	s[ '>=' ] = c( 'handleDualisticOps', 8, 'l2r', ast_greaterOrEqual );

	s[ '>' ] = c( 'handleDualisticOps', 8, 'l2r', ast_greaterThan );

	s[ '===' ] = c( 'handleDualisticOps', 9, 'l2r', ast_equals );

	s[ '!==' ] = c( 'handleDualisticOps', 9, 'l2r', ast_differs );

	s[ 'instanceof' ] = c( 'handleDualisticOps', 11, 'l2r', ast_instanceof );

	s[ '&&' ] = c( 'handleDualisticOps', 13, 'l2r', ast_and );

	s[ '||' ] = c( 'handleDualisticOps', 14, 'l2r', ast_or );

	s[ '?' ] = c( 'handleCondition', 15, 'l2r' );

	s[ '=' ] = c( 'handleDualisticOps', 16, 'r2l', ast_assign );

	s[ '+=' ] = c( 'handleDualisticOps', 16, 'r2l', ast_plusAssign );

	s[ '-=' ] = c( 'handleDualisticOps', 16, 'r2l', ast_minusAssign );

	s[ '*=' ] = c( 'handleDualisticOps', 16, 'r2l', ast_multiplyAssign );

	s[ '/=' ] = c( 'handleDualisticOps', 16, 'r2l', ast_divideAssign );

	s[ ',' ] = c( 'handeDualisticOps', 19, 'l2r', ast_comma );

	s[ ')' ] = c( 'handlePass', 98 );

	s[ ':' ] = c( 'handlePass', 98 );

	s[ ';' ] = c( 'handlePass', 101 );

	s[ 'of' ] = c( 'handlePass', 101 );

	s[ 'in' ] = c( 'handlePass', 101 );

	s[ '}' ] = c( 'handlePass', 101 );

	s[ 'else' ] = c( 'handlePass', 101 );

	return s;
};


/*
| Phony spec denoting start of parsing on expression possiblity.
*/
def.staticLazy.parseExprStart = ( ) =>
	parser_spec.createHandler( 'handleParserError', 99 );

/*
| Phony spec denoting start of parsing on statement/expression possiblity
*/
def.staticLazy.parseStatementStart = ( ) =>
	parser_spec.createHandler( 'handleParserError', 100 );


/*
| Statement token specifications.
*/
def.staticLazy.statementSpecs = ( ) =>
{
	const s = { };

	s[ 'if' ] = parser_spec.create( 'handler', 'handleIf' );

	s[ 'for' ] = parser_spec.create( 'handler', 'handleFor' );

	// 18... one stronger than comma, so multiple let definitions are
	//       not treated as comma operator
	s[ 'const' ] =
	s[ 'let' ] = parser_spec.create( 'handler', 'handleLet', 'prec', 18 );

	s[ 'return' ] = parser_spec.create( 'handler', 'handleReturn' );

	s[ 'throw' ] = parser_spec.create( 'handler', 'handleThrow' );

	s[ '{' ] = parser_spec.create( 'handler', 'handleBlock' );

	//s[ '}' ] = parser_spec.create( 'handler', 'handlePass', 'prec', 101 );

	return s;
};


/*
| Returns the spec for a state
*/
const getSpec =
	function(
		state,       // current state
		statement    // true if a statement is allowed here
	)
{
	let spec;

	if( !state.ast )
	{
		if( statement ) spec = parser.statementSpecs[ state.current.type ];

		if( !spec ) spec = parser.leftSpecs[ state.current.type ];
	}
	else
	{
		spec = parser.rightSpecs[ state.current.type ];
	}

	if( !spec )
	{
		switch( state.current.type )
		{
			case 'identifier' :

				throw new Error( 'unexpected identifier "' + state.current.value + '"' );

			default :

				throw new Error( 'unexpected ' + state.current.type );
		}
	}

	return spec;
};


/*
| Parses a token at current state (which has a pos from a tokenList).
*/
const parseToken =
	function(
		state, // current parser state
		spec   // current operator specification
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 2 ) throw new Error( );
/**/}

	if( !state.ast && state.current.timtype !== lexer_token )
	{
		// this is already a preparsed astTree.
		state = state.advance( state.current );
	}
	else
	{
		const tokenSpec = getSpec( state, spec.prec >= 100 );

		// FIXME needed?
		if( tokenSpec.handler === 'handlePass' ) return state;

		state = parser[ tokenSpec.handler ]( state, tokenSpec );
	}

	// FIXME make a set
	switch( state.ast.timtype )
	{
		case ast_block :
		case ast_if :
			return state;
	}

	while( !state.reachedEnd )
	{
		const nextSpec = getSpec( state, false );

		if(
			nextSpec.prec === undefined
			|| nextSpec.prec > spec.prec
			|| ( nextSpec.prec === spec.prec && spec.associativity === 'l2r' )
			|| nextSpec.handler === 'handlePass'
		)
		{
			break;
		}

		state = parseToken( state, nextSpec );
	}

	return state;
};


/*
| Tokenizes an array.
*/
const tokenizeArray =
	function(
		array
	)
{
	let tokens = parser_tokenList.create( );

	for( let a = 0, al = array.length; a < al; a++ )
	{
		const arg = array[ a ];

		if( arg === undefined ) continue;

		if( typeof( arg ) === 'string' )
		{
			tokens = tokens.appendList( lexer_lexer.tokenize( arg ) );
		}
		else if( Array.isArray( arg ) )
		{
			tokens = tokens.appendList( tokenizeArray( arg ) );
		}
		else
		{
			tokens = tokens.append( arg );
		}
	}

	return tokens;
};


/*
| Parses code to create an ast tree.
*/
def.static.parseArray =
	function(
		array,       // the array of elements to parse
		start        // start at "statement" or "expression" level
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 2 ) throw new Error( );
/**/
/**/	// okay are Arrays and "arguments" pseudo-arrays
/**/	if( typeof( array.length ) !== 'number' ) throw new Error( );
	}

	const tokens = tokenizeArray( array );

	if( tokens.length === 0 ) return undefined;

	let state = parser_state.create( 'tokens', tokens, 'pos', 0, 'ast', undefined );

	switch( start )
	{
		case 'expr' : state = parseToken( state, parser.parseExprStart ); break;

		case 'statement' : state = parseToken( state, parser.parseStatementStart ); break;

		default : throw new Error( );
	}

	// ignores one ending semicolon
	if( !state.reachedEnd && state.current.type === ';' ) state = state.advance( );

	if( !state.reachedEnd ) throw new Error( 'too many tokens' );

	return state.ast;
};


/*
| Parses code to create an ast tree.
*/
def.static.statement =
def.static.parse =  // FIXME remove
	function(
		// list of strings to parse
		// or ast subtrees.
	)
{
	return parser.parseArray( arguments, 'statement' );
};


/*
| Parses code as expression.
*/
def.static.expr =
	function(
		// list of strings to parse
		// or ast subtrees.
	)
{
	return parser.parseArray( arguments, 'expr' );
};


} );
