/*
| Hold specifications of a tim.
*/
'use strict';


tim.define( module, ( def, timspec_timspec ) => {


if( TIM )
{
	def.attributes =
	{
		// def, the tim definition
		def : { type : 'protean' },

		// json name of this tim
		json : { type : [ 'undefined', 'string' ] },

		// catalog path
		path : { type : [ '../export/path' ] },
	};
}


/*
| Creates a timspec from the def protean.
*/
def.static.createFromDef =
	function(
		def,
		path
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 2 ) throw new Error( );
/**/}

	return(
		timspec_timspec.create(
			'def', def,
			'json', def.json,
			'path', path
		)
	);
};


} );
