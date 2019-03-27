/*
| Generates timcode from a tim definition.
*/
'use strict';

tim.define( module, ( def, self ) => {


if( TIM )
{
	def.attributes =
	{
		// arguments for the constructor
		constructorList : { type : 'protean' },

		// true if a free strings parser is to be added in the creator
		creatorHasFreeStringsParser : { type : 'boolean' },

		// the timspec
		timspec : { type : './timspec/timspec' },
	};
}


const ast_var = require( './ast/var' );

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

const parser_parser = require( './parser/parser' );

const shorthand = require( './ast/shorthand' );


/*
| Shorthanding Shorthands.
*/
const $ = parser_parser.parse;

const $expr = parser_parser.parseExpr;

const $and = shorthand.$and;

const $block = shorthand.$block;

const $fail = shorthand.$fail;

const $func = shorthand.$func;

const $if = shorthand.$if;

const $objLiteral = shorthand.$objLiteral;

const $or = shorthand.$or;

const $string = shorthand.$string;

const $switch = shorthand.$switch;

const $undefined = shorthand.$undefined;


/*
| Type singletons
*/
const tsUndefined = type_undefined.create( );

const tsNull = type_null.create( );


/*
| Generates the requires.
*/
def.proto.genRequires =
	function( )
{
	const timspec = this.timspec;

	let block = $block;

	const it = timspec.imports.iterator( );

	for( let i = it.next( ); !i.done; i = it.next( ) )
	{
		const type = i.value;

		if( type.isPrimitive ) continue;

		block = block.$const( type.varname, type.require );
	}

	if( !timspec.abstract ) block = block.$const( 'tim_proto', 'tim.proto' );

	return block;
};


/*
| Generates the constructor.
*/
def.proto.genConstructor =
	function( )
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 0 ) throw new Error( );
/**/}

	let block = $block;

	const timspec = this.timspec;

	if( timspec.hasLazy ) block = block.$( 'this.__lazy = { }' );

	const attributes = timspec.attributes;

	// assigns the variables
	for( let a = 0, as = attributes.size; a < as; a++ )
	{
		const name = attributes.sortedKeys[ a ];

		const attr = attributes.get( name );

		const assign = $( 'this.', attr.assign, ' = ', attr.varRef );

		block = block.append( assign );
	}

	if( timspec.ggroup ) block = block.$( 'this._group = group' );

	if( timspec.glist ) block = block.$( 'this._list = list' );

	if( timspec.gset ) block = block.$( 'this._set = set' );

	if( timspec.gtwig )
	{
		block = block.$( 'this._twig = twig' );

		if( !timspec.hasProxyRanks ) block = block.$( 'this._ranks = ranks' );

		if( timspec.isAdjusting ) block = block.$( 'this._ttwig = { }' );
	}

	if( timspec.global ) block = block.$( this.timspec.global, '= this' );

	// immutes the new objects

	let freezeCall = $( 'Object.freeze( this )' );

	if( timspec.ggroup ) freezeCall = freezeCall.$argument ( 'group' );

	if( timspec.glist ) freezeCall = freezeCall.$argument( 'list' );

	if( timspec.gset ) freezeCall = freezeCall.$argument( 'set' );

	if( timspec.gtwig )
	{
		freezeCall = freezeCall.$argument( 'twig' );

		if( !timspec.hasProxyRanks ) freezeCall = freezeCall.$argument( 'ranks' );
	}

	// FUTURE force freezing date attributes
	block = block.$( freezeCall );

	// calls potential init checker
	if( timspec.check ) block = block.$check( 'this._check( )' );

	let cf = $func( block );

	const cList = this.constructorList;

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

			case 'twigDup' :

				cf =
					cf.$arg(
						'twigDup',
						'true if twig is already been duplicated'
					);

				break;

			default :
			{
				const attr = attributes.get( name );

				cf = cf.$arg( attr.varRef.name, attr.comment );

				break;
			}
		}
	}

	return(
		$block
		.$comment( 'Constructor.' )
		.$const( 'Constructor', cf )
		.$comment( 'Prototype shortcut' )
		.$const( 'prototype', 'Constructor.prototype' )
		.$( 'self.prototype = prototype' )
	);
};



