/*
| ast statements.
*/
module.exports =
	require( './astExpression' )
	.concat(
		[
		'jion$ast_block',
		'jion$ast_check',
		'jion$ast_comment',
		'jion$ast_const',
		'jion$ast_continue',
		'jion$ast_fail',
		'jion$ast_for',
		'jion$ast_forIn',
		'jion$ast_if',
		'jion$ast_let',
		'jion$ast_return',
		'jion$ast_switch',
		'jion$ast_varDec'
		]
	);
