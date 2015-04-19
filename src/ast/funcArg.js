/*
| A function argument to be generated
*/


/*
| Capsule
*/
(function() {
'use strict';


/*
| The jion definition.
*/
if( JION )
{
	return{
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


require( '../this' )( module, 'ouroboros' );


} )( );
