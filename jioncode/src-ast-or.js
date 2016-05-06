/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	jion$ast_or;


if( NODE )
{
	jion$ast_or = module.exports;
}
else
{
	jion$ast_or = { };
}


var
	jion$ast_and,
	jion$ast_arrayLiteral,
	jion$ast_assign,
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
		v_left, // left expression
		v_right // right expression
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.left = v_left;

	this.right = v_right;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


jion$ast_or.prototype = prototype;


/*
| Creates a new or object.
*/
jion$ast_or.create =
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
		v_left,
		v_right;

	if( this !== jion$ast_or )
	{
		inherit = this;

		v_left = this.left;

		v_right = this.right;
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
			case 'left' :

				if( arg !== pass )
				{
					v_left = arg;
				}

				break;

			case 'right' :

				if( arg !== pass )
				{
					v_right = arg;
				}

				break;

			default :

/**/			if( CHECK )
/**/			{
/**/				throw new Error( );
/**/			}
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_left === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_left === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_left.reflect !== 'ast_and'
/**/		&&
/**/		v_left.reflect !== 'ast_arrayLiteral'
/**/		&&
/**/		v_left.reflect !== 'ast_assign'
/**/		&&
/**/		v_left.reflect !== 'ast_boolean'
/**/		&&
/**/		v_left.reflect !== 'ast_call'
/**/		&&
/**/		v_left.reflect !== 'ast_comma'
/**/		&&
/**/		v_left.reflect !== 'ast_condition'
/**/		&&
/**/		v_left.reflect !== 'ast_delete'
/**/		&&
/**/		v_left.reflect !== 'ast_differs'
/**/		&&
/**/		v_left.reflect !== 'ast_divide'
/**/		&&
/**/		v_left.reflect !== 'ast_divideAssign'
/**/		&&
/**/		v_left.reflect !== 'ast_dot'
/**/		&&
/**/		v_left.reflect !== 'ast_equals'
/**/		&&
/**/		v_left.reflect !== 'ast_func'
/**/		&&
/**/		v_left.reflect !== 'ast_greaterThan'
/**/		&&
/**/		v_left.reflect !== 'ast_instanceof'
/**/		&&
/**/		v_left.reflect !== 'ast_lessThan'
/**/		&&
/**/		v_left.reflect !== 'ast_member'
/**/		&&
/**/		v_left.reflect !== 'ast_minus'
/**/		&&
/**/		v_left.reflect !== 'ast_minusAssign'
/**/		&&
/**/		v_left.reflect !== 'ast_multiply'
/**/		&&
/**/		v_left.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_left.reflect !== 'ast_negate'
/**/		&&
/**/		v_left.reflect !== 'ast_new'
/**/		&&
/**/		v_left.reflect !== 'ast_not'
/**/		&&
/**/		v_left.reflect !== 'ast_null'
/**/		&&
/**/		v_left.reflect !== 'ast_number'
/**/		&&
/**/		v_left.reflect !== 'ast_objLiteral'
/**/		&&
/**/		v_left.reflect !== 'ast_or'
/**/		&&
/**/		v_left.reflect !== 'ast_plus'
/**/		&&
/**/		v_left.reflect !== 'ast_plusAssign'
/**/		&&
/**/		v_left.reflect !== 'ast_postDecrement'
/**/		&&
/**/		v_left.reflect !== 'ast_postIncrement'
/**/		&&
/**/		v_left.reflect !== 'ast_preDecrement'
/**/		&&
/**/		v_left.reflect !== 'ast_preIncrement'
/**/		&&
/**/		v_left.reflect !== 'ast_string'
/**/		&&
/**/		v_left.reflect !== 'ast_typeof'
/**/		&&
/**/		v_left.reflect !== 'ast_var'
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_right === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_right === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_right.reflect !== 'ast_and'
/**/		&&
/**/		v_right.reflect !== 'ast_arrayLiteral'
/**/		&&
/**/		v_right.reflect !== 'ast_assign'
/**/		&&
/**/		v_right.reflect !== 'ast_boolean'
/**/		&&
/**/		v_right.reflect !== 'ast_call'
/**/		&&
/**/		v_right.reflect !== 'ast_comma'
/**/		&&
/**/		v_right.reflect !== 'ast_condition'
/**/		&&
/**/		v_right.reflect !== 'ast_delete'
/**/		&&
/**/		v_right.reflect !== 'ast_differs'
/**/		&&
/**/		v_right.reflect !== 'ast_divide'
/**/		&&
/**/		v_right.reflect !== 'ast_divideAssign'
/**/		&&
/**/		v_right.reflect !== 'ast_dot'
/**/		&&
/**/		v_right.reflect !== 'ast_equals'
/**/		&&
/**/		v_right.reflect !== 'ast_func'
/**/		&&
/**/		v_right.reflect !== 'ast_greaterThan'
/**/		&&
/**/		v_right.reflect !== 'ast_instanceof'
/**/		&&
/**/		v_right.reflect !== 'ast_lessThan'
/**/		&&
/**/		v_right.reflect !== 'ast_member'
/**/		&&
/**/		v_right.reflect !== 'ast_minus'
/**/		&&
/**/		v_right.reflect !== 'ast_minusAssign'
/**/		&&
/**/		v_right.reflect !== 'ast_multiply'
/**/		&&
/**/		v_right.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_right.reflect !== 'ast_negate'
/**/		&&
/**/		v_right.reflect !== 'ast_new'
/**/		&&
/**/		v_right.reflect !== 'ast_not'
/**/		&&
/**/		v_right.reflect !== 'ast_null'
/**/		&&
/**/		v_right.reflect !== 'ast_number'
/**/		&&
/**/		v_right.reflect !== 'ast_objLiteral'
/**/		&&
/**/		v_right.reflect !== 'ast_or'
/**/		&&
/**/		v_right.reflect !== 'ast_plus'
/**/		&&
/**/		v_right.reflect !== 'ast_plusAssign'
/**/		&&
/**/		v_right.reflect !== 'ast_postDecrement'
/**/		&&
/**/		v_right.reflect !== 'ast_postIncrement'
/**/		&&
/**/		v_right.reflect !== 'ast_preDecrement'
/**/		&&
/**/		v_right.reflect !== 'ast_preIncrement'
/**/		&&
/**/		v_right.reflect !== 'ast_string'
/**/		&&
/**/		v_right.reflect !== 'ast_typeof'
/**/		&&
/**/		v_right.reflect !== 'ast_var'
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_left === inherit.left
			||
			v_left.equals( inherit.left )
		)
		&&
		(
			v_right === inherit.right
			||
			v_right.equals( inherit.right )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_left, v_right );
};


/*
| Reflection.
*/
prototype.reflect = 'ast_or';


/*
| Name Reflection.
*/
prototype.reflectName = 'or';


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

	if( obj.reflect !== 'ast_or' )
	{
		return false;
	}

	return (
		(
			this.left === obj.left
			||
			this.left.equals( obj.left )
		)
		&&
		(
			this.right === obj.right
			||
			this.right.equals( obj.right )
		)
	);
};


}
)( );
