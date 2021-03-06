/*
| Base of all ast nodes.
*/
'use strict';


tim.define( module, ( def ) => {


def.abstract = true;

const util = require( 'util' );


/*
| Custom inspect.
*/
def.inspect =
	function(
		depth,
		opts
	)
{
	let postfix;
	let result;

	if( !opts.ast )
	{
		result = 'ast{ ';
		postfix = ' }';
		opts = tim.copy( opts );
		opts.ast = true;
	}
	else
	{
		result = postfix = '';
	}

	// Calls the specific custom inspect.
	result += this._inspect( ( o  ) => util.inspect( o, opts ) );

	return result + postfix;
};


/*
| Default walk, this is an end node.
*/
def.proto.walk =
	function(
		transform	// a function to be called for all walked nodes.
	)
{
	return transform( this );
};


} );
