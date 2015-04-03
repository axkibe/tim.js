/*
| This is an auto generated file.
|
| DO NOT EDIT!
*/


/*
| Export.
*/
var
	jsLexer_token;


if( SERVER )
{
	jsLexer_token = module.exports;
}
else
{
	jsLexer_token = { };
}


/*
| Imports.
*/
var
	jools,
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

	jion_proto = require( '../../src/jion/proto' );
}


/*
| Abstract constructor.
*/
var
	AbstractConstructor;


AbstractConstructor =
	function(
		v_type, // the token type
		v_value // the token value
	)
{
	if( v_type !== undefined )
	{
		this.type = v_type;
	}

	if( v_value !== undefined )
	{
		this.value = v_value;
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
		v_type, // the token type
		v_value // the token value
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
	}

	this.type = v_type;

	if( v_value !== undefined )
	{
		this.value = v_value;
	}

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


jsLexer_token.prototype = prototype;


/*
| Creates an token object.
*/
jsLexer_token.abstract =
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
		v_type,
		v_value;

	if( this !== jsLexer_token )
	{
		inherit = this;

		v_type = this.type;

		v_value = this.value;
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
			case 'type' :

				if( arg !== pass )
				{
					v_type = arg;
				}

				break;

			case 'value' :

				if( arg !== pass )
				{
					v_value = arg;
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
/**/	if( v_type === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_type !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_type ) !== 'string'
/**/			&&
/**/			!( v_type instanceof String )
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_value === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_value !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_value ) !== 'boolean'
/**/			&&
/**/			typeof( v_value ) !== 'number'
/**/			&&
/**/			typeof( v_value ) !== 'string'
/**/			&&
/**/			!( v_value instanceof String )
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if(
		inherit
		&&
		v_type === inherit.type
		&&
		(
			v_value === inherit.value
			||
			v_value !== undefined && v_value.equals( inherit.value )
		)
	)
	{
		return inherit;
	}

	return new AbstractConstructor( v_type, v_value );
};


/*
| Creates a new token object.
*/
jsLexer_token.create =
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
		v_type,
		v_value;

	if( this !== jsLexer_token )
	{
		inherit = this;

		v_type = this.type;

		v_value = this.value;
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
			case 'type' :

				if( arg !== pass )
				{
					v_type = arg;
				}

				break;

			case 'value' :

				if( arg !== pass )
				{
					v_value = arg;
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
/**/	if( v_type === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_type === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		typeof( v_type ) !== 'string'
/**/		&&
/**/		!( v_type instanceof String )
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_value === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_value !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_value ) !== 'boolean'
/**/			&&
/**/			typeof( v_value ) !== 'number'
/**/			&&
/**/			typeof( v_value ) !== 'string'
/**/			&&
/**/			!( v_value instanceof String )
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if(
		inherit
		&&
		v_type === inherit.type
		&&
		(
			v_value === inherit.value
			||
			v_value !== undefined && v_value.equals( inherit.value )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_type, v_value );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'jsLexer_token:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'token:abstract';


/*
| Reflection.
*/
prototype.reflect = 'jsLexer_token';


/*
| Name Reflection.
*/
prototype.reflectName = 'token';


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

	if( obj.reflect !== 'jsLexer_token' )
	{
		return false;
	}

	return (
		this.type === obj.type
		&&
		(
			this.value === obj.value
			||
			this.value !== undefined && this.value.equals( obj.value )
		)
	);
};


}
)( );
