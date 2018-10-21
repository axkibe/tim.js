/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
'use strict';


const tt_attributeGroup = require( './attributeGroup' );


const tt_type_set = require( './type/set' );


const tt_ast_var = require( './ast/var' );


const tt_export_stringSet = require( './export/stringSet' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_alike,
		v_attributes,
		v_check,
		v_constructorList,
		v_creatorHasFreeStringsParser,
		v_ggroup,
		v_glist,
		v_global,
		v_gset,
		v_gtwig,
		v_imports,
		v_inherits,
		v_json,
		v_module,
		v_proxyRanks,
		v_singleton,
		v_transform
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.alike = v_alike;

	this.attributes = v_attributes;

	this.check = v_check;

	this.constructorList = v_constructorList;

	this.creatorHasFreeStringsParser = v_creatorHasFreeStringsParser;

	this.ggroup = v_ggroup;

	this.glist = v_glist;

	this.global = v_global;

	this.gset = v_gset;

	this.gtwig = v_gtwig;

	this.imports = v_imports;

	this.inherits = v_inherits;

	this.json = v_json;

	this.module = v_module;

	this.proxyRanks = v_proxyRanks;

	this.singleton = v_singleton;

	this.transform = v_transform;

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

	let v_attributes;

	let v_check;

	let v_constructorList;

	let v_creatorHasFreeStringsParser;

	let v_ggroup;

	let v_glist;

	let v_global;

	let v_gset;

	let v_gtwig;

	let v_imports;

	let v_inherits;

	let v_json;

	let v_module;

	let v_proxyRanks;

	let v_singleton;

	let v_transform;

	if( this !== self )
	{
		inherit = this;

		v_alike = this.alike;

		v_attributes = this.attributes;

		v_check = this.check;

		v_constructorList = this.constructorList;

		v_creatorHasFreeStringsParser = this.creatorHasFreeStringsParser;

		v_ggroup = this.ggroup;

		v_glist = this.glist;

		v_global = this.global;

		v_gset = this.gset;

		v_gtwig = this.gtwig;

		v_imports = this.imports;

		v_inherits = this.inherits;

		v_json = this.json;

		v_module = this.module;

		v_proxyRanks = this.proxyRanks;

		v_singleton = this.singleton;

		v_transform = this.transform;
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

			case 'attributes' :

				if( arg !== pass )
				{
					v_attributes = arg;
				}

				break;

			case 'check' :

				if( arg !== pass )
				{
					v_check = arg;
				}

				break;

			case 'constructorList' :

				if( arg !== pass )
				{
					v_constructorList = arg;
				}

				break;

			case 'creatorHasFreeStringsParser' :

				if( arg !== pass )
				{
					v_creatorHasFreeStringsParser = arg;
				}

				break;

			case 'ggroup' :

				if( arg !== pass )
				{
					v_ggroup = arg;
				}

				break;

			case 'glist' :

				if( arg !== pass )
				{
					v_glist = arg;
				}

				break;

			case 'global' :

				if( arg !== pass )
				{
					v_global = arg;
				}

				break;

			case 'gset' :

				if( arg !== pass )
				{
					v_gset = arg;
				}

				break;

			case 'gtwig' :

				if( arg !== pass )
				{
					v_gtwig = arg;
				}

				break;

			case 'imports' :

				if( arg !== pass )
				{
					v_imports = arg;
				}

				break;

			case 'inherits' :

				if( arg !== pass )
				{
					v_inherits = arg;
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

			case 'proxyRanks' :

				if( arg !== pass )
				{
					v_proxyRanks = arg;
				}

				break;

			case 'singleton' :

				if( arg !== pass )
				{
					v_singleton = arg;
				}

				break;

			case 'transform' :

				if( arg !== pass )
				{
					v_transform = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if( typeof( v_alike ) !== 'object' && v_alike !== undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_attributes.timtype !== tt_attributeGroup )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_check ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_creatorHasFreeStringsParser ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_ggroup !== undefined && v_ggroup.timtype !== tt_type_set )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_glist !== undefined && v_glist.timtype !== tt_type_set )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_global !== undefined && v_global.timtype !== tt_ast_var )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_gset !== undefined && v_gset.timtype !== tt_type_set )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_gtwig !== undefined && v_gtwig.timtype !== tt_type_set )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_imports.timtype !== tt_type_set )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_inherits !== undefined && v_inherits.timtype !== tt_export_stringSet )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_json ) !== 'string' && v_json !== undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_proxyRanks ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_singleton ) !== 'boolean' && v_singleton !== undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_transform ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		v_alike === inherit.alike
		&&
		(
			v_attributes === inherit.attributes
			||
			v_attributes.equals( inherit.attributes )
		)
		&&
		v_check === inherit.check
		&&
		v_constructorList === inherit.constructorList
		&&
		v_creatorHasFreeStringsParser === inherit.creatorHasFreeStringsParser
		&&
		(
			v_ggroup === inherit.ggroup
			||
			v_ggroup !== undefined && v_ggroup.timtype && v_ggroup.equals( inherit.ggroup )
		)
		&&
		(
			v_glist === inherit.glist
			||
			v_glist !== undefined && v_glist.timtype && v_glist.equals( inherit.glist )
		)
		&&
		(
			v_global === inherit.global
			||
			v_global !== undefined && v_global.timtype && v_global.equals( inherit.global )
		)
		&&
		(
			v_gset === inherit.gset
			||
			v_gset !== undefined && v_gset.timtype && v_gset.equals( inherit.gset )
		)
		&&
		(
			v_gtwig === inherit.gtwig
			||
			v_gtwig !== undefined && v_gtwig.timtype && v_gtwig.equals( inherit.gtwig )
		)
		&&
		(
			v_imports === inherit.imports
			||
			v_imports.equals( inherit.imports )
		)
		&&
		(
			v_inherits === inherit.inherits
			||
			v_inherits !== undefined && v_inherits.timtype && v_inherits.equals( inherit.inherits )
		)
		&&
		v_json === inherit.json
		&&
		v_module === inherit.module
		&&
		v_proxyRanks === inherit.proxyRanks
		&&
		v_singleton === inherit.singleton
		&&
		v_transform === inherit.transform
	)
	{
		return inherit;
	}

	return (
		new Constructor(
			v_alike,
			v_attributes,
			v_check,
			v_constructorList,
			v_creatorHasFreeStringsParser,
			v_ggroup,
			v_glist,
			v_global,
			v_gset,
			v_gtwig,
			v_imports,
			v_inherits,
			v_json,
			v_module,
			v_proxyRanks,
			v_singleton,
			v_transform
		)
	);
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
		(
			this.attributes === obj.attributes
			||
			this.attributes.equals( obj.attributes )
		)
		&&
		this.check === obj.check
		&&
		this.constructorList === obj.constructorList
		&&
		this.creatorHasFreeStringsParser === obj.creatorHasFreeStringsParser
		&&
		(
			this.ggroup === obj.ggroup
			||
			this.ggroup !== undefined && this.ggroup.timtype && this.ggroup.equals( obj.ggroup )
		)
		&&
		(
			this.glist === obj.glist
			||
			this.glist !== undefined && this.glist.timtype && this.glist.equals( obj.glist )
		)
		&&
		(
			this.global === obj.global
			||
			this.global !== undefined && this.global.timtype && this.global.equals( obj.global )
		)
		&&
		(
			this.gset === obj.gset
			||
			this.gset !== undefined && this.gset.timtype && this.gset.equals( obj.gset )
		)
		&&
		(
			this.gtwig === obj.gtwig
			||
			this.gtwig !== undefined && this.gtwig.timtype && this.gtwig.equals( obj.gtwig )
		)
		&&
		(
			this.imports === obj.imports
			||
			this.imports.equals( obj.imports )
		)
		&&
		(
			this.inherits === obj.inherits
			||
			this.inherits !== undefined && this.inherits.timtype && this.inherits.equals( obj.inherits )
		)
		&&
		this.json === obj.json
		&&
		this.module === obj.module
		&&
		this.proxyRanks === obj.proxyRanks
		&&
		this.singleton === obj.singleton
		&&
		this.transform === obj.transform
	);
};
