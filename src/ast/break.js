/*
| Ast; const variable declarations.
*/
'use strict';


tim.define( module, ( def, ast_break ) => {


def.extend = './node';

def.singleton = true;


/*
| Custom inspect.
*/
def.proto._inspect =
	function(
		recurse
	)
{
	return 'break';
};


} );
