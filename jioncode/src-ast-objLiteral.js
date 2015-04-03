/*
| This is an auto generated file.
|
| DO NOT EDIT!
*/


/*
| Export.
*/
var
	ast_objLiteral;


if( SERVER )
{
	ast_objLiteral = module.exports;
}
else
{
	ast_objLiteral = { };
}


/*
| Imports.
*/
var
	jools,
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
if( SERVER )
{
	jools = require( '../../src/jools/jools' );

	ast_and = require( '../../src/ast/and' );

	ast_arrayLiteral = require( '../../src/ast/arrayLiteral' );

	ast_assign = require( '../../src/ast/assign' );

	ast_block = require( '../../src/ast/block' );

	ast_boolean = require( '../../src/ast/boolean' );

	ast_call = require( '../../src/ast/call' );

	ast_check = require( '../../src/ast/check' );

	ast_comma = require( '../../src/ast/comma' );

	ast_comment = require( '../../src/ast/comment' );

	ast_condition = require( '../../src/ast/condition' );

	ast_continue = require( '../../src/ast/continue' );

	ast_delete = require( '../../src/ast/delete' );

	ast_differs = require( '../../src/ast/differs' );

	ast_dot = require( '../../src/ast/dot' );

	ast_equals = require( '../../src/ast/equals' );

	ast_fail = require( '../../src/ast/fail' );

	ast_for = require( '../../src/ast/for' );

	ast_forIn = require( '../../src/ast/forIn' );

	ast_func = require( '../../src/ast/func' );

	ast_greaterThan = require( '../../src/ast/greaterThan' );

	ast_if = require( '../../src/ast/if' );

	ast_instanceof = require( '../../src/ast/instanceof' );

	ast_lessThan = require( '../../src/ast/lessThan' );

	ast_member = require( '../../src/ast/member' );

	ast_multiply = require( '../../src/ast/multiply' );

	ast_multiplyAssign = require( '../../src/ast/multiplyAssign' );

	ast_new = require( '../../src/ast/new' );

	ast_not = require( '../../src/ast/not' );

	ast_null = require( '../../src/ast/null' );

	ast_number = require( '../../src/ast/number' );

	ast_or = require( '../../src/ast/or' );

	ast_plus = require( '../../src/ast/plus' );

	ast_plusAssign = require( '../../src/ast/plusAssign' );

	ast_preIncrement = require( '../../src/ast/preIncrement' );

	ast_return = require( '../../src/ast/return' );

	ast_string = require( '../../src/ast/string' );

	ast_switch = require( '../../src/ast/switch' );

	ast_typeof = require( '../../src/ast/typeof' );

	ast_var = require( '../../src/ast/var' );

	ast_varDec = require( '../../src/ast/varDec' );

	jion_proto = require( '../../src/jion/proto' );
}


/*
| Abstract constructor.
*/
var
	AbstractConstructor;


