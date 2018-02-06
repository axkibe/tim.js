/*
| Generates timcode from a tim definition.
*/
'use strict';


require( './ouroboros' )
.define( module, 'generator', ( def, generator ) => {
// FIXME timjs$


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		id :
		{
			// id to be generated
			type : 'id',  // FIXME
		},
		timDef :
		{
			// the tim definition
			type : 'protean',
			assign : ''
		},
		jsonTypeMap :
		{
			// if defined a typemap for json generation/parsing
			type : [ 'undefined', 'protean' ],
			defaultValue : 'undefined'
		},
	};

	def.init = [ 'timDef' ];
}

const ast_var = require( './ast/var' );

const tim_id = require( './id' );

const type_group = require( './type/group' );

const tim_attribute = require( './attribute' );

const tim_attributeGroup = require( './attributeGroup' );

//const tim_validator = require( './validator' );

const parser = require( './jsParser/parser' );

const shorthand = require( './ast/shorthand' );

const idNull = tim_id.createFromString( 'null' );

const idUndefined = tim_id.createFromString( 'undefined' );

/*
| Shorthanding Shorthands.
*/
const $ = parser.parse;

const $and = shorthand.$and;

const $block = shorthand.$block;

const $capsule = shorthand.$capsule;

const $fail = shorthand.$fail;

const $func = shorthand.$func;

const $if = shorthand.$if;

const $objLiteral = shorthand.$objLiteral;

const $string = shorthand.$string;

const $switch = shorthand.$switch;

const $var = shorthand.$var;


