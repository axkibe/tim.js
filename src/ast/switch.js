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
		id : 'ast_switch',
		attributes :
		{
			statement :
			{
				comment : 'the statement expression',
				type : 'require( ../typemaps/astExpression )'
			},
			defaultCase :
			{
				comment : 'the default block',
				type : 'ast_block',
				defaultValue : 'undefined'
			}
		},
		ray : [ 'ast_case' ]
	};
}


var
	ast_block,
	ast_case,
	ast_switch,
	jools,
	prototype,
	tools;


ast_switch = require( '../this' )( module, 'ouroboros' );

prototype = ast_switch.prototype;

ast_block = require( './block' );

ast_case = require( './case' );

jools = require( '../jools/jools' ),

tools = require( './tools' ),


/*
| Shortcut for appending a case to this switch.
*/
prototype.$case =
	function(
		coc,   // case_or_condition,
		code   // block or expression
	)
{
	var
		block,
		caseExpr;

	if( code.reflect === 'ast_block' )
	{
		block = code;
	}
	else
	{
		block = ast_block.create( ).append( tools.convert( code ) );
	}

	if( coc.reflect !== 'ast_case' )
	{
		caseExpr =
			ast_case.create(
				'ray:append', tools.convert( coc ),
				'block', block
			);
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
