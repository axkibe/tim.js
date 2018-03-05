/*
| Conditional expressions in abstract syntax trees.
|
| In other words the questionmark semicolon operator.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, ast_condition ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{

	def.attributes =
	{
		condition : { type : [ '< ./types-expr' ] },

		then : { type : [ '< ./types-expr' ] },

		elsewise : { type : [ '< ./types-expr' ] },
	};
}


/*
| Creates a condition with the elsewise expression set.
*/
def.func.$elsewise =
	function(
		expr
	)
{
	return this.create( 'elsewise', expr );
};


/*
| Walks the ast tree depth-first, pre-order
| creating a transformed copy.
*/
def.func.walk =
	function(
		transform	// a function to be called for all
		//			// walked nodes.
	)
{
	const condition = this.condition.walk( transform );

	const then = this.then.walk( transform );

	const elsewise = this.elsewise.walk( transform );

	return(
		transform(
			this.create(
				'condition', condition,
				'then', then,
				'elsewise', elsewise
			)
		)
	);
};


const util = require( 'util' );


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

	result += '( ' +  util.inspect( this.condition, opts ) + ' )';

	result += ' ? ';

	result += '( ' +  util.inspect( this.then, opts ) + ' )';

	result += ' : ';

	result += '( ' +  util.inspect( this.elsewise, opts ) + ' )';

	return result + postfix;
};


} );
