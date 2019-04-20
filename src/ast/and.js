/*
| Ast; logical and operation.
*/
'use strict';


tim.define( module, ( def, ast_and ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		left : { type : [ '< ./types-expr' ] },

		right : { type : [ '< ./types-expr' ] },
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
	const left = this.left.walk( transform );

	const right = this.right.walk( transform );

	return transform( this.create( 'left', left, 'right', right ) );
};



/*
| Custom inspect.
*/
def.proto._inspect =
	function(
		recurse
	)
{
	return(
		'( ' +  recurse( this.left ) + ' )'
		+ ' && ( ' +  recurse( this.right ) + ' )'
	);
};


} );
