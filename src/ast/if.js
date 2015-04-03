/*
| Optional checks for abstact syntax tree.
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
		id : 'ast_if',
		attributes :
		{
			condition :
			{
				comment : 'the if condition',
				type : '->astExpression'
			},
			then :
			{
				comment : 'the then code',
				type : 'ast_block'
			},
			elsewise :
			{
				comment : 'the else wise',
				type : 'ast_block',
				defaultValue : 'undefined'
			}
		}
	};
}


var
	ast_block,
	ast_if,
	prototype;

ast_if = require( '../jion/this' )( module, 'ouroboros' );

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
