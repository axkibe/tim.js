/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	jion$id;


if( NODE )
{
	jion$id = module.exports;
}
else
{
	jion$id = { };
}


var
	jion_proto;


/*
| Capsule
*/
(
function( ) {
'use strict';


/*
| Node includes.
*/
if( NODE )
{
	require( './proto' );
}


/*
| Abstract constructor.
*/
var
	AbstractConstructor;


AbstractConstructor =
	function(
		ray, // ray
		v_name, // the name part of the id if applicable
		v_packet // the jion is in/from a package
	)
{
	if( v_name !== undefined )
	{
		this.name = v_name;
	}

	if( v_packet !== undefined )
	{
		this.packet = v_packet;
	}

	this.ray = ray;

	this._ray = ray;

	if( FREEZE )
	{
		Object.freeze( ray );

		Object.freeze( this );
	}
};


/*
| Constructor.
*/
var
	Constructor,
	prototype;


Constructor =
	function(
		ray, // ray
		v_name, // the name part of the id if applicable
		v_packet // the jion is in/from a package
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
	}

	if( v_name !== undefined )
	{
		this.name = v_name;
	}

	if( v_packet !== undefined )
	{
		this.packet = v_packet;
	}

	this.ray = ray;

	this._ray = ray;

	if( FREEZE )
	{
		Object.freeze( ray );

		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


jion$id.prototype = prototype;


/*
| Creates an id object.
*/
jion$id.abstract =
AbstractConstructor.prototype.abstract =
prototype.abstract =
	function(
		// free strings
	)
{
	var
		a,
		aZ,
		arg,
		inherit,
		o,
		r,
		rZ,
		ray,
		rayDup,
		v_name,
		v_packet;

	if( this !== jion$id )
	{
		inherit = this;

		ray = inherit.ray;

		rayDup = false;

		v_name = this.name;

		v_packet = this.packet;
	}
	else
	{
		ray = [ ];

		rayDup = true;
	}

	for(
		a = 0, aZ = arguments.length;
		a < aZ;
		a += 2
	)
	{
		arg = arguments[ a + 1 ];

		switch( arguments[ a ] )
		{
			case 'name' :

				if( arg !== pass )
				{
					v_name = arg;
				}

				break;

			case 'packet' :

				if( arg !== pass )
				{
					v_packet = arg;
				}

				break;

			case 'ray:init' :

/**/			if( CHECK )
/**/			{
/**/				if( !Array.isArray( arg ) )
/**/				{
/**/					throw new Error( );
/**/				}
/**/			}

				ray = arg;

				rayDup = 'init';

				break;

			case 'ray:append' :

				if( !rayDup )
				{
					ray = ray.slice( );

					rayDup = true;
				}

				ray.push( arg );

				break;

			case 'ray:insert' :

				if( !rayDup )
				{
					ray = ray.slice( );

					rayDup = true;
				}

				ray.splice( arg, 0, arguments[ ++a + 1 ] );

				break;

			case 'ray:remove' :

				if( !rayDup )
				{
					ray = ray.slice( );

					rayDup = true;
				}

				ray.splice( arg, 1 );

				break;

			case 'ray:set' :

				if( !rayDup )
				{
					ray = ray.slice( );

					rayDup = true;
				}

				ray[ arg ] = arguments[ ++a + 1 ];

				break;

			default :

/**/			if( CHECK )
/**/			{
/**/				throw new Error( );
/**/			}
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_name === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_name !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_name ) !== 'string'
/**/			&&
/**/			!( v_name instanceof String )
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_packet === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_packet !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_packet ) !== 'string'
/**/			&&
/**/			!( v_packet instanceof String )
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	for(
/**/		r = 0, rZ = ray.length;
/**/		r < rZ;
/**/		++r
/**/	)
/**/	{
/**/		o = ray[ r ];
/**/
/**/		if( typeof( o ) !== 'string' && !( o instanceof String ) )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if(
		inherit
		&&
		rayDup === false
		&&
		v_name === inherit.name
		&&
		v_packet === inherit.packet
	)
	{
		return inherit;
	}

	return new AbstractConstructor( ray, v_name, v_packet );
};


/*
| Creates a new id object.
*/
jion$id.create =
AbstractConstructor.prototype.create =
prototype.create =
	function(
		// free strings
	)
{
	var
		a,
		aZ,
		arg,
		inherit,
		o,
		r,
		rZ,
		ray,
		rayDup,
		v_name,
		v_packet;

	if( this !== jion$id )
	{
		inherit = this;

		ray = inherit.ray;

		rayDup = false;

		v_name = this.name;

		v_packet = this.packet;
	}
	else
	{
		ray = [ ];

		rayDup = true;
	}

	for(
		a = 0, aZ = arguments.length;
		a < aZ;
		a += 2
	)
	{
		arg = arguments[ a + 1 ];

		switch( arguments[ a ] )
		{
			case 'name' :

				if( arg !== pass )
				{
					v_name = arg;
				}

				break;

			case 'packet' :

				if( arg !== pass )
				{
					v_packet = arg;
				}

				break;

			case 'ray:init' :

/**/			if( CHECK )
/**/			{
/**/				if( !Array.isArray( arg ) )
/**/				{
/**/					throw new Error( );
/**/				}
/**/			}

				ray = arg;

				rayDup = 'init';

				break;

			case 'ray:append' :

				if( !rayDup )
				{
					ray = ray.slice( );

					rayDup = true;
				}

				ray.push( arg );

				break;

			case 'ray:insert' :

				if( !rayDup )
				{
					ray = ray.slice( );

					rayDup = true;
				}

				ray.splice( arg, 0, arguments[ ++a + 1 ] );

				break;

			case 'ray:remove' :

				if( !rayDup )
				{
					ray = ray.slice( );

					rayDup = true;
				}

				ray.splice( arg, 1 );

				break;

			case 'ray:set' :

				if( !rayDup )
				{
					ray = ray.slice( );

					rayDup = true;
				}

				ray[ arg ] = arguments[ ++a + 1 ];

				break;

			default :

/**/			if( CHECK )
/**/			{
/**/				throw new Error( );
/**/			}
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_name === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_name !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_name ) !== 'string'
/**/			&&
/**/			!( v_name instanceof String )
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_packet === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_packet !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_packet ) !== 'string'
/**/			&&
/**/			!( v_packet instanceof String )
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	for(
/**/		r = 0, rZ = ray.length;
/**/		r < rZ;
/**/		++r
/**/	)
/**/	{
/**/		o = ray[ r ];
/**/
/**/		if( typeof( o ) !== 'string' && !( o instanceof String ) )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if(
		inherit
		&&
		rayDup === false
		&&
		v_name === inherit.name
		&&
		v_packet === inherit.packet
	)
	{
		return inherit;
	}

	return new Constructor( ray, v_name, v_packet );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'id:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'id:abstract';


/*
| Reflection.
*/
prototype.reflect = 'id';


/*
| Name Reflection.
*/
prototype.reflectName = 'id';


/*
| Sets values by path.
*/
prototype.setPath = jion_proto.setPath;


/*
| Gets values by path
*/
prototype.getPath = jion_proto.getPath;


/*
| Returns the ray with an element appended.
*/
prototype.append = jion_proto.rayAppend;


/*
| Returns the ray with another ray appended.
*/
prototype.appendRay = jion_proto.rayAppendRay;


/*
| Returns the length of the ray.
*/
jion_proto.lazyValue( prototype, 'length', jion_proto.rayLength );


/*
| Returns one element from the ray.
*/
prototype.get = jion_proto.rayGet;


/*
| Returns the ray with one element inserted.
*/
prototype.insert = jion_proto.rayInsert;


/*
| Returns the ray with one element removed.
*/
prototype.remove = jion_proto.rayRemove;


/*
| Returns the ray with one element set.
*/
prototype.set = jion_proto.raySet;


/*
| Tests equality of object.
*/
prototype.equals =
	function(
		obj // object to compare to
	)
{
	var
		a,
		aZ;

	if( this === obj )
	{
		return true;
	}

	if( !obj )
	{
		return false;
	}

	if( obj.reflect !== 'id' )
	{
		return false;
	}

	if( this.ray !== obj.ray )
	{
		if( this.ray.length !== obj.ray.length )
		{
			return false;
		}

		for(
			a = 0, aZ = this.ray.length;
			a < aZ;
			++a
		)
		{
			if(
				this.ray[ a ] !== obj.ray[ a ]
				&&
				(
					!this.ray[ a ].equals
					||
					!this.ray[ a ].equals( obj.ray[ a ] )
				)
			)
			{
				return false;
			}
		}
	}

	return this.name === obj.name && this.packet === obj.packet;
};


}
)( );
