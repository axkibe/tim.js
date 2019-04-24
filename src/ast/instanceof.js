/*
| Ast; test if left is an instance of right.
*/
'use strict';


tim.define( module, ( def, ast_instanceof ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		left : { type : [ '< ./types-expr' ] },

		right : { type : [ '< ./types-expr' ] },
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
		'( ' + recurse( this.left ) + ' )'
		+ ' instanceof ( ' +  recurse( this.right ) + ' )'
	);
};


} );
