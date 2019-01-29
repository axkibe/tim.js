/*
| Manages the tim environment in the browser.
*/
'use strict';


var pass, tim, tim_proto, _require;

tim = { };

tim.proto = tim_proto;

tim.aheadValue = tim_proto.aheadValue;

tim.aheadFunctionInteger = tim_proto.aheadFunctionInteger;

tim.copy = tim_proto.copy;

tim.hasLazyValueSet = tim_proto.hasLazyValueSet;


// global pass flag for creators
pass = tim.pass = { };

TIM = false;

if( FREEZE ) Object.freeze( pass );


const prepare =
	function(
		module, // the defining module
		def,    // the tim definition
		tim,    // the tim to be prepared
		mask    // skips stuff set here
	)
{
	let extend;

	if( def.extend )
	{
		extend = _require.call( module, def.extend )._def;

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
		tim[ name ] = def.static[ name ];
	}

	// assigns lazy statics
	for( let name in def.staticLazy )
	{
		tim_proto.lazyStaticValue( tim, name, def.staticLazy[ name ] );
	}

	// assigns lazy values to the prototype
	for( let name in def.lazy )
	{
		tim_proto.lazyValue( tim.prototype, name, def.lazy[ name ] );
	}

	// assigns lazy integer functions to the prototype
	for( let name in def.lazyFuncInt )
	{
		tim_proto.lazyFunctionInteger( tim.prototype, name, def.lazyFuncInt[ name ] );
	}

	// assigns lazy string functions to the prototype
	for( let name in def.lazyFuncStr )
	{
		tim_proto.lazyFunctionString( tim.prototype, name, def.lazyFuncStr[ name ] );
	}

	// assigns functions to the prototype
	for( let name in def.proto )
	{
		tim.prototype[ name ] = def.proto[ name ];
	}

	// assigns adjustments to the prototype
	for( let name in def.adjust )
	{
		const tname = '__adjust_' + name;

		tim.prototype[ tname ] = def.adjust[ name ];
	}

	// assigns inherit optimizations to the prototype
	for( let name in def.inherit )
	{
		tim.prototype[ '__inherit_' + name ] = def.inherit[ name ];
	}
};


tim.define =
	function(
		module,   // in case of browser this is the to be created
		//        // tim in the catalog
		definer   // defined functions
	)
{
	const tim = module;

	const def =
	{
		adjust : { },
		inherit : { },
		lazy : { },
		lazyFuncInt : { },
		lazyFuncStr : { },
		proto : { },
		static : { },
		staticLazy : { },
	};

	definer( def, tim );

	prepare( module, def, tim );

/**/if( CHECK )
/**/{
/**/	tim.prototype.__DEBUG_DEFINER__ = definer;
/**/}

	tim._def = def;
};

