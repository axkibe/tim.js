/*
| Ast, minus assignment ( -= )
*/
'use strict';


tim.define( module, ( def, ast_minusAssign ) => {


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
		+ ' -= ( ' +  recurse( this.right ) + ' )'
	);
};


} );
