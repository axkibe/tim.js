/*
| Ast; return statement.
*/
'use strict';


tim.define( module, ( def, ast_return ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		// the expression to return
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
	return 'return ( ' + recurse( this.expr ) + ' )';
};


} );
