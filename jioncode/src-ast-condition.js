/*
| This is an auto generated file.
|
| DO NOT EDIT!
*/


/*
| Export.
*/
var
	ast_condition;


if( SERVER )
{
	ast_condition = module.exports;
}
else
{
	ast_condition = { };
}


/*
| Imports.
*/
var
	jools,
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
	jools = require( '../../src/jools/jools' );

	ast_and = require( '../../src/ast/and' );

	ast_arrayLiteral = require( '../../src/ast/arrayLiteral' );

	ast_assign = require( '../../src/ast/assign' );

	ast_boolean = require( '../../src/ast/boolean' );

	ast_call = require( '../../src/ast/call' );

	ast_comma = require( '../../src/ast/comma' );

	ast_delete = require( '../../src/ast/delete' );

	ast_differs = require( '../../src/ast/differs' );

	ast_dot = require( '../../src/ast/dot' );

	ast_equals = require( '../../src/ast/equals' );

	ast_func = require( '../../src/ast/func' );

	ast_greaterThan = require( '../../src/ast/greaterThan' );

	ast_instanceof = require( '../../src/ast/instanceof' );

	ast_lessThan = require( '../../src/ast/lessThan' );

	ast_member = require( '../../src/ast/member' );

	ast_multiply = require( '../../src/ast/multiply' );

	ast_multiplyAssign = require( '../../src/ast/multiplyAssign' );

	ast_new = require( '../../src/ast/new' );

	ast_not = require( '../../src/ast/not' );

	ast_null = require( '../../src/ast/null' );

	ast_number = require( '../../src/ast/number' );

	ast_objLiteral = require( '../../src/ast/objLiteral' );

	ast_or = require( '../../src/ast/or' );

	ast_plus = require( '../../src/ast/plus' );

	ast_plusAssign = require( '../../src/ast/plusAssign' );

	ast_preIncrement = require( '../../src/ast/preIncrement' );

	ast_string = require( '../../src/ast/string' );

	ast_typeof = require( '../../src/ast/typeof' );

	ast_var = require( '../../src/ast/var' );

	jion_proto = require( '../../src/jion/proto' );
}


/*
| Abstract constructor.
*/
var
	AbstractConstructor;


