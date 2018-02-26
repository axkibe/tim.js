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
		defaultValue : { type : tim.typemap( module, './ast/expr' ).concat( [ 'undefined' ] ) },

		// include in JSON export/import
		json : { type : 'boolean', defaultValue : 'false' },

		// attribute name
		name : { type : 'string' },

		// attribute preparation code
		prepare : { type : [ 'undefined', 'string' ] },

		// attribute type id
		id : { type : tim.typemap( module, './type/type' ).concat( [ './type/set' ] ) },

		// attribute variable used in generate
		varRef : { type : './ast/var' },
	};
}


} );

