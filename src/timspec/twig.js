/*
| A twig of timspec's.
| (an ordered group)
*/
'use strict';


tim.define( module, ( def, self ) => {


if( TIM )
{
	def.twig = [ './timspec' ];
}


const timspec_timspec = require( './timspec' );


/*
| Creates the timspec twig by dependency walking a timspec
*/
def.static.createByDependencyWalk =
	function(
		entry   // timspec to start the walk with
	)
{

/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 1 ) throw new Error( );
/**/
/**/	if( entry.timtype !== timspec_timspec ) throw new Error( );
/**/}

	let t = self.create( 'twig:add', entry.filename, entry );

	return t;
};


} );
