/*
| Generates jion objects from a jion definition.
*/


/*
| Capsule.
*/
(function( ) {
'use strict';


/*
| The jion definition.
*/
if( GLOBAL.JION )
{
	return{
		id : 'jion$generator',
		attributes :
		{
			'jion' :
			{
				comment : 'the jion definition',
				type : 'protean',
				assign : ''
			},
			'ouroboros' :
			{
				comment : 'true for building jioncode for jion itself',
				type : 'boolean',
				defaultValue : 'true'
			},
		},
		init : [ 'jion' ]
	};
}


var
	$,
	$and,
	$assign,
	$block,
	$capsule,
	$check,
	$comment,
	$fail,
	$func,
	$if,
	$objLiteral,
	$string,
	$switch,
	$var,
	generator,
	jion_attribute,
	jion_attributeGroup,
	jion_id,
	jion_idGroup,
	jion_stringRay,
	jion_validator,
	parser,
	prototype,
	shorthand;


generator = require( './this' )( module, 'ouroboros' );

prototype = generator.prototype;

jion_id = require( './id' );

jion_idGroup = require( './idGroup' );

jion_stringRay = require( './stringRay' );

jion_attribute = require( './attribute' );

jion_attributeGroup = require( './attributeGroup' );

jion_validator = require( './validator' );

parser = require( './jsParser/parser' );

shorthand = require( './ast/shorthand' );

/*
| Shorthanding Shorthands.
*/
$ = parser.parse;

$and = shorthand.$and;

$assign = shorthand.$assign;

$block = shorthand.$block;

$capsule = shorthand.$capsule;

$check = shorthand.$check;

$comment = shorthand.$comment;

$fail = shorthand.$fail;

$func = shorthand.$func;

$if = shorthand.$if;

$objLiteral = shorthand.$objLiteral;

$string = shorthand.$string;

$switch = shorthand.$switch;

$var = shorthand.$var;


/*
| Initializes a generator.
*/
prototype._init =
	function(
		jion
	)
{
	var
		a,
		abstractConstructorList,
		aid,
		assign,
		attr,
		attributes,
		constructorList,
		defaultValue,
		inits, // sorted init list
		jAttr,
		jdv,
		name,
		prepare,
		searchIdWalk,
		type,
		imports; // foreign ids to be imported

	attributes = jion_attributeGroup.create( );

	abstractConstructorList = [ ];

	constructorList = [ ];

	imports = jion_idGroup.create( );

	searchIdWalk =
		function( node )
	{
		if(
			node.reflect === 'ast_var'
			&&
			(
				node.name.indexOf( '_' ) >= 0
				|| node.name.indexOf( '$' ) >= 0
			)
		)
		{
			imports =
				imports.add( jion_id.createFromString( node.name ) );
		}

		return node;
	};

	this.hasJson = !!jion.json;

	this.init = jion.init;

	this.singleton = !!jion.singleton; // FIXME auto singleton

	this.id = jion_id.createFromString( jion.id );

	this.hasAbstract = !!jion.hasAbstract;

	for( name in jion.attributes || { } )
	{
		jAttr = jion.attributes[ name ];

		type = jAttr.type;

		if( !Array.isArray( type ) )
		{
			aid = jion_id.createFromString( type );

			imports = imports.add( aid );
		}
		else
		{
			aid = jion_idGroup.createFromIDStrings( type );

			imports = imports.addGroup( aid );
		}

		if( jAttr.json ) this.hasJson = true;

		assign =
			jAttr.assign !== undefined
			? jAttr.assign
			: name;

		if( assign !== '' )
		{
			abstractConstructorList.push( name );

			constructorList.push( name );
		}
		else if( this.init && this.init.indexOf( name ) >= 0 )
		{
			constructorList.push( name );
		}

		defaultValue = undefined;

		prepare = jAttr.prepare;

		if( prepare )
		{
			$( prepare ).walk( searchIdWalk );
		}

		jdv = jAttr.defaultValue;

		if( jdv )
		{
			if( jdv === 'undefined' )
			{
				defaultValue = shorthand.$undefined;
			}
			else
			{
				defaultValue = $( jdv );
			}
		}

		attr =
			jion_attribute.create(
				'allowsNull',
					jAttr.allowsNull
					|| shorthand.$null.equals( defaultValue ),
				'allowsUndefined',
					jAttr.allowsUndefined
					|| shorthand.$undefined.equals( defaultValue ),
				'assign', assign,
				'comment', jAttr.comment,
				'prepare', prepare,
				'defaultValue', defaultValue,
				'json', !!jAttr.json,
				'name', name,
				'id', aid,
				'varRef', $var( 'v_' + name )
			);

		attributes = attributes.set( name, attr );
	}

	this.attributes = attributes;

	abstractConstructorList.sort( );

	constructorList.sort( );

	if( jion.group )
	{
		abstractConstructorList.unshift( 'group' );

		constructorList.unshift( 'group' );
	}

	if( jion.ray )
	{
		abstractConstructorList.unshift( 'ray' );

		constructorList.unshift( 'ray' );
	}

	if( jion.twig )
	{
		abstractConstructorList.unshift( 'ranks' );

		abstractConstructorList.unshift( 'twig' );

		constructorList.unshift( 'ranks' );

		constructorList.unshift( 'twig' );
	}

	if( jion.init )
	{
		inits = jion.init.slice( ).sort( );

		for(
			a = inits.length - 1;
			a >= 0;
			a--
		)
		{
			name = jion.init[ a ];

			if( attributes.get( name ) )
			{
				continue;
			}

			switch( name )
			{
				case 'inherit' :
				case 'twigDup' :
				case 'group' :
				case 'groupDup' :
				case 'ray' :
				case 'rayDup' :

					constructorList.unshift( name );

					break;

				default :

					throw new Error(
						'invalid init value: ' + name
					);
			}
		}
	}

	if( FREEZE )
	{
		Object.freeze( abstractConstructorList );

		Object.freeze( constructorList );
	}

	this.abstractConstructorList = abstractConstructorList;

	this.constructorList = constructorList;

	if( jion.group )
	{
		this.group = jion_idGroup.createFromIDStrings( jion.group );

		imports = imports.addGroup( this.group );
	}
	else
	{
		this.group = undefined;
	}

	if( jion.ray )
	{
		this.ray = jion_idGroup.createFromIDStrings( jion.ray );

		imports = imports.addGroup( this.ray );
	}
	else
	{
		this.ray = undefined;
	}

	if( jion.twig )
	{
		this.twig = jion_idGroup.createFromIDStrings( jion.twig );

		imports = imports.addGroup( this.twig );

	}
	else
	{
		this.twig = undefined;
	}

	this.imports = imports;

	this.alike = jion.alike;

	this.creatorHasFreeStringsParser =
		this.group
		|| this.ray
		|| this.twig
		|| this.attributes.size > 0;
};


/*
| Generates the imports.
*/
prototype.genImports =
	function( )
{
	var
		a,
		aZ,
		id,
		idKey,
		idKeys,
		imports,
		result;

	result = $block( );

	imports = this.imports;

	idKeys = imports.sortedKeys;

	for(
		a = 0, aZ = idKeys.length;
		a < aZ;
		a++
	)
	{
		idKey = idKeys[ a ];

		id = imports.get( idKey );

		if( id.isPrimitive ) continue;

		if( idKey.indexOf( ':' ) >= 0 )
		{
			// FUTURE make this more elegant
			continue;
		}

		result = result.$varDec( id.global );
	}

	result = result.$varDec( 'jion_proto' );

	return result;
};


/*
| Generates the node includes.
*/
prototype.genNodeIncludes =
	function( )
{
	var
		a,
		aZ,
		block,
		id,
		idKey,
		idKeys,
		imports;

	block = $block( );

	imports = this.imports;

	idKeys = imports.sortedKeys;

	for(
		a = 0, aZ = idKeys.length;
		a < aZ;
		a++
	)
	{
		idKey = idKeys[ a ];

		id = imports.get( idKey );

		if( idKey.indexOf( ':' ) >= 0 )
		{
			// abstract
			// FUTURE more elegant
			continue;
		}

		if( id.equals( this.id ) )
		{
			// the jioncode shouldn't require itself
			continue;
		}

		if( id.isPrimitive ) continue;

		if(
			id.packet
			&& id.packet !== this.id.packet
		)
		{
			block =
				block
				.$(
					id.global, '=',
					'require( "' + id.packet + '" ).',
					id.pathName
				);
		}
		else
		{
			block =
				block
				.$(
					id.global,
					' = require( "'
					+ this.id.rootPath
					+ id.path
					+ '" )'
				);
		}
	}

	if( this.ouroboros )
	{
		block =
			block.$(
				'require( '
				+ '"'
				+ this.id.rootPath
				+ 'proto"'
				+ ' )'
			);
	}
	else
	{
		block = block.$( 'jion_proto = require( "jion" ).proto' );
	}

	return(
		$block( )
		.$comment( 'Node includes.' )
		.$if( 'NODE', block )
	);
};


/*
| Generates the constructor.
*/
prototype.genConstructor =
	function(
		abstract // if true generate abstract constructor
	)
{
	var
		a,
		assign,
		aZ,
		attr,
		block,
		cf,
		cList,
		freezeBlock,
		initCall,
		name;

	block = $block( );

	if( !abstract )
	{
		block =
			block.$if(
				'FREEZE',
				$if(
					'prototype.__have_lazy',
					$( 'this.__lazy = { }' )
				)
			);
	}

	// assigns the variables
	for(
		a = 0, aZ = this.attributes.size;
		a < aZ;
		a++
	)
	{
		name = this.attributes.sortedKeys[ a ];

		attr = this.attributes.get( name );

		if( attr.assign === '' )
		{
			continue;
		}

		assign = $( 'this.', attr.assign, ' = ', attr.varRef );

		if( !abstract && !attr.allowsUndefined )
		{
			block = block.append( assign );
		}
		else
		{
			block =
				block
				.$if(
					$( attr.varRef, '!== undefined' ),
					assign
				);
		}
	}

	if( this.group )
	{
		block =
			block
			.$( 'this.group = group' ) // FIXME remove
			.$( 'this._group = group' );
	}

	if( this.ray )
	{
		block =
			block
			.$( 'this.ray = ray' ) // FIXME remove
			.$( 'this._ray = ray' );
	}

	if( this.twig )
	{
		block =
			block
			.$( 'this._twig = twig' )
			.$( 'this._ranks = ranks' );
	}

	// calls the initializer
	if( !abstract && this.init )
	{
		initCall = $( 'this._init( )' );

		for(
			a = 0, aZ = this.init.length;
			a < aZ;
			a++
		)
		{
			name = this.init[ a ];

			switch( name )
			{
				case 'inherit' :
				case 'twigDup' :

					initCall = initCall.$argument( this.init[ a ] );

					continue;
			}

			attr = this.attributes.get( name );

			if( !attr )
			{
				throw new Error(
					'invalid parameter to init: ' + name
				);
			}

			initCall = initCall.$argument( attr.varRef );
		}

		block = block.append( initCall );
	}


	// immutes the new object
	freezeBlock = $block( );

	if( this.group )
	{
		freezeBlock =
			freezeBlock
			.$( 'Object.freeze( group )' );
	}

	if( this.ray )
	{
		freezeBlock =
			freezeBlock
			.$( 'Object.freeze( ray )' );
	}

	if( this.twig )
	{
		freezeBlock =
			freezeBlock
			.$( 'Object.freeze( twig )' )
			.$( 'Object.freeze( ranks )' );
	}

	freezeBlock =
		freezeBlock
		.$( 'Object.freeze( this )' );

	block = block.$if( 'FREEZE', freezeBlock );

	cf = $func( block );

	cList =
		abstract
		? this.abstractConstructorList
		: this.constructorList;

	for( a = 0, aZ = cList.length; a < aZ; a++ )
	{
		name = cList[ a ];

		switch( name )
		{
			case 'inherit' :

				cf = cf.$arg( 'inherit', 'inheritance' );

				break;

			case 'group' :

				cf = cf.$arg( 'group', 'group' );

				break;

			case 'groupDup' :

				cf =
					cf.$arg(
						'groupDup',
						'true if group is already been duplicated'
					);

				break;

			case 'ranks' :

				cf = cf.$arg( 'ranks', 'twig ranks' );

				break;

			case 'ray' :

				cf = cf.$arg( 'ray', 'ray' );

				break;

			case 'rayDup' :

				cf =
					cf.$arg(
						'rayDup',
						'true if ray is already been duplicated'
					);

				break;

			case 'twig' :

				cf = cf.$arg( 'twig', 'twig' );

				break;

			case 'twigDup' :

				cf =
					cf.$arg(
						'twigDup',
						'true if twig is already been duplicated'
					);

				break;

			default :

				attr = this.attributes.get( name );

				cf = cf.$arg( attr.varRef.name, attr.comment );

				break;
		}
	}

	if( !abstract )
	{
		return(
			$block( )
			.$comment( 'Constructor.' )
			.$varDec( 'Constructor' )
			.$varDec( 'prototype' )
			.$( 'Constructor = ', cf )
			.$comment( 'Prototype shortcut' )
			.$( 'prototype = Constructor.prototype' )
			.$( this.id.$global, '.prototype = prototype' )
		);
	}
	else
	{
		return(
			$block( )
			.$comment( 'Abstract constructor.' )
			.$varDec( 'AbstractConstructor' )
			.$( 'AbstractConstructor = ', cf )
		);
	}
};



/*
| Generates the singleton decleration.
*/
prototype.genSingleton =
	function( )
{
	return(
		$block( )
		.$comment( 'Singleton' )
		.$varDec( '_singleton' )
	);
};


/*
| Generates the creators variable list.
*/
prototype.genCreatorVariables =
	function(
		abstract  // if true generates the abstract creator
	)
{
	var
		a,
		aZ,
		name,
		result,
		varList;

/**/if( CHECK )
/**/{
/**/	if( typeof( abstract ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	varList = [ ];

	for( name in this.attributes.group )
	{
		varList.push( this.attributes.get( name ).varRef.name );
	}

	varList.push( 'inherit' );

	if( this.creatorHasFreeStringsParser )
	{
		varList.push( 'arg', 'a', 'aZ' );
	}

	if( this.group )
	{
		varList.push( 'o', 'group', 'groupDup' );
	}

	if( this.ray )
	{
		varList.push( 'o', 'r', 'rZ', 'ray', 'rayDup' );
	}

	if( this.twig )
	{
		varList.push( 'o', 'key', 'rank', 'ranks', 'twig', 'twigDup' );
	}

	varList.sort( );

	result = $block( );

	for(
		a = 0, aZ = varList.length;
		a < aZ;
		a++
	)
	{
		result = result.$varDec( varList[ a ] );
	}

	return result;
};


/*
| Generates the creators inheritance receiver.
*/
prototype.genCreatorInheritanceReceiver =
	function(
		abstract  // if true generates the abstract creator
	)
{
	var
		a,
		aZ,
		attr,
		name,
		receiver,
		result;

/**/if( CHECK )
/**/{
/**/	if( typeof( abstract ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	receiver = $block( ).$( 'inherit = this' );

	if( this.group )
	{
		receiver =
			receiver
			.$( 'group = inherit._group' )
			.$( 'groupDup = false' );
	}

	if( this.ray )
	{
		receiver =
			receiver
			.$( 'ray = inherit._ray' )
			.$( 'rayDup = false' );
	}

	if( this.twig )
	{
		receiver =
			receiver
			.$( 'twig = inherit._twig' )
			.$( 'ranks = inherit._ranks' )
			.$( 'twigDup = false' );
	}

	for(
		a = 0, aZ = this.attributes.size;
		a < aZ;
		a++
	)
	{
		name = this.attributes.sortedKeys[ a ];

		attr = this.attributes.get( name );

		if( attr.assign === '' )
		{
			continue;
		}

		receiver = receiver.$( attr.varRef, ' = ', 'this.', attr.assign );
	}

	result =
		$if(
			$( 'this !== ', this.id.global ),
			receiver
		);

	if( this.group )
	{
		result =
			result
			.$elsewise(
				$block( )
				.$( 'group = { }' )
				.$( 'groupDup = true' )
			);
	}

	if( this.ray )
	{
		result =
			result
			.$elsewise(
				$block( )
				.$( 'ray = [ ]' )
				.$( 'rayDup = true' )
			);
	}

	if( this.twig )
	{
		result =
			result
			.$elsewise(
				$block( )
				.$( 'twig = { }' )
				.$( 'ranks = [ ]' )
				.$( 'twigDup = true' )
			);
	}

	return result;
};


/*
| Generates the creators free strings parser.
*/
prototype.genCreatorFreeStringsParser =
	function(
		// abstract  // if true generates the abstract creator
	)
{
	var
		a,
		aZ,
		attr,
		groupDupCheck,
		loop,
		name,
		rayDupCheck,
		switchExpr,
		twigDupCheck;

	loop =
		$block( )
		.$( 'arg = arguments[ a + 1 ]' );

	switchExpr = $switch( 'arguments[ a ]' );

	for(
		a = 0, aZ = this.attributes.size;
		a < aZ;
		a++
	)
	{
		name = this.attributes.sortedKeys[ a ];

		attr = this.attributes.get( name );

		switchExpr =
			switchExpr
			.$case(
				$string( name ),
				$if(
					'arg !== pass',
					$( attr.varRef, ' = arg' )
				)
			);
	}

	if( this.group )
	{
		groupDupCheck =
			$if(
				'!groupDup',
				$block( )
				.$( 'group = jion_proto.copy( group )' )
				.$( 'groupDup = true' )
			);

		switchExpr =
			switchExpr
			.$case(
				'"group:init"',
				$block( )
				.$( 'group = arg' )
				.$( 'groupDup = "init"' )
			)
			.$case(
				'"group:set"',
				$block( )
				.append( groupDupCheck )
				.$( 'group[ arg ] = arguments[ ++a + 1 ]' )
			)
			.$case(
				'"group:remove"',
				$block( )
				.append( groupDupCheck )
				.$( 'delete group[ arg ]' )
			);
	}

	if( this.ray )
	{
		rayDupCheck =
			$if(
				'!rayDup',
				$block( )
				.$( 'ray = ray.slice( )' )
				.$( 'rayDup = true' )
			);

		switchExpr =
			switchExpr
			.$case(
				'"ray:init"',
				$block( )
				.$check(
					$if( '!Array.isArray( arg )', $fail( ) )
				)
				.$( 'ray = arg' )
				.$( 'rayDup = "init"' )
			)
			.$case(
				'"ray:append"',
				$block( )
				.append( rayDupCheck )
				.$( 'ray.push( arg )' )
			)
			.$case(
				'"ray:insert"',
				$block( )
				.append( rayDupCheck )
				.$( 'ray.splice( arg, 0, arguments[ ++a + 1 ] )' )
			)
			.$case(
				'"ray:remove"',
				$block( )
				.append( rayDupCheck )
				.$( 'ray.splice( arg, 1 ) ' )
			)
			.$case(
				'"ray:set"',
				$block( )
				.append( rayDupCheck )
				.$( 'ray[ arg ] = arguments[ ++a + 1 ]' )
			);
	}

	if( this.twig )
	{
		twigDupCheck =
			$if(
				'twigDup !== true',
				$block( )
				.$( 'twig = jion_proto.copy( twig )' )
				.$( 'ranks = ranks.slice( )' )
				.$( 'twigDup = true' )
			);

		switchExpr =
			switchExpr
			.$case(
				'"twig:add"',
				$block( )
				.$( twigDupCheck )
				.$( 'key = arg' )
				.$( 'arg = arguments[ ++a + 1 ]' )
				.$if(
					'twig[ key ] !== undefined',
					$fail( )
				)
				.$( 'twig[ key ] = arg' )
				.$( 'ranks.push( key )' )
			)
			.$case(
				'"twig:set"',
				$block( )
				.$( twigDupCheck )
				.$( 'key = arg' )
				.$( 'arg = arguments[ ++a + 1 ]' )
				.$if(
					'twig[ key ] === undefined',
					$fail( )
				)
				.$( 'twig[ key ] = arg' )
			)
			.$case(
				'"twig:insert"',
				$block( )
				.append( twigDupCheck )
				.$( 'key = arg' )
				.$( 'rank = arguments[ a + 2 ]' )
				.$( 'arg = arguments[ a +  3 ]' )
				.$( 'a += 2' )
				.$if(
					'twig[ key ] !== undefined',
					$fail( )
				)
				.$if(
					'rank < 0 || rank > ranks.length',
					$fail( )
				)
				.$( 'twig[ key ] = arg' )
				.$( 'ranks.splice( rank, 0, key )' )
			)
			.$case(
				'"twig:remove"',
				$block( )
				.append( twigDupCheck )
				.$if(
					'twig[ arg ] === undefined',
					$fail( )
				)
				.$( 'delete twig[ arg ]' )
				.$( 'ranks.splice( ranks.indexOf( arg ), 1 )' )
			);
	}

	switchExpr =
		switchExpr
		.$default(
			$block( )
			.$check( $fail( ) )
		);

	loop = loop.append( switchExpr );

	return(
		$block( )
		.$for(
			'a = 0, aZ = arguments.length',
			'a < aZ',
			'a += 2',
			loop
		)
	);
};


/*
| Generates the creators default values
*/
prototype.genCreatorDefaults =
	function(
		json,     // only do jsons
		abstract  // if true generates the abstract creator
	)
{
	var
		a,
		aZ,
		attr,
		name,
		result;

/**/if( CHECK )
/**/{
/**/	if( json && abstract !== undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	result = $block( );

	for(
		a = 0, aZ = this.attributes.size;
		a < aZ;
		a++
	)
	{
		name = this.attributes.sortedKeys[ a ];

		attr = this.attributes.get( name );

		if( json && !attr.json )
		{
			continue;
		}

		if(
			attr.defaultValue !== undefined
			&&
			!attr.defaultValue.equals( shorthand.$undefined )
		)
		{
			result =
				result
				.$if(
					$( attr.varRef, ' === undefined' ),
					$( attr.varRef, ' = ', attr.defaultValue )
				);
		}
	}

	return result;
};


/*
| Generates a type check of a non set variable.
|
| It is true if the variable fails the check.
*/
prototype.genSingleTypeCheckFailCondition =
	function(
		aVar,
		id
	)
{
	switch( id.pathName )
	{
		case 'boolean' :

			return $( 'typeof( ', aVar, ' ) !== "boolean"' );

		case 'integer' :

			return $(
				$( 'typeof( ', aVar, ' ) !== "number"' ),
				'||',
				$( 'Math.floor( ', aVar, ' ) !== ', aVar )
			);

		case 'function' :

			return $( 'typeof( ', aVar, ' ) !== "function"' );

		case 'null' :

			throw new Error( );

		case 'number' :

			return $( 'typeof( ', aVar, ' ) !== "number"' );

		case 'string' :

			return(
				$(
					'typeof( ', aVar, ' ) !== "string"',
					'&&',
					'!( ', aVar, ' instanceof String )'
				)
			);

		default :

			return $( aVar, '.reflect !== ', id.$pathName );
	}
};


/*
| Generates a type check of a variable.
*/
prototype.genTypeCheckFailCondition =
	function(
		aVar,  // the variable to check
		idx  // the id or idGroup it has to match
	)
{
	var
		a,
		aZ,
		condArray,
		id,
		keyList;

	if( idx.reflect === 'id' )
	{
		return this.genSingleTypeCheckFailCondition( aVar, idx );
	}


/**/if( CHECK )
/**/{
/**/	if( idx.reflect !== 'idGroup' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	if( idx.size === 1 )
	{
		return(
			this.genSingleTypeCheckFailCondition(
				aVar,
				idx.get( idx.keys[ 0 ] )
			)
		);
	}

	condArray = [ ];

	keyList = idx.sortedKeys;

	for(
		a = 0, aZ = keyList.length;
		a < aZ;
		a++
	)
	{
		id = idx.get( keyList[ a ] );

		switch( id.pathName )
		{
			case 'null' :

				condArray.unshift( $( aVar, '!== null' ) );

				continue;

			case 'undefined' :

				condArray.unshift( $( aVar, '!== undefined' ) );

				continue;

			default :

				condArray.push(
					this.genSingleTypeCheckFailCondition( aVar, id )
				);

				continue;
		}
	}

	return $and.apply( undefined, condArray );
};



/*
| Generates the creators checks.
*/
prototype.genCreatorChecks =
	function(
		json,    // do checks for fromJsonCreator
		abstract  // if true generates the abstract creator
	)
{
	var
		a,
		allowsNull,
		allowsUndefined,
		attr,
		av,
		aZ,
		check,
		cond,
		name,
		tcheck;

/**/if( CHECK )
/**/{
/**/	if( json && abstract !== undefined )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	check = $block( );

	for(
		a = 0, aZ = this.attributes.size;
		a < aZ;
		a++
	)
	{
		name = this.attributes.sortedKeys[ a ];

		attr = this.attributes.get( name );

		if( json && !attr.json )
		{
			continue;
		}

		av = attr.varRef;

		allowsNull = attr.allowsNull;

		allowsUndefined = abstract || attr.allowsUndefined;

		if( !allowsUndefined )
		{
			check = check.$if( $( av, ' === undefined' ), $fail( ) );
		}

		if( !allowsNull )
		{
			check = check.$if( $( av, ' === null' ), $fail( ));
		}

		if( attr.id.pathName === 'protean' )
		{
			continue;
		}

		if( allowsNull && !allowsUndefined )
		{
			cond = $( av, ' !== null' );
		}
		else if( !allowsNull && allowsUndefined )
		{
			cond = $( av, ' !== undefined' );
		}
		else if( allowsNull && allowsUndefined )
		{
			cond = $( av, ' !== null && ', av, ' !== undefined' );
		}
		else
		{
			cond = undefined;
		}

		tcheck = this.genTypeCheckFailCondition( attr.varRef, attr.id );

		if( cond )
		{
			check = check.$if( cond, $if( tcheck, $fail( ) ) );
		}
		else
		{
			check = check.$if( tcheck, $fail( ) );
		}
	}

	if( this.group )
	{
		check =
			check
			.$forIn(
				'k', 'group',
				$block( )
				.$( 'o = group[ k ]' )
				.$if(
					this.genTypeCheckFailCondition( $( 'o' ), this.group ),
					$fail( )
				)
			);
	}

	if( this.ray )
	{
		check =
			check
			.$for(
				'r = 0, rZ = ray.length',
				'r < rZ',
				'++r',
				$block( )
				.$( 'o = ray[ r ]' )
				.$if(
					this.genTypeCheckFailCondition( $( 'o' ), this.ray ),
					$fail( )
				)
			);
	}

	if( this.twig )
	{
		// FUTURE check if ranks and twig keys match
		check =
			check
			.$for(
				'a = 0, aZ = ranks.length',
				'a < aZ',
				'++a',
				$block( )
				.$( 'o = twig[ ranks[ a ] ]' )
				.$if(
					this.genTypeCheckFailCondition( $( 'o' ), this.twig ),
					$fail( )
				)
			);
	}

	if( !json )
	{
		if( check.length > 0 )
		{
			return $block( ).$check( check );
		}
		else
		{
			return $block( );
		}
	}
	else
	{
		return check;
	}
};


/*
| Generates the creators prepares.
*/
prototype.genCreatorPrepares =
	function( )
{
	var
		a,
		aZ,
		attr,
		name,
		pAst,
		prepare,
		result,
		transform;

	result = $block( );

	transform =
		function( node )
	{
		if( node.reflect === 'ast_var' )
		{
			return(
				(
					node.name.indexOf( '_' ) >= 0
					|| node.name === 'undefined'
				)
				? node
				: node.create( 'name', 'v_' + node.name )
			);
		}
		else
		{
			return node;
		}
	};

	for(
		a = 0, aZ = this.attributes.size;
		a < aZ;
		a++
	)
	{
		name = this.attributes.sortedKeys[ a ];

		attr = this.attributes.get( name );

		prepare = attr.prepare;

		if( !prepare )
		{
			continue;
		}

		pAst = $( prepare );

		pAst = pAst.walk( transform );

		result = result.$( attr.varRef, ' = ', pAst );
	}

	return result;
};



/*
| Generates the creators unchanged detection,
|
| returning this object if so.
*/
prototype.genCreatorUnchanged =
	function(
		abstract  // if true generates the abstract creator
	)
{
	var
		a,
		aZ,
		attr,
		ceq,
		cond,
		name;

/**/if( CHECK )
/**/{
/**/	if( typeof( abstract ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	cond = $( 'inherit' );

	if( this.group ) cond = $( cond, '&& groupDup === false' );

	if( this.ray ) cond = $( cond, '&& rayDup === false' );

	if( this.twig ) cond = $( cond, '&& twigDup === false' );

	for(
		a = 0, aZ = this.attributes.size;
		a < aZ;
		a++
	)
	{
		name = this.attributes.sortedKeys[ a ];

		attr = this.attributes.get( name );

		if( attr.assign === '' )
		{
			cond = $( cond, '&& (', attr.varRef, ' === undefined )' );

			continue;
		}

		ceq =
			this.genAttributeEquals(
				name,
				attr.varRef,
				$( 'inherit.', attr.assign ),
				'equals',
				abstract
			);

		cond = $( cond, '&&', ceq );
	}

	return $block( ).$if( cond, $( 'return inherit' ) );
};


/*
| Generates the creators return statement
*/
prototype.genCreatorReturn =
	function(
		abstract  // if true generates the abstract creator
	)
{
	var
		a,
		aZ,
		argName,
		argList,
		attr,
		call,
		conName;

/**/if( CHECK )
/**/{
/**/	if( typeof( abstract ) !== 'boolean' )
/**/	{
/**/		throw new Error( );
/**/	}
/**/}

	argList = abstract ? this.abstractConstructorList : this.constructorList;

	conName = abstract ? 'AbstractConstructor' : 'Constructor';

	if( this.singleton )
	{
		return(
			$block( )
			.$if(
				'!_singleton',
				$( '_singleton = new ', conName, '( )' )
			)
			.$( 'return _singleton' )
		);
	}

	call = $( conName ,'( )' );

	for( a = 0, aZ = argList.length; a < aZ; a++ )
	{
		argName = argList[ a ];

		switch( argName )
		{
			case 'group' :
			case 'groupDup' :
			case 'inherit' :
			case 'ranks' :
			case 'ray' :
			case 'rayDup' :
			case 'twig' :
			case 'twigDup' :

				call = call.$argument( argName );

				break;

			default :

				attr = this.attributes.get( argName );

				call = call.$argument( attr.varRef );
		}
	}

	return $( 'return new', call );
};


/*
| Generates the creator.
*/
prototype.genCreator =
	function(
		abstract  // if true generates the abstract creator
	)
{
	var
		block,
		creator,
		funcName;

	block =
		$block( )
		.$( this.genCreatorVariables( abstract ) )
		.$( this.genCreatorInheritanceReceiver( abstract ) );

	if( this.creatorHasFreeStringsParser )
	{
		block = block.$( this.genCreatorFreeStringsParser( abstract ) );
	}

	block =
		block
		.$( this.genCreatorDefaults( false, abstract ) )
		.$( this.genCreatorChecks( false, abstract ) )
		.$( abstract ? $block( ) : this.genCreatorPrepares( ) )
		.$( this.genCreatorUnchanged( abstract ) )
		.$( this.genCreatorReturn( abstract ) );

	creator =
		$func( block )
		.$arg( undefined, 'free strings' );

	funcName = abstract ? 'abstract' : 'create';

	return(
		$block( )
		.$comment(
			abstract
			? 'Creates an ' + this.id.name + ' object.'
			: 'Creates a new ' + this.id.name + ' object.'
		)
		.$(
			this.id.global, '.', funcName,
			this.hasAbstract
				? [ ' = ', 'AbstractConstructor.prototype.', funcName ]
				: undefined,
			' = prototype.', funcName,
			' = ', creator
		)
	);
};


/*
| Generates the fromJsonCreator's variable list.
*/
prototype.genFromJsonCreatorVariables =
	function( )
{
	var
		a,
		aZ,
		attr,
		name,
		varList,
		result;

	varList = [ ];

	for( name in this.attributes.group )
	{
		attr = this.attributes.get( name );

		if( attr.assign === '' )
		{
			continue;
		}

		varList.push( attr.varRef.name );
	}

	varList.push( 'arg' );

	if( this.hasJson )
	{
		if( this.group )
		{
			varList.push( 'gray', 'group', 'k', 'o' );
		}

		if( this.ray )
		{
			varList.push( 'jray', 'o', 'ray', 'r', 'rZ' );
		}

		if( this.twig )
		{
			varList.push( 'a',
				'aZ',
				'key',
				'jval',
				'jwig',
				'o',
				'ranks',
				'twig'
			);
		}
	}

	varList.sort( );

	result = $block( );

	for(
		a = 0, aZ = varList.length;
		a < aZ;
		a++
	)
	{
		result = result.$varDec( varList[ a ] );
	}

	return result;
};

/*
| Generates a fromJsonCreator's json parser for one attribute
*/
prototype.genFromJsonCreatorAttributeParser =
	function(
		attr
	)
{
	var
		code, // code to return
		cSwitch, // the code switch
		id,
		keyList,
		mif, // the multi if
		sif, // a signle if
		t,
		tZ;

	switch( attr.id.pathName )
	{
		case 'boolean' :
		case 'integer' :
		case 'number' :
		case 'string' :

			code = $( attr.varRef, ' = arg' );

			break;

		default :

			if( attr.id.reflect === 'id' )
			{
				code =
					$(
						attr.varRef, ' = ',
							attr.id.$global, '.createFromJSON( arg )'
					);
			}
			else
			{
				mif = undefined;

				code = $block( );

				cSwitch = undefined;

				keyList = attr.id.sortedKeys;

				for(
					t = 0, tZ = keyList.length;
					t < tZ;
					t++
				)
				{
					id = attr.id.get( keyList[ t ] );

					switch( id.pathName )
					{
						case 'boolean' :

							sif =
								$if(
									'typeof( arg ) === "boolean"',
									$( attr.varRef, ' = arg' )
								);

							break;

						case 'number' :

							sif =
								$if(
									'typeof( arg ) === "number"',
									$( attr.varRef, ' = arg' )
								);

							break;

						case 'string' :

							sif =
								$if(
									$(
										'typeof( arg ) === "string"',
										'||',
										'arg instanceof String'
									),
									$( attr.varRef, ' = arg' )
								);

							break;

						default :

							sif = undefined;

							break;
					}

					if( sif )
					{
						if( !mif )
						{
							mif = sif;
						}
						else
						{
							mif = mif.$elsewise( sif );
						}
					}
					else
					{
						if( !cSwitch )
						{
							cSwitch =
								$switch( 'arg.type' ) .$default( $fail( ) );
						}

						cSwitch =
							cSwitch
							.$case(
								id.$pathName,
								$(
									attr.varRef, ' = ',
									id.$global,
									'.createFromJSON', '( arg )'
								)
							);
					}
				}

				if( mif )
				{
					code =
						cSwitch
						? mif.$elsewise( cSwitch )
						: mif;
				}
				else
				{
					if( !cSwitch )
					{
						throw new Error( );
					}

					code = cSwitch;
				}
			}
	}

	if( attr.allowsNull )
	{
		code =
			$if(
				'arg === null',
				/* then */ $( attr.varRef, ' = null' ),
				/* else */ code
			);
	}

	return code;
};


/*
| Generates the fromJsonCreator's json parser.
*/
prototype.genFromJsonCreatorParser =
	function(
		jsonList
	)
{
	var
		a,
		aZ,
		attr,
		name,
		// the switch
		nameSwitch;

	nameSwitch =
		$switch( 'name' )
		.$case(
			'"type"',
			$if(
				$( 'arg !== ', this.id.$pathName ),
				$fail( )
			)
		);

	if( this.group )
	{
		nameSwitch =
			nameSwitch
			.$case( '"group"', 'jgroup = arg' );
	}

	if( this.ray )
	{
		nameSwitch =
			nameSwitch
			.$case( '"ray"', 'jray = arg' );
	}

	if( this.twig )
	{
		nameSwitch =
			nameSwitch
			.$case( '"twig"', 'jwig = arg' )
			.$case( '"ranks"', 'ranks = arg' );
	}

	for(
		a = 0, aZ = jsonList.length;
		a < aZ;
		a++
	)
	{
		name = jsonList[ a ];

		if(
			name === 'group'
			|| name === 'ranks'
			|| name === 'ray'
			|| name === 'twig'
		)
		{
			continue;
		}

		attr = this.attributes.get( name );

		nameSwitch =
			nameSwitch
			.$case(
				$string( attr.name ),
				this.genFromJsonCreatorAttributeParser( attr )
			);
	}

	return(
		$block( )
		.$forIn(
			'name',
			'json',
			$block( )
			.$( 'arg = json[ name ]' )
			.append( nameSwitch )
		)
	);
};


/*
| Generates the fromJsonCreator's group processing.
*/
prototype.genFromJsonCreatorGroupProcessing =
	function( )
{
	var
		group,
		haveNull,
		keyList,
		loopBody,
		loopSwitch,
		g,
		gid,
		gZ,
		result;

	group = this.group;

	keyList = group.sortedKeys;

	haveNull = false;

	result =
		$block( )
		.$if( '!jgroup', $fail( ) )
		.$( 'group = { }' );

	loopSwitch =
		$switch( 'jgroup[ r ].type' )
		.$default( $fail( ) );

	for(
		g = 0, gZ = keyList.length;
		g < gZ;
		g++
	)
	{
		gid = group.get( keyList[ g ] );

		if( gid.pathName === 'null' )
		{
			haveNull = true;

			continue;
		}

		loopSwitch =
			loopSwitch
			.$case(
				gid.$pathName,
				'group[ k ] =', gid.$global, '.createFromJSON( jgroup[ k ] )'
			);
	}

	if( !haveNull )
	{
		loopBody = loopSwitch;
	}
	else
	{
		loopBody =
			$block( ).
			$if(
				'jgroup[ k ] === null',
				$block( )
				.$(' group[ k ] = null' )
				.$continue( )
			)
			.$( loopSwitch );
	}

	return result.$forIn( 'k', 'jgroup', loopBody );
};


/*
| Generates the fromJsonCreator's twig processing.
*/
prototype.genFromJsonCreatorRayProcessing =
	function( )
{
	var
		haveNull,
		haveUndefined,
		keyList,
		loopBody,
		loopSwitch,
		r,
		ray,
		result,
		rid,
		rZ;

	ray = this.ray;

	keyList = ray.sortedKeys;

	haveNull = false;

	haveUndefined = false;

	result =
		$block( )
		.$if( '!jray', $fail( ) )
		.$( 'ray = [ ]' );

	loopSwitch =
		$switch( 'jray[ r ].type' )
		.$default( $fail( ) );

	for(
		r = 0, rZ = keyList.length;
		r < rZ;
		r++
	)
	{
		rid = ray.get( keyList[ r ] );

		if( rid.pathName === 'null' )
		{
			haveNull = true;

			continue;
		}

		if( rid.pathName === 'undefined' )
		{
			haveUndefined = true;

			continue;
		}

		loopSwitch =
			loopSwitch
			.$case(
				rid.$pathName,
				'ray[ r ] =', rid.$global, '.createFromJSON( jray[ r ] )'
			);
	}

	loopBody = $block( );

	if( haveNull )
	{
		loopBody =
			loopBody.
			$if(
				'jray[ r ] === null',
				$block( )
				.$( 'ray [ r ] = null' )
				.$continue( )
			);
	}

	if( haveUndefined )
	{
		loopBody =
			loopBody.
			$if(
				'jray[ r ] === undefined',
				$block( )
				.$( 'ray [ r ] = undefined' )
				.$continue( )
			);
	}

	loopBody =
		loopBody.length > 0
		? loopBody.append( loopSwitch )
		: loopSwitch;

	return(
		result
		.$for(
			'r = 0, rZ = jray.length',
			'r < rZ',
			'++r',
			loopBody
		)
	);
};


/*
| Generates the fromJsonCreator's twig processing.
*/
prototype.genFromJsonCreatorTwigProcessing =
	function( )
{
	var
		a,
		aZ,
		loop,
		switchExpr,
		twig,
		twigID,
		keyList;

	switchExpr = $switch( 'jval.type' );

	twig = this.twig;

	keyList = twig.sortedKeys;

	for(
		a = 0, aZ = keyList.length;
		a < aZ;
		a++
	)
	{
		twigID = twig.get( keyList[ a ] );

		switchExpr =
			switchExpr
			.$case(
				twigID.$pathName,
				$(
					'twig[ key ] =',
					twigID.$global, '.createFromJSON( jval )'
				)
			);
	}

	switchExpr =
		switchExpr
		.$default(
			// invalid twig type
			$fail( )
		);

	loop =
		$block( )
		.$( 'key = ranks[ a ]' )
		.$if(
			'!jwig[ key ]',
			// json ranks/twig mismatch
			$fail( )
		)
		.$( 'jval = jwig[ key ]' )
		.append( switchExpr );

	return(
		$block( )
		.$( 'twig = { }' )
		.$if(
			'!jwig || !ranks',
			// ranks/twig information missing
			$fail( )
		)
		.$for(
			'a = 0, aZ = ranks.length',
			'a < aZ',
			'++a',
			loop
		)
	);
};


/*
| Generates the fromJsonCreator's return statement
*/
prototype.genFromJsonCreatorReturn =
	function( )
{
	var
		a,
		aZ,
		attr,
		call,
		name;

	call = $( 'Constructor( )' );

	for(
		a = 0, aZ = this.constructorList.length;
		a < aZ;
		a++
	)
	{
		name = this.constructorList[ a ];

		switch( name )
		{
			case 'inherit' :

				call = call.$argument( 'null' );

				break;

			case 'groupDup' :
			case 'rayDup' :
			case 'twigDup' :

				call = call.$argument( 'true' );

				break;

			case 'group' :
			case 'ranks' :
			case 'ray' :
			case 'twig' :

				call = call.$argument( name );

				break;

			default :

				attr = this.attributes.get( name );

				if( attr.assign === '' )
				{
					call = call.$argument( 'null' );
				}
				else
				{
					call = call.$argument( attr.varRef );
				}
		}
	}

	return $( 'return new', call );
};


/*
| Generates the fromJsonCreator.
*/
prototype.genFromJsonCreator =
	function( )
{
	var
		a,
		aZ,
		attr,
		// function contents
		funcBlock,
		// all attributes expected from json
		name,
		jsonList;

	jsonList = [ ];

	for(
		a = 0, aZ = this.attributes.size;
		a < aZ;
		a++
	)
	{
		name = this.attributes.sortedKeys[ a ];

		attr = this.attributes.get( name );

		if( attr.json )
		{
			jsonList.push( name );
		}
	}

	if( this.twig )
	{
		jsonList.push( 'twig', 'ranks' );
	}

	jsonList.sort( );

	funcBlock =
		this.genFromJsonCreatorVariables( )
		.$( this.genFromJsonCreatorParser( jsonList ) )
		.$( this.genCreatorDefaults( true ) );

	if( this.group )
	{
		funcBlock =
			funcBlock
			.$( this.genFromJsonCreatorGroupProcessing( ) );
	}

	if( this.ray )
	{
		funcBlock =
			funcBlock
			.$( this.genFromJsonCreatorRayProcessing( ) );
	}

	if( this.twig )
	{
		funcBlock =
			funcBlock
			.$( this.genFromJsonCreatorTwigProcessing( ) );
	}

	funcBlock =
		funcBlock
		.$( this.genCreatorChecks( true ) )
		.$( this.genFromJsonCreatorReturn( ) );

	return(
		$block( )
		.$comment( 'Creates a new ' + this.id.name + ' object from json.' )
		.$(
			this.id.global, '.createFromJSON =',
			$func( funcBlock ).$arg( 'json', 'the json object' )
		)
	);
};


/*
| Generates the node include section.
*/
prototype.genReflection =
	function( )
{
	return(
		$block( )
		.$(
			this.hasAbstract
			? $(
				$block( )
				.$comment( 'Abstract Reflection.' )
				.$(
					'AbstractConstructor.prototype.reflect = ',
					this.id.$abstractPathName
				)
				.$comment( 'Abstract Name Reflection.' )
				.$(
					'AbstractConstructor.prototype.reflectName = ',
					this.id.$abstractName
				)
			)
			: undefined
		)
		.$comment( 'Reflection.' )
		.$( 'prototype.reflect = ', this.id.$pathName )
		.$comment( 'Name Reflection.' )
		.$( 'prototype.reflectName =', this.id.$name )
	);
};


/*
| Generates the jionProto stuff.
*/
prototype.genJionProto =
	function( )
{
	var
		result;

	result =
		$block( )
		.$comment( 'Sets values by path.' )
		.$( 'prototype.setPath = jion_proto.setPath' )

		.$comment( 'Gets values by path' )
		.$( 'prototype.getPath = jion_proto.getPath' );

	if( this.group )
	{
		result =
			result

			.$comment(
				'Returns the group with another group added,',
				'overwriting collisions.'
			)
			.$( 'prototype.addGroup = jion_proto.groupAddGroup' )

			.$comment( 'Gets one element from the group.' )
			.$( 'prototype.get = jion_proto.groupGet' )

			.$comment( 'Returns the group keys.')
			.$(
				'jion_proto.lazyValue',
				'( prototype, "keys", jion_proto.groupKeys )'
			)

			.$comment( 'Returns the sorted group keys.')
			.$(
				'jion_proto.lazyValue(',
					'prototype,',
					'"sortedKeys",',
					'jion_proto.groupSortedKeys',
				')'
			)

			.$comment( 'Returns the group with one element removed.' )
			.$( 'prototype.remove = jion_proto.groupRemove' )

			.$comment( 'Returns the group with one element set.' )
			.$( 'prototype.set = jion_proto.groupSet' )

			.$comment( 'Returns the size of the group.')
			.$(
				'jion_proto.lazyValue',
				'( prototype, "size", jion_proto.groupSize )'
			);
	}

	if( this.ray )
	{
		result =
			result
			.$comment( 'Returns the ray with an element appended.' )
			.$( 'prototype.append = jion_proto.rayAppend' )

			.$comment( 'Returns the ray with another ray appended.' )
			.$( 'prototype.appendRay = jion_proto.rayAppendRay' )

			.$comment( 'Returns the length of the ray.')
			.$(
				'jion_proto.lazyValue',
				'( prototype, "length", jion_proto.rayLength )'
			)

			.$comment( 'Returns one element from the ray.' )
			.$( 'prototype.get = jion_proto.rayGet' )

			.$comment( 'Returns the ray with one element inserted.' )
			.$( 'prototype.insert = jion_proto.rayInsert' )

			.$comment( 'Returns the ray with one element removed.' )
			.$( 'prototype.remove = jion_proto.rayRemove' )

			.$comment( 'Returns the ray with one element set.' )
			.$( 'prototype.set = jion_proto.raySet' );
	}

	if( this.twig )
	{
		result =
			result
			.$comment( 'Returns the element at rank.' )
			.$( 'prototype.atRank = jion_proto.twigAtRank' )

			.$comment( 'Returns the element by key.' )
			.$( 'prototype.get = jion_proto.twigGet' )

			.$comment( 'Returns the key at a rank.' )
			.$( 'prototype.getKey = jion_proto.twigGetKey' )

			.$comment( 'Returns the length of the twig.')
			.$(
				'jion_proto.lazyValue',
				'( prototype, "length", jion_proto.twigLength )'
			)

			.$comment( 'Returns the rank of the key.' )
			.$(
				'jion_proto.lazyFunctionString( ',
					'prototype, "rankOf", jion_proto.twigRankOf ',
				')'
			)

			.$comment( 'Returns the twig with the element at key set.' )
			.$( 'prototype.set = jion_proto.twigSet' );
	}

	return result;
};


/*
| Generates the toJson converter.
*/
prototype.genToJson =
	function( )
{
	var
		a,
		aZ,
		attr,
		block,
		name,
		olit;

	block = $block( ).$varDec( 'json' );

	olit =
		$objLiteral( )
		.add( 'type', this.id.$pathName );

	for(
		a = 0, aZ = this.attributes.size;
		a < aZ;
		a++
	)
	{
		name = this.attributes.sortedKeys[ a ];

		attr = this.attributes.get( name );

		if( !attr.json )
		{
			continue;
		}

		olit = olit.add( name, 'this.', attr.assign );
	}

	if( this.group )
	{
		olit = olit.add( 'group', 'this.group' ); // FIXME
	}

	if( this.ray ) olit = olit.add( 'ray', 'this._ray' );

	if( this.twig )
	{
		olit =
			olit
			.add( 'ranks', 'this._ranks' )
			.add( 'twig', 'this._twig' );
	}

	block =
		block
		.$( 'json =', olit )
		.$if(
			'FREEZE',
			$( 'Object.freeze( json )' )
		)
		.$( 'return', $func( 'return json' ) );

	return(
		$block( )
		.$comment( 'Converts a ' + this.id.name + ' into json.' )
		.$(
			'jion_proto.lazyValue( prototype, "toJSON", ', $func( block ), ')'
		)
	);
};


/*
| Generates the equals condition for an attribute.
|
| FIXME: in case of idLists this is still wonky
|         it needs to differenciate primitives correctly
*/
prototype.genAttributeEquals =
	function(
		name,       // attribute name
		le,         // this value expression
		re,         // other value expression
		eqFuncName, // the equals function name to call
		abstract    // if true considers all attributed to be potentially
		//          // undefined
	)
{
	var
		allowsNull,
		allowsUndefined,
		attr,
		ceq;

	attr = this.attributes.get( name );

	allowsNull = attr.allowsNull;

	allowsUndefined = abstract || attr.allowsUndefined;

	switch( attr.id.pathName )
	{
		case 'boolean' :
		case 'function' :
		case 'integer' :
		case 'number' :
		case 'protean' :
		case 'string' :

			ceq = $( le, ' === ', re );

			break;

		default :

			if( allowsNull && allowsUndefined )
			{
				ceq =
					$(
						le, ' === ', re,
						'|| (',
							le, ' !== null',
							'&&', le, ' !== undefined',
							'&&', le, '.', eqFuncName, '(', re, ')',
						')'
					);
			}
			else if( allowsNull )
			{
				ceq =
					$(
						le, ' === ', re,
						'|| (',
							le, ' !== null',
							'&&', le, '.', eqFuncName, '(', re, ')',
						')'
					);
			}
			else if( allowsUndefined )
			{
				ceq =
					$(
						le, ' === ', re,
						'|| (',
							le, '!== undefined',
							'&&', le, '.', eqFuncName, '(', re, ')',
						')'
					);
			}
			else
			{
				ceq =
					$(
						le, ' === ', re,
						'|| (',
							// FIXME this shouldnt be necessary
							le, '.', eqFuncName,
							'&&', le, '.', eqFuncName, '(', re, ')',
						')'
					);
			}
	}

	return ceq;
};


/*
| Generates the body of an equals test.
*/
prototype.genEqualsFuncBody =
	function(
		mode,       // 'normal' or 'json'
		eqFuncName  // name of equals func to call
	)
{
	var
		a,
		aZ,
		attr,
		body,
		cond,
		ceq,
		name,
		groupTest,
		groupTestLoopBody,
		rayTest,
		rayTestLoopBody,
		twigTest,
		twigTestLoopBody;

	body = $block( );

	cond = null;

	if( this.ray || this.twig )
	{
		body =
			body
			.$varDec( 'a' )
			.$varDec( 'aZ' );
	}

	if( this.twig )
	{
		body = body.$varDec( 'key' );
	}

	body =
		body
		.$if( 'this === obj', $( 'return true' ) )
		.$if( '!obj', $( 'return false' ) )
		.$if(
			$( 'obj.reflect !== ', this.id.$pathName ),
			$(' return false' )
		);

	if( this.group )
	{
		groupTestLoopBody =
			$block( )
			.$if(
				$(
					'this.group[ k ] !== obj.group[ k ]',
					'&& (',
						'!this.group[ k ].', eqFuncName,
						'||',
						'!this.group[ k ].', eqFuncName, '( obj.group[ k ] )',
					')'
				),
				$( 'return false' )
			);

		groupTest =
			$block( )
			.$if(
				'this.size !== obj.size',
				$( 'return false' )
			)
			.$forIn(
				'k',
				'this.group',
				groupTestLoopBody
			);

		body = body.$if( 'this.group !== obj.group', groupTest );
	}

	if( this.ray )
	{
		rayTestLoopBody =
			$block( )
			.$if(
				$(
					'this._ray[ a ] !== obj._ray[ a ]',
					'&& (',
						'!this._ray[ a ].' + eqFuncName,
						'||',
						'!this._ray[ a ].' + eqFuncName + '( obj._ray[ a ] )',
					')'
				),
				$( 'return false' )
			);

		rayTest =
			$block( )
			.$if(
				'this.length !== obj.length',
				$( 'return false' )
			)
			.$for(
				// this.length?
				'a = 0, aZ = this.length',
				'a < aZ',
				'++a',
				rayTestLoopBody
			);

		body = body.$if( 'this._ray !== obj._ray', rayTest );
	}

	if( this.twig )
	{
		twigTestLoopBody =
			$block( )
			.$( 'key = this._ranks[ a ]' )
			.$if(
				$(
					'key !== obj._ranks[ a ]',
					'|| (',
						'( this._twig[ key ].', eqFuncName, ' )',
						'? !this._twig[ key ]',
							'.', eqFuncName, '( obj._twig[ key ] )',
						': this._twig[ key ] !== obj._twig[ key ]',
					')'
				),
				$( 'return false' )
			);

		twigTest =
			$block( )
			.$if(
				'this.length !== obj.length',
				$( 'return false' )
			)
			.$for(
				'a = 0, aZ = this.length',
				'a < aZ',
				'++a',
				twigTestLoopBody
			);

		body =
			body
			.$if(
				$(
					'this._twig !== obj._twig',
					'||',
					'this._ranks !== obj._ranks'
				),
				twigTest
			);
	}

	for(
		a = 0, aZ = this.attributes.size;
		a < aZ;
		a++
	)
	{
		name = this.attributes.sortedKeys[ a ];

		attr = this.attributes.get( name );

		if( attr.assign === '' )
		{
			continue;
		}

		if( mode === 'json' && !attr.json )
		{
			continue;
		}

		ceq =
			this.genAttributeEquals(
				name,
				$( 'this.', attr.assign ),
				$( 'obj.', attr.assign ),
				eqFuncName,
				false
			);

		cond =
			cond === null
			? ceq
			: $( cond, '&&', ceq );
	}

	if( cond )
	{
		return body.$( 'return ', cond );
	}
	else
	{
		return body.$( 'return true' );
	}
};

/*
| Generates the equals tests.
*/
prototype.genEquals =
	function( )
{
	var
		block,
		normalEqFuncBody,
		jsonEqFuncBody;

	block = $block( );

	normalEqFuncBody = this.genEqualsFuncBody( 'normal', 'equals' );

	if( this.hasJson )
	{
		jsonEqFuncBody = this.genEqualsFuncBody( 'json', 'equalsJSON' );
	}

	if( !normalEqFuncBody.equals( jsonEqFuncBody ) )
	{
		block = block.$comment( 'Tests equality of object.' );

		block =
			block
			.$(
				'prototype.equals =',
					$func( normalEqFuncBody )
					.$arg( 'obj', 'object to compare to' )
			);

		if( this.hasJson )
		{
			block = block.$comment( 'Tests equality of json representation.' );

			block =
				block
				.$(
					'prototype.equalsJSON =',
						$func( jsonEqFuncBody )
						.$arg( 'obj', 'object to compare to' )
				);
		}
	}
	else
	{
		// equals and equalsJSON have identical
		// function bodies.

		block =
			block
			.$comment(
				'Tests equality of object.',
				'Tests equality of json representation.'
			)
			.$assign(
				'prototype.equals',
				$(
					'prototype.equalsJSON =',
						$func( normalEqFuncBody )
						.$arg( 'obj', 'object to compare to' )
				)
			);
	}

	return block;
};


/*
| Generates the alike test(s).
*/
prototype.genAlike =
	function( )
{
	var
		a, aZ,
		alikeList,
		alikeName,
		attr,
		block,
		ceq,
		cond,
		ignores,
		name,
		result;

	alikeList = Object.keys( this.alike );

	alikeList.sort( );

	cond = null;

	result = $block( );

	for(
		a = 0, aZ = alikeList.length;
		a < aZ;
		a++
	)
	{
		alikeName = alikeList[ a ];

		ignores = this.alike[ alikeName ].ignores;

		result = result.$comment( 'Tests partial equality.' );

		block =
			$block( )
			.$if( 'this === obj', $( 'return true') )
			.$if( '!obj', $(' return false' ) );

		if( this.twig )
		{
			// FIXME same test as in equals
			cond =
				$(
					'this._twig === obj._twig',
					'&&',
					'this._ranks === obj._ranks'
				);
		}

		for(
			a = 0, aZ = this.attributes.size;
			a < aZ;
			a++
		)
		{
			name = this.attributes.sortedKeys[ a ];

			attr = this.attributes.get( name );

			if( attr.assign === '' || ignores[ name ] )
			{
				continue;
			}

			ceq =
				this.genAttributeEquals(
					name,
					$( 'this.', attr.assign ),
					$( 'obj.', attr.assign ),
					'equals',
					false
				);

			cond =
				cond === null
				? ceq
				: $( cond, '&&', ceq );
		}

		block = block.$( 'return', cond );

		result =
			result
			.$assign(
				$( 'prototype.', alikeName ),
				$func( block )
				.$arg( 'obj', 'object to compare to' )
			);
	}

	return result;
};


/*
| Returns the generated export block.
*/
prototype.genExport =
	function( )
{
	return(
		$block( )
		.$comment( 'Export.' )
		.$varDec( this.id.global )
		.$if(
			'NODE',
			$( this.id.global, ' = module.exports' ),
			$( this.id.global, ' = { }' )
		)
	);
};


/*
| Generates the preamble.
*/
prototype.genPreamble =
	function(
		block // block to append to
	)
{
	return block;
};


/*
| Returns the generated capsule block.
*/
prototype.genCapsule =
	function( )
{
	var
		capsule;

	capsule =
		$block( )
		.$( '"use strict"' )
		.$( this.genNodeIncludes( ) )
		.$( this.hasAbstract ? this.genConstructor( true ) : undefined )
		.$( this.genConstructor( false ) );

	if( this.singleton )
	{
		capsule = capsule.$( this.genSingleton( ) );
	}

	capsule =
		capsule
		.$( this.hasAbstract ? this.genCreator( true ) : undefined )
		.$( this.genCreator( false ) );

	if( this.hasJson )
	{
		capsule = capsule.$( this.genFromJsonCreator( ) );
	}

	capsule =
		capsule
		.$( this.genReflection( ) )
		.$( this.genJionProto( ) );

	if( this.hasJson )
	{
		capsule = capsule.$( this.genToJson( ) );
	}

	capsule = capsule.$( this.genEquals( ) );

	if( this.alike )
	{
		capsule = capsule.$( this.genAlike( ) );
	}

	return(
		$block( )
		.$comment( 'Capsule' )
		.append( $capsule( capsule ) )
	);
};


/*
| Generates code from a jion definition.
*/
generator.generate =
	function(
		jion, // the jion definition
		ouroboros // 'ouroboros' if an ouroboros build
	)
{
	var
		result,
		gi;

	jion_validator.check( jion );

	gi = generator.create( 'jion', jion, 'ouroboros', !!ouroboros );

	result =
		$block( )
		.$comment(
			'This is an auto generated file.',
			'',
			'Editing might turn out rather futile.'
		)
		.$( gi.genExport( ) )
		.$( gi.genImports( ) )
		.$( gi.genCapsule( ) );

	return result;
};


} )( );
