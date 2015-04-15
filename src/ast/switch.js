/*
| Switch statements in abstract syntax trees.
*/


/*
| Capsule
*/
(function() {
'use strict';


/*
| The jion definition.
*/
if( JION )
{
	return{
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
				type : 'jion$ast_block',
				defaultValue : 'undefined'
			}
		},
		ray : [ 'jion$ast_case' ]
	};
}


var
	ast_block,
	ast_case,
	ast_switch,
	parser,
	prototype,
	tools;


ast_switch = require( '../this' )( module, 'ouroboros' );

prototype = ast_switch.prototype;

ast_block = require( './block' );

ast_case = require( './case' );

parser = require( '../jsParser/parser' );

tools = require( './tools' );


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
		args = Array.prototype.slice.apply( arguments );

		args.shift( );

		block = parser.parse.apply( parser, args );

		if( block.reflect !== 'ast_block' )
		{
			block = ast_block.create( ).append( block );
		}

		caseExpr =
			ast_case.create(
				'ray:append', parser.parse( coc ),
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
		code
	)
{
	var
		block;

	if( code.reflect === 'ast_block' )
	{
		block = code;
	}
	else
	{
		block = ast_block.create( ).append( tools.convert( code ) );
	}

	return this.create( 'defaultCase', block );
};


} )( );
