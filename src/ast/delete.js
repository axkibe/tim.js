/*
| A call to delete.
*/
'use strict';


tim.define( module, ( def, ast_delete ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		// the expression to delete
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
	return 'delete ( ' +  recurse( this.expr ) + ' )';
};


} );
