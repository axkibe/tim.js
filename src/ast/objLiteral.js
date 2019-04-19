/*
| Ast; object literal.
*/
'use strict';


tim.define( module, ( def, ast_objLiteral ) => {


if( TIM )
{
	def.twig = [ '< ./types-expr' ];
}


const parser = tim.require( '../parser/parser' );


/*
| Returns an object literal with a key-expr pair added.
*/
def.proto.add =
	function(
		key
		// ... parseables
	)
{
	const args = Array.prototype.slice.call( arguments );

	args.shift( );

	return this.create( 'twig:add', key, parser.parseArray( args, 'expr' ) );
};


const util = require( 'util' );


/*
| Custom inspect
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

	if( this.length === 0 )
	{
		result += '{ }';
	}
	else
	{
		result += '{ ';

		let first = true;

		for( let arg of this )
		{
			if( first ) first = false; else result += ', ';

			result += util.inspect( arg, opts );
		}

		result += ' }';
	}

	return result + postfix;
};


/*
| Walks the ast tree depth-first, pre-order
| creating a transformed copy.
*/
def.proto.walk =
	function(
		transform	// a function to be called for all walked nodes.
	)
{
	// FIXME actually walk through the objects
	return transform( this );
};


} );
