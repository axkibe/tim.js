/*
| Switch statements in abstract syntax trees.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_switch',
		attributes :
		{
			statement :
			{
				comment : 'the statement expression',
				type : require( '../typemaps/astExpression' )
			},
			defaultCase :
			{
				comment : 'the default block',
				type : [ 'undefined', 'jion$ast_block' ]
			}
		},
		list : [ 'jion$ast_case' ]
	};
}


/*
| Capsule
*/
(function() {
'use strict';


var
	ast_block,
	ast_case,
	ast_switch,
	parser,
	prototype;


ast_switch = require( '../ouroboros' ).this( module );

prototype = ast_switch.prototype;

ast_block = require( './block' );

ast_case = require( './case' );

parser = require( '../jsParser/parser' );


/*
| Shortcut for appending a case to this switch.
*/
prototype.$case =
	function(
		coc    // case_or_condition,
		// ... // block or expression
	)
{
	var
		args,
		block,
		caseExpr;

	if( coc.reflect !== 'ast_case' )
	{
		args = Array.prototype.slice.call( arguments );

		args.shift( );

		block = parser.parseArray( args );

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
prototype.$default =
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


} )( );
