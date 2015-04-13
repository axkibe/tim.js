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
	return{
		id : 'jion$jsParser_state',
		attributes :
		{
			ast :
			{
				comment : 'current ast entity',
				type : require( '../typemaps/astStatement' ),
				defaultValue : 'undefined'
			},
			tokens :
			{
				comment : 'ray of tokens to parse',
				type : 'jion$jsParser_tokenRay'
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
	jion_proto,
	state;

state = require( '../this' )( module, 'ouroboros' );

jion_proto = require( '../proto' );


/*
| True if pos is at end of the token ray.
*/
jion_proto.lazyValue(
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
jion_proto.lazyValue(
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
jion_proto.lazyValue(
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
