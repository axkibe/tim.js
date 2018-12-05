/*
| Ast; const variable declarations.
*/
'use strict';


tim.define( module, ( def, ast_break ) => {


/*
| Custom inspect
*/
def.func.inspect =
	function(
		depth,
		opts
	)
{
	return(
		( opts.ast ? '' : 'ast{ ' )
		+ 'break'
		+ ( opts.ast ? '' : ' }' )
	);
};


} );
