/*
| Runs the node Read-Eval-Print-Loop for debugging
| in a ideoloom environment supporting JIONs etc.
*/

Error.stackTraceLimit = Infinity;

/*
| Capsule.
*/
(function( ) {
'use strict';


// repl runs in full checking
// mode even with freezes.
global.FREEZE = true;

global.CHECK = true;

global.JION = false;

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


var
	defaultEval,
	fs,
	history,
	historyFileName,
	maxHistory,
	repl;

historyFileName = '.repl-history';

maxHistory = 1000;

fs = require( 'fs' );

repl = require( 'repl' );

try
{
	history = fs.readFileSync( historyFileName );

	history = history + '';

	history = history.split( '\n' );
}
catch( err )
{
	history = [ ];
}

repl = repl.start( 'repl> ' );

repl.rli.history = history.reverse( );

// strange wording to make jshint happy
defaultEval = repl[ '_eval'.substr( 1 ) ];

repl[ '_eval'.substr( 1 ) ] =
	function( cmd, context, filename, callback )
	{
		var
			c;

		c = cmd.trim( );

		if( c !== '' )
		{
			history.push( c );

			if( history.length > maxHistory )
			{
				history.shift( );
			}
		}

		defaultEval.call( repl, cmd, context, filename, callback );
	};

repl.on(
	'exit',
	function( )
	{
		fs.writeFileSync( historyFileName, history.join( '\n' ) );
	}
);


} )( );
