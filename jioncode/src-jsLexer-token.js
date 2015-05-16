/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	ijon$jsLexer_token;


if( NODE )
{
	ijon$jsLexer_token = module.exports;
}
else
{
	ijon$jsLexer_token = { };
}


var
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
	require( '../proto' );
}


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
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.type = v_type;

	this.value = v_value;

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


ijon$jsLexer_token.prototype = prototype;


/*
| Creates a new token object.
*/
ijon$jsLexer_token.create =
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

	if( this !== ijon$jsLexer_token )
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

	if( inherit && v_type === inherit.type && v_value === inherit.value )
	{
		return inherit;
	}

	return new Constructor( v_type, v_value );
};


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

	return this.type === obj.type && this.value === obj.value;
};


}
)( );
