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
		v_type,
		v_value
	)
{
	this.type = v_type;

	this.value = v_value;

	if( FREEZE )
	{
		Object.freeze( this );
	}

/**/if( CHECK )
/**/{
/**/	this._check( );
/**/}
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

	let v_type;

	let v_value;

	if( this !== self )
	{
		inherit = this;

		v_type = this.type;

		v_value = this.value;
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
			case 'type' :

				if( arg !== pass )
				{
					v_type = arg;
				}

				break;

			case 'value' :

				if( arg !== pass )
				{
					v_value = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if( typeof( v_type ) !== 'string' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_value !== undefined
/**/		&&
/**/		(
/**/			typeof( v_value ) !== 'number'
/**/			||
/**/			Number.isNaN( v_value )
/**/		)
/**/		&&
/**/		typeof( v_value ) !== 'boolean'
/**/		&&
/**/		typeof( v_value ) !== 'string'
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if( inherit && v_type === inherit.type && v_value === inherit.value )
	{
		return inherit;
	}

	return new Constructor( v_type, v_value );
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

	return this.type === obj.type && this.value === obj.value;
};
