/*
| This is an auto generated file.
|
| DO NOT EDIT!
*/


/*
| Export.
*/
var
	ast_boolean;


if( SERVER )
{
	ast_boolean = module.exports;
}
else
{
	ast_boolean = { };
}


/*
| Imports.
*/
var
	jools,
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
if( SERVER )
{
	jools = require( '../../src/jools/jools' );

	jion_proto = require( '../../src/jion/proto' );
}


/*
| Abstract constructor.
*/
var
	AbstractConstructor;


AbstractConstructor =
	function(
		v_boolean // the boolean
	)
{
	if( v_boolean !== undefined )
	{
		this.boolean = v_boolean;
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
		v_boolean // the boolean
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
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


ast_boolean.prototype = prototype;


/*
| Creates an boolean object.
*/
ast_boolean.abstract =
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
		v_boolean;

	if( this !== ast_boolean )
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

/**/			if( CHECK )
/**/			{
/**/				throw new Error( );
/**/			}
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_boolean === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_boolean !== undefined )
/**/	{
/**/		if( typeof( v_boolean ) !== 'boolean' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if( inherit && v_boolean === inherit.boolean )
	{
		return inherit;
	}

	return new AbstractConstructor( v_boolean );
};


/*
| Creates a new boolean object.
*/
ast_boolean.create =
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
		v_boolean;

	if( this !== ast_boolean )
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

/**/			if( CHECK )
/**/			{
/**/				throw new Error( );
/**/			}
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
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'ast_boolean:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'boolean:abstract';


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
