/*
| A partial parser for javascript.
|
| This parser must not use ast-shorthands,
| because these are using the parser.
*/


var
	parser;

parser =
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
	ast_boolean,
	ast_call,
	ast_comma,
	ast_condition,
	ast_delete,
	ast_differs,
	ast_dot,
	ast_equals,
	ast_greaterThan,
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
	ast_typeof,
	ast_var,
	getSpec,
	jools,
	jsParser_spec,
	jsParser_tokenRay,
	lexer,
	parseToken,
	state,
	leftSpecs,
	rightSpecs,
	statementSpecs;


ast_and = require( '../ast/and' );

ast_arrayLiteral = require( '../ast/arrayLiteral' );

ast_assign = require( '../ast/assign' );

ast_boolean = require( '../ast/boolean' );

ast_call = require( '../ast/call' );

ast_comma = require( '../ast/comma' );

ast_condition = require( '../ast/condition' );

ast_delete = require( '../ast/delete' );

ast_differs = require( '../ast/differs' );

ast_dot = require( '../ast/dot' );

ast_equals = require( '../ast/equals' );

ast_greaterThan = require( '../ast/greaterThan' );

ast_instanceof = require( '../ast/instanceof' );

ast_lessThan = require( '../ast/lessThan' );

ast_member = require( '../ast/member' );

ast_multiply = require( '../ast/multiply' );

ast_multiplyAssign = require( '../ast/multiplyAssign' );

ast_new = require( '../ast/new' );

ast_not = require( '../ast/not' );

ast_null = require( '../ast/null' );

ast_number = require( '../ast/number' );

ast_objLiteral = require( '../ast/objLiteral' );

ast_or = require( '../ast/or' );

ast_plus = require( '../ast/plus' );

ast_plusAssign = require( '../ast/plusAssign' );

ast_preIncrement = require( '../ast/preIncrement' );

ast_return = require( '../ast/return' );

ast_string = require( '../ast/string' );

ast_typeof = require( '../ast/typeof' );

ast_var = require( '../ast/var' );

jools = require( '../jools/jools' );

lexer = require( '../jsLexer/lexer' );

state = require( './state' );

jsParser_tokenRay = require( './tokenRay' );

jsParser_spec = require( './spec' );


/*
| Handler for array literals.
*/
parser.handleArrayLiteral =
	function(
		state, // current parser state
		spec   // operator spec
	)
{
	var
		alit,
		ast;

	ast = state.ast;

/**/if( CHECK )
/**/{
/**/	if( state.ast )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	// this is an array literal
	alit = ast_arrayLiteral.create( );

	state =
		state.create(
			'ast', undefined,
			'pos', state.pos + 1
		);

	if( state.reachedEnd )
	{
		throw new Error( 'missing "]"' );
	}

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
	var
		bool;

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
	var
		call,
		ast;

	ast = state.ast;

/**/if( CHECK )
/**/{
/**/	if( !ast )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	call = ast_call.create( 'func', ast );

	state =
		state.create(
			'ast', undefined,
			'pos', state.pos + 1
		);

	if( state.reachedEnd )
	{
		throw new Error( 'missing ")"' );
	}

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

			if( state.reachedEnd )
			{
				throw new Error( 'missing ")"' );
			}

			if( state.ast )
			{
				call = call.addArgument( state.ast );
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

				if( state.current.type === ')' )
				{
					throw new Error( 'parser error' );
				}

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
/**/	if( !condition )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( state.current.type !== '?' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	state =
		state.create(
			'ast', undefined,
			'pos', state.pos + 1
		);

	if( state.reachedEnd )
	{
		throw new Error( 'parser error' );
	}

	state = parseToken( state, spec );

	then = state.ast;

	if( state.current.type !== ':' )
	{
		throw new Error( 'missing ":"' );
	}

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
	var
		ast,
		name;

	ast = state.ast;

	if( !ast )
	{
		throw new Error( );
	}

	name = state.preview;

	if( name.type !== 'identifier' )
	{
		throw new Error( );
	}

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
	var
		ast;

	ast = state.ast;

	if( !ast )
	{
		throw new Error( 'parser error' );
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
/**/	if( state.ast )
/**/	{
/**/		throw new Error( );
/**/	}
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
/**/	if( !ast )
/**/	{
/**/		throw new Error( );
/**/	}
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

		if( state.reachedEnd )
		{
			throw new Error( );
		}
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
| Generic handler for mono operations.
*/
parser.handleMonoOps =
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
		throw new Error( 'FUTURE cannot do postfix ops' );
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
leftSpecs = { };

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
		'prec', 3,
		'handler', 'handleMonoOps',
		'astCreator', ast_preIncrement
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
rightSpecs = { };

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

rightSpecs[ '*' ] =
	jsParser_spec.create(
		'prec', 5,
		'handler', 'handleDualisticOps',
		'astCreator', ast_multiply,
		'associativity', 'l2r'
	);

rightSpecs[ '+' ] =
	jsParser_spec.create(
		'prec', 6,
		'handler', 'handleDualisticOps',
		'astCreator', ast_plus,
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

rightSpecs[ '*=' ] =
	jsParser_spec.create(
		'prec', 16,
		'handler', 'handleDualisticOps',
		'astCreator', ast_multiplyAssign,
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
statementSpecs = { };

statementSpecs[ 'return' ] =
	jsParser_spec.create(
		'handler', 'handleReturn'
	);


/*
| Returns the spec for a state
*/
getSpec =
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
| Parses a token at pos from a tokenRay.
*/
parseToken =
	function(
		state,
		spec
	)
{
	var
		nextSpec,
		tokenSpec;

	// this is already a preparsed astTree.
	if( !state.ast && state.current.reflect !== 'jsLexer_token' )
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
| Parses code to create an ast tree.
*/
parser.parse =
	function(
		// list of strings to parse
		// or ast subtrees.
	)
{
	var
		a,
		arg,
		aZ,
		st,
		tokens;

	tokens = jsParser_tokenRay.create( );

	for( a = 0, aZ = arguments.length; a < aZ; a++ )
	{
		arg = arguments[ a ];

		if( jools.isString( arg ) )
		{
			tokens = tokens.appendRay( lexer.tokenize( arg ) );
		}
		else
		{
			tokens = tokens.append( arg );
		}
	}

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


} )( );
