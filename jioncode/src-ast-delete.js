/*
| This is an auto generated file.
|
| DO NOT EDIT!
*/


/*
| Export.
*/
var
	ast_delete;


if( SERVER )
{
	ast_delete = module.exports;
}
else
{
	ast_delete = { };
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

	ast_condition = require( '../../src/ast/condition' );

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
		v_expr // the expression to delete
	)
{
	if( v_expr !== undefined )
	{
		this.expr = v_expr;
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
		v_expr // the expression to delete
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
	}

	this.expr = v_expr;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


ast_delete.prototype = prototype;


/*
| Creates an delete object.
*/
ast_delete.abstract =
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
		v_expr;

	if( this !== ast_delete )
	{
		inherit = this;

		v_expr = this.expr;
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
			case 'expr' :

				if( arg !== pass )
				{
					v_expr = arg;
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
/**/	if( v_expr === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_expr !== undefined )
/**/	{
/**/		if(
/**/			v_expr.reflect !== 'ast_and'
/**/			&&
/**/			v_expr.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_expr.reflect !== 'ast_assign'
/**/			&&
/**/			v_expr.reflect !== 'ast_boolean'
/**/			&&
/**/			v_expr.reflect !== 'ast_call'
/**/			&&
/**/			v_expr.reflect !== 'ast_comma'
/**/			&&
/**/			v_expr.reflect !== 'ast_condition'
/**/			&&
/**/			v_expr.reflect !== 'ast_delete'
/**/			&&
/**/			v_expr.reflect !== 'ast_differs'
/**/			&&
/**/			v_expr.reflect !== 'ast_dot'
/**/			&&
/**/			v_expr.reflect !== 'ast_equals'
/**/			&&
/**/			v_expr.reflect !== 'ast_func'
/**/			&&
/**/			v_expr.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_expr.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_expr.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_expr.reflect !== 'ast_member'
/**/			&&
/**/			v_expr.reflect !== 'ast_multiply'
/**/			&&
/**/			v_expr.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_expr.reflect !== 'ast_new'
/**/			&&
/**/			v_expr.reflect !== 'ast_not'
/**/			&&
/**/			v_expr.reflect !== 'ast_null'
/**/			&&
/**/			v_expr.reflect !== 'ast_number'
/**/			&&
/**/			v_expr.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_expr.reflect !== 'ast_or'
/**/			&&
/**/			v_expr.reflect !== 'ast_plus'
/**/			&&
/**/			v_expr.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_expr.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_expr.reflect !== 'ast_string'
/**/			&&
/**/			v_expr.reflect !== 'ast_typeof'
/**/			&&
/**/			v_expr.reflect !== 'ast_var'
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
			v_expr === inherit.expr
			||
			v_expr !== undefined && v_expr.equals( inherit.expr )
		)
	)
	{
		return inherit;
	}

	return new AbstractConstructor( v_expr );
};


/*
| Creates a new delete object.
*/
ast_delete.create =
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
		v_expr;

	if( this !== ast_delete )
	{
		inherit = this;

		v_expr = this.expr;
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
			case 'expr' :

				if( arg !== pass )
				{
					v_expr = arg;
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
/**/	if( v_expr === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_expr === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_expr.reflect !== 'ast_and'
/**/		&&
/**/		v_expr.reflect !== 'ast_arrayLiteral'
/**/		&&
/**/		v_expr.reflect !== 'ast_assign'
/**/		&&
/**/		v_expr.reflect !== 'ast_boolean'
/**/		&&
/**/		v_expr.reflect !== 'ast_call'
/**/		&&
/**/		v_expr.reflect !== 'ast_comma'
/**/		&&
/**/		v_expr.reflect !== 'ast_condition'
/**/		&&
/**/		v_expr.reflect !== 'ast_delete'
/**/		&&
/**/		v_expr.reflect !== 'ast_differs'
/**/		&&
/**/		v_expr.reflect !== 'ast_dot'
/**/		&&
/**/		v_expr.reflect !== 'ast_equals'
/**/		&&
/**/		v_expr.reflect !== 'ast_func'
/**/		&&
/**/		v_expr.reflect !== 'ast_greaterThan'
/**/		&&
/**/		v_expr.reflect !== 'ast_instanceof'
/**/		&&
/**/		v_expr.reflect !== 'ast_lessThan'
/**/		&&
/**/		v_expr.reflect !== 'ast_member'
/**/		&&
/**/		v_expr.reflect !== 'ast_multiply'
/**/		&&
/**/		v_expr.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_expr.reflect !== 'ast_new'
/**/		&&
/**/		v_expr.reflect !== 'ast_not'
/**/		&&
/**/		v_expr.reflect !== 'ast_null'
/**/		&&
/**/		v_expr.reflect !== 'ast_number'
/**/		&&
/**/		v_expr.reflect !== 'ast_objLiteral'
/**/		&&
/**/		v_expr.reflect !== 'ast_or'
/**/		&&
/**/		v_expr.reflect !== 'ast_plus'
/**/		&&
/**/		v_expr.reflect !== 'ast_plusAssign'
/**/		&&
/**/		v_expr.reflect !== 'ast_preIncrement'
/**/		&&
/**/		v_expr.reflect !== 'ast_string'
/**/		&&
/**/		v_expr.reflect !== 'ast_typeof'
/**/		&&
/**/		v_expr.reflect !== 'ast_var'
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_expr === inherit.expr
			||
			v_expr.equals && v_expr.equals( inherit.expr )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_expr );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'ast_delete:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'delete:abstract';


/*
| Reflection.
*/
prototype.reflect = 'ast_delete';


/*
| Name Reflection.
*/
prototype.reflectName = 'delete';


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

	if( obj.reflect !== 'ast_delete' )
	{
		return false;
	}

	return (
		this.expr === obj.expr
		||
		this.expr.equals && this.expr.equals( obj.expr )
	);
};


}
)( );
