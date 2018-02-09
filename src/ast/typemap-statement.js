/*
| ast statements.
*/
module.exports =
	require( './typemap-expression' )
	.concat(
		[
		'ast_block',
		'ast_check',
		'ast_comment',
		'ast_const',
		'ast_continue',
		'ast_fail',
		'ast_for',
		'ast_forIn',
		'ast_if',
		'ast_let',
		'ast_return',
		'ast_switch',
		'ast_varDec',
		'ast_while'
		]
	);
