/*
| A function.
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
		id : 'jion$ast_func',
		attributes :
		{
			block :
			{
				comment : 'function code',
				type : 'jion$ast_block',
				defaultValue : 'undefined'
			},
			capsule :
			{
				comment : 'if true its the capsule',
				// to be formatted a little different
				type : 'boolean',
				defaultValue : 'false'
			}
		},
		ray : [ 'jion$ast_funcArg' ]
	};
}


var
	ast_funcArg,
	ast_func;


ast_func = require( '../this' )( module, 'ouroboros' );

ast_funcArg = require( './funcArg' );

/*
| Convenience shortcut.
|
| Returns the function with an argument appended.
*/
ast_func.prototype.$arg =
	function(
		name,
		comment
	)
{
	return(
		this.append(
			ast_funcArg.create(
				'name', name,
				'comment', comment
			)
		)
	);
};


} )( );
