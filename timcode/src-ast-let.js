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
let ast_let = NODE ? module.exports : module;


let ast_and = require( '../ast/and' );


let ast_arrayLiteral = require( '../ast/arrayLiteral' );


let ast_assign = require( '../ast/assign' );


let ast_boolean = require( '../ast/boolean' );


let ast_call = require( '../ast/call' );


let ast_comma = require( '../ast/comma' );


let ast_condition = require( '../ast/condition' );


let ast_delete = require( '../ast/delete' );


let ast_differs = require( '../ast/differs' );


let ast_divide = require( '../ast/divide' );


let ast_divideAssign = require( '../ast/divideAssign' );


let ast_dot = require( '../ast/dot' );


let ast_equals = require( '../ast/equals' );


let ast_func = require( '../ast/func' );


let ast_greaterThan = require( '../ast/greaterThan' );


let ast_instanceof = require( '../ast/instanceof' );


let ast_lessThan = require( '../ast/lessThan' );


let ast_member = require( '../ast/member' );


let ast_minus = require( '../ast/minus' );


let ast_minusAssign = require( '../ast/minusAssign' );


let ast_multiply = require( '../ast/multiply' );


let ast_multiplyAssign = require( '../ast/multiplyAssign' );


let ast_negate = require( '../ast/negate' );


let ast_new = require( '../ast/new' );


let ast_not = require( '../ast/not' );


let ast_null = require( '../ast/null' );


let ast_number = require( '../ast/number' );


let ast_objLiteral = require( '../ast/objLiteral' );


let ast_or = require( '../ast/or' );


let ast_plus = require( '../ast/plus' );


let ast_plusAssign = require( '../ast/plusAssign' );


let ast_postDecrement = require( '../ast/postDecrement' );


let ast_postIncrement = require( '../ast/postIncrement' );


let ast_preDecrement = require( '../ast/preDecrement' );


let ast_preIncrement = require( '../ast/preIncrement' );


let ast_string = require( '../ast/string' );


let ast_typeof = require( '../ast/typeof' );


let ast_var = require( '../ast/var' );


let tim_proto = tim.proto;


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


ast_let.prototype = prototype;


/*
| Creates a new let object.
*/
ast_let.create =
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

	if( this !== ast_let )
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
/**/			v_assign.timtype !== ast_and
/**/			&&
/**/			v_assign.timtype !== ast_arrayLiteral
/**/			&&
/**/			v_assign.timtype !== ast_assign
/**/			&&
/**/			v_assign.timtype !== ast_boolean
/**/			&&
/**/			v_assign.timtype !== ast_call
/**/			&&
/**/			v_assign.timtype !== ast_comma
/**/			&&
/**/			v_assign.timtype !== ast_condition
/**/			&&
/**/			v_assign.timtype !== ast_delete
/**/			&&
/**/			v_assign.timtype !== ast_differs
/**/			&&
/**/			v_assign.timtype !== ast_divide
/**/			&&
/**/			v_assign.timtype !== ast_divideAssign
/**/			&&
/**/			v_assign.timtype !== ast_dot
/**/			&&
/**/			v_assign.timtype !== ast_equals
/**/			&&
/**/			v_assign.timtype !== ast_func
/**/			&&
/**/			v_assign.timtype !== ast_greaterThan
/**/			&&
/**/			v_assign.timtype !== ast_instanceof
/**/			&&
/**/			v_assign.timtype !== ast_lessThan
/**/			&&
/**/			v_assign.timtype !== ast_member
/**/			&&
/**/			v_assign.timtype !== ast_minus
/**/			&&
/**/			v_assign.timtype !== ast_minusAssign
/**/			&&
/**/			v_assign.timtype !== ast_multiply
/**/			&&
/**/			v_assign.timtype !== ast_multiplyAssign
/**/			&&
/**/			v_assign.timtype !== ast_negate
/**/			&&
/**/			v_assign.timtype !== ast_new
/**/			&&
/**/			v_assign.timtype !== ast_not
/**/			&&
/**/			v_assign.timtype !== ast_null
/**/			&&
/**/			v_assign.timtype !== ast_number
/**/			&&
/**/			v_assign.timtype !== ast_objLiteral
/**/			&&
/**/			v_assign.timtype !== ast_or
/**/			&&
/**/			v_assign.timtype !== ast_plus
/**/			&&
/**/			v_assign.timtype !== ast_plusAssign
/**/			&&
/**/			v_assign.timtype !== ast_postDecrement
/**/			&&
/**/			v_assign.timtype !== ast_postIncrement
/**/			&&
/**/			v_assign.timtype !== ast_preDecrement
/**/			&&
/**/			v_assign.timtype !== ast_preIncrement
/**/			&&
/**/			v_assign.timtype !== ast_string
/**/			&&
/**/			v_assign.timtype !== ast_typeof
/**/			&&
/**/			v_assign.timtype !== ast_var
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
/**/	if( typeof( v_name ) !== 'string' && !( v_name instanceof String ) )
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
prototype.reflect = 'ast_let';


/*
| Type reflection.
*/
prototype.timtype = ast_let;


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

	if( obj.reflect !== 'ast_let' )
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
