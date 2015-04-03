/*
| This is an auto generated file.
|
| DO NOT EDIT!
*/


/*
| Export.
*/
var
	ast_varDec;


if( SERVER )
{
	ast_varDec = module.exports;
}
else
{
	ast_varDec = { };
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
		v_assign, // Assignment of variable
		v_name // variable name
	)
{
	if( v_assign !== undefined )
	{
		this.assign = v_assign;
	}

	if( v_name !== undefined )
	{
		this.name = v_name;
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
		v_assign, // Assignment of variable
		v_name // variable name
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
	}

	if( v_assign !== undefined )
	{
		this.assign = v_assign;
	}

	this.name = v_name;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


ast_varDec.prototype = prototype;


/*
| Creates an varDec object.
*/
ast_varDec.abstract =
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
		v_assign,
		v_name;

	if( this !== ast_varDec )
	{
		inherit = this;

		v_assign = this.assign;

		v_name = this.name;
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
			case 'assign' :

				if( arg !== pass )
				{
					v_assign = arg;
				}

				break;

			case 'name' :

				if( arg !== pass )
				{
					v_name = arg;
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
/**/	if( v_assign === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_assign !== undefined )
/**/	{
/**/		if(
/**/			v_assign.reflect !== 'ast_and'
/**/			&&
/**/			v_assign.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_assign.reflect !== 'ast_assign'
/**/			&&
/**/			v_assign.reflect !== 'ast_boolean'
/**/			&&
/**/			v_assign.reflect !== 'ast_call'
/**/			&&
/**/			v_assign.reflect !== 'ast_comma'
/**/			&&
/**/			v_assign.reflect !== 'ast_condition'
/**/			&&
/**/			v_assign.reflect !== 'ast_delete'
/**/			&&
/**/			v_assign.reflect !== 'ast_differs'
/**/			&&
/**/			v_assign.reflect !== 'ast_dot'
/**/			&&
/**/			v_assign.reflect !== 'ast_equals'
/**/			&&
/**/			v_assign.reflect !== 'ast_func'
/**/			&&
/**/			v_assign.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_assign.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_assign.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_assign.reflect !== 'ast_member'
/**/			&&
/**/			v_assign.reflect !== 'ast_multiply'
/**/			&&
/**/			v_assign.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_assign.reflect !== 'ast_new'
/**/			&&
/**/			v_assign.reflect !== 'ast_not'
/**/			&&
/**/			v_assign.reflect !== 'ast_null'
/**/			&&
/**/			v_assign.reflect !== 'ast_number'
/**/			&&
/**/			v_assign.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_assign.reflect !== 'ast_or'
/**/			&&
/**/			v_assign.reflect !== 'ast_plus'
/**/			&&
/**/			v_assign.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_assign.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_assign.reflect !== 'ast_string'
/**/			&&
/**/			v_assign.reflect !== 'ast_typeof'
/**/			&&
/**/			v_assign.reflect !== 'ast_var'
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_name === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_name !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_name ) !== 'string'
/**/			&&
/**/			!( v_name instanceof String )
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
			v_assign === inherit.assign
			||
			v_assign !== undefined && v_assign.equals( inherit.assign )
		)
		&&
		v_name === inherit.name
	)
	{
		return inherit;
	}

	return new AbstractConstructor( v_assign, v_name );
};


/*
| Creates a new varDec object.
*/
ast_varDec.create =
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
		v_assign,
		v_name;

	if( this !== ast_varDec )
	{
		inherit = this;

		v_assign = this.assign;

		v_name = this.name;
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
			case 'assign' :

				if( arg !== pass )
				{
					v_assign = arg;
				}

				break;

			case 'name' :

				if( arg !== pass )
				{
					v_name = arg;
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
/**/	if( v_assign === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_assign !== undefined )
/**/	{
/**/		if(
/**/			v_assign.reflect !== 'ast_and'
/**/			&&
/**/			v_assign.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_assign.reflect !== 'ast_assign'
/**/			&&
/**/			v_assign.reflect !== 'ast_boolean'
/**/			&&
/**/			v_assign.reflect !== 'ast_call'
/**/			&&
/**/			v_assign.reflect !== 'ast_comma'
/**/			&&
/**/			v_assign.reflect !== 'ast_condition'
/**/			&&
/**/			v_assign.reflect !== 'ast_delete'
/**/			&&
/**/			v_assign.reflect !== 'ast_differs'
/**/			&&
/**/			v_assign.reflect !== 'ast_dot'
/**/			&&
/**/			v_assign.reflect !== 'ast_equals'
/**/			&&
/**/			v_assign.reflect !== 'ast_func'
/**/			&&
/**/			v_assign.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_assign.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_assign.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_assign.reflect !== 'ast_member'
/**/			&&
/**/			v_assign.reflect !== 'ast_multiply'
/**/			&&
/**/			v_assign.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_assign.reflect !== 'ast_new'
/**/			&&
/**/			v_assign.reflect !== 'ast_not'
/**/			&&
/**/			v_assign.reflect !== 'ast_null'
/**/			&&
/**/			v_assign.reflect !== 'ast_number'
/**/			&&
/**/			v_assign.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_assign.reflect !== 'ast_or'
/**/			&&
/**/			v_assign.reflect !== 'ast_plus'
/**/			&&
/**/			v_assign.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_assign.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_assign.reflect !== 'ast_string'
/**/			&&
/**/			v_assign.reflect !== 'ast_typeof'
/**/			&&
/**/			v_assign.reflect !== 'ast_var'
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_name === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_name === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		typeof( v_name ) !== 'string'
/**/		&&
/**/		!( v_name instanceof String )
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_assign === inherit.assign
			||
			v_assign !== undefined && v_assign.equals( inherit.assign )
		)
		&&
		v_name === inherit.name
	)
	{
		return inherit;
	}

	return new Constructor( v_assign, v_name );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'ast_varDec:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'varDec:abstract';


/*
| Reflection.
*/
prototype.reflect = 'ast_varDec';


/*
| Name Reflection.
*/
prototype.reflectName = 'varDec';


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

	if( obj.reflect !== 'ast_varDec' )
	{
		return false;
	}

	return (
		(
			this.assign === obj.assign
			||
			this.assign !== undefined && this.assign.equals( obj.assign )
		)
		&&
		this.name === obj.name
	);
};


}
)( );
