/*
| A directory of timspecs.
*/
'use strict';


tim.define( module, ( def, timtree_dir ) => {


if( TIM )
{
	def.group = [ './dir', './provisional', './timspec' ];
}


const timspec_provisional = tim.require( './provisional' );


/*
| A (yet) empty dir.
*/
def.staticLazy.empty = ( ) => timtree_dir.create( 'group:init', [ ] );


/*
| Returns the dir with an entry added,
| possibly on a subdir.
*/
def.proto.addEntry =
	function(
		entry,   // the timspec to add
		pathPos  // position in the timspec's path
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 2 ) throw new Error( );
/**/
/**/	if( typeof( pathPos ) !== 'number' ) throw new Error( );
/**/}

	const path = entry.path;

	const key = path.get( pathPos );

	// this is the last dir in subpath
	if( pathPos === path.length - 1 )
	{
		const ts = this.get( key );

		// already there?
		if( ts && ts.timtype !== timspec_provisional )
		{
/**/		if( CHECK )
/**/		{
/**/			if( !entry.alikeIgnoringProteans( ts ) ) throw new Error( );
/**/		}

			return this;
		}

		return this.set( key, entry );
	}

	// this is just on a branch.
	let dir = this.get( key ) || timtree_dir.empty;

	return this.set( key, dir.addEntry( entry, pathPos + 1 ) );

};


} );
