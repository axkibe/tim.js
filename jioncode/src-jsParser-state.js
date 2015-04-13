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
	jion$ast_and,
	jion$ast_arrayLiteral,
	jion$ast_assign,
	jion$ast_block,
	jion$ast_boolean,
	jion$ast_call,
	jion$ast_check,
	jion$ast_comma,
	jion$ast_comment,
	jion$ast_condition,
	jion$ast_continue,
	jion$ast_delete,
	jion$ast_differs,
	jion$ast_dot,
	jion$ast_equals,
	jion$ast_fail,
	jion$ast_for,
	jion$ast_forIn,
	jion$ast_func,
	jion$ast_greaterThan,
	jion$ast_if,
	jion$ast_instanceof,
	jion$ast_lessThan,
	jion$ast_member,
	jion$ast_multiply,
	jion$ast_multiplyAssign,
	jion$ast_new,
	jion$ast_not,
	jion$ast_null,
	jion$ast_number,
	jion$ast_objLiteral,
	jion$ast_or,
	jion$ast_plus,
	jion$ast_plusAssign,
	jion$ast_preIncrement,
	jion$ast_return,
	jion$ast_string,
	jion$ast_switch,
	jion$ast_typeof,
	jion$ast_var,
	jion$ast_varDec,
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

	jion$ast_arrayLiteral = require( '../ast/arrayLiteral' );

	jion$ast_assign = require( '../ast/assign' );

	jion$ast_block = require( '../ast/block' );

	jion$ast_boolean = require( '../ast/boolean' );

	jion$ast_call = require( '../ast/call' );

	jion$ast_check = require( '../ast/check' );

	jion$ast_comma = require( '../ast/comma' );

	jion$ast_comment = require( '../ast/comment' );

	jion$ast_condition = require( '../ast/condition' );

	jion$ast_continue = require( '../ast/continue' );

	jion$ast_delete = require( '../ast/delete' );

	jion$ast_differs = require( '../ast/differs' );

	jion$ast_dot = require( '../ast/dot' );

	jion$ast_equals = require( '../ast/equals' );

	jion$ast_fail = require( '../ast/fail' );

	jion$ast_for = require( '../ast/for' );

	jion$ast_forIn = require( '../ast/forIn' );

	jion$ast_func = require( '../ast/func' );

	jion$ast_greaterThan = require( '../ast/greaterThan' );

	jion$ast_if = require( '../ast/if' );

	jion$ast_instanceof = require( '../ast/instanceof' );

	jion$ast_lessThan = require( '../ast/lessThan' );

	jion$ast_member = require( '../ast/member' );

	jion$ast_multiply = require( '../ast/multiply' );

	jion$ast_multiplyAssign = require( '../ast/multiplyAssign' );

	jion$ast_new = require( '../ast/new' );

	jion$ast_not = require( '../ast/not' );

	jion$ast_null = require( '../ast/null' );

	jion$ast_number = require( '../ast/number' );

	jion$ast_objLiteral = require( '../ast/objLiteral' );

	jion$ast_or = require( '../ast/or' );

	jion$ast_plus = require( '../ast/plus' );

	jion$ast_plusAssign = require( '../ast/plusAssign' );

	jion$ast_preIncrement = require( '../ast/preIncrement' );

	jion$ast_return = require( '../ast/return' );

	jion$ast_string = require( '../ast/string' );

	jion$ast_switch = require( '../ast/switch' );

	jion$ast_typeof = require( '../ast/typeof' );

	jion$ast_var = require( '../ast/var' );

	jion$ast_varDec = require( '../ast/varDec' );

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
