/*
| Generic interface for all types.
*/
'use strict';


tim.define( module, ( def, type_any ) => {


const type_boolean = tim.require( './boolean' );

const type_date = tim.require( './date' );

const type_function = tim.require( './function' );

const type_integer = tim.require( './integer' );

const type_null = tim.require( './null' );

const type_number = tim.require( './number' );

const type_protean = tim.require( './protean' );

const type_undefined = tim.require( './undefined' );

const type_string = tim.require( './string' );

const type_tim = tim.require( './tim' );


/*
| Create the type from a string specifier.
*/
def.static.createFromString =
	function(
		str
	)
{
	if( str.indexOf( '/' ) >= 0 ) return type_tim.createFromPath( str.split( '/' ) );

	switch( str )
	{
		case 'boolean' : return type_boolean.create( );

		case 'date' : return type_date.create( );

		case 'integer' : return type_integer.create( );

		case 'function' : return type_function.create( );

		case 'null' : return type_null.create( );

		case 'number' : return type_number.create( );

		case 'protean' : return type_protean.create( );

		case 'string' : return type_string.create( );

		case 'undefined' : return type_undefined.create( );

		default : throw new Error( );
	}
};


} );
