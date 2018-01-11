/*
| A partial parser for javascript.
|
| This parser must not use ast-shorthands,
| because these are using the parser.
*/
'use strict';


let parser = module.exports = { };


const ast_and = require( '../ast/and' );

const ast_arrayLiteral = require( '../ast/arrayLiteral' );

const ast_assign = require( '../ast/assign' );

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

const ast_greaterThan = require( '../ast/greaterThan' );

const ast_instanceof = require( '../ast/instanceof' );

const ast_lessThan = require( '../ast/lessThan' );

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

const lexer = require( '../jsLexer/lexer' );

const jsLexer_token = require( '../jsLexer/token' );

const state = require( './state' );

const jsParser_tokenList = require( './tokenList' );

const jsParser_spec = require( './spec' );


/*
| Handler for array literals.
*/
parser.handleArrayLiteral =
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

	state =
		state.create(
			'ast', undefined,
			'pos', state.pos + 1
		);

	if( state.reachedEnd ) throw new Error( 'missing "]"' );

	if( state.current.type !== ']' )
	{
		// there are elements

		for( ;; )
		{
			do {
				state = parseToken( state, spec );
			}
			while(
				!state.reachedEnd
				&& state.current.type !== ']'
				&& state.current.type !== ','
			);

			if( state.reachedEnd )
			{
				throw new Error( 'missing "]"' );
			}

			if( state.ast )
			{
				alit = alit.append( state.ast );
			}

			if( state.current.type === ']' )
			{
				// fiinished array literal
				break;
			}

			if( state.current.type === ',' )
			{
				state =
					state.create(
						'ast', undefined,
						'pos', state.pos + 1
					);

				if( state.current.type === ']' )
				{
					throw new Error( 'parser error' );
				}

				continue;
			}

			throw new Error( 'parser error' );
		}
	}

	// advances over closing square bracket
	state =
		state.create(
			'ast', alit,
			'pos', state.pos + 1
		);

	return state;
};


/*
| Handler for boolean literals.
*/
parser.handleBooleanLiteral =
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

	state =
		state.create(
			'ast', ast_boolean.create( 'boolean', bool ),
			'pos', state.pos + 1
		);

	return state;
};


/*
| Handler for ( ) in case of calls.
*/
parser.handleCall =
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

	state =
		state.create(
			'ast', undefined,
			'pos', state.pos + 1
		);

	if( state.reachedEnd ) throw new Error( 'missing ")"' );

	if( state.current.type !== ')' )
	{
		// there are arguments

		for( ;; )
		{
			do
			{
				state = parseToken( state, spec );
			}
			while(
				!state.reachedEnd
				&& state.current.type !== ')'
				&& state.current.type !== ','
			);

			if( state.reachedEnd ) throw new Error( 'missing ")"' );

			if( state.ast )
			{
				call = call.append( state.ast );
			}

			if( state.current.type === ')' )
			{
				// finished call
				break;
			}

			if( state.current.type === ',' )
			{
				state =
					state.create(
						'ast', undefined,
						'pos', state.pos + 1
					);

				if( state.current.type === ')' ) throw new Error( 'parser error' );

				continue;
			}

			throw new Error( 'parser error' );
		}
	}

	// advances over closing bracket
	state =
		state.create(
			'ast', call,
			'pos', state.pos + 1
		);

	return state;
};


/*
| Handler for ? : conditionals
*/
parser.handleCondition =
	function(
		state, // current parser state
		spec   // operator spec
	)
{
	var
		condition,
		then;

	condition = state.ast;

/**/if( CHECK )
/**/{
/**/	if( !condition ) throw new Error( );
/**/
/**/	if( state.current.type !== '?' ) throw new Error( );
/**/}

	state =
		state.create(
			'ast', undefined,
			'pos', state.pos + 1
		);

	if( state.reachedEnd ) throw new Error( 'parser error' );

	state = parseToken( state, spec );

	then = state.ast;

	if( state.current.type !== ':' ) throw new Error( 'missing ":"' );

	state =
		state.create(
			'ast', undefined,
			'pos', state.pos + 1
		);

	state = parseToken( state, spec );

	// advances over closing bracket
	state =
		state.create(
			'ast',
				ast_condition.create(
					'condition', condition,
					'then', then,
					'elsewise', state.ast
				)
		);

	return state;
};


