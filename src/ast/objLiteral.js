/*
| Ast; object literal.
*/
'use strict';


tim.ouroboros.define( module, ( def, ast_objLiteral ) => {


if( TIM )
{
	def.twig = [ '< ./types-expr' ];
}


const parser = require( '../parser/parser' );


/*
| Returns an object literal with a key-expr pair added.
*/
def.func.add =
	function(
		key
		// ... parseables
	)
{
	const args = Array.prototype.slice.call( arguments );

	args.shift( );

	return this.create( 'twig:add', key, parser.parseArray( args ) );
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

		opts = tim.proto.copy( opts );

		opts.ast = true;
	}
	else
	{
		result = postfix = '';
	}

	if( this.length === 0 )
	{
		result += '{ }';
	}
	else
	{
		result += '{ ';

		for( let r = 0, rZ = this.length; r < rZ; r++ )
		{
			const arg = this.atRank( r );

			if( r > 0 ) result += ', ';

			result += util.inspect( arg, opts );
		}

		result += ' }';
	}

	return result + postfix;
};


} );
