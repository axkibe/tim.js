/*
| Ast; > operator.
*/
'use strict';


tim.define( module, ( def, ast_greaterThan ) => {


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
		+ ' > ( ' +  recurse( this.right ) + ' )'
	);
};


} );
