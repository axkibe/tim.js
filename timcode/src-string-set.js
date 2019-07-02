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
const Constructor =
	function(
		set // set
	)
{
	this.__lazy = { };

	this._set = set;

	Object.freeze( this, set );
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

	let set;

	let setDup;

	if( this !== self )
	{
		inherit = this;

		set = inherit._set;

		setDup = false;
	}
	else
	{
		set = new Set( );

		setDup = true;
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
			case 'set:add' :

				if( !setDup )
				{
					set = new Set( set );

					setDup = true;
				}

				set.add( arg, arguments[ a + 1 ] );

				break;

			case 'set:init' :

/**/			if( CHECK )
/**/			{
/**/				if( !( arg instanceof Set ) )
/**/				{
/**/					throw new Error( );
/**/				}
/**/			}

				set = arg;

				setDup = true;

				break;

			case 'set:remove' :

				if( !setDup )
				{
					set = new Set( set );

					setDup = true;
				}

				set.delete( arg );

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	for( let v of set )
/**/	{
/**/		if( typeof( v ) !== 'string' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if( inherit && setDup === false )
	{
		return inherit;
	}

	return new Constructor( set );
};


/*
| Creates a new object from json.
*/
self.createFromJSON =
	function(
		json // the json object
	)
{
	let jset;

	let set;

	for( let name in json )
	{
		const arg = json[ name ];

		switch( name )
		{
			case 'type' :

				if( arg !== 'string-set' )
				{
					throw new Error( );
				}

				break;

			case 'set' :

				jset = arg;

				break;
		}
	}

	if( !jset )
	{
		throw new Error( );
	}

	set = new Set( jset );

	for( let v of set )
	{
		if( typeof( v ) !== 'string' )
		{
			throw new Error( );
		}
	}

	return new Constructor( set );
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
| Returns the set with one element added.
*/
prototype.add = tim_proto.setAdd;


/*
| Returns the set with another set added.
*/
prototype.addSet = tim_proto.setAddSet;


/*
| Returns a clone primitive.
*/
prototype.clone = function( ) { return new Set( this._set ); };


/*
| Returns true if the set has an element.
*/
prototype.has = tim_proto.setHas;


/*
| Returns the set with one element removed.
*/
prototype.remove = tim_proto.setRemove;


/*
| Returns the size of the set.
*/
tim_proto.lazyValue( prototype, 'size', tim_proto.setSize );


/*
| Returns the one and only element or the set if size != 1.
*/
tim_proto.lazyValue( prototype, 'trivial', tim_proto.setTrivial );


/*
| Forwards the iterator.
*/
prototype[ Symbol.iterator ] = function( ) { return this._set[ Symbol.iterator ]( ); };


/*
| Converts into json.
*/
tim_proto.lazyValue(
	prototype,
	'_asJSON',
	function( )
{
	const json =
		{
			type :
				'string-set',
			set :
				Array.from(
					this._set
				)
		};

	return Object.freeze( json );
}
);


/*
| Adapter for JSON.stringify
*/
prototype.toJSON = function( ) { return this._asJSON; };


/*
| Tests equality of object.
| Tests equality of json representation.
*/
prototype.equals =
prototype.equalsJSON =
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

	if( this._set !== obj._set )
	{
		if( this.size !== obj.size )
		{
			return false;
		}

		for( let v of this )
		{
			if( !obj.has( v ) )
			{
				return false;
			}
		}
	}

	return true;
};
