/*
| A list of strings.
*/
'use strict';


require( '../ouroboros' ).define( module, ( def, self ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.list = [ 'string' ];
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
