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
let format_context = NODE ? module.exports : module;


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		v_check,
		v_indent,
		v_inline,
		v_root
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.check = v_check;

	this.indent = v_indent;

	this.inline = v_inline;

	this.root = v_root;

	if( FREEZE )
	{
		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
const prototype = Constructor.prototype;


format_context.prototype = prototype;


/*
| Creates a new context object.
*/
format_context.create =
prototype.create =
	function(
		// free strings
	)
{
	let inherit;

	let v_check;

	let v_indent;

	let v_inline;

	let v_root;

	if( this !== format_context )
	{
		inherit = this;

		v_check = this.check;

		v_indent = this.indent;

		v_inline = this.inline;

		v_root = this.root;
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
			case 'check' :

				if( arg !== pass )
				{
					v_check = arg;
				}

				break;

			case 'indent' :

				if( arg !== pass )
				{
					v_indent = arg;
				}

				break;

			case 'inline' :

				if( arg !== pass )
				{
					v_inline = arg;
				}

				break;

			case 'root' :

				if( arg !== pass )
				{
					v_root = arg;
				}

				break;

			default :

				throw new Error( );
		}
	}

	if( v_check === undefined )
	{
		v_check = false;
	}

	if( v_indent === undefined )
	{
		v_indent = 0;
	}

	if( v_inline === undefined )
	{
		v_inline = false;
	}

/**/if( CHECK )
/**/{
/**/	if( v_check === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_check === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_check ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_indent === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_indent === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if(
/**/		typeof( v_indent ) !== 'number'
/**/		||
/**/		Number.isNaN( v_indent )
/**/		||
/**/		Math.floor( v_indent ) !== v_indent
/**/	)
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_inline === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_inline === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_inline ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_root === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_root === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_root ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if(
		inherit
		&&
		v_check === inherit.check
		&&
		v_indent === inherit.indent
		&&
		v_inline === inherit.inline
		&&
		v_root === inherit.root
	)
	{
		return inherit;
	}

	return new Constructor( v_check, v_indent, v_inline, v_root );
};


/*
| Reflection.
*/
prototype.reflect = 'format_context';


/*
| Type reflection.
*/
prototype.timtype = format_context;


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

	if( obj.reflect !== 'format_context' )
	{
		return false;
	}

	return (
		this.check === obj.check
		&&
		this.indent === obj.indent
		&&
		this.inline === obj.inline
		&&
		this.root === obj.root
	);
};


}
)( );
