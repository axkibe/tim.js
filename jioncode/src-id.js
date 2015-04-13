/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	jion_id;


if( NODE )
{
	jion_id = module.exports;
}
else
{
	jion_id = { };
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
		v_name, // the name part of the id if applicable
		v_packet, // the jion is in/from a package
		v_unit // the unit part of the id if applicable
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

	if( v_unit !== undefined )
	{
		this.unit = v_unit;
	}

	if( FREEZE )
	{
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
		v_name, // the name part of the id if applicable
		v_packet, // the jion is in/from a package
		v_unit // the unit part of the id if applicable
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

	if( v_unit !== undefined )
	{
		this.unit = v_unit;
	}

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


jion_id.prototype = prototype;


/*
| Creates an id object.
*/
jion_id.abstract =
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
		v_name,
		v_packet,
		v_unit;

	if( this !== jion_id )
	{
		inherit = this;

		v_name = this.name;

		v_packet = this.packet;

		v_unit = this.unit;
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

			case 'unit' :

				if( arg !== pass )
				{
					v_unit = arg;
				}

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
/**/	if( v_unit === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_unit !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_unit ) !== 'string'
/**/			&&
/**/			!( v_unit instanceof String )
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if(
		inherit
		&&
		v_name === inherit.name
		&&
		v_packet === inherit.packet
		&&
		v_unit === inherit.unit
	)
	{
		return inherit;
	}

	return new AbstractConstructor( v_name, v_packet, v_unit );
};


/*
| Creates a new id object.
*/
jion_id.create =
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
		v_name,
		v_packet,
		v_unit;

	if( this !== jion_id )
	{
		inherit = this;

		v_name = this.name;

		v_packet = this.packet;

		v_unit = this.unit;
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

			case 'unit' :

				if( arg !== pass )
				{
					v_unit = arg;
				}

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
/**/	if( v_unit === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_unit !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_unit ) !== 'string'
/**/			&&
/**/			!( v_unit instanceof String )
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if(
		inherit
		&&
		v_name === inherit.name
		&&
		v_packet === inherit.packet
		&&
		v_unit === inherit.unit
	)
	{
		return inherit;
	}

	return new Constructor( v_name, v_packet, v_unit );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'jion_id:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'id:abstract';


/*
| Reflection.
*/
prototype.reflect = 'jion_id';


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

	if( obj.reflect !== 'jion_id' )
	{
		return false;
	}

	return (
		this.name === obj.name
		&&
		this.packet === obj.packet
		&&
		this.unit === obj.unit
	);
};


}
)( );
