'use strict';


/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/


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
