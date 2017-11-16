/*
| Optional checks for abstact syntax tree.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_if',
		attributes :
		{
			condition :
			{
				comment : 'the if condition',
				type : require( '../typemaps/astExpression' )
			},
			then :
			{
				comment : 'the then code',
				type : 'jion$ast_block'
			},
			elsewise :
			{
				comment : 'the else wise',
				type : [ 'undefined', 'jion$ast_block' ]
			}
		}
	};
}


/*
| Capsule
*/
(function() {
'use strict';


var
	ast_block,
	ast_if,
	prototype;

ast_if = require( '../ouroboros' ).this( module );

prototype = ast_if.prototype;

ast_block = require( './block' );


/*
| Creates an if with the elsewise block set.
*/
ast_if.prototype.$elsewise =
	function(
		elsewise
	)
{
	if( elsewise.reflect !== 'ast_block' )
	{
		elsewise = ast_block.create( ).append( elsewise );
	}

	return this.create( 'elsewise', elsewise );
};


} )( );
