/*
| A provisional for a timspec that has not yet been processed.
*/
'use strict';


tim.define( module, ( def ) => {


if( TIM )
{
	def.attributes =
	{
		// Realpath of the tim definer.
		// FIXME rename realpath
		filename : { type : 'string' },

		// catalog path
		path : { type : [ 'undefined', '../path/path' ] },

		// the object that will become module.exports
		placeholder : { type : 'protean' },
	};
}


} );
