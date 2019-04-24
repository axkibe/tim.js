/*
| A root directory of timspecs.
|
| FIXME extend './dir'
*/
'use strict';


tim.define( module, ( def ) => {


if( TIM )
{
	def.attributes =
	{
		// tim exports of the package
		exports : { type : [ 'undefined', './exports' ] },

		// an id for this tree
		id : { type : 'string' },

		// if true skips auto timcode generation for this timspec tree.
		// used by ouroborus builds of tim.js
		noTimcodeGen : { type : 'boolean', defaultValue : 'false' },

		// the absolute path of the root directory
		realpath : { type : 'string' },

		// the path where the generated timcode is placed
		timcodePath : { type : 'string' },
	};

	def.group = [ './dir', './provisional', './timspec' ];
}

const timspec_dir = tim.require( './dir' );

const timspec_provisional = tim.require( './provisional' );


/*
| Exta checking
*/
def.proto._check =
	function( )
{
/**/if( CHECK )
/**/{
/**/	if( this.realpath[ this.realpath.length - 1 ] !== '/' ) throw new Error( );
/**/
/**/	if( this.timcodePath[ this.timcodePath.length - 1 ] !== '/' ) throw new Error( );
/**/}
};


/*
| Adds a timspec or provisional.
*/
def.proto.addEntry =
	function(
		entry   // timspec or provisional to be added
	)
{
	const path = entry.path;

/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 1 ) throw new Error( );
/**/
/**/	if( path.length < 2 ) throw new Error( );
/**/
/**/	if( path.get( 0 ) !== this.id ) throw new Error( );
/**/}

	const key = path.get( 1 );

	// this is a entry directly in the rootDir?
	if( path.length === 2 )
	{
		const ts = this.get( key );

		if( ts && ts.timtype !== timspec_provisional )
		{
/**/		if( CHECK )
/**/		{
/**/			if( !entry.alikeIgnoringProteans( ts ) ) throw new Error( );
/**/		}

			return this;
		}

		return this.create( 'group:set', key, entry );
	}

	// this is in a subdir
	const dir = this.get( key ) || timspec_dir.empty;

	return this.create( 'group:set', key, dir.addEntry( entry, 2 ) );
};


/*
| Returns the timspec for a given realpath.
*/
def.proto.getByPath =
	function(
		path   // of type string
	)
{
	path = path.split( '/' );

	let entry = this;

	for( let p of path )
	{
		entry = entry.get( p );

		if( !entry ) return;
	}

	return entry;
};


} );
