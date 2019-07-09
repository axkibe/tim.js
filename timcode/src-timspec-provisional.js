'use strict';


/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
const tt_$_path_path = require( './../path/path' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_filename,
		v_path,
		v_placeholder
	)
{
	this.filename = v_filename;

	this.path = v_path;

	this.placeholder = v_placeholder;

	Object.freeze( this );
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

	let v_filename;

	let v_path;

	let v_placeholder;

	if( this !== self )
	{
		inherit = this;

		v_filename = this.filename;

		v_path = this.path;

		v_placeholder = this.placeholder;
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
			case 'filename' :

				if( arg !== pass )
				{
					v_filename = arg;
				}

				break;

			case 'path' :

				if( arg !== pass )
				{
					v_path = arg;
				}

				break;

			case 'placeholder' :

				if( arg !== pass )
				{
					v_placeholder = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if( typeof( v_filename ) !== 'string' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_path !== undefined && v_path.timtype !== tt_$_path_path )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_placeholder ) !== 'object' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		v_filename === inherit.filename
		&&
		(
			v_path === inherit.path
			||
			v_path !== undefined && v_path.timtype && v_path.equals( inherit.path )
		)
		&&
		v_placeholder === inherit.placeholder
	)
	{
		return inherit;
	}

	return new Constructor( v_filename, v_path, v_placeholder );
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
		this.filename === obj.filename
		&&
		(
			this.path === obj.path
			||
			this.path !== undefined && this.path.timtype && this.path.equals( obj.path )
		)
		&&
		this.placeholder === obj.placeholder
	);
};
