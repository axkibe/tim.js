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
| A function taking a key and no side effects.
|
| Computed values are cached.
*/
proto.lazyFunction =
	function(
		proto,
		name,
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

	proto[ name ] =
		function(
			key
		)
	{
		let c = this.__lazy[ name ];

		if( !c ) c = this.__lazy[ name ] = new Map( );

		let v = c.get( key );

		if( v !== undefined ) return v;

		v = getter.call( this, key );

		c.set( key, v );

		return v;
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
/**/}

	// special case, path is empty:
	// 'this' is going to be replaced by 'value'.
	if( path.length === 0 )
	{
		if( pos !== 0 ) throw new Error( );

		return value;
	}

/**/if( CHECK )
/**/{
/**/	if( path.length <= pos ) throw new Error( );
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

	for( let k in this._group ) g[ k ] = this._group[ k ];

	for( let k in group._group ) g[ k ] = group._group[ k ];

	return this.create( 'group:init', g );
};


/*
| If this group is in adjustment mode, returns the element by key
| going through the adjust.get function.
*/
proto.groupAdjustGet =
	function(
		key
	)
{
	const tval = this._agroup[ key ];

	if( tval !== undefined ) return tval;

	return( this._agroup[ key ] = this.__adjust_get( key, this._group[ key ] ) );
};


/*
| Gets one entry from the group.
*/
proto.groupGet = function( key ) { return this._group[ key ]; };


/*
| Returns the group keys.
*/
proto.groupKeys = function( ) { return Object.freeze( Object.keys( this._group ) ); };


/*
| Returns the sorted group key.
*/
proto.groupSortedKeys = function( ) { return Object.freeze( this.keys.slice( ).sort( ) ); };


/*
| Returns the group with one element removed.
*/
proto.groupRemove = function( key ) { return this.create( 'group:remove', key ); };


/*
| Returns the group with one element set.
*/
proto.groupSet = function( key, e ) { return this.create( 'group:set', key, e ); };


/*
| Returns the size of the group.
*/
proto.groupSize = function( ) { return this.keys.length; };


/*
| Returns the list with an element appended.
*/
proto.listAppend = function( e ) { return this.create( 'list:append', e ); };


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
| Returns last element of the list.
*/
proto.listFirst =
	function( )
{
/**/if( CHECK )
/**/{
/**/	if( this.length === 0 ) throw new Error( );
/**/}

	return this._list[ 0 ];
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
| Returns the length of the list.
*/
proto.listLength = function( ) { return this._list.length; };


/*
| Returns last element of the list.
*/
proto.listLast =
	function( )
{
/**/if( CHECK )
/**/{
/**/	if( this.length === 0 ) throw new Error( );
/**/}

	return this._list[ this.length - 1 ];
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
| Returns a list sorted by compare functions
*/
proto.listSort =
	function(
		compare  // function to compare it with.
	)
{
	const a = this._list.slice( ).sort( compare );

	return this.create( 'list:init', a );
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
proto.setHas = function( e ) { return this._set.has( e ); };


/*
/*
| Returns the set with one element removed.
*/
proto.setRemove = function( e ) { return this.create( 'set:remove', e ); };


/*
| Returns the set with one element added.
*/
proto.setAdd = function( e ) { return this.create( 'set:add', e ); };


/*
| Returns the size of the group.
*/
proto.setSize = function( ) { return this._set.size; };


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
proto.twigAtRank = function( rank ) { return this.get( this.keys[ rank ] ); };


/*
| If this tim twig is in adjustment mode, returns the element by key
| going through the adjust.get function.
*/
proto.twigAdjustGet =
	function(
		key
	)
{
	const tval = this._atwig[ key ];

	if( tval !== undefined ) return tval;

	return( this._atwig[ key ] = this.__adjust_get( key, this._twig[ key ] ) );
};


/*
| Returns the element by key.
*/
proto.twigGet = function( key ) { return this._twig[ key ]; };


/*
| Returns the key at a rank.
*/
proto.twigGetKey = function( idx ) { return this.keys[ idx ]; };


/*
| Returns the length of the twig.
*/
proto.twigLength = function( ) { return this.keys.length; };


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

	return this.keys.indexOf( key );
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
