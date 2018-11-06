/*
| A parser state.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, self ) => {


if( TIM )
{
	def.attributes =
	{
		// current ast entity
		ast : { type : [ '< ../ast/types-statement', '< ../ast/types-expr', 'undefined' ] },

		// list of tokens to parse
		tokens : { type : './tokenList' },

		// current position in token list
		pos : { type : 'integer' }
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
