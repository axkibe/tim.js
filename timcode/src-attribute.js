/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
'use strict';


const tt_ast_and = require( './ast/and' );


const tt_ast_arrayLiteral = require( './ast/arrayLiteral' );


const tt_ast_assign = require( './ast/assign' );


const tt_ast_boolean = require( './ast/boolean' );


const tt_ast_call = require( './ast/call' );


const tt_ast_comma = require( './ast/comma' );


const tt_ast_condition = require( './ast/condition' );


const tt_ast_delete = require( './ast/delete' );


const tt_ast_differs = require( './ast/differs' );


const tt_ast_divide = require( './ast/divide' );


const tt_ast_divideAssign = require( './ast/divideAssign' );


const tt_ast_dot = require( './ast/dot' );


const tt_ast_equals = require( './ast/equals' );


const tt_ast_func = require( './ast/func' );


const tt_ast_greaterThan = require( './ast/greaterThan' );


const tt_ast_instanceof = require( './ast/instanceof' );


const tt_ast_lessThan = require( './ast/lessThan' );


const tt_ast_member = require( './ast/member' );


const tt_ast_minus = require( './ast/minus' );


const tt_ast_minusAssign = require( './ast/minusAssign' );


const tt_ast_multiply = require( './ast/multiply' );


const tt_ast_multiplyAssign = require( './ast/multiplyAssign' );


const tt_ast_negate = require( './ast/negate' );


const tt_ast_new = require( './ast/new' );


const tt_ast_not = require( './ast/not' );


const tt_ast_null = require( './ast/null' );


const tt_ast_number = require( './ast/number' );


const tt_ast_objLiteral = require( './ast/objLiteral' );


const tt_ast_or = require( './ast/or' );


const tt_ast_plus = require( './ast/plus' );


const tt_ast_plusAssign = require( './ast/plusAssign' );


const tt_ast_postDecrement = require( './ast/postDecrement' );


const tt_ast_postIncrement = require( './ast/postIncrement' );


const tt_ast_preDecrement = require( './ast/preDecrement' );


const tt_ast_preIncrement = require( './ast/preIncrement' );


const tt_ast_string = require( './ast/string' );


const tt_ast_typeof = require( './ast/typeof' );


const tt_ast_undefined = require( './ast/undefined' );


const tt_ast_var = require( './ast/var' );


const tt_type_boolean = require( './type/boolean' );


const tt_type_date = require( './type/date' );


const tt_type_function = require( './type/function' );


const tt_type_integer = require( './type/integer' );


const tt_type_null = require( './type/null' );


const tt_type_number = require( './type/number' );


const tt_type_protean = require( './type/protean' );


const tt_type_undefined = require( './type/undefined' );


const tt_type_string = require( './type/string' );


const tt_type_tim = require( './type/tim' );


