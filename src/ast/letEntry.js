/*
| Ast; variable declarations.
*/
'use strict';


tim.define( module, ( def, ast_letEntry ) => {


if( TIM )
{
	def.attributes =
	{
		// variable name
		name : { type : 'string' },

		// assignment of variable
		assign : { type : [ '< ./types-expr', 'undefined' ] },
	};
}


const util = require( 'util' );


/*
| Custom inspect.
*/
def.inspect =
	function(
		depth,
		opts
	)
{
	let postfix;

	let result;

	if( !opts.ast )
	{
		result = 'ast{ letEntry ';

		postfix = ' }';

		opts = tim.proto.copy( opts );

		opts.ast = true;
	}
	else
	{
		result = postfix = '';
	}

	result += this.name;

	if( this.assign )
	{
		result += ' = ( ' + util.inspect( this.assign, opts ) + ' )';
	}

	return result + postfix;
};


} );
