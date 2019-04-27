/*
| A null to be generated.
*/
'use strict';


tim.define( module, ( def, ast_null ) => {


def.extend = './node';


/*
| Walks the ast tree depth-first, pre-order
| creating a transformed copy.
*/
def.proto.walk =
	function(
		transform	// a function to be called for all walked nodes.
	)
{
	return transform( this );
};


/*
| Custom inspect.
*/
def.proto._inspect =
	function(
		recurse
	)
{
	return 'null';
};


} );