const tt_type_set = require( './type/set' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_allowsNull,
		v_allowsUndefined,
		v_assign,
		v_defaultValue,
		v_id,
		v_json,
		v_name,
		v_transform,
		v_varRef
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.allowsNull = v_allowsNull;

	this.allowsUndefined = v_allowsUndefined;

	this.assign = v_assign;

	this.defaultValue = v_defaultValue;

	this.id = v_id;

	this.json = v_json;

	this.name = v_name;

	this.transform = v_transform;

	this.varRef = v_varRef;

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

	let v_allowsNull;

	let v_allowsUndefined;

	let v_assign;

	let v_defaultValue;

	let v_id;

	let v_json;

	let v_name;

	let v_transform;

	let v_varRef;

	if( this !== self )
	{
		inherit = this;

		v_allowsNull = this.allowsNull;

		v_allowsUndefined = this.allowsUndefined;

		v_assign = this.assign;

		v_defaultValue = this.defaultValue;

		v_id = this.id;

		v_json = this.json;

		v_name = this.name;

		v_transform = this.transform;

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
			case 'allowsNull' :

				if( arg !== pass )
				{
					v_allowsNull = arg;
				}

				break;

			case 'allowsUndefined' :

				if( arg !== pass )
				{
					v_allowsUndefined = arg;
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

			case 'id' :

				if( arg !== pass )
				{
					v_id = arg;
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

			case 'transform' :

				if( arg !== pass )
				{
					v_transform = arg;
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

	if( v_allowsNull === undefined )
	{
		v_allowsNull = false;
	}

	if( v_allowsUndefined === undefined )
	{
		v_allowsUndefined = false;
	}

	if( v_json === undefined )
	{
		v_json = false;
	}

/**/if( CHECK )
/**/{
/**/	if( v_allowsNull === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_allowsNull === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_allowsNull ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_allowsUndefined === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_allowsUndefined === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_allowsUndefined ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_assign === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_assign === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_assign ) !== 'string' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_defaultValue === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_defaultValue !== undefined )
/**/	{
/**/		if(
/**/			v_defaultValue.timtype !== tt_ast_and
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_arrayLiteral
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_assign
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_boolean
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_call
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_comma
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_condition
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_delete
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_differs
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_divide
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_divideAssign
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_dot
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_equals
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_func
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_greaterThan
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_instanceof
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_lessThan
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_member
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_minus
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_minusAssign
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_multiply
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_multiplyAssign
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_negate
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_new
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_not
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_null
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_number
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_objLiteral
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_or
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_plus
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_plusAssign
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_postDecrement
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_postIncrement
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_preDecrement
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_preIncrement
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_string
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_typeof
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_undefined
/**/			&&
/**/			v_defaultValue.timtype !== tt_ast_var
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_id === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_id === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_id.timtype !== tt_type_boolean
/**/		&&
/**/		v_id.timtype !== tt_type_date
/**/		&&
/**/		v_id.timtype !== tt_type_function
/**/		&&
/**/		v_id.timtype !== tt_type_integer
/**/		&&
/**/		v_id.timtype !== tt_type_null
/**/		&&
/**/		v_id.timtype !== tt_type_number
/**/		&&
/**/		v_id.timtype !== tt_type_protean
/**/		&&
/**/		v_id.timtype !== tt_type_undefined
/**/		&&
/**/		v_id.timtype !== tt_type_string
/**/		&&
/**/		v_id.timtype !== tt_type_tim
/**/		&&
/**/		v_id.timtype !== tt_type_set
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_json === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_json === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_json ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
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
/**/	if( typeof( v_name ) !== 'string' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_transform === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_transform === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_transform ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_varRef === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_varRef === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_varRef.timtype !== tt_ast_var )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		v_allowsNull === inherit.allowsNull
		&&
		v_allowsUndefined === inherit.allowsUndefined
		&&
		v_assign === inherit.assign
		&&
		(
			v_defaultValue === inherit.defaultValue
			||
			v_defaultValue !== undefined && v_defaultValue.equals( inherit.defaultValue )
		)
		&&
		(
			v_id === inherit.id
			||
			v_id.equals( inherit.id )
		)
		&&
		v_json === inherit.json
		&&
		v_name === inherit.name
		&&
		v_transform === inherit.transform
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
			v_allowsNull,
			v_allowsUndefined,
			v_assign,
			v_defaultValue,
			v_id,
			v_json,
			v_name,
			v_transform,
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
		this.allowsNull === obj.allowsNull
		&&
		this.allowsUndefined === obj.allowsUndefined
		&&
		this.assign === obj.assign
		&&
		(
			this.defaultValue === obj.defaultValue
			||
			this.defaultValue !== undefined && this.defaultValue.equals( obj.defaultValue )
		)
		&&
		(
			this.id === obj.id
			||
			this.id.equals( obj.id )
		)
		&&
		this.json === obj.json
		&&
		this.name === obj.name
		&&
		this.transform === obj.transform
		&&
		(
			this.varRef === obj.varRef
			||
			this.varRef.equals( obj.varRef )
		)
	);
};
