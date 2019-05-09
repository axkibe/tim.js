/*
| A lexer token.
*/
'use strict';


tim.define( module, ( def, lexer_token ) => {


if( TIM )
{
	def.attributes =
	{
		// the token type
		type : { type : 'string' },

		// the token value
		value : { type : [ 'undefined', 'number', 'boolean', 'string' ] }
	};
}


def.staticLazy.allowedTokens = ( ) =>
	new Set( [
		'=', '.', ',', '+', '-', '*', '/', '<', '>', '?',
		':', ';', '!', '[', ']', '(', ')', '{', '}',
		'++', '--', '+=', '-=', '*=', '/=', '<=', '>=',
		'||', '&&', '===', '!==', 'if', 'in', 'of',
		'for', 'let', 'new', 'else', 'null', 'true', 'const', 'false',
		'throw', 'typeof', 'yield', 'string',
		'delete', 'return', 'number',
		'identifier', 'instanceof',
	] );


/*
| Exta checking
*/
def.proto._check =
	function( )
{
/**/if( CHECK )
/**/{
/**/	if( !lexer_token.allowedTokens.has( this.type ) ) throw new Error( );
/**/}
};


/*
| Shortcut to create a token of type t with value v.
*/
def.static.createTv =
	function(
		t,  // type
		v   // value maybe undefined
	)
{
	return lexer_token.create( 'type', t, 'value', v );
};


} );
