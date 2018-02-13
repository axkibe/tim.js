/*
| Ast; if statement.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_if ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		condition : { type : tim.typemap( module, './expr' ) },

		then : { type : './block' },

		elsewise : { type : [ 'undefined', './block' ] }
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
	if( elsewise.timtype !== ast_block )
	{
		elsewise = ast_block.create( ).append( elsewise );
	}

	return this.create( 'elsewise', elsewise );
};


} );
