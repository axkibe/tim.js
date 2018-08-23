/*
| Manages the tim environment in the browser.
*/
'use strict';


var module, pass, tim, tim_proto, TIM, _timtrees;

module = undefined;

tim = { };

tim.proto = tim_proto;

tim.aheadValue = tim_proto.aheadValue;

tim.aheadFunctionInteger = tim_proto.aheadFunctionInteger;

tim.copy = tim_proto.copy;

tim.hasLazyValueSet = tim_proto.hasLazyValueSet;


// global pass flag for creators
pass = tim.pass = { };

TIM = false;

tim.ouroboros = { };


if( FREEZE ) Object.freeze( pass );


tim.define =
tim.ouroboros.define =
	function(
		module,   // used by node only, ignored in browser
		definer   // defined functions
	)
{
	const tim = module;

	const timDef =
	{
		func : { },
		inherit : { },
		lazy : { },
		lazyFuncInt : { },
		lazyFuncStr : { },
		static : { },
		staticLazy : { },
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

	// assigns lazy integer functions to the prototype
	for( let name in timDef.lazyFuncInt )
	{
		tim_proto.lazyFunctionInteger( tim.prototype, name, timDef.lazyFuncInt[ name ] );
	}

	// assigns lazy string functions to the prototype
	for( let name in timDef.lazyFuncStr )
	{
		tim_proto.lazyFunctionString( tim.prototype, name, timDef.lazyFuncStr[ name ] );
	}

	// assigns functions to the prototype
	for( let name in timDef.func )
	{
		tim.prototype[ name ] = timDef.func[ name ];
	}

	// assigns inherit optimizations to the prototype
	for( let name in timDef.inherit )
	{
		tim.prototype[ '__inherit_' + name ] = timDef.inherit[ name ];
	}
};


/*
| The tim trees global.
*/
var _timtrees;


/*
| Imports tims from other packages.
*/
tim.import =
	function(
		rmod, // required module (or tim itself)
		path  // exported path
	)
{
	let branch = _timtrees[ rmod ];

	if( !branch ) throw new Error( );

	branch = branch.export;

	if( !branch ) throw new Error( );

	const split = path.split( );

	for( let a = 0, al = split.length; a < al; a++ )
	{
		branch = branch[ split[ a ] ];

		if( !branch ) throw new Error( );
	}

	return branch;
};

