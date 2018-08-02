/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
'use strict';


/*
| The typed immutable.
*/
let self = NODE ? module.exports : module;


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_module,
		v_timDef
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

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

	let v_module;

	let v_timDef;

	if( this !== self )
	{
		inherit = this;

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

	if( inherit && v_module === inherit.module && v_timDef === undefined )
	{
		return inherit;
	}

	return new Constructor( v_module, v_timDef );
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

	return this.module === obj.module;
};
