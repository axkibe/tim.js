/*
| A jion id.
*/


/*
| Capsule.
*/
(function( ) {
'use strict';


/*
| The jion definition.
*/
if( JION )
{
	return{
		id : 'jion$id',
		attributes :
		{
			'packet' :
			{
				comment : 'the jion is in/from a package',
				type : [ 'undefined', 'string' ]
			}
		},
		ray : [ 'string' ]
	};
}


var
	jion$id,
	jion$proto,
	prototype,
	shorthand;

jion$id = require( './this' )( module, 'ouroboros' );

prototype = jion$id.prototype;

jion$proto = require( './proto' );

shorthand = require( './ast/shorthand' );


/*
| Create the id from a string specifier.
*/
jion$id.createFromString =
	function(
		string
	)
{
	var
		packet,
		split;

	split = string.split( '$' );

	if( split.length > 1 )
	{
		packet = split[ 0 ];

		string = split[ 1 ];
	}

	split = string.split( '_' );

	if( !packet && split.length <= 1 )
	{
		switch( string )
		{
			case 'boolean' : break;
			case 'date' : break;
			case 'integer' : break;
			case 'function' : break;
			case 'null' : break;
			case 'number' : break;
			case 'protean' : break;
			case 'string' : break;
			case 'undefined' : break;

			default : throw new Error( 'bad id: ' + string );
		}

		return jion$id.create( 'ray:init', [ string ] );
	}

	return(
		jion$id.create(
			'packet', packet,
			'ray:init', split
		)
	);
};


/*
| Compares two ids.
*/
jion$id.compare =
	function(
		o1,
		o2
	)
{
	var
		a,
		l1,
		l2,
		u1,
		u2;

	if( !o1.packet && o2.packet ) return 1;

	if( o1.packet && !o2.packet ) return -1;

	if( o1.packet && o2.packet )
	{
		if( o1.packet > o2.packet ) return 1;

		if( o1.packet < o2.packet ) return -1;
	}

	l1 = o1.length;

	l2 = o2.length;

	if( l1 === 1 && l2 > 1 ) return 1;

	if( l1 > 1 && l2 === 1 ) return -1;

	for( a = 0; a < l1; a++ )
	{
		u1 = o1.get( a );

		u2 = o2.get( a );

		if( u1 > u2 ) return 1;

		if( u1 < u2 ) return -1;
	}

	if( l1 !== l2 ) return 1;

	return 0;
};



/*
| This name as ast string.
*/
jion$proto.lazyValue(
	prototype,
	'$abstractName',
	function( )
{
	return shorthand.$string( this.name + ':abstract' );
}
);


/*
| This id as abstract as ast string.
*/
jion$proto.lazyValue(
	prototype,
	'$abstractPathName',
	function( )
{
	return shorthand.$string( this.pathName + ':abstract' );
}
);


/*
| Returns if equalness of this object must be used by a
| .equals( ) call, may have an .equals( ) func or never
| has a .equals( ) call and equalness is simply to be
| determined by '===' operator.
*/
jion$proto.lazyValue(
	prototype,
	'equalsConvention',
	function( )
{
	return(
		( this.packet || this.length > 1 )
		? 'must'
		: 'mustnot'
	);
}
);


/*
| This id as global varname
*/
jion$proto.lazyValue(
	prototype,
	'global',
	function( )
{
	return(
		( this.packet ? this.packet + '$' : '' )
		+ this.pathName
	);
}
);


/*
| This id as ast variable.
*/
jion$proto.lazyValue(
	prototype,
	'$global',
	function( )
{
	return shorthand.$var( this.global );
}
);


/*
| This id references a primitive.
*/
jion$proto.lazyValue(
	prototype,
	'isPrimitive',
	function( )
{
	return !this.packet && this.length === 1;
}
);



/*
| This ids name (without path).
*/
jion$proto.lazyValue(
	prototype,
	'name',
	function( )
{
	return this.get( this.length - 1 );
}
);



/*
| This name as ast string.
*/
jion$proto.lazyValue(
	prototype,
	'$name',
	function( )
{
	return shorthand.$string( this.name );
}
);


/*
| This id as path relative to project root dir.
*/
jion$proto.lazyValue(
	prototype,
	'path',
	function( )
{
	var
		a,
		aZ,
		p;

	p = '';

	for( a = 0, aZ = this.length; a < aZ; a++ )
	{
		if( a > 0 ) p += '/';

		p += this.get( a );
	}

	return p;
}
);


/*
| This id as pathed variable name.
*/
jion$proto.lazyValue(
	prototype,
	'pathName',
	function( )
{
	var
		a,
		aZ,
		pn;

	pn = '';

	for( a = 0, aZ = this.length; a < aZ; a++ )
	{
		if( a > 0 ) pn += '_';

		pn += this.get( a );
	}

	return pn;
}
);


/*
| This id as ast string.
*/
jion$proto.lazyValue(
	prototype,
	'$pathName',
	function( )
{
	return shorthand.$string( this.pathName );
}
);


/*
| Relative path to the project's root dir.
*/
jion$proto.lazyValue(
	prototype,
	'rootPath',
	function( )
{
	var
		a,
		len,
		rp;

	len = this.length;

	if( len === 1 ) return './';

	rp = '';

	for( a = 0; a < len - 1; a++ )
	{
		rp += '../';
	}

	return rp;
}
);


} )( );
