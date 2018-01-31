/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/


/*
| Capsule
*/
(
function( ) {
'use strict';


/*
| The typed immutable.
*/
let ast_null = NODE ? module.exports : module;


let tim_proto = tim.proto;


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


ast_null.prototype = prototype;


/*
| Singleton
*/
var
	_singleton;


/*
| Creates a new null object.
*/
ast_null.create =
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
| Reflection.
*/
prototype.reflect = 'ast_null';


/*
| Type reflection.
*/
prototype.timtype = ast_null;


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

	if( obj.reflect !== 'ast_null' )
	{
		return false;
	}

	return true;
};


}
)( );
