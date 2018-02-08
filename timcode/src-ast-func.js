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
let ast_func = NODE ? module.exports : module;


const ast_block = require( '../ast/block' );


const ast_funcArg = require( '../ast/funcArg' );


const tim_proto = tim.proto;


/*
| Constructor.
*/
const Constructor =
	function(
		list, // list
		v_block,
		v_capsule
	)
{
	if( prototype.__have_lazy )
	{
		this.__lazy = { };
	}

	this.block = v_block;

	this.capsule = v_capsule;

	this._list = list;

	if( FREEZE )
	{
		Object.freeze( list );

		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
const prototype = Constructor.prototype;


ast_func.prototype = prototype;


/*
| Creates a new func object.
*/
ast_func.create =
prototype.create =
	function(
		// free strings
	)
{
	let inherit;

	let list;

	let listDup;

	let v_block;

	let v_capsule;

	if( this !== ast_func )
	{
		inherit = this;

		list = inherit._list;

		listDup = false;

		v_block = this.block;

		v_capsule = this.capsule;
	}
	else
	{
		list = [ ];

		listDup = true;
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
			case 'block' :

				if( arg !== pass )
				{
					v_block = arg;
				}

				break;

			case 'capsule' :

				if( arg !== pass )
				{
					v_capsule = arg;
				}

				break;

			case 'list:init' :

/**/			if( CHECK )
/**/			{
/**/				if( !Array.isArray( arg ) )
/**/				{
/**/					throw new Error( );
/**/				}
/**/			}

				list = arg;

				listDup = 'init';

				break;

			case 'list:append' :

				if( !listDup )
				{
					list = list.slice( );

					listDup = true;
				}

				list.push( arg );

				break;

			case 'list:insert' :

				if( !listDup )
				{
					list = list.slice( );

					listDup = true;
				}

				list.splice( arg, 0, arguments[ ++a + 1 ] );

				break;

			case 'list:remove' :

				if( !listDup )
				{
					list = list.slice( );

					listDup = true;
				}

				list.splice( arg, 1 );

				break;

			case 'list:set' :

				if( !listDup )
				{
					list = list.slice( );

					listDup = true;
				}

				list[ arg ] = arguments[ ++a + 1 ];

				break;

			default :

				throw new Error( );
		}
	}

	if( v_capsule === undefined )
	{
		v_capsule = false;
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
/**/		if( v_block.timtype !== ast_block )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/
/**/	if( v_capsule === undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( v_capsule === null )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	if( typeof( v_capsule ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/
/**/	for(
/**/		let r = 0, rl = list.length;
/**/		r < rl;
/**/		++r
/**/	)
/**/	{
/**/		const o = list[ r ];
/**/
/**/		if( o.timtype !== ast_funcArg )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if(
		inherit
		&&
		listDup === false
		&&
		(
			v_block === inherit.block
			||
			v_block !== undefined && v_block.equals( inherit.block )
		)
		&&
		v_capsule === inherit.capsule
	)
	{
		return inherit;
	}

	return new Constructor( list, v_block, v_capsule );
};


/*
| Type reflection.
*/
prototype.timtype = ast_func;


/*
| Sets values by path.
*/
prototype.setPath = tim_proto.setPath;


/*
| Gets values by path
*/
prototype.getPath = tim_proto.getPath;


/*
| Returns the list with an element appended.
*/
prototype.append = tim_proto.listAppend;


/*
| Returns the list with another list appended.
*/
prototype.appendList = tim_proto.listAppendList;


/*
| Returns the length of the list.
*/
tim_proto.lazyValue( prototype, 'length', tim_proto.listLength );


/*
| Returns one element from the list.
*/
prototype.get = tim_proto.listGet;


/*
| Returns a slice from the list.
*/
prototype.slice = tim_proto.listSlice;


/*
| Returns the list with one element inserted.
*/
prototype.insert = tim_proto.listInsert;


/*
| Returns the list with one element removed.
*/
prototype.remove = tim_proto.listRemove;


/*
| Returns the list with one element set.
*/
prototype.set = tim_proto.listSet;


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

	if( obj.timtype !== ast_func )
	{
		return false;
	}

	if( this._list !== obj._list )
	{
		if( this.length !== obj.length )
		{
			return false;
		}

		for(
			let a = 0, al = this.length;
			a < al;
			++a
		)
		{
			if(
				this._list[ a ] !== obj._list[ a ]
				&&
				(
					!this._list[ a ].equals
					||
					!this._list[ a ].equals( obj._list[ a ] )
				)
			)
			{
				return false;
			}
		}
	}

	return (
		(
			this.block === obj.block
			||
			this.block !== undefined && this.block.equals( obj.block )
		)
		&&
		this.capsule === obj.capsule
	);
};


}
)( );
