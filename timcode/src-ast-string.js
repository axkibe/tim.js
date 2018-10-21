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
		v_string
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.string = v_string;

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

	let v_string;

	if( this !== self )
	{
		inherit = this;

		v_string = this.string;
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
			case 'string' :

				if( arg !== pass )
				{
					v_string = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if( typeof( v_string ) !== 'string' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if( inherit && v_string === inherit.string )
	{
		return inherit;
	}

	return new Constructor( v_string );
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

	return this.string === obj.string;
};
