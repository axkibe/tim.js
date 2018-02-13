/*
| A parser state.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'jsParser_state', ( def, jsParser_state ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		ast :
		{
			// current ast entity
			type :
				tim.typemap( module, '../ast/statement' )
				.concat( [ 'undefined' ] )
		},
		tokens :
		{
			// list of tokens to parse
			type : 'jsParser_tokenList'
		},
		pos :
		{
			// current position in token list
			type : 'integer'
		}
	};
}


/*
| True if pos is at end of the token list.
*/
def.lazy.reachedEnd =
	function( )
{
	return this.pos >= this.tokens.length;
};


/*
| The current token.
*/
def.lazy.current =
	function( )
{
	return(
		( this.pos < this.tokens.length )
		?  this.tokens.get( this.pos )
		: undefined
	);
};


/*
| The preview token.
*/
def.lazy.preview =
	function( )
{
	return(
		( this.pos + 1 < this.tokens.length )
		? this.tokens.get( this.pos + 1 )
		: undefined
	);
};


} );

