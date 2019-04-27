/*
| Ast; pre increments.
*/
'use strict';


tim.define( module, ( def, ast_preDecrement ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		// the expression to pre-decrement
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
	return '--( ' + recurse( this.expr ) + ' )';
};



} );
