/*
| Ast; a yield keyword.
*/
'use strict';


tim.define( module, ( def, ast_yield ) => {


if( TIM )
{
	def.attributes =
	{
		// the expression to yield
		expr : { type : [ '< ./types-expr' ] }
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
	return 'yield ( ' +  recurse( this.expr ) + ' )';
};


} );
