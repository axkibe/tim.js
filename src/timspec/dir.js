/*
| A directory of timspecs.
*/
'use strict';


tim.ouroboros.define( module, ( def, timtree_dir ) => {


if( TIM )
{
	def.group = [ './dir', './timspec' ];
}


const timspec_timspec = require( './timspec' );


/*
| Recursive worker for addTimespec( )
*/
def.func._addTimspec =
	function(
		timspec,  // timspec to be added
		ppos      // this dir position in timspecs path
	)
{
	const path = timspec.path;

	const key = path.get( ppos );

	// this is the last dir in path
	if( ppos === path.length - 1 )
	{
		let leaf = this.get( key );

		if( leaf )
		{
/**/		if( CHECK )
/**/		{
/**/			if( timspec.json && leaf.json !== timspec.json ) throw new Error( );
/**/		}

			// leaf is already there
			return this;
		}

		return this.set( key, timspec );
	}

	let dir = this.get( key );

	if( dir ) return this.set( key, dir._addLeaf( timspec, ppos + 1 ) );

	// if not the subdirs are missing from here

	for( let p = path.length - 1; p > ppos; p-- )
	{
		const key = path.get( p );

		dir = timtree_dir.create( 'group:set', key, dir );
	}

	return this.set( key, dir );

};


/*
| Returns the dir with a spec added, possibly on
| a subdir.
*/
def.func.addTimspec =
	function(
		timspec  // the timspec to be added
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 1 ) throw new Error( );
/**/
/**/	if( timspec.timtype !== timspec_timspec ) throw new Error( );
/**/}

	return this._addTimspec( timspec, 0 );
};


} );
