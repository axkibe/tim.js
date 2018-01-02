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
	jsParser_state;


if( !jsParser_state )
{
	jsParser_state = { };
}


if( !NODE )
{
/**/if( CHECK )
/**/{
/**/	if( timModules.jsParser_state !== undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	timModules.jsParser_state = jsParser_state;
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
		v_ast,
		v_pos,
		v_tokens
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.ast = v_ast;

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
| Creates a new state object.
*/
jsParser_state.create =
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

				throw new Error( );
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
/**/			v_ast.reflect !== 'ast_divide'
/**/			&&
/**/			v_ast.reflect !== 'ast_divideAssign'
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
/**/			v_ast.reflect !== 'ast_minus'
/**/			&&
/**/			v_ast.reflect !== 'ast_minusAssign'
/**/			&&
/**/			v_ast.reflect !== 'ast_multiply'
/**/			&&
/**/			v_ast.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			v_ast.reflect !== 'ast_negate'
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
/**/			v_ast.reflect !== 'ast_postDecrement'
/**/			&&
/**/			v_ast.reflect !== 'ast_postIncrement'
/**/			&&
/**/			v_ast.reflect !== 'ast_preDecrement'
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
/**/		Number.isNaN( v_pos )
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
/**/	if( v_tokens.reflect !== 'jsParser_tokenList' )
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
			v_tokens.equals( inherit.tokens )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_ast, v_pos, v_tokens );
};


/*
| Reflection.
*/
prototype.reflect = 'jsParser_state';


/*
| Type reflection.
*/
prototype.timtype = jsParser_state;


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
			this.tokens.equals( obj.tokens )
		)
	);
};


}
)( );
