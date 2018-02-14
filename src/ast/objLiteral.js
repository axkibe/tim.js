/*
| Ast; object literal.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_objLiteral ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.twig = tim.typemap( module, './expr' );
}


const parser = require( '../jsParser/parser' );


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
	}
	else
	{
		result = postfix = '';
	}

	opts.ast = true;

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
