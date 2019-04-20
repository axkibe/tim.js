/*
| Case statements in abstract syntax trees.
*/
'use strict';


tim.define( module, ( def, ast_case ) => {


def.extend = './node';


if( TIM )
{

	def.attributes =
	{
		// the statement
		block : { type : './block' }
	};

	// list of case values
	def.list =  [ '< ./types-expr' ];
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

	for( let e of this ) result += 'case ' + recurse( e ) + ': ';

	return result + recurse( this.block );
};


} );
