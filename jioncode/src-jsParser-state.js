/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	jsParser_state;


if( NODE )
{
	jsParser_state = module.exports;
}
else
{
	jsParser_state = { };
}


var
	ast_and,
	ast_arrayLiteral,
	ast_assign,
	ast_block,
	ast_boolean,
	ast_call,
	ast_check,
	ast_comma,
	ast_comment,
	ast_condition,
	ast_continue,
	ast_delete,
	ast_differs,
	ast_dot,
	ast_equals,
	ast_fail,
	ast_for,
	ast_forIn,
	ast_func,
	ast_greaterThan,
	ast_if,
	ast_instanceof,
	ast_lessThan,
	ast_member,
	ast_multiply,
	ast_multiplyAssign,
	ast_new,
	ast_not,
	ast_null,
	ast_number,
	ast_objLiteral,
	ast_or,
	ast_plus,
	ast_plusAssign,
	ast_preIncrement,
	ast_return,
	ast_string,
	ast_switch,
	ast_typeof,
	ast_var,
	ast_varDec,
	jsParser_tokenRay,
	jion_proto;


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
	jion$ast_and = require( '../ast/and' );

	ast_arrayLiteral = require( '../ast/arrayLiteral' );

	ast_assign = require( '../ast/assign' );

	ast_block = require( '../ast/block' );

	ast_boolean = require( '../ast/boolean' );

	ast_call = require( '../ast/call' );

	ast_check = require( '../ast/check' );

	ast_comma = require( '../ast/comma' );

	ast_comment = require( '../ast/comment' );

	ast_condition = require( '../ast/condition' );

	ast_continue = require( '../ast/continue' );

	ast_delete = require( '../ast/delete' );

	ast_differs = require( '../ast/differs' );

	ast_dot = require( '../ast/dot' );

	ast_equals = require( '../ast/equals' );

	ast_fail = require( '../ast/fail' );

	ast_for = require( '../ast/for' );

	ast_forIn = require( '../ast/forIn' );

	ast_func = require( '../ast/func' );

	ast_greaterThan = require( '../ast/greaterThan' );

	ast_if = require( '../ast/if' );

	ast_instanceof = require( '../ast/instanceof' );

	ast_lessThan = require( '../ast/lessThan' );

	ast_member = require( '../ast/member' );

	ast_multiply = require( '../ast/multiply' );

	ast_multiplyAssign = require( '../ast/multiplyAssign' );

	ast_new = require( '../ast/new' );

	ast_not = require( '../ast/not' );

	ast_null = require( '../ast/null' );

	ast_number = require( '../ast/number' );

	ast_objLiteral = require( '../ast/objLiteral' );

	ast_or = require( '../ast/or' );

	ast_plus = require( '../ast/plus' );

	ast_plusAssign = require( '../ast/plusAssign' );

	ast_preIncrement = require( '../ast/preIncrement' );

	ast_return = require( '../ast/return' );

	ast_string = require( '../ast/string' );

	ast_switch = require( '../ast/switch' );

	ast_typeof = require( '../ast/typeof' );

	ast_var = require( '../ast/var' );

	ast_varDec = require( '../ast/varDec' );

	jsParser_tokenRay = require( '../jsParser/tokenRay' );

	require( '../proto' );
}


/*
| Abstract constructor.
*/
var
	AbstractConstructor;