/*
| Generates the singleton decleration.
*/
def.proto.genSingleton =
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
def.proto.genCreatorVariables =
	function( )
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 0 ) throw new Error( );
/**/}

	const timspec = this.timspec;

	const attributes = timspec.attributes;

	const varList = [ ];

	const aKeys = attributes.keys;

	for( let a = 0, al = aKeys.length; a < al; a++ )
	{
		const name = aKeys[ a ];

		varList.push( attributes.get( name ).varRef.name );
	}

	varList.push( 'inherit' );

	if( timspec.ggroup ) varList.push( 'group', 'groupDup' );

	if( timspec.glist ) varList.push( 'list', 'listDup' );

	if( timspec.gset ) varList.push( 'set', 'setDup' );

	if( timspec.gtwig )
	{
		varList.push( 'key', 'ranks', 'twig', 'twigDup' );

		if( !timspec.hasProxyRanks ) varList.push( 'rank' );
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
def.proto.genCreatorInheritanceReceiver =
	function( )
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 0 ) throw new Error( );
/**/}

	const timspec = this.timspec;

	const attributes = timspec.attributes;

	let receiver = $block.$( 'inherit = this' );

	if( timspec.ggroup )
	{
		receiver =
			receiver
			.$( 'group = inherit._group' )
			.$( 'groupDup = false' );
	}

	if( timspec.glist )
	{
		receiver =
			receiver
			.$( 'list = inherit._list' )
			.$( 'listDup = false' );
	}

	if( timspec.gset )
	{
		receiver =
			receiver
			.$( 'set = inherit._set' )
			.$( 'setDup = false' );
	}

	if( timspec.gtwig )
	{
		receiver = receiver.$( 'twig = inherit._twig' );

		receiver = receiver.$( 'ranks = inherit._ranks' );

		receiver = receiver.$( 'twigDup = false' );

		if( timspec.isAdjusting )
		{
			receiver =
				receiver
				.$if(
					'!tim_proto.isEmpty( inherit._ttwig )',
					$block
					.$( 'twigDup = true' )
					.$( !timspec.hasProxyRanks ? 'ranks = ranks.slice( )' : undefined )
					.$( 'twig = tim.copy2( twig, inherit._ttwig )' )
				);
		}
	}

	for( let a = 0, as = attributes.size; a < as; a++ )
	{
		const name = attributes.sortedKeys[ a ];

		const attr = attributes.get( name );

		const val =
			!attr.adjust
			? $( 'this.', attr.assign )
			: $(
				'tim.hasLazyValueSet( this, ', attr.$name, ' )',
				'? this.', name,
				': this.', '__' + name
			);

		receiver = receiver.$( attr.varRef, ' = ', val );
	}

	let result = $( 'if ( this !== self )', receiver, ';' );

	if( timspec.ggroup ) result = result.$elsewise( '{ group = { }; groupDup = true; }' );

	if( timspec.glist ) result = result.$elsewise( '{ list = [ ]; listDup = true; }' );

	if( timspec.gset ) result = result.$elsewise( '{ set = new Set( ); setDup = true; }' );

	if( timspec.gtwig )
	{
		result = result.$elsewise( '{ twig = { }; ranks = [ ]; twigDup = true; }' );
	}

	return result;
};


