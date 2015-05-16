/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	jion$ast_condition;


if( NODE )
{
	jion$ast_condition = module.exports;
}
else
{
	jion$ast_condition = { };
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
	jion$ast_dot,
	jion$ast_equals,
	jion$ast_func,
	jion$ast_greaterThan,
	jion$ast_instanceof,
	jion$ast_lessThan,
	jion$ast_member,
	jion$ast_multiply,
	jion$ast_multiplyAssign,
	jion$ast_new,
	jion$ast_not,
	jion$ast_null,
	jion$ast_number,
	jion$ast_objLiteral,
	jion$ast_or,
	jion$ast_plus,
	jion$ast_plusAssign,
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

	jion$ast_delete = require( '../ast/delete' );

	jion$ast_differs = require( '../ast/differs' );

	jion$ast_dot = require( '../ast/dot' );

	jion$ast_equals = require( '../ast/equals' );

	jion$ast_func = require( '../ast/func' );

	jion$ast_greaterThan = require( '../ast/greaterThan' );

	jion$ast_instanceof = require( '../ast/instanceof' );

	jion$ast_lessThan = require( '../ast/lessThan' );

	jion$ast_member = require( '../ast/member' );

	jion$ast_multiply = require( '../ast/multiply' );

	jion$ast_multiplyAssign = require( '../ast/multiplyAssign' );

	jion$ast_new = require( '../ast/new' );

	jion$ast_not = require( '../ast/not' );

	jion$ast_null = require( '../ast/null' );

	jion$ast_number = require( '../ast/number' );

	jion$ast_objLiteral = require( '../ast/objLiteral' );

	jion$ast_or = require( '../ast/or' );

	jion$ast_plus = require( '../ast/plus' );

	jion$ast_plusAssign = require( '../ast/plusAssign' );

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
		v_condition, // the condition
		v_elsewise, // the else condition
		v_then // the then expression
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.condition = v_condition;

	this.elsewise = v_elsewise;

	this.then = v_then;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


jion$ast_condition.prototype = prototype;


/*
| Creates a new condition object.
*/
jion$ast_condition.create =
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
		v_condition,
		v_elsewise,
		v_then;

	if( this !== jion$ast_condition )
	{
		inherit = this;

		v_condition = this.condition;

		v_elsewise = this.elsewise;

		v_then = this.then;
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
			case 'condition' :

				if( arg !== pass )
				{
					v_condition = arg;
				}

				break;

			case 'elsewise' :

				if( arg !== pass )
				{
					v_elsewise = arg;
				}

				break;

			case 'then' :

				if( arg !== pass )
				{
					v_then = arg;
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
/**/		v_condition.reflect !== 'ast_multiply'
/**/		&&
/**/		v_condition.reflect !== 'ast_multiplyAssign'
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
/**/	if( v_elsewise === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_elsewise === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_elsewise.reflect !== 'ast_and'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_arrayLiteral'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_assign'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_boolean'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_call'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_comma'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_condition'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_delete'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_differs'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_dot'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_equals'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_func'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_greaterThan'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_instanceof'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_lessThan'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_member'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_multiply'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_new'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_not'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_null'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_number'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_objLiteral'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_or'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_plus'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_plusAssign'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_preIncrement'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_string'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_typeof'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_var'
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_then === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_then === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_then.reflect !== 'ast_and'
/**/		&&
/**/		v_then.reflect !== 'ast_arrayLiteral'
/**/		&&
/**/		v_then.reflect !== 'ast_assign'
/**/		&&
/**/		v_then.reflect !== 'ast_boolean'
/**/		&&
/**/		v_then.reflect !== 'ast_call'
/**/		&&
/**/		v_then.reflect !== 'ast_comma'
/**/		&&
/**/		v_then.reflect !== 'ast_condition'
/**/		&&
/**/		v_then.reflect !== 'ast_delete'
/**/		&&
/**/		v_then.reflect !== 'ast_differs'
/**/		&&
/**/		v_then.reflect !== 'ast_dot'
/**/		&&
/**/		v_then.reflect !== 'ast_equals'
/**/		&&
/**/		v_then.reflect !== 'ast_func'
/**/		&&
/**/		v_then.reflect !== 'ast_greaterThan'
/**/		&&
/**/		v_then.reflect !== 'ast_instanceof'
/**/		&&
/**/		v_then.reflect !== 'ast_lessThan'
/**/		&&
/**/		v_then.reflect !== 'ast_member'
/**/		&&
/**/		v_then.reflect !== 'ast_multiply'
/**/		&&
/**/		v_then.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_then.reflect !== 'ast_new'
/**/		&&
/**/		v_then.reflect !== 'ast_not'
/**/		&&
/**/		v_then.reflect !== 'ast_null'
/**/		&&
/**/		v_then.reflect !== 'ast_number'
/**/		&&
/**/		v_then.reflect !== 'ast_objLiteral'
/**/		&&
/**/		v_then.reflect !== 'ast_or'
/**/		&&
/**/		v_then.reflect !== 'ast_plus'
/**/		&&
/**/		v_then.reflect !== 'ast_plusAssign'
/**/		&&
/**/		v_then.reflect !== 'ast_preIncrement'
/**/		&&
/**/		v_then.reflect !== 'ast_string'
/**/		&&
/**/		v_then.reflect !== 'ast_typeof'
/**/		&&
/**/		v_then.reflect !== 'ast_var'
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_condition === inherit.condition
			||
			v_condition.equals( inherit.condition )
		)
		&&
		(
			v_elsewise === inherit.elsewise
			||
			v_elsewise.equals( inherit.elsewise )
		)
		&&
		(
			v_then === inherit.then
			||
			v_then.equals( inherit.then )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_condition, v_elsewise, v_then );
};


/*
| Reflection.
*/
prototype.reflect = 'ast_condition';


/*
| Name Reflection.
*/
prototype.reflectName = 'condition';


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

	if( obj.reflect !== 'ast_condition' )
	{
		return false;
	}

	return (
		(
			this.condition === obj.condition
			||
			this.condition.equals( obj.condition )
		)
		&&
		(
			this.elsewise === obj.elsewise
			||
			this.elsewise.equals( obj.elsewise )
		)
		&&
		(
			this.then === obj.then
			||
			this.then.equals( obj.then )
		)
	);
};


}
)( );
