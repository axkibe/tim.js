/*
| Hold specifications of a tim.
*/
'use strict';


tim.define( module, ( def, timspec_timspec ) => {


if( TIM )
{
	def.attributes =
	{
		// json name of this tim
		json : { type : [ 'undefined', 'string' ] },

		// filename of the tim
		filename : { type : 'string' },

		// catalog path
		path : { type : [ 'undefined', '../export/path' ] },
	};
}

const validator = require( '../validator' );


/*
| Creates a timspec from the def protean.
*/
def.static.createFromDef =
	function(
		def,
		filename
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 2 ) throw new Error( );
/**/}

	validator.check( def );

	return(
		timspec_timspec.create(
			'filename', filename,
			'json', def.json
		)
	);
};


/*
| Returns the preamble to be prepended
| to sources for browser mode.
*/
def.func.getBrowserPreamble =
	function(
		timcode    // true if this is for timcode
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 1 ) throw new Error( );
/**/}

	let text = '';

	text +=
		'( ( ) => { let '
		+ ( timcode ? 'self' : 'module' )
		+ ' = _catalog';

	const path = this.path;

	for( let p = 0, pLen = path.length; p < pLen; p++ )
	{
		const key = path.get( p );

		text +=
			key.indexOf( '.' ) >= 0
			? '[ \'' + key + '\' ]'
			: '.' + key;
	}

	text +=
		'; let require = _require.bind( '
		+ ( timcode ? 'self' : 'module' )
		+ ' );';

	return text;
};


} );
