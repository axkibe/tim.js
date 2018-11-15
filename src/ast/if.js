/*
| Ast; if statement.
*/
'use strict';


tim.ouroboros.define( module, ( def, ast_if ) => {


if( TIM )
{
	def.attributes =
	{
		condition : { type : [ '< ./types-expr' ] },

		then : { type : './block' },

		elsewise : { type : [ 'undefined', './block' ] }
	};
}


const ast_block = require( './block' );

const parser = require( '../parser/parser' );


/*
| Creates an if with the elsewise block set.
*/
def.func.$elsewise =
	function(
		// parseables
	)
{
	let elsewise = parser.parseArray( arguments );

	if( elsewise.timtype !== ast_block )
	{
		elsewise = ast_block.create( ).append( elsewise );
	}

	return this.create( 'elsewise', elsewise );
};


const util = require( 'util' );


/*
| Custom inspect
*/
def.func.inspect =
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
	}
	else
	{
		result = postfix = '';
	}

	opts.ast = true;

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
