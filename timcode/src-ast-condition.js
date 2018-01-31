/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/


/*
| Capsule
*/
(
function( ) {
'use strict';


/*
| The typed immutable.
*/
let ast_condition = NODE ? module.exports : module;


let tim_proto = tim.proto;


/*
| Constructor.
*/
var
	Constructor,
	prototype;


Constructor =
	function(
		v_condition,
		v_elsewise,
		v_then
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.condition = v_condition;

	this.elsewise = v_elsewise;

	this.then = v_then;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


ast_condition.prototype = prototype;


/*
| Creates a new condition object.
*/
ast_condition.create =
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
		v_condition,
		v_elsewise,
		v_then;

	if( this !== ast_condition )
	{
		inherit = this;

		v_condition = this.condition;

		v_elsewise = this.elsewise;

		v_then = this.then;
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
			case 'condition' :

				if( arg !== pass )
				{
					v_condition = arg;
				}

				break;

			case 'elsewise' :

				if( arg !== pass )
				{
					v_elsewise = arg;
				}

				break;

			case 'then' :

				if( arg !== pass )
				{
					v_then = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
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
/**/	if( v_elsewise === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_elsewise === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_elsewise.reflect !== 'ast_and'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_arrayLiteral'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_assign'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_boolean'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_call'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_comma'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_condition'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_delete'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_differs'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_divide'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_divideAssign'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_dot'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_equals'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_func'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_greaterThan'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_instanceof'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_lessThan'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_member'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_minus'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_minusAssign'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_multiply'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_negate'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_new'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_not'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_null'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_number'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_objLiteral'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_or'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_plus'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_plusAssign'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_postDecrement'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_postIncrement'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_preDecrement'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_preIncrement'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_string'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_typeof'
/**/		&&
/**/		v_elsewise.reflect !== 'ast_var'
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_then === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_then === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_then.reflect !== 'ast_and'
/**/		&&
/**/		v_then.reflect !== 'ast_arrayLiteral'
/**/		&&
/**/		v_then.reflect !== 'ast_assign'
/**/		&&
/**/		v_then.reflect !== 'ast_boolean'
/**/		&&
/**/		v_then.reflect !== 'ast_call'
/**/		&&
/**/		v_then.reflect !== 'ast_comma'
/**/		&&
/**/		v_then.reflect !== 'ast_condition'
/**/		&&
/**/		v_then.reflect !== 'ast_delete'
/**/		&&
/**/		v_then.reflect !== 'ast_differs'
/**/		&&
/**/		v_then.reflect !== 'ast_divide'
/**/		&&
/**/		v_then.reflect !== 'ast_divideAssign'
/**/		&&
/**/		v_then.reflect !== 'ast_dot'
/**/		&&
/**/		v_then.reflect !== 'ast_equals'
/**/		&&
/**/		v_then.reflect !== 'ast_func'
/**/		&&
/**/		v_then.reflect !== 'ast_greaterThan'
/**/		&&
/**/		v_then.reflect !== 'ast_instanceof'
/**/		&&
/**/		v_then.reflect !== 'ast_lessThan'
/**/		&&
/**/		v_then.reflect !== 'ast_member'
/**/		&&
/**/		v_then.reflect !== 'ast_minus'
/**/		&&
/**/		v_then.reflect !== 'ast_minusAssign'
/**/		&&
/**/		v_then.reflect !== 'ast_multiply'
/**/		&&
/**/		v_then.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_then.reflect !== 'ast_negate'
/**/		&&
/**/		v_then.reflect !== 'ast_new'
/**/		&&
/**/		v_then.reflect !== 'ast_not'
/**/		&&
/**/		v_then.reflect !== 'ast_null'
/**/		&&
/**/		v_then.reflect !== 'ast_number'
/**/		&&
/**/		v_then.reflect !== 'ast_objLiteral'
/**/		&&
/**/		v_then.reflect !== 'ast_or'
/**/		&&
/**/		v_then.reflect !== 'ast_plus'
/**/		&&
/**/		v_then.reflect !== 'ast_plusAssign'
/**/		&&
/**/		v_then.reflect !== 'ast_postDecrement'
/**/		&&
/**/		v_then.reflect !== 'ast_postIncrement'
/**/		&&
/**/		v_then.reflect !== 'ast_preDecrement'
/**/		&&
/**/		v_then.reflect !== 'ast_preIncrement'
/**/		&&
/**/		v_then.reflect !== 'ast_string'
/**/		&&
/**/		v_then.reflect !== 'ast_typeof'
/**/		&&
/**/		v_then.reflect !== 'ast_var'
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_condition === inherit.condition
			||
			v_condition.equals( inherit.condition )
		)
		&&
		(
			v_elsewise === inherit.elsewise
			||
			v_elsewise.equals( inherit.elsewise )
		)
		&&
		(
			v_then === inherit.then
			||
			v_then.equals( inherit.then )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_condition, v_elsewise, v_then );
};


/*
| Reflection.
*/
prototype.reflect = 'ast_condition';


/*
| Type reflection.
*/
prototype.timtype = ast_condition;


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

	if( obj.reflect !== 'ast_condition' )
	{
		return false;
	}

	return (
		(
			this.condition === obj.condition
			||
			this.condition.equals( obj.condition )
		)
		&&
		(
			this.elsewise === obj.elsewise
			||
			this.elsewise.equals( obj.elsewise )
		)
		&&
		(
			this.then === obj.then
			||
			this.then.equals( obj.then )
		)
	);
};


}
)( );
