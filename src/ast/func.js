/*
| Ast; a function.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_func ) => {


if( TIM )
{
	def.attributes =
	{
		// function code
		block :
		{
			type : [ 'undefined', './block' ]
		},
	};

	def.list = [ './funcArg' ];
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