/*
| Generates the creators free strings parser.
*/
def.proto.genCreatorFreeStringsParser =
	function( )
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 0 ) throw new Error( );
/**/}

	const timspec = this.timspec;

	const attributes = timspec.attributes;

	let loop = $block.$let( 'arg', 'arguments[ a + 1 ]' );

	let switchExpr = $switch( 'arguments[ a ]' );

	for( let a = 0, as = attributes.size; a < as; a++ )
	{
		const name = attributes.sortedKeys[ a ];

		const attr = attributes.get( name );

		switchExpr =
			switchExpr
			.$case(
				$string( name ),
				$( 'if( arg !== pass ) {', attr.varRef, ' = arg; }' )
			);
	}

	if( timspec.ggroup )
	{
		const groupDupCheck =
			$if(
				'!groupDup',
				$block
				.$( 'group = tim.copy( group )' )
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

	if( timspec.glist )
	{
		const listDupCheck = $( 'if( !listDup ) { list = list.slice( ); listDup = true; }' );

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

	if( timspec.gset )
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

	if( timspec.gtwig )
	{
		const twigDupCheck =
			$if(
				'twigDup !== true',
				$block
				.$( 'twig = tim.copy( twig )' )
				.$( 'ranks = ranks.slice( )' )
				.$( 'twigDup = true' )
			);

		if( !timspec.hasProxyRanks )
		{
			switchExpr =
				switchExpr
				.$case(
					'"twig:add"',
					$block
					.$( twigDupCheck )
					.$( 'key = arg' )
					.$( 'arg = arguments[ ++a + 1 ]' )
					.$if( 'twig[ key ] !== undefined', $fail( ) )
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
						.$if( 'Object.keys( twig ).length !== ranks.length', $fail( ) )
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
					'"twig:insert"',
					$block
					.append( twigDupCheck )
					.$( 'key = arg' )
					.$( 'rank = arguments[ a + 2 ]' )
					.$( 'arg = arguments[ a +  3 ]' )
					.$( 'a += 2' )
					.$if( 'twig[ key ] !== undefined', $fail( ) )
					.$if( 'rank < 0 || rank > ranks.length', $fail( ) )
					.$( 'twig[ key ] = arg' )
					.$( 'ranks.splice( rank, 0, key )' )
				)
				.$case(
					'"twig:remove"',
					$block
					.append( twigDupCheck )
					.$if( 'twig[ arg ] === undefined', $fail( ) )
					.$( 'delete twig[ arg ]' )
					.$( 'ranks.splice( ranks.indexOf( arg ), 1 )' )
				);
		}

		switchExpr =
			switchExpr
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
def.proto.genCreatorDefaults =
	function( )
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 0 ) throw new Error( );
/**/}

	const attributes = this.timspec.attributes;

	let result = $block;

	for( let a = 0, as = attributes.size; a < as; a++ )
	{
		const name = attributes.sortedKeys[ a ];

		const attr = attributes.get( name );

		if(
			attr.defaultValue !== undefined
			&& !attr.defaultValue.equals( $undefined )
		)
		{
			// raise requires
			result =
				result
				.$(
					'if( ', attr.varRef, ' === undefined )',
					attr.varRef, ' = ', attr.defaultValue, ';'
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
def.proto.genSingleTypeCheckFailCondition =
	function(
		aVar,  // name of the variable
		type   // type to check for
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 2 ) throw new Error( );
/**/
/**/	if( aVar.timtype !== ast_var ) throw new Error( );
/**/}

	switch( type.timtype )
	{
		case type_boolean : return $( 'typeof( ', aVar, ' ) !== "boolean"' );

		case type_date : return $( '!(', aVar, 'instanceof Date )' );

		case type_function : return $( 'typeof( ', aVar, ' ) !== "function"' );

		case type_integer :

			return $(
				$( 'typeof( ', aVar, ' ) !== "number"' ),
				'|| Number.isNaN( ', aVar, ' )',
				'|| Math.floor( ', aVar, ' ) !== ', aVar
			);

		case type_null : return $( aVar, '!== null' );

		case type_number :

			return $(
				'typeof( ', aVar, ' ) !== "number"',
				'|| Number.isNaN( ', aVar, ' )'
			);

		case type_protean : return $( 'typeof( ', aVar, ' ) !== "object"' );

		case type_string : return $( 'typeof( ', aVar, ' ) !== "string"' );

		case type_tim : return $( aVar, '.timtype !== ', type.$varname );

		case type_undefined : return $( aVar, '!== undefined' );

		default : throw new Error( );
	}

	// unreachable
};


/*
| Generates a type check of a variable.
*/
def.proto.genTypeCheckFailCondition =
	function(
		aVar,   // the variable to check
		types   // the type or type_set it has to match
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 2 ) throw new Error( );
/**/}

	if( types.timtype !== type_set ) return this.genSingleTypeCheckFailCondition( aVar, types );

	if( types.size === 1 ) return this.genSingleTypeCheckFailCondition( aVar, types.trivial );

	const condArray = [ ];

	let it = types.iterator( );

	// first do the primitives
	for( let i = it.next( ); !i.done; i = it.next( ) )
	{
		const types = i.value;

		if( types.timtype === type_tim ) continue;

		const cond = this.genSingleTypeCheckFailCondition( aVar, types );

		if( cond ) condArray.push( cond );
	}

	it = types.iterator( );

	// then do the tims
	for( let i = it.next( ); !i.done; i = it.next( ) )
	{
		const type = i.value;

		if( type.timtype !== type_tim ) continue;

		const cond = this.genSingleTypeCheckFailCondition( aVar, type );

		if( cond ) condArray.push( cond );
	}

	if( condArray.length === 0 ) return;

	if( condArray.length === 1 ) return condArray[ 0 ];

	return $and.apply( undefined, condArray );
};



/*
| Generates the creators checks.
*/
def.proto.genCreatorChecks =
	function(
		json    // do checks for fromJsonCreator
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 1 ) throw new Error( );
/**/}

	const timspec = this.timspec;

	const attributes = timspec.attributes;

	let check = $block;

	for( let a = 0, as = attributes.size; a < as; a++ )
	{
		const name = attributes.sortedKeys[ a ];

		const attr = attributes.get( name );

		if( json && !attr.json ) continue;

		if( attr.types.timtype === type_protean ) continue;

		const tcheck = this.genTypeCheckFailCondition( attr.varRef, attr.types );

		if( tcheck ) check = check.$if( tcheck, $fail( ) );
	}

	if( timspec.ggroup )
	{
		check =
			check
			.$forInLet(
				'k', 'group',
				$block
				.$const( 'o', 'group[ k ]' )
				.$if(
					this.genTypeCheckFailCondition( $( 'o' ), timspec.ggroup ),
					$fail( )
				)
			);
	}

	if( timspec.glist )
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
					this.genTypeCheckFailCondition( $( 'o' ), timspec.glist ),
					$fail( )
				)
			);
	}

	if( timspec.gset )
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
					this.genTypeCheckFailCondition( $( 'v' ), timspec.gset ),
					$fail( )
				)
			);
	}

	if( timspec.gtwig )
	{
		// FUTURE check if ranks and twig keys match
		check =
			check
			.$for(
				'let a = 0, al = ranks.length',
				'a < al',
				'++a',
				$block
				.$const( 'o', 'twig[ ranks[ a ] ]' )
				.$if(
					this.genTypeCheckFailCondition( $( 'o' ), timspec.gtwig ),
					$fail( )
				)
			);
	}

	if( !json )
	{
		return check.length > 0 ? $block.$check( check ) : $block;
	}
	else
	{
		return check;
	}
};


