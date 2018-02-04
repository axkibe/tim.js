/*
| An attribute description of a tim object.
*/
'use strict';


require( './ouroboros' )
.define( module, 'attribute', ( def, tim_attribute ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		allowsNull :
		{
			// attribute may be null
			type : 'boolean',
			defaultValue : 'false'
		},
		allowsUndefined :
		{
			// attribute may be undefined
			type : 'boolean',
			defaultValue : 'false'
		},
		assign :
		{
			// variable name to assign to
			type : 'string'
		},
		defaultValue :
		{
			// default value
			type :
				require( './typemaps/astExpression' )
				.concat( [ 'undefined' ] )
		},
		json :
		{
			// include in JSON export/import
			type : 'boolean',
			defaultValue : 'false'
		},
		name :
		{
			// attribute name
			type : 'string'
		},
		prepare :
		{
			// attribute preparation code
			type : [ 'undefined', 'string' ]
		},
		id :
		{
			// attribute type id
			type : [ 'id', 'type_group' ]
		},
		varRef :
		{
			// attribute variable used in generate
			type : 'ast_var'
		}
	};
}


} );

