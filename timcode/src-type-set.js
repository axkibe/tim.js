'use strict';


/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
const tt_boolean = require( './boolean' );


const tt_date = require( './date' );


const tt_function = require( './function' );


const tt_integer = require( './integer' );


const tt_null = require( './null' );


const tt_number = require( './number' );


const tt_protean = require( './protean' );


const tt_undefined = require( './undefined' );


const tt_string = require( './string' );


const tt_tim = require( './tim' );


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
/**/		if(
/**/			v.timtype !== tt_boolean
/**/			&&
/**/			v.timtype !== tt_date
/**/			&&
/**/			v.timtype !== tt_function
/**/			&&
/**/			v.timtype !== tt_integer
/**/			&&
/**/			v.timtype !== tt_null
/**/			&&
/**/			v.timtype !== tt_number
/**/			&&
/**/			v.timtype !== tt_protean
/**/			&&
/**/			v.timtype !== tt_undefined
/**/			&&
/**/			v.timtype !== tt_string
/**/			&&
/**/			v.timtype !== tt_tim
/**/		)
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
| Returns the one and only element or the set if size != 1.
*/
tim_proto.lazyValue( prototype, 'trivial', tim_proto.setTrivial );


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
		if( this.size !== obj.size )
		{
			return false;
		}

		const it = this.iterator( );

		for(
			let i = it.next( );
			!i.done;
			i = it.next( )
		)
		{
			const v = i.value;

			if( !obj.has( v ) )
			{
				return false;
			}
		}
	}

	return true;
};
