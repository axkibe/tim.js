/*
| Common Javascript Tools for ideoloom.
|
| FIXME remove
*/


var
	jools;


/*
| Capsule
*/
( function( ) {
'use strict';


jools = NODE ? module.exports : { };


/*
| Largest integer value.
*/
jools.MAX_INTEGER = 9007199254740992;


/*
| Returns true if o is an integer number
*/
jools.isInteger =
	function( o )
{
	return(
		typeof( o ) === 'number'
		&&
		Math.floor( o ) === o
	);
};


/*
| Returns true if o is a String
*/
jools.isString  =
	function( o )
{
	return(
		typeof( o ) === 'string'
		||
		( o instanceof String )
	);
};


/*
| Limits value to be between min and max
*/
jools.limit =
	function(
		min,
		val,
		max
	)
{
/**/if( CHECK )
/**/{
/**/	if( min > max )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if( val < min )
	{
		return min;
	}

	if( val > max )
	{
		return max;
	}

	return val;
};


/*
| Returns an unique identifier.
*/
jools.uid =
	function( )
{
	var
		mime,
		ua,
		r32;

	mime = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	ua = [ ];

	for(
		var a = 0;
		a < 3;
		a++
	)
	{
		r32 = Math.floor( 0x100000000 * Math.random( ) );

		for( var b = 0; b < 6; b++ )
		{
			ua.push( mime[ r32 & 0x3F ] );

			r32 = r32 >>> 6;
		}
	}

	return ua.join( '' );
};


/*
| Throws an error if any argument is not an integer.
*/
jools.ensureInt =
	function(
		// integers
	)
{
	for( var a in arguments )
	{
		var arg = arguments[ a ];

		if( Math.floor( arg ) - arg !== 0 )
		{
			throw new Error( );
		}
	}
};


/*
| Sets an not enumerable value
|
| if writable is undefined, defaults to false
*/
jools.innumerable =
	function(
		obj,
		key,
		value,
		writable
	)
{
	Object.defineProperty(
		obj,
		key,
		{
			value : value,
			writable : typeof( writable ) === 'undefined' ? false : writable
		}
	);

	return value;
};


/*
| A value is computed and fixated only when needed.
*/
jools.lazyValue =
	function(
		proto,
		key,
		getter
	)
{

/**/if( FREEZE )
/**/{
/**/	proto.__have_lazy = true;
/**/}

/**/if( CHECK )
/**/{
/**/	// lazy valued stuff must be jions
/**/
/**/	if( !proto.create )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	Object.defineProperty(
		proto,
		key,
		{
			// this clever overriding does not work in IE9 :-(
			// or Android 2.2 Browser
			// get : function() { return fixate(this, key, getter.call(this)); },
			get : function( )
			{
				var
					ckey;

/**/			if( FREEZE )
/**/			{
/**/				if( this.__lazy[ key ] !== undefined )
/**/				{
/**/					return this.__lazy[ key ];
/**/				}
/**/
/**/				return(
/**/					this.__lazy[ key ] = getter.call( this )
/**/				);
/**/			}
/**/			else
				{
					ckey = '__lazy_' + key;

					if( this[ ckey ] !== undefined )
					{
						return this[ ckey ];
					}

					return(
						jools.innumerable(
							this,
							ckey,
							getter.call( this )
						)
					);
				}
			}
		}
	);
};


/*
| Tests if the object has a lazy value set.
*/
jools.hasLazyValueSet =
	function(
		obj,
		key
	)
{
	var
		ckey;

/**/if( FREEZE )
/**/{
/**/	return obj.__lazy[ key ] !== undefined;
/**/}
/**/else
	{
		ckey = '__lazy_' + key;

		return obj[ ckey ] !== undefined;
	}
};


/*
| A lazy value is computed and fixated before it is needed.
*/
jools.aheadValue =
	function(
		obj,
		key,
		value
	)
{
	var
		ckey;

/**/if( CHECK )
/**/{
/**/	if( value === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

/**/if( FREEZE )
/**/{
/**/	if( obj.__lazy[ key ] !== undefined )
/**/	{
/**/		return value;
/**/	}
/**/
/**/	return(
/**/		obj.__lazy[ key ] = value
/**/	);
/**/}
/**/else
	{
		ckey = '__lazy_' + key;

		if( obj[ ckey ] !== undefined )
		{
			return value;
		}

		return jools.innumerable( obj, ckey, value );
	}
};


/*
| A value is computed and fixated only when needed.
*/
jools.lazyFunctionString =
	function(
		proto,
		key,
		getter
	)
{
/**/if( FREEZE )
/**/{
/**/	proto.__have_lazy = true;
/**/}

	proto[ key ] =
		function( str )
	{
		var
			ckey;

/**/	if( FREEZE )
/**/	{
/**/		ckey = key + '__' + str;
/**/
/**/		if( this.__lazy[ ckey ] !== undefined )
/**/		{
/**/			return this.__lazy[ ckey ];
/**/		}
/**/
/**/		return(
/**/			this.__lazy[ ckey ] = getter.call( this, str )
/**/		);
/**/	}
/**/	else
		{
			ckey = '__lazy_' + key + '__' + str;

			if( this[ ckey ] !== undefined )
			{
				return this[ ckey ];
			}

			return(
				jools.innumerable(
					this,
					ckey,
					getter.call( this, str )
				)
			);
		}
	};
};


/*
| Copies one object (not deep!)
*/
jools.copy =
	function(
		o  // the object to copy from
	)
{
	var
		c;

	c = { };

	for( var k in o )
	{
		if( !Object.hasOwnProperty.call( o, k ) )
		{
			continue;
		}

		c[ k ] = o[ k ];
	}

	return c;
};


/*
| Returns true if a node matches another node
*/
jools.matches =
	function(
		o1,
		o2
	)
{
	if( o1 === o2 )
	{
		return true;
	}

	if( !o1.equals || !o2.equals )
	{
		return false;
	}

	return o1.equals( o2 );
};


/*
| Makes a key not to be accessed.
|
| Used for developing during changes
*/
jools.keyNonGrata =
	function(
		obj,
		key
	)
{
	Object.defineProperty(
		obj,
		key,
		{
			get : function( ) { throw new Error( ); },
			set : function( ) { throw new Error( ); }
		}
	);
};


} )( );
