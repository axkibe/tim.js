/*
| This is an auto generated file.
|
| DO NOT EDIT!
*/


/*
| Export.
*/
var
	ast_switch;


if( SERVER )
{
	ast_switch = module.exports;
}
else
{
	ast_switch = { };
}


/*
| Imports.
*/
var
	jools,
	ast_and,
	ast_arrayLiteral,
	ast_assign,
	ast_block,
	ast_boolean,
	ast_call,
	ast_case,
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

	ast_block = require( '../../src/ast/block' );

	ast_boolean = require( '../../src/ast/boolean' );

	ast_call = require( '../../src/ast/call' );

	ast_case = require( '../../src/ast/case' );

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
		ray, // ray
		v_defaultCase, // the default block
		v_statement // the statement expression
	)
{
	if( v_defaultCase !== undefined )
	{
		this.defaultCase = v_defaultCase;
	}

	if( v_statement !== undefined )
	{
		this.statement = v_statement;
	}

	this.ray = ray;

	if( FREEZE )
	{
		Object.freeze( ray );

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
		ray, // ray
		v_defaultCase, // the default block
		v_statement // the statement expression
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
	}

	if( v_defaultCase !== undefined )
	{
		this.defaultCase = v_defaultCase;
	}

	this.statement = v_statement;

	this.ray = ray;

	if( FREEZE )
	{
		Object.freeze( ray );

		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


ast_switch.prototype = prototype;


/*
| Creates an switch object.
*/
ast_switch.abstract =
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
		o,
		r,
		rZ,
		ray,
		rayDup,
		v_defaultCase,
		v_statement;

	if( this !== ast_switch )
	{
		inherit = this;

		ray = inherit.ray;

		rayDup = false;

		v_defaultCase = this.defaultCase;

		v_statement = this.statement;
	}
	else
	{
		ray = [ ];

		rayDup = true;
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
			case 'defaultCase' :

				if( arg !== pass )
				{
					v_defaultCase = arg;
				}

				break;

			case 'statement' :

				if( arg !== pass )
				{
					v_statement = arg;
				}

				break;

			case 'ray:init' :

/**/			if( CHECK )
/**/			{
/**/				if( !Array.isArray( arg ) )
/**/				{
/**/					throw new Error( );
/**/				}
/**/			}

				ray = arg;

				rayDup = 'init';

				break;

			case 'ray:append' :

				if( !rayDup )
				{
					ray = ray.slice( );

					rayDup = true;
				}

				ray.push( arg );

				break;

			case 'ray:insert' :

				if( !rayDup )
				{
					ray = ray.slice( );

					rayDup = true;
				}

				ray.splice( arg, 0, arguments[ ++a + 1 ] );

				break;

			case 'ray:remove' :

				if( !rayDup )
				{
					ray = ray.slice( );

					rayDup = true;
				}

				ray.splice( arg, 1 );

				break;

			case 'ray:set' :

				if( !rayDup )
				{
					ray = ray.slice( );

					rayDup = true;
				}

				ray[ arg ] = arguments[ ++a + 1 ];

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
/**/	if( v_defaultCase === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_defaultCase !== undefined )
/**/	{
/**/		if( v_defaultCase.reflect !== 'ast_block' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_statement === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_statement !== undefined )
/**/	{
/**/		if(
/**/			v_statement.reflect !== 'ast_and'
/**/			&&
/**/			v_statement.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_statement.reflect !== 'ast_assign'
/**/			&&
/**/			v_statement.reflect !== 'ast_boolean'
/**/			&&
/**/			v_statement.reflect !== 'ast_call'
/**/			&&
/**/			v_statement.reflect !== 'ast_comma'
/**/			&&
/**/			v_statement.reflect !== 'ast_condition'
/**/			&&
/**/			v_statement.reflect !== 'ast_delete'
/**/			&&
/**/			v_statement.reflect !== 'ast_differs'
/**/			&&
/**/			v_statement.reflect !== 'ast_dot'
/**/			&&
/**/			v_statement.reflect !== 'ast_equals'
/**/			&&
/**/			v_statement.reflect !== 'ast_func'
/**/			&&
/**/			v_statement.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_statement.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_statement.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_statement.reflect !== 'ast_member'
/**/			&&
/**/			v_statement.reflect !== 'ast_multiply'
/**/			&&
/**/			v_statement.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_statement.reflect !== 'ast_new'
/**/			&&
/**/			v_statement.reflect !== 'ast_not'
/**/			&&
/**/			v_statement.reflect !== 'ast_null'
/**/			&&
/**/			v_statement.reflect !== 'ast_number'
/**/			&&
/**/			v_statement.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_statement.reflect !== 'ast_or'
/**/			&&
/**/			v_statement.reflect !== 'ast_plus'
/**/			&&
/**/			v_statement.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_statement.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_statement.reflect !== 'ast_string'
/**/			&&
/**/			v_statement.reflect !== 'ast_typeof'
/**/			&&
/**/			v_statement.reflect !== 'ast_var'
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	for(
/**/		r = 0, rZ = ray.length;
/**/		r < rZ;
/**/		++r
/**/	)
/**/	{
/**/		o = ray[ r ];
/**/
/**/		if( o.reflect !== 'ast_case' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if(
		inherit
		&&
		rayDup === false
		&&
		(
			v_defaultCase === inherit.defaultCase
			||
			v_defaultCase !== undefined
			&&
			v_defaultCase.equals( inherit.defaultCase )
		)
		&&
		(
			v_statement === inherit.statement
			||
			v_statement !== undefined && v_statement.equals( inherit.statement )
		)
	)
	{
		return inherit;
	}

	return new AbstractConstructor( ray, v_defaultCase, v_statement );
};


/*
| Creates a new switch object.
*/
ast_switch.create =
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
		o,
		r,
		rZ,
		ray,
		rayDup,
		v_defaultCase,
		v_statement;

	if( this !== ast_switch )
	{
		inherit = this;

		ray = inherit.ray;

		rayDup = false;

		v_defaultCase = this.defaultCase;

		v_statement = this.statement;
	}
	else
	{
		ray = [ ];

		rayDup = true;
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
			case 'defaultCase' :

				if( arg !== pass )
				{
					v_defaultCase = arg;
				}

				break;

			case 'statement' :

				if( arg !== pass )
				{
					v_statement = arg;
				}

				break;

			case 'ray:init' :

/**/			if( CHECK )
/**/			{
/**/				if( !Array.isArray( arg ) )
/**/				{
/**/					throw new Error( );
/**/				}
/**/			}

				ray = arg;

				rayDup = 'init';

				break;

			case 'ray:append' :

				if( !rayDup )
				{
					ray = ray.slice( );

					rayDup = true;
				}

				ray.push( arg );

				break;

			case 'ray:insert' :

				if( !rayDup )
				{
					ray = ray.slice( );

					rayDup = true;
				}

				ray.splice( arg, 0, arguments[ ++a + 1 ] );

				break;

			case 'ray:remove' :

				if( !rayDup )
				{
					ray = ray.slice( );

					rayDup = true;
				}

				ray.splice( arg, 1 );

				break;

			case 'ray:set' :

				if( !rayDup )
				{
					ray = ray.slice( );

					rayDup = true;
				}

				ray[ arg ] = arguments[ ++a + 1 ];

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
/**/	if( v_defaultCase === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_defaultCase !== undefined )
/**/	{
/**/		if( v_defaultCase.reflect !== 'ast_block' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_statement === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_statement === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_statement.reflect !== 'ast_and'
/**/		&&
/**/		v_statement.reflect !== 'ast_arrayLiteral'
/**/		&&
/**/		v_statement.reflect !== 'ast_assign'
/**/		&&
/**/		v_statement.reflect !== 'ast_boolean'
/**/		&&
/**/		v_statement.reflect !== 'ast_call'
/**/		&&
/**/		v_statement.reflect !== 'ast_comma'
/**/		&&
/**/		v_statement.reflect !== 'ast_condition'
/**/		&&
/**/		v_statement.reflect !== 'ast_delete'
/**/		&&
/**/		v_statement.reflect !== 'ast_differs'
/**/		&&
/**/		v_statement.reflect !== 'ast_dot'
/**/		&&
/**/		v_statement.reflect !== 'ast_equals'
/**/		&&
/**/		v_statement.reflect !== 'ast_func'
/**/		&&
/**/		v_statement.reflect !== 'ast_greaterThan'
/**/		&&
/**/		v_statement.reflect !== 'ast_instanceof'
/**/		&&
/**/		v_statement.reflect !== 'ast_lessThan'
/**/		&&
/**/		v_statement.reflect !== 'ast_member'
/**/		&&
/**/		v_statement.reflect !== 'ast_multiply'
/**/		&&
/**/		v_statement.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_statement.reflect !== 'ast_new'
/**/		&&
/**/		v_statement.reflect !== 'ast_not'
/**/		&&
/**/		v_statement.reflect !== 'ast_null'
/**/		&&
/**/		v_statement.reflect !== 'ast_number'
/**/		&&
/**/		v_statement.reflect !== 'ast_objLiteral'
/**/		&&
/**/		v_statement.reflect !== 'ast_or'
/**/		&&
/**/		v_statement.reflect !== 'ast_plus'
/**/		&&
/**/		v_statement.reflect !== 'ast_plusAssign'
/**/		&&
/**/		v_statement.reflect !== 'ast_preIncrement'
/**/		&&
/**/		v_statement.reflect !== 'ast_string'
/**/		&&
/**/		v_statement.reflect !== 'ast_typeof'
/**/		&&
/**/		v_statement.reflect !== 'ast_var'
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	for(
/**/		r = 0, rZ = ray.length;
/**/		r < rZ;
/**/		++r
/**/	)
/**/	{
/**/		o = ray[ r ];
/**/
/**/		if( o.reflect !== 'ast_case' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if(
		inherit
		&&
		rayDup === false
		&&
		(
			v_defaultCase === inherit.defaultCase
			||
			v_defaultCase !== undefined
			&&
			v_defaultCase.equals( inherit.defaultCase )
		)
		&&
		(
			v_statement === inherit.statement
			||
			v_statement.equals && v_statement.equals( inherit.statement )
		)
	)
	{
		return inherit;
	}

	return new Constructor( ray, v_defaultCase, v_statement );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'ast_switch:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'switch:abstract';


/*
| Reflection.
*/
prototype.reflect = 'ast_switch';


/*
| Name Reflection.
*/
prototype.reflectName = 'switch';


/*
| Sets values by path.
*/
prototype.setPath = jion_proto.setPath;


/*
| Gets values by path
*/
prototype.getPath = jion_proto.getPath;


/*
| Returns the ray with an element appended.
*/
prototype.append = jion_proto.rayAppend;


/*
| Returns the ray with another ray appended.
*/
prototype.appendRay = jion_proto.rayAppendRay;


/*
| Returns the length of the ray.
*/
jools.lazyValue( prototype, 'length', jion_proto.rayLength );


/*
| Returns one element from the ray.
*/
prototype.get = jion_proto.rayGet;


/*
| Returns the ray with one element inserted.
*/
prototype.insert = jion_proto.rayInsert;


/*
| Returns the ray with one element removed.
*/
prototype.remove = jion_proto.rayRemove;


/*
| Returns the ray with one element set.
*/
prototype.set = jion_proto.raySet;


/*
| Tests equality of object.
*/
prototype.equals =
	function(
		obj // object to compare to
	)
{
	var
		a,
		aZ;

	if( this === obj )
	{
		return true;
	}

	if( !obj )
	{
		return false;
	}

	if( obj.reflect !== 'ast_switch' )
	{
		return false;
	}

	if( this.ray !== obj.ray )
	{
		if( this.ray.length !== obj.ray.length )
		{
			return false;
		}

		for(
			a = 0, aZ = this.ray.length;
			a < aZ;
			++a
		)
		{
			if(
				this.ray[ a ] !== obj.ray[ a ]
				&&
				(
					!this.ray[ a ].equals
					||
					!this.ray[ a ].equals( obj.ray[ a ] )
				)
			)
			{
				return false;
			}
		}
	}

	return (
		(
			this.defaultCase === obj.defaultCase
			||
			this.defaultCase !== undefined
			&&
			this.defaultCase.equals( obj.defaultCase )
		)
		&&
		(
			this.statement === obj.statement
			||
			this.statement.equals && this.statement.equals( obj.statement )
		)
	);
};


}
)( );
