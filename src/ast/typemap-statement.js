/*
| ast statements.
*/
module.exports =
	require( './typemap-expr' )
	.concat( [
		'./block',
		'./check',
		'./comment',
		'./const',
		'./continue',
		'./fail',
		'./for',
		'./forIn',
		'./if',
		'./let',
		'./return',
		'./switch',
		'./varDec',
		'./while'
	] );
