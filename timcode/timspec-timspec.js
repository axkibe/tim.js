/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
'use strict';


const tt_$_attributeGroup = require( './../attributeGroup.js' );


const tt_$_type_set = require( './../type/set.js' );


const tt_$_export_path = require( './../export/path.js' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_attributes,
		v_filename,
		v_imports,
		v_json,
		v_path,
		v_singleton
	)
{
	this.attributes = v_attributes;

	this.filename = v_filename;

	this.imports = v_imports;

	this.json = v_json;

	this.path = v_path;

	this.singleton = v_singleton;

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

	let v_attributes;

	let v_filename;

	let v_imports;

	let v_json;

	let v_path;

	let v_singleton;

	if( this !== self )
	{
		inherit = this;

		v_attributes = this.attributes;

		v_filename = this.filename;

		v_imports = this.imports;

		v_json = this.json;

		v_path = this.path;

		v_singleton = this.singleton;
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
			case 'attributes' :

				if( arg !== pass )
				{
					v_attributes = arg;
				}

				break;

			case 'filename' :

				if( arg !== pass )
				{
					v_filename = arg;
				}

				break;

			case 'imports' :

				if( arg !== pass )
				{
					v_imports = arg;
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

			case 'singleton' :

				if( arg !== pass )
				{
					v_singleton = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_attributes.timtype !== tt_$_attributeGroup )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_filename ) !== 'string' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_imports.timtype !== tt_$_type_set )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_json !== undefined && typeof( v_json ) !== 'string' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_path !== undefined && v_path.timtype !== tt_$_export_path )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_singleton ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_attributes === inherit.attributes
			||
			v_attributes.equals( inherit.attributes )
		)
		&&
		v_filename === inherit.filename
		&&
		(
			v_imports === inherit.imports
			||
			v_imports.equals( inherit.imports )
		)
		&&
		v_json === inherit.json
		&&
		(
			v_path === inherit.path
			||
			v_path !== undefined && v_path.timtype && v_path.equals( inherit.path )
		)
		&&
		v_singleton === inherit.singleton
	)
	{
		return inherit;
	}

	return new Constructor( v_attributes, v_filename, v_imports, v_json, v_path, v_singleton );
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
			this.attributes === obj.attributes
			||
			this.attributes.equals( obj.attributes )
		)
		&&
		this.filename === obj.filename
		&&
		(
			this.imports === obj.imports
			||
			this.imports.equals( obj.imports )
		)
		&&
		this.json === obj.json
		&&
		(
			this.path === obj.path
			||
			this.path !== undefined && this.path.timtype && this.path.equals( obj.path )
		)
		&&
		this.singleton === obj.singleton
	);
};
