/*
| This is an auto generated file.
|
| Editing this might be rather futile.
*/


/*
| Capsule
*/
(
function( ) {
'use strict';


/*
| The typed immutable.
*/
let ast_funcArg = NODE ? module.exports : module;


let tim_proto = tim.proto;


/*
| Constructor.
*/
var
	Constructor,
	prototype;


Constructor =
	function(
		v_comment,
		v_name
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.comment = v_comment;

	this.name = v_name;

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
| Creates a new funcArg object.
*/
ast_funcArg.create =
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

				throw new Error( );
		}
	}

/**/if( CHECK )
/**/{
/**/	if( v_comment === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_comment !== undefined )
/**/	{
/**/		if( typeof( v_comment ) !== 'string' && !( v_comment instanceof String ) )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_name === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_name !== undefined )
/**/	{
/**/		if( typeof( v_name ) !== 'string' && !( v_name instanceof String ) )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if( inherit && v_comment === inherit.comment && v_name === inherit.name )
	{
		return inherit;
	}

	return new Constructor( v_comment, v_name );
};


/*
| Reflection.
*/
prototype.reflect = 'ast_funcArg';


/*
| Type reflection.
*/
prototype.timtype = ast_funcArg;


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

	if( obj.reflect !== 'ast_funcArg' )
	{
		return false;
	}

	return this.comment === obj.comment && this.name === obj.name;
};


}
)( );
