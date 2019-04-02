'use strict';


/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
const tt_timspec = require( './timspec' );


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
/**/		if( o.timtype !== tt_timspec )
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