/*
| Handler for dots.
*/
parser.handleDot =
	function(
		state // current parser state
		// spec   // operator spec
	)
{
	const ast = state.ast;

	if( !ast ) throw new Error( );

	const name = state.preview;

	if( name.type !== 'identifier' ) throw new Error( );

	state =
		state.create(
			'ast',
				ast_dot.create(
					'expr', state.ast,
					'member', name.value
				),
			'pos', state.pos + 2
		);

	return state;
};


/*
| Generic handler for dualistic operations.
*/
parser.handleDualisticOps =
	function(
		state, // current parser state
		spec   // operator spec
	)
{
	const ast = state.ast;

	if( !ast ) throw new Error( 'parser error' );

	state =
		state.create(
			'ast', undefined,
			'pos', state.pos + 1
		);

	state = parseToken( state, spec );

	state =
		state.create(
			'ast',
				spec.astCreator.create(
					'left', ast,
					'right', state.ast
				)
		);

	return state;
};


/*
| Handler for ( ) in case of groupings.
*/
parser.handleGrouping =
	function(
		state, // current parser state
		spec   // operator spec
	)
{

/**/if( CHECK )
/**/{
/**/	if( state.ast ) throw new Error( );
/**/}

	state =
		state.create(
			'ast', undefined,
			'pos', state.pos + 1
		);

	state = parseToken( state, spec );

	while( state.current.type !== ')' )
	{
		state = parseToken( state, spec );

		if( state.reachedEnd )
		{
			throw new Error( 'missing ")"' );
		}
	}

	state = state.create( 'pos', state.pos + 1 );

	return state;
};


/*
| Handler for identifiers.
*/
parser.handleIdentifier =
	function(
		state // current parser state
		// spec   // operator spec
	)
{
	state =
		state.create(
			'ast', ast_var.create( 'name', state.current.value ),
			'pos', state.pos + 1
		);

	return state;
};


/*
| Handler for member operations.
*/
parser.handleMember =
	function(
		state, // current parser state
		spec   // operator spec
	)
{
	var
		ast;

	ast = state.ast;

/**/if( CHECK )
/**/{
/**/	if( !ast ) throw new Error( );
/**/}

	state =
		state.create(
			'ast', undefined,
			'pos', state.pos + 1
		);

	state = parseToken( state, spec );

	while( state.current.type !== ']' )
	{
		state = parseToken( state, spec );

		if( state.reachedEnd ) throw new Error( );
	}

	state =
		state.create(
			'ast',
				ast_member.create(
					'expr', ast,
					'member', state.ast
				),
			'pos', state.pos + 1
		);

	return state;
};


/*
| Generic handler for left side mono operations.
*/
parser.handleMonoOps =
	function(
		state, // current parser state
		spec   // operator spec
	)
{
	const ast = state.ast;

	if( ast )
	{
		// postfix (increment or decrement)
		state =
			state.create(
				'ast', spec.astCreator.create( 'expr', state.ast ),
				'pos', state.pos + 1
			);

		return state;
	}

	state =
		state.create(
			'ast', undefined,
			'pos', state.pos + 1
		);

	state = parseToken( state, spec );

	state =
		state.create(
			'ast', spec.astCreator.create( 'expr', state.ast )
		);

	return state;
};


/*
| Handler for new operations.
*/
parser.handleNew =
	function(
		state, // current parser state
		spec   // operator spec
	)
{
	var
		ast;

	ast = state.ast;

	if( ast )
	{
		throw new Error( 'parse error' );
	}

	state =
		state.create(
			'ast', undefined,
			'pos', state.pos + 1
		);

	state = parseToken( state, spec );

	state =
		state.create(
			'ast',
				ast_new.create(
					'call', state.ast
				)
		);

	return state;
};


/*
| Handler for null.
*/
parser.handleNull =
	function(
		state // current parser state
		// spec   // operator spec
	)
{
	state =
		state.create(
			'ast', ast_null.create( ),
			'pos', state.pos + 1
		);

	return state;
};



/*
| Handler for numeric literals.
*/
parser.handleNumber =
	function(
		state // current parser state
		// spec   // operator spec
	)
{
	state =
		state.create(
			'ast', ast_number.create( 'number', state.current.value ),
			'pos', state.pos + 1
		);

	return state;
};


