/*
| This is an auto generated file.
|
| DO NOT EDIT!
*/


/*
| Export.
*/
var
	ast_null;


if( SERVER )
{
	ast_null = module.exports;
}
else
{
	ast_null = { };
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
	function( )
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
	}

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


ast_null.prototype = prototype;


/*
| Singleton
*/
var
	_singleton;


/*
| Creates an null object.
*/
ast_null.abstract =
AbstractConstructor.prototype.abstract =
prototype.abstract =
	function(
		// free strings
	)
{
	var
		inherit;

	if( this !== ast_null )
	{
		inherit = this;
	}

	if( inherit )
	{
		return inherit;
	}

	if( !_singleton )
	{
		_singleton = new AbstractConstructor( );
	}

	return _singleton;
};


/*
| Creates a new null object.
*/
ast_null.create =
AbstractConstructor.prototype.create =
prototype.create =
	function(
		// free strings
	)
{
	var
		inherit;

	if( this !== ast_null )
	{
		inherit = this;
	}

	if( inherit )
	{
		return inherit;
	}

	if( !_singleton )
	{
		_singleton = new Constructor( );
	}

	return _singleton;
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'ast_null:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'null:abstract';


/*
| Reflection.
*/
prototype.reflect = 'ast_null';


/*
| Name Reflection.
*/
prototype.reflectName = 'null';


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

	if( obj.reflect !== 'ast_null' )
	{
		return false;
	}

	return true;
};


}
)( );
