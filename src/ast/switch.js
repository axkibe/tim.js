/*
| Ast; switch statements.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_switch ) => {


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


const ast_block = require( './block' );

const ast_case = require( './case' );

const parser = require( '../jsParser/parser' );


/*
| Shortcut for appending a case to this switch.
*/
def.func.$case =
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

		let block = parser.parseArray( args );

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
def.func.$default =
	function(
		// ... parseable
	)
{
	let block = parser.parseArray( arguments );

	if( block.timtype !== ast_block )
	{
		block = ast_block.create( ).append( block );
	}

	return this.create( 'defaultCase', block );
};


} );
