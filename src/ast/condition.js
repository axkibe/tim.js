/*
| Conditional expressions in abstract syntax trees.
|
| In other words the questionmark semicolon operator.
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
		id : 'ast_condition',
		attributes :
		{
			condition :
			{
				comment : 'the condition',
				type : '->astExpression'
			},
			then :
			{
				comment : 'the then expression',
				type : '->astExpression'
			},
			elsewise :
			{
				comment : 'the else condition',
				type : '->astExpression'
			}
		}
	};
}


var
	ast_condition,
	prototype;

ast_condition = require( '../jion/this' )( module, 'ouroboros' );

prototype = ast_condition.prototype;


/*
| Creates a condition with the elsewise expression set.
*/
prototype.$elsewise =
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
prototype.walk =
	function(
		transform	// a function to be called for all
		//			// walked nodes.
	)
{
	var
		condition,
		then,
		elsewise;

	condition = this.condition.walk( transform );

	then = this.then.walk( transform );

	elsewise = this.elsewise.walk( transform );

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



/**/if( CHECK )
/**/{
/**/	var
/**/		util;
/**/
/**/	util = require( 'util' );
/**/
/***	/
****	| Custom inspect
****	/
***/	prototype.inspect =
/**/		function(
/**/			depth,
/**/			opts
/**/		)
/**/	{
/**/		var
/**/			postfix,
/**/			result;
/**/
/**/		if( !opts.ast )
/**/		{
/**/			result = 'ast{ ';
/**/
/**/			postfix = ' }';
/**/		}
/**/		else
/**/		{
/**/			result = postfix = '';
/**/		}
/**/
/**/		opts.ast = true;
/**/
/**/		result += '( ' +  util.inspect( this.condition, opts ) + ' )';
/**/
/**/		result += ' ? ';
/**/
/**/		result += '( ' +  util.inspect( this.then, opts ) + ' )';
/**/
/**/		result += ' : ';
/**/
/**/		result += '( ' +  util.inspect( this.elsewise, opts ) + ' )';
/**/
/**/		return result + postfix;
/**/	};
/**/}



} )( );
