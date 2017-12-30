/*
| A lexer token.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'jsLexer_token', ( def, jsLexer_token ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		type :
		{
			comment : 'the token type',
			type : 'string'
		},
		value :
		{
			comment : 'the token value',
			type : [ 'undefined', 'number', 'boolean', 'string' ]
,		}
	};

	def.init = [ ];
}


let tokenList;


/**/if( CHECK )
/**/{
/**/	tokenList = { };
/**/	tokenList[ '=' ] = true;
/**/	tokenList[ '.' ] = true;
/**/	tokenList[ ',' ] = true;
/**/	tokenList[ '+' ] = true;
/**/	tokenList[ '-' ] = true;
/**/	tokenList[ '*' ] = true;
/**/	tokenList[ '/' ] = true;
/**/	tokenList[ '<' ] = true;
/**/	tokenList[ '>' ] = true;
/**/	tokenList[ '?' ] = true;
/**/	tokenList[ ':' ] = true;
/**/	tokenList[ '!' ] = true;
/**/	tokenList[ '[' ] = true;
/**/	tokenList[ ']' ] = true;
/**/	tokenList[ '(' ] = true;
/**/	tokenList[ ')' ] = true;
/**/	tokenList[ '{' ] = true;
/**/	tokenList[ '}' ] = true;
/**/	tokenList[ '++' ] = true;
/**/	tokenList[ '--' ] = true;
/**/	tokenList[ '+=' ] = true;
/**/	tokenList[ '-=' ] = true;
/**/	tokenList[ '*=' ] = true;
/**/	tokenList[ '/=' ] = true;
/**/	tokenList[ '||' ] = true;
/**/	tokenList[ '&&' ] = true;
/**/	tokenList[ '===' ] = true;
/**/	tokenList[ '!==' ] = true;
/**/	tokenList[ 'new' ] = true;
/**/	tokenList[ 'null' ] = true;
/**/	tokenList[ 'true' ] = true;
/**/	tokenList[ 'false' ] = true;
/**/	tokenList[ 'delete' ] = true;
/**/	tokenList[ 'return' ] = true;
/**/	tokenList[ 'typeof' ] = true;
/**/	tokenList[ 'instanceof' ] = true;
/**/	tokenList.number = true;
/**/	tokenList.string = true;
/**/	tokenList.identifier = true;
/**/}


/*
| Initializer.
*/
def.func._init =
	function( )
{

/**/if( CHECK )
/**/{
/**/	if( !tokenList[ this.type ] ) throw new Error( );
/**/}

};


} );

