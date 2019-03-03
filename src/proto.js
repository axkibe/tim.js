/*
| Common functions for typed immutables.
*/
'use strict';


if( NODE )
{
	tim.proto = module.exports;
}
else
{
	tim.proto = { };
}


let proto = tim.proto;


/*
| A value is computed and fixated only when needed.
*/
proto.lazyValue =
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

	Object.defineProperty(
		proto,
		key,
		{
			get : function( )
			{
				let val = this.__lazy[ key ];

				if( val !== undefined ) return val;

				val = Object.freeze( getter.call( this ) );

				return( this.__lazy[ key ] = val );
			}
		}
	);
};


/*
| A function taking a string and no side effects.
|
| Computed values are cached.
*/
proto.lazyFunctionString =
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
proto.lazyFunctionInteger =
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
| A value is computed and fixated only when needed
| but not from a tim but a static object.
*/
proto.lazyStaticValue =
	function(
		obj,
		key,
		getter
	)
{
	if( !obj.__lazy ) obj.__lazy = { };

	Object.defineProperty(
		obj,
		key,
		{
			get : function( )
			{
				let val = this.__lazy[ key ];

				if( val !== undefined ) return val;

				val = Object.freeze( getter.call( this ) );

				return( this.__lazy[ key ] = val );
			}
		}
	);
};



/*
| Returns true if 'obj' is an empty object.
*/
proto.isEmpty =
	function( obj )
{
	let dummy;

	for( dummy in obj ) return false;

	return true;
};


/*
| Sets a key of a sub node described by a path.
*/
proto.setPath =
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
				this.get( key ).setPath( path, value, pos + 2 )
			)
		);
	}

	if( pos + 1 === pl ) return this.create( key, value );

	return this.create( key, this[ key ].setPath( path, value, pos + 1 ) );
};


/*
| Gets a key of a sub node described by a path.
*/
proto.getPath =
	function(
		path,  // path to get
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

		const tk = this.get( key );

		if( pos + 2 === pl || tk === undefined ) return tk;

		return tk.getPath( path, pos + 2 );
	}

	const attr = this[ key ];

	if( pos + 1 === pl ) return attr;

	return attr.getPath( path, pos + 1 );
};


/*
| Returns the group with another group added,
| overwriting collisions.
*/
proto.groupAddGroup =
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
proto.groupGet =
	function(
		key
	)
{
	return this._group[ key ];
};


/*
| Returns the group keys.
*/
proto.groupKeys =
	function( )
{
	return Object.freeze( Object.keys( this._group ) );
};


/*
| Returns the sorted group key.
*/
proto.groupSortedKeys =
	function( )
{
	return Object.freeze( this.keys.slice( ).sort( ) );
};


/*
| Returns the group with one element removed.
*/
proto.groupRemove =
	function(
		key
	)
{
	return this.create( 'group:remove', key );
};


/*
| Returns the group with one element set.
*/
proto.groupSet =
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
proto.groupSize =
	function( )
{
	return this.keys.length;
};


/*
| Returns the list with an element appended.
*/
proto.listAppend =
	function(
		e
	)
{
	return this.create( 'list:append', e );
};


/*
| Returns the list with another list appended.
*/
proto.listAppendList =
	function(
		list
	)
{
	return this.create( 'list:init', this._list.concat( list._list ) );
};


/*
| Returns the length of the list.
*/
proto.listLength =
	function( )
{
	return this._list.length;
};


/*
| Returns one element of the list.
*/
proto.listGet =
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
proto.listSlice =
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
proto.listInsert =
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
proto.listRemove =
	function(
		idx
	)
{
	return this.create( 'list:remove', idx );
};


/*
| Returns the list with one element set.
*/
proto.listSet =
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
proto.setAdd =
	function( e )
{
	return this.create( 'set:add', e );
};


/*
| Returns the set with another set added.
*/
proto.setAddSet =
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
proto.setHas =
	function( e )
{
	return this._set.has( e );
};


/*
| Returns an iterator for the set.
*/
proto.setIterator =
	function( )
{
	return this._set.keys( );
};


/*
| Returns the set with one element removed.
*/
proto.setRemove =
	function( e )
{
	return this.create( 'set:remove', e );
};


/*
| Returns the set with one element added.
*/
proto.setAdd =
	function( e )
{
	return this.create( 'set:add', e );
};


/*
| Returns the size of the group.
*/
proto.setSize =
	function( )
{
	return this._set.size;
};


/*
| Returns the one and only element or the set if size != 1.
*/
proto.setTrivial =
	function( )
{
	if( this.size !== 1 ) return this;

	return this._set.keys( ).next( ).value;
};


/*
| Returns the element at rank.
*/
proto.twigAtRank =
	function(
		rank
	)
{
	return this.get( this._ranks[ rank ] );
};



/*
| Returns the element by key.
*/
proto.twigGet =
	function(
		key
	)
{
	return this._twig[ key ];
};


/*
| If this tim twig is in adjustment mode, returns the element by key
| going through the adjust.get functin.
*/
proto.twigAdjustGet =
	function(
		key
	)
{
	const tval = this._ttwig[ key ];

	if( tval !== undefined ) return tval;

	return( this._ttwig[ key ] = this[ '__adjust' + '_get' ]( key, this._twig[ key ] ) );
};


/*
| Returns the key at a rank.
*/
proto.twigGetKey =
	function(
		idx
	)
{
	return this._ranks[ idx ];
};


/*
| Returns the length of the twig.
*/
proto.twigLength =
	function( )
{
	return this._ranks.length;
};


/*
| Returns the rank of the key.
|
| This means it returns the index of key in the ranks array.
*/
proto.twigRankOf =
	function(
		key
	)
{

/**/if( CHECK )
/**/{
/**/	if( typeof( key ) !== 'string' ) throw new Error( );
/**/}

	return this._ranks.indexOf( key );
};


/*
| Returns the twig with the element at key set.
*/
proto.twigSet =
	function(
		key,
		entry
	)
{
	return this.create( 'twig:set', key, entry );
};
