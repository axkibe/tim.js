'use strict';


/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
const tt_$_ast_and = require( './../ast/and.js' );


const tt_$_ast_arrayLiteral = require( './../ast/arrayLiteral.js' );


const tt_$_ast_assign = require( './../ast/assign.js' );


const tt_$_ast_boolean = require( './../ast/boolean.js' );


const tt_$_ast_call = require( './../ast/call.js' );


const tt_$_ast_comma = require( './../ast/comma.js' );


const tt_$_ast_condition = require( './../ast/condition.js' );


const tt_$_ast_delete = require( './../ast/delete.js' );


const tt_$_ast_differs = require( './../ast/differs.js' );


const tt_$_ast_divide = require( './../ast/divide.js' );


const tt_$_ast_divideAssign = require( './../ast/divideAssign.js' );


const tt_$_ast_dot = require( './../ast/dot.js' );


const tt_$_ast_equals = require( './../ast/equals.js' );


const tt_$_ast_func = require( './../ast/func.js' );


const tt_$_ast_greaterThan = require( './../ast/greaterThan.js' );


const tt_$_ast_instanceof = require( './../ast/instanceof.js' );


const tt_$_ast_lessThan = require( './../ast/lessThan.js' );


const tt_$_ast_member = require( './../ast/member.js' );


const tt_$_ast_minus = require( './../ast/minus.js' );


const tt_$_ast_minusAssign = require( './../ast/minusAssign.js' );


const tt_$_ast_multiply = require( './../ast/multiply.js' );


const tt_$_ast_multiplyAssign = require( './../ast/multiplyAssign.js' );


const tt_$_ast_negate = require( './../ast/negate.js' );


const tt_$_ast_new = require( './../ast/new.js' );


const tt_$_ast_not = require( './../ast/not.js' );


const tt_$_ast_null = require( './../ast/null.js' );


const tt_$_ast_number = require( './../ast/number.js' );


const tt_$_ast_objLiteral = require( './../ast/objLiteral.js' );


const tt_$_ast_or = require( './../ast/or.js' );


const tt_$_ast_plus = require( './../ast/plus.js' );


const tt_$_ast_plusAssign = require( './../ast/plusAssign.js' );


const tt_$_ast_postDecrement = require( './../ast/postDecrement.js' );


const tt_$_ast_postIncrement = require( './../ast/postIncrement.js' );


const tt_$_ast_preDecrement = require( './../ast/preDecrement.js' );


const tt_$_ast_preIncrement = require( './../ast/preIncrement.js' );


const tt_$_ast_string = require( './../ast/string.js' );


const tt_$_ast_typeof = require( './../ast/typeof.js' );


const tt_$_ast_undefined = require( './../ast/undefined.js' );


const tt_$_ast_var = require( './../ast/var.js' );


const tt_$_type_boolean = require( './../type/boolean.js' );


const tt_$_type_date = require( './../type/date.js' );


const tt_$_type_function = require( './../type/function.js' );


const tt_$_type_integer = require( './../type/integer.js' );


const tt_$_type_null = require( './../type/null.js' );


const tt_$_type_number = require( './../type/number.js' );


const tt_$_type_protean = require( './../type/protean.js' );


const tt_$_type_undefined = require( './../type/undefined.js' );


const tt_$_type_string = require( './../type/string.js' );


const tt_$_type_tim = require( './../type/tim.js' );


