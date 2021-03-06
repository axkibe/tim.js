/*
| General tim stuff used in node and browser.
*/
'use strict';


const util = NODE && require( 'util' );


/*
| A lazy value is computed and fixated before it is needed.
*/
tim.aheadValue =
	function(
		obj,   // object to ahead the lazy value for
		name,  // name to ahead
		value  // value to ahead
	)
{
/**/if( CHECK )
/**/{
/**/	if( value === undefined ) throw new Error( );
/**/}

	// FUTURE CHECK if value is already set.

	return( obj.__lazy[ name ] = value );
};


/*
| A function taking a key and no side effects
| is computed for a value and fixated before it is needed.
*/
tim.aheadFunction =
	function(
		obj,      // object to ahead for
		name,     // property to ahead
		key,      // function ( key ) value to ahead
		value     // value ( result ) to ahead
	)
{
/**/if( CHECK )
/**/{
/**/	if( name === undefined ) throw new Error( );
/**/	if( key === undefined ) throw new Error( );
/**/	if( value === undefined ) throw new Error( );
/**/}

	let c = obj.__lazy[ name ];

	if( !c ) c = obj.__lazy[ name ] = new Map( );

	c.set( key, value );

	return value;
};


/*
| Copies one object (not deep!)
|
| Also doesn't do hasOwnProperty checking since that one
| is only to be used on vanilla objects.
*/
tim.copy =
	function(
		obj  // the object to copy from
	)
{
	const c = { };

	for( let k in obj ) c[ k ] = obj[ k ];

	return c;
};


/*
| Copies one object (not deep!).
| Also lets another object override the former.
| Used in creators of adjusting tims.
|
| Also doesn't do hasOwnProperty checking since that one
| is only to be used on vanilla objects.
*/
tim.copy2 =
	function(
		obj,  // the object to copy from
		o2  // overriding object
	)
{
	const c = { };

	for( let k in obj ) c[ k ] = obj[ k ];

	for( let k in o2 ) c[ k ] = o2[ k ];

	return c;
};


/*
| Tests if the object has a lazy value set.
*/
tim.hasLazyValueSet =
	function(
		obj,
		name
	)
{
	return obj.__lazy[ name ] !== undefined;
};


/*
| Prepares a tim to be ran.
*/
tim._prepare =
	function(
		module,  // the defining module
		def,     // the tim definition
		exports  // the tims module exports
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 3 ) throw new Error( );
/**/}

	exports._def = def;

	let extend;

	if( def.extend )
	{
		if( NODE ) extend = module.require( def.extend )._def;
		else extend = _require.call( module, def.extend )._def;

		const protoMask = { };
		const staticMask = { };

		for( let name in def.static ) staticMask[ name ] = true;
		for( let name in def.staticLazy ) staticMask[ name ] = true;
		for( let name in def.lazy ) protoMask[ name ] = true;
		for( let name in def.lazyFunc ) protoMask[ name ] = true;
		for( let name in def.proto ) protoMask[ name ] = true;

		for( let name in extend.static )
		{
			if( !staticMask[ name ] ) def.static[ name ] = extend.static[ name ];
		}

		for( let name in extend.staticLazy )
		{
			if( !staticMask[ name ] ) def.staticLazy[ name ] = extend.staticLazy[ name ];
		}

		for( let name in extend.lazy )
		{
			if( !protoMask[ name ] ) def.lazy[ name ] = extend.lazy[ name ];
		}

		for( let name in extend.lazyFunc )
		{
			if( !protoMask[ name ] ) def.lazyFunc[ name ] = extend.lazyFunc[ name ];
		}

		for( let name in extend.proto )
		{
			if( !protoMask[ name ] ) def.proto[ name ] = extend.proto[ name ];
		}

		for( let name in extend.inherit )
		{
			if( !protoMask[ name ] ) def.inherit[ name ] = extend.inherit[ name ];
		}

		for( let name in extend.adjust )
		{
			if( !def.adjust[ name ] ) def.adjust[ name ] = extend.adjust[ name ];
		}

		if( NODE && extend.inspect && !def.inspect ) def.inspect = extend.inspect;
	}

	// assigns statics
	for( let name in def.static )
	{
		exports[ name ] = def.static[ name ];
	}

	// assigns lazy statics
	for( let name in def.staticLazy )
	{
		tim.proto.lazyStaticValue(
			exports,
			name,
			def.staticLazy[ name ]
		);
	}

	const prototype = exports.prototype;

	// in case of abstracts doing static stuff was all
	// that was needed
	if( def.abstract ) return exports;

	// assigns lazy values to the prototype
	for( let name in def.lazy )
	{
		tim.proto.lazyValue( prototype, name, def.lazy[ name ] );
	}

	// assigns lazy integer functions to the prototype
	for( let name in def.lazyFunc )
	{
		tim.proto.lazyFunction( prototype, name, def.lazyFunc[ name ] );
	}

	// assigns functions to the prototype
	for( let name in def.proto )
	{
		prototype[ name ] = def.proto[ name ];
	}

	// assigns adjustments to the prototype
	for( let name in def.adjust )
	{
		const tname = '__adjust_' + name;

		prototype[ tname ] = def.adjust[ name ];
	}

	// assigns inherit optimizations to the prototype
	for( let name in def.inherit )
	{
		prototype[ '__inherit_' + name ] = def.inherit[ name ];
	}

	if( NODE && def.inspect ) prototype[ util.inspect.custom ] = def.inspect;

	return exports;
};
