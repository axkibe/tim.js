/*
| A timtree is a set of 'modules' using tim
|
| This is stored so the browser can 'require' these
| things as well.
*/
'use strict';


tim.ouroboros.define( module, ( def ) => {


if( TIM )
{
	def.attributes =
	{
		json : { type : [ 'undefined', 'string' ] },

		path : { type : [ '../export/path' ] },
	};
}


} );
