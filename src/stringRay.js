/*
| A ray of strings.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$stringRay',
		ray : [ 'string' ]
	};
}


/*
| Capsule.
*/
(function( ) {
'use strict';


var
	jion_stringRay;

jion_stringRay = require( './this' )( module, 'ouroboros' );


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
