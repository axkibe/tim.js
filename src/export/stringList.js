/*
| A list of strings.
*/
'use strict';


tim.ouroboros.define( module, ( def, self ) => {


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