const tt_$_type_set = require( './../type/set.js' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_adjust,
		v_assign,
		v_defaultValue,
		v_json,
		v_name,
		v_types,
		v_varRef
	)
{
	this.__lazy = { };

	this.adjust = v_adjust;

	this.assign = v_assign;

	this.defaultValue = v_defaultValue;

	this.json = v_json;

	this.name = v_name;

	this.types = v_types;

	this.varRef = v_varRef;

	Object.freeze( this );
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

	let v_adjust;

	let v_assign;

	let v_defaultValue;

	let v_json;

	let v_name;

	let v_types;

	let v_varRef;

	if( this !== self )
	{
		inherit = this;

		v_adjust = this.adjust;

		v_assign = this.assign;

		v_defaultValue = this.defaultValue;

		v_json = this.json;

		v_name = this.name;

		v_types = this.types;

		v_varRef = this.varRef;
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
			case 'adjust' :

				if( arg !== pass )
				{
					v_adjust = arg;
				}

				break;

			case 'assign' :

				if( arg !== pass )
				{
					v_assign = arg;
				}

				break;

			case 'defaultValue' :

				if( arg !== pass )
				{
					v_defaultValue = arg;
				}

				break;

			case 'json' :

				if( arg !== pass )
				{
					v_json = arg;
				}

				break;

			case 'name' :

				if( arg !== pass )
				{
					v_name = arg;
				}

				break;

			case 'types' :

				if( arg !== pass )
				{
					v_types = arg;
				}

				break;

			case 'varRef' :

				if( arg !== pass )
				{
					v_varRef = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

	if( v_json === undefined )
	{
		v_json = false;
	}

/**/if( CHECK )
/**/{
/**/	if( typeof( v_adjust ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_assign ) !== 'string' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_defaultValue !== undefined
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_and
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_arrayLiteral
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_assign
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_boolean
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_call
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_comma
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_condition
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_delete
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_differs
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_divide
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_divideAssign
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_dot
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_equals
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_func
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_greaterThan
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_instanceof
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_lessThan
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_member
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_minus
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_minusAssign
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_multiply
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_multiplyAssign
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_negate
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_new
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_not
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_null
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_number
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_objLiteral
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_or
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_plus
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_plusAssign
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_postDecrement
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_postIncrement
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_preDecrement
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_preIncrement
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_string
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_typeof
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_undefined
/**/		&&
/**/		v_defaultValue.timtype !== tt_$_ast_var
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_json ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_name ) !== 'string' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_types.timtype !== tt_$_type_boolean
/**/		&&
/**/		v_types.timtype !== tt_$_type_date
/**/		&&
/**/		v_types.timtype !== tt_$_type_function
/**/		&&
/**/		v_types.timtype !== tt_$_type_integer
/**/		&&
/**/		v_types.timtype !== tt_$_type_null
/**/		&&
/**/		v_types.timtype !== tt_$_type_number
/**/		&&
/**/		v_types.timtype !== tt_$_type_protean
/**/		&&
/**/		v_types.timtype !== tt_$_type_undefined
/**/		&&
/**/		v_types.timtype !== tt_$_type_string
/**/		&&
/**/		v_types.timtype !== tt_$_type_tim
/**/		&&
/**/		v_types.timtype !== tt_$_type_set
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_varRef.timtype !== tt_$_ast_var )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		v_adjust === inherit.adjust
		&&
		v_assign === inherit.assign
		&&
		(
			v_defaultValue === inherit.defaultValue
			||
			v_defaultValue !== undefined
			&&
			v_defaultValue.timtype
			&&
			v_defaultValue.equals( inherit.defaultValue )
		)
		&&
		v_json === inherit.json
		&&
		v_name === inherit.name
		&&
		(
			v_types === inherit.types
			||
			v_types.equals( inherit.types )
		)
		&&
		(
			v_varRef === inherit.varRef
			||
			v_varRef.equals( inherit.varRef )
		)
	)
	{
		return inherit;
	}

	return (
		new Constructor(
			v_adjust,
			v_assign,
			v_defaultValue,
			v_json,
			v_name,
			v_types,
			v_varRef
		)
	);
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
		this.adjust === obj.adjust
		&&
		this.assign === obj.assign
		&&
		(
			this.defaultValue === obj.defaultValue
			||
			this.defaultValue !== undefined
			&&
			this.defaultValue.timtype
			&&
			this.defaultValue.equals( obj.defaultValue )
		)
		&&
		this.json === obj.json
		&&
		this.name === obj.name
		&&
		(
			this.types === obj.types
			||
			this.types.equals( obj.types )
		)
		&&
		(
			this.varRef === obj.varRef
			||
			this.varRef.equals( obj.varRef )
		)
	);
};
