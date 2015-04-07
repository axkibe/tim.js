/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	ast_plus;


if( SERVER )
{
	ast_plus = module.exports;
}
else
{
	ast_plus = { };
}


var
	ast_and,
	ast_arrayLiteral,
	ast_assign,
	ast_boolean,
	ast_call,
	ast_comma,
	ast_condition,
	ast_delete,
	ast_differs,
	ast_dot,
	ast_equals,
	ast_func,
	ast_greaterThan,
	ast_instanceof,
	ast_lessThan,
	ast_member,
	ast_multiply,
	ast_multiplyAssign,
	ast_new,
	ast_not,
	ast_null,
	ast_number,
	ast_objLiteral,
	ast_or,
	ast_plus,
	ast_plusAssign,
	ast_preIncrement,
	ast_string,
	ast_typeof,
	ast_var,
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
if( SERVER )
{
	ast_and = require( '../ast/and' );

	ast_arrayLiteral = require( '../ast/arrayLiteral' );

	ast_assign = require( '../ast/assign' );

	ast_boolean = require( '../ast/boolean' );

	ast_call = require( '../ast/call' );

	ast_comma = require( '../ast/comma' );

	ast_condition = require( '../ast/condition' );

	ast_delete = require( '../ast/delete' );

	ast_differs = require( '../ast/differs' );

	ast_dot = require( '../ast/dot' );

	ast_equals = require( '../ast/equals' );

	ast_func = require( '../ast/func' );

	ast_greaterThan = require( '../ast/greaterThan' );

	ast_instanceof = require( '../ast/instanceof' );

	ast_lessThan = require( '../ast/lessThan' );

	ast_member = require( '../ast/member' );

	ast_multiply = require( '../ast/multiply' );

	ast_multiplyAssign = require( '../ast/multiplyAssign' );

	ast_new = require( '../ast/new' );

	ast_not = require( '../ast/not' );

	ast_null = require( '../ast/null' );

	ast_number = require( '../ast/number' );

	ast_objLiteral = require( '../ast/objLiteral' );

	ast_or = require( '../ast/or' );

	ast_plusAssign = require( '../ast/plusAssign' );

	ast_preIncrement = require( '../ast/preIncrement' );

	ast_string = require( '../ast/string' );

	ast_typeof = require( '../ast/typeof' );

	ast_var = require( '../ast/var' );

	require( '../proto' );
}


/*
| Abstract constructor.
*/
var
	AbstractConstructor;


