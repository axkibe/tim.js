/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	ast_forIn;


if( NODE )
{
	ast_forIn = module.exports;
}
else
{
	ast_forIn = { };
}


var
	ast_and,
	ast_arrayLiteral,
	ast_assign,
	ast_block,
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
	jion$ast_and = require( '../ast/and' );

	ast_arrayLiteral = require( '../ast/arrayLiteral' );

	ast_assign = require( '../ast/assign' );

	ast_block = require( '../ast/block' );

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

	ast_preIncrement = require( '../ast/preIncrement' );

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


ast_forIn.prototype = prototype;


/*
| Creates an forIn object.
*/
ast_forIn.abstract =
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

	if( this !== ast_forIn )
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
ast_forIn.create =
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

	if( this !== ast_forIn )
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