/*
| Generates the creators unchanged detection.
|
| Returns this object if so.
*/
def.proto.genCreatorUnchanged =
	function( )
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 0 ) throw new Error( );
/**/}

	let cond = $( 'inherit' );

	const timspec = this.timspec;

	if( timspec.ggroup ) cond = $( cond, '&& groupDup === false' );

	if( timspec.glist ) cond = $( cond, '&& listDup === false' );

	if( timspec.gset ) cond = $( cond, '&& setDup === false' );

	if( timspec.gtwig ) cond = $( cond, '&& twigDup === false' );

	const attributes = timspec.attributes;

	for( let a = 0, as = attributes.size; a < as; a++ )
	{
		const name = attributes.sortedKeys[ a ];

		const attr = attributes.get( name );

		const ceq =
			this.genAttributeEquals(
				name,
				attr.varRef,
				$( 'inherit.', attr.assign ),
				'equals'
			);

		cond = $( cond, '&&', ceq );
	}

	return $block.$if( cond, $( 'return inherit' ) );
};


/*
| Generates inheritance optimizations.
*/
def.proto.genCreatorInheritOptimization =
	function( )
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 0 ) throw new Error( );
/**/}

	const timspec = this.timspec;

	const inherits = timspec.inherits;

	if( !inherits ) return;

	let result;

	let it = inherits.iterator( );

	for( let i = it.next( ); !i.done; i = it.next( ) )
	{
		if( !result ) result = $block;

		const v = i.value;

		const $v = $string( v );

		result =
			result.
			$if(
				$(
					'inherit',
					'&& tim.hasLazyValueSet( inherit, ', $v, ')',
					'&& newtim[ "__inherit_" + ', $v, ']( inherit )',
				),
				$block.$( 'tim.aheadValue( newtim, ', $v, ', inherit.', v, ')' )
			);
	}

	return result;
};


/*
| Generates the creators return statement
*/
def.proto.genCreatorReturn =
	function(
		optimization // if defined code optimizing inherits
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 1 ) throw new Error( );
/**/}

	const argList = this.constructorList;

	const timspec = this.timspec;

	const attributes = timspec.attributes;

	if( timspec.singleton )
	{
		return(
			$block
			.$if(
				'!_singleton',
				$( '_singleton = new Constructor( )' )
			)
			.$( 'return _singleton' )
		);
	}

	let call = $( 'Constructor( )' );

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

				call = call.$argument( attributes.get( argName ).varRef );
		}
	}

	if( !optimization )
	{
		return $( 'return new', call );
	}
	else
	{
		return(
			$block
			.$const( 'newtim', $( 'new', call ) )
			.$( optimization )
			.$( 'return newtim' )
		);
	}
};


/*
| Generates the creator.
*/
def.proto.genCreator =
	function( )
{
/**/if( CHECK  )
/**/{
/**/	if( arguments.length !== 0 ) throw new Error( );
/**/}

	const timspec = this.timspec;

	let block =
		$block
		.$( this.genCreatorVariables( ) )
		.$( this.genCreatorInheritanceReceiver( ) )
		.$( this.creatorHasFreeStringsParser
			? this.genCreatorFreeStringsParser( )
			: undefined
		)
		.$( this.genCreatorDefaults( ) )
		.$( this.genCreatorChecks( false ) )
		.$( this.genCreatorUnchanged( ) );

	const optimization = this.genCreatorInheritOptimization( );

	block = block.$( this.genCreatorReturn( optimization ) );

	const creator =
		$func( block )
		.$arg( undefined, 'free strings' );

	return(
		$block
		.$comment( 'Creates a new object.' )
		.$(
			'self.', timspec.creator,
			' = prototype.', timspec.creator,
			' = ', creator
		)
	);
};


