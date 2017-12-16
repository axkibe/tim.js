/*
| For-in loops in abstract syntax trees.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_forIn',
		attributes :
		{
			variable :
			{
				comment : 'the loop variable',
				type : [ 'string', 'jion$ast_var' ]
			},
			object :
			{
				comment : 'the object expression to iterate over',
				type : require( '../typemaps/astExpression' )
			},
			block :
			{
				comment : 'the for block',
				type : 'jion$ast_block'
			}
		}
	};
}


/*
| Capsule
*/
(function() {
'use strict';


require( '../this' )( module, 'ouroboros' );


} )( );
