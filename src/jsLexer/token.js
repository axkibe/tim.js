/*
| A lexer token.
*/


/*
| Capsule
*/
(function() {
'use strict';


/*
| The jion definition.
*/
if( JION )
{
	return {
		id :
			'jsLexer_token',
		attributes :
			{
				type :
					{
						comment :
							'the token type',
						type :
							'string'
					},
				value :
					{
						comment :
							'the token value',
						type :
							[ 'number', 'boolean', 'string' ],
						defaultValue :
							'undefined'
					}
			},
		init :
			[ ]
	};
}


var
	token,
	tokenList;

token = require( '../jion/this' )( module );


/**/if( CHECK )
/**/{
/**/	tokenList = { };
/**/	tokenList[ '=' ] = true;
/**/	tokenList[ '.' ] = true;
/**/	tokenList[ ',' ] = true;
/**/	tokenList[ '+' ] = true;
/**/	tokenList[ '*' ] = true;
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
/**/	tokenList[ '+=' ] = true;
/**/	tokenList[ '*=' ] = true;
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
token.prototype._init =
	function( )
{

/**/if( CHECK )
/**/{
/**/	if( !tokenList[ this.type ] )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

};


} )( );
