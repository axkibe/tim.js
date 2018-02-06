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
let ast_objLiteral = NODE ? module.exports : module;


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
const Constructor =
	function(
		twig, // twig
		ranks // twig ranks
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this._twig = twig;

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
const prototype = Constructor.prototype;


ast_objLiteral.prototype = prototype;


/*
| Creates a new objLiteral object.
*/
ast_objLiteral.create =
prototype.create =
	function(
		// free strings
	)
{
	var
		inherit,
		key,
		rank,
		ranks,
		twig,
		twigDup;

	if( this !== ast_objLiteral )
	{
		inherit = this;

		twig = inherit._twig;

		ranks = inherit._ranks;

		twigDup = false;
	}
	else
	{
		twig = { };

		ranks = [ ];

		twigDup = true;
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
			case 'twig:add' :

				if( twigDup !== true )
				{
					twig = tim_proto.copy( twig );

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

			case 'twig:init' :

				twigDup = true;

				twig = arg;

				ranks = arguments[ ++a + 1 ];

/**/			if( CHECK )
/**/			{
/**/				if( Object.keys( twig ).length !== ranks.length )
/**/				{
/**/					throw new Error( );
/**/				}
/**/
/**/				for(
/**/					let t = 0, tl = ranks.length;
/**/					t < tl;
/**/					t++
/**/				)
/**/				{
/**/					if( twig[ ranks[ t ] ] === undefined )
/**/					{
/**/						throw new Error( );
/**/					}
/**/				}
/**/			}

				break;

			case 'twig:set+' :

				if( twigDup !== true )
				{
					twig = tim_proto.copy( twig );

					ranks = ranks.slice( );

					twigDup = true;
				}

				key = arg;

				arg = arguments[ ++a + 1 ];

				if( twig[ key ] === undefined )
				{
					ranks.push( key );
				}

				twig[ key ] = arg;

				break;

			case 'twig:set' :

				if( twigDup !== true )
				{
					twig = tim_proto.copy( twig );

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
					twig = tim_proto.copy( twig );

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
					twig = tim_proto.copy( twig );

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

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	for(
/**/		let a = 0, al = ranks.length;
/**/		a < al;
/**/		++a
/**/	)
/**/	{
/**/		if( prototype.abstract )
/**/		{
/**/			continue;
/**/		}
/**/
/**/		const o = twig[ ranks[ a ] ];
/**/
/**/		if(
/**/			o.timtype !== ast_and
/**/			&&
/**/			o.timtype !== ast_arrayLiteral
/**/			&&
/**/			o.timtype !== ast_assign
/**/			&&
/**/			o.timtype !== ast_boolean
/**/			&&
/**/			o.timtype !== ast_call
/**/			&&
/**/			o.timtype !== ast_comma
/**/			&&
/**/			o.timtype !== ast_condition
/**/			&&
/**/			o.timtype !== ast_delete
/**/			&&
/**/			o.timtype !== ast_differs
/**/			&&
/**/			o.timtype !== ast_divide
/**/			&&
/**/			o.timtype !== ast_divideAssign
/**/			&&
/**/			o.timtype !== ast_dot
/**/			&&
/**/			o.timtype !== ast_equals
/**/			&&
/**/			o.timtype !== ast_func
/**/			&&
/**/			o.timtype !== ast_greaterThan
/**/			&&
/**/			o.timtype !== ast_instanceof
/**/			&&
/**/			o.timtype !== ast_lessThan
/**/			&&
/**/			o.timtype !== ast_member
/**/			&&
/**/			o.timtype !== ast_minus
/**/			&&
/**/			o.timtype !== ast_minusAssign
/**/			&&
/**/			o.timtype !== ast_multiply
/**/			&&
/**/			o.timtype !== ast_multiplyAssign
/**/			&&
/**/			o.timtype !== ast_negate
/**/			&&
/**/			o.timtype !== ast_new
/**/			&&
/**/			o.timtype !== ast_not
/**/			&&
/**/			o.timtype !== ast_null
/**/			&&
/**/			o.timtype !== ast_number
/**/			&&
/**/			o.timtype !== ast_objLiteral
/**/			&&
/**/			o.timtype !== ast_or
/**/			&&
/**/			o.timtype !== ast_plus
/**/			&&
/**/			o.timtype !== ast_plusAssign
/**/			&&
/**/			o.timtype !== ast_postDecrement
/**/			&&
/**/			o.timtype !== ast_postIncrement
/**/			&&
/**/			o.timtype !== ast_preDecrement
/**/			&&
/**/			o.timtype !== ast_preIncrement
/**/			&&
/**/			o.timtype !== ast_string
/**/			&&
/**/			o.timtype !== ast_typeof
/**/			&&
/**/			o.timtype !== ast_var
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
| Reflection.
*/
prototype.reflect = 'ast_objLiteral';


/*
| Type reflection.
*/
prototype.timtype = ast_objLiteral;


/*
| Sets values by path.
*/
prototype.setPath = tim_proto.setPath;


/*
| Gets values by path
*/
prototype.getPath = tim_proto.getPath;


/*
| Returns the element at rank.
*/
prototype.atRank = tim_proto.twigAtRank;


/*
| Returns the element by key.
*/
prototype.get = tim_proto.twigGet;


/*
| Returns the key at a rank.
*/
prototype.getKey = tim_proto.twigGetKey;


/*
| Returns the length of the twig.
*/
tim_proto.lazyValue( prototype, 'length', tim_proto.twigLength );


/*
| Returns the rank of the key.
*/
tim_proto.lazyFunctionString( prototype, 'rankOf', tim_proto.twigRankOf );


/*
| Returns the twig with the element at key set.
*/
prototype.set = tim_proto.twigSet;


/*
| Tests equality of object.
*/
prototype.equals =
	function(
		obj // object to compare to
	)
{
	var
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
			let a = 0, al = this.length;
			a < al;
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
