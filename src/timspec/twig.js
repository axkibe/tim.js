/*
| A twig of timspec's.
| (an ordered group)
*/
'use strict';


tim.define( module, ( def, self ) => {


if( TIM )
{
	def.twig = [ './timspec' ];
}


const timspec_timspec = require( './timspec' );

const type_tim = require( '../type/tim' );


/*
| Recursive helper for createByDependencyWalk
*/
const dependencyWalk =
	function(
		twig,     // the twig being built
		timspec,  // timspec currently inspecting
		parents   // a twig of parents already walked (the open circles)
	)
{
	const filename = timspec.filename;

	if( twig.get( timspec.filename ) || parents.get( timspec.filename ) ) return twig;

	parents = parents.create( 'twig:add', filename, timspec );

	const imports = timspec.imports;

	if( imports )
	{
		for( let type of imports )
		{
			if( type.timtype !== type_tim ) continue;

			const ts = tim.catalog.getByTimtype( timspec.filename, type );

			twig = dependencyWalk( twig, ts, parents );
		}
	}

	{
		for( let filename of timspec.requires )
		{
			const type = type_tim.createFromPath( filename.split( '/' ) );

			// FIXME use getByRelativePath
			const ts = tim.catalog.getByTimtype( timspec.filename, type );

			twig = dependencyWalk( twig, ts, parents );
		}
	}

	if( timspec.extend )
	{
		const type = timspec.extend;

		const ts = tim.catalog.getByTimtype( timspec.filename, type );

		twig = dependencyWalk( twig, ts, parents );
	}

	return twig = twig.create( 'twig:add', filename, timspec );
};


/*
| Creates the timspec twig by dependency walking a timspec
*/
def.static.createByDependencyWalk =
	function(
		entry   // timspec to start the walk with
	)
{

/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 1 ) throw new Error( );
/**/
/**/	if( entry.timtype !== timspec_timspec ) throw new Error( );
/**/}

	let walk = dependencyWalk( self.create( ), entry, self.create( ) );

	// sorts the walk by inheritance makind sure extended
	// tims come first.
	let restart = false;

	do
	{
		restart = false;

		for( let a = 0, al = walk.length; a < al; a++ )
		{
			const filename = walk.getKey( a );

			const ts = tim.catalog.getByRealpath( filename );

			const extendSpec = ts.extendSpec;

			if( !extendSpec ) continue;

			const b = walk.rankOf( extendSpec.filename );

			// this shouldn't happen
			if( b < 0 ) throw new Error( );

			if( b > a )
			{
				walk =
					walk.create(
						'twig:remove', extendSpec.filename,
						'twig:insert', extendSpec.filename, a - 1, extendSpec
					);

				restart = true;
			}
		}
	}
	while( restart );

	return walk;
};


} );
