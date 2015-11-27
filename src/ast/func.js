/*
| A function.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$ast_func',
		attributes :
		{
			block :
			{
				comment : 'function code',
				type : [ 'undefined', 'jion$ast_block' ]
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


/*
| Capsule
*/
(function() {
'use strict';


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
