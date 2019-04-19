/*
| Ast; a function.
*/
'use strict';


tim.define( module, ( def, ast_func ) => {


if( TIM )
{
	def.attributes =
	{
		// function code
		block : { type : [ 'undefined', './block' ] },
	};

	def.list = [ './funcArg' ];
}


const ast_funcArg = tim.require( './funcArg' );


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
