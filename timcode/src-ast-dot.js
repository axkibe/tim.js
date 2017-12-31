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
	ast_dot;


if( !ast_dot )
{
	ast_dot = { };
}


if( !NODE )
{
/**/if( CHECK )
/**/{
/**/	if( timModules.ast_dot !== undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	timModules.ast_dot = ast_dot;
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
		v_expr,
		v_member
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.expr = v_expr;

	this.member = v_member;

	this._init( );

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


ast_dot.prototype = prototype;


/*
| Creates a new dot object.
*/
ast_dot.create =
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
		v_expr,
		v_member;

	if( this !== ast_dot )
	{
		inherit = this;

		v_expr = this.expr;

		v_member = this.member;
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
			case 'expr' :

				if( arg !== pass )
				{
					v_expr = arg;
				}

				break;

			case 'member' :

				if( arg !== pass )
				{
					v_member = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_expr === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_expr === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_expr.reflect !== 'ast_and'
/**/		&&
/**/		v_expr.reflect !== 'ast_arrayLiteral'
/**/		&&
/**/		v_expr.reflect !== 'ast_assign'
/**/		&&
/**/		v_expr.reflect !== 'ast_boolean'
/**/		&&
/**/		v_expr.reflect !== 'ast_call'
/**/		&&
/**/		v_expr.reflect !== 'ast_comma'
/**/		&&
/**/		v_expr.reflect !== 'ast_condition'
/**/		&&
/**/		v_expr.reflect !== 'ast_delete'
/**/		&&
/**/		v_expr.reflect !== 'ast_differs'
/**/		&&
/**/		v_expr.reflect !== 'ast_divide'
/**/		&&
/**/		v_expr.reflect !== 'ast_divideAssign'
/**/		&&
/**/		v_expr.reflect !== 'ast_dot'
/**/		&&
/**/		v_expr.reflect !== 'ast_equals'
/**/		&&
/**/		v_expr.reflect !== 'ast_func'
/**/		&&
/**/		v_expr.reflect !== 'ast_greaterThan'
/**/		&&
/**/		v_expr.reflect !== 'ast_instanceof'
/**/		&&
/**/		v_expr.reflect !== 'ast_lessThan'
/**/		&&
/**/		v_expr.reflect !== 'ast_member'
/**/		&&
/**/		v_expr.reflect !== 'ast_minus'
/**/		&&
/**/		v_expr.reflect !== 'ast_minusAssign'
/**/		&&
/**/		v_expr.reflect !== 'ast_multiply'
/**/		&&
/**/		v_expr.reflect !== 'ast_multiplyAssign'
/**/		&&
/**/		v_expr.reflect !== 'ast_negate'
/**/		&&
/**/		v_expr.reflect !== 'ast_new'
/**/		&&
/**/		v_expr.reflect !== 'ast_not'
/**/		&&
/**/		v_expr.reflect !== 'ast_null'
/**/		&&
/**/		v_expr.reflect !== 'ast_number'
/**/		&&
/**/		v_expr.reflect !== 'ast_objLiteral'
/**/		&&
/**/		v_expr.reflect !== 'ast_or'
/**/		&&
/**/		v_expr.reflect !== 'ast_plus'
/**/		&&
/**/		v_expr.reflect !== 'ast_plusAssign'
/**/		&&
/**/		v_expr.reflect !== 'ast_postDecrement'
/**/		&&
/**/		v_expr.reflect !== 'ast_postIncrement'
/**/		&&
/**/		v_expr.reflect !== 'ast_preDecrement'
/**/		&&
/**/		v_expr.reflect !== 'ast_preIncrement'
/**/		&&
/**/		v_expr.reflect !== 'ast_string'
/**/		&&
/**/		v_expr.reflect !== 'ast_typeof'
/**/		&&
/**/		v_expr.reflect !== 'ast_var'
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_member === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_member === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		typeof( v_member ) !== 'string'
/**/		&&
/**/		!( v_member instanceof String )
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_expr === inherit.expr
			||
			v_expr.equals( inherit.expr )
		)
		&&
		v_member === inherit.member
	)
	{
		return inherit;
	}

	return new Constructor( v_expr, v_member );
};


/*
| Reflection.
*/
prototype.reflect = 'ast_dot';


/*
| Name Reflection.
*/
prototype.reflectName = 'dot';


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

	if( obj.reflect !== 'ast_dot' )
	{
		return false;
	}

	return (
		(
			this.expr === obj.expr
			||
			this.expr.equals( obj.expr )
		)
		&&
		this.member === obj.member
	);
};


}
)( );
