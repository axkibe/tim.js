/*
| A set of strings.
*/
'use strict';


tim.define( module, ( def, self ) => {


if( TIM )
{
	def.set = [ 'string' ];
}


/*
| Creates the set from a protean's keys.
*/
def.static.createFromProtean =
	function(
		protean
	)
{
	return self.create( 'set:init', new Set( Object.keys( protean ) ) );
};


} );
