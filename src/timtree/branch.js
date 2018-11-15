/*
| A timtree is a set of 'modules' using tim
|
| This is stored so the browser can 'require' these
| things as well.
*/
'use strict';


tim.ouroboros.define( module, ( def, timtree_branch ) => {


if( TIM )
{
	def.group = [ './branch', './leaf' ];
}


const timtree_leaf = require( './leaf' );

/*
| Returns the timtree branch with a leaf added.
*/
def.func.addLeaf =
	function(
		path,        // path of the leaf to be added
		json,        // if defined, json name of the tim
		ppos		 // this branch position in the path.
	)
{
	if( ppos === undefined ) ppos = 0;

	const key = path.get( ppos );

	// this is the last branch
	if( ppos === path.length - 1 )
	{
		let leaf = this.get( key );

		if( leaf )
		{
/**/		if( CHECK )
/**/		{
/**/			if( json && leaf.json !== json ) throw new Error( );
/**/		}

			// leaf is already there
			return this;
		}

		leaf = timtree_leaf.create( 'json', json, 'path', path );

		return this.set( key, leaf );
	}

	let branch = this.get( key );

	if( branch )
	{
		return this.set( key, branch.addLeaf( path, json, ppos + 1 ) );
	}

	// if not the sub-branches are missing frmom here

	branch = timtree_leaf.create( 'json', json, 'path', path );

	for( let p = path.length - 1; p > ppos; p-- )
	{
		const key = path.get( p );

		branch = timtree_branch.create( 'group:set', key, branch );
	}

	return this.set( key, branch );
};


} );
