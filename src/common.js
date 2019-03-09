/*
| General tim stuff used in node and browser.
*/
'use strict';


/*
| A lazy value is computed and fixated before it is needed.
*/
tim.aheadValue =
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
| A function taking an integer and no side effects
| is computed for a value and fixated before it is needed.
*/
tim.aheadFunctionInteger =
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
		key
	)
{
	return obj.__lazy[ key ] !== undefined;
};


/*
| Prepares a tim to be ran in current node instance.
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
		for( let name in def.lazyFuncInt ) protoMask[ name ] = true;
		for( let name in def.lazyFuncStr ) protoMask[ name ] = true;
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

		for( let name in extend.lazyFuncInt )
		{
			if( !protoMask[ name ] ) def.lazyFuncInt[ name ] = extend.lazyFuncInt[ name ];
		}

		for( let name in extend.lazyFuncStr )
		{
			if( !protoMask[ name ] ) def.lazyFuncStr[ name ] = extend.lazyFuncStr[ name ];
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

	// in case of abstracts doing static stuff was all
	// that was needed
	if( def.abstract ) return exports;

	// assigns lazy values to the prototype
	for( let name in def.lazy )
	{
		tim.proto.lazyValue( exports.prototype, name, def.lazy[ name ] );
	}

	// assigns lazy integer functions to the prototype
	for( let name in def.lazyFuncInt )
	{
		tim.proto.lazyFunctionInteger( exports.prototype, name, def.lazyFuncInt[ name ] );
	}

	// assigns lazy string functions to the prototype
	for( let name in def.lazyFuncStr )
	{
		tim.proto.lazyFunctionString( exports.prototype, name, def.lazyFuncStr[ name ] );
	}

	// assigns functions to the prototype
	for( let name in def.proto )
	{
		exports.prototype[ name ] = def.proto[ name ];
	}

	// assigns adjustments to the prototype
	for( let name in def.adjust )
	{
		const tname = '__adjust_' + name;

		exports.prototype[ tname ] = def.adjust[ name ];
	}

	// assigns inherit optimizations to the prototype
	for( let name in def.inherit )
	{
		exports.prototype[ '__inherit_' + name ] = def.inherit[ name ];
	}

	return exports;
};
