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
let ast_var = NODE ? module.exports : module;


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_name
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
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
const prototype = Constructor.prototype;


ast_var.prototype = prototype;


/*
| Creates a new var object.
*/
ast_var.create =
prototype.create =
	function(
		// free strings
	)
{
	let inherit;

	let v_name;

	if( this !== ast_var )
	{
		inherit = this;

		v_name = this.name;
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
/**/	if( typeof( v_name ) !== 'string' && !( v_name instanceof String ) )
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
| Type reflection.
*/
prototype.timtype = ast_var;


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

	if( obj.timtype !== ast_var )
	{
		return false;
	}

	return this.name === obj.name;
};


}
)( );
