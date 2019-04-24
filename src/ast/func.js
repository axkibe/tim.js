/*
| Ast; a function.
*/
'use strict';


tim.define( module, ( def, ast_func ) => {


def.extend = './node';


if( TIM )
{
	def.attributes =
	{
		// function code
		block : { type : [ 'undefined', './block' ] },
	};

	def.list = [ './funcArg' ];
}


const ast_funcArg = tim.require( './funcArg' );


/*
| Convenience shortcut.
|
| Returns the function with an argument appended.
*/
def.proto.$arg =
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


/*
| Custom inspect.
*/
def.proto._inspect =
	function(
		recurse
	)
{
	let text = 'function( ';

	if( this.length === 0 )
	{
		text += ')';
	}
	else
	{
		let first = true;

		for( let arg of this )
		{
			if( first ) first = false; else text += ', ';

			text += recurse( arg );
		}
	}

	return text + recurse( this.block );
};


} );
