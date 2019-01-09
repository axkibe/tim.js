/*
| Prepares a tim to be ran in current node instance.
*/
'use strict';


/*
| This has to be in node.
*/
if( !NODE ) throw new Error( );


const tim_proto = require( './proto' );


/*
| Prepares a tim to be ran in current node instance.
*/
module.exports =
	function(
		module,   // the defining module
		def,      // the tim definition
		exports   // the tims module exports
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 3 ) throw new Error( );
/**/}

	let extend;

	if( def.extend )
	{
		extend = module.require( def.extend )._def;

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
		exports[ name ] = def.static[ name ];
	}

	// assigns lazy statics
	for( let name in def.staticLazy )
	{
		tim_proto.lazyStaticValue(
			exports,
			name,
			def.staticLazy[ name ]
		);
	}

	// assigns lazy values to the prototype
	for( let name in def.lazy )
	{
		tim_proto.lazyValue(
			exports.prototype,
			name,
			def.lazy[ name ]
		);
	}

	// assigns lazy integer functions to the prototype
	for( let name in def.lazyFuncInt )
	{
		tim_proto.lazyFunctionInteger(
			exports.prototype,
			name,
			def.lazyFuncInt[ name ]
		);
	}

	// assigns lazy string functions to the prototype
	for( let name in def.lazyFuncStr )
	{
		tim_proto.lazyFunctionString(
			exports.prototype,
			name,
			def.lazyFuncStr[ name ]
		);
	}

	// assigns functions to the prototype
	for( let name in def.func )
	{
		exports.prototype[ name ] = def.func[ name ];
	}

	// assigns transforms to the prototype
	for( let name in def.transform )
	{
		const tname = '__transform_' + name;

		exports.prototype[ tname ] = def.transform[ name ];
	}

	// assigns inherit optimizations to the prototype
	for( let name in def.inherit )
	{
		exports.prototype[ '__inherit_' + name ] = def.inherit[ name ];
	}

	exports._def = def;

	return exports;
};
