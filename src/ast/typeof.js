/*
| Ast; a typeof of an expression.
*/
'use strict';


tim.define( module, ( def, ast_typeof ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		// the expression to get the type of
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
	return 'typeof( ' + recurse( this.expr ) + ' )';
};


} );
