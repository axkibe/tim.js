/*
| This is an auto generated file.
|
| Editing might turn out rather futile.
*/


/*
| Export.
*/
var
	jion$ast_func;


if( NODE )
{
	jion$ast_func = module.exports;
}
else
{
	jion$ast_func = { };
}


var
	jion$ast_block,
	jion$ast_funcArg,
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
	jion$ast_block = require( '../ast/block' );

	jion$ast_funcArg = require( '../ast/funcArg' );

	jion_proto = require( 'jion' ).proto;
}


/*
| Constructor.
*/
var
	Constructor,
	prototype;


Constructor =
	function(
		list, // list
		v_block, // function code
		v_capsule // if true its the capsule
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
prototype = Constructor.prototype;


jion$ast_func.prototype = prototype;


/*
| Creates a new func object.
*/
jion$ast_func.create =
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
		list,
		listDup,
		o,
		r,
		rZ,
		v_block,
		v_capsule;

	if( this !== jion$ast_func )
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
/**/		if( v_block.reflect !== 'ast_block' )
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
/**/		r = 0, rZ = list.length;
/**/		r < rZ;
/**/		++r
/**/	)
/**/	{
/**/		o = list[ r ];
/**/
/**/		if( o.reflect !== 'ast_funcArg' )
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
| Reflection.
*/
prototype.reflect = 'ast_func';


/*
| Name Reflection.
*/
prototype.reflectName = 'func';


/*
| Sets values by path.
*/
prototype.setPath = jion_proto.setPath;


/*
| Gets values by path
*/
prototype.getPath = jion_proto.getPath;


/*
| Returns the list with an element appended.
*/
prototype.append = jion_proto.listAppend;


/*
| Returns the list with another list appended.
*/
prototype.appendList = jion_proto.listAppendList;


/*
| Returns the length of the list.
*/
jion_proto.lazyValue( prototype, 'length', jion_proto.listLength );


/*
| Returns one element from the list.
*/
prototype.get = jion_proto.listGet;


/*
| Returns a slice from the list.
*/
prototype.slice = jion_proto.listSlice;


/*
| Returns the list with one element inserted.
*/
prototype.insert = jion_proto.listInsert;


/*
| Returns the list with one element removed.
*/
prototype.remove = jion_proto.listRemove;


/*
| Returns the list with one element set.
*/
prototype.set = jion_proto.listSet;


/*
| Tests equality of object.
*/
prototype.equals =
	function(
		obj // object to compare to
	)
{
	var
		a,
		aZ;

	if( this === obj )
	{
		return true;
	}

	if( !obj )
	{
		return false;
	}

	if( obj.reflect !== 'ast_func' )
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
			a = 0, aZ = this.length;
			a < aZ;
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
