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
		path : { type : 'string' },

		id : { type : 'string' },
	};

	def.group = [ './branch', './leaf' ];
}


} );
