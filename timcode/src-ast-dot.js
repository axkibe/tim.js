/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
'use strict';


const tt_and = require( './and' );


const tt_arrayLiteral = require( './arrayLiteral' );


const tt_assign = require( './assign' );


const tt_boolean = require( './boolean' );


const tt_call = require( './call' );


const tt_comma = require( './comma' );


const tt_condition = require( './condition' );


const tt_delete = require( './delete' );


const tt_differs = require( './differs' );


const tt_divide = require( './divide' );


const tt_divideAssign = require( './divideAssign' );


const tt_dot = require( './dot' );


const tt_equals = require( './equals' );


const tt_func = require( './func' );


const tt_greaterThan = require( './greaterThan' );


const tt_instanceof = require( './instanceof' );


const tt_lessThan = require( './lessThan' );


const tt_member = require( './member' );


const tt_minus = require( './minus' );


const tt_minusAssign = require( './minusAssign' );


const tt_multiply = require( './multiply' );


const tt_multiplyAssign = require( './multiplyAssign' );


const tt_negate = require( './negate' );


const tt_new = require( './new' );


const tt_not = require( './not' );


const tt_null = require( './null' );


const tt_number = require( './number' );


const tt_objLiteral = require( './objLiteral' );


const tt_or = require( './or' );


const tt_plus = require( './plus' );


const tt_plusAssign = require( './plusAssign' );


const tt_postDecrement = require( './postDecrement' );


const tt_postIncrement = require( './postIncrement' );


const tt_preDecrement = require( './preDecrement' );


const tt_preIncrement = require( './preIncrement' );


const tt_string = require( './string' );


const tt_typeof = require( './typeof' );


const tt_undefined = require( './undefined' );


const tt_var = require( './var' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
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
const prototype = Constructor.prototype;


self.prototype = prototype;


/*
| Creates a new object.
*/
self.create =
prototype.create =
	function(
		// free strings
	)
{
	let inherit;

	let v_expr;

	let v_member;

	if( this !== self )
	{
		inherit = this;

		v_expr = this.expr;

		v_member = this.member;
	}

	for(
		let a = 0, al = arguments.length;
		a < al;
		a += 2
	)
	{
		let arg = arguments[ a + 1 ];

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
/**/		v_expr.timtype !== tt_and
/**/		&&
/**/		v_expr.timtype !== tt_arrayLiteral
/**/		&&
/**/		v_expr.timtype !== tt_assign
/**/		&&
/**/		v_expr.timtype !== tt_boolean
/**/		&&
/**/		v_expr.timtype !== tt_call
/**/		&&
/**/		v_expr.timtype !== tt_comma
/**/		&&
/**/		v_expr.timtype !== tt_condition
/**/		&&
/**/		v_expr.timtype !== tt_delete
/**/		&&
/**/		v_expr.timtype !== tt_differs
/**/		&&
/**/		v_expr.timtype !== tt_divide
/**/		&&
/**/		v_expr.timtype !== tt_divideAssign
/**/		&&
/**/		v_expr.timtype !== tt_dot
/**/		&&
/**/		v_expr.timtype !== tt_equals
/**/		&&
/**/		v_expr.timtype !== tt_func
/**/		&&
/**/		v_expr.timtype !== tt_greaterThan
/**/		&&
/**/		v_expr.timtype !== tt_instanceof
/**/		&&
/**/		v_expr.timtype !== tt_lessThan
/**/		&&
/**/		v_expr.timtype !== tt_member
/**/		&&
/**/		v_expr.timtype !== tt_minus
/**/		&&
/**/		v_expr.timtype !== tt_minusAssign
/**/		&&
/**/		v_expr.timtype !== tt_multiply
/**/		&&
/**/		v_expr.timtype !== tt_multiplyAssign
/**/		&&
/**/		v_expr.timtype !== tt_negate
/**/		&&
/**/		v_expr.timtype !== tt_new
/**/		&&
/**/		v_expr.timtype !== tt_not
/**/		&&
/**/		v_expr.timtype !== tt_null
/**/		&&
/**/		v_expr.timtype !== tt_number
/**/		&&
/**/		v_expr.timtype !== tt_objLiteral
/**/		&&
/**/		v_expr.timtype !== tt_or
/**/		&&
/**/		v_expr.timtype !== tt_plus
/**/		&&
/**/		v_expr.timtype !== tt_plusAssign
/**/		&&
/**/		v_expr.timtype !== tt_postDecrement
/**/		&&
/**/		v_expr.timtype !== tt_postIncrement
/**/		&&
/**/		v_expr.timtype !== tt_preDecrement
/**/		&&
/**/		v_expr.timtype !== tt_preIncrement
/**/		&&
/**/		v_expr.timtype !== tt_string
/**/		&&
/**/		v_expr.timtype !== tt_typeof
/**/		&&
/**/		v_expr.timtype !== tt_undefined
/**/		&&
/**/		v_expr.timtype !== tt_var
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
/**/	if( typeof( v_member ) !== 'string' )
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
| Type reflection.
*/
prototype.timtype = self;


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

	if( obj.timtype !== self )
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
