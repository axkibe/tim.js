/*
| A parser state.
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
		id : 'jsParser_state',
		attributes :
		{
			ast :
			{
				comment : 'current ast entity',
				type : '->astStatement',
				defaultValue : 'undefined'
			},
			tokens :
			{
				comment : 'ray of tokens to parse',
				type : 'jsParser_tokenRay'
			},
			pos :
			{
				comment : 'current position in token ray',
				type : 'integer'
			}
		},
	};
}


var
	jools,
	state;

state = require( '../jion/this' )( module );

jools = require( '../jools/jools' );


/*
| True if pos is at end of the token ray.
*/
jools.lazyValue(
	state.prototype,
	'reachedEnd',
	function( )
	{
		return this.pos >= this.tokens.length;
	}
);


/*
| The current token.
*/
jools.lazyValue(
	state.prototype,
	'current',
	function( )
	{
		return(
			( this.pos < this.tokens.length )
			?  this.tokens.get( this.pos )
			: undefined
		);
	}
);


/*
| The preview token.
*/
jools.lazyValue(
	state.prototype,
	'preview',
	function( )
	{
		return(
			( this.pos + 1 < this.tokens.length )
			? this.tokens.get( this.pos + 1 )
			: undefined
		);
	}
);


} )( );
