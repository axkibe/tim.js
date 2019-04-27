/*
| Ast; switch statements.
*/
'use strict';


tim.define( module, ( def, ast_switch ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		// the statement expression
		statement : { type : [ '< ./types-expr' ] },

		// the default block
		defaultCase : { type : [ 'undefined', './block' ] }
	};

	// the case statements
	def.list = [ './case' ];
}


const ast_block = tim.require( './block' );

const ast_case = tim.require( './case' );

const parser = tim.require( '../parser/parser' );


/*
| Shortcut for appending a case to this switch.
*/
def.proto.$case =
	function(
		coc    // case_or_condition,
		// ... // block or expression
	)
{
	let caseExpr;

	if( coc.timtype !== ast_case )
	{
		const args = Array.prototype.slice.call( arguments );

		args.shift( );

		let block = parser.parseArray( args, 'statement' );

		if( block.timtype !== ast_block )
		{
			block = ast_block.create( ).append( block );
		}

		caseExpr =
			ast_case.create(
				'list:append', parser.parse( coc ),
				'block', block
			);
	}
	else
	{
		caseExpr = coc;
	}

	return this.append( caseExpr );
};


/*
| Shortcut for setting the default case.
*/
def.proto.$default =
	function(
		// ... parseable
	)
{
	let block = parser.parseArray( arguments, 'statement' );

	if( block.timtype !== ast_block )
	{
		block = ast_block.create( ).append( block );
	}

	return this.create( 'defaultCase', block );
};


/*
| Custom inspect.
*/
def.proto._inspect =
	function(
		recurse
	)
{
	return 'FIXME';
};


} );
