/*
| The javascript lexer turns a string into a series of tokens.
*/
'use strict';


tim.define( module, ( def, lexer_lexer ) => {


def.abstract = true;


const token = tim.require( './token' );

const tokenList = tim.require( './tokenList' );


/*
| Set of all recognized keywords.
*/
def.staticLazy.keywords = ( ) =>
	new Set( [
		'const', 'delete', 'else', 'false', 'for',
		'if', 'in', 'instanceof', 'let', 'new',
		'null', 'of', 'return', 'throw', 'true',
		'typeof', 'yield',
	] );


/*
| Tokenizes a javascript string.
|
| Returns an array of tokens.
*/
def.static.tokenize =
	function( code )
{
	if( typeof( code ) !== 'string' ) throw new Error( 'cannot tokenize non-strings' );

	const tokens = [ ];

	for( let c = 0, cl = code.length; c < cl; c++ )
	{
		const ch = code[ c ];

		// skips whitespaces
		if( ch.match( /\s/ ) ) continue;

		if( ch.match( /[a-zA-Z_$]/ ) )
		{
			let value = ch;

			// a name specifier
			while( c + 1 < cl && code[ c + 1 ].match( /[a-zA-Z0-9_$]/ ) )
			{
				value += code[ ++c ];
			}

			tokens.push(
				lexer_lexer.keywords.has( value )
				? token.createTv( value )
				: token.createTv( 'identifier', value )
			);

			continue;
		}

		if( ch.match(/[0-9]/ ) )
		{
			// a number
			let value = ch;

			while( c + 1 < cl && code[ c + 1 ].match( /[0-9]/ ) ) value += code[ ++c ];
			value = parseInt( value, 10 );

			if( c + 1 < cl && code[ c + 1 ] === '.' )
			{
				// it's a comma value
				c++; // skips the comma
				let cv = code[ ++c ];
				while( c + 1 < cl && code[ c + 1 ].match( /[0-9]/ ) ) cv += code[ ++c ];
				let cvl = cv.length;
				cv = parseInt( cv, 10 );
				while( cvl > 0 ) { cv /= 10; cvl--; }
				value += cv;
			}

			tokens.push( token.createTv( 'number', value ) );

			continue;
		}

		if( ch === '"' )
		{
			// a string literal
			let value = '';

			c++;

			if( c >= cl ) throw new Error( '" missing' );

			// FUTURE handle \"
			while( code[ c ] !== '"' )
			{
				value += code[ c ];

				c++;

				if( c >= cl ) throw new Error( '" missing' );
			}

			tokens.push( token.createTv( 'string', value ) );

			continue;
		}

		switch( ch )
		{
			case '.' :
			case '?' :
			case ':' :
			case ';' :
			case ',' :
			case '(' :
			case ')' :
			case '[' :
			case ']' :
			case '{' :
			case '}' :

				tokens.push( token.createTv( ch ) );

				continue;

			case '<' :

				if( c + 1 < cl && code[ c + 1 ] === '=' )
				{
					tokens.push( token.createTv( '<=' ) );

					c++;
				}
				else
				{
					tokens.push( token.createTv( '<' ) );
				}

				continue;

			case '>' :

				if( c + 1 < cl && code[ c + 1 ] === '=' )
				{
					tokens.push( token.createTv( '>=' ) );

					c++;
				}
				else
				{
					tokens.push( token.createTv( '>' ) );
				}

				continue;

			case '=' :

				if( c + 1 < cl && code[ c + 1 ] === '=' )
				{
					if( c + 2 < cl && code[ c + 2 ] === '=' )
					{
						tokens.push( token.createTv( '===' ) );

						c += 2;

						continue;
					}
					else
					{
						throw new Error( 'Use === instead of ==');
					}
				}
				else
				{
					tokens.push( token.createTv( '=' ) );
				}

				continue;

			case '!' :

				if( c + 1 < cl && code[ c + 1 ] === '=' )
				{
					if( c + 2 < cl && code[ c + 2 ] === '=' )
					{
						tokens.push( token.createTv( '!==' ) );

						c += 2;

						continue;
					}
					else
					{
						throw new Error( 'Use !== instead of !=');
					}
				}
				else
				{
					tokens.push( token.createTv( '!' ) );
				}

				continue;

			case '+' :

				if( c + 1 < cl && code[ c + 1 ] === '+' )
				{
					tokens.push( token.createTv( '++' ) );

					c++;
				}
				else if( c + 1 < cl && code[ c + 1 ] === '=' )
				{
					tokens.push( token.createTv( '+=' ) );

					c++;
				}
				else
				{
					tokens.push( token.createTv( '+' ) );
				}

				continue;

			case '-' :

				if( c + 1 < cl && code[ c + 1 ] === '-' )
				{
					tokens.push( token.createTv( '--' ) );

					c++;
				}
				else if( c + 1 < cl && code[ c + 1 ] === '=' )
				{
					tokens.push( token.createTv( '-=' ) );

					c++;
				}
				else
				{
					tokens.push( token.createTv( '-' ) );
				}

				continue;

			case '*' :

				if( c + 1 < cl && code[ c + 1 ] === '=' )
				{
					tokens.push( token.createTv( '*=' ) );

					c++;
				}
				else
				{
					tokens.push( token.createTv( '*' ) );
				}

				continue;

			case '/' :

				if( c + 1 < cl && code[ c + 1 ] === '=' )
				{
					tokens.push( token.createTv( '/=' ) );

					c++;
				}
				else
				{
					tokens.push( token.createTv( '/' ) );
				}

				continue;

			case '|' :

				if( c + 1 < cl && code[ c + 1 ] === '|' )
				{
					tokens.push( token.createTv( '||' ) );

					c++;
				}
				else
				{
					throw new Error( 'bitwise or not supported' );
				}

				continue;

			case '&' :

				if( c + 1 < cl && code[ c + 1 ] === '&' )
				{
					tokens.push( token.createTv( '&&' ) );

					c++;
				}
				else
				{
					throw new Error( 'bitwise and not supported' );
				}

				continue;

			default :

				throw new Error( 'lexer error with: "' + code + '"' );
		}
	}

	return tokenList.create( 'list:init', tokens );
};


} );
