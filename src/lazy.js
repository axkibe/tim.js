/*
| Lazy evaluation.
*/


var
	jion_lazy;


/*
| Capsule
*/
( function( ) {
'use strict';


jion_lazy = NODE ? module.exports : { };


var
	innumerable;

/*
| Sets a not enumerable value.
*/
innumerable =
jion_lazy.innumerable =
	function(
		obj,
		key,
		value
	)
{
	Object.defineProperty(
		obj,
		key,
		{
			value : value,
			writable : false
		}
	);

	return value;
};



/*
| A value is computed and fixated only when needed.
*/
jion_lazy.lazyValue =
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

					return innumerable( this, ckey, getter.call( this ) );
				}
			}
		}
	);
};


/*
| Tests if the object has a lazy value set.
*/
jion_lazy.hasLazyValueSet =
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
jion_lazy.aheadValue =
	function(
		obj,   // object to ahead the lazy value for
		key,   // key to ahead
		value  // value to ahead
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

		return innumerable( obj, ckey, value );
	}
};


/*
| A value is computed and fixated only when needed.
*/
jion_lazy.lazyFunctionString =
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
				jion_lazy.innumerable(
					this,
					ckey,
					getter.call( this, str )
				)
			);
		}
	};
};


} )( );
