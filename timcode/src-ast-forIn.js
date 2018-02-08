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


const ast_var = require( '../ast/var' );


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


const ast_block = require( '../ast/block' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_block,
		v_letVar,
		v_object,
		v_variable
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.block = v_block;

	this.letVar = v_letVar;

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
const prototype = Constructor.prototype;


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
	let inherit;

	let v_block;

	let v_letVar;

	let v_object;

	let v_variable;

	if( this !== ast_forIn )
	{
		inherit = this;

		v_block = this.block;

		v_letVar = this.letVar;

		v_object = this.object;

		v_variable = this.variable;
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
			case 'block' :

				if( arg !== pass )
				{
					v_block = arg;
				}

				break;

			case 'letVar' :

				if( arg !== pass )
				{
					v_letVar = arg;
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
/**/	if( v_letVar === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_letVar === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_letVar ) !== 'boolean' )
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
/**/	if( v_variable.timtype !== ast_var )
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
		v_letVar === inherit.letVar
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
			v_variable.equals( inherit.variable )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_block, v_letVar, v_object, v_variable );
};


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

	if( obj.timtype !== ast_forIn )
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
		this.letVar === obj.letVar
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
			this.variable.equals( obj.variable )
		)
	);
};


}
)( );
