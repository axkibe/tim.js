/*
| This is an auto generated file.
|
| DO NOT EDIT!
*/


/*
| Export.
*/
var
	format_context;


if( SERVER )
{
	format_context = module.exports;
}
else
{
	format_context = { };
}


/*
| Imports.
*/
var
	jools,
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
if( SERVER )
{
	jools = require( '../../src/jools/jools' );

	jion_proto = require( '../../src/jion/proto' );
}


/*
| Abstract constructor.
*/
var
	AbstractConstructor;


AbstractConstructor =
	function(
		v_check, // true if within optinal CHECK code
		v_indent, // the indentation
		v_inline, // true if to be formated inline
		v_root // true if in root context
	)
{
	if( v_check !== undefined )
	{
		this.check = v_check;
	}

	if( v_indent !== undefined )
	{
		this.indent = v_indent;
	}

	if( v_inline !== undefined )
	{
		this.inline = v_inline;
	}

	if( v_root !== undefined )
	{
		this.root = v_root;
	}

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Constructor.
*/
var
	Constructor,
	prototype;


Constructor =
	function(
		v_check, // true if within optinal CHECK code
		v_indent, // the indentation
		v_inline, // true if to be formated inline
		v_root // true if in root context
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
	}

	this.check = v_check;

	this.indent = v_indent;

	this.inline = v_inline;

	this.root = v_root;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


format_context.prototype = prototype;


/*
| Creates an context object.
*/
format_context.abstract =
AbstractConstructor.prototype.abstract =
prototype.abstract =
	function(
		// free strings
	)
{
	var
		a,
		aZ,
		arg,
		inherit,
		v_check,
		v_indent,
		v_inline,
		v_root;

	if( this !== format_context )
	{
		inherit = this;

		v_check = this.check;

		v_indent = this.indent;

		v_inline = this.inline;

		v_root = this.root;
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
			case 'check' :

				if( arg !== pass )
				{
					v_check = arg;
				}

				break;

			case 'indent' :

				if( arg !== pass )
				{
					v_indent = arg;
				}

				break;

			case 'inline' :

				if( arg !== pass )
				{
					v_inline = arg;
				}

				break;

			case 'root' :

				if( arg !== pass )
				{
					v_root = arg;
				}

				break;

			default :

/**/			if( CHECK )
/**/			{
/**/				throw new Error( );
/**/			}
		}
	}

	if( v_check === undefined )
	{
		v_check = false;
	}

	if( v_indent === undefined )
	{
		v_indent = 0;
	}

	if( v_inline === undefined )
	{
		v_inline = false;
	}

/**/if( CHECK )
/**/{
/**/	if( v_check === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_check !== undefined )
/**/	{
/**/		if( typeof( v_check ) !== 'boolean' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_indent === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_indent !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_indent ) !== 'number'
/**/			||
/**/			Math.floor( v_indent ) !== v_indent
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_inline === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_inline !== undefined )
/**/	{
/**/		if( typeof( v_inline ) !== 'boolean' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_root === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_root !== undefined )
/**/	{
/**/		if( typeof( v_root ) !== 'boolean' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if(
		inherit
		&&
		v_check === inherit.check
		&&
		v_indent === inherit.indent
		&&
		v_inline === inherit.inline
		&&
		v_root === inherit.root
	)
	{
		return inherit;
	}

	return new AbstractConstructor( v_check, v_indent, v_inline, v_root );
};


/*
| Creates a new context object.
*/
format_context.create =
AbstractConstructor.prototype.create =
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
		v_check,
		v_indent,
		v_inline,
		v_root;

	if( this !== format_context )
	{
		inherit = this;

		v_check = this.check;

		v_indent = this.indent;

		v_inline = this.inline;

		v_root = this.root;
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
			case 'check' :

				if( arg !== pass )
				{
					v_check = arg;
				}

				break;

			case 'indent' :

				if( arg !== pass )
				{
					v_indent = arg;
				}

				break;

			case 'inline' :

				if( arg !== pass )
				{
					v_inline = arg;
				}

				break;

			case 'root' :

				if( arg !== pass )
				{
					v_root = arg;
				}

				break;

			default :

/**/			if( CHECK )
/**/			{
/**/				throw new Error( );
/**/			}
		}
	}

	if( v_check === undefined )
	{
		v_check = false;
	}

	if( v_indent === undefined )
	{
		v_indent = 0;
	}

	if( v_inline === undefined )
	{
		v_inline = false;
	}

/**/if( CHECK )
/**/{
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
/**/	if( v_indent === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_indent === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		typeof( v_indent ) !== 'number'
/**/		||
/**/		Math.floor( v_indent ) !== v_indent
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_inline === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_inline === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_inline ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_root === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_root === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_root ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		v_check === inherit.check
		&&
		v_indent === inherit.indent
		&&
		v_inline === inherit.inline
		&&
		v_root === inherit.root
	)
	{
		return inherit;
	}

	return new Constructor( v_check, v_indent, v_inline, v_root );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'format_context:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'context:abstract';


/*
| Reflection.
*/
prototype.reflect = 'format_context';


/*
| Name Reflection.
*/
prototype.reflectName = 'context';


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

	if( obj.reflect !== 'format_context' )
	{
		return false;
	}

	return (
		this.check === obj.check
		&&
		this.indent === obj.indent
		&&
		this.inline === obj.inline
		&&
		this.root === obj.root
	);
};


}
)( );
