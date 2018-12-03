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
		def,      // the tim definition
		exports   // the tims module exports
	)
{
	if( arguments.length !== 2 ) throw new Error( );

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

	return exports;
};
