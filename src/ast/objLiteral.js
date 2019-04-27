/*
| Ast; object literal.
*/
'use strict';


tim.define( module, ( def, ast_objLiteral ) => {


def.extend = './node';


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


/*
| Custom inspect.
*/
def.proto._inspect =
	function(
		recurse
	)
{
	if( this.length === 0 ) return '{ }';

	let result = '{ ';

	let first = true;

	for( let key of this.keys )
	{
		if( first ) first = false; else result += ', ';

		const arg = this.get( key );

		result += key + ' : ' + recurse( arg );
	}

	return result + ' }';
};


} );
