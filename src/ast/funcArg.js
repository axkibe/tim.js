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
		id : 'ast_funcArg',
		attributes :
		{
			name :
			{
				comment : 'argument name',
				type : 'string',
				defaultValue : 'undefined',
				allowsNull : true
			},
			comment :
			{
				comment : 'argument comment',
				type : 'string',
				defaultValue : 'undefined',
				allowsNull : true
			}
		}
	};
}


require( '../this' )( module, 'ouroboros' );


} )( );
