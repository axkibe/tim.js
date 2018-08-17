/*
| Generates timcode from a tim definition.
*/
'use strict';


require( './ouroboros' )
.define( module, ( def, self ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		// FIXME remove
		abstractConstructorList : { type : 'protean' },

		// list of alike function and what to ignore
		alike : { type : [ 'protean', 'undefined' ] },

		// attributes this tim allows
		attributes : { type : [ './attributeGroup' ] },

		// true if an init checker is to be called
		check : { type : 'boolean' },

		// arguments for the constructor
		constructorList : { type : 'protean' },

		// true if a free strings parser is to be added in the creator
		creatorHasFreeStringsParser : { type : 'boolean' },

		// if set this tim is a group
		// FIXME find out why 'group' etc. disturbs generator
		ggroup : { type : [ './type/set', 'undefined' ] },

		// if set this tim is a list
		glist : { type : [ './type/set', 'undefined' ] },

		// if set this tim is a set
		gset : { type : [ './type/set', 'undefined' ] },

		// if set this tim is a twig
		gtwig : { type : [ './type/set', 'undefined' ] },

		// true if this has an abstract
		// FIXME remove abstracts
		hasAbstract : { type : 'boolean' },

		// FIXME remove inits
		init : { type : [ 'protean', 'undefined' ] },

		// other tims this tim utilizes
		imports : { type : './type/set' },

		// fromJson and toJson specifier
		json : { type : [ 'string', 'undefined' ] },

		// the node.js module this tim is generated from
		module : { type : 'protean' },

		// true if this a singleton (no attributes or group/list/set/twig)
		singleton : { type : [ 'boolean', 'undefined' ] },

		// true if this is a transforming group/list/set/twig
		transform : { type : 'boolean' }
	};
}

const ast_call = require( './ast/call' );

const ast_string = require( './ast/string' );

const ast_var = require( './ast/var' );

const tim_attribute = require( './attribute' );

const tim_attributeGroup = require( './attributeGroup' );

const type_any = require( './type/any' );

const type_boolean = require( './type/boolean' );

const type_date = require( './type/date' );

const type_function = require( './type/function' );

const type_integer = require( './type/integer' );

const type_null = require( './type/null' );

const type_number = require( './type/number' );

const type_protean = require( './type/protean' );

const type_set = require( './type/set' );

const type_string = require( './type/string' );

const type_tim = require( './type/tim' );

const type_undefined = require( './type/undefined' );

const validator = require( './validator' );

const parser = require( './jsParser/parser' );

const shorthand = require( './ast/shorthand' );


/*
| Shorthanding Shorthands.
*/
const $ = parser.parse;

const $and = shorthand.$and;

const $block = shorthand.$block;

const $fail = shorthand.$fail;

const $func = shorthand.$func;

const $if = shorthand.$if;

const $objLiteral = shorthand.$objLiteral;

const $string = shorthand.$string;

const $switch = shorthand.$switch;

const $undefined = shorthand.$undefined;

const $var = shorthand.$var;


/*
| Type singletons
*/
const tsUndefined = type_undefined.create( );

const tsNull = type_null.create( );


/*
| Generates the requires.
*/
def.func.genRequires =
	function( )
{
	let block = $block;

	const imports = this.imports;

	const it = imports.iterator( );

	for( let i = it.next( ); !i.done; i = it.next( ) )
	{
		const id = i.value;

		if( id.isPrimitive ) continue;

		block = block.$const( id.varname, id.require );
	}

	return block.$const( 'tim_proto', 'tim.proto' );
};