/*
| Handler for { } Object literals
*/
parser.handleObjectLiteral =
	function(
		state // current parser state
		// spec   // operator spec
	)
{
	var
		olit,
		ast;

	ast = state.ast;

	if( ast )
	{
		throw new Error( 'parser error' );
	}

	// this is an array literal
	olit = ast_objLiteral.create( );

	state =
		state.create(
			'ast', undefined,
			'pos', state.pos + 1
		);

	if( state.reachedEnd )
	{
		throw new Error( 'missing "}"' );
	}

	if( state.current.type !== '}' )
	{
		// FUTURE cannot handle elements currently
		throw new Error( );
	}

	// advances over closing square bracket
	state =
		state.create(
			'ast', olit,
			'pos', state.pos + 1
		);

	return state;
};


/*
| Generic parser error.
*/
parser.handleParserError =
	function(
		// state // current parser state
		// spec   // operator spec
	)
{
	throw new Error( 'parser error' );
};



/*
| Generic pass handler.
| It just passes back up
*/
parser.handlePass =
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
parser.handleReturn =
	function(
		state // current parser state
	)
{
	var
		ast;

	ast = state.ast;

/**/if( CHECK )
/**/{
/**/	if( state.ast )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( state.current.type !== 'return' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	state = state.create( 'pos', state.pos + 1 );

	state = parseToken( state, leftSpecs.start );

	return(
		state.create(
			'ast', ast_return.create( 'expr', state.ast )
		)
	);
};


/*
| Handler for string literals.
*/
parser.handleString =
	function(
		state // current parser state
		// spec   // operator spec
	)
{
	state =
		state.create(
			'ast', ast_string.create( 'string', state.current.value ),
			'pos', state.pos + 1
		);

	return state;
};



/*
| Left token specifications for unary operants.
| They are consulted when the current parse buffer is empty.
*/
const leftSpecs = { };

leftSpecs.identifier =
	jsParser_spec.create(
		'prec', -1,
		'handler', 'handleIdentifier'
	);

leftSpecs.null =
	jsParser_spec.create(
		'prec', -1,
		'handler', 'handleNull'
	);

leftSpecs.number =
	jsParser_spec.create(
		'prec', -1,
		'handler', 'handleNumber'
	);

leftSpecs.string =
	jsParser_spec.create(
		'prec', -1,
		'handler', 'handleString'
	);

leftSpecs[ 'true' ] =
	jsParser_spec.create(
		'prec', -1,
		'handler', 'handleBooleanLiteral'
	);

leftSpecs[ 'false' ] =
	jsParser_spec.create(
		'prec', -1,
		'handler', 'handleBooleanLiteral'
	);

leftSpecs[ '[' ] =
	jsParser_spec.create(
		'prec', 1,
		'handler', 'handleArrayLiteral',
		'associativity', 'l2r'
	);

leftSpecs[ '{' ] =
	jsParser_spec.create(
		'prec', -1,
		'handler', 'handleObjectLiteral'
	);

leftSpecs[ '(' ] =
	jsParser_spec.create(
		'prec', 0,
		'handler', 'handleGrouping',
		'associativity', 'l2r'
	);

leftSpecs[ 'new' ] =
	jsParser_spec.create(
		'prec', 2,
		'handler', 'handleNew',
		'associativity', 'r2l'
	);

leftSpecs[ '++' ] =
	jsParser_spec.create(
		'prec', 4,
		'handler', 'handleMonoOps',
		'astCreator', ast_preIncrement
	);

leftSpecs[ '--' ] =
	jsParser_spec.create(
		'prec', 4,
		'handler', 'handleMonoOps',
		'astCreator', ast_preDecrement
	);

leftSpecs[ '-' ] =
	jsParser_spec.create(
		'prec', 4,
		'handler', 'handleMonoOps',
		'astCreator', ast_negate,
		'associativity', 'r2l'
	);

leftSpecs[ '!' ] =
	jsParser_spec.create(
		'prec', 4,
		'handler', 'handleMonoOps',
		'astCreator', ast_not,
		'associativity', 'r2l'
	);

leftSpecs[ 'delete' ] =
	jsParser_spec.create(
		'prec', 4,
		'handler', 'handleMonoOps',
		'astCreator', ast_delete,
		'associativity', 'r2l'
	);

leftSpecs[ 'typeof' ] =
	jsParser_spec.create(
		'prec', 4,
		'handler', 'handleMonoOps',
		'astCreator', ast_typeof,
		'associativity', 'r2l'
	);

leftSpecs[ ',' ] =
	jsParser_spec.create(
		'prec', 19,
		'handler', 'handleDualisticOps',
		'astCreator', ast_comma,
		'associativity', 'l2r'
	);

// phony spec that cannot be created
// by lexer denoting start of parsing
leftSpecs.start =
	jsParser_spec.create(
		'prec', 99,
		'handler', 'handleParserError'
	);


/*
| Right token specifications for unary operants.
| They are consulted when the current parse buffer is empty.
*/
const rightSpecs = { };

rightSpecs[ '(' ] =
	jsParser_spec.create(
		'prec', 1,
		'handler', 'handleCall',
		'associativity', 'l2r'
	);

rightSpecs[ '[' ] =
	jsParser_spec.create(
		'prec', 1,
		'handler', 'handleMember',
		'associativity', 'l2r'
	);

rightSpecs[ ']' ] =
	jsParser_spec.create(
		'prec', 1, // 98?
		'handler', 'handlePass'
	);

rightSpecs[ '.' ] =
	jsParser_spec.create(
		'prec', 1,
		'handler', 'handleDot',
		'associativity', 'l2r'
	);

rightSpecs[ '++' ] =
	jsParser_spec.create(
		'prec', 3,
		'handler', 'handleMonoOps',
		'astCreator', ast_postIncrement
	);

rightSpecs[ '--' ] =
	jsParser_spec.create(
		'prec', 3,
		'handler', 'handleMonoOps',
		'astCreator', ast_postDecrement
	);

rightSpecs[ '*' ] =
	jsParser_spec.create(
		'prec', 5,
		'handler', 'handleDualisticOps',
		'astCreator', ast_multiply,
		'associativity', 'l2r'
	);

rightSpecs[ '/' ] =
	jsParser_spec.create(
		'prec', 5,
		'handler', 'handleDualisticOps',
		'astCreator', ast_divide,
		'associativity', 'l2r'
	);

rightSpecs[ '+' ] =
	jsParser_spec.create(
		'prec', 6,
		'handler', 'handleDualisticOps',
		'astCreator', ast_plus,
		'associativity', 'l2r'
	);

rightSpecs[ '-' ] =
	jsParser_spec.create(
		'prec', 6,
		'handler', 'handleDualisticOps',
		'astCreator', ast_minus,
		'associativity', 'l2r'
	);

rightSpecs[ '<' ] =
	jsParser_spec.create(
		'prec', 8,
		'handler', 'handleDualisticOps',
		'astCreator', ast_lessThan,
		'associativity', 'l2r'
	);

rightSpecs[ '>' ] =
	jsParser_spec.create(
		'prec', 8,
		'handler', 'handleDualisticOps',
		'astCreator', ast_greaterThan,
		'associativity', 'l2r'
	);

rightSpecs[ '===' ] =
	jsParser_spec.create(
		'prec', 9,
		'handler', 'handleDualisticOps',
		'astCreator', ast_equals,
		'associativity', 'l2r'
	);

rightSpecs[ '!==' ] =
	jsParser_spec.create(
		'prec', 9,
		'handler', 'handleDualisticOps',
		'astCreator', ast_differs,
		'associativity', 'l2r'
	);

rightSpecs[ 'instanceof' ] =
	jsParser_spec.create(
		'prec', 11,
		'handler', 'handleDualisticOps',
		'astCreator', ast_instanceof,
		'associativity', 'l2r'
	);

rightSpecs[ '&&' ] =
	jsParser_spec.create(
		'prec', 13,
		'handler', 'handleDualisticOps',
		'astCreator', ast_and,
		'associativity', 'l2r'
	);

rightSpecs[ '||' ] =
	jsParser_spec.create(
		'prec', 14,
		'handler', 'handleDualisticOps',
		'astCreator', ast_or,
		'associativity', 'l2r'
	);

rightSpecs[ '?' ] =
	jsParser_spec.create(
		'prec', 15,
		'handler', 'handleCondition',
		'associativity', 'l2r'
	);

rightSpecs[ '=' ] =
	jsParser_spec.create(
		'prec', 16,
		'handler', 'handleDualisticOps',
		'astCreator', ast_assign,
		'associativity', 'r2l'
	);

rightSpecs[ '+=' ] =
	jsParser_spec.create(
		'prec', 16,
		'handler', 'handleDualisticOps',
		'astCreator', ast_plusAssign,
		'associativity', 'r2l'
	);

rightSpecs[ '-=' ] =
	jsParser_spec.create(
		'prec', 16,
		'handler', 'handleDualisticOps',
		'astCreator', ast_minusAssign,
		'associativity', 'r2l'
	);

rightSpecs[ '*=' ] =
	jsParser_spec.create(
		'prec', 16,
		'handler', 'handleDualisticOps',
		'astCreator', ast_multiplyAssign,
		'associativity', 'r2l'
	);

rightSpecs[ '/=' ] =
	jsParser_spec.create(
		'prec', 16,
		'handler', 'handleDualisticOps',
		'astCreator', ast_divideAssign,
		'associativity', 'r2l'
	);

rightSpecs[ ',' ] =
	jsParser_spec.create(
		'prec', 19,
		'handler', 'handleDualisticOps',
		'astCreator', ast_comma,
		'associativity', 'l2r'
	);

rightSpecs[ ')' ] =
	jsParser_spec.create(
		'prec', 98,
		'handler', 'handlePass'
	);

rightSpecs[ ':' ] =
	jsParser_spec.create(
		'prec', 98,
		'handler', 'handlePass'
	);


/*
| Statement token specifications.
*/
const statementSpecs = { };

statementSpecs[ 'return' ] =
	jsParser_spec.create(
		'handler', 'handleReturn'
	);


/*
| Returns the spec for a state
*/
const getSpec =
	function(
		state,
		statement
	)
{
	var
		spec;

	if( !state.ast )
	{
		if( statement )
		{
			spec = statementSpecs[ state.current.type ];
		}

		if( !spec )
		{
			spec = leftSpecs[ state.current.type ];
		}
	}
	else
	{
		spec = rightSpecs[ state.current.type ];
	}

	if( !spec )
	{
		throw new Error( 'unexpected ' + state.current.type );
	}

	return spec;
};


/*
| Parses a token at pos from a tokenList.
*/
const parseToken =
	function(
		state,
		spec
	)
{
	var
		nextSpec,
		tokenSpec;

	// this is already a preparsed astTree.

	if( !state.ast && state.current.timtype !== jsLexer_token )
	{
		state = state.create( 'ast', state.current, 'pos', state.pos + 1 );
	}
	else
	{
		tokenSpec = getSpec( state, spec.prec === 99 );

		state = parser[ tokenSpec.handler ]( state, tokenSpec );
	}

	while( !state.reachedEnd )
	{
		nextSpec = getSpec( state, false );

		if(
			nextSpec.prec === undefined
			||
			nextSpec.prec > spec.prec
			||
			( nextSpec.prec === spec.prec && spec.associativity === 'l2r' )
			||
			nextSpec.handler === 'handlePass'
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
parser.tokenizeArray =
	function(
		array
	)
{
	var
		a,
		arg,
		aZ,
		tokens;

	tokens = jsParser_tokenList.create( );

	for( a = 0, aZ = array.length; a < aZ; a++ )
	{
		arg = array[ a ];

		if( arg === undefined ) continue;

		if( typeof( arg ) === 'string' )
		{
			tokens = tokens.appendList( lexer.tokenize( arg ) );
		}
		else if( Array.isArray( arg ) )
		{
			tokens = tokens.appendList( parser.tokenizeArray( arg ) );
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
parser.parseArray =
	function(
		array
	)
{
	var
		st,
		tokens;

	tokens = parser.tokenizeArray( array );

	if( tokens.length === 0 ) return undefined;

	st =
		state.create(
			'tokens', tokens,
			'pos', 0,
			'ast', undefined
		);

	st = parseToken( st, leftSpecs.start );

	if( !st.reachedEnd )
	{
		throw new Error( 'internal fail, premature end' );
	}

	return st.ast;
};


/*
| Parses code to create an ast tree.
*/
parser.parse =
	function(
		// list of strings to parse
		// or ast subtrees.
	)
{
	return parser.parseArray( arguments );
};


