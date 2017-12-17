/*
| A call in an abstract syntax tree.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_call', ( def, ast_call ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		func : { type : require( '../typemaps/astExpression' ) },
	};

	def.list = require( '../typemaps/astExpression' );
}


const parser = require( '../jsParser/parser' );


/*
| Returns a call with a parameter appended
*/
def.func.$argument =
	function(
		// parseables
	)
{
	return this.append( parser.parseArray( arguments ) );
};


/*
| Walks the ast tree depth-first, pre-order
| creating a transformed copy.
*/
def.func.walk =
	function(
		transform	// a function to be called for all
		//			// walked nodes.
	)
{
	const func = this.func.walk( transform );

	const args = [ ];

	for( let a = 0, aZ = this.length; a < aZ; a++ )
	{
		args[ a ] = this.get( a ).walk( transform );
	}

	return(
		transform(
			this.create( 'func', func, 'list:init', args )
		)
	);
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

	result += '( ' +  util.inspect( this.func, opts ) + ' )';

	if( this.length === 0 )
	{
		result += '( )';
	}
	else
	{
		result += '( ';

		for( let r = 0, rZ = this.length; r < rZ; r++ )
		{
			const arg = this.get( r );

			if( r > 0 ) result += ', ';

			result += util.inspect( arg, opts );
		}

		result += ' )';
	}

	return result + postfix;
};

} );
