/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	jion$ast_boolean;


if( NODE )
{
	jion$ast_boolean = module.exports;
}
else
{
	jion$ast_boolean = { };
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
	jion_proto = require( 'jion' ).proto;
}


/*
| Constructor.
*/
var
	Constructor,
	prototype;


Constructor =
	function(
		v_boolean // the boolean
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.boolean = v_boolean;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


jion$ast_boolean.prototype = prototype;


/*
| Creates a new boolean object.
*/
jion$ast_boolean.create =
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
		v_boolean;

	if( this !== jion$ast_boolean )
	{
		inherit = this;

		v_boolean = this.boolean;
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
			case 'boolean' :

				if( arg !== pass )
				{
					v_boolean = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_boolean === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_boolean === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_boolean ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if( inherit && v_boolean === inherit.boolean )
	{
		return inherit;
	}

	return new Constructor( v_boolean );
};


/*
| Reflection.
*/
prototype.reflect = 'ast_boolean';


/*
| Name Reflection.
*/
prototype.reflectName = 'boolean';


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

	if( obj.reflect !== 'ast_boolean' )
	{
		return false;
	}

	return this.boolean === obj.boolean;
};


}
)( );
