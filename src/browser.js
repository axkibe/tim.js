/*
| Manages the tim environment in the browser.
*/


'use strict';


var module, pass, tim, tim_proto;

module = undefined;

tim = tim_proto = { };

// global pass flag for creators
pass = tim_proto.pass = { };


// all tim modules
var timModules = { };


if( FREEZE ) Object.freeze( pass );


tim.define =
	function(
		module,   // used by node only, ignored in browser
		id,       // the id of the tim to be defined
		definer   // defined functions
	)
{
	const tim = timModules[ id ];

	const timDef =
	{
		static : { },

		staticLazy : { },

		lazy : { },

		func : { },
	};

	definer( timDef, tim );

	// assigns statics
	for( let name in timDef.static )
	{
		tim[ name ] = timDef.static[ name ];
	}

	// assigns lazy statics
	for( let name in timDef.staticLazy )
	{
		tim_proto.lazyStaticValue( tim, name, timDef.staticLazy[ name ] );
	}

	// assigns lazy values to the prototype
	for( let name in timDef.lazy )
	{
		tim_proto.lazyValue( tim.prototype, name, timDef.lazy[ name ] );
	}

	// assigns functions to the prototype
	for( let name in timDef.func )
	{
		tim.prototype[ name ] = timDef.func[ name ];
	}
};
