/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
'use strict';


const tt_call = require( './call' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_call
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.call = v_call;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
const prototype = Constructor.prototype;


self.prototype = prototype;


/*
| Creates a new object.
*/
self.create =
prototype.create =
	function(
		// free strings
	)
{
	let inherit;

	let v_call;

	if( this !== self )
	{
		inherit = this;

		v_call = this.call;
	}

	for(
		let a = 0, al = arguments.length;
		a < al;
		a += 2
	)
	{
		let arg = arguments[ a + 1 ];

		switch( arguments[ a ] )
		{
			case 'call' :

				if( arg !== pass )
				{
					v_call = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_call === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_call === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_call.timtype !== tt_call )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if( inherit && ( v_call === inherit.call || v_call.equals( inherit.call ) ) )
	{
		return inherit;
	}

	return new Constructor( v_call );
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

	return this.call === obj.call || this.call.equals( obj.call );
};
