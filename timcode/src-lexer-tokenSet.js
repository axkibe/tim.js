/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
'use strict';


const tt_token = require( './token' );


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

	if( FREEZE )
	{
		Object.freeze( this, set );
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
/**/	const it = set.keys( );
/**/
/**/	for(
/**/		let i = it.next( );
/**/		!i.done;
/**/		i = it.next( )
/**/	)
/**/	{
/**/		const v = i.value;
/**/
/**/		if( v.timtype !== tt_token )
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
| Returns true if the set has an element.
*/
prototype.has = tim_proto.setHas;


/*
| Returns an iterator for the set.
*/
prototype.iterator = tim_proto.setIterator;


/*
| Returns the set with one element removed.
*/
prototype.remove = tim_proto.setRemove;


/*
| Returns the size of the set.
*/
tim_proto.lazyValue( prototype, 'size', tim_proto.setSize );


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

	if( this._set !== obj._set )
	{
		const ait = this._list.iterator( );

		const bit = obj._list.iterator( );

		let an = ait.next( );

		let bn = bit.next( );

		while(
			!an.done && !bn.done
			)
		{
			if( an.value !== bn.value )
			{
				return false;
			}

			an = ait.next( );

			bn = bit.next( );
		}

		if( !an.done || !bn.done )
		{
			return false;
		}
	}

	return true;
};