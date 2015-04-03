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
if( JION )
{
	return{
		id : 'jion_generator',
		attributes :
		{
			'jion' :
			{
				comment : 'the jion definition',
				type : 'protean',
				assign : ''
			}
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
	$condition,
	$fail,
	$func,
	$if,
	$objLiteral,
	$or,
	$string,
	$switch,
	$var,
	jion_id,
	generator,
	jion_attribute,
	jion_attributeGroup,
	jion_idGroup,
	jion_stringRay,
	jion_validator,
	jools,
	parser,
	prototype,
	shorthand;


generator = require( '../jion/this' )( module );

prototype = generator.prototype;

jion_id = require( './id' );

jion_idGroup = require( './idGroup' );

jion_stringRay = require( './stringRay' );

jools = require( '../jools/jools' );

jion_attribute = require( './attribute' );

jion_attributeGroup = require( './attributeGroup' );

jion_validator = require( './validator' );

parser = require( '../jsParser/parser' );

shorthand = require( '../ast/shorthand' );

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

$condition = shorthand.$condition;

$fail = shorthand.$fail;

$func = shorthand.$func;

$if = shorthand.$if;

$objLiteral = shorthand.$objLiteral;

$or = shorthand.$or;

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
		groupDef,
		inits, // sorted init list
		jAttr,
		jdv,
		name,
		prepare,
		rayDef,
		searchIdWalk,
		type,
		twigDef, // twig map to be used (the definition)
		units; // units used

	attributes = jion_attributeGroup.create( );

	abstractConstructorList = [ ];

	constructorList = [ ];

	units = jion_idGroup.create( );

	units = units.add( jion_id.createFromString( 'jion_proto' ) );

	searchIdWalk =
		function( node )
	{
		if( node.reflect === 'ast_var' )
		{
			if( node.name.indexOf( '_' ) >= 0 )
			{
				units = units.add( jion_id.createFromString( node.name ) );
			}
		}

		return node;
	};

	this.hasJson = !!jion.json;

	this.init = jion.init;

	this.singleton = !!jion.singleton;

	this.id = jion_id.createFromString( jion.id );

	for( name in jion.attributes || { } )
	{
		jAttr = jion.attributes[ name ];

		type = jAttr.type;

		if( jools.isString( type ) && type.substring( 0, 2 ) === '->' )
		{
			type = require( '../typemaps/' + type.substring( 2 ) );
		}

		if( !Array.isArray( type ) )
		{
			aid = jion_id.createFromString( type );

			units = units.add( aid );
		}
		else
		{
			aid = jion_idGroup.createFromIDStrings( type );

			units = units.addGroup( aid );
		}

		if( jAttr.json )
		{
			this.hasJson = true;
		}

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
		if( jools.isString( jion.group ) )
		{
			groupDef = require( '../typemaps/' + jion.group.substring( 2 ) );
		}
		else
		{
			groupDef = jion.group;
		}

		this.group = jion_idGroup.createFromIDStrings( groupDef );

		units = units.addGroup( this.group );
	}
	else
	{
		this.group = undefined;
	}

	if( jion.ray )
	{
		if( jools.isString( jion.ray ) )
		{
			rayDef = require( '../typemaps/' + jion.ray.substring( 2 ) );
		}
		else
		{
			rayDef = jion.ray;
		}

		this.ray = jion_idGroup.createFromIDStrings( rayDef );

		units = units.addGroup( this.ray );
	}
	else
	{
		this.ray = undefined;
	}

	if( jion.twig )
	{
		if( jools.isString( jion.twig ) )
		{
			twigDef = require( '../typemaps/' + jion.twig.substring( 2 ) );
		}
		else
		{
			twigDef = jion.twig;
		}

		this.twig = jion_idGroup.createFromIDStrings( twigDef );

		units = units.addGroup( this.twig );

	}
	else
	{
		this.twig = undefined;
	}

	this.units = units;

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
		b,
		bZ,
		nameList,
		result,
		unitList;

	result =
		$block( )
		.$comment( 'Imports.' )
		.$varDec( 'jools' );

	// FIXME: when type checking is there,
	// this might become needed always.

	unitList = this.units.unitList;

	// FIXME this is akward
	// just put them all together into one simple id list
	for(
		a = 0, aZ = unitList.length;
		a < aZ;
		a++
	)
	{
		nameList = this.units.nameListOfUnit( unitList[ a ] );

		for(
			b = 0, bZ = nameList.length;
			b < bZ;
			b++
		)
		{
			// FUTURE make this more elegant
			if( nameList[ b ].indexOf( ':' ) >= 0 )
			{
				continue;
			}

			result =
				result
				.$varDec( unitList[ a ] + '_' + nameList[ b ] );
		}
	}

	return result;
};


/*
| Generates the node include.
*/
prototype.genNodeIncludes =
	function( )
{
	var
		a,
		aZ,
		b,
		bZ,
		block,
		name,
		nameList,
		unitList,
		unitStr;

	block =
		$block( )
		.$( 'jools = require( "../../src/jools/jools" )' );

	// generates the unit objects

	unitList = this.units.unitList;

	for(
		a = 0, aZ = unitList.length;
		a < aZ;
		a++
	)
	{
		unitStr = unitList[ a ];

		nameList = this.units.nameListOfUnit( unitStr );

		for(
			b = 0, bZ = nameList.length;
			b < bZ;
			b++
		)
		{
			name = nameList[ b ];

			if( unitStr + '_' + name === this.id.global )
			{
				continue;
			}

			// FUTURE make sure the non-abstract
			//        version is in unitlist
			if( name.indexOf( ':' ) >= 0 )
			{
				// abstract
				continue;
			}

			block =
				block
				.$(
					unitStr + '_' + name,
					' = require( "../../src/' + unitStr + '/' + name + '" )'
				);
		}
	}

	return(
		$block( )
		.$comment( 'Node includes.' )
		.$if( 'SERVER', block )
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
		block = block.$( 'this.group = group' );
	}

	if( this.ray )
	{
		block = block.$( 'this.ray = ray' );
	}

	if( this.twig )
	{
		block =
			block
			.$( 'this.twig = twig' )  // FIXME remove
			.$( 'this._twig = twig' )
			.$( 'this.ranks = ranks' )  // FIXME remove
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

					initCall =
						initCall.addArgument( this.init[ a ] );

					continue;
			}

			attr = this.attributes.get( name );

			if( !attr )
			{
				throw new Error(
					'invalid parameter to init: ' + name
				);
			}

			initCall = initCall.addArgument( ( attr.varRef ) );
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
			.$( 'group = inherit.group' )
			.$( 'groupDup = false' );
	}

	if( this.ray )
	{
		receiver =
			receiver
			.$( 'ray = inherit.ray' )
			.$( 'rayDup = false' );
	}

	if( this.twig )
	{
		receiver =
			receiver
			.$( 'twig = inherit.twig' )
			.$( 'ranks = inherit.ranks' )
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
				.$( 'group = jools.copy( group )' )
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
				.$( 'twig = jools.copy( twig )' )
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
	switch( id.string )
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

			return $( aVar, '.reflect !== ', id.$string );
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
		idList;

	if( idx.reflect === 'jion_id' )
	{
		return this.genSingleTypeCheckFailCondition( aVar, idx );
	}

/**/if( CHECK )
/**/{
/**/	if( idx.reflect !== 'jion_idGroup' )
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

	idList = idx.idList;

	for(
		a = 0, aZ = idList.length;
		a < aZ;
		a++
	)
	{
		switch( idList[ a ].string )
		{
			case 'null' :
			
				condArray.unshift( $( aVar, '!== null' ) );

				continue;

			case 'undefined' :

				condArray.unshift( $( aVar, '!== undefined' ) );

				continue;

			default :

				condArray.push(
					this.genSingleTypeCheckFailCondition( aVar, idList[ a ] )
				);

				continue;
		}
	}

	return $and.apply( $and, condArray );
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

		if( attr.id.string === 'protean' )
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

	if( this.group )
	{
		cond = $( cond, '&& groupDup === false' );
	}

	if( this.ray )
	{
		cond = $( cond, '&& rayDup === false' );
	}

	if( this.twig )
	{
		cond = $( cond, '&& twigDup === false' );
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
			cond = $and( cond, $( attr.varRef, ' === undefined' ) );

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

		cond = $and( cond, ceq );
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

				call = call.addArgument( argName );

				break;

			default :

				attr = this.attributes.get( argName );

				call = call.addArgument( attr.varRef );
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
			' = ', 'AbstractConstructor.prototype.', funcName,
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
		idList,
		mif, // the multi if
		sif, // a signle if
		t,
		tZ;

	switch( attr.id.string )
	{
		case 'boolean' :
		case 'integer' :
		case 'number' :
		case 'string' :

			code = $( attr.varRef, ' = arg' );

			break;

		default :

			if( attr.id.reflect === 'jion_id' )
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

				idList = attr.id.idList;

				for(
					t = 0, tZ = idList.length;
					t < tZ;
					t++
				)
				{
					switch( idList[ t ].string )
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
							cSwitch = $switch( 'arg.type' ) .$default( $fail( ) );
						}

						cSwitch =
							cSwitch
							.$case(
								idList[ t ].$string,
								$(
									attr.varRef, ' = ',
									idList[ t ].$global,
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
				$( 'arg !== ', this.id.$string ),
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
		haveNull,
		idList,
		loopBody,
		loopSwitch,
		g,
		gid,
		gZ,
		result;

	haveNull = false;

	result =
		$block( )
		.$if( '!jgroup', $fail( ) )
		.$( 'group = { }' );

	idList = this.group.idList;

	loopSwitch =
		$switch( 'jgroup[ r ].type' )
		.$default( $fail( ) );

	for(
		g = 0, gZ = idList.length;
		g < gZ;
		g++
	)
	{
		gid = idList[ g ];

		if( gid.string === 'null' )
		{
			haveNull = true;

			continue;
		}

		loopSwitch =
			loopSwitch
			.$case(
				gid.$string,
				$assign(
					'group[ k ]',
					$( gid.$global, '.createFromJSON( jgroup[ k ] )' )
				)
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
		idList,
		loopBody,
		loopSwitch,
		r,
		result,
		rid,
		rZ;

	haveNull = false;
	
	haveUndefined = false;

	result =
		$block( )
		.$if( '!jray', $fail( ) )
		.$( 'ray = [ ]' );

	idList = this.ray.idList;

	loopSwitch =
		$switch( 'jray[ r ].type' )
		.$default( $fail( ) );

	for(
		r = 0, rZ = idList.length;
		r < rZ;
		r++
	)
	{
		rid = idList[ r ];

		if( rid.string === 'null' )
		{
			haveNull = true;

			continue;
		}
		
		if( rid.string === 'undefined' )
		{
			haveUndefined = true;

			continue;
		}

		loopSwitch =
			loopSwitch
			.$case(
				rid.$string,
				$assign(
					'ray[ r ]',
					$( rid.$global, '.createFromJSON( jray[ r ] )' )
				)
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
		twigID,
		twigList;

	switchExpr = $switch( 'jval.type' );

	twigList = this.twig.idList;

	for(
		a = 0, aZ = twigList.length;
		a < aZ;
		a++
	)
	{
		twigID = twigList[ a ];

		switchExpr =
			switchExpr
			.$case(
				twigID.$string,
				$assign(
					'twig[ key ]',
					$( twigID.$global, '.createFromJSON( jval )' )
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

				call = call.addArgument( null );

				break;

			case 'groupDup' :
			case 'rayDup' :
			case 'twigDup' :

				call = call.addArgument( true );

				break;

			case 'group' :
			case 'ranks' :
			case 'ray' :
			case 'twig' :

				call = call.addArgument( name );

				break;

			default :

				attr = this.attributes.get( name );

				if( attr.assign === '' )
				{
					call = call.addArgument( null );
				}
				else
				{
					call = call.addArgument( attr.varRef );
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
		.$comment( 'Abstract Reflection.' )
		.$(
			'AbstractConstructor.prototype.reflect = ',
			this.id.$abstractString
		)
		.$comment( 'Abstract Name Reflection.' )
		.$(
			'AbstractConstructor.prototype.reflectName = ',
			this.id.$abstractName
		)
		.$comment( 'Reflection.' )
		.$( 'prototype.reflect = ', this.id.$string )
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
			.$( 'jools.lazyValue( prototype, "keys", jion_proto.groupKeys )' )

			.$comment( 'Returns the sorted group keys.')
			.$(
				'jools.lazyValue(',
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
			.$( 'jools.lazyValue( prototype, "size", jion_proto.groupSize )' );
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
				'jools.lazyValue( prototype, "length", jion_proto.rayLength )'
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
				'jools.lazyValue( prototype, "length", jion_proto.twigLength )'
			)

			.$comment( 'Creates a new unique identifier.' )
			.$( 'prototype.newUID = jion_proto.newUID' )

			.$comment( 'Returns the rank of the key.' )
			.$(
				'jools.lazyFunctionString( ',
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
		.add( 'type', this.id.$string );

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

		olit = olit.add( name, $( 'this.', attr.assign ) );
	}

	if( this.group )
	{
		olit = olit.add( 'group', 'this.group' );
	}

	if( this.ray )
	{
		olit = olit.add( 'ray', 'this.ray' );
	}

	if( this.twig )
	{
		olit =
			olit
			.add( 'ranks', 'this._ranks' )
			.add( 'twig', 'this._twig' );
	}

	block =
		block
		.$assign( 'json', olit )
		.$if(
			'FREEZE',
			$( 'Object.freeze( json )' )
		)
		.$( 'return', $func( 'return json' ) );

	return(
		$block( )
		.$comment( 'Converts a ' + this.id.name + ' into json.' )
		.$(
			'jools.lazyValue( prototype, "toJSON", ', $func( block ), ')'
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

	switch( attr.id.string )
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
					$or(
						$( le, ' === ', re ),
						$and(
							$( le, ' !== null' ),
							$( le, ' !== undefined' ),
							$( le, '.', eqFuncName, '(', re, ')' )
						)
					);
			}
			else if( allowsNull )
			{
				ceq =
					$or(
						$( le, ' === ', re ),
						$and(
							$( le, ' !== null' ),
							$( le, '.', eqFuncName, '(', re, ')' )
						)
					);
			}
			else if( allowsUndefined )
			{
				ceq =
					$or(
						$( le, ' === ', re ),
						$and(
							$( le, '!== undefined' ),
							$( le, '.', eqFuncName, '(', re, ')' )
						)
					);
			}
			else
			{
				ceq =
					$or(
						$( le, ' === ', re ),
						$and(
							// FIXME this shouldnt be necessary
							$( le, '.', eqFuncName ),
							$( le, '.', eqFuncName, '(', re, ')' )
						)
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
			$( 'obj.reflect !== ', this.id.$string ),
			$(' return false' )
		);

	if( this.group )
	{
		groupTestLoopBody =
			$block( )
			.$if(
				$and(
					'this.group[ k ] !== obj.group[ k ]',
					$or(
						'!this.group[ k ].' + eqFuncName,
						'!this.group[ k ].' + eqFuncName + '( obj.group[ k ] )'
					)
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
				$and(
					'this.ray[ a ] !== obj.ray[ a ]',
					$or(
						'!this.ray[ a ].' + eqFuncName,
						'!this.ray[ a ].' + eqFuncName + '( obj.ray[ a ] )'
					)
				),
				$( 'return false' )
			);

		rayTest =
			$block( )
			.$if(
				'this.ray.length !== obj.ray.length',
				$( 'return false' )
			)
			.$for(
				// this.length?
				'a = 0, aZ = this.ray.length',
				'a < aZ',
				'++a',
				rayTestLoopBody
			);

		body = body.$if( 'this.ray !== obj.ray', rayTest );
	}

	if( this.twig )
	{
		twigTestLoopBody =
			$block( )
			.$( 'key = this._ranks[ a ]' )
			.$if(
				$or(
					'key !== obj._ranks[ a ]',
					$condition(
						'this._twig[ key ].' + eqFuncName,
						'!this._twig[ key ].'
						+ eqFuncName
						+ '( obj._twig[ key ] )',
						'this._twig[ key ] !== obj._twig[ key ]'
					)
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
			: $and( cond, ceq );
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
			.$assign(
				'prototype.equals',
				$func( normalEqFuncBody )
				.$arg( 'obj', 'object to compare to' )
			);

		if( this.hasJson )
		{
			block = block.$comment( 'Tests equality of json representation.' );

			block =
				block
				.$assign(
					'prototype.equalsJSON',
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
				$assign(
					'prototype.equalsJSON',
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
				: $and( cond, ceq );
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
			'SERVER',
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
		.$( this.genConstructor( true ) )
		.$( this.genConstructor( false ) );

	if( this.singleton )
	{
		capsule = capsule.$( this.genSingleton( ) );
	}

	capsule =
		capsule
		.$( this.genCreator( true ) )
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
| Generates code from a jools object definition.
*/
generator.generate =
	function(
		jion // the jion definition
	)
{
	var
		result,
		gi;

	jion_validator.check( jion );

	gi = generator.create( 'jion', jion );

	result =
		$block( )
		.$comment(
			'This is an auto generated file.',
			'',
			'DO NOT EDIT!'
		)
		.$( gi.genExport( ) )
		.$( gi.genImports( ) )
		.$( gi.genCapsule( ) );

	return result;
};


} )( );
