'use strict';


/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
const tt_and = require( './and' );


const tt_arrayLiteral = require( './arrayLiteral' );


const tt_assign = require( './assign' );


const tt_boolean = require( './boolean' );


const tt_call = require( './call' );


const tt_comma = require( './comma' );


const tt_condition = require( './condition' );


const tt_delete = require( './delete' );


const tt_differs = require( './differs' );


const tt_divide = require( './divide' );


const tt_divideAssign = require( './divideAssign' );


const tt_dot = require( './dot' );


const tt_equals = require( './equals' );


const tt_func = require( './func' );


const tt_generator = require( './generator' );


const tt_greaterThan = require( './greaterThan' );


const tt_instanceof = require( './instanceof' );


const tt_lessThan = require( './lessThan' );


const tt_member = require( './member' );


const tt_minus = require( './minus' );


const tt_minusAssign = require( './minusAssign' );


const tt_multiply = require( './multiply' );


const tt_multiplyAssign = require( './multiplyAssign' );


const tt_negate = require( './negate' );


const tt_new = require( './new' );


const tt_not = require( './not' );


const tt_null = require( './null' );


const tt_number = require( './number' );


const tt_objLiteral = require( './objLiteral' );


const tt_or = require( './or' );


const tt_plus = require( './plus' );


const tt_plusAssign = require( './plusAssign' );


const tt_postDecrement = require( './postDecrement' );


const tt_postIncrement = require( './postIncrement' );


const tt_preDecrement = require( './preDecrement' );


const tt_preIncrement = require( './preIncrement' );


const tt_string = require( './string' );


const tt_typeof = require( './typeof' );


const tt_undefined = require( './undefined' );


const tt_var = require( './var' );


const tt_yield = require( './yield' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		keys, // twig key ranks
		twig // twig
	)
{
	this.__lazy = { };

	this._twig = twig;

	this.keys = keys;

	Object.freeze( this, twig, keys );
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

	let key;

	let keys;

	let rank;

	let twig;

	let twigDup;

	if( this !== self )
	{
		inherit = this;

		twig = inherit._twig;

		keys = inherit.keys;

		twigDup = false;
	}
	else
	{
		twig = { };

		keys = [ ];

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
					twig = tim.copy( twig );

					keys = keys.slice( );

					twigDup = true;
				}

				key = arg;

				arg = arguments[ ++a + 1 ];

				if( twig[ key ] !== undefined )
				{
					throw new Error( );
				}

				twig[ key ] = arg;

				keys.push( key );

				break;

			case 'twig:init' :

				twigDup = true;

				twig = arg;

				keys = arguments[ ++a + 1 ];

/**/			if( CHECK )
/**/			{
/**/				if( Object.keys( twig ).length !== keys.length )
/**/				{
/**/					throw new Error( );
/**/				}
/**/
/**/				for(
/**/					let t = 0, tl = keys.length;
/**/					t < tl;
/**/					t++
/**/				)
/**/				{
/**/					if( twig[ keys[ t ] ] === undefined )
/**/					{
/**/						throw new Error( );
/**/					}
/**/				}
/**/			}

				break;

			case 'twig:insert' :

				if( twigDup !== true )
				{
					twig = tim.copy( twig );

					keys = keys.slice( );

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

				if( rank < 0 || rank > keys.length )
				{
					throw new Error( );
				}

				twig[ key ] = arg;

				keys.splice( rank, 0, key );

				break;

			case 'twig:remove' :

				if( twigDup !== true )
				{
					twig = tim.copy( twig );

					keys = keys.slice( );

					twigDup = true;
				}

				if( twig[ arg ] === undefined )
				{
					throw new Error( );
				}

				delete twig[ arg ];

				keys.splice( keys.indexOf( arg ), 1 );

				break;

			case 'twig:set+' :

				if( twigDup !== true )
				{
					twig = tim.copy( twig );

					keys = keys.slice( );

					twigDup = true;
				}

				key = arg;

				arg = arguments[ ++a + 1 ];

				if( twig[ key ] === undefined )
				{
					keys.push( key );
				}

				twig[ key ] = arg;

				break;

			case 'twig:set' :

				if( twigDup !== true )
				{
					twig = tim.copy( twig );

					keys = keys.slice( );

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

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	for(
/**/		let a = 0, al = keys.length;
/**/		a < al;
/**/		++a
/**/	)
/**/	{
/**/		const o = twig[ keys[ a ] ];
/**/
/**/		if(
/**/			o.timtype !== tt_and
/**/			&&
/**/			o.timtype !== tt_arrayLiteral
/**/			&&
/**/			o.timtype !== tt_assign
/**/			&&
/**/			o.timtype !== tt_boolean
/**/			&&
/**/			o.timtype !== tt_call
/**/			&&
/**/			o.timtype !== tt_comma
/**/			&&
/**/			o.timtype !== tt_condition
/**/			&&
/**/			o.timtype !== tt_delete
/**/			&&
/**/			o.timtype !== tt_differs
/**/			&&
/**/			o.timtype !== tt_divide
/**/			&&
/**/			o.timtype !== tt_divideAssign
/**/			&&
/**/			o.timtype !== tt_dot
/**/			&&
/**/			o.timtype !== tt_equals
/**/			&&
/**/			o.timtype !== tt_func
/**/			&&
/**/			o.timtype !== tt_generator
/**/			&&
/**/			o.timtype !== tt_greaterThan
/**/			&&
/**/			o.timtype !== tt_instanceof
/**/			&&
/**/			o.timtype !== tt_lessThan
/**/			&&
/**/			o.timtype !== tt_member
/**/			&&
/**/			o.timtype !== tt_minus
/**/			&&
/**/			o.timtype !== tt_minusAssign
/**/			&&
/**/			o.timtype !== tt_multiply
/**/			&&
/**/			o.timtype !== tt_multiplyAssign
/**/			&&
/**/			o.timtype !== tt_negate
/**/			&&
/**/			o.timtype !== tt_new
/**/			&&
/**/			o.timtype !== tt_not
/**/			&&
/**/			o.timtype !== tt_null
/**/			&&
/**/			o.timtype !== tt_number
/**/			&&
/**/			o.timtype !== tt_objLiteral
/**/			&&
/**/			o.timtype !== tt_or
/**/			&&
/**/			o.timtype !== tt_plus
/**/			&&
/**/			o.timtype !== tt_plusAssign
/**/			&&
/**/			o.timtype !== tt_postDecrement
/**/			&&
/**/			o.timtype !== tt_postIncrement
/**/			&&
/**/			o.timtype !== tt_preDecrement
/**/			&&
/**/			o.timtype !== tt_preIncrement
/**/			&&
/**/			o.timtype !== tt_string
/**/			&&
/**/			o.timtype !== tt_typeof
/**/			&&
/**/			o.timtype !== tt_undefined
/**/			&&
/**/			o.timtype !== tt_var
/**/			&&
/**/			o.timtype !== tt_yield
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

	return new Constructor( keys, twig );
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
| Iterates over the twig
*/
prototype[ Symbol.iterator ] =
	function*( ) { for(
let a = 0, al = this.length;
a < al;
a++
)
{ yield this.atRank( a ); } };


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

	if( this._twig !== obj._twig || this.keys !== obj.keys )
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
			const key = this.keys[ a ];

			if( key !== obj.keys[ a ] )
			{
				return false;
			}

			const ti = this._twig[ key ];

			const oi = obj._twig[ key ];

			if( ti && ti.equals ? !ti.equals( oi ) : ti !== oi )
			{
				return false;
			}
		}
	}

	return true;
};
