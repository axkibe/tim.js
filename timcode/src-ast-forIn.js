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
let ast_forIn = NODE ? module.exports : module;


let ast_and = require( '../ast/and' );


let ast_arrayLiteral = require( '../ast/arrayLiteral' );


let ast_assign = require( '../ast/assign' );


let ast_block = require( '../ast/block' );


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
/**/	if( v_block.timtype !== ast_block )
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
/**/		v_object.timtype !== ast_and
/**/		&&
/**/		v_object.timtype !== ast_arrayLiteral
/**/		&&
/**/		v_object.timtype !== ast_assign
/**/		&&
/**/		v_object.timtype !== ast_boolean
/**/		&&
/**/		v_object.timtype !== ast_call
/**/		&&
/**/		v_object.timtype !== ast_comma
/**/		&&
/**/		v_object.timtype !== ast_condition
/**/		&&
/**/		v_object.timtype !== ast_delete
/**/		&&
/**/		v_object.timtype !== ast_differs
/**/		&&
/**/		v_object.timtype !== ast_divide
/**/		&&
/**/		v_object.timtype !== ast_divideAssign
/**/		&&
/**/		v_object.timtype !== ast_dot
/**/		&&
/**/		v_object.timtype !== ast_equals
/**/		&&
/**/		v_object.timtype !== ast_func
/**/		&&
/**/		v_object.timtype !== ast_greaterThan
/**/		&&
/**/		v_object.timtype !== ast_instanceof
/**/		&&
/**/		v_object.timtype !== ast_lessThan
/**/		&&
/**/		v_object.timtype !== ast_member
/**/		&&
/**/		v_object.timtype !== ast_minus
/**/		&&
/**/		v_object.timtype !== ast_minusAssign
/**/		&&
/**/		v_object.timtype !== ast_multiply
/**/		&&
/**/		v_object.timtype !== ast_multiplyAssign
/**/		&&
/**/		v_object.timtype !== ast_negate
/**/		&&
/**/		v_object.timtype !== ast_new
/**/		&&
/**/		v_object.timtype !== ast_not
/**/		&&
/**/		v_object.timtype !== ast_null
/**/		&&
/**/		v_object.timtype !== ast_number
/**/		&&
/**/		v_object.timtype !== ast_objLiteral
/**/		&&
/**/		v_object.timtype !== ast_or
/**/		&&
/**/		v_object.timtype !== ast_plus
/**/		&&
/**/		v_object.timtype !== ast_plusAssign
/**/		&&
/**/		v_object.timtype !== ast_postDecrement
/**/		&&
/**/		v_object.timtype !== ast_postIncrement
/**/		&&
/**/		v_object.timtype !== ast_preDecrement
/**/		&&
/**/		v_object.timtype !== ast_preIncrement
/**/		&&
/**/		v_object.timtype !== ast_string
/**/		&&
/**/		v_object.timtype !== ast_typeof
/**/		&&
/**/		v_object.timtype !== ast_var
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
/**/		v_variable.timtype !== ast_var
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
