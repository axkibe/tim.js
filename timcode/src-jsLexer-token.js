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
	jsLexer_token;


if( !jsLexer_token )
{
	jsLexer_token = { };
}


if( !NODE )
{
/**/if( CHECK )
/**/{
/**/	if( timModules.jsLexer_token !== undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	timModules.jsLexer_token = jsLexer_token;
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
		v_type,
		v_value
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


jsLexer_token.prototype = prototype;


/*
| Creates a new token object.
*/
jsLexer_token.create =
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

				throw new Error( );
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
/**/			(
/**/				typeof( v_value ) !== 'number'
/**/				||
/**/				Number.isNaN( v_value )
/**/			)
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

	if( obj.reflect !== 'jsLexer_token' )
	{
		return false;
	}

	return this.type === obj.type && this.value === obj.value;
};


}
)( );