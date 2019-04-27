/*
| Ast; a number literal.
*/
'use strict';


tim.define( module, ( def, ast_number ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		number : { type : 'number' }
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
	return '' + this.number;
};


} );
