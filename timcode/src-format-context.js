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
	format_context;


if( !format_context )
{
	format_context = { };
}


if( !NODE )
{
/**/if( CHECK )
/**/{
/**/	if( timModules.format_context !== undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	timModules.format_context = format_context;
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


format_context.prototype = prototype;


/*
| Singleton
*/
var
	_singleton;


/*
| Creates a new context object.
*/
format_context.create =
prototype.create =
	function(
		// free strings
	)
{
	var
		inherit;

	if( this !== format_context )
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
prototype.reflect = 'format_context';


/*
| Name Reflection.
*/
prototype.reflectName = 'context';


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

	if( obj.reflect !== 'format_context' )
	{
		return false;
	}

	return true;
};


}
)( );
