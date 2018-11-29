/*
| A root directory of timspecs.
*/
'use strict';


tim.ouroboros.define( module, ( def ) => {


if( TIM )
{
	def.attributes =
	{
		// the absolute path of the root directory
		path : { type : '../export/path' },

		// an id for this tree
		id : { type : 'string' },
	};

	def.group = [ './dir', './timspec' ];
}


} );
