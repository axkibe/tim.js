/*
| Ast; logical not expression.
*/
'use strict';


tim.define( module, ( def, ast_not ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		// the expression to negate
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
	return '!( ' +  recurse( this.expr ) + ' )';
};


} );
