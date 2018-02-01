/*
| Checks if a tim definition is ok.
*/


/*
| Exports.
*/
var
	validator;


/*
| Capsule.
*/
(function( ) {
'use strict';



validator = module.exports;


/*
| Attributes must not be named like these.
*/
const attributeBlacklist =
	Object.freeze( {
		'create' : true,
		'getPath' : true,
		'inherit' : true,
		'setPath' : true
	} );

/*
| Groups must not have these attributes.
*/
const attributeGroupBlacklist =
	Object.freeze( {
		'group' : true,
		'size' : true
	} );

/*
| Lists must not have these attributes.
*/
const attributeListBlacklist =
	Object.freeze( {
		'length' : true,
		'list' : true
	} );

/*
| Twigs must not have these attributes.
*/
const attributeTwigBlacklist =
	Object.freeze( {
		'atRank' : true,
		'ranks' : true,
		'rankOf' : true,
		'twig' : true
	} );


/*
| A jion definition may have these.
*/
const timWhitelist =
	Object.freeze( {
		'alike' : true,
		'attributes' : true,
		'hasAbstract' : true,
		'id' : true,
		'init' : true,
		'json' : true,
		'group' : true,
		'list' : true,
		'twig' : true,
	} );


/*
| Checks if a jion prepare looks ok.
*/
const checkPrepare =
	function(
		// attr
	)
{
	// FUTURE
	return true;
};


/*
| Checks the alike definitions.
*/
const checkAlikes =
	function(
		jion // the jion definition
	)
{
	var
		alike,
		adef,
		ignores,
		name;

	alike = jion.alike;

	if( !jion.attributes )
	{
		throw new Error(
			'there cannot be alikes without attributes'
		);
	}

	for( name in alike )
	{
		adef = alike[ name ];

		for( var spec in adef )
		{
			if( spec !== 'ignores' )
			{
				throw new Error(
					'alike ' + name + ' has invalid specifier ' + spec
				);
			}
		}

		ignores = adef.ignores;

		if( typeof( ignores ) !== 'object' )
		{
			throw new Error(
				'alike ' + name + ' misses ignores.'
			);
		}

		for( var attr in ignores )
		{
			if( !jion.attributes[ attr ] )
			{
				throw new Error(
					'alike ' + name + ' ignores unknown attribute ' + attr
				);
			}
		}
	}
};


/*
| Checks the group definition.
|
| FUTURE
|   for this and list/twig, just create
|   an idGroup, it will complain anyway.
*/
const checkGroup =
	function(
		jion // the jion definition
	)
{
	var
		a,
		aZ,
		entry,
		map,
		group;

	group = jion.group;

	map = { };

	if( !( Array.isArray( group ) ) )
	{
		throw new Error(
			'group definition must be an Array'
		);
	}

	for( a = 0, aZ = group.length; a < aZ; a++ )
	{
		entry = group[ a ];

		if( typeof( entry ) !== 'string' )
		{
			throw new Error(
				'group definition entry not a string'
			);
		}

		if( map[ entry ] )
		{
			throw new Error(
				'group definition contains duplicate: '
				+ entry
			);
		}

		map[ entry ] = true;
	}
};




/*
| Checks the list definition.
*/
const checkList =
	function(
		jion // the jion definition
	)
{
	var
		a,
		aZ,
		entry,
		list,
		map;

	list = jion.list;

	map = { };

	if( !( Array.isArray( list ) ) )
	{
		throw new Error(
			'list definition must be an Array'
		);
	}

	for( a = 0, aZ = list.length; a < aZ; a++ )
	{
		entry = list[ a ];

		if( typeof( entry ) !== 'string' )
		{
			throw new Error(
				'twig definition entry not a string'
			);
		}

		if( map[ entry ] )
		{
			throw new Error(
				'twig definition contains duplicate: '
				+ entry
			);
		}

		map[ entry ] = true;
	}
};



/*
| Checks the twig definition.
*/
const checkTwig =
	function(
		jion // the jion definition
	)
{
	var
		a,
		aZ,
		entry,
		map,
		twig;

	twig = jion.twig;

	map = { };

	if( !( Array.isArray( twig ) ) )
	{
		throw new Error(
			'twig definition must be an Array'
		);
	}

	for(
		a = 0, aZ = twig.length;
		a < aZ;
		a++
	)
	{
		entry = twig[ a ];

		if( typeof( entry ) !== 'string' )
		{
			throw new Error( 'twig definition entry not a string' );
		}

		if( map[ entry ] )
		{
			throw new Error(
				'twig definition contains duplicate: '
				+ entry
			);
		}

		map[ entry ] = true;
	}
};


/*
| Checks if an attributes type is valid.
|
| This does not include sets, it checks a single type.
*/
const checkAttributeSingleType =
	function(
		name, // attribute name
		type  // the type specifier to check
	)
{
	if( typeof( type ) !== 'string' )
	{
		throw new Error(
			'attribute "' + name + '" has invalid type: ' + type
		);
	}

	if( type.indexOf( '_' ) < 0 && type.indexOf( '$' ) < 0 )
	{
		switch( type )
		{
			case 'boolean' :
			case 'date' :
			case 'function' :
			case 'integer' :
			case 'number' :
			case 'null' :
			case 'protean' :
			case 'string' :
			case 'undefined' :

				break;

			default :

				throw new Error(
					'attribute "'
					+ name
					+ '", type has unknown primitive: '
					+ type
				);
		}
	}
};



/*
| Checks if a jion attribute definition looks ok.
*/
const checkAttribute =
	function(
		jion,	// the jion definition
		name	// the attribute name
	)
{
	var
		a,
		aZ,
		attr,
		key,
		type,
		value;

	if( attributeBlacklist[ name ] )
	{
		throw new Error(
			'attribute must not be named "' + name + '"'
		);
	}

	if( jion.group && attributeGroupBlacklist[ name ] )
	{
		throw new Error(
			'groups must not have an attribute named "' + name + '"'
		);
	}

	if( jion.group && attributeListBlacklist[ name ] )
	{
		throw new Error(
			'lists must not have an attribute named "' + name + '"'
		);
	}

	if( jion.group && attributeTwigBlacklist[ name ] )
	{
		throw new Error(
			'twigs must not have an attribute named "' + name + '"'
		);
	}

	attr = jion.attributes[ name ];

	type = attr.type;

	if( typeof( type ) !== 'string' )
	{
		checkAttributeSingleType( name, type );
	}
	else if( Array.isArray( type ) )
	{
		// for now assuming its okay

		for( a = 0, aZ = type.length; a < aZ; a++ )
		{
			checkAttributeSingleType( name, type[ a ] );
		}
	}
	else
	{
		throw new Error(
			'attribute "' + name + '" has invalid type: ' + type
		);
	}

	for( key in attr )
	{
		value = attr[ key ];

		switch( key )
		{
			case 'defaultValue' :

				if( typeof( attr.defaultValue ) !== 'string' )
				{
					throw new Error( 'defaultValue not a string expression' );
				}

				break;

			case 'json' :

				if( typeof( value ) !== 'boolean' )
				{
					throw new Error( 'json flag must be boolean' );
				}

				if( attr.assign === '' )
				{
					throw new Error(
						'json attributes most not have empty assignment'
					);
				}

				break;

			case 'assign' :

				if( typeof( attr.assign ) !== 'string' )
				{
					throw new Error( 'assign not a string' );
				}

				break;

			case 'comment' :
			case 'type' :

				break;

			case 'prepare' :

				checkPrepare( attr );

				break;

			default :

				throw new Error(
					'attribute '
					+ '"' + name + '"'
					+ ' has invalid specifier: '
					+ '"' + key + '"'
				);
		}
	}
};


/*
| Checks if a jion definition looks ok.
*/
validator.check =
	function(
		jion // the jion object definition
	)
{
	var
		attr,
		name;

	if( !jion ) throw new Error( );

	for( name in jion )
	{
		if( !timWhitelist[ name ] )
		{
			throw new Error( 'invalid jion parameter: ' + name );
		}
	}

	if( typeof( jion.id ) !== 'string' )
	{
		throw new Error( 'id missing' );
	}

	attr = jion.attributes;

	if( attr )
	{
		for( name in attr )
		{
			checkAttribute( jion, name );
		}
	}

	if( jion.alike )
	{
		checkAlikes( jion );
	}

	if( jion.group && jion.list )
	{
		throw new Error(
			'a jion cannot be a group and list at the same time'
		);
	}

	if( jion.group && jion.twig )
	{
		throw new Error(
			'a jion cannot be a group and twig at the same time'
		);
	}

	if( jion.list && jion.twig )
	{
		throw new Error(
			'a jion cannot be a list and twig at the same time'
		);
	}

	if( jion.group ) checkGroup( jion );

	if( jion.list ) checkList( jion );

	if( jion.twig ) checkTwig( jion );
};


} )( );
