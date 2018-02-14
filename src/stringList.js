/*
| A list of strings.
*/
'use strict';


tim.ouroboros.define( module, ( def, self ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.list = [ 'string' ];
}


if( !NODE )
{
	// FIXME
	tim.stringList = self;
}


/*
| Shorthand function
*/
def.static.stringList =
	function(
		array
	)
{
	return self.create( 'list:init', array );
};


} );
