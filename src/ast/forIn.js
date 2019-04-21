/*
| Ast; a for-in loop
*/
'use strict';


tim.define( module, ( def, ast_forIn ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		// the loop variable
		variable : { type : './var' },

		// true if the for loop variable has a let
		letVar : { type : 'boolean' },

		// the object expression to iterate over
		object : { type : [ '< ./types-expr' ] },

		// the loop block
		block : { type : './block' },
	};
}


/*
| Custom inspect.
*/
def.proto._inspect =
	function(
		recurse
	)
{
	return(
		'for( '
		+ ( this.letVar ? 'let ' : '' ) + recurse( this.variable )
		+ ' in ( ' + recurse( this.object ) + ' ) )'
		+ recurse( this.block ) + ' '
	);
};


} );
