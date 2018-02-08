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
let ast_new = NODE ? module.exports : module;


const ast_call = require( '../ast/call' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_call
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
const prototype = Constructor.prototype;


ast_new.prototype = prototype;


/*
| Creates a new new object.
*/
ast_new.create =
prototype.create =
	function(
		// free strings
	)
{
	let inherit;

	let v_call;

	if( this !== ast_new )
	{
		inherit = this;

		v_call = this.call;
	}

	for(
		let a = 0, al = arguments.length;
		a < al;
		a += 2
	)
	{
		let arg = arguments[ a + 1 ];

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
/**/	if( v_call.timtype !== ast_call )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if( inherit && ( v_call === inherit.call || v_call.equals( inherit.call ) ) )
	{
		return inherit;
	}

	return new Constructor( v_call );
};


/*
| Type reflection.
*/
prototype.timtype = ast_new;


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

	if( obj.timtype !== ast_new )
	{
		return false;
	}

	return this.call === obj.call || this.call.equals( obj.call );
};


}
)( );
