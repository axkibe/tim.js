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
	ast_check;


if( !ast_check )
{
	ast_check = { };
}


if( !NODE )
{
/**/if( CHECK )
/**/{
/**/	if( timModules.ast_check !== undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	timModules.ast_check = ast_check;
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
		v_block
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
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
| Creates a new check object.
*/
ast_check.create =
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

				throw new Error( );
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
			v_block.equals( inherit.block )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_block );
};


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

	if( obj.reflect !== 'ast_check' )
	{
		return false;
	}

	return this.block === obj.block || this.block.equals( obj.block );
};


}
)( );