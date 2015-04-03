/*
| This is an auto generated file.
|
| DO NOT EDIT!
*/


/*
| Export.
*/
var
	ast_for;


if( SERVER )
{
	ast_for = module.exports;
}
else
{
	ast_for = { };
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
		v_block, // the for block
		v_condition, // the continue condition
		v_init, // the initialization
		v_iterate // the iteration expression
	)
{
	if( v_block !== undefined )
	{
		this.block = v_block;
	}

	if( v_condition !== undefined )
	{
		this.condition = v_condition;
	}

	if( v_init !== undefined )
	{
		this.init = v_init;
	}

	if( v_iterate !== undefined )
	{
		this.iterate = v_iterate;
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
		v_condition, // the continue condition
		v_init, // the initialization
		v_iterate // the iteration expression
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

	this.condition = v_condition;

	this.init = v_init;

	this.iterate = v_iterate;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


ast_for.prototype = prototype;


/*
| Creates an for object.
*/
ast_for.abstract =
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
		v_condition,
		v_init,
		v_iterate;

	if( this !== ast_for )
	{
		inherit = this;

		v_block = this.block;

		v_condition = this.condition;

		v_init = this.init;

		v_iterate = this.iterate;
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

			case 'condition' :

				if( arg !== pass )
				{
					v_condition = arg;
				}

				break;

			case 'init' :

				if( arg !== pass )
				{
					v_init = arg;
				}

				break;

			case 'iterate' :

				if( arg !== pass )
				{
					v_iterate = arg;
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
/**/	if( v_condition === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_condition !== undefined )
/**/	{
/**/		if(
/**/			v_condition.reflect !== 'ast_and'
/**/			&&
/**/			v_condition.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_condition.reflect !== 'ast_assign'
/**/			&&
/**/			v_condition.reflect !== 'ast_boolean'
/**/			&&
/**/			v_condition.reflect !== 'ast_call'
/**/			&&
/**/			v_condition.reflect !== 'ast_comma'
/**/			&&
/**/			v_condition.reflect !== 'ast_condition'
/**/			&&
/**/			v_condition.reflect !== 'ast_delete'
/**/			&&
/**/			v_condition.reflect !== 'ast_differs'
/**/			&&
/**/			v_condition.reflect !== 'ast_dot'
/**/			&&
/**/			v_condition.reflect !== 'ast_equals'
/**/			&&
/**/			v_condition.reflect !== 'ast_func'
/**/			&&
/**/			v_condition.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_condition.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_condition.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_condition.reflect !== 'ast_member'
/**/			&&
/**/			v_condition.reflect !== 'ast_multiply'
/**/			&&
/**/			v_condition.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_condition.reflect !== 'ast_new'
/**/			&&
/**/			v_condition.reflect !== 'ast_not'
/**/			&&
/**/			v_condition.reflect !== 'ast_null'
/**/			&&
/**/			v_condition.reflect !== 'ast_number'
/**/			&&
/**/			v_condition.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_condition.reflect !== 'ast_or'
/**/			&&
/**/			v_condition.reflect !== 'ast_plus'
/**/			&&
/**/			v_condition.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_condition.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_condition.reflect !== 'ast_string'
/**/			&&
/**/			v_condition.reflect !== 'ast_typeof'
/**/			&&
/**/			v_condition.reflect !== 'ast_var'
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_init === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_init !== undefined )
/**/	{
/**/		if(
/**/			v_init.reflect !== 'ast_and'
/**/			&&
/**/			v_init.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_init.reflect !== 'ast_assign'
/**/			&&
/**/			v_init.reflect !== 'ast_boolean'
/**/			&&
/**/			v_init.reflect !== 'ast_call'
/**/			&&
/**/			v_init.reflect !== 'ast_comma'
/**/			&&
/**/			v_init.reflect !== 'ast_condition'
/**/			&&
/**/			v_init.reflect !== 'ast_delete'
/**/			&&
/**/			v_init.reflect !== 'ast_differs'
/**/			&&
/**/			v_init.reflect !== 'ast_dot'
/**/			&&
/**/			v_init.reflect !== 'ast_equals'
/**/			&&
/**/			v_init.reflect !== 'ast_func'
/**/			&&
/**/			v_init.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_init.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_init.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_init.reflect !== 'ast_member'
/**/			&&
/**/			v_init.reflect !== 'ast_multiply'
/**/			&&
/**/			v_init.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_init.reflect !== 'ast_new'
/**/			&&
/**/			v_init.reflect !== 'ast_not'
/**/			&&
/**/			v_init.reflect !== 'ast_null'
/**/			&&
/**/			v_init.reflect !== 'ast_number'
/**/			&&
/**/			v_init.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_init.reflect !== 'ast_or'
/**/			&&
/**/			v_init.reflect !== 'ast_plus'
/**/			&&
/**/			v_init.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_init.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_init.reflect !== 'ast_string'
/**/			&&
/**/			v_init.reflect !== 'ast_typeof'
/**/			&&
/**/			v_init.reflect !== 'ast_var'
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_iterate === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_iterate !== undefined )
/**/	{
/**/		if(
/**/			v_iterate.reflect !== 'ast_and'
/**/			&&
/**/			v_iterate.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_iterate.reflect !== 'ast_assign'
/**/			&&
/**/			v_iterate.reflect !== 'ast_boolean'
/**/			&&
/**/			v_iterate.reflect !== 'ast_call'
/**/			&&
/**/			v_iterate.reflect !== 'ast_comma'
/**/			&&
/**/			v_iterate.reflect !== 'ast_condition'
/**/			&&
/**/			v_iterate.reflect !== 'ast_delete'
/**/			&&
/**/			v_iterate.reflect !== 'ast_differs'
/**/			&&
/**/			v_iterate.reflect !== 'ast_dot'
/**/			&&
/**/			v_iterate.reflect !== 'ast_equals'
/**/			&&
/**/			v_iterate.reflect !== 'ast_func'
/**/			&&
/**/			v_iterate.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_iterate.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_iterate.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_iterate.reflect !== 'ast_member'
/**/			&&
/**/			v_iterate.reflect !== 'ast_multiply'
/**/			&&
/**/			v_iterate.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_iterate.reflect !== 'ast_new'
/**/			&&
/**/			v_iterate.reflect !== 'ast_not'
/**/			&&
/**/			v_iterate.reflect !== 'ast_null'
/**/			&&
/**/			v_iterate.reflect !== 'ast_number'
/**/			&&
/**/			v_iterate.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_iterate.reflect !== 'ast_or'
/**/			&&
/**/			v_iterate.reflect !== 'ast_plus'
/**/			&&
/**/			v_iterate.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_iterate.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_iterate.reflect !== 'ast_string'
/**/			&&
/**/			v_iterate.reflect !== 'ast_typeof'
/**/			&&
/**/			v_iterate.reflect !== 'ast_var'
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
			v_condition === inherit.condition
			||
			v_condition !== undefined && v_condition.equals( inherit.condition )
		)
		&&
		(
			v_init === inherit.init
			||
			v_init !== undefined && v_init.equals( inherit.init )
		)
		&&
		(
			v_iterate === inherit.iterate
			||
			v_iterate !== undefined && v_iterate.equals( inherit.iterate )
		)
	)
	{
		return inherit;
	}

	return (
		new AbstractConstructor(
			v_block,
			v_condition,
			v_init,
			v_iterate
		)
	);
};


/*
| Creates a new for object.
*/
ast_for.create =
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
		v_condition,
		v_init,
		v_iterate;

	if( this !== ast_for )
	{
		inherit = this;

		v_block = this.block;

		v_condition = this.condition;

		v_init = this.init;

		v_iterate = this.iterate;
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

			case 'condition' :

				if( arg !== pass )
				{
					v_condition = arg;
				}

				break;

			case 'init' :

				if( arg !== pass )
				{
					v_init = arg;
				}

				break;

			case 'iterate' :

				if( arg !== pass )
				{
					v_iterate = arg;
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
/**/	if( v_condition === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_condition === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_condition.reflect !== 'ast_and'
/**/		&&
/**/		v_condition.reflect !== 'ast_arrayLiteral'
/**/		&&
/**/		v_condition.reflect !== 'ast_assign'
/**/		&&
/**/		v_condition.reflect !== 'ast_boolean'
/**/		&&
/**/		v_condition.reflect !== 'ast_call'
/**/		&&
/**/		v_condition.reflect !== 'ast_comma'
/**/		&&
/**/		v_condition.reflect !== 'ast_condition'
/**/		&&
/**/		v_condition.reflect !== 'ast_delete'
/**/		&&
/**/		v_condition.reflect !== 'ast_differs'
/**/		&&
/**/		v_condition.reflect !== 'ast_dot'
/**/		&&
/**/		v_condition.reflect !== 'ast_equals'
/**/		&&
/**/		v_condition.reflect !== 'ast_func'
/**/		&&
/**/		v_condition.reflect !== 'ast_greaterThan'
/**/		&&
/**/		v_condition.reflect !== 'ast_instanceof'
/**/		&&
/**/		v_condition.reflect !== 'ast_lessThan'
/**/		&&
/**/		v_condition.reflect !== 'ast_member'
/**/		&&
/**/		v_condition.reflect !== 'ast_multiply'
/**/		&&
/**/		v_condition.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_condition.reflect !== 'ast_new'
/**/		&&
/**/		v_condition.reflect !== 'ast_not'
/**/		&&
/**/		v_condition.reflect !== 'ast_null'
/**/		&&
/**/		v_condition.reflect !== 'ast_number'
/**/		&&
/**/		v_condition.reflect !== 'ast_objLiteral'
/**/		&&
/**/		v_condition.reflect !== 'ast_or'
/**/		&&
/**/		v_condition.reflect !== 'ast_plus'
/**/		&&
/**/		v_condition.reflect !== 'ast_plusAssign'
/**/		&&
/**/		v_condition.reflect !== 'ast_preIncrement'
/**/		&&
/**/		v_condition.reflect !== 'ast_string'
/**/		&&
/**/		v_condition.reflect !== 'ast_typeof'
/**/		&&
/**/		v_condition.reflect !== 'ast_var'
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_init === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_init === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_init.reflect !== 'ast_and'
/**/		&&
/**/		v_init.reflect !== 'ast_arrayLiteral'
/**/		&&
/**/		v_init.reflect !== 'ast_assign'
/**/		&&
/**/		v_init.reflect !== 'ast_boolean'
/**/		&&
/**/		v_init.reflect !== 'ast_call'
/**/		&&
/**/		v_init.reflect !== 'ast_comma'
/**/		&&
/**/		v_init.reflect !== 'ast_condition'
/**/		&&
/**/		v_init.reflect !== 'ast_delete'
/**/		&&
/**/		v_init.reflect !== 'ast_differs'
/**/		&&
/**/		v_init.reflect !== 'ast_dot'
/**/		&&
/**/		v_init.reflect !== 'ast_equals'
/**/		&&
/**/		v_init.reflect !== 'ast_func'
/**/		&&
/**/		v_init.reflect !== 'ast_greaterThan'
/**/		&&
/**/		v_init.reflect !== 'ast_instanceof'
/**/		&&
/**/		v_init.reflect !== 'ast_lessThan'
/**/		&&
/**/		v_init.reflect !== 'ast_member'
/**/		&&
/**/		v_init.reflect !== 'ast_multiply'
/**/		&&
/**/		v_init.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_init.reflect !== 'ast_new'
/**/		&&
/**/		v_init.reflect !== 'ast_not'
/**/		&&
/**/		v_init.reflect !== 'ast_null'
/**/		&&
/**/		v_init.reflect !== 'ast_number'
/**/		&&
/**/		v_init.reflect !== 'ast_objLiteral'
/**/		&&
/**/		v_init.reflect !== 'ast_or'
/**/		&&
/**/		v_init.reflect !== 'ast_plus'
/**/		&&
/**/		v_init.reflect !== 'ast_plusAssign'
/**/		&&
/**/		v_init.reflect !== 'ast_preIncrement'
/**/		&&
/**/		v_init.reflect !== 'ast_string'
/**/		&&
/**/		v_init.reflect !== 'ast_typeof'
/**/		&&
/**/		v_init.reflect !== 'ast_var'
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_iterate === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_iterate === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_iterate.reflect !== 'ast_and'
/**/		&&
/**/		v_iterate.reflect !== 'ast_arrayLiteral'
/**/		&&
/**/		v_iterate.reflect !== 'ast_assign'
/**/		&&
/**/		v_iterate.reflect !== 'ast_boolean'
/**/		&&
/**/		v_iterate.reflect !== 'ast_call'
/**/		&&
/**/		v_iterate.reflect !== 'ast_comma'
/**/		&&
/**/		v_iterate.reflect !== 'ast_condition'
/**/		&&
/**/		v_iterate.reflect !== 'ast_delete'
/**/		&&
/**/		v_iterate.reflect !== 'ast_differs'
/**/		&&
/**/		v_iterate.reflect !== 'ast_dot'
/**/		&&
/**/		v_iterate.reflect !== 'ast_equals'
/**/		&&
/**/		v_iterate.reflect !== 'ast_func'
/**/		&&
/**/		v_iterate.reflect !== 'ast_greaterThan'
/**/		&&
/**/		v_iterate.reflect !== 'ast_instanceof'
/**/		&&
/**/		v_iterate.reflect !== 'ast_lessThan'
/**/		&&
/**/		v_iterate.reflect !== 'ast_member'
/**/		&&
/**/		v_iterate.reflect !== 'ast_multiply'
/**/		&&
/**/		v_iterate.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_iterate.reflect !== 'ast_new'
/**/		&&
/**/		v_iterate.reflect !== 'ast_not'
/**/		&&
/**/		v_iterate.reflect !== 'ast_null'
/**/		&&
/**/		v_iterate.reflect !== 'ast_number'
/**/		&&
/**/		v_iterate.reflect !== 'ast_objLiteral'
/**/		&&
/**/		v_iterate.reflect !== 'ast_or'
/**/		&&
/**/		v_iterate.reflect !== 'ast_plus'
/**/		&&
/**/		v_iterate.reflect !== 'ast_plusAssign'
/**/		&&
/**/		v_iterate.reflect !== 'ast_preIncrement'
/**/		&&
/**/		v_iterate.reflect !== 'ast_string'
/**/		&&
/**/		v_iterate.reflect !== 'ast_typeof'
/**/		&&
/**/		v_iterate.reflect !== 'ast_var'
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
			v_condition === inherit.condition
			||
			v_condition.equals && v_condition.equals( inherit.condition )
		)
		&&
		(
			v_init === inherit.init
			||
			v_init.equals && v_init.equals( inherit.init )
		)
		&&
		(
			v_iterate === inherit.iterate
			||
			v_iterate.equals && v_iterate.equals( inherit.iterate )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_block, v_condition, v_init, v_iterate );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'ast_for:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'for:abstract';


/*
| Reflection.
*/
prototype.reflect = 'ast_for';


/*
| Name Reflection.
*/
prototype.reflectName = 'for';


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

	if( obj.reflect !== 'ast_for' )
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
			this.condition === obj.condition
			||
			this.condition.equals && this.condition.equals( obj.condition )
		)
		&&
		(
			this.init === obj.init
			||
			this.init.equals && this.init.equals( obj.init )
		)
		&&
		(
			this.iterate === obj.iterate
			||
			this.iterate.equals && this.iterate.equals( obj.iterate )
		)
	);
};


}
)( );
