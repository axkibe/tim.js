/*
| This is an auto generated file.
|
| DO NOT EDIT!
*/


/*
| Export.
*/
var
	ast_var;


if( SERVER )
{
	ast_var = module.exports;
}
else
{
	ast_var = { };
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
		v_name // the variable name
	)
{
	if( v_name !== undefined )
	{
		this.name = v_name;
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
		v_name // the variable name
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
	}

	this.name = v_name;

	this._init( );

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


ast_var.prototype = prototype;


/*
| Creates an var object.
*/
ast_var.abstract =
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
		v_name;

	if( this !== ast_var )
	{
		inherit = this;

		v_name = this.name;
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
/**/}

	if( inherit && v_name === inherit.name )
	{
		return inherit;
	}

	return new AbstractConstructor( v_name );
};


/*
| Creates a new var object.
*/
ast_var.create =
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
		v_name;

	if( this !== ast_var )
	{
		inherit = this;

		v_name = this.name;
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

			default :

/**/			if( CHECK )
/**/			{
/**/				throw new Error( );
/**/			}
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_name === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_name === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		typeof( v_name ) !== 'string'
/**/		&&
/**/		!( v_name instanceof String )
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if( inherit && v_name === inherit.name )
	{
		return inherit;
	}

	return new Constructor( v_name );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'ast_var:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'var:abstract';


/*
| Reflection.
*/
prototype.reflect = 'ast_var';


/*
| Name Reflection.
*/
prototype.reflectName = 'var';


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

	if( obj.reflect !== 'ast_var' )
	{
		return false;
	}

	return this.name === obj.name;
};


}
)( );
