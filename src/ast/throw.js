/*
| Ast; throw statement.
*/
'use strict';


tim.define( module, ( def, ast_throw ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		// the expression to throw
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
	return 'throw ( ' +  recurse( this.expr ) + ' )';
};


} );
