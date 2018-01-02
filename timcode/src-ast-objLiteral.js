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
	ast_objLiteral;


if( !ast_objLiteral )
{
	ast_objLiteral = { };
}


if( !NODE )
{
/**/if( CHECK )
/**/{
/**/	if( timModules.ast_objLiteral !== undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	timModules.ast_objLiteral = ast_objLiteral;
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
prototype = Constructor.prototype;


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
		a,
		aZ,
		arg,
		inherit,
		key,
		o,
		rank,
		ranks,
		t,
		tZ,
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
/**/					t = 0, tZ = ranks.length;
/**/					t < tZ;
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
/**/			o.reflect !== 'ast_boolean'
/**/			&&
/**/			o.reflect !== 'ast_call'
/**/			&&
/**/			o.reflect !== 'ast_comma'
/**/			&&
/**/			o.reflect !== 'ast_condition'
/**/			&&
/**/			o.reflect !== 'ast_delete'
/**/			&&
/**/			o.reflect !== 'ast_differs'
/**/			&&
/**/			o.reflect !== 'ast_divide'
/**/			&&
/**/			o.reflect !== 'ast_divideAssign'
/**/			&&
/**/			o.reflect !== 'ast_dot'
/**/			&&
/**/			o.reflect !== 'ast_equals'
/**/			&&
/**/			o.reflect !== 'ast_func'
/**/			&&
/**/			o.reflect !== 'ast_greaterThan'
/**/			&&
/**/			o.reflect !== 'ast_instanceof'
/**/			&&
/**/			o.reflect !== 'ast_lessThan'
/**/			&&
/**/			o.reflect !== 'ast_member'
/**/			&&
/**/			o.reflect !== 'ast_minus'
/**/			&&
/**/			o.reflect !== 'ast_minusAssign'
/**/			&&
/**/			o.reflect !== 'ast_multiply'
/**/			&&
/**/			o.reflect !== 'ast_multiplyAssign'
/**/			&&
/**/			o.reflect !== 'ast_negate'
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
/**/			o.reflect !== 'ast_postDecrement'
/**/			&&
/**/			o.reflect !== 'ast_postIncrement'
/**/			&&
/**/			o.reflect !== 'ast_preDecrement'
/**/			&&
/**/			o.reflect !== 'ast_preIncrement'
/**/			&&
/**/			o.reflect !== 'ast_string'
/**/			&&
/**/			o.reflect !== 'ast_typeof'
/**/			&&
/**/			o.reflect !== 'ast_var'
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
