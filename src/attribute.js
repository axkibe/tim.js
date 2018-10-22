/*
| An attribute description of a tim object.
*/
'use strict';


require( './ouroboros' )
.define( module, ( def, self ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		// variable name to assign to
		assign : { type : 'string' },

		// default value
		defaultValue : { type : [ '< ./ast/types-expr', 'undefined' ] },

		// include in JSON export/import
		json : { type : 'boolean', defaultValue : 'false' },

		// attribute name
		name : { type : 'string' },

		// this attribute has a transformative getter
		transform : { type: [ 'boolean' ] },

		// attribute type id
		id : { type : [ '< ./type/types', './type/set' ] },

		// attribute variable used in generate
		varRef : { type : './ast/var' },
	};
}


} );

