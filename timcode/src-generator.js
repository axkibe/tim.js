/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
'use strict';


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_alike,
		v_check,
		v_init,
		v_json,
		v_module,
		v_timDef
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.alike = v_alike;

	this.check = v_check;

	this.init = v_init;

	this.json = v_json;

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

	let v_alike;

	let v_check;

	let v_init;

	let v_json;

	let v_module;

	let v_timDef;

	if( this !== self )
	{
		inherit = this;

		v_alike = this.alike;

		v_check = this.check;

		v_init = this.init;

		v_json = this.json;

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
			case 'alike' :

				if( arg !== pass )
				{
					v_alike = arg;
				}

				break;

			case 'check' :

				if( arg !== pass )
				{
					v_check = arg;
				}

				break;

			case 'init' :

				if( arg !== pass )
				{
					v_init = arg;
				}

				break;

			case 'json' :

				if( arg !== pass )
				{
					v_json = arg;
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
/**/	if( v_alike === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_check === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_check === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_check ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_init === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_json === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_json !== undefined )
/**/	{
/**/		if( typeof( v_json ) !== 'string' )
/**/		{
/**/			throw new Error( );
/**/		}
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
		v_alike === inherit.alike
		&&
		v_check === inherit.check
		&&
		v_init === inherit.init
		&&
		v_json === inherit.json
		&&
		v_module === inherit.module
		&&
		v_timDef === undefined
	)
	{
		return inherit;
	}

	return new Constructor( v_alike, v_check, v_init, v_json, v_module, v_timDef );
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
		this.alike === obj.alike
		&&
		this.check === obj.check
		&&
		this.init === obj.init
		&&
		this.json === obj.json
		&&
		this.module === obj.module
	);
};
