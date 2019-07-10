/*
| An attribute description of a tim object.
*/
'use strict';


tim.define( module, ( def, self ) => {


if( TIM )
{
	def.attributes =
	{
		// this attribute has an adjustment getter
		adjust : { type: 'boolean' },

		// variable name to assign to
		assign : { type : 'string' },

		// default value
		defaultValue : { type : [ '< ../ast/types-expr', 'undefined' ] },

		// create JSON converters
		json : { type : 'boolean', defaultValue : 'false' },

		// a mapping of types for forwarded json converters
		jsonTypes : { type : [ 'undefined', '../type/group' ] },

		// attribute name
		name : { type : 'string' },

		// attribute types
		types : { type : '../type/set' },

		// attribute variable used in generate
		varRef : { type : '../ast/var' },
	};
}


const shorthand = tim.require( '../ast/shorthand' );


/*
| The name as ast string.
*/
def.lazy.$name =
	function( )
{
	return shorthand.$string( this.name );
};


} );
