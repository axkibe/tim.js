/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
var
	ast_block,
	tim_proto,
	timModules;


/*
| The typed immutable.
*/
var
	ast_for;


if( !ast_for )
{
	ast_for = { };
}


if( !NODE )
{
/**/if( CHECK )
/**/{
/**/	if( timModules.ast_for !== undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	timModules.ast_for = ast_for;
}


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
	ast_block = require( '../ast/block' );

	tim_proto = tim.proto;
}


/*
| Constructor.
*/
var
	Constructor,
	prototype;


Constructor =
	function(
		v_block,
		v_condition,
		v_init,
		v_iterate
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
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
| Creates a new for object.
*/
ast_for.create =
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

				throw new Error( );
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
/**/		v_condition.reflect !== 'ast_divide'
/**/		&&
/**/		v_condition.reflect !== 'ast_divideAssign'
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
/**/		v_condition.reflect !== 'ast_minus'
/**/		&&
/**/		v_condition.reflect !== 'ast_minusAssign'
/**/		&&
/**/		v_condition.reflect !== 'ast_multiply'
/**/		&&
/**/		v_condition.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_condition.reflect !== 'ast_negate'
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
/**/		v_condition.reflect !== 'ast_postDecrement'
/**/		&&
/**/		v_condition.reflect !== 'ast_postIncrement'
/**/		&&
/**/		v_condition.reflect !== 'ast_preDecrement'
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
/**/		v_init.reflect !== 'ast_divide'
/**/		&&
/**/		v_init.reflect !== 'ast_divideAssign'
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
/**/		v_init.reflect !== 'ast_minus'
/**/		&&
/**/		v_init.reflect !== 'ast_minusAssign'
/**/		&&
/**/		v_init.reflect !== 'ast_multiply'
/**/		&&
/**/		v_init.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_init.reflect !== 'ast_negate'
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
/**/		v_init.reflect !== 'ast_postDecrement'
/**/		&&
/**/		v_init.reflect !== 'ast_postIncrement'
/**/		&&
/**/		v_init.reflect !== 'ast_preDecrement'
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
/**/		v_iterate.reflect !== 'ast_divide'
/**/		&&
/**/		v_iterate.reflect !== 'ast_divideAssign'
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
/**/		v_iterate.reflect !== 'ast_minus'
/**/		&&
/**/		v_iterate.reflect !== 'ast_minusAssign'
/**/		&&
/**/		v_iterate.reflect !== 'ast_multiply'
/**/		&&
/**/		v_iterate.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_iterate.reflect !== 'ast_negate'
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
/**/		v_iterate.reflect !== 'ast_postDecrement'
/**/		&&
/**/		v_iterate.reflect !== 'ast_postIncrement'
/**/		&&
/**/		v_iterate.reflect !== 'ast_preDecrement'
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
			v_block.equals( inherit.block )
		)
		&&
		(
			v_condition === inherit.condition
			||
			v_condition.equals( inherit.condition )
		)
		&&
		(
			v_init === inherit.init
			||
			v_init.equals( inherit.init )
		)
		&&
		(
			v_iterate === inherit.iterate
			||
			v_iterate.equals( inherit.iterate )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_block, v_condition, v_init, v_iterate );
};


/*
| Reflection.
*/
prototype.reflect = 'ast_for';


/*
| Type reflection.
*/
prototype.type = ast_for;


/*
| Sets values by path.
*/
prototype.setPath = tim_proto.setPath;


/*
| Gets values by path
*/
prototype.getPath = tim_proto.getPath;


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
			this.block.equals( obj.block )
		)
		&&
		(
			this.condition === obj.condition
			||
			this.condition.equals( obj.condition )
		)
		&&
		(
			this.init === obj.init
			||
			this.init.equals( obj.init )
		)
		&&
		(
			this.iterate === obj.iterate
			||
			this.iterate.equals( obj.iterate )
		)
	);
};


}
)( );
