'use strict';


/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
const tt_attributeGroup = require( './attributeGroup' );


const tt_$_type_tim = require( './../type/tim' );


const tt_timspec = require( './timspec' );


const tt_$_ast_var = require( './../ast/var' );


const tt_$_type_set = require( './../type/set' );


const tt_$_string_set = require( './../string/set' );


const tt_$_path_path = require( './../path/path' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_abstract,
		v_alike,
		v_attributes,
		v_check,
		v_creator,
		v_customAsJSON,
		v_extend,
		v_extendSpec,
		v_ggroup,
		v_glist,
		v_global,
		v_gset,
		v_gtwig,
		v_hasLazy,
		v_hasProxyRanks,
		v_imports,
		v_inherits,
		v_isAdjusting,
		v_json,
		v_module,
		v_path,
		v_requires,
		v_singleton
	)
{
	this.__lazy = { };

	this.abstract = v_abstract;

	this.alike = v_alike;

	this.attributes = v_attributes;

	this.check = v_check;

	this.creator = v_creator;

	this.customAsJSON = v_customAsJSON;

	this.extend = v_extend;

	this.extendSpec = v_extendSpec;

	this.ggroup = v_ggroup;

	this.glist = v_glist;

	this.global = v_global;

	this.gset = v_gset;

	this.gtwig = v_gtwig;

	this.hasLazy = v_hasLazy;

	this.hasProxyRanks = v_hasProxyRanks;

	this.imports = v_imports;

	this.inherits = v_inherits;

	this.isAdjusting = v_isAdjusting;

	this.json = v_json;

	this.module = v_module;

	this.path = v_path;

	this.requires = v_requires;

	this.singleton = v_singleton;

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

	let v_abstract;

	let v_alike;

	let v_attributes;

	let v_check;

	let v_creator;

	let v_customAsJSON;

	let v_extend;

	let v_extendSpec;

	let v_ggroup;

	let v_glist;

	let v_global;

	let v_gset;

	let v_gtwig;

	let v_hasLazy;

	let v_hasProxyRanks;

	let v_imports;

	let v_inherits;

	let v_isAdjusting;

	let v_json;

	let v_module;

	let v_path;

	let v_requires;

	let v_singleton;

	if( this !== self )
	{
		inherit = this;

		v_abstract = this.abstract;

		v_alike = this.alike;

		v_attributes = this.attributes;

		v_check = this.check;

		v_creator = this.creator;

		v_customAsJSON = this.customAsJSON;

		v_extend = this.extend;

		v_extendSpec = this.extendSpec;

		v_ggroup = this.ggroup;

		v_glist = this.glist;

		v_global = this.global;

		v_gset = this.gset;

		v_gtwig = this.gtwig;

		v_hasLazy = this.hasLazy;

		v_hasProxyRanks = this.hasProxyRanks;

		v_imports = this.imports;

		v_inherits = this.inherits;

		v_isAdjusting = this.isAdjusting;

		v_json = this.json;

		v_module = this.module;

		v_path = this.path;

		v_requires = this.requires;

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
			case 'abstract' :

				if( arg !== pass )
				{
					v_abstract = arg;
				}

				break;

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

			case 'creator' :

				if( arg !== pass )
				{
					v_creator = arg;
				}

				break;

			case 'customAsJSON' :

				if( arg !== pass )
				{
					v_customAsJSON = arg;
				}

				break;

			case 'extend' :

				if( arg !== pass )
				{
					v_extend = arg;
				}

				break;

			case 'extendSpec' :

				if( arg !== pass )
				{
					v_extendSpec = arg;
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

			case 'hasLazy' :

				if( arg !== pass )
				{
					v_hasLazy = arg;
				}

				break;

			case 'hasProxyRanks' :

				if( arg !== pass )
				{
					v_hasProxyRanks = arg;
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

			case 'isAdjusting' :

				if( arg !== pass )
				{
					v_isAdjusting = arg;
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

			case 'path' :

				if( arg !== pass )
				{
					v_path = arg;
				}

				break;

			case 'requires' :

				if( arg !== pass )
				{
					v_requires = arg;
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
/**/	if( typeof( v_abstract ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
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
/**/	if( typeof( v_creator ) !== 'string' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_customAsJSON ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_extend !== undefined && v_extend.timtype !== tt_$_type_tim )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_extendSpec !== undefined && v_extendSpec.timtype !== tt_timspec )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_ggroup !== undefined && v_ggroup.timtype !== tt_$_type_set )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_glist !== undefined && v_glist.timtype !== tt_$_type_set )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_global !== undefined && v_global.timtype !== tt_$_ast_var )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_gset !== undefined && v_gset.timtype !== tt_$_type_set )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_gtwig !== undefined && v_gtwig.timtype !== tt_$_type_set )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_hasLazy ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_hasProxyRanks ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_imports.timtype !== tt_$_type_set )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_inherits !== undefined && v_inherits.timtype !== tt_$_string_set )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_isAdjusting ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_json !== undefined && typeof( v_json ) !== 'string' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_path !== undefined && v_path.timtype !== tt_$_path_path )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_requires.timtype !== tt_$_string_set )
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
		v_abstract === inherit.abstract
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
		v_creator === inherit.creator
		&&
		v_customAsJSON === inherit.customAsJSON
		&&
		(
			v_extend === inherit.extend
			||
			v_extend !== undefined && v_extend.timtype && v_extend.equals( inherit.extend )
		)
		&&
		(
			v_extendSpec === inherit.extendSpec
			||
			v_extendSpec !== undefined
			&&
			v_extendSpec.timtype
			&&
			v_extendSpec.equals( inherit.extendSpec )
		)
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
		v_hasLazy === inherit.hasLazy
		&&
		v_hasProxyRanks === inherit.hasProxyRanks
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
		v_isAdjusting === inherit.isAdjusting
		&&
		v_json === inherit.json
		&&
		v_module === inherit.module
		&&
		(
			v_path === inherit.path
			||
			v_path !== undefined && v_path.timtype && v_path.equals( inherit.path )
		)
		&&
		(
			v_requires === inherit.requires
			||
			v_requires.equals( inherit.requires )
		)
		&&
		v_singleton === inherit.singleton
	)
	{
		return inherit;
	}

	return (
		new Constructor(
			v_abstract,
			v_alike,
			v_attributes,
			v_check,
			v_creator,
			v_customAsJSON,
			v_extend,
			v_extendSpec,
			v_ggroup,
			v_glist,
			v_global,
			v_gset,
			v_gtwig,
			v_hasLazy,
			v_hasProxyRanks,
			v_imports,
			v_inherits,
			v_isAdjusting,
			v_json,
			v_module,
			v_path,
			v_requires,
			v_singleton
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
		this.abstract === obj.abstract
		&&
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
		this.creator === obj.creator
		&&
		this.customAsJSON === obj.customAsJSON
		&&
		(
			this.extend === obj.extend
			||
			this.extend !== undefined && this.extend.timtype && this.extend.equals( obj.extend )
		)
		&&
		(
			this.extendSpec === obj.extendSpec
			||
			this.extendSpec !== undefined
			&&
			this.extendSpec.timtype
			&&
			this.extendSpec.equals( obj.extendSpec )
		)
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
		this.hasLazy === obj.hasLazy
		&&
		this.hasProxyRanks === obj.hasProxyRanks
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
		this.isAdjusting === obj.isAdjusting
		&&
		this.json === obj.json
		&&
		this.module === obj.module
		&&
		(
			this.path === obj.path
			||
			this.path !== undefined && this.path.timtype && this.path.equals( obj.path )
		)
		&&
		(
			this.requires === obj.requires
			||
			this.requires.equals( obj.requires )
		)
		&&
		this.singleton === obj.singleton
	);
};


/*
| Tests partial equality.
*/
prototype.alikeIgnoringProteans =
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

	return (
		this.abstract === obj.abstract
		&&
		(
			this.attributes === obj.attributes
			||
			this.attributes.equals( obj.attributes )
		)
		&&
		this.check === obj.check
		&&
		this.creator === obj.creator
		&&
		this.customAsJSON === obj.customAsJSON
		&&
		(
			this.extend === obj.extend
			||
			this.extend !== undefined && this.extend.timtype && this.extend.equals( obj.extend )
		)
		&&
		(
			this.extendSpec === obj.extendSpec
			||
			this.extendSpec !== undefined
			&&
			this.extendSpec.timtype
			&&
			this.extendSpec.equals( obj.extendSpec )
		)
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
		this.hasLazy === obj.hasLazy
		&&
		this.hasProxyRanks === obj.hasProxyRanks
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
		this.isAdjusting === obj.isAdjusting
		&&
		this.json === obj.json
		&&
		(
			this.path === obj.path
			||
			this.path !== undefined && this.path.timtype && this.path.equals( obj.path )
		)
		&&
		(
			this.requires === obj.requires
			||
			this.requires.equals( obj.requires )
		)
		&&
		this.singleton === obj.singleton
	);
};