/*
| Generates the constructor.
*/
def.func.genConstructor =
	function(
		abstract // if true generate abstract constructor
	)
{
	let block = $block;

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

	if( this.ggroup ) block = block.$( 'this._group = group' );

	if( this.glist ) block = block.$( 'this._list = list' );

	if( this.gset ) block = block.$( 'this._set = set' );

	if( this.gtwig )
	{
		block =
			block
			.$( 'this._twig = twig' )
			.$( 'this._ranks = ranks' );

		if( this.transform ) block = block.$( 'this._ttwig = ttwig' );
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


	// immutes the new objects

	let freezeCall = $( 'Object.freeze( this )' );

	if( this.ggroup ) freezeCall = freezeCall.$argument ( 'group' );

	if( this.glist ) freezeCall = freezeCall.$argument( 'list' );

	if( this.gset ) freezeCall = freezeCall.$argument( 'set' );

	if( this.gtwig ) freezeCall = freezeCall.$argument( 'twig' ).$argument( 'ranks' );

	// FUTURE force freezing date attributes

	block = block.$if( 'FREEZE', freezeCall );

	// calls potential init checker
	if( !abstract && this.check )
	{
		//block = block.$check( 'this._check( )' );XX
		block = block.$check( $( 'this._check( )' ) );
	}

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
			case 'inherit' : cf = cf.$arg( 'inherit', 'inheritance' ); break;

			case 'group' : cf = cf.$arg( 'group', 'group' ); break;

			case 'groupDup' :

				cf =
					cf.$arg(
						'groupDup',
						'true if group is already been duplicated'
					);

				break;

			case 'ranks' : cf = cf.$arg( 'ranks', 'twig ranks' ); break;

			case 'list' : cf = cf.$arg( 'list', 'list' ); break;

			case 'listDup' :

				cf =
					cf.$arg(
						'listDup',
						'true if list is already been duplicated'
					);

				break;

			case 'set' : cf = cf.$arg( 'set', 'set' ); break;

			case 'mapDup' :

				cf =
					cf.$arg(
						'setDup',
						'true if set is already been duplicated'
					);

				break;

			case 'twig' : cf = cf.$arg( 'twig', 'twig' ); break;

			case 'ttwig' : cf = cf.$arg( 'ttwig', 'ttwig' ); break;

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
			$block
			.$comment( 'Constructor.' )
			.$const( 'Constructor', cf )
			.$comment( 'Prototype shortcut' )
			.$const( 'prototype', 'Constructor.prototype' )
			.$( 'self.prototype = prototype' )
		);
	}
	else
	{
		return(
			$block
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
		$block
		.$comment( 'Singleton' )
		.$let( '_singleton' )
	);
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

	if( this.ggroup ) varList.push( 'group', 'groupDup' );

	if( this.glist ) varList.push( 'list', 'listDup' );

	if( this.gset ) varList.push( 'set', 'setDup' );

	if( this.gtwig )
	{
		varList.push( 'key', 'rank', 'ranks', 'twig', 'twigDup' );

		if( this.transform ) varList.push( 'ttwig' );
	}

	varList.sort( );

	let result = $block;

	for( let a = 0, al = varList.length; a < al; a++ )
	{
		result = result.$let( varList[ a ] );
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

	let receiver = $block.$( 'inherit = this' );

	if( this.ggroup )
	{
		receiver =
			receiver
			.$( 'group = inherit._group' )
			.$( 'groupDup = false' );
	}

	if( this.glist )
	{
		receiver =
			receiver
			.$( 'list = inherit._list' )
			.$( 'listDup = false' );
	}

	if( this.gset )
	{
		receiver =
			receiver
			.$( 'set = inherit._set' )
			.$( 'setDup = false' );
	}

	if( this.gtwig )
	{
		receiver =
			receiver
			.$( 'twig = inherit._twig' )
			.$( 'ranks = inherit._ranks' )
			.$( 'twigDup = false' );

		if( this.transform )
		{
			receiver =
				receiver
				.$if(
					'!tim_proto.isEmpty( inherit._ttwig )',
					$block
					.$( 'twigDup = true' )
					.$( 'twig = tim_proto.copy2( twig, inherit._ttwig )' )
					.$break
				);
		}
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
			$( 'this !== self' ),
			receiver
		);

	if( this.ggroup )
	{
		result =
			result
			.$elsewise(
				$block
				.$( 'group = { }' )
				.$( 'groupDup = true' )
			);
	}

	if( this.glist )
	{
		result =
			result
			.$elsewise(
				$block
				.$( 'list = [ ]' )
				.$( 'listDup = true' )
			);
	}

	if( this.gset )
	{
		result =
			result
			.$elsewise(
				$block
				.$( 'set = new Set( )' )
				.$( 'setDup = true' )
			);
	}

	if( this.gtwig )
	{
		result =
			result
			.$elsewise(
				$block
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
	let loop = $block.$let( 'arg', 'arguments[ a + 1 ]' );

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

	if( this.ggroup )
	{
		const groupDupCheck =
			$if(
				'!groupDup',
				$block
				.$( 'group = tim_proto.copy( group )' )
				.$( 'groupDup = true' )
			);

		switchExpr =
			switchExpr
			.$case(
				'"group:init"',
				$block
				.$( 'group = arg' )
				.$( 'groupDup = true' )
			)
			.$case(
				'"group:set"',
				$block
				.append( groupDupCheck )
				.$( 'group[ arg ] = arguments[ ++a + 1 ]' )
			)
			.$case(
				'"group:remove"',
				$block
				.append( groupDupCheck )
				.$( 'delete group[ arg ]' )
			);
	}

	if( this.glist )
	{
		const listDupCheck =
			$if(
				'!listDup',
				$block
				.$( 'list = list.slice( )' )
				.$( 'listDup = true' )
			);

		switchExpr =
			switchExpr
			.$case(
				'"list:init"',
				$block
				.$check(
					$if( '!Array.isArray( arg )', $fail( ) )
				)
				.$( 'list = arg' )
				.$( 'listDup = true' )
			)
			.$case(
				'"list:append"',
				$block
				.append( listDupCheck )
				.$( 'list.push( arg )' )
			)
			.$case(
				'"list:insert"',
				$block
				.append( listDupCheck )
				.$( 'list.splice( arg, 0, arguments[ ++a + 1 ] )' )
			)
			.$case(
				'"list:remove"',
				$block
				.append( listDupCheck )
				.$( 'list.splice( arg, 1 ) ' )
			)
			.$case(
				'"list:set"',
				$block
				.append( listDupCheck )
				.$( 'list[ arg ] = arguments[ ++a + 1 ]' )
			);
	}

	if( this.gset )
	{
		const setDupCheck =
			$if(
				'!setDup',
				$block
				.$( 'set = new Set( set )' )
				.$( 'setDup = true' )
			);

		switchExpr =
			switchExpr
			.$case(
				'"set:add"',
				$block
				.append( setDupCheck )
				.$( 'set.add( arg, arguments[ a + 1 ] )' )
			)
			.$case(
				'"set:init"',
				$block
				.$check(
					$if( '!( arg instanceof Set )', $fail( ) )
				)
				.$( 'set = arg' )
				.$( 'setDup = true' )
			)
			.$case(
				'"set:remove"',
				$block
				.append( setDupCheck )
				.$( 'set.delete( arg )' )
			);
	}

	if( this.gtwig )
	{
		const twigDupCheck =
			$if(
				'twigDup !== true',
				$block
				.$( 'twig = tim_proto.copy( twig )' )
				.$( 'ranks = ranks.slice( )' )
				.$( 'twigDup = true' )
			);

		switchExpr =
			switchExpr
			.$case(
				'"twig:add"',
				$block
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
				$block
				.$( 'twigDup = true' )
				.$( 'twig = arg' )
				.$( 'ranks = arguments[ ++a + 1 ]' )
				.$check(
					$block
					.$if(
						'Object.keys( twig ).length !== ranks.length',
						$fail( )
					)
					.$for(
						'let t = 0, tl = ranks.length',
						't < tl',
						't++',
						$block
						.$if(
							'twig[ ranks[ t ] ] === undefined',
							$fail( )
						)
					)
				)
			)
			.$case(
				'"twig:set+"',
				$block
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
				$block
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
				$block
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
				$block
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
		.$default( $block.$fail( ) );

	loop = loop.append( switchExpr );

	return(
		$block.$for(
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

	let result = $block;

	for( let a = 0, as = this.attributes.size; a < as; a++ )
	{
		const name = this.attributes.sortedKeys[ a ];

		const attr = this.attributes.get( name );

		if( json && !attr.json ) continue;

		if(
			attr.defaultValue !== undefined
			&& !attr.defaultValue.equals( $undefined )
		)
		{
			// raise requires
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
	switch( id.timtype )
	{
		case type_date : return $( '!(', aVar, 'instanceof Date )' );

		case type_null : throw new Error( );

		case type_boolean : return $( 'typeof( ', aVar, ' ) !== "boolean"' );

		case type_number :

			return $(
				'typeof( ', aVar, ' ) !== "number"',
				'|| Number.isNaN( ', aVar, ' )'
			);

		case type_protean : throw new Error( );

		case type_undefined : throw new Error( );

		case type_integer :

			return $(
				$( 'typeof( ', aVar, ' ) !== "number"' ),
				'|| Number.isNaN( ', aVar, ' )',
				'|| Math.floor( ', aVar, ' ) !== ', aVar
			);

		case type_function : return $( 'typeof( ', aVar, ' ) !== "function"' );

		case type_string : return $( 'typeof( ', aVar, ' ) !== "string"' );

		case type_tim :

			return(
				abstract ?
					$(
						aVar, '.timtype !== ', id.$varname, '&&',
						aVar, '.timtype !== ', id.$varname, '.abstract'
					)
					: $( aVar, '.timtype !== ', id.$varname )
			);
	}

	// FUTURE remove
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
};


/*
| Generates a type check of a variable.
*/
def.func.genTypeCheckFailCondition =
	function(
		aVar,    // the variable to check
		idx,     // the id or type_set it has to match
		abstract // if true generate for an abstract constructor
	)
{
	if( idx.timtype !== type_set )
	{
		return this.genSingleTypeCheckFailCondition( aVar, idx, abstract );
	}

	if( idx.size === 1 )
	{
		return(
			this.genSingleTypeCheckFailCondition(
				aVar,
				idx.iterator( ).next( ).value,
				abstract
			)
		);
	}

	const condArray = [ ];

	const it = idx.iterator( );

	for( let i = it.next( ); !i.done; i = it.next( ) )
	{
		const id = i.value;

		switch( id.timtype )
		{
			case type_null :

				condArray.unshift( $( aVar, '!== null' ) );

				continue;

			case type_undefined :

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

	let check = $block;

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

		if( attr.id.timtype === type_protean ) continue;

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

	if( this.ggroup )
	{
		check =
			check
			.$forInLet(
				'k', 'group',
				$block
				.$const( 'o', 'group[ k ]' )
				.$if(
					this.genTypeCheckFailCondition( $( 'o' ), this.ggroup, abstract ),
					$fail( )
				)
			);
	}

	if( this.glist )
	{
		check =
			check
			.$for(
				'let r = 0, rl = list.length',
				'r < rl',
				'++r',
				$block
				.$const( 'o', 'list[ r ]' )
				.$if(
					this.genTypeCheckFailCondition( $( 'o' ), this.glist, abstract ),
					$fail( )
				)
			);
	}

	if( this.gset )
	{
		check =
			check
			.$const( 'it', 'set.keys( )' )
			.$for(
				'let i = it.next( )',
				'!i.done',
				'i = it.next( )',
				$block
				.$const( 'v', 'i.value' )
				.$if(
					this.genTypeCheckFailCondition( $( 'v' ), this.gset, abstract ),
					$fail( )
				)
			);
	}

	if( this.gtwig )
	{
		// FUTURE check if ranks and twig keys match
		check =
			check
			.$for(
				'let a = 0, al = ranks.length',
				'a < al',
				'++a',
				$block
				// FIXME very dirty hack
				.$if( 'prototype.abstract', $block.$continue( ) )
				.$const( 'o', 'twig[ ranks[ a ] ]' )
				.$if(
					this.genTypeCheckFailCondition( $( 'o' ), this.gtwig, abstract ),
					$fail( )
				)
			);
	}

	if( !json )
	{
		if( check.length > 0 )
		{
			return $block.$check( check );
		}
		else
		{
			return $block;
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
	let result = $block;

	for( let a = 0, as = this.attributes.size; a < as; a++ )
	{
		const name = this.attributes.sortedKeys[ a ];

		const attr = this.attributes.get( name );

		const prepare = attr.prepare;

		if( !prepare ) continue;

		result = result.$( attr.varRef, ' = ', prepare );
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

	if( this.ggroup ) cond = $( cond, '&& groupDup === false' );

	if( this.glist ) cond = $( cond, '&& listDup === false' );

	if( this.gset ) cond = $( cond, '&& setDup === false' );

	if( this.gtwig ) cond = $( cond, '&& twigDup === false' );

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

	return $block.$if( cond, $( 'return inherit' ) );
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
			$block
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
			case 'set' :
			case 'setDup' :
			case 'twig' :
			case 'ttwig' :
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
		$block
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
		.$( abstract ? $block : this.genCreatorPrepares( ) )
		.$( this.genCreatorUnchanged( abstract ) )
		.$( this.genCreatorReturn( abstract ) );

	const creator =
		$func( block )
		.$arg( undefined, 'free strings' );

	const funcName = abstract ? 'abstract' : 'create';

	return(
		$block
		.$comment(
			abstract
			? 'Creates an abstract object.'
			: 'Creates a new object.'
		)
		.$(
			'self.', funcName,
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

	if( this.json )
	{
		if( this.ggroup ) varList.push( 'jgroup', 'group', 'k' );

		if( this.glist ) varList.push( 'jlist', 'list' );

		if( this.gtwig ) varList.push( 'key', 'jval', 'jwig', 'ranks', 'twig' );
	}

	varList.sort( );

	let result = $block;

	for( let a = 0, al = varList.length; a < al; a++ )
	{
		result = result.$let( varList[ a ] );
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
	// a single if
	let sif;

	// code to return
	let code;

	// the code switch
	let cSwitch;

	switch( attr.id.timtype )
	{
		case type_boolean :
		case type_integer :
		case type_number :
		case type_string :

			code = $( attr.varRef, ' = arg' );

			break;

		case type_tim :

			code =
				$(
					attr.varRef, ' = ',
					attr.id.$varname,
					'.createFromJSON( arg )'
				);

			break;

		default :
			{
				// the multi if
				let mif;

				code = $block;

				cSwitch = undefined;

				const it = attr.id.iterator( );

				for( let i = it.next( ); !i.done; i = it.next( ) )
				{
					const id = i.value;

					switch( id.timtype )
					{
						case type_boolean :

							sif =
								$if(
									'typeof( arg ) === "boolean"',
									$( attr.varRef, ' = arg' )
								);

							break;

						case type_number :

							sif =
								$if(
									'typeof( arg ) === "number"',
									$( attr.varRef, ' = arg' )
								);

							break;

						case type_string :

							sif =
								$if(
									$( 'typeof( arg ) === "string"' ),
									$( attr.varRef, ' = arg' )
								);

							break;

						default :

							sif = undefined;

							break;
					}

					if( sif )
					{
						mif = !mif ? sif : mif.$elsewise( sif );
					}
					else
					{
						if( !cSwitch )
						{
							cSwitch = $switch( 'arg.type' ).$default( $fail( ) );
						}

						const jsontype = tim.tree.getLeaf( this.module, id ).json;

						cSwitch =
							cSwitch
							.$case(
								$string( jsontype ),
								$(
									attr.varRef, ' = ',
									id.$varname,
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
				$( 'arg !== ', $string( this.json ) ),
				$fail( )
			)
		);

	if( this.ggroup )
	{
		nameSwitch = nameSwitch.$case( '"group"', 'jgroup = arg' );
	}

	if( this.glist )
	{
		nameSwitch = nameSwitch.$case( '"list"', 'jlist = arg' );
	}

	if( this.gset )
	{
		nameSwitch = nameSwitch.$case( '"set"', 'jset = arg' );
	}

	if( this.gtwig )
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
			|| name === 'set'
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
		$block.$forInLet(
			'name',
			'json',
			$block
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
	const group = this.ggroup;

	let haveNull = false;

	// FUTURE dirty workaround
	if( group.size === 1 && group.iterator( ).next( ).value.timtype === type_string )
	{
		return(
			$block
			.$if( '!jgroup', $fail( ) )
			.$( 'group = jgroup' )
		);
	}

	// FUTURE dirty workaround 2
	if( group.size === 1 && group.iterator( ).next( ).value.timtype === type_boolean )
	{
		return(
			$block
			.$if( '!jgroup', $fail( ) )
			.$( 'group = jgroup' )
		);
	}

	const result =
		$block
		.$if( '!jgroup', $fail( ) )
		.$( 'group = { }' );

	let loopSwitch = $switch( 'jgroup[ k ].type' );

	loopSwitch = loopSwitch.$default( $fail( ) );

	// FUTURE allow more than one non-tim type
	let customDefault = false;

	const it = group.iterator( );

	for( let i = it.next(); !i.done; i = it.next( ) )
	{
		const gid = i.value;

		if( gid.timtype === type_null ) { haveNull = true; continue; }

		if( gid.timtype === type_string )
		{
			if( customDefault ) throw new Error( );

			customDefault = true;

			loopSwitch =
				loopSwitch
				.$default(
					$if(
						$( 'typeof( jgroup[ k ] ) === "string"' ),
						$( 'group[ k ] = jgroup[ k ]' ),
						$fail( )
					)
				);

			continue;
		}

		if( gid.timtype === type_boolean )
		{
			if( customDefault ) throw new Error( );

			customDefault = true;

			loopSwitch =
				loopSwitch
				.$default(
					$if(
						$( 'typeof( jgroup[ k ] ) === "boolean"' ),
						$( 'group[ k ] = jgroup[ k ]' ),
						$fail( )
					)
				);

			continue;
		}

		const jsontype = tim.tree.getLeaf( this.module, gid ).json;

		if( !jsontype ) throw new Error( );

		loopSwitch =
			loopSwitch
			.$case(
				$string( jsontype ),
				'group[ k ] =',
				gid.$varname,
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
			$block
			.$if(
				'jgroup[ k ] === null',
				$block
				.$( 'group[ k ] = null' )
				.$continue( )
			)
			.$( loopSwitch );
	}

	return result.$forInLet( 'k', 'jgroup', loopBody );
};


/*
| Generates the fromJsonCreator's list processing.
*/
def.func.genFromJsonCreatorListProcessing =
	function( )
{
	const list = this.glist;

	// FUTURE dirty workaround
	if( list.size === 1 && list.iterator( ).next( ).value.timtype === type_string )
	{
		return(
			$block
			.$if( '!jlist', $fail( ) )
			.$( 'list = jlist' )
		);
	}

	const result =
		$block
		.$if( '!jlist', $fail( ) )
		.$( 'list = [ ]' );

	let loopSwitch =
		$switch( 'jlist[ r ].type' )
		.$default( $fail( ) );

	let haveNull = false;

	let haveUndefined = false;

	const it = list.iterator( );

	for( let i = it.next( ); !i.done; i = it.next( ) )
	{
		const rid = i.value;

		if( rid === tsNull )
		{
			haveNull = true;

			continue;
		}

		if( rid === tsUndefined )
		{
			haveUndefined = true;

			continue;
		}

		const jsontype = tim.tree.getLeaf( this.module, rid ).json;

		if( !jsontype ) throw new Error( );

		loopSwitch =
			loopSwitch
			.$case(
				$string( jsontype ),
				'list[ r ] =', rid.$varname, '.createFromJSON( jlist[ r ] )'
			);
	}

	let loopBody = $block;

	if( haveNull )
	{
		loopBody =
			loopBody.
			$if(
				'jlist[ r ] === null',
				$block
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
				$block
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

	const twig = this.gtwig;

	const it = twig.iterator( );

	for( let i = it.next( ); !i.done; i = it.next( ) )
	{
		const twigId = i.value;

		const jsontype = tim.tree.getLeaf( this.module, twigId ).json;

		switchExpr =
			switchExpr
			.$case(
				$string( jsontype ),
				$( 'twig[ key ] =', twigId.$varname, '.createFromJSON( jval )' )
			);
	}

	switchExpr =
		switchExpr
		.$default(
			// invalid twig type
			$fail( )
		);

	const loop =
		$block
		.$( 'key = ranks[ a ]' )
		.$if(
			'!jwig[ key ]',
			// json ranks/twig mismatch
			$fail( )
		)
		.$( 'jval = jwig[ key ]' )
		.append( switchExpr );

	return(
		$block
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

	if( this.gtwig ) jsonList.push( 'twig', 'ranks' );

	jsonList.sort( );

	// function contents
	let funcBlock =
		this.genFromJsonCreatorVariables( )
		.$( this.genFromJsonCreatorParser( jsonList ) )
		.$( this.genCreatorDefaults( true ) );

	if( this.ggroup )
	{
		funcBlock =
			funcBlock
			.$( this.genFromJsonCreatorGroupProcessing( ) );
	}

	if( this.glist )
	{
		funcBlock =
			funcBlock
			.$( this.genFromJsonCreatorListProcessing( ) );
	}

	if( this.gset )
	{
		throw new Error( 'FUTURE, fromJson for sets not implemented' );
	}

	if( this.gtwig )
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
		$block
		.$comment( 'Creates a new object from json.' )
		.$(
			'self.createFromJSON =',
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
		$block
		.$(
			this.hasAbstract
			? $(
				$block
				.$comment( 'Abstract Reflection.' )
				.$( 'abstractPrototype.timtype = self.abstract' )
				.$( 'abstractPrototype.isAbstract = true' )
			)
			: undefined
		)
		.$comment( 'Type reflection.' )
		.$( 'prototype.timtype = self' )
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
		$block
		.$( 'tim_proto.lazyValue( prototype,', name, ',', func, ')' );

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
		$block
		.$comment( 'Sets values by path.' )
		.$( this.$protoSet( 'setPath', 'tim_proto.setPath' ) )

		.$comment( 'Gets values by path' )
		.$( this.$protoSet( 'getPath', 'tim_proto.getPath' ) );

	if( this.ggroup )
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

	if( this.glist )
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

	if( this.gset )
	{
		result =
			result
			.$comment( 'Returns the set with one element added.' )
			.$( this.$protoSet( 'add', 'tim_proto.setAdd' ) )

			.$comment( 'Returns the set with another set added.' )
			.$( this.$protoSet( 'addSet', 'tim_proto.setAddSet' ) )

			.$comment( 'Returns true if the set has an element.' )
			.$( this.$protoSet( 'has', 'tim_proto.setHas' ) )

			.$comment( 'Returns an iterator for the set.' )
			.$( this.$protoSet( 'iterator', 'tim_proto.setIterator' ) )

			.$comment( 'Returns the set with one element removed.' )
			.$( this.$protoSet( 'remove', 'tim_proto.setRemove' ) )

			.$comment( 'Returns the size of the set.' )
			.$( this.$protoLazyValueSet( '"size"', 'tim_proto.setSize' ) );
	}

	if( this.gtwig )
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
				'tim_proto.lazyFunctionString(',
					'prototype, "rankOf", tim_proto.twigRankOf ',
				')'
			)

			.$comment( 'Returns the twig with the element at key set.' )
			.$( this.$protoSet( 'set', 'tim_proto.twigSet' ) );
	}

	return result;
};


/*
| Generates the toJSON converter.
*/
def.func.genToJson =
	function( )
{
	let olit;

	olit = $objLiteral( ).add( 'type', $string( this.json ) );

	for( let a = 0, as = this.attributes.size; a < as; a++ )
	{
		const name = this.attributes.sortedKeys[ a ];

		const attr = this.attributes.get( name );

		if( !attr.json ) continue;

		olit = olit.add( name, 'this.', attr.assign );
	}

	if( this.ggroup ) olit = olit.add( 'group', 'this._group' );

	if( this.glist ) olit = olit.add( 'list', 'this._list' );

	if( this.gset ) throw new Error( 'FUTURE not implemented' );

	if( this.gtwig )
	{
		olit =
			olit
			.add( 'ranks', 'this._ranks' )
			.add( 'twig', 'this._twig' );
	}

	let block =
		$block
		.$const( 'json', olit )
		.$if(
			'FREEZE',
			$( 'Object.freeze( json )' )
		)
		.$( 'return', $func( 'return json' ) );

	return(
		$block
		.$comment( 'Converts into json.' )
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

	// current test
	let pc;

	// next test (to be appended on current)
	let pn;

	switch( attr.id.equalsConvention )
	{
		case 'mustnot' : return ceq;

		case 'can' :
		case 'must' :

			if( allowsNull ) pc = $( le, ' !== null' );

			if( allowsUndefined )
			{
				pn = $( le, ' !== undefined' );

				pc = pc ? $( pc, '&&', pn ) : pn;
			}

			pn = $( le, '.', eqFuncName, '(', re, ')' );

			if( attr.id.equalsConvention === 'can' )
			{
				pn = $( le, '.timtype', '&&', pn );
			}

			pc = pc ? $( pc, '&&', pn ) : pn;

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
	let body =
		$block
		.$if( 'this === obj', $( 'return true' ) )
		.$if( '!obj', $( 'return false' ) )
		.$if(
			$( 'obj.timtype !== self' ),
			$(' return false' )
		);

	if( this.ggroup )
	{
		const groupTestLoopBody =
			$block
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
			$block
			.$if(
				'this.size !== obj.size',
				$( 'return false' )
			)
			.$forInLet( 'k', 'this._group', groupTestLoopBody );

		body = body.$if( 'this._group !== obj._group', groupTest );
	}

	if( this.glist )
	{
		const listTestLoopBody =
			$block
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
			$block
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

	if( this.gset )
	{
		const setTest =
			$block
			.$const( 'ait', 'this._list.iterator( )' )
			.$const( 'bit', 'obj._list.iterator( )' )
			.$let( 'an', 'ait.next( )' )
			.$let( 'bn', 'bit.next( )' )
			.$while(
				'!an.done && !bn.done',
				$block
				.$if( 'an.value !== bn.value', $( 'return false' ) )
				.$( 'an = ait.next( )' )
				.$( 'bn = bit.next( )' )
			)
			.$if(' !an.done || !bn.done', $( 'return false' ) );

		body = body.$if( 'this._set !== obj._set', setTest );
	}

	if( this.gtwig )
	{
		const twigTestLoopBody =
			$block
			.$const( 'key', 'this._ranks[ a ]' )
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
			$block
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
	let block = $block;

	const normalEqFuncBody = this.genEqualsFuncBody( 'normal', 'equals' );

	const jsonEqFuncBody = this.json && this.genEqualsFuncBody( 'json', 'equalsJSON' );

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

		if( this.json )
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

	let result = $block;

	for( let a = 0, al = alikeList.length; a < al; a++ )
	{
		const alikeName = alikeList[ a ];

		const ignores = this.alike[ alikeName ].ignores;

		result = result.$comment( 'Tests partial equality.' );

		let block =
			$block
			.$if( 'this === obj', $( 'return true') )
			.$if( '!obj', $(' return false' ) );

		if( this.gtwig )
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
| Generates code from a tim definition.
*/
def.static.generate =
	function(
		timDef,       // the tim definition
		module        // the module relative to which types are
	)
{
	validator.check( timDef );

	let attributes = tim_attributeGroup.create( );

	const abstractConstructorList = [ ];

	const constructorList = [ ];

	// foreign ids to be imported
	let imports = type_set.create( );

	// walker to transform local variables in prepares
	const transformPrepare =
		function(
			node
		)
	{
		if(
			node.timtype !== ast_var
			|| node.name === 'undefined'
			|| node.name === 'self'
		) return node;

		return node.create( 'name', 'v_' + node.name );
	};

	// walkter to transform default value
	// replaces require( 'path' ) with the import variable
	const transformDefaultValue =
		function(
			node
		)
	{
		if( node.timtype !== ast_call ) return node;

		const func = node.func;

		if( func.timtype !== ast_var ) return node;

		if( func.name !== 'require' ) return node;

		if( node.length !== 1 )
		{
			throw new Error( 'require in defaultValue must have one argument' );
		}

		// require path argument
		const rpa = node.get( 0 );

		if( rpa.timtype !== ast_string )
		{
			throw new Error( 'require argument in defaultValue must be string' );
		}

		const rid = type_tim.createFromPath( rpa.string.split( '/' ) );

		imports = imports.add( rid );

		return rid.$varname;
	};

	// in case of attributes, group, list, set or twig
	// it will be turned off again
	let singleton = true;

	for( let name in timDef.attributes || { } )
	{
		singleton = false;

		const jAttr = timDef.attributes[ name ];

		const type = jAttr.type;

		// attribute id
		let aid;

		if( !Array.isArray( type ) )
		{
			aid = type_any.createFromString( type );

			imports = imports.add( aid );
		}
		else
		{
			aid = type_set.createFromArray( module, type );

			imports = imports.addSet( aid );

			if( aid.size === 1 ) aid = aid.iterator( ).next( ).value;
		}

		const assign =
			jAttr.assign !== undefined
			? jAttr.assign
			: name;

		if( assign !== '' )
		{
			abstractConstructorList.push( name );

			constructorList.push( name );
		}
		else if( timDef.init && timDef.init.indexOf( name ) >= 0 )
		{
			constructorList.push( name );
		}

		let prepare = jAttr.prepare;

		if( prepare ) prepare = $( prepare ).walk( transformPrepare );

		const jdv = jAttr.defaultValue;

		let defaultValue;

		if( jdv )
		{
			defaultValue = $( jdv ).walk( transformDefaultValue );
		}

		let allowsNull = false;

		let allowsUndefined = false;

		if( aid.timtype === type_set )
		{
			if( aid.has( tsUndefined ) )
			{
				aid = aid.create( 'set:remove', tsUndefined );

				allowsUndefined = true;
			}

			if( aid.has( tsNull ) )
			{
				aid = aid.create( 'set:remove', tsNull );

				allowsUndefined = true;
			}

			if( aid.size === 1 )
			{
				aid = aid.iterator( ).next( ).value;
			}
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

	if( timDef.set )
	{
		singleton = false;

		abstractConstructorList.unshift( 'set' );

		constructorList.unshift( 'set' );
	}

	if( timDef.twig )
	{
		singleton = false;

		abstractConstructorList.unshift( 'ranks' );

		abstractConstructorList.unshift( 'twig' );

		constructorList.unshift( 'ranks' );

		if( timDef.func._transform ) constructorList.unshift( 'ttwig' );

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
				case 'set' :
				case 'setDup' :

					constructorList.unshift( name );

					break;

				default :

					throw new Error( 'invalid init value: ' + name );
			}
		}
	}

	if( FREEZE )
	{
		Object.freeze( abstractConstructorList );

		Object.freeze( constructorList );
	}

	// FIXME currently may not be named group/list/set/twig...
	let ggroup, glist, gset, gtwig;

	if( timDef.group )
	{
		ggroup = type_set.createFromArray( module, timDef.group );

		imports = imports.addSet( ggroup );
	}

	if( timDef.list )
	{
		glist = type_set.createFromArray( module, timDef.list );

		imports = imports.addSet(glist );
	}

	if( timDef.set )
	{
		gset = type_set.createFromArray( module, timDef.set );

		imports = imports.addSet( gset );
	}

	if( timDef.twig )
	{
		gtwig = type_set.createFromArray( module, timDef.twig );

		imports = imports.addSet( gtwig );
	}

	const g =
		self.create(
			'abstractConstructorList', abstractConstructorList,
			'attributes', attributes,
			'alike', timDef.alike,
			'check', !!timDef.check,
			'constructorList', constructorList,
			'creatorHasFreeStringsParser',
				!!( ggroup || glist || gset || gtwig || attributes.size > 0 ),
			'ggroup', ggroup,
			'hasAbstract', !!timDef.hasAbstract,
			'imports', imports,
			'init', timDef.init,
			'json', timDef.json,
			'glist', glist,
			'gset', gset,
			'gtwig', gtwig,
			'module', module,
			'singleton', singleton,
			'transform', !!timDef.func._transform
		);

	return(
		$block
		.$comment(
			'This is an auto generated file.',
			'',
			'Editing this might be rather futile.'
		)
		.$( '"use strict"' )
		.$( g.genRequires( ) )
		.$( g.hasAbstract ? g.genConstructor( true ) : undefined )
		.$( g.genConstructor( false ) )
		.$( g.singleton ? g.genSingleton( ) : undefined )
		.$( g.hasAbstract ? g.genCreator( true ) : undefined )
		.$( g.genCreator( false ) )
		.$( g.json ? g.genFromJsonCreator( ) : undefined )
		.$( g.genReflection( ) )
		.$( g.genTimProto( ) )
		.$( g.json ? g.genToJson( ) : undefined )
		.$( g.genEquals( ) )
		.$( g.alike ? g.genAlike( ) : undefined )
	);
};


} );

