/*
| A parser state.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$jsParser_tokenSpec',
		attributes :
		{
			associativity :
			{
				comment : '"r2l", "l2r" or "n/a"',
				// right to left
				// left to right
				// not applicable
				type : 'string',
				defaultValue : '"n/a"'
			},
			prec :
			{
				comment : 'operator precedence',
				type : [ 'undefined', 'integer' ]
			},
			handler :
			{
				comment : 'Handler function to be called',
				type : 'string'
			},
			astCreator :
			{
				comment :
					'For some handlers, the ast creator function'
					+ ' for it to call',
				type : [ 'undefined', 'protean' ] // FUTURE
			}
		},
		init : [ ]
	};
}


/*
| Capsule
*/
(function() {
'use strict';


var
	tokenSpec;

tokenSpec = require( '../ouroboros' ).this( module );


/*
| Initializer.
*/
tokenSpec.prototype._init =
	function( )
{

/**/if( CHECK )
/**/{
/**/	if(
/**/		this.associativity !== 'l2r'
/**/		&&  this.associativity !== 'r2l'
/**/		&&  this.associativity !== 'n/a'
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

};


} )( );