AbstractConstructor =
	function(
		v_condition, // the condition
		v_elsewise, // the else condition
		v_then // the then expression
	)
{
	if( v_condition !== undefined )
	{
		this.condition = v_condition;
	}

	if( v_elsewise !== undefined )
	{
		this.elsewise = v_elsewise;
	}

	if( v_then !== undefined )
	{
		this.then = v_then;
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
		v_condition, // the condition
		v_elsewise, // the else condition
		v_then // the then expression
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
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


ast_condition.prototype = prototype;


/*
| Creates an condition object.
*/
ast_condition.abstract =
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
		v_condition,
		v_elsewise,
		v_then;

	if( this !== ast_condition )
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
/**/	if( v_condition === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_condition !== undefined )
/**/	{
/**/		if(
/**/			v_condition.reflect !== 'ast_and'
/**/			&&
/**/			v_condition.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_condition.reflect !== 'ast_assign'
/**/			&&
/**/			v_condition.reflect !== 'ast_boolean'
/**/			&&
/**/			v_condition.reflect !== 'ast_call'
/**/			&&
/**/			v_condition.reflect !== 'ast_comma'
/**/			&&
/**/			v_condition.reflect !== 'ast_condition'
/**/			&&
/**/			v_condition.reflect !== 'ast_delete'
/**/			&&
/**/			v_condition.reflect !== 'ast_differs'
/**/			&&
/**/			v_condition.reflect !== 'ast_dot'
/**/			&&
/**/			v_condition.reflect !== 'ast_equals'
/**/			&&
/**/			v_condition.reflect !== 'ast_func'
/**/			&&
/**/			v_condition.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_condition.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_condition.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_condition.reflect !== 'ast_member'
/**/			&&
/**/			v_condition.reflect !== 'ast_multiply'
/**/			&&
/**/			v_condition.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_condition.reflect !== 'ast_new'
/**/			&&
/**/			v_condition.reflect !== 'ast_not'
/**/			&&
/**/			v_condition.reflect !== 'ast_null'
/**/			&&
/**/			v_condition.reflect !== 'ast_number'
/**/			&&
/**/			v_condition.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_condition.reflect !== 'ast_or'
/**/			&&
/**/			v_condition.reflect !== 'ast_plus'
/**/			&&
/**/			v_condition.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_condition.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_condition.reflect !== 'ast_string'
/**/			&&
/**/			v_condition.reflect !== 'ast_typeof'
/**/			&&
/**/			v_condition.reflect !== 'ast_var'
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_elsewise === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_elsewise !== undefined )
/**/	{
/**/		if(
/**/			v_elsewise.reflect !== 'ast_and'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_assign'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_boolean'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_call'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_comma'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_condition'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_delete'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_differs'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_dot'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_equals'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_func'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_member'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_multiply'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_new'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_not'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_null'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_number'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_or'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_plus'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_string'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_typeof'
/**/			&&
/**/			v_elsewise.reflect !== 'ast_var'
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_then === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_then !== undefined )
/**/	{
/**/		if(
/**/			v_then.reflect !== 'ast_and'
/**/			&&
/**/			v_then.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_then.reflect !== 'ast_assign'
/**/			&&
/**/			v_then.reflect !== 'ast_boolean'
/**/			&&
/**/			v_then.reflect !== 'ast_call'
/**/			&&
/**/			v_then.reflect !== 'ast_comma'
/**/			&&
/**/			v_then.reflect !== 'ast_condition'
/**/			&&
/**/			v_then.reflect !== 'ast_delete'
/**/			&&
/**/			v_then.reflect !== 'ast_differs'
/**/			&&
/**/			v_then.reflect !== 'ast_dot'
/**/			&&
/**/			v_then.reflect !== 'ast_equals'
/**/			&&
/**/			v_then.reflect !== 'ast_func'
/**/			&&
/**/			v_then.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_then.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_then.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_then.reflect !== 'ast_member'
/**/			&&
/**/			v_then.reflect !== 'ast_multiply'
/**/			&&
/**/			v_then.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_then.reflect !== 'ast_new'
/**/			&&
/**/			v_then.reflect !== 'ast_not'
/**/			&&
/**/			v_then.reflect !== 'ast_null'
/**/			&&
/**/			v_then.reflect !== 'ast_number'
/**/			&&
/**/			v_then.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_then.reflect !== 'ast_or'
/**/			&&
/**/			v_then.reflect !== 'ast_plus'
/**/			&&
/**/			v_then.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_then.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_then.reflect !== 'ast_string'
/**/			&&
/**/			v_then.reflect !== 'ast_typeof'
/**/			&&
/**/			v_then.reflect !== 'ast_var'
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
			v_condition === inherit.condition
			||
			v_condition !== undefined && v_condition.equals( inherit.condition )
		)
		&&
		(
			v_elsewise === inherit.elsewise
			||
			v_elsewise !== undefined && v_elsewise.equals( inherit.elsewise )
		)
		&&
		(
			v_then === inherit.then
			||
			v_then !== undefined && v_then.equals( inherit.then )
		)
	)
	{
		return inherit;
	}

	return new AbstractConstructor( v_condition, v_elsewise, v_then );
};


/*
| Creates a new condition object.
*/
ast_condition.create =
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
		v_condition,
		v_elsewise,
		v_then;

	if( this !== ast_condition )
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
			v_condition.equals && v_condition.equals( inherit.condition )
		)
		&&
		(
			v_elsewise === inherit.elsewise
			||
			v_elsewise.equals && v_elsewise.equals( inherit.elsewise )
		)
		&&
		(
			v_then === inherit.then
			||
			v_then.equals && v_then.equals( inherit.then )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_condition, v_elsewise, v_then );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'ast_condition:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'condition:abstract';


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
			this.condition.equals && this.condition.equals( obj.condition )
		)
		&&
		(
			this.elsewise === obj.elsewise
			||
			this.elsewise.equals && this.elsewise.equals( obj.elsewise )
		)
		&&
		(
			this.then === obj.then
			||
			this.then.equals && this.then.equals( obj.then )
		)
	);
};


}
)( );
