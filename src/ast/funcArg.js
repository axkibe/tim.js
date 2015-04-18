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
				type : 'string',
				defaultValue : 'undefined'
			},
			comment :
			{
				comment : 'argument comment',
				type : 'string',
				defaultValue : 'undefined'
			}
		}
	};
}


require( '../this' )( module, 'ouroboros' );


} )( );
