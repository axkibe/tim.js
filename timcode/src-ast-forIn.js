/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
var
	tim_proto,
	timModules;


/*
| The typed immutable.
*/
var
	ast_forIn;


if( !ast_forIn )
{
	ast_forIn = { };
}


if( !NODE )
{
/**/if( CHECK )
/**/{
/**/	if( timModules.ast_forIn !== undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	timModules.ast_forIn = ast_forIn;
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
		v_object,
		v_variable
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
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
| Creates a new forIn object.
*/
ast_forIn.create =
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
/**/		v_object.reflect !== 'ast_divide'
/**/		&&
/**/		v_object.reflect !== 'ast_divideAssign'
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
/**/		v_object.reflect !== 'ast_minus'
/**/		&&
/**/		v_object.reflect !== 'ast_minusAssign'
/**/		&&
/**/		v_object.reflect !== 'ast_multiply'
/**/		&&
/**/		v_object.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_object.reflect !== 'ast_negate'
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
/**/		v_object.reflect !== 'ast_postDecrement'
/**/		&&
/**/		v_object.reflect !== 'ast_postIncrement'
/**/		&&
/**/		v_object.reflect !== 'ast_preDecrement'
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
/**/		v_variable.reflect !== 'ast_var'
/**/		&&
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
			v_block.equals( inherit.block )
		)
		&&
		(
			v_object === inherit.object
			||
			v_object.equals( inherit.object )
		)
		&&
		(
			v_variable === inherit.variable
			||
			v_variable.timtype && v_variable.equals( inherit.variable )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_block, v_object, v_variable );
};


/*
| Reflection.
*/
prototype.reflect = 'ast_forIn';


/*
| Type reflection.
*/
prototype.timtype = ast_forIn;


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

	if( obj.reflect !== 'ast_forIn' )
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
			this.object === obj.object
			||
			this.object.equals( obj.object )
		)
		&&
		(
			this.variable === obj.variable
			||
			this.variable.timtype && this.variable.equals( obj.variable )
		)
	);
};


}
)( );
