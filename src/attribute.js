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
		// attribute may be null
		allowsNull : { type : 'boolean', defaultValue : 'false' },

		// attribute may be undefined
		allowsUndefined : { type : 'boolean', defaultValue : 'false' },

		// variable name to assign to
		assign : { type : 'string' },

		// default value
		defaultValue : { type : [ '< ./ast/types-expr', 'undefined' ] },

		// include in JSON export/import
		json : { type : 'boolean', defaultValue : 'false' },

		// attribute name
		name : { type : 'string' },

		// this attribute has a transformative getter
		transform : { type: [ 'string', 'boolean', 'undefined' ] }, // XXX

		// attribute type id
		id : { type : [ '< ./type/types', './type/set' ] },

		// attribute variable used in generate
		varRef : { type : './ast/var' },
	};
}


} );

