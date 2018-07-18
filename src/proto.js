/*
| Common functions for typed immutables.
*/

var
	tim_proto,
	pass;


/*
| Capsule.
*/
(function( ) {
'use strict';


if( NODE )
{
	tim_proto = module.exports;

	// global pass flag for creators
	pass = global.pass = tim_proto.pass = { };

	if( FREEZE ) Object.freeze( pass );

	// exports the own source for use in browsers
	// FIXME check if this needs to be here
	tim_proto.source = require( 'fs' ).readFileSync( module.filename );
}
else
{
	tim_proto = { };
}


/*
| A value is computed and fixated only when needed.
*/
tim_proto.lazyValue =
	function(
		proto,
		key,
		getter
	)
{
	proto.__have_lazy = true;

/**/if( CHECK )
/**/{
/**/	// lazy valued stuff must be tims
/**/	if( !proto.create ) throw new Error( );
/**/
/**/	// there is something amiss if static and tim obj
/**/	// lazyness is used together
/**/	if( proto.__lazy ) throw new Error( );
/**/}

	Object.defineProperty(
		proto,
		key,
		{
			get : function( )
			{
				let val = this.__lazy[ key ];

				if( val !== undefined ) return val;

				val = getter.call( this );

				if( FREEZE ) Object.freeze( val );

				return( this.__lazy[ key ] = val );
			}
		}
	);
};


/*
| Tests if the object has a lazy value set.
*/
tim_proto.hasLazyValueSet =
	function(
		obj,
		key
	)
{
	return obj.__lazy[ key ] !== undefined;
};


/*
| A lazy value is computed and fixated before it is needed.
*/
tim_proto.aheadValue =
	function(
		obj,   // object to ahead the lazy value for
		key,   // key to ahead
		value  // value to ahead
	)
{

/**/if( CHECK )
/**/{
/**/	if( value === undefined ) throw new Error( );
/**/}

	// FUTURE CHECK if value is already set.

	return( obj.__lazy[ key ] = value );
};


/*
| A function taking a string and no side effects.
|
| Computed values are cached.
*/
tim_proto.lazyFunctionString =
	function(
		proto,
		key,
		getter
	)
{
/**/if( CHECK )
/**/{
/**/	// lazy valued stuff must be tims
/**/	if( !proto.create ) throw new Error( );
/**/
/**/	// there is something amiss if static and tim
/**/	// lazyness is used together
/**/	if( proto.__lazy ) throw new Error( );
/**/}

	proto.__have_lazy = true;

	proto[ key ] =
		function( str )
	{
		const ckey = key + '__' + str;

		const val = this.__lazy[ ckey ];

		if( val !== undefined ) return val;

		return( this.__lazy[ ckey ] = getter.call( this, str ) );
	};
};


/*
| A function taking an integer and no side effects.
|
| Computed values are cached.
*/
tim_proto.lazyFunctionInteger =
	function(
		proto,
		key,
		getter
	)
{

/**/if( CHECK )
/**/{
/**/	// lazy valued stuff must be tims
/**/	if( !proto.create ) throw new Error( );
/**/
/**/	// there is something amiss if static and tim obj
/**/	// lazyness is used together
/**/	if( proto.__lazy ) throw new Error( );
/**/}

	proto.__have_lazy = true;

	proto[ key ] =
		function( integer )
	{
/**/	if( CHECK )
/**/	{
/**/		if(
/**/			typeof( integer ) !== 'number'
/**/			|| Math.floor( integer ) !== integer
/**/		) throw new Error( );
/**/	}

		let cArr = this.__lazy[ key ];

		if( !cArr ) cArr = this.__lazy[ key ] = [ ];

		const val = cArr[ integer ];

		if( val !== undefined ) return val;

		return( cArr[ integer ] = getter.call( this, integer ) );
	};
};


/*
| A function taking an integer and no side effects
| is computed for a value and fixated before it is needed.
*/
tim_proto.aheadFunctionInteger =
	function(
		obj,      // object to ahead for
		key,      // property to ahead
		integer,  // function ( integer ) value to ahead
		value     // value ( result ) to ahead
	)
{
/**/if( CHECK )
/**/{
/**/	if( value === undefined ) throw new Error( );
/**/
/**/	if( integer === undefined ) throw new Error( );
/**/}

	let cArr = obj.__lazy[ key ];

	if( !cArr ) cArr = obj.__lazy[ key ] = [ ];

	return( cArr[ integer ] = value );
};


/*
| A value is computed and fixated only when needed
| but not from a tim but a static object.
*/
tim_proto.lazyStaticValue =
	function(
		obj,
		key,
		getter
	)
{
/**/if( CHECK )
/**/{
/**/	// there is something amiss if static and tim obj
/**/	// lazyness is used together
/**/	if( obj.__have_lazy ) throw new Error( );
/**/}

	if( !obj.__lazy ) obj.__lazy = { };

	Object.defineProperty(
		obj,
		key,
		{
			get : function( )
			{
				if( this.__lazy[ key ] !== undefined )
				{
					return this.__lazy[ key ];
				}

				return(
					this.__lazy[ key ] = getter.call( this )
				);
			}
		}
	);
};



/*
| Copies one object (not deep!)
|
| Also doesn't do hasOwnProperty checking since that one
| is only to be used on vanilla objects.
*/
tim_proto.copy =
	function(
		o  // the object to copy from
	)
{
	const c = { };

	for( let k in o ) c[ k ] = o[ k ];

	return c;
};

/*
| Sets a key of a sub node described by a path.
*/
tim_proto.setPath =
	function(
		path,  // path to set
		value, // value to set to
		pos    // position in the path
	)
{
	if( pos === undefined ) pos = 0;

/**/if( CHECK )
/**/{
/**/	if( typeof( pos ) !== 'number' ) throw new Error( );
/**/
/**/	if( path.length === pos ) throw new Error( );
/**/}

	const pl = path.length;

	let key = path.get( pos );

	if( key === 'twig' )
	{
		if( pos + 1 === pl ) throw new Error( );

		key = path.get( pos + 1 );

		if( pos + 2 === pl ) return this.create( 'twig:set', key, value );

		return(
			this.create(
				'twig:set',
				key,
				this._twig[ key ].setPath( path, value, pos + 2 )
			)
		);
	}

	if( pos + 1 === pl ) return this.create( key, value );

	return this.create( key, this[ key ].setPath( path, value, pos + 1 ) );
};


/*
| Gets a key of a sub node described by a path.
*/
tim_proto.getPath =
	function(
		path,  // path to set
		pos    // position in the path
	)
{
	if( pos === undefined ) pos = 0;

	if( path.length === pos ) return this;

	const pl = path.length;

	let key = path.get( pos );

	if( key === 'twig' )
	{
		if( pos + 1 === pl ) throw new Error( );

		key = path.get( pos + 1 );

		const tk = this._twig[ key ];

		if( pos + 2 === pl || tk === undefined ) return tk;

		return tk.getPath( path, pos + 2 );
	}

	if( pos + 1 === pl ) return this[ key ];

	return this[ key ].getPath( path, pos + 1 );
};


/*
| Returns the group with another group added,
| overwriting collisions.
*/
tim_proto.groupAddGroup =
	function(
		group
	)
{
/**/if( CHECK )
/**/{
/**/	if( this.timtype !== group.timtype ) throw new Error( );
/**/}

	const g = { };

	for( let k in this._group )
	{
		g[ k ] = this._group[ k ];
	}

	for( let k in group._group )
	{
		g[ k ] = group._group[ k ];
	}

	return this.create( 'group:init', g );
};


/*
| Gets one entry from the group.
*/
tim_proto.groupGet =
	function(
		key
	)
{
	return this._group[ key ];
};


/*
| Returns the group keys.
*/
tim_proto.groupKeys =
	function( )
{
	const keys = Object.keys( this._group );

	if( FREEZE ) Object.freeze( keys );

	return keys;
};


/*
| Returns the sorted group key.
*/
tim_proto.groupSortedKeys =
	function( )
{
	const keys = this.keys.slice( ).sort( );

	if( FREEZE ) Object.freeze( keys );

	return keys;
};


/*
| Returns the group with one element removed.
*/
tim_proto.groupRemove =
	function(
		key
	)
{
	return this.create( 'group:remove', key );
};


/*
| Returns the group with one element set.
*/
tim_proto.groupSet =
	function(
		key,
		e
	)
{
	return this.create( 'group:set', key, e );
};


/*
| Returns the size of the group.
*/
tim_proto.groupSize =
	function( )
{
	return this.keys.length;
};


/*
| Returns the list with an element appended.
*/
tim_proto.listAppend =
	function(
		e
	)
{
	return this.create( 'list:append', e );
};


/*
| Returns the list with another list appended.
*/
tim_proto.listAppendList =
	function(
		list
	)
{
	return this.create( 'list:init', this._list.concat( list._list ) );
};


/*
| Returns the length of the list.
*/
tim_proto.listLength =
	function( )
{
	return this._list.length;
};


/*
| Returns one element of the list.
*/
tim_proto.listGet =
	function(
		idx
	)
{
	if( idx < 0 ) idx += this.length;

/**/if( CHECK )
/**/{
/**/	if( idx < 0 || idx >= this.length )	throw new Error( );
/**/}

	return this._list[ idx ];
};


/*
| Returns a slice of the list.
*/
tim_proto.listSlice =
	function(
		from,
		to
	)
{
	if( from < 0 ) from += this.length;

	if( to === undefined ) to = this.length;
	else if( to < 0 ) to += this.length;

/**/if( CHECK )
/**/{
/**/	if( from < 0 || from > this.length )	throw new Error( );
/**/
/**/	if( to < 0 || to > this.length ) throw new Error( );
/**/
/**/	if( to < from ) throw new Error( );
/**/}

	return this.create( 'list:init', this._list.slice( from, to ) );
};


/*
| Returns the list with one element inserted.
*/
tim_proto.listInsert =
	function(
		idx,
		e
	)
{
	return this.create( 'list:insert', idx, e );
};


/*
| Returns the list with one element removed.
*/
tim_proto.listRemove =
	function(
		idx
	)
{
	return this.create( 'list:remove', idx );
};


/*
| Returns the list with one element set.
*/
tim_proto.listSet =
	function(
		idx,
		e
	)
{
	if( idx < 0 ) idx += this.length;

/**/if( CHECK )
/**/{
/**/	if( idx < 0 || idx >= this.length ) throw new Error( );
/**/}

	return this.create( 'list:set', idx, e );
};


/*
| Returns the set with one element added.
*/
tim_proto.setAdd =
	function( e )
{
	return this.create( 'set:add', e );
};


/*
| Returns the set with another set added.
*/
tim_proto.setAddSet =
	function( set )
{
	let s = new Set( this._set );

	let it = set._set.keys( );

	for( let i = it.next( ); !i.done; i = it.next( ) )
	{
		s.add( i.value );
	}

	return this.create( 'set:init', s );
};


/*
| Returns true if the set has an element.
*/
tim_proto.setHas =
	function( e )
{
	return this._set.has( e );
};


/*
| Returns an iterator for the set.
*/
tim_proto.setIterator =
	function( )
{
	return this._set.keys( );
};


/*
| Returns the set with one element removed.
*/
tim_proto.setRemove =
	function( e )
{
	return this.create( 'set:remove', e );
};


/*
| Returns the set with one element added.
*/
tim_proto.setAdd =
	function( e )
{
	return this.create( 'set:add', e );
};


/*
| Returns the size of the group.
*/
tim_proto.setSize =
	function( )
{
	return this._set.size;
};


/*
| Returns the element at rank.
*/
tim_proto.twigAtRank =
	function(
		rank
	)
{
	return this._twig[ this._ranks[ rank ] ];
};



/*
| Returns the element by key.
*/
tim_proto.twigGet =
	function(
		key
	)
{
	return this._twig[ key ];
};


/*
| Returns the key at a rank.
*/
tim_proto.twigGetKey =
	function(
		idx
	)
{
	return this._ranks[ idx ];
};


/*
| Returns the length of the twig.
*/
tim_proto.twigLength =
	function( )
{
	return this._ranks.length;
};


/*
| Returns the rank of the key.
|
| This means it returns the index of key in the ranks array.
*/
tim_proto.twigRankOf =
	function(
		key
	)
{

/**/if( CHECK )
/**/{
/**/	if( typeof( key ) !== 'string' ) throw new Error( );
/**/}

	return(
		this._twig[ key ] !== undefined
		? this._ranks.indexOf( key )
		: -1
	);
};


/*
| Returns the twig with the element at key set.
*/
tim_proto.twigSet =
	function(
		key,
		entry
	)
{
	return this.create( 'twig:set', key, entry );
};


} )( );
