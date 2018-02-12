/*
| Generic interface for all types.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'type_any', ( def, type_any ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


const id = require( '../id' );

const type_boolean = require( './boolean' );

const type_date = require( './date' );

const type_function = require( './function' );

const type_integer = require( './integer' );

const type_null = require( './null' );

const type_number = require( './number' );

const type_undefined = require( './undefined' );

const type_string = require( './string' );

const type_tim = require( './tim' );


/*
| Create the id from a string specifier.
*/
def.static.createFromString =
	function(
		str
	)
{
	if( str.indexOf( '/' ) >= 0 ) return type_tim.createFromString( str );

	switch( str )
	{
		case 'boolean' : return type_boolean.create( );

		case 'date' : return type_date.create( );

		case 'integer' : return type_integer.create( );

		case 'function' : return type_function.create( );

		case 'null' : return type_null.create( );

		case 'number' : return type_number.create( );

		case 'string' : return type_string.create( );

		case 'undefined' : return type_undefined.create( );

		default : return id.createFromString( str );
	}
};


} );

