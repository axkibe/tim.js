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
let type_any = NODE ? module.exports : module;


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


type_any.prototype = prototype;


/*
| Singleton
*/
let _singleton;


/*
| Creates a new any object.
*/
type_any.create =
prototype.create =
	function(
		// free strings
	)
{
	let inherit;

	if( this !== type_any )
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
prototype.timtype = type_any;


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

	if( obj.timtype !== type_any )
	{
		return false;
	}

	return true;
};


}
)( );
