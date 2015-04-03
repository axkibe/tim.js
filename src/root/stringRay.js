/*
| A ray of strings.
*/


/*
| Capsule.
*/
(function( ) {
'use strict';


/*
| The jion definition.
*/
if( JION )
{
	return {
		id :
			'jion_stringRay',
		ray :
			[ 'string' ]
	};
}


var
	jion_stringRay;

jion_stringRay = require( '../jion/this' )( module );


/*
| Shorthand function
*/
jion_stringRay.stringRay =
	function(
		array
	)
{
	return jion_stringRay.create( 'ray:init', array );
};


} )( );
