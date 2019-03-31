/*
| The javascript lexer turns a string into a series of tokens.
*/
'use strict';


tim.define( module, ( def, lexer_lexer ) => {


def.abstract = true;


const token = require( './token' );

const tokenList = require( './tokenList' );


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
			while( c + 1 < cl && code[ c+ 1 ].match( /[a-zA-Z0-9_$]/ ) )
			{
				value += code[ ++c ];
			}

			switch( value )
			{
				case 'const' :
				case 'delete' :
				case 'else' :
				case 'false' :
				case 'for' :
				case 'if' :
				case 'instanceof' :
				case 'let' :
				case 'new' :
				case 'null' :
				case 'return' :
				case 'true' :
				case 'typeof' :

					tokens.push( token.tv( value ) );

					continue;

				default :

					tokens.push( token.tv( 'identifier', value ) );

					continue;
			}
		}

		if( ch.match(/[0-9]/ ) )
		{
			// a number
			let value = ch;

			while( c + 1 < cl && code[ c + 1 ].match( /[0-9]/ ) )
			{
				value += code[ ++c ];
			}

			value = parseInt( value, 10 );

			tokens.push( token.tv( 'number', value ) );

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

			tokens.push( token.tv( 'string', value ) );

			continue;
		}

		switch( ch )
		{
			case '<' :
			case '>' :
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

				tokens.push( token.tv( ch ) );

				continue;

			case '=' :

				if( c + 1 < cl && code[ c + 1 ] === '=' )
				{
					if( c + 2 < cl && code[ c + 2 ] === '=' )
					{
						tokens.push( token.tv( '===' ) );

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
					tokens.push( token.tv( '=' ) );
				}

				continue;

			case '!' :

				if( c + 1 < cl && code[ c + 1 ] === '=' )
				{
					if( c + 2 < cl && code[ c + 2 ] === '=' )
					{
						tokens.push( token.tv( '!==' ) );

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
					tokens.push( token.tv( '!' ) );
				}

				continue;

			case '+' :

				if( c + 1 < cl && code[ c + 1 ] === '+' )
				{
					tokens.push( token.tv( '++' ) );

					c++;
				}
				else if( c + 1 < cl && code[ c + 1 ] === '=' )
				{
					tokens.push( token.tv( '+=' ) );

					c++;
				}
				else
				{
					tokens.push( token.tv( '+' ) );
				}

				continue;

			case '-' :

				if( c + 1 < cl && code[ c + 1 ] === '-' )
				{
					tokens.push( token.tv( '--' ) );

					c++;
				}
				else if( c + 1 < cl && code[ c + 1 ] === '=' )
				{
					tokens.push( token.tv( '-=' ) );

					c++;
				}
				else
				{
					tokens.push( token.tv( '-' ) );
				}

				continue;

			case '*' :

				if( c + 1 < cl && code[ c + 1 ] === '=' )
				{
					tokens.push( token.tv( '*=' ) );

					c++;
				}
				else
				{
					tokens.push( token.tv( '*' ) );
				}

				continue;

			case '/' :

				if( c + 1 < cl && code[ c + 1 ] === '=' )
				{
					tokens.push( token.tv( '/=' ) );

					c++;
				}
				else
				{
					tokens.push( token.tv( '/' ) );
				}

				continue;

			case '|' :

				if( c + 1 < cl && code[ c + 1 ] === '|' )
				{
					tokens.push( token.tv( '||' ) );

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
					tokens.push( token.tv( '&&' ) );

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
