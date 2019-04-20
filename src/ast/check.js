/*
| Optional checks in abstract syntax trees.
*/
'use strict';


tim.define( module, ( def, ast_check ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		// the code block',
		block : { type : './block' },
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
	let result = 'if( CHECK ) { ';

	for( let s of this ) result += recurse( s ) + '; ';

	return result + '} ';
};

} );
