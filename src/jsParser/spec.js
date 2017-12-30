/*
| A parser state.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'jsParser_tokenSpec', ( def, jsParser_tokenSpec ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		associativity :
		{
			// one of these:
			// "r2l" -- right to left
			// "l2r" -- left to right
			// "n/a" -- not applicable
			type : 'string',
			defaultValue : '"n/a"'
		},
		prec :
		{
			// operator precedence
			type : [ 'undefined', 'integer' ]
		},
		handler :
		{
			// handler function to be called
			type : 'string'
		},
		astCreator :
		{
			// for some handlers, the ast creator function
			// for it to call
			type : [ 'undefined', 'protean' ] // FUTURE
		}
	};

	def.init = [ ];
}


/*
| Initializer.
*/
def.func._init =
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


} );
