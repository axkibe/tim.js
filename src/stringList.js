/*
| A list of strings.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$stringList',
		list : [ 'string' ]
	};
}


/*
| Capsule.
*/
(function( ) {
'use strict';


var
	jion_stringList;

jion_stringList = require( './ouroboros' ).this( module );


/*
| Shorthand function
*/
jion_stringList.stringList =
	function(
		array
	)
{
	return jion_stringList.create( 'list:init', array );
};


} )( );
