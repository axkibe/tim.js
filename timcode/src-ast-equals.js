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
let ast_equals = NODE ? module.exports : module;


let tim_proto = tim.proto;


/*
| Constructor.
*/
var
	Constructor,
	prototype;


Constructor =
	function(
		v_left,
		v_right
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.left = v_left;

	this.right = v_right;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


ast_equals.prototype = prototype;


/*
| Creates a new equals object.
*/
ast_equals.create =
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
		v_left,
		v_right;

	if( this !== ast_equals )
	{
		inherit = this;

		v_left = this.left;

		v_right = this.right;
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
			case 'left' :

				if( arg !== pass )
				{
					v_left = arg;
				}

				break;

			case 'right' :

				if( arg !== pass )
				{
					v_right = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_left === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_left === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_left.reflect !== 'ast_and'
/**/		&&
/**/		v_left.reflect !== 'ast_arrayLiteral'
/**/		&&
/**/		v_left.reflect !== 'ast_assign'
/**/		&&
/**/		v_left.reflect !== 'ast_boolean'
/**/		&&
/**/		v_left.reflect !== 'ast_call'
/**/		&&
/**/		v_left.reflect !== 'ast_comma'
/**/		&&
/**/		v_left.reflect !== 'ast_condition'
/**/		&&
/**/		v_left.reflect !== 'ast_delete'
/**/		&&
/**/		v_left.reflect !== 'ast_differs'
/**/		&&
/**/		v_left.reflect !== 'ast_divide'
/**/		&&
/**/		v_left.reflect !== 'ast_divideAssign'
/**/		&&
/**/		v_left.reflect !== 'ast_dot'
/**/		&&
/**/		v_left.reflect !== 'ast_equals'
/**/		&&
/**/		v_left.reflect !== 'ast_func'
/**/		&&
/**/		v_left.reflect !== 'ast_greaterThan'
/**/		&&
/**/		v_left.reflect !== 'ast_instanceof'
/**/		&&
/**/		v_left.reflect !== 'ast_lessThan'
/**/		&&
/**/		v_left.reflect !== 'ast_member'
/**/		&&
/**/		v_left.reflect !== 'ast_minus'
/**/		&&
/**/		v_left.reflect !== 'ast_minusAssign'
/**/		&&
/**/		v_left.reflect !== 'ast_multiply'
/**/		&&
/**/		v_left.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_left.reflect !== 'ast_negate'
/**/		&&
/**/		v_left.reflect !== 'ast_new'
/**/		&&
/**/		v_left.reflect !== 'ast_not'
/**/		&&
/**/		v_left.reflect !== 'ast_null'
/**/		&&
/**/		v_left.reflect !== 'ast_number'
/**/		&&
/**/		v_left.reflect !== 'ast_objLiteral'
/**/		&&
/**/		v_left.reflect !== 'ast_or'
/**/		&&
/**/		v_left.reflect !== 'ast_plus'
/**/		&&
/**/		v_left.reflect !== 'ast_plusAssign'
/**/		&&
/**/		v_left.reflect !== 'ast_postDecrement'
/**/		&&
/**/		v_left.reflect !== 'ast_postIncrement'
/**/		&&
/**/		v_left.reflect !== 'ast_preDecrement'
/**/		&&
/**/		v_left.reflect !== 'ast_preIncrement'
/**/		&&
/**/		v_left.reflect !== 'ast_string'
/**/		&&
/**/		v_left.reflect !== 'ast_typeof'
/**/		&&
/**/		v_left.reflect !== 'ast_var'
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_right === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_right === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_right.reflect !== 'ast_and'
/**/		&&
/**/		v_right.reflect !== 'ast_arrayLiteral'
/**/		&&
/**/		v_right.reflect !== 'ast_assign'
/**/		&&
/**/		v_right.reflect !== 'ast_boolean'
/**/		&&
/**/		v_right.reflect !== 'ast_call'
/**/		&&
/**/		v_right.reflect !== 'ast_comma'
/**/		&&
/**/		v_right.reflect !== 'ast_condition'
/**/		&&
/**/		v_right.reflect !== 'ast_delete'
/**/		&&
/**/		v_right.reflect !== 'ast_differs'
/**/		&&
/**/		v_right.reflect !== 'ast_divide'
/**/		&&
/**/		v_right.reflect !== 'ast_divideAssign'
/**/		&&
/**/		v_right.reflect !== 'ast_dot'
/**/		&&
/**/		v_right.reflect !== 'ast_equals'
/**/		&&
/**/		v_right.reflect !== 'ast_func'
/**/		&&
/**/		v_right.reflect !== 'ast_greaterThan'
/**/		&&
/**/		v_right.reflect !== 'ast_instanceof'
/**/		&&
/**/		v_right.reflect !== 'ast_lessThan'
/**/		&&
/**/		v_right.reflect !== 'ast_member'
/**/		&&
/**/		v_right.reflect !== 'ast_minus'
/**/		&&
/**/		v_right.reflect !== 'ast_minusAssign'
/**/		&&
/**/		v_right.reflect !== 'ast_multiply'
/**/		&&
/**/		v_right.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_right.reflect !== 'ast_negate'
/**/		&&
/**/		v_right.reflect !== 'ast_new'
/**/		&&
/**/		v_right.reflect !== 'ast_not'
/**/		&&
/**/		v_right.reflect !== 'ast_null'
/**/		&&
/**/		v_right.reflect !== 'ast_number'
/**/		&&
/**/		v_right.reflect !== 'ast_objLiteral'
/**/		&&
/**/		v_right.reflect !== 'ast_or'
/**/		&&
/**/		v_right.reflect !== 'ast_plus'
/**/		&&
/**/		v_right.reflect !== 'ast_plusAssign'
/**/		&&
/**/		v_right.reflect !== 'ast_postDecrement'
/**/		&&
/**/		v_right.reflect !== 'ast_postIncrement'
/**/		&&
/**/		v_right.reflect !== 'ast_preDecrement'
/**/		&&
/**/		v_right.reflect !== 'ast_preIncrement'
/**/		&&
/**/		v_right.reflect !== 'ast_string'
/**/		&&
/**/		v_right.reflect !== 'ast_typeof'
/**/		&&
/**/		v_right.reflect !== 'ast_var'
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_left === inherit.left
			||
			v_left.equals( inherit.left )
		)
		&&
		(
			v_right === inherit.right
			||
			v_right.equals( inherit.right )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_left, v_right );
};


/*
| Reflection.
*/
prototype.reflect = 'ast_equals';


/*
| Type reflection.
*/
prototype.timtype = ast_equals;


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

	if( obj.reflect !== 'ast_equals' )
	{
		return false;
	}

	return (
		(
			this.left === obj.left
			||
			this.left.equals( obj.left )
		)
		&&
		(
			this.right === obj.right
			||
			this.right.equals( obj.right )
		)
	);
};


}
)( );
