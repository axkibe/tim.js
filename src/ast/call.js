/*
| A call in an abstract syntax tree.
*/
'use strict';


tim.define( module, ( def, ast_call ) => {


if( TIM )
{
	def.attributes =
	{
		// the expression yielding a function to call
		func : { type : [ '< ./types-expr' ] },
	};

	// the arguments
	def.list = [ '< ./types-expr' ];
}


const parser = tim.require( '../parser/parser' );


/*
| Returns a call with a parameter appended
*/
def.proto.$argument =
	function(
		// parseables
	)
{
	return this.append( parser.parseArray( arguments, 'expr' ) );
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
	const func = this.func.walk( transform );

	const args = [ ];

	for( let a = 0, al = this.length; a < al; a++ )
	{
		args[ a ] = this.get( a ).walk( transform );
	}

	return transform( this.create( 'func', func, 'list:init', args ) );
};


const util = require( 'util' );

/*
| Custom inspect
*/
def.proto.inspect =
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

	result += '( ' +  util.inspect( this.func, opts ) + ' )';

	if( this.length === 0 )
	{
		result += '( )';
	}
	else
	{
		result += '( ';

		let first = true;

		for( let arg of this )
		{
			if( first ) first = false; else result += ', ';

			result += util.inspect( arg, opts );
		}

		result += ' )';
	}

	return result + postfix;
};


} );
