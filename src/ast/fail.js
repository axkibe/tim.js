/*
| Ast; failures (error exceptions).
*/
'use strict';


tim.define( module, ( def, ast_fail ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		// the error message expression
		message : { type : [ '< ./types-expr', 'undefined' ] },
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
	if( this.message ) return 'throw new Error( ' + recurse( this.message ) + ' )';
	else return 'throw new Error( )';
};


} );
