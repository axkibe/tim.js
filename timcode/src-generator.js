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
let self = NODE ? module.exports : module;


const tt_type_id = require( './type/id' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_id,
		v_jsonTypeMap,
		v_module,
		v_timDef
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.id = v_id;

	this.jsonTypeMap = v_jsonTypeMap;

	this.module = v_module;

	this._init( v_timDef );

	if( FREEZE )
	{
		Object.freeze( this );
	}
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

	let v_id;

	let v_jsonTypeMap;

	let v_module;

	let v_timDef;

	if( this !== self )
	{
		inherit = this;

		v_id = this.id;

		v_jsonTypeMap = this.jsonTypeMap;

		v_module = this.module;
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

			case 'module' :

				if( arg !== pass )
				{
					v_module = arg;
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
/**/	if( v_id === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_id !== undefined )
/**/	{
/**/		if( v_id.timtype !== tt_type_id )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_jsonTypeMap === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_module === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_module === null )
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
		(
			v_id === inherit.id
			||
			v_id !== undefined && v_id.equals( inherit.id )
		)
		&&
		v_jsonTypeMap === inherit.jsonTypeMap
		&&
		v_module === inherit.module
		&&
		v_timDef === undefined
	)
	{
		return inherit;
	}

	return new Constructor( v_id, v_jsonTypeMap, v_module, v_timDef );
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

	return (
		(
			this.id === obj.id
			||
			this.id !== undefined && this.id.equals( obj.id )
		)
		&&
		this.jsonTypeMap === obj.jsonTypeMap
		&&
		this.module === obj.module
	);
};


}
)( );
