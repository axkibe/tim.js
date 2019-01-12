/*
| Manages the tim environment in the browser.
*/
'use strict';


var pass, tim, tim_proto, _catalog, _require;

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

		const mask = { };

		for( let name in def.static ) mask[ name ] = true;
		for( let name in def.staticLazy ) mask[ name ] = true;
		for( let name in def.lazy ) mask[ name ] = true;
		for( let name in def.lazyFuncInt ) mask[ name ] = true;
		for( let name in def.lazyFuncStr ) mask[ name ] = true;
		for( let name in def.func ) mask[ name ] = true;

		for( let name in extend.static )
		{
			if( !mask[ name ] ) def.static[ name ] = extend.static[ name ];
		}

		for( let name in extend.staticLazy )
		{
			if( !mask[ name ] ) def.staticLazy[ name ] = extend.staticLazy[ name ];
		}

		for( let name in extend.lazy )
		{
			if( !mask[ name ] ) def.lazy[ name ] = extend.lazy[ name ];
		}

		for( let name in extend.lazyFuncInt )
		{
			if( !mask[ name ] ) def.lazyFuncInt[ name ] = extend.lazyFuncInt[ name ];
		}

		for( let name in extend.lazyFuncStr )
		{
			if( !mask[ name ] ) def.lazyFuncStr[ name ] = extend.lazyFuncStr[ name ];
		}

		for( let name in extend.func )
		{
			if( !mask[ name ] ) def.func[ name ] = extend.func[ name ];
		}

		for( let name in extend.transfrom )
		{
			if( !mask[ name ] ) def.transform[ name ] = extend.transform[ name ];
		}

		for( let name in extend.inherit )
		{
			if( !mask[ name ] ) def.inherit[ name ] = extend.inherit[ name ];
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
	for( let name in def.func )
	{
		tim.prototype[ name ] = def.func[ name ];
	}

	// assigns transforms to the prototype
	for( let name in def.transform )
	{
		const tname = '__transform_' + name;

		tim.prototype[ tname ] = def.transform[ name ];
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
		func : { },
		inherit : { },
		lazy : { },
		lazyFuncInt : { },
		lazyFuncStr : { },
		static : { },
		staticLazy : { },
		transform : { },
	};

	definer( def, tim );

	prepare( module, def, tim );

/**/if( CHECK )
/**/{
/**/	tim.prototype.__DEBUG_DEFINER__ = definer;
/**/}

	// FIXME
	tim._def = def;
};


/*
| Imports tims from other packages.
*/
tim.import =
	function(
		rmod, // required module (or tim itself)
		path  // exported path
	)
{
	let dir = _catalog[ rmod ];

	if( !dir ) throw new Error( );

	const split = path.split( '/' );

	for( let a = 0, al = split.length; a < al; a++ )
	{
		let key = split[ a ];

		if( a + 1 === al && !key.endsWith( '.js' ) ) key = key + '.js';

		dir = dir[ key ];

		if( !dir ) throw new Error( );
	}

	return dir;
};

