/*
| A variable reference to be generated.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_var ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		// the variable name
		name : { type : 'string' }
	};

	def.check = true;
}


const parser = require( '../jsParser/parser' );

const ast_dot = require( './dot' );

const ast_member = require( './member' );


/**
*** Exta checking
***/
/**/if( CHECK )
/**/{
/**/	def.func._check =
/**/		function( )
/**/	{
/**/		const regex = /^([a-zA-Z_$])([a-zA-Z0-9_$])*$/;
/**/
/**/		if( !regex.test( this.name ) )
/**/		{
/**/			throw new Error( 'invalid variable name' );
/**/		}
/**/
/**/		switch( this.name )
/**/		{
/**/			case 'true' :
/**/			case 'false' :
/**/
/**/				throw new Error( 'var must not be a literal' );
/**/		}
/**/	};
/**/}


/*
| Creates a dot member access of a variable.
*/
def.func.$dot =
	function(
		member // member string
	)
{
	// checking if member is a string is done in 'ast_dot.create'

	return ast_dot.create( 'expr', this, 'member', member );
};


/*
| Creates a generic member access of a variable.
*/
def.func.$member =
	function(
		// parseables
	)
{
	return(
		ast_member.create(
			'expr', this,
			'member', parser.parseArray( arguments )
		)
	);
};


/*
| Walks the ast tree depth-first, pre-order
| creating a transformed copy.
*/
def.func.walk =
	function(
		transform	// a function to be called for all walked nodes.
	)
{
	return transform( this );
};


/*
| Custom inspect
*/
def.func.inspect =
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
	}
	else
	{
		result = postfix = '';
	}

	opts.ast = true;

	result += this.name;

	return result + postfix;
};


} );

