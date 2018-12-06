/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
'use strict';


const tt_$_export_path = require( './../export/path.js' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_def,
		v_json,
		v_path
	)
{
	this.def = v_def;

	this.json = v_json;

	this.path = v_path;

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

	let v_def;

	let v_json;

	let v_path;

	if( this !== self )
	{
		inherit = this;

		v_def = this.def;

		v_json = this.json;

		v_path = this.path;
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
			case 'def' :

				if( arg !== pass )
				{
					v_def = arg;
				}

				break;

			case 'json' :

				if( arg !== pass )
				{
					v_json = arg;
				}

				break;

			case 'path' :

				if( arg !== pass )
				{
					v_path = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_json !== undefined && typeof( v_json ) !== 'string' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_path.timtype !== tt_$_export_path )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		v_def === inherit.def
		&&
		v_json === inherit.json
		&&
		(
			v_path === inherit.path
			||
			v_path.equals( inherit.path )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_def, v_json, v_path );
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
		this.def === obj.def
		&&
		this.json === obj.json
		&&
		(
			this.path === obj.path
			||
			this.path.equals( obj.path )
		)
	);
};
