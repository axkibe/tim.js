/*
| Ast; if statement.
*/
'use strict';


tim.define( module, ( def, ast_if ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		condition : { type : [ '< ./types-expr' ] },

		then : { type : './block' },

		elsewise : { type : [ 'undefined', './block' ] }
	};
}


const ast_block = tim.require( './block' );

const parser = tim.require( '../parser/parser' );


/*
| Creates an if with the elsewise block set.
*/
def.proto.$elsewise =
	function(
		// parseables
	)
{
	let elsewise = parser.parseArray( arguments, 'statement' );

	if( elsewise.timtype !== ast_block )
	{
		elsewise = ast_block.create( ).append( elsewise );
	}

	return this.create( 'elsewise', elsewise );
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
		'if( '
		+ recurse( this.condition )
		+ ' ) ' + recurse( this.then )
		+ ( this.elsewise ? 'else ' + recurse( this.elsewise ) : '' )
		+ ' '
	);
};


} );
