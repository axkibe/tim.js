/*
| Runs the node Read-Eval-Print-Loop for debugging
| in a ideoloom environment supporting tims etc.
*/
'use strict';


Error.stackTraceLimit = Infinity;


// repl runs in full checking
// mode even with freezes.
global.FREEZE = true;

global.CHECK = true;

global.TIM = false;

global.NODE = true;

// hackish needed due to circular requirements
require( '../ast/shorthand' );

global.parser = require( '../jsParser/parser' );

global.parse = global.parser.parse;

global.ast_block = require( '../ast/block' );

global.$ = global.parser.parse;

global.format_formatter = require( '../format/formatter' );

global.format = global.format_formatter.format;

global.util = require( 'util' );


/*
| Comfort function, inspects with infinite depth as default.
*/
global.inspect =
	function(
		obj
	)
{
	return global.util.inspect( obj, { depth: null } );
};


const histFileName = '.repl-history';

const maxHistory = 1000;

const fs = require( 'fs' );

let repl = require( 'repl' );

let hist;

try
{
	hist = fs.readFileSync( histFileName ) + '';

	hist = hist.split( '\n' );
}
catch( err )
{
	hist = [ ];
}

repl = repl.start( 'repl> ' );

repl.rli.history = hist.reverse( );

// strange wording to make jshint happy
//const defaultEval = repl[ '_eval'.substr( 1 ) ];
const defaultEval = repl.eval;

repl[ '_eval'.substr( 1 ) ] =
	function( cmd, context, filename, callback )
{
	const c = cmd.trim( );

	if( c !== '' )
	{
		hist.push( c );

		if( hist.length > maxHistory ) hist.shift( );
	}

	defaultEval.call( repl, cmd, context, filename, callback );
};

repl.on( 'exit', ( ) => fs.writeFileSync( histFileName, hist.join( '\n' ) ) );

