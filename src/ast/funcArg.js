/*
| A function argument to be generated
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_funcArg',
		attributes :
		{
			name :
			{
				comment : 'argument name',
				type : [ 'undefined', 'string' ]
			},
			comment :
			{
				comment : 'argument comment',
				type : [ 'undefined', 'string' ]
			}
		}
	};
}


/*
| Capsule
*/
(function() {
'use strict';


require( '../ouroboros' ).this( module );


} )( );
