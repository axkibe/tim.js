/*
| Hold specifications of a tim.
*/
'use strict';


tim.ouroboros.define( module, ( def ) => {


if( TIM )
{
	def.attributes =
	{
		// json name of this tim
		json : { type : [ 'undefined', 'string' ] },

		// absolute path of tim source
		path : { type : [ '../export/path' ] },
	};
}


} );