AbstractConstructor =
	function(
		twig, // twig
		ranks // twig ranks
	)
{
	this.twig = twig;

	this._twig = twig;

	this.ranks = ranks;

	this._ranks = ranks;

	if( FREEZE )
	{
		Object.freeze( twig );

		Object.freeze( ranks );

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
		twig, // twig
		ranks // twig ranks
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
	}

	this.twig = twig;

	this._twig = twig;

	this.ranks = ranks;

	this._ranks = ranks;

	if( FREEZE )
	{
		Object.freeze( twig );

		Object.freeze( ranks );

		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


ast_objLiteral.prototype = prototype;


/*
| Creates an objLiteral object.
*/
ast_objLiteral.abstract =
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
		key,
		o,
		rank,
		ranks,
		twig,
		twigDup;

	if( this !== ast_objLiteral )
	{
		inherit = this;

		twig = inherit.twig;

		ranks = inherit.ranks;

		twigDup = false;
	}
	else
	{
		twig = { };

		ranks = [ ];

		twigDup = true;
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
			case 'twig:add' :

				if( twigDup !== true )
				{
					twig = jools.copy( twig );

					ranks = ranks.slice( );

					twigDup = true;
				}

				key = arg;

				arg = arguments[ ++a + 1 ];

				if( twig[ key ] !== undefined )
				{
					throw new Error( );
				}

				twig[ key ] = arg;

				ranks.push( key );

				break;

			case 'twig:set' :

				if( twigDup !== true )
				{
					twig = jools.copy( twig );

					ranks = ranks.slice( );

					twigDup = true;
				}

				key = arg;

				arg = arguments[ ++a + 1 ];

				if( twig[ key ] === undefined )
				{
					throw new Error( );
				}

				twig[ key ] = arg;

				break;

			case 'twig:insert' :

				if( twigDup !== true )
				{
					twig = jools.copy( twig );

					ranks = ranks.slice( );

					twigDup = true;
				}

				key = arg;

				rank = arguments[ a + 2 ];

				arg = arguments[ a + 3 ];

				a += 2;

				if( twig[ key ] !== undefined )
				{
					throw new Error( );
				}

				if( rank < 0 || rank > ranks.length )
				{
					throw new Error( );
				}

				twig[ key ] = arg;

				ranks.splice( rank, 0, key );

				break;

			case 'twig:remove' :

				if( twigDup !== true )
				{
					twig = jools.copy( twig );

					ranks = ranks.slice( );

					twigDup = true;
				}

				if( twig[ arg ] === undefined )
				{
					throw new Error( );
				}

				delete twig[ arg ];

				ranks.splice( ranks.indexOf( arg ), 1 );

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
/**/	for(
/**/		a = 0, aZ = ranks.length;
/**/		a < aZ;
/**/		++a
/**/	)
/**/	{
/**/		o = twig[ ranks[ a ] ];
/**/
/**/		if(
/**/			o.reflect !== 'ast_and'
/**/			&&
/**/			o.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			o.reflect !== 'ast_assign'
/**/			&&
/**/			o.reflect !== 'ast_block'
/**/			&&
/**/			o.reflect !== 'ast_boolean'
/**/			&&
/**/			o.reflect !== 'ast_call'
/**/			&&
/**/			o.reflect !== 'ast_check'
/**/			&&
/**/			o.reflect !== 'ast_comma'
/**/			&&
/**/			o.reflect !== 'ast_comment'
/**/			&&
/**/			o.reflect !== 'ast_condition'
/**/			&&
/**/			o.reflect !== 'ast_continue'
/**/			&&
/**/			o.reflect !== 'ast_delete'
/**/			&&
/**/			o.reflect !== 'ast_differs'
/**/			&&
/**/			o.reflect !== 'ast_dot'
/**/			&&
/**/			o.reflect !== 'ast_equals'
/**/			&&
/**/			o.reflect !== 'ast_fail'
/**/			&&
/**/			o.reflect !== 'ast_for'
/**/			&&
/**/			o.reflect !== 'ast_forIn'
/**/			&&
/**/			o.reflect !== 'ast_func'
/**/			&&
/**/			o.reflect !== 'ast_greaterThan'
/**/			&&
/**/			o.reflect !== 'ast_if'
/**/			&&
/**/			o.reflect !== 'ast_instanceof'
/**/			&&
/**/			o.reflect !== 'ast_lessThan'
/**/			&&
/**/			o.reflect !== 'ast_member'
/**/			&&
/**/			o.reflect !== 'ast_multiply'
/**/			&&
/**/			o.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			o.reflect !== 'ast_new'
/**/			&&
/**/			o.reflect !== 'ast_not'
/**/			&&
/**/			o.reflect !== 'ast_null'
/**/			&&
/**/			o.reflect !== 'ast_number'
/**/			&&
/**/			o.reflect !== 'ast_objLiteral'
/**/			&&
/**/			o.reflect !== 'ast_or'
/**/			&&
/**/			o.reflect !== 'ast_plus'
/**/			&&
/**/			o.reflect !== 'ast_plusAssign'
/**/			&&
/**/			o.reflect !== 'ast_preIncrement'
/**/			&&
/**/			o.reflect !== 'ast_return'
/**/			&&
/**/			o.reflect !== 'ast_string'
/**/			&&
/**/			o.reflect !== 'ast_switch'
/**/			&&
/**/			o.reflect !== 'ast_typeof'
/**/			&&
/**/			o.reflect !== 'ast_var'
/**/			&&
/**/			o.reflect !== 'ast_varDec'
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if( inherit && twigDup === false )
	{
		return inherit;
	}

	return new AbstractConstructor( twig, ranks );
};


/*
| Creates a new objLiteral object.
*/
ast_objLiteral.create =
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
		key,
		o,
		rank,
		ranks,
		twig,
		twigDup;

	if( this !== ast_objLiteral )
	{
		inherit = this;

		twig = inherit.twig;

		ranks = inherit.ranks;

		twigDup = false;
	}
	else
	{
		twig = { };

		ranks = [ ];

		twigDup = true;
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
			case 'twig:add' :

				if( twigDup !== true )
				{
					twig = jools.copy( twig );

					ranks = ranks.slice( );

					twigDup = true;
				}

				key = arg;

				arg = arguments[ ++a + 1 ];

				if( twig[ key ] !== undefined )
				{
					throw new Error( );
				}

				twig[ key ] = arg;

				ranks.push( key );

				break;

			case 'twig:set' :

				if( twigDup !== true )
				{
					twig = jools.copy( twig );

					ranks = ranks.slice( );

					twigDup = true;
				}

				key = arg;

				arg = arguments[ ++a + 1 ];

				if( twig[ key ] === undefined )
				{
					throw new Error( );
				}

				twig[ key ] = arg;

				break;

			case 'twig:insert' :

				if( twigDup !== true )
				{
					twig = jools.copy( twig );

					ranks = ranks.slice( );

					twigDup = true;
				}

				key = arg;

				rank = arguments[ a + 2 ];

				arg = arguments[ a + 3 ];

				a += 2;

				if( twig[ key ] !== undefined )
				{
					throw new Error( );
				}

				if( rank < 0 || rank > ranks.length )
				{
					throw new Error( );
				}

				twig[ key ] = arg;

				ranks.splice( rank, 0, key );

				break;

			case 'twig:remove' :

				if( twigDup !== true )
				{
					twig = jools.copy( twig );

					ranks = ranks.slice( );

					twigDup = true;
				}

				if( twig[ arg ] === undefined )
				{
					throw new Error( );
				}

				delete twig[ arg ];

				ranks.splice( ranks.indexOf( arg ), 1 );

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
/**/	for(
/**/		a = 0, aZ = ranks.length;
/**/		a < aZ;
/**/		++a
/**/	)
/**/	{
/**/		o = twig[ ranks[ a ] ];
/**/
/**/		if(
/**/			o.reflect !== 'ast_and'
/**/			&&
/**/			o.reflect !== 'ast_arrayLiteral'
/**/			&&
/**/			o.reflect !== 'ast_assign'
/**/			&&
/**/			o.reflect !== 'ast_block'
/**/			&&
/**/			o.reflect !== 'ast_boolean'
/**/			&&
/**/			o.reflect !== 'ast_call'
/**/			&&
/**/			o.reflect !== 'ast_check'
/**/			&&
/**/			o.reflect !== 'ast_comma'
/**/			&&
/**/			o.reflect !== 'ast_comment'
/**/			&&
/**/			o.reflect !== 'ast_condition'
/**/			&&
/**/			o.reflect !== 'ast_continue'
/**/			&&
/**/			o.reflect !== 'ast_delete'
/**/			&&
/**/			o.reflect !== 'ast_differs'
/**/			&&
/**/			o.reflect !== 'ast_dot'
/**/			&&
/**/			o.reflect !== 'ast_equals'
/**/			&&
/**/			o.reflect !== 'ast_fail'
/**/			&&
/**/			o.reflect !== 'ast_for'
/**/			&&
/**/			o.reflect !== 'ast_forIn'
/**/			&&
/**/			o.reflect !== 'ast_func'
/**/			&&
/**/			o.reflect !== 'ast_greaterThan'
/**/			&&
/**/			o.reflect !== 'ast_if'
/**/			&&
/**/			o.reflect !== 'ast_instanceof'
/**/			&&
/**/			o.reflect !== 'ast_lessThan'
/**/			&&
/**/			o.reflect !== 'ast_member'
/**/			&&
/**/			o.reflect !== 'ast_multiply'
/**/			&&
/**/			o.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			o.reflect !== 'ast_new'
/**/			&&
/**/			o.reflect !== 'ast_not'
/**/			&&
/**/			o.reflect !== 'ast_null'
/**/			&&
/**/			o.reflect !== 'ast_number'
/**/			&&
/**/			o.reflect !== 'ast_objLiteral'
/**/			&&
/**/			o.reflect !== 'ast_or'
/**/			&&
/**/			o.reflect !== 'ast_plus'
/**/			&&
/**/			o.reflect !== 'ast_plusAssign'
/**/			&&
/**/			o.reflect !== 'ast_preIncrement'
/**/			&&
/**/			o.reflect !== 'ast_return'
/**/			&&
/**/			o.reflect !== 'ast_string'
/**/			&&
/**/			o.reflect !== 'ast_switch'
/**/			&&
/**/			o.reflect !== 'ast_typeof'
/**/			&&
/**/			o.reflect !== 'ast_var'
/**/			&&
/**/			o.reflect !== 'ast_varDec'
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if( inherit && twigDup === false )
	{
		return inherit;
	}

	return new Constructor( twig, ranks );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'ast_objLiteral:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'objLiteral:abstract';


/*
| Reflection.
*/
prototype.reflect = 'ast_objLiteral';


/*
| Name Reflection.
*/
prototype.reflectName = 'objLiteral';


/*
| Sets values by path.
*/
prototype.setPath = jion_proto.setPath;


/*
| Gets values by path
*/
prototype.getPath = jion_proto.getPath;


/*
| Returns the element at rank.
*/
prototype.atRank = jion_proto.twigAtRank;


/*
| Returns the element by key.
*/
prototype.get = jion_proto.twigGet;


/*
| Returns the key at a rank.
*/
prototype.getKey = jion_proto.twigGetKey;


/*
| Returns the length of the twig.
*/
jools.lazyValue( prototype, 'length', jion_proto.twigLength );


/*
| Creates a new unique identifier.
*/
prototype.newUID = jion_proto.newUID;


/*
| Returns the rank of the key.
*/
jools.lazyFunctionString( prototype, 'rankOf', jion_proto.twigRankOf );


/*
| Returns the twig with the element at key set.
*/
prototype.set = jion_proto.twigSet;


/*
| Tests equality of object.
*/
prototype.equals =
	function(
		obj // object to compare to
	)
{
	var
		a,
		aZ,
		key;

	if( this === obj )
	{
		return true;
	}

	if( !obj )
	{
		return false;
	}

	if( obj.reflect !== 'ast_objLiteral' )
	{
		return false;
	}

	if( this._twig !== obj._twig || this._ranks !== obj._ranks )
	{
		if( this.length !== obj.length )
		{
			return false;
		}

		for(
			a = 0, aZ = this.length;
			a < aZ;
			++a
		)
		{
			key = this._ranks[ a ];

			if(
				key !== obj._ranks[ a ]
				||
				(
					this._twig[ key ].equals
					? !this._twig[ key ].equals( obj._twig[ key ] )
					: this._twig[ key ] !== obj._twig[ key ]
				)
			)
			{
				return false;
			}
		}
	}

	return true;
};


}
)( );
