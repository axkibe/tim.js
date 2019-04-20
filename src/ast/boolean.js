/*
| A boolean literal (true or false).
*/
'use strict';


tim.define( module, ( def, ast_boolean ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		'boolean' : { type : 'boolean' },
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
	return this.boolean ? 'true' : 'false';
};


} );
