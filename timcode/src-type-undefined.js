'use strict';


/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor = function( ) { Object.freeze( this ); };


/*
| Prototype shortcut
*/
const prototype = Constructor.prototype;


self.prototype = prototype;


/*
| Singleton
*/
let _singleton;


tim_proto.lazyStaticValue( self, 'singleton', function( ) { return self._create( ); } );


/*
| Creates a new object.
*/
self._create =
prototype._create =
	function(
		// free strings
	)
{
	let inherit;

	if( this !== self )
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
prototype.timtype = self;


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

	if( obj.timtype !== self )
	{
		return false;
	}

	return true;
};
