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
	ast_fail;


if( !ast_fail )
{
	ast_fail = { };
}


if( !NODE )
{
/**/if( CHECK )
/**/{
/**/	if( timModules.ast_fail !== undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	timModules.ast_fail = ast_fail;
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
		v_message
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.message = v_message;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


ast_fail.prototype = prototype;


/*
| Creates a new fail object.
*/
ast_fail.create =
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
		v_message;

	if( this !== ast_fail )
	{
		inherit = this;

		v_message = this.message;
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
			case 'message' :

				if( arg !== pass )
				{
					v_message = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_message === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_message !== undefined )
/**/	{
/**/		if(
/**/			v_message.reflect !== 'ast_and'
/**/			&&
/**/			v_message.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_message.reflect !== 'ast_assign'
/**/			&&
/**/			v_message.reflect !== 'ast_boolean'
/**/			&&
/**/			v_message.reflect !== 'ast_call'
/**/			&&
/**/			v_message.reflect !== 'ast_comma'
/**/			&&
/**/			v_message.reflect !== 'ast_condition'
/**/			&&
/**/			v_message.reflect !== 'ast_delete'
/**/			&&
/**/			v_message.reflect !== 'ast_differs'
/**/			&&
/**/			v_message.reflect !== 'ast_divide'
/**/			&&
/**/			v_message.reflect !== 'ast_divideAssign'
/**/			&&
/**/			v_message.reflect !== 'ast_dot'
/**/			&&
/**/			v_message.reflect !== 'ast_equals'
/**/			&&
/**/			v_message.reflect !== 'ast_func'
/**/			&&
/**/			v_message.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_message.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_message.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_message.reflect !== 'ast_member'
/**/			&&
/**/			v_message.reflect !== 'ast_minus'
/**/			&&
/**/			v_message.reflect !== 'ast_minusAssign'
/**/			&&
/**/			v_message.reflect !== 'ast_multiply'
/**/			&&
/**/			v_message.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_message.reflect !== 'ast_negate'
/**/			&&
/**/			v_message.reflect !== 'ast_new'
/**/			&&
/**/			v_message.reflect !== 'ast_not'
/**/			&&
/**/			v_message.reflect !== 'ast_null'
/**/			&&
/**/			v_message.reflect !== 'ast_number'
/**/			&&
/**/			v_message.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_message.reflect !== 'ast_or'
/**/			&&
/**/			v_message.reflect !== 'ast_plus'
/**/			&&
/**/			v_message.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_message.reflect !== 'ast_postDecrement'
/**/			&&
/**/			v_message.reflect !== 'ast_postIncrement'
/**/			&&
/**/			v_message.reflect !== 'ast_preDecrement'
/**/			&&
/**/			v_message.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_message.reflect !== 'ast_string'
/**/			&&
/**/			v_message.reflect !== 'ast_typeof'
/**/			&&
/**/			v_message.reflect !== 'ast_var'
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
			v_message === inherit.message
			||
			v_message !== undefined && v_message.equals( inherit.message )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_message );
};


/*
| Reflection.
*/
prototype.reflect = 'ast_fail';


/*
| Name Reflection.
*/
prototype.reflectName = 'fail';


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

	if( obj.reflect !== 'ast_fail' )
	{
		return false;
	}

	return (
		this.message === obj.message
		||
		this.message !== undefined && this.message.equals( obj.message )
	);
};


}
)( );
