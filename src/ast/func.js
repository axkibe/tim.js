/*
| Ast; a function.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_func', ( def, ast_func ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		block :
		{
			// function code
			type : [ 'undefined', 'ast_block' ]
		},
		capsule :
		{
			// if true its the capsule
			// to be formatted a little different
			// FIXME remove!
			type : 'boolean',
			defaultValue : 'false'
		}
	};

	def.list = [ 'ast_funcArg' ];
}


const ast_funcArg = require( './funcArg' );


/*
| Convenience shortcut.
|
| Returns the function with an argument appended.
*/
def.func.$arg =
	function(
		name,
		comment
	)
{
	return(
		this.append(
			ast_funcArg.create(
				'name', name,
				'comment', comment
			)
		)
	);
};


} );
