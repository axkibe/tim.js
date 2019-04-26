/*
| Ast; a new call.
*/
'use strict';


tim.define( module, ( def, ast_new ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		// the constructor call
		call : { type : './call' }
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
	return 'new ( ' +  recurse( this.call ) + ' )';
};


} );
