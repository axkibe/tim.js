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
		const it = imports.iterator( );

		for( let i = it.next( ); !i.done; i = it.next( ) )
		{
			const type = i.value;

			if( type.timtype !== type_tim ) continue;

			const ts = tim.catalog.getTimspecRelative( timspec.filename, type );

			twig = dependencyWalk( twig, ts, parents );
		}
	}

	{
		const it = timspec.requires.iterator( );

		for( let i = it.next( ); !i.done; i = it.next( ) )
		{
			const filename = i.value;

			const type = type_tim.createFromPath( filename.split( '/' ) );

			const ts = tim.catalog.getTimspecRelative( timspec.filename, type );

			twig = dependencyWalk( twig, ts, parents );
		}
	}

	if( timspec.extend )
	{
		const type = timspec.extend;

		const ts = tim.catalog.getTimspecRelative( timspec.filename, type );

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

	return dependencyWalk( self.create( ), entry, self.create( ) );
};


} );
