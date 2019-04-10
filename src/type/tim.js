/*
| A tim as type.
*/
'use strict';


tim.define( module, ( def, type_tim ) => {


if( TIM )
{
	def.attributes =
	{
		// defined if the tim is imported from a another package
		imported : { type : [ 'undefined', 'string' ] }
	};

	def.list = [ 'string' ];
}


const shorthand = tim.require( '../ast/shorthand' );

// FIXME only allows tim.js imports for now
const pool = { '_' : { }, 'tim.js' : { } };


/*
| Create the type from an array of path parts.
*/
def.static.createFromPath =
	function(
		path
	)
{
	let imported;

	path = path.slice( );

	switch( path[ 0 ] )
	{
		case '.' : path.shift( ); break;

		case '..' : break;

		default : imported = path.shift( ); break;
	}

	let p = pool[ imported ? imported : '_' ];

	for( let a = 0, al = path.length; a < al; a++ )
	{
		let s = path[ a ];

		let pn = p[ s ];

		if( !pn ) pn = p[ s ] = { };

		p = pn;
	}

	let pn = p[ '.js' ];

	if( pn ) return pn;

	const result = type_tim.create( 'list:init', path, 'imported', imported );

	p[ '.js' ] = result;

	return result;
};



/*
| Returns if equalness of this object must be used by a
| .equals( ) call, may have an .equals( ) func or never
| has a .equals( ) call and equalness is simply to be
| determined by '===' operator.
*/
def.proto.equalsConvention = 'must';


/*
| This type does not reference a primitive.
*/
def.proto.isPrimitive = false;


/*
| This type as string path relative to the owner
| Without '.js' at the end
*/
def.lazy.pathStringBase =
	function( )
{
	let p = '';

	let first = true;

	for( let s of this )
	{
		if( first ) first = false; else p += '/';

		p += s;
	}

	return p;
};


/*
| This type as string path relative to the owner.
*/
def.lazy.pathString =
	function( )
{
	return this.pathStringBase + '.js';
};


/*
| The require statement used for this type.
*/
def.lazy.require =
	function( )
{
	if( this.imported )
	{
		// FIXME placeholder for future
		if( this.imported !== 'tim.js' ) throw new Error( );

		if( this.length !== 1 ) throw new Error( );

		switch( this.get( 0 ) )
		{
			case 'path' : return 'require( "tim.js/path" )';

			case 'pathList' : return 'require( "tim.js/pathList" )';

			case 'stringList' : return 'require( "tim.js/stringList" )';

			case 'stringSet' : return 'require( "tim.js/stringSet" )';

			default : throw new Error( );
		}
	}
	else
	{
		return 'require( "./' + this.pathStringBase + '" )';
	}
};


/*
| The timtype as imported varname
*/
def.lazy.varname =
	function( )
{
	let name = 'tt_';

	let first = true;

	for( let s of this )
	{
		if( first ) first = false; else name += '_';

		name += s === '..' ? '$' : s;
	}

	return name;
};


/*
| This varname as ast var.
*/
def.lazy.$varname =
	function( )
{
	return shorthand.$var( this.varname );
};


} );
