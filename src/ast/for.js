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
				type : '->astExpression'
			},
			condition :
			{
				comment : 'the continue condition',
				type : '->astExpression'
			},
			iterate :
			{
				comment : 'the iteration expression',
				type : '->astExpression'
			},
			block :
			{
				comment : 'the for block',
				type : 'ast_block'
			}
		}
	};
}


require( '../jion/this' )( module, 'ouroboros' );


} )( );
