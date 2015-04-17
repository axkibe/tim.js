/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	jion$ast_switch;


if( NODE )
{
	jion$ast_switch = module.exports;
}
else
{
	jion$ast_switch = { };
}


var
	jion$ast_and,
	jion$ast_arrayLiteral,
	jion$ast_assign,
	jion$ast_block,
	jion$ast_boolean,
	jion$ast_call,
	jion$ast_case,
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

	jion$ast_block = require( '../ast/block' );

	jion$ast_boolean = require( '../ast/boolean' );

	jion$ast_call = require( '../ast/call' );

	jion$ast_case = require( '../ast/case' );

	jion$ast_comma = require( '../ast/comma' );

	jion$ast_condition = require( '../ast/condition' );

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

	this._ray = ray;

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


jion$ast_switch.prototype = prototype;


/*
| Creates a new switch object.
*/
jion$ast_switch.create =
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

	if( this !== jion$ast_switch )
	{
		inherit = this;

		ray = inherit._ray;

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
