/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	jion$ast_null;


if( NODE )
{
	jion$ast_null = module.exports;
}
else
{
	jion$ast_null = { };
}


var
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
if( NODE )
{
	require( '../proto' );
}


/*
| Constructor.
*/
var
	Constructor,
	prototype;


Constructor =
	function( )
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
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


jion$ast_null.prototype = prototype;


/*
| Singleton
*/
var
	_singleton;


/*
| Creates a new null object.
*/
jion$ast_null.create =
prototype.create =
	function(
		// free strings
	)
{
	var
		inherit;

	if( this !== jion$ast_null )
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
