/*
| Ast; if statement.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_if', ( def, ast_if ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		condition : { type : require( '../typemaps/astExpression' ) },

		then : { type : 'jion$ast_block' },

		elsewise : { type : [ 'undefined', 'jion$ast_block' ] }
	};
}


const ast_block = require( './block' );


/*
| Creates an if with the elsewise block set.
*/
def.func.$elsewise =
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


} );
