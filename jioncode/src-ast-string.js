/*
| This is an auto generated file.
|
| DO NOT EDIT!
*/


/*
| Export.
*/
var
	ast_string;


if( SERVER )
{
	ast_string = module.exports;
}
else
{
	ast_string = { };
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
		v_string // the literal
	)
{
	if( v_string !== undefined )
	{
		this.string = v_string;
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
		v_string // the literal
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
	}

	this.string = v_string;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


ast_string.prototype = prototype;


/*
| Creates an string object.
*/
ast_string.abstract =
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
		v_string;

	if( this !== ast_string )
	{
		inherit = this;

		v_string = this.string;
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
			case 'string' :

				if( arg !== pass )
				{
					v_string = arg;
				}

				break;

			default :

/**/			if( CHECK )
/**/			{
/**/				throw new Error( );
/**/			}
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_string === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_string !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_string ) !== 'string'
/**/			&&
/**/			!( v_string instanceof String )
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if( inherit && v_string === inherit.string )
	{
		return inherit;
	}

	return new AbstractConstructor( v_string );
};


/*
| Creates a new string object.
*/
ast_string.create =
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
		v_string;

	if( this !== ast_string )
	{
		inherit = this;

		v_string = this.string;
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
			case 'string' :

				if( arg !== pass )
				{
					v_string = arg;
				}

				break;

			default :

/**/			if( CHECK )
/**/			{
/**/				throw new Error( );
/**/			}
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_string === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_string === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		typeof( v_string ) !== 'string'
/**/		&&
/**/		!( v_string instanceof String )
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if( inherit && v_string === inherit.string )
	{
		return inherit;
	}

	return new Constructor( v_string );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'ast_string:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'string:abstract';


/*
| Reflection.
*/
prototype.reflect = 'ast_string';


/*
| Name Reflection.
*/
prototype.reflectName = 'string';


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

	if( obj.reflect !== 'ast_string' )
	{
		return false;
	}

	return this.string === obj.string;
};


}
)( );
