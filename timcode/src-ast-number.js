/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/
var
	tim_proto,
	timModules;


/*
| The typed immutable.
*/
var
	ast_number;


if( !ast_number )
{
	ast_number = { };
}


if( !NODE )
{
/**/if( CHECK )
/**/{
/**/	if( timModules.ast_number !== undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	timModules.ast_number = ast_number;
}


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
	tim_proto = tim.proto;
}


/*
| Constructor.
*/
var
	Constructor,
	prototype;


Constructor =
	function(
		v_number
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.number = v_number;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


ast_number.prototype = prototype;


/*
| Creates a new number object.
*/
ast_number.create =
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
		v_number;

	if( this !== ast_number )
	{
		inherit = this;

		v_number = this.number;
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
			case 'number' :

				if( arg !== pass )
				{
					v_number = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_number === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_number === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_number ) !== 'number' || Number.isNaN( v_number ) )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if( inherit && v_number === inherit.number )
	{
		return inherit;
	}

	return new Constructor( v_number );
};


/*
| Reflection.
*/
prototype.reflect = 'ast_number';


/*
| Type reflection.
*/
prototype.type = ast_number;


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

	if( obj.reflect !== 'ast_number' )
	{
		return false;
	}

	return this.number === obj.number;
};


}
)( );
