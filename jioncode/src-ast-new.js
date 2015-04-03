/*
| This is an auto generated file.
|
| DO NOT EDIT!
*/


/*
| Export.
*/
var
	ast_new;


if( SERVER )
{
	ast_new = module.exports;
}
else
{
	ast_new = { };
}


/*
| Imports.
*/
var
	jools,
	ast_call,
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

	ast_call = require( '../../src/ast/call' );

	jion_proto = require( '../../src/jion/proto' );
}


/*
| Abstract constructor.
*/
var
	AbstractConstructor;


AbstractConstructor =
	function(
		v_call // the constrcutor call
	)
{
	if( v_call !== undefined )
	{
		this.call = v_call;
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
		v_call // the constrcutor call
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
	}

	this.call = v_call;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


ast_new.prototype = prototype;


/*
| Creates an new object.
*/
ast_new.abstract =
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
		v_call;

	if( this !== ast_new )
	{
		inherit = this;

		v_call = this.call;
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
			case 'call' :

				if( arg !== pass )
				{
					v_call = arg;
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
/**/	if( v_call === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_call !== undefined )
/**/	{
/**/		if( v_call.reflect !== 'ast_call' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_call === inherit.call
			||
			v_call !== undefined && v_call.equals( inherit.call )
		)
	)
	{
		return inherit;
	}

	return new AbstractConstructor( v_call );
};


/*
| Creates a new new object.
*/
ast_new.create =
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
		v_call;

	if( this !== ast_new )
	{
		inherit = this;

		v_call = this.call;
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
			case 'call' :

				if( arg !== pass )
				{
					v_call = arg;
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
/**/	if( v_call === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_call === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_call.reflect !== 'ast_call' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_call === inherit.call
			||
			v_call.equals && v_call.equals( inherit.call )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_call );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'ast_new:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'new:abstract';


/*
| Reflection.
*/
prototype.reflect = 'ast_new';


/*
| Name Reflection.
*/
prototype.reflectName = 'new';


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

	if( obj.reflect !== 'ast_new' )
	{
		return false;
	}

	return (
		this.call === obj.call
		||
		this.call.equals && this.call.equals( obj.call )
	);
};


}
)( );
