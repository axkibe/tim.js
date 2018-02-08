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
let type_string = NODE ? module.exports : module;


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
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
const prototype = Constructor.prototype;


type_string.prototype = prototype;


/*
| Singleton
*/
let _singleton;


/*
| Creates a new string object.
*/
type_string.create =
prototype.create =
	function(
		// free strings
	)
{
	let inherit;

	if( this !== type_string )
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
| Type reflection.
*/
prototype.timtype = type_string;


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

	if( obj.timtype !== type_string )
	{
		return false;
	}

	return true;
};


}
)( );
