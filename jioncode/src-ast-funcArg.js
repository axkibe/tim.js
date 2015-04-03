/*
| This is an auto generated file.
|
| DO NOT EDIT!
*/


/*
| Export.
*/
var
	ast_funcArg;


if( SERVER )
{
	ast_funcArg = module.exports;
}
else
{
	ast_funcArg = { };
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
		v_comment, // argument comment
		v_name // argument name
	)
{
	if( v_comment !== undefined )
	{
		this.comment = v_comment;
	}

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
		v_comment, // argument comment
		v_name // argument name
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
	}

	if( v_comment !== undefined )
	{
		this.comment = v_comment;
	}

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
| Prototype shortcut
*/
prototype = Constructor.prototype;


ast_funcArg.prototype = prototype;


/*
| Creates an funcArg object.
*/
ast_funcArg.abstract =
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
		v_comment,
		v_name;

	if( this !== ast_funcArg )
	{
		inherit = this;

		v_comment = this.comment;

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
			case 'comment' :

				if( arg !== pass )
				{
					v_comment = arg;
				}

				break;

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
/**/	if( v_comment !== null && v_comment !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_comment ) !== 'string'
/**/			&&
/**/			!( v_comment instanceof String )
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_name !== null && v_name !== undefined )
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

	if(
		inherit
		&&
		v_comment === inherit.comment
		&&
		v_name === inherit.name
	)
	{
		return inherit;
	}

	return new AbstractConstructor( v_comment, v_name );
};


/*
| Creates a new funcArg object.
*/
ast_funcArg.create =
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
		v_comment,
		v_name;

	if( this !== ast_funcArg )
	{
		inherit = this;

		v_comment = this.comment;

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
			case 'comment' :

				if( arg !== pass )
				{
					v_comment = arg;
				}

				break;

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
/**/	if( v_comment !== null && v_comment !== undefined )
/**/	{
/**/		if(
/**/			typeof( v_comment ) !== 'string'
/**/			&&
/**/			!( v_comment instanceof String )
/**/		)
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_name !== null && v_name !== undefined )
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

	if(
		inherit
		&&
		v_comment === inherit.comment
		&&
		v_name === inherit.name
	)
	{
		return inherit;
	}

	return new Constructor( v_comment, v_name );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'ast_funcArg:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'funcArg:abstract';


/*
| Reflection.
*/
prototype.reflect = 'ast_funcArg';


/*
| Name Reflection.
*/
prototype.reflectName = 'funcArg';


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

	if( obj.reflect !== 'ast_funcArg' )
	{
		return false;
	}

	return this.comment === obj.comment && this.name === obj.name;
};


}
)( );
