/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	jion$ast_new;


if( NODE )
{
	jion$ast_new = module.exports;
}
else
{
	jion$ast_new = { };
}


var
	jion$ast_call,
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
	jion$ast_call = require( '../ast/call' );

	require( '../proto' );
}


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
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
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


jion$ast_new.prototype = prototype;


/*
| Creates a new new object.
*/
jion$ast_new.create =
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

	if( this !== jion$ast_new )
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

				throw new Error( );
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
			v_call.equals( inherit.call )
		)
	)
	{
		return inherit;
	}

	return new Constructor( v_call );
};


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

	return this.call === obj.call || this.call.equals( obj.call );
};


}
)( );
