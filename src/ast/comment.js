/*
| A comment in an abstract syntax tree.
*/
'use strict';


tim.define( module, ( def, ast_comment ) => {


def.extend = './node';


if( TIM )
{
	def.list = [ 'string' ];
}


/*
| Custom inspect.
*/
def.proto._inspect =
	function(
		recurse
	)
{
	let result = '';

	for( let s of this ) result += '/* ' + s + ' */';

	return result;
};


} );
