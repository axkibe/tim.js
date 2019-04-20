/*
| Continues current loop.
*/
'use strict';


tim.define( module, ( def, ast_continue ) => {


def.extend = './node';


/*
| Custom inspect.
*/
def.proto._inspect =
	function(
		recurse
	)
{
	return 'continue';
};


} );
