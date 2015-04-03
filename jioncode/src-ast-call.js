/*
| This is an auto generated file.
|
| DO NOT EDIT!
*/


/*
| Export.
*/
var
	ast_call;


if( SERVER )
{
	ast_call = module.exports;
}
else
{
	ast_call = { };
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
		v_func // the function to call
	)
{
	if( v_func !== undefined )
	{
		this.func = v_func;
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
		v_func // the function to call
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
	}

	this.func = v_func;

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


ast_call.prototype = prototype;


/*
| Creates an call object.
*/
ast_call.abstract =
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
		v_func;

	if( this !== ast_call )
	{
		inherit = this;

		ray = inherit.ray;

		rayDup = false;

		v_func = this.func;
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
			case 'func' :

				if( arg !== pass )
				{
					v_func = arg;
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
/**/	if( v_func === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_func !== undefined )
/**/	{
/**/		if(
/**/			v_func.reflect !== 'ast_and'
/**/			&&
/**/			v_func.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_func.reflect !== 'ast_assign'
/**/			&&
/**/			v_func.reflect !== 'ast_boolean'
/**/			&&
/**/			v_func.reflect !== 'ast_call'
/**/			&&
/**/			v_func.reflect !== 'ast_comma'
/**/			&&
/**/			v_func.reflect !== 'ast_condition'
/**/			&&
/**/			v_func.reflect !== 'ast_delete'
/**/			&&
/**/			v_func.reflect !== 'ast_differs'
/**/			&&
/**/			v_func.reflect !== 'ast_dot'
/**/			&&
/**/			v_func.reflect !== 'ast_equals'
/**/			&&
/**/			v_func.reflect !== 'ast_func'
/**/			&&
/**/			v_func.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_func.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_func.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_func.reflect !== 'ast_member'
/**/			&&
/**/			v_func.reflect !== 'ast_multiply'
/**/			&&
/**/			v_func.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_func.reflect !== 'ast_new'
/**/			&&
/**/			v_func.reflect !== 'ast_not'
/**/			&&
/**/			v_func.reflect !== 'ast_null'
/**/			&&
/**/			v_func.reflect !== 'ast_number'
/**/			&&
/**/			v_func.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_func.reflect !== 'ast_or'
/**/			&&
/**/			v_func.reflect !== 'ast_plus'
/**/			&&
/**/			v_func.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_func.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_func.reflect !== 'ast_string'
/**/			&&
/**/			v_func.reflect !== 'ast_typeof'
/**/			&&
/**/			v_func.reflect !== 'ast_var'
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
/**/		if(
/**/			o.reflect !== 'ast_and'
/**/			&&
/**/			o.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			o.reflect !== 'ast_assign'
/**/			&&
/**/			o.reflect !== 'ast_boolean'
/**/			&&
/**/			o.reflect !== 'ast_call'
/**/			&&
/**/			o.reflect !== 'ast_comma'
/**/			&&
/**/			o.reflect !== 'ast_condition'
/**/			&&
/**/			o.reflect !== 'ast_delete'
/**/			&&
/**/			o.reflect !== 'ast_differs'
/**/			&&
/**/			o.reflect !== 'ast_dot'
/**/			&&
/**/			o.reflect !== 'ast_equals'
/**/			&&
/**/			o.reflect !== 'ast_func'
/**/			&&
/**/			o.reflect !== 'ast_greaterThan'
/**/			&&
/**/			o.reflect !== 'ast_instanceof'
/**/			&&
/**/			o.reflect !== 'ast_lessThan'
/**/			&&
/**/			o.reflect !== 'ast_member'
/**/			&&
/**/			o.reflect !== 'ast_multiply'
/**/			&&
/**/			o.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			o.reflect !== 'ast_new'
/**/			&&
/**/			o.reflect !== 'ast_not'
/**/			&&
/**/			o.reflect !== 'ast_null'
/**/			&&
/**/			o.reflect !== 'ast_number'
/**/			&&
/**/			o.reflect !== 'ast_objLiteral'
/**/			&&
/**/			o.reflect !== 'ast_or'
/**/			&&
/**/			o.reflect !== 'ast_plus'
/**/			&&
/**/			o.reflect !== 'ast_plusAssign'
/**/			&&
/**/			o.reflect !== 'ast_preIncrement'
/**/			&&
/**/			o.reflect !== 'ast_string'
/**/			&&
/**/			o.reflect !== 'ast_typeof'
/**/			&&
/**/			o.reflect !== 'ast_var'
/**/		)
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
			v_func === inherit.func
			||
			v_func !== undefined && v_func.equals( inherit.func )
		)
	)
	{
		return inherit;
	}

	return new AbstractConstructor( ray, v_func );
};


/*
| Creates a new call object.
*/
ast_call.create =
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
		v_func;

	if( this !== ast_call )
	{
		inherit = this;

		ray = inherit.ray;

		rayDup = false;

		v_func = this.func;
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
			case 'func' :

				if( arg !== pass )
				{
					v_func = arg;
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
/**/	if( v_func === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_func === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_func.reflect !== 'ast_and'
/**/		&&
/**/		v_func.reflect !== 'ast_arrayLiteral'
/**/		&&
/**/		v_func.reflect !== 'ast_assign'
/**/		&&
/**/		v_func.reflect !== 'ast_boolean'
/**/		&&
/**/		v_func.reflect !== 'ast_call'
/**/		&&
/**/		v_func.reflect !== 'ast_comma'
/**/		&&
/**/		v_func.reflect !== 'ast_condition'
/**/		&&
/**/		v_func.reflect !== 'ast_delete'
/**/		&&
/**/		v_func.reflect !== 'ast_differs'
/**/		&&
/**/		v_func.reflect !== 'ast_dot'
/**/		&&
/**/		v_func.reflect !== 'ast_equals'
/**/		&&
/**/		v_func.reflect !== 'ast_func'
/**/		&&
/**/		v_func.reflect !== 'ast_greaterThan'
/**/		&&
/**/		v_func.reflect !== 'ast_instanceof'
/**/		&&
/**/		v_func.reflect !== 'ast_lessThan'
/**/		&&
/**/		v_func.reflect !== 'ast_member'
/**/		&&
/**/		v_func.reflect !== 'ast_multiply'
/**/		&&
/**/		v_func.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_func.reflect !== 'ast_new'
/**/		&&
/**/		v_func.reflect !== 'ast_not'
/**/		&&
/**/		v_func.reflect !== 'ast_null'
/**/		&&
/**/		v_func.reflect !== 'ast_number'
/**/		&&
/**/		v_func.reflect !== 'ast_objLiteral'
/**/		&&
/**/		v_func.reflect !== 'ast_or'
/**/		&&
/**/		v_func.reflect !== 'ast_plus'
/**/		&&
/**/		v_func.reflect !== 'ast_plusAssign'
/**/		&&
/**/		v_func.reflect !== 'ast_preIncrement'
/**/		&&
/**/		v_func.reflect !== 'ast_string'
/**/		&&
/**/		v_func.reflect !== 'ast_typeof'
/**/		&&
/**/		v_func.reflect !== 'ast_var'
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
/**/		if(
/**/			o.reflect !== 'ast_and'
/**/			&&
/**/			o.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			o.reflect !== 'ast_assign'
/**/			&&
/**/			o.reflect !== 'ast_boolean'
/**/			&&
/**/			o.reflect !== 'ast_call'
/**/			&&
/**/			o.reflect !== 'ast_comma'
/**/			&&
/**/			o.reflect !== 'ast_condition'
/**/			&&
/**/			o.reflect !== 'ast_delete'
/**/			&&
/**/			o.reflect !== 'ast_differs'
/**/			&&
/**/			o.reflect !== 'ast_dot'
/**/			&&
/**/			o.reflect !== 'ast_equals'
/**/			&&
/**/			o.reflect !== 'ast_func'
/**/			&&
/**/			o.reflect !== 'ast_greaterThan'
/**/			&&
/**/			o.reflect !== 'ast_instanceof'
/**/			&&
/**/			o.reflect !== 'ast_lessThan'
/**/			&&
/**/			o.reflect !== 'ast_member'
/**/			&&
/**/			o.reflect !== 'ast_multiply'
/**/			&&
/**/			o.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			o.reflect !== 'ast_new'
/**/			&&
/**/			o.reflect !== 'ast_not'
/**/			&&
/**/			o.reflect !== 'ast_null'
/**/			&&
/**/			o.reflect !== 'ast_number'
/**/			&&
/**/			o.reflect !== 'ast_objLiteral'
/**/			&&
/**/			o.reflect !== 'ast_or'
/**/			&&
/**/			o.reflect !== 'ast_plus'
/**/			&&
/**/			o.reflect !== 'ast_plusAssign'
/**/			&&
/**/			o.reflect !== 'ast_preIncrement'
/**/			&&
/**/			o.reflect !== 'ast_string'
/**/			&&
/**/			o.reflect !== 'ast_typeof'
/**/			&&
/**/			o.reflect !== 'ast_var'
/**/		)
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
			v_func === inherit.func
			||
			v_func.equals && v_func.equals( inherit.func )
		)
	)
	{
		return inherit;
	}

	return new Constructor( ray, v_func );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'ast_call:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'call:abstract';


/*
| Reflection.
*/
prototype.reflect = 'ast_call';


/*
| Name Reflection.
*/
prototype.reflectName = 'call';


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

	if( obj.reflect !== 'ast_call' )
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
		this.func === obj.func
		||
		this.func.equals && this.func.equals( obj.func )
	);
};


}
)( );
