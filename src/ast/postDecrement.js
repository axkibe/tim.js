/*
| Ast; post decrement (x-- operator)
*/
'use strict';


tim.define( module, ( def, ast_postDecrement ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		// the expression to post-decrement
		expr : { type : [ '< ./types-expr' ] },
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
	return '( ' + recurse( this.expr ) + ' )--';
};


} );
