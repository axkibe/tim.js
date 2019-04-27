/*
| Ast, a pre increments (++x operator).
*/
'use strict';


tim.define( module, ( def, ast_preIncrement ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		// the expression to pre-increment
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
	return '++( ' + recurse( this.expr ) + ' )';
};


} );
