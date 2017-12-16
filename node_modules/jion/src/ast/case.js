/*
| Case statements in abstract syntax trees.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_case',
		attributes :
		{
			block :
			{
				comment : 'the statement',
				type : 'jion$ast_block'
			}
		},
		list : require( '../typemaps/astExpression' )
	};
}



/*
| Capsule
*/
(function() {
'use strict';


require( '../this' )( module, 'ouroboros' );


} )( );
