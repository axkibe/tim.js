/*
| A lexer token.
*/
'use strict';


tim.define( module, ( def, token ) => {


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


let allowedTokens;


/**/if( CHECK )
/**/{
/**/	allowedTokens = { };
/**/	allowedTokens[ '=' ] = true;
/**/	allowedTokens[ '.' ] = true;
/**/	allowedTokens[ ',' ] = true;
/**/	allowedTokens[ '+' ] = true;
/**/	allowedTokens[ '-' ] = true;
/**/	allowedTokens[ '*' ] = true;
/**/	allowedTokens[ '/' ] = true;
/**/	allowedTokens[ '<' ] = true;
/**/	allowedTokens[ '>' ] = true;
/**/	allowedTokens[ '?' ] = true;
/**/	allowedTokens[ ':' ] = true;
/**/	allowedTokens[ ';' ] = true;
/**/	allowedTokens[ '!' ] = true;
/**/	allowedTokens[ '[' ] = true;
/**/	allowedTokens[ ']' ] = true;
/**/	allowedTokens[ '(' ] = true;
/**/	allowedTokens[ ')' ] = true;
/**/	allowedTokens[ '{' ] = true;
/**/	allowedTokens[ '}' ] = true;
/**/	allowedTokens[ '++' ] = true;
/**/	allowedTokens[ '--' ] = true;
/**/	allowedTokens[ '+=' ] = true;
/**/	allowedTokens[ '-=' ] = true;
/**/	allowedTokens[ '*=' ] = true;
/**/	allowedTokens[ '/=' ] = true;
/**/	allowedTokens[ '||' ] = true;
/**/	allowedTokens[ '&&' ] = true;
/**/	allowedTokens[ '===' ] = true;
/**/	allowedTokens[ '!==' ] = true;
/**/	allowedTokens[ 'if' ] = true;
/**/	allowedTokens[ 'for' ] = true;
/**/	allowedTokens[ 'let' ] = true;
/**/	allowedTokens[ 'new' ] = true;
/**/	allowedTokens[ 'else' ] = true;
/**/	allowedTokens[ 'null' ] = true;
/**/	allowedTokens[ 'true' ] = true;
/**/	allowedTokens[ 'const' ] = true;
/**/	allowedTokens[ 'false' ] = true;
/**/	allowedTokens[ 'delete' ] = true;
/**/	allowedTokens[ 'return' ] = true;
/**/	allowedTokens[ 'typeof' ] = true;
/**/	allowedTokens[ 'instanceof' ] = true;
/**/	allowedTokens.number = true;
/**/	allowedTokens.string = true;
/**/	allowedTokens.identifier = true;
/**/}


/**
*** Exta checking
***/
/**/if( CHECK )
/**/{
/**/	def.proto._check =
/**/		function( )
/**/	{
/**/		if( !allowedTokens[ this.type ] ) throw new Error( );
/**/	};
/**/}


/*
| Shortcut to create a token of type t with value v.
*/
def.static.tv =
	function(
		t,  // type
		v   // value maybe undefined
	)
{
	return token.create( 'type', t, 'value', v );
};


} );
