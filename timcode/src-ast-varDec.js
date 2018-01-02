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
	ast_varDec;


if( !ast_varDec )
{
	ast_varDec = { };
}


if( !NODE )
{
/**/if( CHECK )
/**/{
/**/	if( timModules.ast_varDec !== undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	timModules.ast_varDec = ast_varDec;
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
		v_assign,
		v_name
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.assign = v_assign;

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
| Creates a new varDec object.
*/
ast_varDec.create =
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

				throw new Error( );
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
/**/			v_assign.reflect !== 'ast_divide'
/**/			&&
/**/			v_assign.reflect !== 'ast_divideAssign'
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
/**/			v_assign.reflect !== 'ast_minus'
/**/			&&
/**/			v_assign.reflect !== 'ast_minusAssign'
/**/			&&
/**/			v_assign.reflect !== 'ast_multiply'
/**/			&&
/**/			v_assign.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_assign.reflect !== 'ast_negate'
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
/**/			v_assign.reflect !== 'ast_postDecrement'
/**/			&&
/**/			v_assign.reflect !== 'ast_postIncrement'
/**/			&&
/**/			v_assign.reflect !== 'ast_preDecrement'
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
| Reflection.
*/
prototype.reflect = 'ast_varDec';


/*
| Type reflection.
*/
prototype.timtype = ast_varDec;


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
