/*
| A partial parser for javascript.
|
| This parser must not use ast-shorthands,
| because these are using the parser.
*/
'use strict';


tim.define( module, ( def, parser_parser ) => {


def.abstract = true;


const ast_and = require( '../ast/and' );

const ast_arrayLiteral = require( '../ast/arrayLiteral' );

const ast_assign = require( '../ast/assign' );

const ast_block = require( '../ast/block' );

const ast_boolean = require( '../ast/boolean' );

const ast_call = require( '../ast/call' );

const ast_comma = require( '../ast/comma' );

const ast_condition = require( '../ast/condition' );

const ast_delete = require( '../ast/delete' );

const ast_differs = require( '../ast/differs' );

const ast_divide = require( '../ast/divide' );

const ast_divideAssign = require( '../ast/divideAssign' );

const ast_dot = require( '../ast/dot' );

const ast_equals = require( '../ast/equals' );

const ast_for = require( '../ast/for' );

const ast_greaterThan = require( '../ast/greaterThan' );

const ast_if = require( '../ast/if' );

const ast_instanceof = require( '../ast/instanceof' );

const ast_lessThan = require( '../ast/lessThan' );

const ast_let = require( '../ast/let' );

const ast_letEntry = require( '../ast/letEntry' );

const ast_member = require( '../ast/member' );

const ast_minus = require( '../ast/minus' );

const ast_minusAssign = require( '../ast/minusAssign' );

const ast_multiply = require( '../ast/multiply' );

const ast_multiplyAssign = require( '../ast/multiplyAssign' );

const ast_negate = require( '../ast/negate' );

const ast_new = require( '../ast/new' );

const ast_not = require( '../ast/not' );

const ast_null = require( '../ast/null' );

const ast_number = require( '../ast/number' );

const ast_objLiteral = require( '../ast/objLiteral' );

const ast_or = require( '../ast/or' );

const ast_plus = require( '../ast/plus' );

const ast_plusAssign = require( '../ast/plusAssign' );

const ast_postDecrement = require( '../ast/postDecrement' );

const ast_postIncrement = require( '../ast/postIncrement' );

const ast_preDecrement = require( '../ast/preDecrement' );

const ast_preIncrement = require( '../ast/preIncrement' );

const ast_return = require( '../ast/return' );

const ast_string = require( '../ast/string' );

const ast_typeof = require( '../ast/typeof' );

const ast_var = require( '../ast/var' );

const lexer_lexer = require( '../lexer/lexer' );

const lexer_token = require( '../lexer/token' );

const parser_state = require( './state' );

const parser_tokenList = require( './tokenList' );

const parser_spec = require( './spec' );

const $block = ast_block.create( );

/*
| Forces expr into a block.
*/
const forceBlock =
	function(
		expr
	)
{
	if( expr.timtype === ast_block ) return expr;

	return $block.append( expr );
};

/*
| Ast nodes which ate their semicolon.
*/
const noSemicolon =
	( function( )
{
	const set = new Set( );

	set.add( ast_block );
	set.add( ast_if );

	return set;
} )( );


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

	let block = $block;

	while( state.current.type !== '}' )
	{
		state = parseToken( state, parseStatementStart );

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
		name = lexer_token.tv( 'identifier', 'delete' );
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

	switch( state.current.type )
	{
		case 'let' :

			state = parser_parser.handleLet( state );

			if( state.current.type !== ';' ) throw new Error( 'missing ";"' );

			state = state.advance( );

			break;

		default :

			state = parseToken( state, parseExprStart );

			if( state.current.type !== ';' ) throw new Error( 'missing ";"' );

			state = state.advance( );

			break;
	}

	const init = state.ast;

	state = parseToken( state.stay( undefined ), parseExprStart );

	const condition = state.ast;

	if( state.current.type !== ';' ) throw new Error( '";" expected' );

	state = parseToken( state.advance( undefined ), parseExprStart );

	const iterate = state.ast;

	if( state.current.type !== ')' ) throw new Error( '")" expected' );

	state = parseToken( state.advance( undefined ), parseStatementStart );

	const block = state.ast;

	if( !noSemicolon.has( block.timtype ) )
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

	state = parseToken( state, parseExprStart );

	const condition = state.ast;

	if( state.current.type !== ')' ) throw new Error( 'missing ")"' );

	state = parseToken( state.advance( undefined ), parseStatementStart );

	const then = state.ast;

	if( !noSemicolon.has( then.timtype ) )
	{
		if( !state.current || state.current.type !== ';' ) throw new Error( 'missing ";"' );

		state = state.advance( );
	}

	let elsewise;

	if( state.current && state.current.type === 'else' )
	{
		state = parseToken( state.advance( undefined ), parseStatementStart );

		elsewise = state.ast;

		if( !noSemicolon.has( elsewise.timtype ) )
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
/**/if( CHECK )
/**/{
/**/	if( state.ast ) throw new Error( );
/**/
/**/	if( state.current.type !== 'let' ) throw new Error( );
/**/}

	let _let = ast_let.create( );

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
				state = parseToken( state.advance( undefined ), statementSpecs[ 'let' ] );

				let entry = ast_letEntry.create( 'name', name, 'assign', state.ast );

				_let = _let.append( entry );

				if( !state.reachedEnd && state.current.type === ',' ) state = state.advance( );

				break;
			}

			case ',' :
			{
				state = state.advance( undefined );

				let entry = ast_letEntry.create( 'name', name );

				_let = _let.append( entry );

				break;
			}

			case ';' :
			{
				let entry = ast_letEntry.create( 'name', name );

				_let = _let.append( entry );

				return state.stay( _let );
			}

			default :

				throw new Error( 'unexpected token', state.current.type );
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
| Handler for return
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

	state = parseToken( state.advance( ), parseExprStart );

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


const createHandler = parser_spec.createHandler;

/*
| Left token specifications for unary operants.
| They are consulted when the current parse buffer is *not* empty.
*/
const leftSpecs = { };

leftSpecs.identifier = createHandler( 'handleIdentifier', -1 );

leftSpecs.null = createHandler( 'handleNull', -1 );

leftSpecs.number = createHandler( 'handleNumber', -1 );

leftSpecs.string = createHandler( 'handleString', -1 );

leftSpecs[ 'true' ] = createHandler( 'handleBooleanLiteral', -1 );

leftSpecs[ 'false' ] = createHandler( 'handleBooleanLiteral', -1 );

leftSpecs[ '[' ] = createHandler( 'handleArrayLiteral', 1, 'l2r' );

leftSpecs[ '{' ] = createHandler( 'handleObjectLiteral', -1 );

leftSpecs[ '(' ] = createHandler( 'handleGrouping', 0, 'l2r' );

leftSpecs[ 'new' ] = createHandler( 'handleNew', 2, 'r2l' );

leftSpecs[ '++' ] = createHandler( 'handleMonoOps', 4, 'n/a', ast_preIncrement );

leftSpecs[ '--' ] = createHandler( 'handleMonoOps', 4, 'n/a', ast_preDecrement );

leftSpecs[ '-' ] = createHandler( 'handleMonoOps', 4, 'r2l', ast_negate );

leftSpecs[ '!' ] = createHandler( 'handleMonoOps', 4, 'r2l', ast_not );

leftSpecs[ 'delete' ] = createHandler( 'handleMonoOps', 4, 'r2l', ast_delete );

leftSpecs[ 'typeof' ] = createHandler( 'handleMonoOps', 4, 'r2l', ast_typeof );

leftSpecs[ ',' ] = createHandler( 'handleDualisticOps', 19, 'l2r', ast_comma );

/*
| Right token specifications for unary operants.
| They are consulted when the current parse buffer is empty.
*/
const rightSpecs = { };

rightSpecs[ '(' ] = createHandler( 'handleCall', 1, 'l2r' );

rightSpecs[ '[' ] = createHandler( 'handleMember', 1, 'l2r' );

rightSpecs[ ']' ] = createHandler( 'handlePass', 1 ); // 98?

rightSpecs[ '.' ] = createHandler( 'handleDot', 1, 'l2r' );

rightSpecs[ '++' ] = createHandler( 'handleMonoOps', 3, 'n/a', ast_postIncrement );

rightSpecs[ '--' ] = createHandler( 'handleMonoOps', 3, 'n/a', ast_postDecrement );

rightSpecs[ '*' ] = createHandler( 'handleDualisticOps', 5, 'l2r', ast_multiply );

rightSpecs[ '/' ] = createHandler( 'handleDualisticOps', 5, 'l2r', ast_divide );

rightSpecs[ '+' ] = createHandler( 'handleDualisticOps', 6, 'l2r', ast_plus );

rightSpecs[ '-' ] = createHandler( 'handleDualisticOps', 6, 'l2r', ast_minus );

rightSpecs[ '<' ] = createHandler( 'handleDualisticOps', 8, 'l2r', ast_lessThan );

rightSpecs[ '>' ] = createHandler( 'handleDualisticOps', 8, 'l2r', ast_greaterThan );

rightSpecs[ '===' ] = createHandler( 'handleDualisticOps', 9, 'l2r', ast_equals );

rightSpecs[ '!==' ] = createHandler( 'handleDualisticOps', 9, 'l2r', ast_differs );

rightSpecs[ 'instanceof' ] = createHandler( 'handleDualisticOps', 11, 'l2r', ast_instanceof );

rightSpecs[ '&&' ] = createHandler( 'handleDualisticOps', 13, 'l2r', ast_and );

rightSpecs[ '||' ] = createHandler( 'handleDualisticOps', 14, 'l2r', ast_or );

rightSpecs[ '?' ] = createHandler( 'handleCondition', 15, 'l2r' );

rightSpecs[ '=' ] = createHandler( 'handleDualisticOps', 16, 'r2l', ast_assign );

rightSpecs[ '+=' ] = createHandler( 'handleDualisticOps', 16, 'r2l', ast_plusAssign );

rightSpecs[ '-=' ] = createHandler( 'handleDualisticOps', 16, 'r2l', ast_minusAssign );

rightSpecs[ '*=' ] = createHandler( 'handleDualisticOps', 16, 'r2l', ast_multiplyAssign );

rightSpecs[ '/=' ] = createHandler( 'handleDualisticOps', 16, 'r2l', ast_divideAssign );

rightSpecs[ ',' ] = createHandler( 'handeDualisticOps', 19, 'l2r', ast_comma );

rightSpecs[ ')' ] = createHandler( 'handlePass', 98 );

rightSpecs[ ':' ] = createHandler( 'handlePass', 98 );

rightSpecs[ ';' ] = createHandler( 'handlePass', 101 );

rightSpecs[ '}' ] = createHandler( 'handlePass', 101 );

rightSpecs[ 'else' ] = createHandler( 'handlePass', 101 );


// phony spec denoting start of parsing on expression possiblity
const parseExprStart = createHandler( 'handleParserError', 99 );

// phony spec denoting start of parsing on statement/expression possiblity
const parseStatementStart = createHandler( 'handleParserError', 100 );

/*
| Statement token specifications.
*/
const statementSpecs = { };

statementSpecs[ 'if' ] = parser_spec.create( 'handler', 'handleIf' );

statementSpecs[ 'for' ] = parser_spec.create( 'handler', 'handleFor' );

// 18... one stronger than comma, so multiple let definitions are
//       not treated as comma operator
statementSpecs[ 'let' ] = parser_spec.create( 'handler', 'handleLet', 'prec', 18 );

statementSpecs[ 'return' ] = parser_spec.create( 'handler', 'handleReturn' );

statementSpecs[ '{' ] = parser_spec.create( 'handler', 'handleBlock' );

//statementSpecs[ '}' ] = parser_spec.create( 'handler', 'handlePass', 'prec', 101 );


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
		if( statement ) spec = statementSpecs[ state.current.type ];

		if( !spec ) spec = leftSpecs[ state.current.type ];
	}
	else
	{
		spec = rightSpecs[ state.current.type ];
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

		state = parser_parser[ tokenSpec.handler ]( state, tokenSpec );
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
		case 'expr' : state = parseToken( state, parseExprStart ); break;

		case 'statement' : state = parseToken( state, parseStatementStart ); break;

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
def.static.parse =
	function(
		// list of strings to parse
		// or ast subtrees.
	)
{
	return parser_parser.parseArray( arguments, 'statement' );
};


/*
| Parses code as expression.
*/
def.static.parseExpr =
	function(
		// list of strings to parse
		// or ast subtrees.
	)
{
	return parser_parser.parseArray( arguments, 'expr' );
};


} );
