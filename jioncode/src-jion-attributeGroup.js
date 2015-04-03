/*
| This is an auto generated file.
|
| DO NOT EDIT!
*/


/*
| Export.
*/
var
	jion_attributeGroup;


if( SERVER )
{
	jion_attributeGroup = module.exports;
}
else
{
	jion_attributeGroup = { };
}


/*
| Imports.
*/
var
	jools,
	jion_attribute,
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

	jion_attribute = require( '../../src/jion/attribute' );

	jion_proto = require( '../../src/jion/proto' );
}


/*
| Abstract constructor.
*/
var
	AbstractConstructor;


AbstractConstructor =
	function(
		group // group
	)
{
	this.group = group;

	if( FREEZE )
	{
		Object.freeze( group );

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
		group // group
	)
{
	if( FREEZE )
	{
		if( prototype.__have_lazy )
		{
			this.__lazy = { };
		}
	}

	this.group = group;

	if( FREEZE )
	{
		Object.freeze( group );

		Object.freeze( this );
	}
};


/*
| Prototype shortcut
*/
prototype = Constructor.prototype;


jion_attributeGroup.prototype = prototype;


/*
| Creates an attributeGroup object.
*/
jion_attributeGroup.abstract =
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
		group,
		groupDup,
		inherit,
		o;

	if( this !== jion_attributeGroup )
	{
		inherit = this;

		group = inherit.group;

		groupDup = false;
	}
	else
	{
		group = { };

		groupDup = true;
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
			case 'group:init' :

				group = arg;

				groupDup = 'init';

				break;

			case 'group:set' :

				if( !groupDup )
				{
					group = jools.copy( group );

					groupDup = true;
				}

				group[ arg ] = arguments[ ++a + 1 ];

				break;

			case 'group:remove' :

				if( !groupDup )
				{
					group = jools.copy( group );

					groupDup = true;
				}

				delete group[ arg ];

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
/**/	for( var k in group )
/**/	{
/**/		o = group[ k ];
/**/
/**/		if( o.reflect !== 'jion_attribute' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if( inherit && groupDup === false )
	{
		return inherit;
	}

	return new AbstractConstructor( group );
};


/*
| Creates a new attributeGroup object.
*/
jion_attributeGroup.create =
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
		group,
		groupDup,
		inherit,
		o;

	if( this !== jion_attributeGroup )
	{
		inherit = this;

		group = inherit.group;

		groupDup = false;
	}
	else
	{
		group = { };

		groupDup = true;
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
			case 'group:init' :

				group = arg;

				groupDup = 'init';

				break;

			case 'group:set' :

				if( !groupDup )
				{
					group = jools.copy( group );

					groupDup = true;
				}

				group[ arg ] = arguments[ ++a + 1 ];

				break;

			case 'group:remove' :

				if( !groupDup )
				{
					group = jools.copy( group );

					groupDup = true;
				}

				delete group[ arg ];

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
/**/	for( var k in group )
/**/	{
/**/		o = group[ k ];
/**/
/**/		if( o.reflect !== 'jion_attribute' )
/**/		{
/**/			throw new Error( );
/**/		}
/**/	}
/**/}

	if( inherit && groupDup === false )
	{
		return inherit;
	}

	return new Constructor( group );
};


/*
| Abstract Reflection.
*/
AbstractConstructor.prototype.reflect = 'jion_attributeGroup:abstract';


/*
| Abstract Name Reflection.
*/
AbstractConstructor.prototype.reflectName = 'attributeGroup:abstract';


/*
| Reflection.
*/
prototype.reflect = 'jion_attributeGroup';


/*
| Name Reflection.
*/
prototype.reflectName = 'attributeGroup';


/*
| Sets values by path.
*/
prototype.setPath = jion_proto.setPath;


/*
| Gets values by path
*/
prototype.getPath = jion_proto.getPath;


/*
| Returns the group with another group added,
| overwriting collisions.
*/
prototype.addGroup = jion_proto.groupAddGroup;


/*
| Gets one element from the group.
*/
prototype.get = jion_proto.groupGet;


/*
| Returns the group keys.
*/
jools.lazyValue( prototype, 'keys', jion_proto.groupKeys );


/*
| Returns the sorted group keys.
*/
jools.lazyValue( prototype, 'sortedKeys', jion_proto.groupSortedKeys );


/*
| Returns the group with one element removed.
*/
prototype.remove = jion_proto.groupRemove;


/*
| Returns the group with one element set.
*/
prototype.set = jion_proto.groupSet;


/*
| Returns the size of the group.
*/
jools.lazyValue( prototype, 'size', jion_proto.groupSize );


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

	if( obj.reflect !== 'jion_attributeGroup' )
	{
		return false;
	}

	if( this.group !== obj.group )
	{
		if( this.size !== obj.size )
		{
			return false;
		}

		for( var k in this.group )
		{
			if(
				this.group[ k ] !== obj.group[ k ]
				&&
				(
					!this.group[ k ].equals
					||
					!this.group[ k ].equals( obj.group[ k ] )
				)
			)
			{
				return false;
			}
		}
	}

	return true;
};


}
)( );
