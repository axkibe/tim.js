/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
'use strict';


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_associativity,
		v_astCreator,
		v_handler,
		v_prec
	)
{
	this.associativity = v_associativity;

	this.astCreator = v_astCreator;

	this.handler = v_handler;

	this.prec = v_prec;

	Object.freeze( this );

/**/if( CHECK )
/**/{
/**/	this._check( );
/**/}
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

	let v_associativity;

	let v_astCreator;

	let v_handler;

	let v_prec;

	if( this !== self )
	{
		inherit = this;

		v_associativity = this.associativity;

		v_astCreator = this.astCreator;

		v_handler = this.handler;

		v_prec = this.prec;
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
			case 'associativity' :

				if( arg !== pass )
				{
					v_associativity = arg;
				}

				break;

			case 'astCreator' :

				if( arg !== pass )
				{
					v_astCreator = arg;
				}

				break;

			case 'handler' :

				if( arg !== pass )
				{
					v_handler = arg;
				}

				break;

			case 'prec' :

				if( arg !== pass )
				{
					v_prec = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

	if( v_associativity === undefined )
	{
		v_associativity = 'n/a';
	}

/**/if( CHECK )
/**/{
/**/	if( typeof( v_associativity ) !== 'string' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_astCreator !== undefined && typeof( v_astCreator ) !== 'object' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_handler ) !== 'string' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		v_prec !== undefined
/**/		&&
/**/		(
/**/			typeof( v_prec ) !== 'number'
/**/			||
/**/			Number.isNaN( v_prec )
/**/			||
/**/			Math.floor( v_prec ) !== v_prec
/**/		)
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		v_associativity === inherit.associativity
		&&
		v_astCreator === inherit.astCreator
		&&
		v_handler === inherit.handler
		&&
		v_prec === inherit.prec
	)
	{
		return inherit;
	}

	return new Constructor( v_associativity, v_astCreator, v_handler, v_prec );
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
		this.associativity === obj.associativity
		&&
		this.astCreator === obj.astCreator
		&&
		this.handler === obj.handler
		&&
		this.prec === obj.prec
	);
};
