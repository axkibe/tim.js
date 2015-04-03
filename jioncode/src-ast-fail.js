/*
| This is an auto generated file.
|
| DO NOT EDIT!
*/


/*
| Export.
*/
var
	ast_fail;


if( SERVER )
{
	ast_fail = module.exports;
}
else
{
	ast_fail = { };
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
		v_message // the error message expression
	)
{
	if( v_message !== undefined )
	{
		this.message = v_message;
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
		v_message // the error message expression
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
	}

	if( v_message !== undefined )
	{
		this.message = v_message;
	}

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


ast_fail.prototype = prototype;


/*
| Creates an fail object.
*/
ast_fail.abstract =
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
		v_message;

	if( this !== ast_fail )
	{
		inherit = this;

		v_message = this.message;
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
			case 'message' :

				if( arg !== pass )
				{
					v_message = arg;
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
/**/	if( v_message === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_message !== undefined )
/**/	{
/**/		if(
/**/			v_message.reflect !== 'ast_and'
/**/			&&
/**/			v_message.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_message.reflect !== 'ast_assign'
/**/			&&
/**/			v_message.reflect !== 'ast_boolean'
/**/			&&
/**/			v_message.reflect !== 'ast_call'
/**/			&&
/**/			v_message.reflect !== 'ast_comma'
/**/			&&
/**/			v_message.reflect !== 'ast_condition'
/**/			&&
/**/			v_message.reflect !== 'ast_delete'
/**/			&&
/**/			v_message.reflect !== 'ast_differs'
/**/			&&
/**/			v_message.reflect !== 'ast_dot'
/**/			&&
/**/			v_message.reflect !== 'ast_equals'
/**/			&&
/**/			v_message.reflect !== 'ast_func'
/**/			&&
/**/			v_message.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_message.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_message.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_message.reflect !== 'ast_member'
/**/			&&
/**/			v_message.reflect !== 'ast_multiply'
/**/			&&
/**/			v_message.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_message.reflect !== 'ast_new'
/**/			&&
/**/			v_message.reflect !== 'ast_not'
/**/			&&
/**/			v_message.reflect !== 'ast_null'
/**/			&&
/**/			v_message.reflect !== 'ast_number'
/**/			&&
/**/			v_message.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_message.reflect !== 'ast_or'
/**/			&&
/**/			v_message.reflect !== 'ast_plus'
/**/			&&
/**/			v_message.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_message.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_message.reflect !== 'ast_string'
/**/			&&
/**/			v_message.reflect !== 'ast_typeof'
/**/			&&
/**/			v_message.reflect !== 'ast_var'
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
			v_message === inherit.message
			||
			v_message !== undefined && v_message.equals( inherit.message )
		)
	)
	{
		return inherit;
	}

	return new AbstractConstructor( v_message );
};


/*
| Creates a new fail object.
*/
ast_fail.create =
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
		v_message;

	if( this !== ast_fail )
	{
		inherit = this;

		v_message = this.message;
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
			case 'message' :

				if( arg !== pass )
				{
					v_message = arg;
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
/**/	if( v_message === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_message !== undefined )
/**/	{
/**/		if(
/**/			v_message.reflect !== 'ast_and'
/**/			&&
/**/			v_message.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_message.reflect !== 'ast_assign'
/**/			&&
/**/			v_message.reflect !== 'ast_boolean'
/**/			&&
/**/			v_message.reflect !== 'ast_call'
/**/			&&
/**/			v_message.reflect !== 'ast_comma'
/**/			&&
/**/			v_message.reflect !== 'ast_condition'
/**/			&&
/**/			v_message.reflect !== 'ast_delete'
/**/			&&
/**/			v_message.reflect !== 'ast_differs'
/**/			&&
/**/			v_message.reflect !== 'ast_dot'
/**/			&&
/**/			v_message.reflect !== 'ast_equals'
/**/			&&
/**/			v_message.reflect !== 'ast_func'
/**/			&&
/**/			v_message.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_message.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_message.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_message.reflect !== 'ast_member'
/**/			&&
/**/			v_message.reflect !== 'ast_multiply'
/**/			&&
/**/			v_message.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_message.reflect !== 'ast_new'
/**/			&&
/**/			v_message.reflect !== 'ast_not'
/**/			&&
/**/			v_message.reflect !== 'ast_null'
/**/			&&
/**/			v_message.reflect !== 'ast_number'
/**/			&&
/**/			v_message.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_message.reflect !== 'ast_or'
/**/			&&
/**/			v_message.reflect !== 'ast_plus'
/**/			&&
/**/			v_message.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_message.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_message.reflect !== 'ast_string'
/**/			&&
/**/			v_message.reflect !== 'ast_typeof'
/**/			&&
/**/			v_message.reflect !== 'ast_var'
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
			v_message === inherit.message
			||
			v_message !== undefined && v_message.equals( inherit.message )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_message );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'ast_fail:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'fail:abstract';


/*
| Reflection.
*/
prototype.reflect = 'ast_fail';


/*
| Name Reflection.
*/
prototype.reflectName = 'fail';


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

	if( obj.reflect !== 'ast_fail' )
	{
		return false;
	}

	return (
		this.message === obj.message
		||
		this.message !== undefined && this.message.equals( obj.message )
	);
};


}
)( );
