/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	ast_preIncrement;


if( NODE )
{
	ast_preIncrement = module.exports;
}
else
{
	ast_preIncrement = { };
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
if( NODE )
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

	ast_plus = require( '../ast/plus' );

	ast_plusAssign = require( '../ast/plusAssign' );

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
		v_expr // the expression to pre increment
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
		v_expr // the expression to pre increment
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


ast_preIncrement.prototype = prototype;


/*
| Creates an preIncrement object.
*/
ast_preIncrement.abstract =
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

	if( this !== ast_preIncrement )
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
| Creates a new preIncrement object.
*/
ast_preIncrement.create =
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

	if( this !== ast_preIncrement )
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
AbstractConstructor.prototype.reflect = 'ast_preIncrement:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'preIncrement:abstract';


/*
| Reflection.
*/
prototype.reflect = 'ast_preIncrement';


/*
| Name Reflection.
*/
prototype.reflectName = 'preIncrement';


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

	if( obj.reflect !== 'ast_preIncrement' )
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
