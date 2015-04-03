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
		id : 'jion_id',
		attributes :
		{
			'name' :
			{
				comment : 'the name part of the id if applicable',
				type : 'string',
				// FIXME should not be allowed undefined
				defaultValue : 'undefined'
			},
			'unit' :
			{
				comment : 'the unit part of the id if applicable',
				type : 'string',
				defaultValue : 'undefined'
			}
		}
	};
}


var
	jion_id,
	jools,
	prototype,
	shorthand;

jion_id = require( '../jion/this' )( module );

prototype = jion_id.prototype;

jools = require( '../jools/jools' );

shorthand = require( '../ast/shorthand' );


/*
| Create the id from a string specifier.
*/
jion_id.createFromString =
	function(
		string
	)
{
	var
		split;

	split = string.split( '_' );

	if( split.length <= 1 )
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

	if( split.length !== 2 )
	{
		throw new Error( );
	}

	return(
		jion_id.create(
			'unit', split[ 0 ],
			'name', split[ 1 ]
		)
	);
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
	if( o1.unit === o2.unit )
	{
		if( o1.name === o2.name )
		{
			return 0;
		}
		else if( o1.name > o2.name )
		{
			return 1;
		}
		else
		{
			return -1;
		}
	}

	if( !o1.unit && o2.unit )
	{
		return 1;
	}

	if( o1.unit && !o2.unit )
	{
		return -1;
	}

	if( o1.unit > o2.unit )
	{
		return 1;
	}
	else
	{
		return -1;
	}
};



/*
| This name as ast string.
*/
jools.lazyValue(
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
jools.lazyValue(
	prototype,
	'$abstractString',
	function( )
{
	return shorthand.$string( this.string + ':abstract' );
}
);


/*
| This id as global varname
*/
jools.lazyValue(
	prototype,
	'global',
	function( )
{
	return(
		this.unit
		? this.unit + '_' + this.name
		: this.name
	);
}
);


/*
| This id as ast variable.
*/
jools.lazyValue(
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
jools.lazyValue(
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
jools.lazyValue(
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
jools.lazyValue(
	prototype,
	'$string',
	function( )
{
	return shorthand.$string( this.string );
}
);


} )( );
