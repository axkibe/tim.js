/*
| Ast; a string literal.
*/
'use strict';


tim.define( module, ( def, ast_string ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		string : { type : 'string' }
	};
}


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
	return '"' + this.string + '"';
};


} );
