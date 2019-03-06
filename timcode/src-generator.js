'use strict';


/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
const tt_timspec_timspec = require( './timspec/timspec.js' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_constructorList,
		v_creatorHasFreeStringsParser,
		v_timspec
	)
{
	this.__lazy = { };

	this.constructorList = v_constructorList;

	this.creatorHasFreeStringsParser = v_creatorHasFreeStringsParser;

	this.timspec = v_timspec;

	Object.freeze( this );
};


/*
| Prototype shortcut
*/
const prototype = Constructor.prototype;


self.prototype = prototype;


/*
| Creates a new object.
*/
self.create =
prototype.create =
	function(
		// free strings
	)
{
	let inherit;

	let v_constructorList;

	let v_creatorHasFreeStringsParser;

	let v_timspec;

	if( this !== self )
	{
		inherit = this;

		v_constructorList = this.constructorList;

		v_creatorHasFreeStringsParser = this.creatorHasFreeStringsParser;

		v_timspec = this.timspec;
	}

	for(
		let a = 0, al = arguments.length;
		a < al;
		a += 2
	)
	{
		let arg = arguments[ a + 1 ];

		switch( arguments[ a ] )
		{
			case 'constructorList' :

				if( arg !== pass )
				{
					v_constructorList = arg;
				}

				break;

			case 'creatorHasFreeStringsParser' :

				if( arg !== pass )
				{
					v_creatorHasFreeStringsParser = arg;
				}

				break;

			case 'timspec' :

				if( arg !== pass )
				{
					v_timspec = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if( typeof( v_creatorHasFreeStringsParser ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_timspec.timtype !== tt_timspec_timspec )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		v_constructorList === inherit.constructorList
		&&
		v_creatorHasFreeStringsParser === inherit.creatorHasFreeStringsParser
		&&
		(
			v_timspec === inherit.timspec
			||
			v_timspec.equals( inherit.timspec )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_constructorList, v_creatorHasFreeStringsParser, v_timspec );
};


/*
| Type reflection.
*/
prototype.timtype = self;


/*
| Sets values by path.
*/
prototype.setPath = tim_proto.setPath;


/*
| Gets values by path
*/
prototype.getPath = tim_proto.getPath;


/*
| Tests equality of object.
*/
prototype.equals =
	function(
		obj // object to compare to
	)
{
	if( this === obj )
	{
		return true;
	}

	if( !obj )
	{
		return false;
	}

	if( obj.timtype !== self )
	{
		return false;
	}

	return (
		this.constructorList === obj.constructorList
		&&
		this.creatorHasFreeStringsParser === obj.creatorHasFreeStringsParser
		&&
		(
			this.timspec === obj.timspec
			||
			this.timspec.equals( obj.timspec )
		)
	);
};