/*
| Initializes a generator.
*/
def.func._init =
	function(
		timDef
	)
{
	let attributes = tim_attributeGroup.create( );

	const abstractConstructorList = [ ];

	const constructorList = [ ];

	// foreign ids to be imported
	let imports = type_group.create( );

	const searchIdWalk =
		function( node )
	{
		if(
			node.timtype === ast_var
			&& (
				node.name.indexOf( '_' ) >= 0
				|| node.name.indexOf( '$' ) >= 0
			)
		)
		{
			imports = imports.add( tim_id.createFromString( node.name ) );
		}

		return node;
	};

	this.hasJson = !!timDef.json;

	this.init = timDef.init;

	// in case of attributes, group, twig or list
	// it will be turned off again
	let singleton = true;

	this.hasAbstract = !!timDef.hasAbstract;

	for( let name in timDef.attributes || { } )
	{
		singleton = false;

		const jAttr = timDef.attributes[ name ];

		const type = jAttr.type;

		// attribute id
		let aid;

		if( !Array.isArray( type ) )
		{
			aid = tim_id.createFromString( type );

			imports = imports.add( aid );
		}
		else
		{
			aid = type_group.createFromArray( type );

			imports = imports.addGroup( aid );

			if( aid.size === 1 ) aid = aid.get( aid.keys[ 0 ] );
		}

		if( jAttr.json ) this.hasJson = true;

		const assign =
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

		let defaultValue;

		const prepare = jAttr.prepare;

		if( prepare )
		{
			$( prepare ).walk( searchIdWalk );
		}

		const jdv = jAttr.defaultValue;

		if( jdv )
		{
			defaultValue =
				jdv === 'undefined'
				? shorthand.$undefined
				: $( jdv );
		}

		let allowsNull = false;

		let allowsUndefined = false;

		if( aid.timtype === type_group )
		{
			if( aid.has( idNull ) )
			{
				aid = aid.create( 'group:remove', 'null' );

				allowsNull = true;
			}

			if( aid.has( idUndefined ) )
			{
				aid = aid.create( 'group:remove', 'undefined' );

				allowsUndefined = true;
			}

			if( aid.size === 1 ) aid = aid.get( aid.keys[ 0 ] );
		}

		const attr =
			tim_attribute.create(
				'allowsNull', allowsNull,
				'allowsUndefined', allowsUndefined,
				'assign', assign,
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

	if( timDef.group )
	{
		singleton = false;

		abstractConstructorList.unshift( 'group' );

		constructorList.unshift( 'group' );
	}

	if( timDef.list )
	{
		singleton = false;

		abstractConstructorList.unshift( 'list' );

		constructorList.unshift( 'list' );
	}

	if( timDef.twig )
	{
		singleton = false;

		abstractConstructorList.unshift( 'ranks' );

		abstractConstructorList.unshift( 'twig' );

		constructorList.unshift( 'ranks' );

		constructorList.unshift( 'twig' );
	}

	if( timDef.init )
	{
		singleton = false;

		const inits = timDef.init.slice( ).sort( );

		for( let a = inits.length - 1; a >= 0; a-- )
		{
			let name = timDef.init[ a ];

			if( attributes.get( name ) ) continue;

			switch( name )
			{
				case 'inherit' :
				case 'twigDup' :
				case 'group' :
				case 'groupDup' :
				case 'list' :
				case 'listDup' :

					constructorList.unshift( name );

					break;

				default :

					throw new Error(
						'invalid init value: ' + name
					);
			}
		}
	}

	this.singleton = singleton;

	if( FREEZE )
	{
		Object.freeze( abstractConstructorList );

		Object.freeze( constructorList );
	}

	this.abstractConstructorList = abstractConstructorList;

	this.constructorList = constructorList;

	if( timDef.group )
	{
		this.group = type_group.createFromArray( timDef.group );

		imports = imports.addGroup( this.group );
	}
	else
	{
		this.group = undefined;
	}

	if( timDef.list )
	{
		this.list = type_group.createFromArray( timDef.list );

		imports = imports.addGroup( this.list );
	}
	else
	{
		this.list = undefined;
	}

	if( timDef.twig )
	{
		this.twig = type_group.createFromArray( timDef.twig );

		imports = imports.addGroup( this.twig );

	}
	else
	{
		this.twig = undefined;
	}

	this.imports = imports;

	this.alike = timDef.alike;

	this.creatorHasFreeStringsParser =
		this.group
		|| this.list
		|| this.twig
		|| this.attributes.size > 0;
};


/*
| Generates the imports.
*/
def.func.genImports =
	function( )
{
	return(
		$block( )
		.$comment( 'The typed immutable.' )
		.$let( this.id.global, 'NODE ? module.exports : module' )
	);
};


/*
| Generates the requires.
*/
def.func.genRequires =
	function( )
{
	let block = $block( );

	const imports = this.imports;

	const idKeys = imports.sortedKeys;

	for( let a = 0, al = idKeys.length; a < al; a++ )
	{
		const idKey = idKeys[ a ];

		if( idKey.indexOf( ':' ) >= 0 )
		{
			// abstract
			// FUTURE more elegant
			continue;
		}

		const id = imports.get( idKey );

		if( id.equals( this.id ) )
		{
			// the timcode shouldn't require itself
			continue;
		}

		if( id.isPrimitive ) continue;

		// no need to require tim itself
		if( id.packet === 'tim' ) continue;

		if( id.packet && id.packet !== this.id.packet )
		{
			block =
				block
				.$let(
					id.global,
					$(
					  'require( "' + id.packet + '" ).',
					  id.pathName
					)
				);
		}
		else
		{
			block =
				block
				.$let(
					id.global,
					'require( "' + this.id.rootPath + id.path + '" )'
				);
		}
	}

	if( this.ouroboros )
	{
		return(
			block.$(
				'require( '
				+ '"'
				+ this.id.rootPath
				+ 'proto"'
				+ ' )'
			)
		);
	}
	else
	{
		return block.$let( 'tim_proto = tim.proto' );
	}
};


/*
| Generates the constructor.
*/
def.func.genConstructor =
	function(
		abstract // if true generate abstract constructor
	)
{
	let block = $block( );

	block =
		block
		.$if(
			(
				abstract
				? 'abstractPrototype.__have_lazy'
				: 'prototype.__have_lazy'
			),
			$( 'this.__lazy = { }' )
		);

	const attributes = this.attributes;

	// assigns the variables
	for( let a = 0, as = attributes.size; a < as; a++ )
	{
		const name = attributes.sortedKeys[ a ];

		const attr = attributes.get( name );

		if( attr.assign === '' ) continue;

		const assign = $( 'this.', attr.assign, ' = ', attr.varRef );

		block = block.append( assign );
	}

	if( this.group ) block = block.$( 'this._group = group' );

	if( this.list ) block = block.$( 'this._list = list' );

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
		let initCall = $( 'this._init( )' );

		for( let a = 0, al = this.init.length; a < al; a++ )
		{
			const name = this.init[ a ];

			switch( name )
			{
				case 'inherit' :
				case 'twigDup' :

					initCall = initCall.$argument( this.init[ a ] );

					continue;
			}

			const attr = attributes.get( name );

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
	let freezeBlock = $block( );

	if( this.group )
	{
		freezeBlock = freezeBlock.$( 'Object.freeze( group )' );
	}

	if( this.list )
	{
		freezeBlock = freezeBlock.$( 'Object.freeze( list )' );
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

	// FUTURE force freezing date attributes

	block = block.$if( 'FREEZE', freezeBlock );

	let cf = $func( block );

	const cList =
		abstract
		? this.abstractConstructorList
		: this.constructorList;

	for( let a = 0, al = cList.length; a < al; a++ )
	{
		const name = cList[ a ];

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

			case 'list' :

				cf = cf.$arg( 'list', 'list' );

				break;

			case 'listDup' :

				cf =
					cf.$arg(
						'listDup',
						'true if list is already been duplicated'
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

				const attr = attributes.get( name );

				cf = cf.$arg( attr.varRef.name, attr.comment );

				break;
		}
	}

	if( !abstract )
	{
		return(
			$block( )
			.$comment( 'Constructor.' )
			.$const( 'Constructor', cf )
			.$comment( 'Prototype shortcut' )
			.$const( 'prototype', 'Constructor.prototype' )
			.$( this.id.$global, '.prototype = prototype' )
		);
	}
	else
	{
		return(
			$block( )
			.$comment( 'Abstract constructor.' )
			.$const( 'AbstractConstructor', cf )
			.$const( 'abstractPrototype', 'AbstractConstructor.prototype' )
		);
	}
};



/*
| Generates the singleton decleration.
*/
def.func.genSingleton =
	function( )
{
	return(
		$block( )
		.$comment( 'Singleton' )
		.$let( '_singleton' )
	);
};


/*
| Generates the creators variable list.
*/
def.func.CreatorVariables =
	function(
		abstract  // if true generates the abstract creator
	)
{
/**/if( CHECK )
/**/{
/**/	if( typeof( abstract ) !== 'boolean' ) throw new Error( );
/**/}

	const varList = [ ];

	const aKeys = this.attributes.keys;

	for( let a = 0, al = aKeys.length; a < al; a++ )
	{
		const name = aKeys[ a ];

		varList.push( this.attributes.get( name ).varRef.name );
	}

	varList.push( 'inherit' );

	if( this.group )
	{
		varList.push( 'group', 'groupDup' );
	}

	if( this.list )
	{
		varList.push( 'list', 'listDup' );
	}

	if( this.twig )
	{
		varList.push( 'key', 'rank', 'ranks', 'twig', 'twigDup' );
	}

	varList.sort( );

	let result = $block( );

	for( let a = 0, al = varList.length; a < al; a++ )
	{
		result = result.$varDec( varList[ a ] );
	}

	return result;
};


/*
| Generates the creators variable list.
*/
def.func.genCreatorVariables =
	function(
		abstract  // if true generates the abstract creator
	)
{
/**/if( CHECK )
/**/{
/**/	if( typeof( abstract ) !== 'boolean' ) throw new Error( );
/**/}

	const varList = [ ];

	const aKeys = this.attributes.keys;

	for( let a = 0, al = aKeys.length; a < al; a++ )
	{
		const name = aKeys[ a ];

		varList.push( this.attributes.get( name ).varRef.name );
	}

	varList.push( 'inherit' );

	if( this.group )
	{
		varList.push( 'group', 'groupDup' );
	}

	if( this.list )
	{
		varList.push( 'list', 'listDup' );
	}

	if( this.twig )
	{
		varList.push( 'key', 'rank', 'ranks', 'twig', 'twigDup' );
	}

	varList.sort( );

	let result = $block( );

	for( let a = 0, al = varList.length; a < al; a++ )
	{
		result = result.$varDec( varList[ a ] );
	}

	return result;
};



/*
| Generates the creators inheritance receiver.
*/
def.func.genCreatorInheritanceReceiver =
	function(
		abstract  // if true generates the abstract creator
	)
{
/**/if( CHECK )
/**/{
/**/	if( typeof( abstract ) !== 'boolean' ) throw new Error( );
/**/}

	let receiver = $block( ).$( 'inherit = this' );

	if( this.group )
	{
		receiver =
			receiver
			.$( 'group = inherit._group' )
			.$( 'groupDup = false' );
	}

	if( this.list )
	{
		receiver =
			receiver
			.$( 'list = inherit._list' )
			.$( 'listDup = false' );
	}

	if( this.twig )
	{
		receiver =
			receiver
			.$( 'twig = inherit._twig' )
			.$( 'ranks = inherit._ranks' )
			.$( 'twigDup = false' );
	}

	for( let a = 0, as = this.attributes.size; a < as; a++ )
	{
		const name = this.attributes.sortedKeys[ a ];

		const attr = this.attributes.get( name );

		if( attr.assign === '' ) continue;

		receiver = receiver.$( attr.varRef, ' = ', 'this.', attr.assign );
	}

	let result =
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

	if( this.list )
	{
		result =
			result
			.$elsewise(
				$block( )
				.$( 'list = [ ]' )
				.$( 'listDup = true' )
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
def.func.genCreatorFreeStringsParser =
	function(
		// abstract  // if true generates the abstract creator
	)
{
	let loop =
		$block( )
		.$let( 'arg', 'arguments[ a + 1 ]' );

	let switchExpr = $switch( 'arguments[ a ]' );

	for( let a = 0, as = this.attributes.size; a < as; a++ )
	{
		const name = this.attributes.sortedKeys[ a ];

		const attr = this.attributes.get( name );

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
		const groupDupCheck =
			$if(
				'!groupDup',
				$block( )
				.$( 'group = tim_proto.copy( group )' )
				.$( 'groupDup = true' )
			);

		switchExpr =
			switchExpr
			.$case(
				'"group:init"',
				$block( )
				.$( 'group = arg' )
				.$( 'groupDup = "init"' )   // TODO just set it true
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

	if( this.list )
	{
		const listDupCheck =
			$if(
				'!listDup',
				$block( )
				.$( 'list = list.slice( )' )
				.$( 'listDup = true' )
			);

		switchExpr =
			switchExpr
			.$case(
				'"list:init"',
				$block( )
				.$check(
					$if( '!Array.isArray( arg )', $fail( ) )
				)
				.$( 'list = arg' )
				.$( 'listDup = "init"' )   // TODO just set it true
			)
			.$case(
				'"list:append"',
				$block( )
				.append( listDupCheck )
				.$( 'list.push( arg )' )
			)
			.$case(
				'"list:insert"',
				$block( )
				.append( listDupCheck )
				.$( 'list.splice( arg, 0, arguments[ ++a + 1 ] )' )
			)
			.$case(
				'"list:remove"',
				$block( )
				.append( listDupCheck )
				.$( 'list.splice( arg, 1 ) ' )
			)
			.$case(
				'"list:set"',
				$block( )
				.append( listDupCheck )
				.$( 'list[ arg ] = arguments[ ++a + 1 ]' )
			);
	}

	if( this.twig )
	{
		const twigDupCheck =
			$if(
				'twigDup !== true',
				$block( )
				.$( 'twig = tim_proto.copy( twig )' )
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
				'"twig:init"',
				$block( )
				.$( 'twigDup = true' )
				.$( 'twig = arg' )
				.$( 'ranks = arguments[ ++a + 1 ]' )
				.$check(
					$block( )
					.$if(
						'Object.keys( twig ).length !== ranks.length',
						$fail( )
					)
					.$for(
						'let t = 0, tl = ranks.length',
						't < tl',
						't++',
						$block( )
						.$if(
							'twig[ ranks[ t ] ] === undefined',
							$fail( )
						)
					)
				)
			)
			.$case(
				'"twig:set+"',
				$block( )
				.$( twigDupCheck )
				.$( 'key = arg' )
				.$( 'arg = arguments[ ++a + 1 ]' )
				.$if(
					'twig[ key ] === undefined',
					$( 'ranks.push( key )' )
				)
				.$( 'twig[ key ] = arg' )
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
			.$fail( )
		);

	loop = loop.append( switchExpr );

	return(
		$block( )
		.$for(
			'let a = 0, al = arguments.length',
			'a < al',
			'a += 2',
			loop
		)
	);
};


/*
| Generates the creators default values
*/
def.func.genCreatorDefaults =
	function(
		json,     // only do jsons
		abstract  // if true generates the abstract creator
	)
{
/**/if( CHECK )
/**/{
/**/	if( json && abstract !== undefined ) throw new Error( );
/**/}

	let result = $block( );

	for( let a = 0, as = this.attributes.size; a < as; a++ )
	{
		const name = this.attributes.sortedKeys[ a ];

		const attr = this.attributes.get( name );

		if( json && !attr.json ) continue;

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
def.func.genSingleTypeCheckFailCondition =
	function(
		aVar,
		id,
		abstract
	)
{
	switch( id.pathName )
	{
		case 'boolean' :

			return $( 'typeof( ', aVar, ' ) !== "boolean"' );

		case 'date' :

			return $( '!(', aVar, 'instanceof Date )' );

		case 'integer' :

			return $(
				$( 'typeof( ', aVar, ' ) !== "number"' ),
				'||',
				'Number.isNaN( ', aVar, ' )',
				'||',
				$( 'Math.floor( ', aVar, ' ) !== ', aVar )
			);

		case 'function' :

			return $( 'typeof( ', aVar, ' ) !== "function"' );

		case 'null' :

			throw new Error( );

		case 'number' :

			return $(
				'typeof( ', aVar, ' ) !== "number"',
				'||',
				'Number.isNaN( ', aVar, ' )'
			);

		case 'string' :

			return $(
				'typeof( ', aVar, ' ) !== "string"',
				'&&',
				'!( ', aVar, ' instanceof String )'
			);

		default :

			if( !abstract )
			{
				return $( aVar, '.timtype !== ', id.global );
			}
			else
			{
				return $(
					aVar, '.timtype !== ', id.global,
					'&&',
					aVar, '.timtype !== ', id.global, '.abstract'
				);
			}
	}
};


/*
| Generates a type check of a variable.
*/
def.func.genTypeCheckFailCondition =
	function(
		aVar,    // the variable to check
		idx,     // the id or type_group it has to match
		abstract // if true generate for an abstract constructor
	)
{
	if( idx.timtype === tim_id )
	{
		return this.genSingleTypeCheckFailCondition( aVar, idx, abstract );
	}


/**/if( CHECK )
/**/{
/**/	if( idx.timtype !== type_group ) throw new Error( );
/**/}

	if( idx.size === 1 )
	{
		return(
			this.genSingleTypeCheckFailCondition(
				aVar,
				idx.get( idx.keys[ 0 ] ),
				abstract
			)
		);
	}

	const condArray = [ ];

	const keyList = idx.sortedKeys;

	for( let a = 0, al = keyList.length; a < al; a++ )
	{
		const id = idx.get( keyList[ a ] );

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
					this.genSingleTypeCheckFailCondition( aVar, id, abstract )
				);

				continue;
		}
	}

	return $and.apply( undefined, condArray );
};



/*
| Generates the creators checks.
*/
def.func.genCreatorChecks =
	function(
		json,    // do checks for fromJsonCreator
		abstract  // if true generates the abstract creator
	)
{
/**/if( CHECK )
/**/{
/**/	if( json && abstract !== undefined ) throw new Error( );
/**/}

	let check = $block( );

	for( let a = 0, as = this.attributes.size; a < as; a++ )
	{
		const name = this.attributes.sortedKeys[ a ];

		const attr = this.attributes.get( name );

		if( json && !attr.json ) continue;

		const av = attr.varRef;

		const allowsNull = attr.allowsNull;

		const allowsUndefined = abstract || attr.allowsUndefined;

		if( !allowsUndefined )
		{
			check = check.$if( $( av, ' === undefined' ), $fail( ) );
		}

		if( !allowsNull )
		{
			check = check.$if( $( av, ' === null' ), $fail( ));
		}

		if( attr.id.pathName === 'protean' ) continue;

		let cond;

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

		const tcheck = this.genTypeCheckFailCondition( attr.varRef, attr.id, abstract );

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
				.$const( 'o', 'group[ k ]' )
				.$if(
					this.genTypeCheckFailCondition( $( 'o' ), this.group, abstract ),
					$fail( )
				)
			);
	}

	if( this.list )
	{
		check =
			check
			.$for(
				'let r = 0, rl = list.length',
				'r < rl',
				'++r',
				$block( )
				.$const( 'o', 'list[ r ]' )
				.$if(
					this.genTypeCheckFailCondition( $( 'o' ), this.list, abstract ),
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
				'let a = 0, al = ranks.length',
				'a < al',
				'++a',
				$block( )
				// XXX very dirty hack 
				.$if( 'prototype.abstract', $block( ).$continue( ) )
				.$const( 'o', 'twig[ ranks[ a ] ]' )
				.$if(
					this.genTypeCheckFailCondition( $( 'o' ), this.twig, abstract ),
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
def.func.genCreatorPrepares =
	function( )
{
	let result = $block( );

	const transform =
		function( node )
	{
		if( node.timtype === ast_var )
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

	for( let a = 0, as = this.attributes.size; a < as; a++ )
	{
		const name = this.attributes.sortedKeys[ a ];

		const attr = this.attributes.get( name );

		const prepare = attr.prepare;

		if( !prepare ) continue;

		let pAst = $( prepare );

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
def.func.genCreatorUnchanged =
	function(
		abstract  // if true generates the abstract creator
	)
{
/**/if( CHECK )
/**/{
/**/	if( typeof( abstract ) !== 'boolean' ) throw new Error( );
/**/}

	let cond = $( 'inherit' );

	if( this.group ) cond = $( cond, '&& groupDup === false' );

	if( this.list ) cond = $( cond, '&& listDup === false' );

	if( this.twig ) cond = $( cond, '&& twigDup === false' );

	const attributes = this.attributes;

	for( let a = 0, as = attributes.size; a < as; a++ )
	{
		const name = attributes.sortedKeys[ a ];

		const attr = attributes.get( name );

		if( attr.assign === '' )
		{
			cond = $( cond, '&& (', attr.varRef, ' === undefined )' );

			continue;
		}

		const ceq =
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
def.func.genCreatorReturn =
	function(
		abstract  // if true generates the abstract creator
	)
{
/**/if( CHECK )
/**/{
/**/	if( typeof( abstract ) !== 'boolean' ) throw new Error( );
/**/}

	const argList = abstract ? this.abstractConstructorList : this.constructorList;

	const conName = abstract ? 'AbstractConstructor' : 'Constructor';

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

	let call = $( conName ,'( )' );

	for( let a = 0, al = argList.length; a < al; a++ )
	{
		const argName = argList[ a ];

		switch( argName )
		{
			case 'group' :
			case 'groupDup' :
			case 'inherit' :
			case 'ranks' :
			case 'list' :
			case 'listDup' :
			case 'twig' :
			case 'twigDup' :

				call = call.$argument( argName );

				break;

			default :

				call = call.$argument( this.attributes.get( argName ).varRef );
		}
	}

	return $( 'return new', call );
};


/*
| Generates the creator.
*/
def.func.genCreator =
	function(
		abstract  // if true generates the abstract creator
	)
{
	let block =
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

	const creator =
		$func( block )
		.$arg( undefined, 'free strings' );

	const funcName = abstract ? 'abstract' : 'create';

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
				? [ ' = ', 'abstractPrototype.', funcName ]
				: undefined,
			' = prototype.', funcName,
			' = ', creator
		)
	);
};


/*
| Generates the fromJsonCreator's variable list.
*/
def.func.genFromJsonCreatorVariables =
	function( )
{
	const varList = [ ];

	const aKeys = this.attributes.keys;

	for( let a = 0, al = aKeys.length; a < al; a++ )
	{
		const name = aKeys[ a ];

		const attr = this.attributes.get( name );

		if( attr.assign === '' ) continue;

		varList.push( attr.varRef.name );
	}

	if( this.hasJson )
	{
		if( this.group ) varList.push( 'jgroup', 'group', 'k' );

		if( this.list ) varList.push( 'jlist', 'list' );

		if( this.twig )
		{
			varList.push(
				'key',
				'jval',
				'jwig',
				'ranks',
				'twig'
			);
		}
	}

	varList.sort( );

	let result = $block( );

	for( let a = 0, al = varList.length; a < al; a++ )
	{
		result = result.$varDec( varList[ a ] );
	}

	return result;
};

/*
| Generates a fromJsonCreator's json parser for one attribute
|
| FUTURE date can currently not be json
*/
def.func.genFromJsonCreatorAttributeParser =
	function(
		attr
	)
{
	// a signle if
	let sif;

	// code to return
	let code;

	// the code switch
	let cSwitch;

	switch( attr.id.pathName )
	{
		case 'boolean' :
		case 'integer' :
		case 'number' :
		case 'string' :

			code = $( attr.varRef, ' = arg' );

			break;

		default :

			if( attr.id.timtype === tim_id )
			{
				code =
					$(
						attr.varRef, ' = ',
						attr.id.$global,
						'.createFromJSON( arg )'
					);
			}
			else
			{
				// the multi if
				let mif;

				code = $block( );

				cSwitch = undefined;

				const keyList = attr.id.sortedKeys;

				for( let t = 0, tl = keyList.length; t < tl; t++ )
				{
					const id = attr.id.get( keyList[ t ] );

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
						mif =
							!mif
							? sif
							: mif.$elsewise( sif );
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
								this.mapJsonTypeName( id.pathName ),
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
					if( !cSwitch ) throw new Error( );

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
def.func.genFromJsonCreatorParser =
	function(
		jsonList
	)
{
	// the switch
	let nameSwitch =
		$switch( 'name' )
		.$case(
			'"type"',
			$if(
				$( 'arg !== ', this.mapJsonTypeName( this.id.pathName ) ),
				$fail( )
			)
		);

	if( this.group )
	{
		nameSwitch =
			nameSwitch
			.$case( '"group"', 'jgroup = arg' );
	}

	if( this.list )
	{
		nameSwitch =
			nameSwitch
			.$case( '"list"', 'jlist = arg' );
	}

	if( this.twig )
	{
		nameSwitch =
			nameSwitch
			.$case( '"twig"', 'jwig = arg' )
			.$case( '"ranks"', 'ranks = arg' );
	}

	for( let a = 0, al = jsonList.length; a < al; a++ )
	{
		const name = jsonList[ a ];

		if(
			name === 'group'
			|| name === 'ranks'
			|| name === 'list'
			|| name === 'twig'
		)
		{
			continue;
		}

		const attr = this.attributes.get( name );

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
			.$const( 'arg', 'json[ name ]' )
			.append( nameSwitch )
		)
	);
};


/*
| Generates the fromJsonCreator's group processing.
*/
def.func.genFromJsonCreatorGroupProcessing =
	function( )
{
	const group = this.group;

	const keyList = group.sortedKeys;

	let haveNull = false;

	// FIXME dirty workaround
	if( keyList.length === 1 && keyList[ 0 ] === 'string' )
	{
		return(
			$block( )
			.$if( '!jgroup', $fail( ) )
			.$( 'group = jgroup' )
		);
	}

	const result =
		$block( )
		.$if( '!jgroup', $fail( ) )
		.$( 'group = { }' );

	let loopSwitch = $switch( 'jgroup[ k ].type' );

	if( group.get( 'string' ) )
	{
		loopSwitch =
			loopSwitch
			.$default(
				$if(
					$( 'typeof( jgroup[ k ] ) === "string"' ),
					$( 'group[ k ] = jgroup[ k ]' ),
					$fail( )
				)
			);
	}
	else
	{
		loopSwitch = loopSwitch.$default( $fail( ) );
	}

	for( let g = 0, gZ = keyList.length; g < gZ; g++ )
	{
		const gid = group.get( keyList[ g ] );

		if( gid.pathName === 'null' )
		{
			haveNull = true;

			continue;
		}

		loopSwitch =
			loopSwitch
			.$case(
				this.mapJsonTypeName( gid.pathName ),
				'group[ k ] =',
				gid.$global,
				'.createFromJSON( jgroup[ k ] )'
			);
	}

	let loopBody;

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
| Generates the fromJsonCreator's list processing.
*/
def.func.genFromJsonCreatorListProcessing =
	function( )
{
	const list = this.list;

	const keyList = list.sortedKeys;

	// FIXME dirty workaround
	if( keyList.length === 1 && keyList[ 0 ] === 'string' )
	{
		return(
			$block( )
			.$if( '!jlist', $fail( ) )
			.$( 'list = jlist' )
		);
	}

	const result =
		$block( )
		.$if( '!jlist', $fail( ) )
		.$( 'list = [ ]' );

	let loopSwitch =
		$switch( 'jlist[ r ].type' )
		.$default( $fail( ) );

	let haveNull = false;

	let haveUndefined = false;

	for( let r = 0, rl = keyList.length; r < rl; r++ )
	{
		const rid = list.get( keyList[ r ] );

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
				this.mapJsonTypeName( rid.pathName ),
				'list[ r ] =', rid.$global, '.createFromJSON( jlist[ r ] )'
			);
	}

	let loopBody = $block( );

	if( haveNull )
	{
		loopBody =
			loopBody.
			$if(
				'jlist[ r ] === null',
				$block( )
				.$( 'list[ r ] = null' )
				.$continue( )
			);
	}

	if( haveUndefined )
	{
		loopBody =
			loopBody.
			$if(
				'jlist[ r ] === undefined',
				$block( )
				.$( 'list[ r ] = undefined' )
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
			'let r = 0, rl = jlist.length',
			'r < rl',
			'++r',
			loopBody
		)
	);
};


/*
| Generates the fromJsonCreator's twig processing.
*/
def.func.genFromJsonCreatorTwigProcessing =
	function( )
{
	let switchExpr = $switch( 'jval.type' );

	const twig = this.twig;

	const keyList = twig.sortedKeys;

	for( let a = 0, al = keyList.length; a < al; a++ )
	{
		const twigID = twig.get( keyList[ a ] );

		switchExpr =
			switchExpr
			.$case(
				this.mapJsonTypeName( twigID.pathName ),
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

	const loop =
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
			'let a = 0, al = ranks.length',
			'a < al',
			'++a',
			loop
		)
	);
};


/*
| Generates the fromJsonCreator's return statement
*/
def.func.genFromJsonCreatorReturn =
	function( )
{
	let call = $( 'Constructor( )' );

	for( let a = 0, al = this.constructorList.length; a < al; a++ )
	{
		const name = this.constructorList[ a ];

		switch( name )
		{
			case 'inherit' :

				call = call.$argument( 'null' );

				break;

			case 'groupDup' :
			case 'listDup' :
			case 'twigDup' :

				call = call.$argument( 'true' );

				break;

			case 'group' :
			case 'ranks' :
			case 'list' :
			case 'twig' :

				call = call.$argument( name );

				break;

			default :

				const attr = this.attributes.get( name );

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
def.func.genFromJsonCreator =
	function( )
{
	// all attributes expected from json
	const jsonList = [ ];

	for( let a = 0, as = this.attributes.size; a < as; a++ )
	{
		const name = this.attributes.sortedKeys[ a ];

		const attr = this.attributes.get( name );

		if( attr.json ) jsonList.push( name );
	}

	if( this.twig )
	{
		jsonList.push( 'twig', 'ranks' );
	}

	jsonList.sort( );

	// function contents
	let funcBlock =
		this.genFromJsonCreatorVariables( )
		.$( this.genFromJsonCreatorParser( jsonList ) )
		.$( this.genCreatorDefaults( true ) );

	if( this.group )
	{
		funcBlock =
			funcBlock
			.$( this.genFromJsonCreatorGroupProcessing( ) );
	}

	if( this.list )
	{
		funcBlock =
			funcBlock
			.$( this.genFromJsonCreatorListProcessing( ) );
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
def.func.genReflection =
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
					'abstractPrototype.timtype = ',
					this.id.global,
					'.abstract'
				)
				.$( 'abstractPrototype.isAbstract = true' )
			)
			: undefined
		)
		.$comment( 'Reflection.' )
		.$( 'prototype.reflect = ', this.id.$pathName )
		.$comment( 'Type reflection.' )
		.$( 'prototype.timtype = ', this.id.$global )
	);
};


/*
| Generates code for setting the prototype
| entry 'key' to 'value'
*/
def.func.$protoSet =
	function(
		key,
		value
	)
{
	if( this.hasAbstract )
	{
		return $(
			'prototype.', key, ' = ',
			'abstractPrototype.', key, ' = ',
			value
		);
	}
	else
	{
		return $( 'prototype.', key, ' = ', value );
	}
};


/*
| Generates code for setting the prototype
| lazy value named 'name' to 'func'.
*/
def.func.$protoLazyValueSet =
	function(
		name,
		func
	)
{
	let ast =
		$block( )
		.$(
			'tim_proto.lazyValue(',
				'prototype,',
				name, ',',
				func,
			')'
		);

	if( this.hasAbstract )
	{
		ast =
			ast
			.$(
				'tim_proto.lazyValue(',
					'abstractPrototype,',
					name, ',',
					func,
				')'
			);
	}

	return ast;
};


/*
| Generates the timProto stuff.
*/
def.func.genTimProto =
	function( )
{
	let result =
		$block( )
		.$comment( 'Sets values by path.' )
		.$( this.$protoSet( 'setPath', 'tim_proto.setPath' ) )

		.$comment( 'Gets values by path' )
		.$( this.$protoSet( 'getPath', 'tim_proto.getPath' ) );

	if( this.group )
	{
		result =
			result

			.$comment(
				'Returns the group with another group added,',
				'overwriting collisions.'
			)
			.$( this.$protoSet( 'addGroup', 'tim_proto.groupAddGroup' ) )

			.$comment( 'Gets one element from the group.' )
			.$( this.$protoSet( 'get', 'tim_proto.groupGet' ) )

			.$comment( 'Returns the group keys.')
			.$( this.$protoLazyValueSet( '"keys"', 'tim_proto.groupKeys' ) )

			.$comment( 'Returns the sorted group keys.')
			.$( this.$protoLazyValueSet( '"sortedKeys"', 'tim_proto.groupSortedKeys' ) )

			.$comment( 'Returns the group with one element removed.' )
			.$( this.$protoSet( 'remove', 'tim_proto.groupRemove' ) )

			.$comment( 'Returns the group with one element set.' )
			.$( this.$protoSet( 'set', 'tim_proto.groupSet' ) )

			.$comment( 'Returns the size of the group.')
			.$( this.$protoLazyValueSet( '"size"', 'tim_proto.groupSize' ) );
	}

	if( this.list )
	{
		result =
			result
			.$comment( 'Returns the list with an element appended.' )
			.$( this.$protoSet( 'append', 'tim_proto.listAppend' ) )

			.$comment( 'Returns the list with another list appended.' )
			.$( this.$protoSet( 'appendList', 'tim_proto.listAppendList' ) )

			.$comment( 'Returns the length of the list.')
			.$( this.$protoLazyValueSet( '"length"', 'tim_proto.listLength' ) )

			.$comment( 'Returns one element from the list.' )
			.$( this.$protoSet( 'get', 'tim_proto.listGet' ) )

			.$comment( 'Returns a slice from the list.' )
			.$( this.$protoSet( 'slice', 'tim_proto.listSlice' ) )

			.$comment( 'Returns the list with one element inserted.' )
			.$( this.$protoSet( 'insert', 'tim_proto.listInsert' ) )

			.$comment( 'Returns the list with one element removed.' )
			.$( this.$protoSet( 'remove', 'tim_proto.listRemove' ) )

			.$comment( 'Returns the list with one element set.' )
			.$( this.$protoSet( 'set', 'tim_proto.listSet' ) );
	}

	if( this.twig )
	{
		result =
			result
			.$comment( 'Returns the element at rank.' )
			.$( this.$protoSet( 'atRank', 'tim_proto.twigAtRank' ) )

			.$comment( 'Returns the element by key.' )
			.$( this.$protoSet( 'get', 'tim_proto.twigGet' ) )

			.$comment( 'Returns the key at a rank.' )
			.$( this.$protoSet( 'getKey', 'tim_proto.twigGetKey' ) )

			.$comment( 'Returns the length of the twig.')
			.$( this.$protoLazyValueSet( '"length"', 'tim_proto.twigLength' ) )

			// FUTURE for abstracts as well
			.$comment( 'Returns the rank of the key.' )
			.$(
				'tim_proto.lazyFunctionString( ',
					'prototype, "rankOf", tim_proto.twigRankOf ',
				')'
			)

			.$comment( 'Returns the twig with the element at key set.' )
			.$( this.$protoSet( 'set', 'tim_proto.twigSet' ) );
	}

	return result;
};


/*
| Returns the json type name for a path name.
|
| If it is not in the jsonTypeMap it stays the same,
| otherwise it is mapped.
*/
def.func.mapJsonTypeName =
	function(
		pathName
	)
{
	const jtm = this.jsonTypeMap;

	return(
		shorthand.$string(
			!jtm
			? pathName
			: ( jtm[ pathName ] || pathName )
		)
	);
};


/*
| Generates the toJson converter.
*/
def.func.genToJson =
	function( )
{
	let olit =
		$objLiteral( )
		.add( 'type', this.mapJsonTypeName( this.id.pathName ) );

	for( let a = 0, as = this.attributes.size; a < as; a++ )
	{
		const name = this.attributes.sortedKeys[ a ];

		const attr = this.attributes.get( name );

		if( !attr.json ) continue;

		olit = olit.add( name, 'this.', attr.assign );
	}

	if( this.group )
	{
		olit = olit.add( 'group', 'this._group' );
	}

	if( this.list ) olit = olit.add( 'list', 'this._list' );

	if( this.twig )
	{
		olit =
			olit
			.add( 'ranks', 'this._ranks' )
			.add( 'twig', 'this._twig' );
	}

	let block =
		$block( )
		.$const( 'json', olit )
		.$if(
			'FREEZE',
			$( 'Object.freeze( json )' )
		)
		.$( 'return', $func( 'return json' ) );

	return(
		$block( )
		.$comment( 'Converts a ' + this.id.name + ' into json.' )
		.$(
			'tim_proto.lazyValue( prototype, "toJSON", ', $func( block ), ')'
		)
	);
};


/*
| Generates the equals condition for an attribute.
*/
def.func.genAttributeEquals =
	function(
		name,       // attribute name
		le,         // this value expression
		re,         // other value expression
		eqFuncName, // the equals function name to call
		abstract    // if true considers all attributed to be potentially
		//          // undefined
	)
{
	const attr = this.attributes.get( name );

	const allowsNull = attr.allowsNull;

	const allowsUndefined = abstract || attr.allowsUndefined;

	const ceq = $( le, ' === ', re );

	let pc, pn; // TODO what do they do?

	switch( attr.id.equalsConvention )
	{
		case 'mustnot' : return ceq;

		case 'can' :
		case 'must' :

			if( allowsNull ) pc = $( le, ' !== null' );

			if( allowsUndefined )
			{
				pn = $( le, ' !== undefined' );

				pc =
					pc
					? $( pc, '&&', pn )
					: pn;
			}

			pn = $( le, '.', eqFuncName, '(', re, ')' );

			if( attr.id.equalsConvention === 'can' )
			{
				pn = $( le, '.timtype', '&&', pn );
			}

			pc =
				pc
				? $( pc, '&&', pn )
				: pn;

			return $( ceq, '||', pc );

		default : throw new Error( );
	}
};


/*
| Generates the body of an equals test.
*/
def.func.genEqualsFuncBody =
	function(
		mode,       // 'normal' or 'json'
		eqFuncName  // name of equals func to call
	)
{
	let body = $block( );

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
		const groupTestLoopBody =
			$block( )
			.$if(
				$(
					'this._group[ k ] !== obj._group[ k ]',
					'&& (',
						'!this._group[ k ].', eqFuncName,
						'||',
						'!this._group[ k ].', eqFuncName, '( obj._group[ k ] )',
					')'
				),
				$( 'return false' )
			);

		const groupTest =
			$block( )
			.$if(
				'this.size !== obj.size',
				$( 'return false' )
			)
			.$forIn(
				'k',
				'this._group',
				groupTestLoopBody
			);

		body = body.$if( 'this._group !== obj._group', groupTest );
	}

	if( this.list )
	{
		const listTestLoopBody =
			$block( )
			.$if(
				$(
					'this._list[ a ] !== obj._list[ a ]',
					'&& (',
						'!this._list[ a ].' + eqFuncName,
						'||',
						'!this._list[ a ].' + eqFuncName + '( obj._list[ a ] )',
					')'
				),
				$( 'return false' )
			);

		const listTest =
			$block( )
			.$if(
				'this.length !== obj.length',
				$( 'return false' )
			)
			.$for(
				// this.length?
				'let a = 0, al = this.length',
				'a < al',
				'++a',
				listTestLoopBody
			);

		body = body.$if( 'this._list !== obj._list', listTest );
	}

	if( this.twig )
	{
		const twigTestLoopBody =
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

		const twigTest =
			$block( )
			.$if(
				'this.length !== obj.length',
				$( 'return false' )
			)
			.$for(
				'let a = 0, al = this.length',
				'a < al',
				'++a',
				twigTestLoopBody
			);

		body =
			body
			.$if(
				$(
					'this._twig !== obj._twig',
					'||', 'this._ranks !== obj._ranks'
				),
				twigTest
			);
	}

	const attributes = this.attributes;

	let cond;

	for( let a = 0, as = attributes.size; a < as; a++ )
	{
		const name = attributes.sortedKeys[ a ];

		const attr = attributes.get( name );

		if( attr.assign === '' ) continue;

		if( mode === 'json' && !attr.json ) continue;

		const ceq =
			this.genAttributeEquals(
				name,
				$( 'this.', attr.assign ),
				$( 'obj.', attr.assign ),
				eqFuncName,
				false
			);

		cond =
			cond === undefined
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
def.func.genEquals =
	function( )
{
	let block = $block( );

	const normalEqFuncBody = this.genEqualsFuncBody( 'normal', 'equals' );

	const jsonEqFuncBody =
		this.hasJson
		&& this.genEqualsFuncBody( 'json', 'equalsJSON' );

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
def.func.genAlike =
	function( )
{
	const alikeList = Object.keys( this.alike ).sort( );

	let cond;

	let result = $block( );

	for( let a = 0, al = alikeList.length; a < al; a++ )
	{
		const alikeName = alikeList[ a ];

		const ignores = this.alike[ alikeName ].ignores;

		result = result.$comment( 'Tests partial equality.' );

		let block =
			$block( )
			.$if( 'this === obj', $( 'return true') )
			.$if( '!obj', $(' return false' ) );

		if( this.twig )
		{
			// FUTURE same test as in equals
			cond =
				$(
					'this._twig === obj._twig',
					'&& this._ranks === obj._ranks'
				);
		}

		const attributes = this.attributes;

		for( let b = 0, bZ = attributes.size; b < bZ; b++ )
		{
			const name = attributes.sortedKeys[ b ];

			const attr = attributes.get( name );

			if( attr.assign === '' || ignores[ name ] ) continue;

			const ceq =
				this.genAttributeEquals(
					name,
					$( 'this.', attr.assign ),
					$( 'obj.', attr.assign ),
					'equals',
					false
				);

			cond = cond ? $( cond, '&&', ceq ) : ceq;
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
| Generates the preamble.
*/
def.func.genPreamble =
	function(
		block // block to append to
	)
{
	return block;
};


/*
| Returns the generated capsule block.
*/
def.func.genCapsule =
	function( )
{
	let capsule =
		$block( )
		.$( '"use strict"' )
		.$( this.genImports( ) )
		.$( this.genRequires( ) )
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
		.$( this.genTimProto( ) );

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
| Generates code from a tim definition.
*/
def.static.generate =
	function(
		timDef,      // the tim definition
		id,          // the id to be defined
		jsonTypeMap  // if defined a typemap for json generation/parsing
	)
{
	// tim_validator.check( timDef ); FIXME!

	const gi =
		generator.create(
			'id', tim_id.createFromString( id ),
			'timDef', timDef,
			'jsonTypeMap', jsonTypeMap
		);

	const result =
		$block( )
		.$comment(
			'This is an auto generated file.',
			'',
			'Editing this might be rather futile.'
		)
		.$( gi.genCapsule( ) );

	return result;
};


} );
