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
	jsParser_tokenSpec;


if( !jsParser_tokenSpec )
{
	jsParser_tokenSpec = { };
}


if( !NODE )
{
/**/if( CHECK )
/**/{
/**/	if( timModules.jsParser_tokenSpec !== undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	timModules.jsParser_tokenSpec = jsParser_tokenSpec;
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
		v_associativity,
		v_astCreator,
		v_handler,
		v_prec
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.associativity = v_associativity;

	this.astCreator = v_astCreator;

	this.handler = v_handler;

	this.prec = v_prec;

	this._init( );

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


jsParser_tokenSpec.prototype = prototype;


/*
| Creates a new tokenSpec object.
*/
jsParser_tokenSpec.create =
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
		v_associativity,
		v_astCreator,
		v_handler,
		v_prec;

	if( this !== jsParser_tokenSpec )
	{
		inherit = this;

		v_associativity = this.associativity;

		v_astCreator = this.astCreator;

		v_handler = this.handler;

		v_prec = this.prec;
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
			case 'associativity' :

				if( arg !== pass )
				{
					v_associativity = arg;
				}

				break;

			case 'astCreator' :

				if( arg !== pass )
				{
					v_astCreator = arg;
				}

				break;

			case 'handler' :

				if( arg !== pass )
				{
					v_handler = arg;
				}

				break;

			case 'prec' :

				if( arg !== pass )
				{
					v_prec = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

	if( v_associativity === undefined )
	{
		v_associativity = 'n/a';
	}

/**/if( CHECK )
/**/{
/**/	if( v_associativity === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_associativity === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		typeof( v_associativity ) !== 'string'
/**/		&&
/**/		!( v_associativity instanceof String )
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_astCreator === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_handler === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_handler === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		typeof( v_handler ) !== 'string'
/**/		&&
/**/		!( v_handler instanceof String )
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_prec === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_prec !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_prec ) !== 'number'
/**/			||
/**/			Number.isNaN( v_prec )
/**/			||
/**/			Math.floor( v_prec ) !== v_prec
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if(
		inherit
		&&
		v_associativity === inherit.associativity
		&&
		v_astCreator === inherit.astCreator
		&&
		v_handler === inherit.handler
		&&
		v_prec === inherit.prec
	)
	{
		return inherit;
	}

	return (
		new Constructor(
			v_associativity,
			v_astCreator,
			v_handler,
			v_prec
		)
	);
};


/*
| Reflection.
*/
prototype.reflect = 'jsParser_tokenSpec';


/*
| Type reflection.
*/
prototype.timtype = jsParser_tokenSpec;


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

	if( obj.reflect !== 'jsParser_tokenSpec' )
	{
		return false;
	}

	return (
		this.associativity === obj.associativity
		&&
		this.astCreator === obj.astCreator
		&&
		this.handler === obj.handler
		&&
		this.prec === obj.prec
	);
};


}
)( );
