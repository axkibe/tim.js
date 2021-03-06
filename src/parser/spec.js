/*
| A parses entity specification.
*/
'use strict';


tim.define( module, ( def, self ) => {


if( TIM )
{
	def.attributes =
	{
		// one of these:
		// "r2l" -- right to left
		// "l2r" -- left to right
		// "n/a" -- not applicable
		associativity : { type : 'string', defaultValue : '"n/a"' },

		// operator precedence
		prec : { type : [ 'undefined', 'integer' ] },

		// handler function to be called
		handler : { type : 'string' },

		// for some handlers, the ast creator function
		// for it to call
		// FUTURE replace protean by 'function'
		astCreator : { type : [ 'undefined', 'protean' ] }
	};
}


/**
*** Exta checking
***/
/**/if( CHECK )
/**/{
/**/	def.proto._check =
/**/		function( )
/**/	{
/**/		if(
/**/			this.associativity !== 'l2r'
/**/			&&  this.associativity !== 'r2l'
/**/			&&  this.associativity !== 'n/a'
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	};
/**/}


/*
| Creation shortcut.
*/
def.static.createHandler =
	function(
		handler,         // name of handler function
		prec,            // precedence
		associativity,   // optional, associativity
		astCreator       // optional, astCreator
	)
{
	return(
		self.create(
			'handler', handler,
			'prec', prec,
			'associativity', associativity,
			'astCreator', astCreator
		)
	);
};


} );
