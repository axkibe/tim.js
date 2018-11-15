/*
| A parser state.
*/
'use strict';


tim.ouroboros.define( module, ( def, self ) => {


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


/*
| Advances the pos.
*/
def.func.advance =
	function(
		ast // optional, sets this ast value
	)
{
	if( arguments.length === 0 ) return this.create( 'pos', this.pos + 1 );

	if( arguments.length === 1 ) return this.create( 'ast', ast, 'pos', this.pos + 1 );

	throw new Error( );
};


/*
| Stays on the pos, but changes ast state.
*/
def.func.stay =
	function(
		ast // required, sets this ast value
	)
{
	return this.create( 'ast', ast );
};


} );
