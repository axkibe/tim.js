/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	jion$ast_for;


if( NODE )
{
	jion$ast_for = module.exports;
}
else
{
	jion$ast_for = { };
}


var
	jion$ast_and,
	jion$ast_arrayLiteral,
	jion$ast_assign,
	jion$ast_block,
	jion$ast_boolean,
	jion$ast_call,
	jion$ast_comma,
	jion$ast_condition,
	jion$ast_delete,
	jion$ast_differs,
	jion$ast_divide,
	jion$ast_divideAssign,
	jion$ast_dot,
	jion$ast_equals,
	jion$ast_func,
	jion$ast_greaterThan,
	jion$ast_instanceof,
	jion$ast_lessThan,
	jion$ast_member,
	jion$ast_minus,
	jion$ast_minusAssign,
	jion$ast_multiply,
	jion$ast_multiplyAssign,
	jion$ast_negate,
	jion$ast_new,
	jion$ast_not,
	jion$ast_null,
	jion$ast_number,
	jion$ast_objLiteral,
	jion$ast_or,
	jion$ast_plus,
	jion$ast_plusAssign,
	jion$ast_postDecrement,
	jion$ast_postIncrement,
	jion$ast_preDecrement,
	jion$ast_preIncrement,
	jion$ast_string,
	jion$ast_typeof,
	jion$ast_var,
	jion_proto;