AbstractConstructor =
	function(
		v_left, // left expression
		v_right // right expression
	)
{
	if( v_left !== undefined )
	{
		this.left = v_left;
	}

	if( v_right !== undefined )
	{
		this.right = v_right;
	}

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


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
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
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


ast_plus.prototype = prototype;


/*
| Creates an plus object.
*/
ast_plus.abstract =
AbstractConstructor.prototype.abstract =
prototype.abstract =
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

	if( this !== ast_plus )
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
/**/	if( v_left === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_left !== undefined )
/**/	{
/**/		if(
/**/			v_left.reflect !== 'ast_and'
/**/			&&
/**/			v_left.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_left.reflect !== 'ast_assign'
/**/			&&
/**/			v_left.reflect !== 'ast_boolean'
/**/			&&
/**/			v_left.reflect !== 'ast_call'
/**/			&&
/**/			v_left.reflect !== 'ast_comma'
/**/			&&
/**/			v_left.reflect !== 'ast_condition'
/**/			&&
/**/			v_left.reflect !== 'ast_delete'
/**/			&&
/**/			v_left.reflect !== 'ast_differs'
/**/			&&
/**/			v_left.reflect !== 'ast_dot'
/**/			&&
/**/			v_left.reflect !== 'ast_equals'
/**/			&&
/**/			v_left.reflect !== 'ast_func'
/**/			&&
/**/			v_left.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_left.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_left.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_left.reflect !== 'ast_member'
/**/			&&
/**/			v_left.reflect !== 'ast_multiply'
/**/			&&
/**/			v_left.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_left.reflect !== 'ast_new'
/**/			&&
/**/			v_left.reflect !== 'ast_not'
/**/			&&
/**/			v_left.reflect !== 'ast_null'
/**/			&&
/**/			v_left.reflect !== 'ast_number'
/**/			&&
/**/			v_left.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_left.reflect !== 'ast_or'
/**/			&&
/**/			v_left.reflect !== 'ast_plus'
/**/			&&
/**/			v_left.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_left.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_left.reflect !== 'ast_string'
/**/			&&
/**/			v_left.reflect !== 'ast_typeof'
/**/			&&
/**/			v_left.reflect !== 'ast_var'
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_right === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_right !== undefined )
/**/	{
/**/		if(
/**/			v_right.reflect !== 'ast_and'
/**/			&&
/**/			v_right.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_right.reflect !== 'ast_assign'
/**/			&&
/**/			v_right.reflect !== 'ast_boolean'
/**/			&&
/**/			v_right.reflect !== 'ast_call'
/**/			&&
/**/			v_right.reflect !== 'ast_comma'
/**/			&&
/**/			v_right.reflect !== 'ast_condition'
/**/			&&
/**/			v_right.reflect !== 'ast_delete'
/**/			&&
/**/			v_right.reflect !== 'ast_differs'
/**/			&&
/**/			v_right.reflect !== 'ast_dot'
/**/			&&
/**/			v_right.reflect !== 'ast_equals'
/**/			&&
/**/			v_right.reflect !== 'ast_func'
/**/			&&
/**/			v_right.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_right.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_right.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_right.reflect !== 'ast_member'
/**/			&&
/**/			v_right.reflect !== 'ast_multiply'
/**/			&&
/**/			v_right.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_right.reflect !== 'ast_new'
/**/			&&
/**/			v_right.reflect !== 'ast_not'
/**/			&&
/**/			v_right.reflect !== 'ast_null'
/**/			&&
/**/			v_right.reflect !== 'ast_number'
/**/			&&
/**/			v_right.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_right.reflect !== 'ast_or'
/**/			&&
/**/			v_right.reflect !== 'ast_plus'
/**/			&&
/**/			v_right.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_right.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_right.reflect !== 'ast_string'
/**/			&&
/**/			v_right.reflect !== 'ast_typeof'
/**/			&&
/**/			v_right.reflect !== 'ast_var'
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_left === inherit.left
			||
			v_left !== undefined && v_left.equals( inherit.left )
		)
		&&
		(
			v_right === inherit.right
			||
			v_right !== undefined && v_right.equals( inherit.right )
		)
	)
	{
		return inherit;
	}

	return new AbstractConstructor( v_left, v_right );
};


/*
| Creates a new plus object.
*/
ast_plus.create =
AbstractConstructor.prototype.create =
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

	if( this !== ast_plus )
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
/**/		v_left.reflect !== 'ast_multiply'
/**/		&&
/**/		v_left.reflect !== 'ast_multiplyAssign'
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
/**/		v_right.reflect !== 'ast_multiply'
/**/		&&
/**/		v_right.reflect !== 'ast_multiplyAssign'
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
			v_left.equals && v_left.equals( inherit.left )
		)
		&&
		(
			v_right === inherit.right
			||
			v_right.equals && v_right.equals( inherit.right )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_left, v_right );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'ast_plus:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'plus:abstract';


/*
| Reflection.
*/
prototype.reflect = 'ast_plus';


/*
| Name Reflection.
*/
prototype.reflectName = 'plus';


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

	if( obj.reflect !== 'ast_plus' )
	{
		return false;
	}

	return (
		(
			this.left === obj.left
			||
			this.left.equals && this.left.equals( obj.left )
		)
		&&
		(
			this.right === obj.right
			||
			this.right.equals && this.right.equals( obj.right )
		)
	);
};


}
)( );
