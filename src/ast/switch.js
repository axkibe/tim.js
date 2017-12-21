/*
| Ast; switch statements.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'ast_switch', ( def, ast_switch ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		statement :
		{
			// the statement expression
			type : require( '../typemaps/astExpression' )
		},
		defaultCase :
		{
			// the default block
			type : [ 'undefined', 'jion$ast_block' ]
		}
	};

	// the case statements
	def.list = [ 'jion$ast_case' ];
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

	if( coc.reflect !== 'ast_case' )
	{
		const args = Array.prototype.slice.call( arguments );

		args.shift( );

		let block = parser.parseArray( args );

		if( block.reflect !== 'ast_block' )
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
	var
		block;

	block = parser.parseArray( arguments );

	if( block.reflect !== 'ast_block' )
	{
		block = ast_block.create( ).append( block );
	}

	return this.create( 'defaultCase', block );
};


} );