/*
| Capsule
*/
(
function( ) {
'use strict';


/*
| Node includes.
*/
if( NODE )
{
	jion$ast_and = require( '../ast/and' );

	jion$ast_arrayLiteral = require( '../ast/arrayLiteral' );

	jion$ast_assign = require( '../ast/assign' );

	jion$ast_block = require( '../ast/block' );

	jion$ast_boolean = require( '../ast/boolean' );

	jion$ast_call = require( '../ast/call' );

	jion$ast_comma = require( '../ast/comma' );

	jion$ast_condition = require( '../ast/condition' );

	jion$ast_delete = require( '../ast/delete' );

	jion$ast_differs = require( '../ast/differs' );

	jion$ast_divide = require( '../ast/divide' );

	jion$ast_divideAssign = require( '../ast/divideAssign' );

	jion$ast_dot = require( '../ast/dot' );

	jion$ast_equals = require( '../ast/equals' );

	jion$ast_func = require( '../ast/func' );

	jion$ast_greaterThan = require( '../ast/greaterThan' );

	jion$ast_instanceof = require( '../ast/instanceof' );

	jion$ast_lessThan = require( '../ast/lessThan' );

	jion$ast_member = require( '../ast/member' );

	jion$ast_minus = require( '../ast/minus' );

	jion$ast_minusAssign = require( '../ast/minusAssign' );

	jion$ast_multiply = require( '../ast/multiply' );

	jion$ast_multiplyAssign = require( '../ast/multiplyAssign' );

	jion$ast_negate = require( '../ast/negate' );

	jion$ast_new = require( '../ast/new' );

	jion$ast_not = require( '../ast/not' );

	jion$ast_null = require( '../ast/null' );

	jion$ast_number = require( '../ast/number' );

	jion$ast_objLiteral = require( '../ast/objLiteral' );

	jion$ast_or = require( '../ast/or' );

	jion$ast_plus = require( '../ast/plus' );

	jion$ast_plusAssign = require( '../ast/plusAssign' );

	jion$ast_postDecrement = require( '../ast/postDecrement' );

	jion$ast_postIncrement = require( '../ast/postIncrement' );

	jion$ast_preDecrement = require( '../ast/preDecrement' );

	jion$ast_preIncrement = require( '../ast/preIncrement' );

	jion$ast_string = require( '../ast/string' );

	jion$ast_typeof = require( '../ast/typeof' );

	jion$ast_var = require( '../ast/var' );

	require( '../proto' );
}


/*
| Constructor.
*/
var
	Constructor,
	prototype;


Constructor =
	function(
		v_block, // the for block
		v_condition, // the continue condition
		v_init, // the initialization
		v_iterate // the iteration expression
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.block = v_block;

	this.condition = v_condition;

	this.init = v_init;

	this.iterate = v_iterate;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


jion$ast_for.prototype = prototype;


/*
| Creates a new for object.
*/
jion$ast_for.create =
prototype.create =
	function(
		// free strings
	)
{
	var
		a,
		aZ,
		arg,
		inherit,
		v_block,
		v_condition,
		v_init,
		v_iterate;

	if( this !== jion$ast_for )
	{
		inherit = this;

		v_block = this.block;

		v_condition = this.condition;

		v_init = this.init;

		v_iterate = this.iterate;
	}

	for(
		a = 0, aZ = arguments.length;
		a < aZ;
		a += 2
	)
	{
		arg = arguments[ a + 1 ];

		switch( arguments[ a ] )
		{
			case 'block' :

				if( arg !== pass )
				{
					v_block = arg;
				}

				break;

			case 'condition' :

				if( arg !== pass )
				{
					v_condition = arg;
				}

				break;

			case 'init' :

				if( arg !== pass )
				{
					v_init = arg;
				}

				break;

			case 'iterate' :

				if( arg !== pass )
				{
					v_iterate = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_block === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_block === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_block.reflect !== 'ast_block' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_condition === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_condition === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_condition.reflect !== 'ast_and'
/**/		&&
/**/		v_condition.reflect !== 'ast_arrayLiteral'
/**/		&&
/**/		v_condition.reflect !== 'ast_assign'
/**/		&&
/**/		v_condition.reflect !== 'ast_boolean'
/**/		&&
/**/		v_condition.reflect !== 'ast_call'
/**/		&&
/**/		v_condition.reflect !== 'ast_comma'
/**/		&&
/**/		v_condition.reflect !== 'ast_condition'
/**/		&&
/**/		v_condition.reflect !== 'ast_delete'
/**/		&&
/**/		v_condition.reflect !== 'ast_differs'
/**/		&&
/**/		v_condition.reflect !== 'ast_divide'
/**/		&&
/**/		v_condition.reflect !== 'ast_divideAssign'
/**/		&&
/**/		v_condition.reflect !== 'ast_dot'
/**/		&&
/**/		v_condition.reflect !== 'ast_equals'
/**/		&&
/**/		v_condition.reflect !== 'ast_func'
/**/		&&
/**/		v_condition.reflect !== 'ast_greaterThan'
/**/		&&
/**/		v_condition.reflect !== 'ast_instanceof'
/**/		&&
/**/		v_condition.reflect !== 'ast_lessThan'
/**/		&&
/**/		v_condition.reflect !== 'ast_member'
/**/		&&
/**/		v_condition.reflect !== 'ast_minus'
/**/		&&
/**/		v_condition.reflect !== 'ast_minusAssign'
/**/		&&
/**/		v_condition.reflect !== 'ast_multiply'
/**/		&&
/**/		v_condition.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_condition.reflect !== 'ast_negate'
/**/		&&
/**/		v_condition.reflect !== 'ast_new'
/**/		&&
/**/		v_condition.reflect !== 'ast_not'
/**/		&&
/**/		v_condition.reflect !== 'ast_null'
/**/		&&
/**/		v_condition.reflect !== 'ast_number'
/**/		&&
/**/		v_condition.reflect !== 'ast_objLiteral'
/**/		&&
/**/		v_condition.reflect !== 'ast_or'
/**/		&&
/**/		v_condition.reflect !== 'ast_plus'
/**/		&&
/**/		v_condition.reflect !== 'ast_plusAssign'
/**/		&&
/**/		v_condition.reflect !== 'ast_postDecrement'
/**/		&&
/**/		v_condition.reflect !== 'ast_postIncrement'
/**/		&&
/**/		v_condition.reflect !== 'ast_preDecrement'
/**/		&&
/**/		v_condition.reflect !== 'ast_preIncrement'
/**/		&&
/**/		v_condition.reflect !== 'ast_string'
/**/		&&
/**/		v_condition.reflect !== 'ast_typeof'
/**/		&&
/**/		v_condition.reflect !== 'ast_var'
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_init === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_init === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_init.reflect !== 'ast_and'
/**/		&&
/**/		v_init.reflect !== 'ast_arrayLiteral'
/**/		&&
/**/		v_init.reflect !== 'ast_assign'
/**/		&&
/**/		v_init.reflect !== 'ast_boolean'
/**/		&&
/**/		v_init.reflect !== 'ast_call'
/**/		&&
/**/		v_init.reflect !== 'ast_comma'
/**/		&&
/**/		v_init.reflect !== 'ast_condition'
/**/		&&
/**/		v_init.reflect !== 'ast_delete'
/**/		&&
/**/		v_init.reflect !== 'ast_differs'
/**/		&&
/**/		v_init.reflect !== 'ast_divide'
/**/		&&
/**/		v_init.reflect !== 'ast_divideAssign'
/**/		&&
/**/		v_init.reflect !== 'ast_dot'
/**/		&&
/**/		v_init.reflect !== 'ast_equals'
/**/		&&
/**/		v_init.reflect !== 'ast_func'
/**/		&&
/**/		v_init.reflect !== 'ast_greaterThan'
/**/		&&
/**/		v_init.reflect !== 'ast_instanceof'
/**/		&&
/**/		v_init.reflect !== 'ast_lessThan'
/**/		&&
/**/		v_init.reflect !== 'ast_member'
/**/		&&
/**/		v_init.reflect !== 'ast_minus'
/**/		&&
/**/		v_init.reflect !== 'ast_minusAssign'
/**/		&&
/**/		v_init.reflect !== 'ast_multiply'
/**/		&&
/**/		v_init.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_init.reflect !== 'ast_negate'
/**/		&&
/**/		v_init.reflect !== 'ast_new'
/**/		&&
/**/		v_init.reflect !== 'ast_not'
/**/		&&
/**/		v_init.reflect !== 'ast_null'
/**/		&&
/**/		v_init.reflect !== 'ast_number'
/**/		&&
/**/		v_init.reflect !== 'ast_objLiteral'
/**/		&&
/**/		v_init.reflect !== 'ast_or'
/**/		&&
/**/		v_init.reflect !== 'ast_plus'
/**/		&&
/**/		v_init.reflect !== 'ast_plusAssign'
/**/		&&
/**/		v_init.reflect !== 'ast_postDecrement'
/**/		&&
/**/		v_init.reflect !== 'ast_postIncrement'
/**/		&&
/**/		v_init.reflect !== 'ast_preDecrement'
/**/		&&
/**/		v_init.reflect !== 'ast_preIncrement'
/**/		&&
/**/		v_init.reflect !== 'ast_string'
/**/		&&
/**/		v_init.reflect !== 'ast_typeof'
/**/		&&
/**/		v_init.reflect !== 'ast_var'
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_iterate === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_iterate === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_iterate.reflect !== 'ast_and'
/**/		&&
/**/		v_iterate.reflect !== 'ast_arrayLiteral'
/**/		&&
/**/		v_iterate.reflect !== 'ast_assign'
/**/		&&
/**/		v_iterate.reflect !== 'ast_boolean'
/**/		&&
/**/		v_iterate.reflect !== 'ast_call'
/**/		&&
/**/		v_iterate.reflect !== 'ast_comma'
/**/		&&
/**/		v_iterate.reflect !== 'ast_condition'
/**/		&&
/**/		v_iterate.reflect !== 'ast_delete'
/**/		&&
/**/		v_iterate.reflect !== 'ast_differs'
/**/		&&
/**/		v_iterate.reflect !== 'ast_divide'
/**/		&&
/**/		v_iterate.reflect !== 'ast_divideAssign'
/**/		&&
/**/		v_iterate.reflect !== 'ast_dot'
/**/		&&
/**/		v_iterate.reflect !== 'ast_equals'
/**/		&&
/**/		v_iterate.reflect !== 'ast_func'
/**/		&&
/**/		v_iterate.reflect !== 'ast_greaterThan'
/**/		&&
/**/		v_iterate.reflect !== 'ast_instanceof'
/**/		&&
/**/		v_iterate.reflect !== 'ast_lessThan'
/**/		&&
/**/		v_iterate.reflect !== 'ast_member'
/**/		&&
/**/		v_iterate.reflect !== 'ast_minus'
/**/		&&
/**/		v_iterate.reflect !== 'ast_minusAssign'
/**/		&&
/**/		v_iterate.reflect !== 'ast_multiply'
/**/		&&
/**/		v_iterate.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_iterate.reflect !== 'ast_negate'
/**/		&&
/**/		v_iterate.reflect !== 'ast_new'
/**/		&&
/**/		v_iterate.reflect !== 'ast_not'
/**/		&&
/**/		v_iterate.reflect !== 'ast_null'
/**/		&&
/**/		v_iterate.reflect !== 'ast_number'
/**/		&&
/**/		v_iterate.reflect !== 'ast_objLiteral'
/**/		&&
/**/		v_iterate.reflect !== 'ast_or'
/**/		&&
/**/		v_iterate.reflect !== 'ast_plus'
/**/		&&
/**/		v_iterate.reflect !== 'ast_plusAssign'
/**/		&&
/**/		v_iterate.reflect !== 'ast_postDecrement'
/**/		&&
/**/		v_iterate.reflect !== 'ast_postIncrement'
/**/		&&
/**/		v_iterate.reflect !== 'ast_preDecrement'
/**/		&&
/**/		v_iterate.reflect !== 'ast_preIncrement'
/**/		&&
/**/		v_iterate.reflect !== 'ast_string'
/**/		&&
/**/		v_iterate.reflect !== 'ast_typeof'
/**/		&&
/**/		v_iterate.reflect !== 'ast_var'
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_block === inherit.block
			||
			v_block.equals( inherit.block )
		)
		&&
		(
			v_condition === inherit.condition
			||
			v_condition.equals( inherit.condition )
		)
		&&
		(
			v_init === inherit.init
			||
			v_init.equals( inherit.init )
		)
		&&
		(
			v_iterate === inherit.iterate
			||
			v_iterate.equals( inherit.iterate )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_block, v_condition, v_init, v_iterate );
};


/*
| Reflection.
*/
prototype.reflect = 'ast_for';


/*
| Name Reflection.
*/
prototype.reflectName = 'for';


/*
| Sets values by path.
*/
prototype.setPath = jion_proto.setPath;


/*
| Gets values by path
*/
prototype.getPath = jion_proto.getPath;


/*
| Tests equality of object.
*/
prototype.equals =
	function(
		obj // object to compare to
	)
{
	if( this === obj )
	{
		return true;
	}

	if( !obj )
	{
		return false;
	}

	if( obj.reflect !== 'ast_for' )
	{
		return false;
	}

	return (
		(
			this.block === obj.block
			||
			this.block.equals( obj.block )
		)
		&&
		(
			this.condition === obj.condition
			||
			this.condition.equals( obj.condition )
		)
		&&
		(
			this.init === obj.init
			||
			this.init.equals( obj.init )
		)
		&&
		(
			this.iterate === obj.iterate
			||
			this.iterate.equals( obj.iterate )
		)
	);
};


}
)( );
