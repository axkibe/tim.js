/*
| A root directory of timspecs.
*/
'use strict';


tim.define( module, ( def ) => {


if( TIM )
{
	def.attributes =
	{
		// the absolute path of the root directory
		// FIXME XXX rename realpath
		absolutePath : { type : 'string' },

		// an id for this tree
		id : { type : 'string' },

		// if true skips auto timcode generation for this timspec tree
		// used by ouroborus builds of tim.js
		noTimcodeGen : { type : 'boolean', defaultValue : 'false' },
	};

	def.group = [ './dir', './timspec' ];
}

const timspec_dir = require( './dir' );


/*
| Adds a timspec to this rootDir.
*/
def.func.addTimspec =
	function(
		timspec   // the timspec to be added
	)
{
	const path = timspec.path;

/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 1 ) throw new Error( );
/**/
/**/	if( path.length < 2 ) throw new Error( );
/**/
/**/	if( path.get( 0 ) !== this.id ) throw new Error( );
/**/}

	const key = path.get( 1 );

	// this is a timspec directly in the rootDir?
	if( path.length === 2 )
	{
		const ts = this.get( key );

		// this is already added
		// XXX FIXME check if already there
		if( ts ) return this;

		return this.create( 'group:set', key, timspec );
	}

	// this is in a subdir

	const dir = this.get( key ) || timspec_dir.empty;

	return this.create( 'group:set', key, dir.addTimspec( timspec, 2 ) );
};


} );
