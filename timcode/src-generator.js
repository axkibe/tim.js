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
let generator = NODE ? module.exports : module;


let tim_proto = tim.proto;


/*
| Constructor.
*/
var
	Constructor,
	prototype;


Constructor =
	function(
		v_id,
		v_jsonTypeMap,
		v_timDef
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.id = v_id;

	this.jsonTypeMap = v_jsonTypeMap;

	this._init( v_timDef );

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


generator.prototype = prototype;


/*
| Creates a new generator object.
*/
generator.create =
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
		v_id,
		v_jsonTypeMap,
		v_timDef;

	if( this !== generator )
	{
		inherit = this;

		v_id = this.id;

		v_jsonTypeMap = this.jsonTypeMap;
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
			case 'id' :

				if( arg !== pass )
				{
					v_id = arg;
				}

				break;

			case 'jsonTypeMap' :

				if( arg !== pass )
				{
					v_jsonTypeMap = arg;
				}

				break;

			case 'timDef' :

				if( arg !== pass )
				{
					v_timDef = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_id === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_id === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_id.reflect !== 'id' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_jsonTypeMap === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_timDef === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_timDef === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		v_id === inherit.id
		&&
		v_jsonTypeMap === inherit.jsonTypeMap
		&&
		v_timDef === undefined
	)
	{
		return inherit;
	}

	return new Constructor( v_id, v_jsonTypeMap, v_timDef );
};


/*
| Reflection.
*/
prototype.reflect = 'generator';


/*
| Type reflection.
*/
prototype.timtype = generator;


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

	if( obj.reflect !== 'generator' )
	{
		return false;
	}

	return this.id === obj.id && this.jsonTypeMap === obj.jsonTypeMap;
};


}
)( );
