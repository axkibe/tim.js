/*
| Checks if a tim definition looks ok.
|
| FIXME move all to timspec.validate( )
*/
'use strict';


tim.define( module, ( def, self ) => {


def.abstract = true;



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
| A tim definition may have these.
*/
const timWhitelist =
	Object.freeze( {
		'abstract' : true,
		'adjust' : true,
		'alike' : true,
		'attributes' : true,
		'create' : true,
		'extend' : true,
		'proto' : true,
		'group' : true,
		'global' : true,
		'inherit' : true,
		'inspect' : true,
		'json' : true,
		'lazy' : true,
		'lazyFunc' : true,
		'list' : true,
		'set' : true,
		'singleton' : true,
		'static' : true,
		'staticLazy' : true,
		'twig' : true,
	} );


/*
| Checks the alike definitions.
*/
const checkAlikes =
	function(
		def // the tim definition
	)
{
	const alike = def.alike;

	if( !def.attributes )
	{
		throw new Error( 'there cannot be alikes without attributes' );
	}

	for( let name in alike )
	{
		const adef = alike[ name ];

		for( let spec in adef )
		{
			if( spec !== 'ignores' )
			{
				throw new Error( 'alike ' + name + ' has invalid specifier ' + spec );
			}
		}

		const ignores = adef.ignores;

		if( typeof( ignores ) !== 'object' )
		{
			throw new Error( 'alike ' + name + ' misses ignores.' );
		}

		/*
		// FIXME check in timspec
		for( let attr in ignores )
		{
			if( !def.attributes[ attr ] )
			{
				throw new Error( 'alike ' + name + ' ignores unknown attribute ' + attr );
			}
		}
		*/
	}
};


/*
| Checks the group definition.
|
| FUTURE
|   for this and list/twig, just create
|   an type group, it will complain anyway.
*/
const checkGroup =
	function(
		def // the tim definition
	)
{
	const group = def.group;

	const map = { };

	if( !( Array.isArray( group ) ) ) throw new Error( 'group definition must be an Array' );

	for( let entry of group )
	{
		if( typeof( entry ) !== 'string' )
		{
			throw new Error( 'group definition entry not a string' );
		}

		if( map[ entry ] )
		{
			throw new Error( 'group definition contains duplicate: ' + entry );
		}

		map[ entry ] = true;
	}
};




/*
| Checks the list definition.
*/
const checkList =
	function(
		def // the tim definition
	)
{
	const list = def.list;

	const map = { };

	if( !( Array.isArray( list ) ) )
	{
		throw new Error( 'list definition must be an Array' );
	}

	for( let entry of list )
	{
		if( typeof( entry ) !== 'string' )
		{
			throw new Error( 'twig definition entry not a string');
		}

		if( map[ entry ] )
		{
			throw new Error( 'twig definition contains duplicate: ' + entry );
		}

		map[ entry ] = true;
	}
};



/*
| Checks the twig definition.
*/
const checkTwig =
	function(
		def // the tim definition
	)
{
	const twig = def.twig;

	const map = { };

	if( !( Array.isArray( twig ) ) )
	{
		throw new Error( 'twig definition must be an Array' );
	}

	for( let entry of twig )
	{
		if( typeof( entry ) !== 'string' )
		{
			throw new Error( 'twig definition entry not a string' );
		}

		if( map[ entry ] )
		{
			throw new Error( 'twig definition contains duplicate: ' + entry );
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

	if( type.indexOf( '/' ) < 0 )
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
| Checks if a tim attribute definition looks ok.
*/
const checkAttribute =
	function(
		def,	// the tim definition
		name	// the attribute name
	)
{
	if( def.group && attributeGroupBlacklist[ name ] )
	{
		throw new Error( 'groups must not have an attribute named "' + name + '"' );
	}

	if( def.group && attributeListBlacklist[ name ] )
	{
		throw new Error( 'lists must not have an attribute named "' + name + '"' );
	}

	if( def.group && attributeTwigBlacklist[ name ] )
	{
		throw new Error( 'twigs must not have an attribute named "' + name + '"' );
	}

	const attr = def.attributes[ name ];

	const type = attr.type;

	if( typeof( type ) === 'string' )
	{
		checkAttributeSingleType( name, type );
	}
	else if( Array.isArray( type ) )
	{
		for( let t of type ) checkAttributeSingleType( name, t );
	}
	else
	{
		throw new Error( 'attribute "' + name + '" has invalid type: ' + type );
	}

	for( let key in attr )
	{
		const value = attr[ key ];

		switch( key )
		{
			case 'defaultValue' :

				if( typeof( value ) !== 'string' )
				{
					throw new Error( 'defaultValue not a string expression' );
				}

				break;

			case 'json' :

				if( typeof( value ) !== 'boolean' )
				{
					throw new Error( 'json flag must be boolean' );
				}

				break;

			case 'type' : break;

			default :

				throw new Error(
					'attribute ' + '"' + name + '"' + ' has invalid specifier: '
					+ '"' + key + '"'
				);
		}
	}
};


/*
| Checks inheritance optimizations
*/
const checkInherit =
	function(
		def
	)
{
	for( var name in def.inherit )
	{
		if( !def.lazy[ name ] )
		{
			throw new Error( 'inherit optimization "' + name + '" has no lazy value' );
		}
	}
};


const checkAdjust =
	function(
		def
	)
{
	/*
	// FIXME redo with inheritance in timspec
	for( let name in def.adjust )
	{
		if( name === 'get' )
		{
			if( !def.twig && !def.abstract ) throw new Error( 'get-adjust without twig' );

			continue;
		}

		if( !def.attributes[ name ] )
		{
			throw new Error( 'adjust without attribute!"' );
		}
	}
	*/
};


/*
| Checks if a tim definition looks ok.
*/
def.static.check =
	function(
		def // the tim definition
	)
{
	if( !def ) throw new Error( );

	for( let name in def )
	{
		if( !timWhitelist[ name ] ) throw new Error( 'invalid tim parameter: ' + name );
	}

	const attr = def.attributes;

	if( attr )
	{
		for( let name in attr ) checkAttribute( def, name );
	}

	if( def.alike ) checkAlikes( def );

	if( def.group && def.list )
	{
		throw new Error( 'a tim cannot be a group and list at the same time' );
	}

	if( def.group && def.twig )
	{
		throw new Error( 'a tim cannot be a group and twig at the same time' );
	}

	if( def.list && def.twig )
	{
		throw new Error( 'a tim cannot be a list and twig at the same time' );
	}

	if( def.group ) checkGroup( def );

	if( def.list ) checkList( def );

	if( def.twig ) checkTwig( def );

	if( def.lazy._ranks && def.json )
	{
		throw new Error( 'a proxy tim must not have a from/to json interface' );
	}

	if( def.abstract !== undefined && typeof( def.abstract ) !== 'boolean' )
	{
		throw new Error( 'abstract must be a boolean value' );
	}

	checkAdjust( def );

	checkInherit( def );
};


} );
