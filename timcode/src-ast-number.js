/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
'use strict';


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_number
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.number = v_number;

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

	let v_number;

	if( this !== self )
	{
		inherit = this;

		v_number = this.number;
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
			case 'number' :

				if( arg !== pass )
				{
					v_number = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if( typeof( v_number ) !== 'number' || Number.isNaN( v_number ) )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if( inherit && v_number === inherit.number )
	{
		return inherit;
	}

	return new Constructor( v_number );
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

	return this.number === obj.number;
};
