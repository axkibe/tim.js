/*
| Classical for loops for abstract syntax trees.
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
	return {
		id : 'ast_for',
		attributes :
		{
			init :
			{
				comment : 'the initialization',
				type : require( '../typemaps/astExpression' )
			},
			condition :
			{
				comment : 'the continue condition',
				type : require( '../typemaps/astExpression' )
			},
			iterate :
			{
				comment : 'the iteration expression',
				type : require( '../typemaps/astExpression' )
			},
			block :
			{
				comment : 'the for block',
				type : 'ast_block'
			}
		}
	};
}


require( '../this' )( module, 'ouroboros' );


} )( );