AbstractConstructor =
	function(
		v_ast, // current ast entity
		v_pos, // current position in token ray
		v_tokens // ray of tokens to parse
	)
{
	if( v_ast !== undefined )
	{
		this.ast = v_ast;
	}

	if( v_pos !== undefined )
	{
		this.pos = v_pos;
	}

	if( v_tokens !== undefined )
	{
		this.tokens = v_tokens;
	}

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Constructor.
*/
var
	Constructor,
	prototype;


Constructor =
	function(
		v_ast, // current ast entity
		v_pos, // current position in token ray
		v_tokens // ray of tokens to parse
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
	}

	if( v_ast !== undefined )
	{
		this.ast = v_ast;
	}

	this.pos = v_pos;

	this.tokens = v_tokens;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


jsParser_state.prototype = prototype;


/*
| Creates an state object.
*/
jsParser_state.abstract =
AbstractConstructor.prototype.abstract =
prototype.abstract =
	function(
		// free strings
	)
{
	var
		a,
		aZ,
		arg,
		inherit,
		v_ast,
		v_pos,
		v_tokens;

	if( this !== jsParser_state )
	{
		inherit = this;

		v_ast = this.ast;

		v_pos = this.pos;

		v_tokens = this.tokens;
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
			case 'ast' :

				if( arg !== pass )
				{
					v_ast = arg;
				}

				break;

			case 'pos' :

				if( arg !== pass )
				{
					v_pos = arg;
				}

				break;

			case 'tokens' :

				if( arg !== pass )
				{
					v_tokens = arg;
				}

				break;

			default :

/**/			if( CHECK )
/**/			{
/**/				throw new Error( );
/**/			}
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_ast === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_ast !== undefined )
/**/	{
/**/		if(
/**/			v_ast.reflect !== 'ast_and'
/**/			&&
/**/			v_ast.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_ast.reflect !== 'ast_assign'
/**/			&&
/**/			v_ast.reflect !== 'ast_block'
/**/			&&
/**/			v_ast.reflect !== 'ast_boolean'
/**/			&&
/**/			v_ast.reflect !== 'ast_call'
/**/			&&
/**/			v_ast.reflect !== 'ast_check'
/**/			&&
/**/			v_ast.reflect !== 'ast_comma'
/**/			&&
/**/			v_ast.reflect !== 'ast_comment'
/**/			&&
/**/			v_ast.reflect !== 'ast_condition'
/**/			&&
/**/			v_ast.reflect !== 'ast_continue'
/**/			&&
/**/			v_ast.reflect !== 'ast_delete'
/**/			&&
/**/			v_ast.reflect !== 'ast_differs'
/**/			&&
/**/			v_ast.reflect !== 'ast_dot'
/**/			&&
/**/			v_ast.reflect !== 'ast_equals'
/**/			&&
/**/			v_ast.reflect !== 'ast_fail'
/**/			&&
/**/			v_ast.reflect !== 'ast_for'
/**/			&&
/**/			v_ast.reflect !== 'ast_forIn'
/**/			&&
/**/			v_ast.reflect !== 'ast_func'
/**/			&&
/**/			v_ast.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_ast.reflect !== 'ast_if'
/**/			&&
/**/			v_ast.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_ast.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_ast.reflect !== 'ast_member'
/**/			&&
/**/			v_ast.reflect !== 'ast_multiply'
/**/			&&
/**/			v_ast.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_ast.reflect !== 'ast_new'
/**/			&&
/**/			v_ast.reflect !== 'ast_not'
/**/			&&
/**/			v_ast.reflect !== 'ast_null'
/**/			&&
/**/			v_ast.reflect !== 'ast_number'
/**/			&&
/**/			v_ast.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_ast.reflect !== 'ast_or'
/**/			&&
/**/			v_ast.reflect !== 'ast_plus'
/**/			&&
/**/			v_ast.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_ast.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_ast.reflect !== 'ast_return'
/**/			&&
/**/			v_ast.reflect !== 'ast_string'
/**/			&&
/**/			v_ast.reflect !== 'ast_switch'
/**/			&&
/**/			v_ast.reflect !== 'ast_typeof'
/**/			&&
/**/			v_ast.reflect !== 'ast_var'
/**/			&&
/**/			v_ast.reflect !== 'ast_varDec'
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_pos === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_pos !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_pos ) !== 'number'
/**/			||
/**/			Math.floor( v_pos ) !== v_pos
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_tokens === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_tokens !== undefined )
/**/	{
/**/		if( v_tokens.reflect !== 'jsParser_tokenRay' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_ast === inherit.ast
			||
			v_ast !== undefined && v_ast.equals( inherit.ast )
		)
		&&
		v_pos === inherit.pos
		&&
		(
			v_tokens === inherit.tokens
			||
			v_tokens !== undefined && v_tokens.equals( inherit.tokens )
		)
	)
	{
		return inherit;
	}

	return new AbstractConstructor( v_ast, v_pos, v_tokens );
};


/*
| Creates a new state object.
*/
jsParser_state.create =
AbstractConstructor.prototype.create =
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
		v_ast,
		v_pos,
		v_tokens;

	if( this !== jsParser_state )
	{
		inherit = this;

		v_ast = this.ast;

		v_pos = this.pos;

		v_tokens = this.tokens;
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
			case 'ast' :

				if( arg !== pass )
				{
					v_ast = arg;
				}

				break;

			case 'pos' :

				if( arg !== pass )
				{
					v_pos = arg;
				}

				break;

			case 'tokens' :

				if( arg !== pass )
				{
					v_tokens = arg;
				}

				break;

			default :

/**/			if( CHECK )
/**/			{
/**/				throw new Error( );
/**/			}
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_ast === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_ast !== undefined )
/**/	{
/**/		if(
/**/			v_ast.reflect !== 'ast_and'
/**/			&&
/**/			v_ast.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			v_ast.reflect !== 'ast_assign'
/**/			&&
/**/			v_ast.reflect !== 'ast_block'
/**/			&&
/**/			v_ast.reflect !== 'ast_boolean'
/**/			&&
/**/			v_ast.reflect !== 'ast_call'
/**/			&&
/**/			v_ast.reflect !== 'ast_check'
/**/			&&
/**/			v_ast.reflect !== 'ast_comma'
/**/			&&
/**/			v_ast.reflect !== 'ast_comment'
/**/			&&
/**/			v_ast.reflect !== 'ast_condition'
/**/			&&
/**/			v_ast.reflect !== 'ast_continue'
/**/			&&
/**/			v_ast.reflect !== 'ast_delete'
/**/			&&
/**/			v_ast.reflect !== 'ast_differs'
/**/			&&
/**/			v_ast.reflect !== 'ast_dot'
/**/			&&
/**/			v_ast.reflect !== 'ast_equals'
/**/			&&
/**/			v_ast.reflect !== 'ast_fail'
/**/			&&
/**/			v_ast.reflect !== 'ast_for'
/**/			&&
/**/			v_ast.reflect !== 'ast_forIn'
/**/			&&
/**/			v_ast.reflect !== 'ast_func'
/**/			&&
/**/			v_ast.reflect !== 'ast_greaterThan'
/**/			&&
/**/			v_ast.reflect !== 'ast_if'
/**/			&&
/**/			v_ast.reflect !== 'ast_instanceof'
/**/			&&
/**/			v_ast.reflect !== 'ast_lessThan'
/**/			&&
/**/			v_ast.reflect !== 'ast_member'
/**/			&&
/**/			v_ast.reflect !== 'ast_multiply'
/**/			&&
/**/			v_ast.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_ast.reflect !== 'ast_new'
/**/			&&
/**/			v_ast.reflect !== 'ast_not'
/**/			&&
/**/			v_ast.reflect !== 'ast_null'
/**/			&&
/**/			v_ast.reflect !== 'ast_number'
/**/			&&
/**/			v_ast.reflect !== 'ast_objLiteral'
/**/			&&
/**/			v_ast.reflect !== 'ast_or'
/**/			&&
/**/			v_ast.reflect !== 'ast_plus'
/**/			&&
/**/			v_ast.reflect !== 'ast_plusAssign'
/**/			&&
/**/			v_ast.reflect !== 'ast_preIncrement'
/**/			&&
/**/			v_ast.reflect !== 'ast_return'
/**/			&&
/**/			v_ast.reflect !== 'ast_string'
/**/			&&
/**/			v_ast.reflect !== 'ast_switch'
/**/			&&
/**/			v_ast.reflect !== 'ast_typeof'
/**/			&&
/**/			v_ast.reflect !== 'ast_var'
/**/			&&
/**/			v_ast.reflect !== 'ast_varDec'
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_pos === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_pos === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		typeof( v_pos ) !== 'number'
/**/		||
/**/		Math.floor( v_pos ) !== v_pos
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_tokens === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_tokens === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_tokens.reflect !== 'jsParser_tokenRay' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_ast === inherit.ast
			||
			v_ast !== undefined && v_ast.equals( inherit.ast )
		)
		&&
		v_pos === inherit.pos
		&&
		(
			v_tokens === inherit.tokens
			||
			v_tokens.equals && v_tokens.equals( inherit.tokens )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_ast, v_pos, v_tokens );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'jsParser_state:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'state:abstract';


/*
| Reflection.
*/
prototype.reflect = 'jsParser_state';


/*
| Name Reflection.
*/
prototype.reflectName = 'state';


/*
| Sets values by path.
*/
prototype.setPath = jion_proto.setPath;


/*
| Gets values by path
*/
prototype.getPath = jion_proto.getPath;


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

	if( obj.reflect !== 'jsParser_state' )
	{
		return false;
	}

	return (
		(
			this.ast === obj.ast
			||
			this.ast !== undefined && this.ast.equals( obj.ast )
		)
		&&
		this.pos === obj.pos
		&&
		(
			this.tokens === obj.tokens
			||
			this.tokens.equals && this.tokens.equals( obj.tokens )
		)
	);
};


}
)( );
