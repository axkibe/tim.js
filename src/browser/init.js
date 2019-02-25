/*
| Initalizes the tim environment in the browser.
*/
'use strict';


var pass, TIM, tim, _require;

tim = { };

// global pass flag for creators
pass = tim.pass = Object.freeze( { } );

TIM = false;

tim.define =
	function(
		module,   // in case of browser this is the to be created
		//        // tim in the catalog
		definer   // defined functions
	)
{
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

	definer( def, module );

	tim._prepare( module, def, module );

/**/if( CHECK )
/**/{
/**/	module.prototype.__DEBUG_DEFINER__ = definer;
/**/}

	module._def = def;
};
