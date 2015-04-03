/*
| This is an auto generated file.
|
| DO NOT EDIT!
*/


/*
| Export.
*/
var
	jion_concern;


if( SERVER )
{
	jion_concern = module.exports;
}
else
{
	jion_concern = { };
}


/*
| Imports.
*/
var
	jools,
	jion_id,
	jion_proto,
	jion_stringRay;


/*
| Capsule
*/
(
function( ) {
'use strict';


/*
| Node includes.
*/
if( SERVER )
{
	jools = require( '../../src/jools/jools' );

	jion_id = require( '../../src/jion/id' );

	jion_proto = require( '../../src/jion/proto' );

	jion_stringRay = require( '../../src/jion/stringRay' );
}


/*
| Abstract constructor.
*/
var
	AbstractConstructor;


AbstractConstructor =
	function(
		v_args, // concerns arguments
		v_func, // concerns function to call
		v_id, // concerns id
		v_member // concerns member call
	)
{
	if( v_args !== undefined )
	{
		this.args = v_args;
	}

	if( v_func !== undefined )
	{
		this.func = v_func;
	}

	if( v_id !== undefined )
	{
		this.id = v_id;
	}

	if( v_member !== undefined )
	{
		this.member = v_member;
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
		v_args, // concerns arguments
		v_func, // concerns function to call
		v_id, // concerns id
		v_member // concerns member call
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
	}

	if( v_args !== undefined )
	{
		this.args = v_args;
	}

	if( v_func !== undefined )
	{
		this.func = v_func;
	}

	if( v_id !== undefined )
	{
		this.id = v_id;
	}

	if( v_member !== undefined )
	{
		this.member = v_member;
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


jion_concern.prototype = prototype;


/*
| Creates an concern object.
*/
jion_concern.abstract =
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
		v_args,
		v_func,
		v_id,
		v_member;

	if( this !== jion_concern )
	{
		inherit = this;

		v_args = this.args;

		v_func = this.func;

		v_id = this.id;

		v_member = this.member;
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
			case 'args' :

				if( arg !== pass )
				{
					v_args = arg;
				}

				break;

			case 'func' :

				if( arg !== pass )
				{
					v_func = arg;
				}

				break;

			case 'id' :

				if( arg !== pass )
				{
					v_id = arg;
				}

				break;

			case 'member' :

				if( arg !== pass )
				{
					v_member = arg;
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
/**/	if( v_args === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_args !== undefined )
/**/	{
/**/		if( v_args.reflect !== 'jion_stringRay' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_func === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_func !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_func ) !== 'string'
/**/			&&
/**/			!( v_func instanceof String )
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_id === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_id !== undefined )
/**/	{
/**/		if( v_id.reflect !== 'jion_id' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_member === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_member !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_member ) !== 'string'
/**/			&&
/**/			!( v_member instanceof String )
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_args === inherit.args
			||
			v_args !== undefined && v_args.equals( inherit.args )
		)
		&&
		v_func === inherit.func
		&&
		(
			v_id === inherit.id
			||
			v_id !== undefined && v_id.equals( inherit.id )
		)
		&&
		v_member === inherit.member
	)
	{
		return inherit;
	}

	return new AbstractConstructor( v_args, v_func, v_id, v_member );
};


/*
| Creates a new concern object.
*/
jion_concern.create =
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
		v_args,
		v_func,
		v_id,
		v_member;

	if( this !== jion_concern )
	{
		inherit = this;

		v_args = this.args;

		v_func = this.func;

		v_id = this.id;

		v_member = this.member;
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
			case 'args' :

				if( arg !== pass )
				{
					v_args = arg;
				}

				break;

			case 'func' :

				if( arg !== pass )
				{
					v_func = arg;
				}

				break;

			case 'id' :

				if( arg !== pass )
				{
					v_id = arg;
				}

				break;

			case 'member' :

				if( arg !== pass )
				{
					v_member = arg;
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
/**/	if( v_args === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_args !== undefined )
/**/	{
/**/		if( v_args.reflect !== 'jion_stringRay' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_func === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_func !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_func ) !== 'string'
/**/			&&
/**/			!( v_func instanceof String )
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_id === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_id !== undefined )
/**/	{
/**/		if( v_id.reflect !== 'jion_id' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_member === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_member !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_member ) !== 'string'
/**/			&&
/**/			!( v_member instanceof String )
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_args === inherit.args
			||
			v_args !== undefined && v_args.equals( inherit.args )
		)
		&&
		v_func === inherit.func
		&&
		(
			v_id === inherit.id
			||
			v_id !== undefined && v_id.equals( inherit.id )
		)
		&&
		v_member === inherit.member
	)
	{
		return inherit;
	}

	return new Constructor( v_args, v_func, v_id, v_member );
};


/*
| Reflection.
*/
prototype.reflect = 'jion_concern';


/*
| Name Reflection.
*/
prototype.reflectName = 'concern';


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

	if( obj.reflect !== 'jion_concern' )
	{
		return false;
	}

	return (
		(
			this.args === obj.args
			||
			this.args !== undefined && this.args.equals( obj.args )
		)
		&&
		this.func === obj.func
		&&
		(
			this.id === obj.id
			||
			this.id !== undefined && this.id.equals( obj.id )
		)
		&&
		this.member === obj.member
	);
};


}
)( );
