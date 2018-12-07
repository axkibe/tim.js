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

		// catalog path
		path : { type : [ '../export/path' ] },
	};
}


/*
| Creates a timspec from the def protean.
*/
def.static.createFromDef =
	function(
		def,
		path
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 2 ) throw new Error( );
/**/}

	return(
		timspec_timspec.create(
//			'def', def,
			'json', def.json,
			'path', path
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
