/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
var
	tim_proto,
	timModules;


/*
| The typed immutable.
*/
var
	ast_continue;


if( !ast_continue )
{
	ast_continue = { };
}


if( !NODE )
{
/**/if( CHECK )
/**/{
/**/	if( timModules.ast_continue !== undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	timModules.ast_continue = ast_continue;
}


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
	tim_proto = tim.proto;
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


ast_continue.prototype = prototype;


/*
| Singleton
*/
var
	_singleton;


/*
| Creates a new continue object.
*/
ast_continue.create =
prototype.create =
	function(
		// free strings
	)
{
	var
		inherit;

	if( this !== ast_continue )
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
prototype.reflect = 'ast_continue';


/*
| Type reflection.
*/
prototype.timtype = ast_continue;


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

	if( obj.reflect !== 'ast_continue' )
	{
		return false;
	}

	return true;
};


}
)( );
