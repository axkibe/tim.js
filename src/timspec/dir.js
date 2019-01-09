/*
| A directory of timspecs.
*/
'use strict';


tim.define( module, ( def, timtree_dir ) => {


if( TIM )
{
	def.group = [ './dir', './timspec' ];
}


/*
| A (yet) empty dir.
*/
def.staticLazy.empty = ( ) => timtree_dir.create( 'group:init', [ ] );


/*
| Returns the dir with a timspec added,
| possibly on a subdir.
*/
def.func.addTimspec =
	function(
		timspec,  // the timspec to add
		pathPos   // position in the timspec's path
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 2 ) throw new Error( );
/**/
/**/	if( typeof( pathPos ) !== 'number' ) throw new Error( );
/**/}

	const path = timspec.path;

	const key = path.get( pathPos );

	// this is the last dir in subpath
	if( pathPos === path.length - 1 )
	{
		const entry = this.get( key );

		// already there?
		if( entry )
		{
/**/		if( CHECK )
/**/		{
/**/			if( !entry.alikeIgnoringProteans( timspec ) ) throw new Error( );
/**/		}

			return this;
		}

		return this.set( key, timspec );
	}

	// this is just on a branch.
	let dir = this.get( key ) || timtree_dir.empty;

	return this.set( key, dir.addTimspec( timspec, pathPos + 1 ) );

};


} );