/*
| Generates the fromJsonCreator's variable list.
*/
def.proto.genFromJsonCreatorVariables =
	function( )
{
	const timspec = this.timspec;

	const attributes = timspec.attributes;

	const varList = [ ];

	const aKeys = attributes.keys;

	for( let a = 0, al = aKeys.length; a < al; a++ )
	{
		const name = aKeys[ a ];

		const attr = attributes.get( name );

		varList.push( attr.varRef.name );
	}

	if( timspec.json )
	{
		if( timspec.ggroup ) varList.push( 'jgroup', 'group' );

		if( timspec.glist ) varList.push( 'jlist', 'list' );

		if( timspec.gtwig ) varList.push( 'key', 'jval', 'jwig', 'ranks', 'twig' );
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
*/
def.proto.genFromJsonCreatorAttributeParser =
	function(
		attr
	)
{
	const timspec = this.timspec;

	switch( attr.types.timtype )
	{
		case type_boolean :
		case type_integer :
		case type_number :
		case type_string :

			return $( attr.varRef, ' = arg' );

		case type_tim :

			return $( attr.varRef, ' = ', attr.types.$varname, '.createFromJSON( arg )' );
	}

	// the code switch
	let cSwitch;

	const it = attr.types.iterator( );

	// primitive checks
	const pcs = [ ];

	for( let i = it.next( ); !i.done; i = it.next( ) )
	{
		const type = i.value;

		switch( type.timtype )
		{
			case type_boolean : pcs.push ( 'typeof( arg ) === "boolean"' ); break;

			case type_null : pcs.push( 'arg === null' ); break;

			case type_number :
			case type_integer :

				pcs.push( 'typeof( arg ) === "number"' ); break;

			case type_string : pcs.push( 'typeof( arg ) === "string"' ); break;

			case type_undefined : pcs.push( 'arg === undefined' ); break;

			default :
			{
				if( !cSwitch ) cSwitch = $switch( 'arg.type' ).$default( $fail( ) );

				const jsontype = timspec.getJsonTypeOf( type );

				cSwitch =
					cSwitch
					.$case(
						$string( jsontype ),
						$(
							attr.varRef, ' = ',
							type.$varname,
							'.createFromJSON', '( arg )'
						)
					);
			}
		}
	}

	const pcsl = pcs.length;

	if( pcsl === 0 ) return cSwitch;

	let cond = $expr( pcs[ 0 ] );

	for( let a = 1; a < pcsl; a++ )
	{
		cond = $or( cond, $expr( pcs[ a ] ) );
	}

	const pcif = $if( cond, $( attr.varRef, ' = arg' ) );

	if( !cSwitch ) return pcif;

	return pcif.$elsewise( cSwitch );
};


/*
| Generates the fromJsonCreator's json parser.
*/
def.proto.genFromJsonCreatorParser =
	function(
		jsonList
	)
{
	const timspec = this.timspec;

	const attributes = timspec.attributes;

	// the switch
	let nameSwitch =
		$switch( 'name' )
		.$case(
			'"type"',
			$if(
				$( 'arg !== ', $string( timspec.json ) ),
				$fail( )
			)
		);

	if( timspec.ggroup ) nameSwitch = nameSwitch.$case( '"group"', 'jgroup = arg' );

	if( timspec.glist ) nameSwitch = nameSwitch.$case( '"list"', 'jlist = arg' );

	if( timspec.gset ) nameSwitch = nameSwitch.$case( '"set"', 'jset = arg' );

	if( timspec.gtwig )
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

		const attr = attributes.get( name );

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
def.proto.genFromJsonCreatorGroupProcessing =
	function( )
{
	const timspec = this.timspec;

	const group = timspec.ggroup;

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

	for( let i = it.next( ); !i.done; i = it.next( ) )
	{
		const type = i.value;

		if( type.timtype === type_null ) { haveNull = true; continue; }

		if( type.timtype === type_string )
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

		if( type.timtype === type_boolean )
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

		const jsontype = timspec.getJsonTypeOf( type );

		if( !jsontype ) throw new Error( );

		loopSwitch =
			loopSwitch
			.$case(
				$string( jsontype ),
				'group[ k ] =',
				type.$varname,
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
def.proto.genFromJsonCreatorListProcessing =
	function( )
{
	const timspec = this.timspec;

	const list = timspec.glist;

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
		const type = i.value;

		if( type === tsNull ) { haveNull = true; continue; }

		if( type === tsUndefined ) { haveUndefined = true; continue; }

		const jsontype = timspec.getJsonTypeOf( type );

		if( !jsontype ) throw new Error( );

		loopSwitch =
			loopSwitch
			.$case(
				$string( jsontype ),
				'list[ r ] =', type.$varname, '.createFromJSON( jlist[ r ] )'
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
def.proto.genFromJsonCreatorTwigProcessing =
	function( )
{
	const timspec = this.timspec;

	const twig = timspec.gtwig;

	let switchExpr = $switch( 'jval.type' );

	const it = twig.iterator( );

	for( let i = it.next( ); !i.done; i = it.next( ) )
	{
		const twigType = i.value;

		const jsontype = timspec.getJsonTypeOf( twigType );

		switchExpr =
			switchExpr
			.$case(
				$string( jsontype ),
				$( 'twig[ key ] =', twigType.$varname, '.createFromJSON( jval )' )
			);
	}

	// invalid twig type
	switchExpr = switchExpr.$default( $fail( ) );

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
def.proto.genFromJsonCreatorReturn =
	function( )
{
	const attributes = this.timspec.attributes;

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

				call = call.$argument( attributes.get( name ).varRef );

				break;
		}
	}

	return $( 'return new', call );
};


/*
| Generates the fromJsonCreator.
*/
def.proto.genFromJsonCreator =
	function( )
{
	const timspec = this.timspec;

	const attributes = timspec.attributes;

	// all attributes expected from json
	const jsonList = [ ];

	for( let a = 0, as = attributes.size; a < as; a++ )
	{
		const name = attributes.sortedKeys[ a ];

		const attr = attributes.get( name );

		if( attr.json ) jsonList.push( name );
	}

	if( timspec.gtwig ) jsonList.push( 'twig', 'ranks' );

	jsonList.sort( );

	// function contents
	let funcBlock =
		this.genFromJsonCreatorVariables( )
		.$( this.genFromJsonCreatorParser( jsonList ) )
		.$( this.genCreatorDefaults( ) );

	if( timspec.ggroup )
	{
		funcBlock = funcBlock.$( this.genFromJsonCreatorGroupProcessing( ) );
	}

	if( timspec.glist )
	{
		funcBlock = funcBlock.$( this.genFromJsonCreatorListProcessing( ) );
	}

	if( timspec.gset ) throw new Error( 'FUTURE, fromJson for sets not implemented' );

	if( timspec.gtwig )
	{
		funcBlock = funcBlock.$( this.genFromJsonCreatorTwigProcessing( ) );
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
def.proto.genReflection =
	function( )
{
	return(
		$block
		.$comment( 'Type reflection.' )
		.$( 'prototype.timtype = self' )
	);
};


/*
| Generates code for setting the prototype
| entry 'key' to 'value'
*/
def.proto.$protoSet =
	function(
		key,
		value
	)
{
	return $( 'prototype.', key, ' = ', 'tim_proto.', value );
};


/*
| Generates code for setting the prototype
| lazy value named 'name' to 'func'.
*/
def.proto.$protoLazyValueSet =
	function(
		name,  // FIXME, make a $string here around it
		func
	)
{
	return(
		$block
		.$( 'tim_proto.lazyValue( prototype,', name, ', tim_proto.', func, ')' )
	);
};


/*
| Generates the timProto stuff.
*/
def.proto.genTimProto =
	function( )
{
	const timspec = this.timspec;

	let result =
		$block
		.$comment( 'Sets values by path.' )
		.$( this.$protoSet( 'setPath', 'setPath' ) )
		.$comment( 'Gets values by path' )
		.$( this.$protoSet( 'getPath', 'getPath' ) );

	if( timspec.ggroup )
	{
		result =
			result

			.$comment(
				'Returns the group with another group added,',
				'overwriting collisions.'
			)
			.$( this.$protoSet( 'addGroup', 'groupAddGroup' ) )

			.$comment( 'Gets one element from the group.' )
			.$( this.$protoSet( 'get', 'groupGet' ) )

			.$comment( 'Returns the group keys.')
			.$( this.$protoLazyValueSet( '"keys"', 'groupKeys' ) )

			.$comment( 'Returns the sorted group keys.')
			.$( this.$protoLazyValueSet( '"sortedKeys"', 'groupSortedKeys' ) )

			.$comment( 'Returns the group with one element removed.' )
			.$( this.$protoSet( 'remove', 'groupRemove' ) )

			.$comment( 'Returns the group with one element set.' )
			.$( this.$protoSet( 'set', 'groupSet' ) )

			.$comment( 'Returns the size of the group.')
			.$( this.$protoLazyValueSet( '"size"', 'groupSize' ) );

			// FIXME iterator
	}

	if( timspec.glist )
	{
		result =
			result
			.$comment( 'Returns the list with an element appended.' )
			.$( this.$protoSet( 'append', 'listAppend' ) )

			.$comment( 'Returns the list with another list appended.' )
			.$( this.$protoSet( 'appendList', 'listAppendList' ) )

			.$comment( 'Returns the length of the list.')
			.$( this.$protoLazyValueSet( '"length"', 'listLength' ) )

			.$comment( 'Returns one element from the list.' )
			.$( this.$protoSet( 'get', 'listGet' ) )

			.$comment( 'Returns a slice from the list.' )
			.$( this.$protoSet( 'slice', 'listSlice' ) )

			.$comment( 'Returns the list with one element inserted.' )
			.$( this.$protoSet( 'insert', 'listInsert' ) )

			.$comment( 'Returns the list with one element removed.' )
			.$( this.$protoSet( 'remove', 'listRemove' ) )

			.$comment( 'Returns the list with one element set.' )
			.$( this.$protoSet( 'set', 'listSet' ) )

			.$comment( 'Forwards the iterator.' )
			.$(
				'prototype[ Symbol.iterator ] =',
				$func( $( 'return this._list[ Symbol.iterator ]( )' ) )
			);
	}

	if( timspec.gset )
	{
		result =
			result
			.$comment( 'Returns the set with one element added.' )
			.$( this.$protoSet( 'add', 'setAdd' ) )

			.$comment( 'Returns the set with another set added.' )
			.$( this.$protoSet( 'addSet', 'setAddSet' ) )

			.$comment( 'Returns true if the set has an element.' )
			.$( this.$protoSet( 'has', 'setHas' ) )

			// FIXME use a real iterator
			.$comment( 'Returns an iterator for the set.' )
			.$( this.$protoSet( 'iterator', 'setIterator' ) )

			.$comment( 'Returns the set with one element removed.' )
			.$( this.$protoSet( 'remove', 'setRemove' ) )

			.$comment( 'Returns the size of the set.' )
			.$( this.$protoLazyValueSet( '"size"', 'setSize' ) )

			.$comment( 'Returns the one and only element or the set if size != 1.' )
			.$( this.$protoLazyValueSet( '"trivial"', 'setTrivial' ) )

			.$comment( 'Forwards the iterator.' )
			.$(
				'prototype[ Symbol.iterator ] =',
				$func( $( 'return this._set[ Symbol.iterator ]( )' ) )
			);
	}

	if( timspec.gtwig )
	{
		result =
			result
			.$comment( 'Returns the element at rank.' )
			.$( this.$protoSet( 'atRank', 'twigAtRank' ) )

			.$comment( 'Returns the element by key.' )
			.$( this.$protoSet( 'get', timspec.isAdjusting ? 'twigAdjustGet' : 'twigGet' ) )

			.$comment( 'Returns the key at a rank.' )
			.$( this.$protoSet( 'getKey', 'twigGetKey' ) )

			.$comment( 'Returns the length of the twig.')
			.$( this.$protoLazyValueSet( '"length"', 'twigLength' ) )

			.$comment( 'Returns the rank of the key.' )
			.$(
				'tim_proto.lazyFunctionString(',
					'prototype, "rankOf", tim_proto.twigRankOf ',
				')'
			)

			.$comment( 'Returns the twig with the element at key set.' )
			.$( this.$protoSet( 'set', 'twigSet' ) );

			// FIXME iterator
	}

	return result;
};


/*
| Generates the toJSON converter.
*/
def.proto.genToJson =
	function( )
{
	const timspec = this.timspec;

	const attributes = timspec.attributes;

	let olit = $objLiteral( ).add( 'type', $string( timspec.json ) );

	for( let a = 0, as = attributes.size; a < as; a++ )
	{
		const name = attributes.sortedKeys[ a ];

		const attr = attributes.get( name );

		if( !attr.json ) continue;

		olit = olit.add( name, 'this.', attr.assign );
	}

	if( timspec.ggroup ) olit = olit.add( 'group', 'this._group' );

	if( timspec.glist ) olit = olit.add( 'list', 'this._list' );

	if( timspec.gset ) throw new Error( 'FUTURE not implemented' );

	if( timspec.gtwig )
	{
		olit =
			olit
			.add( 'ranks', 'this._ranks' )
			.add( 'twig', 'this._twig' );
	}

	let block =
		$block
		.$const( 'json', olit )
		.$( 'return', $func( 'return Object.freeze( json )' ) );

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
def.proto.genAttributeEquals =
	function(
		name,       // attribute name
		le,         // this value expression
		re,         // other value expression
		eqFuncName  // the equals function name to call
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 4 ) throw new Error( );
/**/}

	const attributes = this.timspec.attributes;

	const attr = attributes.get( name );

	const allowsNull = attr.types.timtype === type_set && attr.types.has( tsNull );

	const allowsUndefined = attr.types.timtype === type_set && attr.types.has( tsUndefined );

	const ceq = $( le, ' === ', re );

	// current test
	let pc;

	// next test (to be appended on current)
	let pn;

	switch( attr.types.equalsConvention )
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

			if( attr.types.equalsConvention === 'can' )
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
def.proto.genEqualsFuncBody =
	function(
		mode,       // 'normal' or 'json'
		eqFuncName  // name of equals func to call
	)
{
	const timspec = this.timspec;

	let body =
		$block
		.$if( 'this === obj', $( 'return true' ) )
		.$if( '!obj', $( 'return false' ) )
		.$if(
			$( 'obj.timtype !== self' ),
			$(' return false' )
		);

	if( timspec.ggroup )
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

	if( timspec.glist )
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

	if( timspec.gset )
	{
		const setTest =
			$block
			.$( 'if( this.size !== obj.size ) return false;' )
			.$const( 'it', 'this.iterator( )' )
			.$for( 'let i = it.next( )', '!i.done', 'i = it.next( )',
				$block
				.$const( 'v', 'i.value' )
				.$( 'if( !obj.has( v ) ) return false;' )
			);

		body = body.$if( 'this._set !== obj._set', setTest );
	}

	if( timspec.gtwig )
	{
		const twigTestLoopBody =
			$block
			.$const( 'key', 'this._ranks[ a ]' )
			.$( 'if( key !== obj._ranks[ a ] ) return false;' )
			.$const( 'ti', 'this._twig[ key ]' )
			.$const( 'oi', 'obj._twig[ key ]' )
			.$(
				'if (',
					'( ti && ti.', eqFuncName, ' )',
					'? !ti', '.', eqFuncName, '( oi )',
					': ti !== oi',
				') return false;'
			);

		const twigTest =
			$block
			.$( 'if( this.length !== obj.length ) return false;' )
			.$for(
				'let a = 0, al = this.length',
				'a < al',
				'++a',
				twigTestLoopBody
			);

		body =
			body
			.$(
				'if( this._twig !== obj._twig || this._ranks !== obj._ranks )',
				twigTest, ';'
			);
	}

	const attributes = this.timspec.attributes;

	let cond;

	for( let a = 0, as = attributes.size; a < as; a++ )
	{
		const name = attributes.sortedKeys[ a ];

		const attr = attributes.get( name );

		if( mode === 'json' && !attr.json ) continue;

		const ceq =
			this.genAttributeEquals(
				name,
				$( 'this.', attr.assign ),
				$( 'obj.', attr.assign ),
				eqFuncName
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
def.proto.genEquals =
	function( )
{
	const timspec = this.timspec;

	let block = $block;

	const normalEqFuncBody = this.genEqualsFuncBody( 'normal', 'equals' );

	const jsonEqFuncBody = timspec.json && this.genEqualsFuncBody( 'json', 'equalsJSON' );

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

		if( timspec.json )
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
def.proto.genAlike =
	function( )
{
	const timspec = this.timspec;

	const alikeList = Object.keys( timspec.alike ).sort( );

	let cond;

	let result = $block;

	for( let a = 0, al = alikeList.length; a < al; a++ )
	{
		const alikeName = alikeList[ a ];

		const ignores = timspec.alike[ alikeName ].ignores;

		result = result.$comment( 'Tests partial equality.' );

		let block =
			$block
			.$if( 'this === obj', $( 'return true') )
			.$if( '!obj', $(' return false' ) );

		if( timspec.gtwig )
		{
			// FUTURE same test as in equals
			cond =
				$(
					'this._twig === obj._twig',
					'&& this._ranks === obj._ranks'
				);
		}

		const attributes = this.timspec.attributes;

		for( let b = 0, bZ = attributes.size; b < bZ; b++ )
		{
			const name = attributes.sortedKeys[ b ];

			const attr = attributes.get( name );

			if( ignores[ name ] ) continue;

			const ceq =
				this.genAttributeEquals(
					name,
					$( 'this.', attr.assign ),
					$( 'obj.', attr.assign ),
					'equals'
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
| Generates the attribute lazy adjustment calls.
*/
def.proto.genAttrAdjust =
	function( )
{
	const attributes = this.timspec.attributes;

	let result;

	for( let a = 0, aZ = attributes.size; a < aZ; a++ )
	{
		const name = attributes.sortedKeys[ a ];

		const attr = attributes.get( name );

		if( !attr.adjust ) continue;

		let b;

		const $name = $string( name );

		b =
			$block
			.$(
				'tim_proto.lazyValue( ',
					'prototype,',
					$name, ',',
					$func(
						$block
						.$( 'return this[ "__adjust_" + ', $name, ' ]( this.__' + name, ')' )
					),
				')'
			);

		if( !result ) result = $block;

		result = result.$( b );
	}

	return result;
};


/*
| Generates the preamble.
*/
def.proto.genPreamble =
	function(
		block // block to append to
	)
{
	return block;
};


/*
| Executes the generator return an ast tree.
*/
def.lazy.ast =
	function( )
{
	const timspec = this.timspec;

	let code =
		$block
		.$( '"use strict"' )
		.$comment(
			'This is an auto generated file.',
			'',
			'Editing this might be rather futile.'
		);

	code = code.$( this.genRequires( ) );

	code = code.$( this.genConstructor( ) );

	if( timspec.singleton ) code = code.$( this.genSingleton( )  );

	if( !timspec.abstract ) code = code.$( this.genCreator( ) );

	if( !timspec.abstract && timspec.json ) code = code.$( this.genFromJsonCreator( ) );

	if( !timspec.abstract ) code = code.$( this.genReflection( ) );

	if( !timspec.abstract ) code = code.$( this.genTimProto( ) );

	if( timspec.json ) code = code.$( this.genToJson( ) );

	code = code.$( this.genEquals( ) );

	if( timspec.alike ) code = code.$( this.genAlike( ) );

	code = code.$( this.genAttrAdjust( ) );

	return code;
};


/*
| Generates a generator from a tim definition.
*/
def.static.createGenerator =
	function(
		timspec,      // the timspec to create timcode for
		module        // the module relative to which types are
	)
{
/**/if( CHECK )
/**/{
/**/	if( arguments.length !== 2 ) throw new Error( );
/**/}

	const constructorList = [ ];

	const attributes = timspec.attributes;

	const aKeys = attributes.sortedKeys;

	for( let a = 0, al = aKeys.length; a < al; a++ )
	{
		constructorList.push( aKeys[ a ] );
	}

	if( timspec.ggroup ) constructorList.unshift( 'group' );

	if( timspec.glist ) constructorList.unshift( 'list' );

	if( timspec.gset ) constructorList.unshift( 'set' );

	if( timspec.gtwig )
	{
		constructorList.unshift( 'ranks' );

		constructorList.unshift( 'twig' );
	}

	Object.freeze( constructorList );

	const haveFreeStringsParser =
		!!(
			timspec.ggroup
			|| timspec.glist
			|| timspec.gset
			|| timspec.gtwig
			|| attributes.size > 0
		);

	return(
		self.create(
			'constructorList', constructorList,
			'creatorHasFreeStringsParser', haveFreeStringsParser,
			'timspec', timspec
		)
	);
};


} );
