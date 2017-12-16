/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	jion$generator;


if( NODE )
{
	jion$generator = module.exports;
}
else
{
	jion$generator = { };
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
	require( './proto' );
}


/*
| Constructor.
*/
var
	Constructor,
	prototype;


Constructor =
	function(
		v_jion, // the jion definition
		v_jsonTypeMap, // if defined a typemap for json generation/parsing
		v_ouroboros // true for building jioncode for jion itself
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.jsonTypeMap = v_jsonTypeMap;

	this.ouroboros = v_ouroboros;

	this._init( v_jion );

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


jion$generator.prototype = prototype;


/*
| Creates a new generator object.
*/
jion$generator.create =
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
		v_jion,
		v_jsonTypeMap,
		v_ouroboros;

	if( this !== jion$generator )
	{
		inherit = this;

		v_jsonTypeMap = this.jsonTypeMap;

		v_ouroboros = this.ouroboros;
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
			case 'jion' :

				if( arg !== pass )
				{
					v_jion = arg;
				}

				break;

			case 'jsonTypeMap' :

				if( arg !== pass )
				{
					v_jsonTypeMap = arg;
				}

				break;

			case 'ouroboros' :

				if( arg !== pass )
				{
					v_ouroboros = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

	if( v_ouroboros === undefined )
	{
		v_ouroboros = true;
	}

/**/if( CHECK )
/**/{
/**/	if( v_jion === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_jion === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_jsonTypeMap === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_ouroboros === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_ouroboros === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_ouroboros ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		v_jion === undefined
		&&
		v_jsonTypeMap === inherit.jsonTypeMap
		&&
		v_ouroboros === inherit.ouroboros
	)
	{
		return inherit;
	}

	return new Constructor( v_jion, v_jsonTypeMap, v_ouroboros );
};


/*
| Reflection.
*/
prototype.reflect = 'generator';


/*
| Name Reflection.
*/
prototype.reflectName = 'generator';


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

	if( obj.reflect !== 'generator' )
	{
		return false;
	}

	return (
		this.jsonTypeMap === obj.jsonTypeMap
		&&
		this.ouroboros === obj.ouroboros
	);
};


}
)( );
