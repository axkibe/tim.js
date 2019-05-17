/*
| Generic interface for all types.
*/
'use strict';


tim.define( module, ( def, type_any ) => {


def.abstract = true;


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
		case 'boolean' : return type_boolean.singleton;

		case 'date' : return type_date.singleton;

		case 'integer' : return type_integer.singleton;

		case 'function' : return type_function.singleton;

		case 'null' : return type_null.singleton;

		case 'number' : return type_number.singleton;

		case 'protean' : return type_protean.singleton;

		case 'string' : return type_string.singleton;

		case 'undefined' : return type_undefined.singleton;

		default : throw new Error( );
	}
};


} );
