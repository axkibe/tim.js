/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	jion$ast_forIn;


if( NODE )
{
	jion$ast_forIn = module.exports;
}
else
{
	jion$ast_forIn = { };
}


var
	jion$ast_and,
	jion$ast_arrayLiteral,
	jion$ast_assign,
	jion$ast_block,
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

	jion$ast_block = require( '../ast/block' );

	jion$ast_boolean = require( '../ast/boolean' );

	jion$ast_call = require( '../ast/call' );

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
| Abstract constructor.
*/
var
	AbstractConstructor;


AbstractConstructor =
	function(
		v_block, // the for block
		v_object, // the object expression to iterate over
		v_variable // the loop variable
	)
{
	if( v_block !== undefined )
	{
		this.block = v_block;
	}

	if( v_object !== undefined )
	{
		this.object = v_object;
	}

	if( v_variable !== undefined )
	{
		this.variable = v_variable;
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
		v_block, // the for block
		v_object, // the object expression to iterate over
		v_variable // the loop variable
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
	}

	this.block = v_block;

	this.object = v_object;

	this.variable = v_variable;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


jion$ast_forIn.prototype = prototype;


/*
| Creates an forIn object.
*/
jion$ast_forIn.abstract =
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
		v_block,
		v_object,
		v_variable;

	if( this !== jion$ast_forIn )
	{
		inherit = this;

		v_block = this.block;

		v_object = this.object;

		v_variable = this.variable;
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
			case 'block' :

				if( arg !== pass )
				{
					v_block = arg;
				}

				break;

			case 'object' :

				if( arg !== pass )
				{
					v_object = arg;
				}

				break;

			case 'variable' :

				if( arg !== pass )
				{
					v_variable = arg;
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
/**/	if( v_block === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_block !== undefined )
/**/	{
/**/		if( v_block.reflect !== 'ast_block' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_object === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_object !== undefined )
/**/	{
/**/		if(
/**/			v_object.reflect !== 'ast_and'
/**/			&&
/**/			v_object.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_object.reflect !== 'ast_assign'
/**/			&&
/**/			v_object.reflect !== 'ast_boolean'
/**/			&&
/**/			v_object.reflect !== 'ast_call'
/**/			&&
/**/			v_object.reflect !== 'ast_comma'
/**/			&&
/**/			v_object.reflect !== 'ast_condition'
/**/			&&
/**/			v_object.reflect !== 'ast_delete'
/**/			&&
/**/			v_object.reflect !== 'ast_differs'
/**/			&&
/**/			v_object.reflect !== 'ast_dot'
/**/			&&
/**/			v_object.reflect !== 'ast_equals'
/**/			&&
/**/			v_object.reflect !== 'ast_func'
/**/			&&
/**/			v_object.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_object.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_object.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_object.reflect !== 'ast_member'
/**/			&&
/**/			v_object.reflect !== 'ast_multiply'
/**/			&&
/**/			v_object.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_object.reflect !== 'ast_new'
/**/			&&
/**/			v_object.reflect !== 'ast_not'
/**/			&&
/**/			v_object.reflect !== 'ast_null'
/**/			&&
/**/			v_object.reflect !== 'ast_number'
/**/			&&
/**/			v_object.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_object.reflect !== 'ast_or'
/**/			&&
/**/			v_object.reflect !== 'ast_plus'
/**/			&&
/**/			v_object.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_object.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_object.reflect !== 'ast_string'
/**/			&&
/**/			v_object.reflect !== 'ast_typeof'
/**/			&&
/**/			v_object.reflect !== 'ast_var'
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_variable === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_variable !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_variable ) !== 'string'
/**/			&&
/**/			!( v_variable instanceof String )
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
			v_block === inherit.block
			||
			v_block !== undefined && v_block.equals( inherit.block )
		)
		&&
		(
			v_object === inherit.object
			||
			v_object !== undefined && v_object.equals( inherit.object )
		)
		&&
		v_variable === inherit.variable
	)
	{
		return inherit;
	}

	return new AbstractConstructor( v_block, v_object, v_variable );
};


/*
| Creates a new forIn object.
*/
jion$ast_forIn.create =
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
		v_block,
		v_object,
		v_variable;

	if( this !== jion$ast_forIn )
	{
		inherit = this;

		v_block = this.block;

		v_object = this.object;

		v_variable = this.variable;
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
			case 'block' :

				if( arg !== pass )
				{
					v_block = arg;
				}

				break;

			case 'object' :

				if( arg !== pass )
				{
					v_object = arg;
				}

				break;

			case 'variable' :

				if( arg !== pass )
				{
					v_variable = arg;
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
/**/	if( v_block === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_block === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_block.reflect !== 'ast_block' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_object === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_object === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_object.reflect !== 'ast_and'
/**/		&&
/**/		v_object.reflect !== 'ast_arrayLiteral'
/**/		&&
/**/		v_object.reflect !== 'ast_assign'
/**/		&&
/**/		v_object.reflect !== 'ast_boolean'
/**/		&&
/**/		v_object.reflect !== 'ast_call'
/**/		&&
/**/		v_object.reflect !== 'ast_comma'
/**/		&&
/**/		v_object.reflect !== 'ast_condition'
/**/		&&
/**/		v_object.reflect !== 'ast_delete'
/**/		&&
/**/		v_object.reflect !== 'ast_differs'
/**/		&&
/**/		v_object.reflect !== 'ast_dot'
/**/		&&
/**/		v_object.reflect !== 'ast_equals'
/**/		&&
/**/		v_object.reflect !== 'ast_func'
/**/		&&
/**/		v_object.reflect !== 'ast_greaterThan'
/**/		&&
/**/		v_object.reflect !== 'ast_instanceof'
/**/		&&
/**/		v_object.reflect !== 'ast_lessThan'
/**/		&&
/**/		v_object.reflect !== 'ast_member'
/**/		&&
/**/		v_object.reflect !== 'ast_multiply'
/**/		&&
/**/		v_object.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_object.reflect !== 'ast_new'
/**/		&&
/**/		v_object.reflect !== 'ast_not'
/**/		&&
/**/		v_object.reflect !== 'ast_null'
/**/		&&
/**/		v_object.reflect !== 'ast_number'
/**/		&&
/**/		v_object.reflect !== 'ast_objLiteral'
/**/		&&
/**/		v_object.reflect !== 'ast_or'
/**/		&&
/**/		v_object.reflect !== 'ast_plus'
/**/		&&
/**/		v_object.reflect !== 'ast_plusAssign'
/**/		&&
/**/		v_object.reflect !== 'ast_preIncrement'
/**/		&&
/**/		v_object.reflect !== 'ast_string'
/**/		&&
/**/		v_object.reflect !== 'ast_typeof'
/**/		&&
/**/		v_object.reflect !== 'ast_var'
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_variable === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_variable === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		typeof( v_variable ) !== 'string'
/**/		&&
/**/		!( v_variable instanceof String )
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_block === inherit.block
			||
			v_block.equals && v_block.equals( inherit.block )
		)
		&&
		(
			v_object === inherit.object
			||
			v_object.equals && v_object.equals( inherit.object )
		)
		&&
		v_variable === inherit.variable
	)
	{
		return inherit;
	}

	return new Constructor( v_block, v_object, v_variable );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'ast_forIn:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'forIn:abstract';


/*
| Reflection.
*/
prototype.reflect = 'ast_forIn';


/*
| Name Reflection.
*/
prototype.reflectName = 'forIn';


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

	if( obj.reflect !== 'ast_forIn' )
	{
		return false;
	}

	return (
		(
			this.block === obj.block
			||
			this.block.equals && this.block.equals( obj.block )
		)
		&&
		(
			this.object === obj.object
			||
			this.object.equals && this.object.equals( obj.object )
		)
		&&
		this.variable === obj.variable
	);
};


}
)( );
