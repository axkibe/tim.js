/*
| This is an auto generated file.
|
| DO NOT EDIT!
*/


/*
| Export.
*/
var
	jion_generator;


if( SERVER )
{
	jion_generator = module.exports;
}
else
{
	jion_generator = { };
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
	function( )
{
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
		v_jion // the jion definition
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
	}

	this._init( v_jion );

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


jion_generator.prototype = prototype;


/*
| Creates an generator object.
*/
jion_generator.abstract =
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
		v_jion;

	if( this !== jion_generator )
	{
		inherit = this;
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
			case 'jion' :

				if( arg !== pass )
				{
					v_jion = arg;
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
/**/	if( v_jion === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if( inherit && v_jion === undefined )
	{
		return inherit;
	}

	return new AbstractConstructor( );
};


/*
| Creates a new generator object.
*/
jion_generator.create =
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
		v_jion;

	if( this !== jion_generator )
	{
		inherit = this;
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
			case 'jion' :

				if( arg !== pass )
				{
					v_jion = arg;
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
/**/	if( v_jion === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_jion === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if( inherit && v_jion === undefined )
	{
		return inherit;
	}

	return new Constructor( v_jion );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'jion_generator:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'generator:abstract';


/*
| Reflection.
*/
prototype.reflect = 'jion_generator';


/*
| Name Reflection.
*/
prototype.reflectName = 'generator';


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

	if( obj.reflect !== 'jion_generator' )
	{
		return false;
	}

	return true;
};


}
)( );
