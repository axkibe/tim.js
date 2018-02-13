/*
| A tim.js id.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'id', ( def, tim_id ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		packet :
		{
			comment : 'the tim is in/from a package',
			type : [ 'undefined', 'string' ]
		}
	};

	def.list = [ 'string' ];
}


const shorthand = require( '../ast/shorthand' );

const primitives =
	{
		'boolean'   : true,
		'date'      : true,
		'integer'   : true,
		'function'  : true,
		'null'      : true,
		'number'    : true,
		'protean'   : true,
		'string'    : true,
		'undefined' : true,
	};

/**/if( FREEZE ) Object.freeze( primitives );


const pool = { };


/*
| Create the id from a string specifier.
*/
def.static.createFromString =
	function(
		string
	)
{
	console.log( 'WARNING, old style id used: ' + string );

	let packet;

	let split = string.split( '$' );

	if( split.length > 1 )
	{
		packet = split[ 0 ];

		string = split[ 1 ];
	}

	split = string.split( '_' );

	if( !packet && split.length <= 1 )
	{
		return tim_id.create( 'list:init', [ string ] );
	}


	// looks up cache
	let p = pool[ packet + '' ];

	if( !p ) p = pool[ packet + '' ] = { };

	for( let a = 0, al = split.length; a < al; a++ )
	{
		let s = split[ a ];

		let pn = p[ s ];

		if( !pn ) pn = p[ s ] = { };

		p = pn;
	}

	let pn = p[ '.js' ];

	if( pn ) return pn;

	return( p[ '.js' ] = tim_id.create( 'packet', packet, 'list:init', split ) );
};


/*
| Compares two ids.
*/
def.static.compare =
	function(
		o1,
		o2
	)
{
	if( !o1.packet && o2.packet ) return 1;

	if( o1.packet && !o2.packet ) return -1;

	if( o1.packet && o2.packet )
	{
		if( o1.packet > o2.packet ) return 1;

		if( o1.packet < o2.packet ) return -1;
	}

	const l1 = o1.length;

	const l2 = o2.length;

	if( l1 === 1 && l2 > 1 ) return 1;

	if( l1 > 1 && l2 === 1 ) return -1;

	for( let a = 0; a < l1; a++ )
	{
		const u1 = o1.get( a );

		const u2 = o2.get( a );

		if( u1 > u2 ) return 1;

		if( u1 < u2 ) return -1;
	}

	if( l1 !== l2 ) return 1;

	return 0;
};


/*
| Returns if equalness of this object must be used by a
| .equals( ) call, may have an .equals( ) func or never
| has a .equals( ) call and equalness is simply to be
| determined by '===' operator.
*/
def.lazy.equalsConvention =
	function( )
{
	return(
		( this.packet || this.length > 1 )
		? 'must'
		: 'mustnot'
	);
};


/*
| This id as global varname
*/
// FIXME rename
def.lazy.global =
	function( )
{
	return(
//		( this.packet ? this.packet + '$' : '' )
		( this.packet ? this.packet + '.' : '' )
		+ this.pathName
	);
};


/*
| This id as ast variable.
*/
def.lazy.$global =
	function( )
{
	if( this.packet )
	{
		return shorthand.$dot( shorthand.$var( this.packet ), this.pathName );
	}

	return shorthand.$var( this.global );
};


/*
| This id references a primitive.
*/
def.lazy.isPrimitive =
	function( )
{
	if( this.packet ) return false;

	if( this.length > 1 ) return false;

	return !!primitives[ this.get( 0 ) ];
};


/*
| This ids name (without path).
*/
def.lazy.name =
	function( )
{
	return this.get( this.length - 1 );
};


/*
| This id as path relative to project root dir.
*/
def.lazy.path =
	function( )
{
	let p = '';

	for( let a = 0, aZ = this.length; a < aZ; a++ )
	{
		if( a > 0 ) p += '/';

		p += this.get( a );
	}

	return p;
};


/*
| This id as pathed variable name.
*/
def.lazy.pathName =
	function( )
{
	let pn = '';

	for( let a = 0, aZ = this.length; a < aZ; a++ )
	{
		if( a > 0 ) pn += '_';

		pn += this.get( a );
	}

	return pn;
};


/*
| This id as ast string.
*/
def.lazy.$pathName =
	function( )
{
	return shorthand.$string( this.pathName );
};


/*
| Relative path to the project's root dir.
*/
def.lazy.rootPath =
	function( )
{
	const len = this.length;

	if( len === 1 ) return './';

	let rp = '';

	for( let a = 0; a < len - 1; a++ )
	{
		rp += '../';
	}

	return rp;
};


} );

