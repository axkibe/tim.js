/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	ast_block;


if( SERVER )
{
	ast_block = module.exports;
}
else
{
	ast_block = { };
}


var
	ast_and,
	ast_arrayLiteral,
	ast_assign,
	ast_block,
	ast_boolean,
	ast_call,
	ast_check,
	ast_comma,
	ast_comment,
	ast_condition,
	ast_continue,
	ast_delete,
	ast_differs,
	ast_dot,
	ast_equals,
	ast_fail,
	ast_for,
	ast_forIn,
	ast_func,
	ast_greaterThan,
	ast_if,
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
	ast_return,
	ast_string,
	ast_switch,
	ast_typeof,
	ast_var,
	ast_varDec,
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

	ast_check = require( '../ast/check' );

	ast_comma = require( '../ast/comma' );

	ast_comment = require( '../ast/comment' );

	ast_condition = require( '../ast/condition' );

	ast_continue = require( '../ast/continue' );

	ast_delete = require( '../ast/delete' );

	ast_differs = require( '../ast/differs' );

	ast_dot = require( '../ast/dot' );

	ast_equals = require( '../ast/equals' );

	ast_fail = require( '../ast/fail' );

	ast_for = require( '../ast/for' );

	ast_forIn = require( '../ast/forIn' );

	ast_func = require( '../ast/func' );

	ast_greaterThan = require( '../ast/greaterThan' );

	ast_if = require( '../ast/if' );

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

	ast_preIncrement = require( '../ast/preIncrement' );

	ast_return = require( '../ast/return' );

	ast_string = require( '../ast/string' );

	ast_switch = require( '../ast/switch' );

	ast_typeof = require( '../ast/typeof' );

	ast_var = require( '../ast/var' );

	ast_varDec = require( '../ast/varDec' );

	require( '../proto' );
}


/*
| Abstract constructor.
*/
var
	AbstractConstructor;


AbstractConstructor =
	function(
		ray // ray
	)
{
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
		ray // ray
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
	}

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


ast_block.prototype = prototype;


/*
| Creates an block object.
*/
ast_block.abstract =
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
		rayDup;

	if( this !== ast_block )
	{
		inherit = this;

		ray = inherit.ray;

		rayDup = false;
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
/**/			o.reflect !== 'ast_block'
/**/			&&
/**/			o.reflect !== 'ast_boolean'
/**/			&&
/**/			o.reflect !== 'ast_call'
/**/			&&
/**/			o.reflect !== 'ast_check'
/**/			&&
/**/			o.reflect !== 'ast_comma'
/**/			&&
/**/			o.reflect !== 'ast_comment'
/**/			&&
/**/			o.reflect !== 'ast_condition'
/**/			&&
/**/			o.reflect !== 'ast_continue'
/**/			&&
/**/			o.reflect !== 'ast_delete'
/**/			&&
/**/			o.reflect !== 'ast_differs'
/**/			&&
/**/			o.reflect !== 'ast_dot'
/**/			&&
/**/			o.reflect !== 'ast_equals'
/**/			&&
/**/			o.reflect !== 'ast_fail'
/**/			&&
/**/			o.reflect !== 'ast_for'
/**/			&&
/**/			o.reflect !== 'ast_forIn'
/**/			&&
/**/			o.reflect !== 'ast_func'
/**/			&&
/**/			o.reflect !== 'ast_greaterThan'
/**/			&&
/**/			o.reflect !== 'ast_if'
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
/**/			o.reflect !== 'ast_return'
/**/			&&
/**/			o.reflect !== 'ast_string'
/**/			&&
/**/			o.reflect !== 'ast_switch'
/**/			&&
/**/			o.reflect !== 'ast_typeof'
/**/			&&
/**/			o.reflect !== 'ast_var'
/**/			&&
/**/			o.reflect !== 'ast_varDec'
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if( inherit && rayDup === false )
	{
		return inherit;
	}

	return new AbstractConstructor( ray );
};


/*
| Creates a new block object.
*/
ast_block.create =
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
		rayDup;

	if( this !== ast_block )
	{
		inherit = this;

		ray = inherit.ray;

		rayDup = false;
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
/**/			o.reflect !== 'ast_block'
/**/			&&
/**/			o.reflect !== 'ast_boolean'
/**/			&&
/**/			o.reflect !== 'ast_call'
/**/			&&
/**/			o.reflect !== 'ast_check'
/**/			&&
/**/			o.reflect !== 'ast_comma'
/**/			&&
/**/			o.reflect !== 'ast_comment'
/**/			&&
/**/			o.reflect !== 'ast_condition'
/**/			&&
/**/			o.reflect !== 'ast_continue'
/**/			&&
/**/			o.reflect !== 'ast_delete'
/**/			&&
/**/			o.reflect !== 'ast_differs'
/**/			&&
/**/			o.reflect !== 'ast_dot'
/**/			&&
/**/			o.reflect !== 'ast_equals'
/**/			&&
/**/			o.reflect !== 'ast_fail'
/**/			&&
/**/			o.reflect !== 'ast_for'
/**/			&&
/**/			o.reflect !== 'ast_forIn'
/**/			&&
/**/			o.reflect !== 'ast_func'
/**/			&&
/**/			o.reflect !== 'ast_greaterThan'
/**/			&&
/**/			o.reflect !== 'ast_if'
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
/**/			o.reflect !== 'ast_return'
/**/			&&
/**/			o.reflect !== 'ast_string'
/**/			&&
/**/			o.reflect !== 'ast_switch'
/**/			&&
/**/			o.reflect !== 'ast_typeof'
/**/			&&
/**/			o.reflect !== 'ast_var'
/**/			&&
/**/			o.reflect !== 'ast_varDec'
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if( inherit && rayDup === false )
	{
		return inherit;
	}

	return new Constructor( ray );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'ast_block:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'block:abstract';


/*
| Reflection.
*/
prototype.reflect = 'ast_block';


/*
| Name Reflection.
*/
prototype.reflectName = 'block';


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
jion_proto.lazyValue( prototype, 'length', jion_proto.rayLength );


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

	if( obj.reflect !== 'ast_block' )
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

	return true;
};


}
)( );
