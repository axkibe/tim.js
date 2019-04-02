/*
| Ast; a generator function.
|
| Bootstrap shenanigans hinder this to extend ./func
*/
'use strict';


tim.define( module, ( def, ast_generator ) => {


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
def.proto.$arg =
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
