/*
| Ast; if statement.
*/
'use strict';


tim.define( module, ( def, ast_if ) => {


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


const util = require( 'util' );


/*
| Custom inspect.
*/
def.inspect =
	function(
		depth,
		opts
	)
{
	let postfix;

	let result;

	if( !opts.ast )
	{
		result = 'ast{ ';

		postfix = ' }';

		opts = tim.copy( opts );

		opts.ast = true;
	}
	else
	{
		result = postfix = '';
	}

	result +=
		'if( '
		+ util.inspect( this.condition, opts )
		+ ' ) '
		+ util.inspect( this.then, opts ) + ' ';

	if( this.elsewise )
	{
		result += 'else ' + util.inspect( this.elsewise, opts ) + ' ';
	}

	return result + postfix;
};


} );
