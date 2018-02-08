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
let ast_letEntry = NODE ? module.exports : module;


const ast_and = require( '../ast/and' );


const ast_arrayLiteral = require( '../ast/arrayLiteral' );


const ast_assign = require( '../ast/assign' );


const ast_boolean = require( '../ast/boolean' );


const ast_call = require( '../ast/call' );


const ast_comma = require( '../ast/comma' );


const ast_condition = require( '../ast/condition' );


const ast_delete = require( '../ast/delete' );


const ast_differs = require( '../ast/differs' );


const ast_divide = require( '../ast/divide' );


const ast_divideAssign = require( '../ast/divideAssign' );


const ast_dot = require( '../ast/dot' );


const ast_equals = require( '../ast/equals' );


const ast_func = require( '../ast/func' );


const ast_greaterThan = require( '../ast/greaterThan' );


const ast_instanceof = require( '../ast/instanceof' );


const ast_lessThan = require( '../ast/lessThan' );


const ast_member = require( '../ast/member' );


const ast_minus = require( '../ast/minus' );


const ast_minusAssign = require( '../ast/minusAssign' );


const ast_multiply = require( '../ast/multiply' );


const ast_multiplyAssign = require( '../ast/multiplyAssign' );


const ast_negate = require( '../ast/negate' );


const ast_new = require( '../ast/new' );


const ast_not = require( '../ast/not' );


const ast_null = require( '../ast/null' );


const ast_number = require( '../ast/number' );


const ast_objLiteral = require( '../ast/objLiteral' );


const ast_or = require( '../ast/or' );


const ast_plus = require( '../ast/plus' );


const ast_plusAssign = require( '../ast/plusAssign' );


const ast_postDecrement = require( '../ast/postDecrement' );


const ast_postIncrement = require( '../ast/postIncrement' );


const ast_preDecrement = require( '../ast/preDecrement' );


const ast_preIncrement = require( '../ast/preIncrement' );


const ast_string = require( '../ast/string' );


const ast_typeof = require( '../ast/typeof' );


const ast_var = require( '../ast/var' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
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
const prototype = Constructor.prototype;


ast_letEntry.prototype = prototype;


/*
| Creates a new letEntry object.
*/
ast_letEntry.create =
prototype.create =
	function(
		// free strings
	)
{
	let inherit;

	let v_assign;

	let v_name;

	if( this !== ast_letEntry )
	{
		inherit = this;

		v_assign = this.assign;

		v_name = this.name;
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
| Type reflection.
*/
prototype.timtype = ast_letEntry;


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

	if( obj.timtype !== ast_letEntry )
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
