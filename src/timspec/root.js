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

		// if true skips auto timcode generation for this timspec tree
		// used by ouroborus builds of tim.js
		noTimcodeGen : { type : 'boolean', defaultValue : 'false' },
	};

	def.group = [ './dir', './timspec' ];
}


} );
