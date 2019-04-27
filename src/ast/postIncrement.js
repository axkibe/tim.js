/*
| Ast; a post increment (x++).
*/
'use strict';


tim.define( module, ( def, ast_postIncrement ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		// the expression to post-increment
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
	return '( ' + recurse( this.expr ) + ' )++';
};


} );
