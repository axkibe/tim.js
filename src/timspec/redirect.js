/*
| Redirects to another tim.
|
| FIXME this is under construction.
*/
'use strict';


tim.define( module, ( def, timspec_redirect ) => {


if( TIM )
{
	def.attributes =
	{
		// where there rediction resides
		path: { type : [ '../path/path' ] },

		// where it redirects to
		redirect: { type : [ '../path/path' ] },
	};
}


/*
| Creates a timspec from the def protean.
*/
def.static.createFromForward =
	function(
		module,    // the module of the forwarder
		forward    // the forward
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 2 ) throw new Error( );
/**/}

	return(
		timspec_redirect.create(
			'forward', forward   // FIXME
		)
	);
};


/*
| Gets a timspec for a timtype with this timspec as base.
*/
/*
def.proto.getTimspec =
	function(
		timtype
	)
{
	return getTimspec( timtype, this._module );
};
*/


/*
| Returns the preamble to be prepended
| to sources for browser mode.
*/
def.proto.getBrowserPreamble =
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
