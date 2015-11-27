/*
| Classical for loops for abstract syntax trees.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_for',
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
