/*
| This is an auto generated file.
|
| DO NOT EDIT!
*/


/*
| Export.
*/
var
	ast_check;


if( SERVER )
{
	ast_check = module.exports;
}
else
{
	ast_check = { };
}


/*
| Imports.
*/
var
	jools,
	ast_block,
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

	ast_block = require( '../../src/ast/block' );

	jion_proto = require( '../../src/jion/proto' );
}


/*
| Abstract constructor.
*/
var
	AbstractConstructor;


AbstractConstructor =
	function(
		v_block // the code block
	)
{
	if( v_block !== undefined )
	{
		this.block = v_block;
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
		v_block // the code block
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
	}

	this.block = v_block;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


ast_check.prototype = prototype;


/*
| Creates an check object.
*/
ast_check.abstract =
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
		v_block;

	if( this !== ast_check )
	{
		inherit = this;

		v_block = this.block;
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
			case 'block' :

				if( arg !== pass )
				{
					v_block = arg;
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
/**/	if( v_block === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_block !== undefined )
/**/	{
/**/		if( v_block.reflect !== 'ast_block' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_block === inherit.block
			||
			v_block !== undefined && v_block.equals( inherit.block )
		)
	)
	{
		return inherit;
	}

	return new AbstractConstructor( v_block );
};


/*
| Creates a new check object.
*/
ast_check.create =
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
		v_block;

	if( this !== ast_check )
	{
		inherit = this;

		v_block = this.block;
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
			case 'block' :

				if( arg !== pass )
				{
					v_block = arg;
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
/**/	if( v_block === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_block === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_block.reflect !== 'ast_block' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		(
			v_block === inherit.block
			||
			v_block.equals && v_block.equals( inherit.block )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_block );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'ast_check:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'check:abstract';


/*
| Reflection.
*/
prototype.reflect = 'ast_check';


/*
| Name Reflection.
*/
prototype.reflectName = 'check';


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

	if( obj.reflect !== 'ast_check' )
	{
		return false;
	}

	return (
		this.block === obj.block
		||
		this.block.equals && this.block.equals( obj.block )
	);
};


}
)( );
