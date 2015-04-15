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
			'name' :
			{
				comment : 'the name part of the id if applicable',
				type : 'string',
				// FIXME should not be allowed undefined
				defaultValue : 'undefined'
			},
			'packet' :
			{
				comment : 'the jion is in/from a package',
				type : 'string',
				defaultValue : 'undefined'
			},
			'unit' :
			{
				comment : 'the unit part of the id if applicable',
				type : 'string',
				defaultValue : 'undefined'
			}
		},
		ray : [ 'string' ]
	};
}


var
	jion_id,
	jion_proto,
	prototype,
	shorthand;

jion_id = require( './this' )( module, 'ouroboros' );

prototype = jion_id.prototype;

jion_proto = require( './proto' );

shorthand = require( './ast/shorthand' );


/*
| Create the id from a string specifier.
*/
jion_id.createFromString =
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
			case 'integer' : break;
			case 'function' : break;
			case 'null' : break;
			case 'number' : break;
			case 'protean' : break;
			case 'string' : break;
			case 'undefined' : break;

			default : throw new Error( 'bad id: ' + string );
		}

		return jion_id.create( 'name', string );
	}

	if( split.length > 2 )
	{
		throw new Error( );
	}
	else if( split.length === 2 )
	{
		return(
			jion_id.create(
				'packet', packet,
				'ray:init', split,
				'unit', split[ 0 ],
				'name', split[ 1 ]
			)
		);
	}
	else
	{
		return(
			jion_id.create(
				'packet', packet,
				'ray:init', split,
				'name', split[ 0 ]
			)
		);
	}
};


/*
| Compares two ids.
*/
jion_id.compare =
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
jion_proto.lazyValue(
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
jion_proto.lazyValue(
	prototype,
	'$abstractString',
	function( )
{
	return shorthand.$string( this.string + ':abstract' );
}
);


/*
| This id as path variable name.
|
| Used as package export.
*/
jion_proto.lazyValue(
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
| relative path to the procjet's root dir.
*/
jion_proto.lazyValue(
	prototype,
	'rootPath',
	function( )
{
	return this.unit ? '../' : './';
}
);


/*
| This id as global varname
*/
jion_proto.lazyValue(
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
jion_proto.lazyValue(
	prototype,
	'$global',
	function( )
{
	return shorthand.$var( this.global );
}
);


/*
| This name as ast string.
*/
jion_proto.lazyValue(
	prototype,
	'$name',
	function( )
{
	return shorthand.$string( this.name );
}
);


/*
| This id as string.
*/
jion_proto.lazyValue(
	prototype,
	'string',
	function( )
{
	if( this.unit )
	{
		return this.unit + '_' + this.name;
	}
	else
	{
		return this.name;
	}
}
);


/*
| This id as ast string.
*/
jion_proto.lazyValue(
	prototype,
	'$string',
	function( )
{
	return shorthand.$string( this.string );
}
);


} )( );
