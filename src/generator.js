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


const ast_var = tim.require( './ast/var' );

const type_boolean = tim.require( './type/boolean' );

const type_date = tim.require( './type/date' );

const type_function = tim.require( './type/function' );

const type_integer = tim.require( './type/integer' );

const type_null = tim.require( './type/null' );

const type_number = tim.require( './type/number' );

const type_protean = tim.require( './type/protean' );

const type_set = tim.require( './type/set' );

const type_string = tim.require( './type/string' );

const type_tim = tim.require( './type/tim' );

const type_undefined = tim.require( './type/undefined' );

const parser_parser = tim.require( './parser/parser' );

const shorthand = tim.require( './ast/shorthand' );


/*
| Shorthanding Shorthands.
*/
const $ = parser_parser.parse;

const $expr = parser_parser.expr;

const $and = shorthand.$and;

const $block = shorthand.$block;

const $func = shorthand.$func;

const $generator = shorthand.$generator;

const $objLiteral = shorthand.$objLiteral;

const $or = shorthand.$or;

const $string = shorthand.$string;

const $switch = shorthand.$switch;

const $undefined = shorthand.$undefined;


/*
| Type singletons
*/
const tsUndefined = type_undefined.singleton;

const tsNull = type_null.singleton;


/*
| Generates the requires.
*/
def.proto.genRequires =
	function( )
{
	const timspec = this.timspec;

	let block = $block;

	for( let type of timspec.imports )
	{
		if( type.isPrimitive ) continue;

		block = block.$const( type.varname, type.require );
	}

	if( !timspec.abstract ) block = block.$( 'const tim_proto = tim.proto' );

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
	for( let attr of  attributes )
	{
		const assign = $( 'this.', attr.assign, ' = ', attr.varRef );

		block = block.append( assign );
	}

	if( timspec.ggroup ) block = block.$( 'this._group = group' );

	if( timspec.glist ) block = block.$( 'this._list = list' );

	if( timspec.gset ) block = block.$( 'this._set = set' );

	if( timspec.gtwig )
	{
		block = block.$( 'this._twig = twig' );

		if( !timspec.hasProxyRanks ) block = block.$( 'this.keys = keys' );

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

		if( !timspec.hasProxyRanks ) freezeCall = freezeCall.$argument( 'keys' );
	}

	// FUTURE force freezing date attributes
	block = block.$( freezeCall );

	// calls potential init checker
	if( timspec.check ) block = block.$check( 'this._check( )' );

	let cf = $func( block );

	for( let name of this.constructorList )
	{
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

			case 'keys' : cf = cf.$arg( 'keys', 'twig key ranks' ); break;

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

	block =
		$block
		.$comment( 'Constructor.' )
		.$( 'const Constructor =', cf )
		.$comment( 'Prototype shortcut' )
		.$( 'const prototype = Constructor.prototype' )
		.$( 'self.prototype = prototype' );

	if( timspec.path )
	{
		block =
			block
			.$comment( 'Reflection for visual debugging' )
			.$check(
				'self.__DEBUG_PATH__ = ',
				'prototype.__DEBUG_PATH__ = ',
				$string( timspec.path.filepath )
			);
	}

	return block;
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
		.$(
			'tim_proto.lazyStaticValue( self, "singleton", ',
			$func( $( '{ return self._create( ); }' ) ),
			')'
		)
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

	const varList = [ ];

	for( let attr of timspec.attributes )
	{
		varList.push( attr.varRef.name );
	}

	varList.push( 'inherit' );

	if( timspec.ggroup ) varList.push( 'group', 'groupDup' );

	if( timspec.glist ) varList.push( 'list', 'listDup' );

	if( timspec.gset ) varList.push( 'set', 'setDup' );

	if( timspec.gtwig )
	{
		varList.push( 'key', 'keys', 'twig', 'twigDup' );

		if( !timspec.hasProxyRanks ) varList.push( 'rank' );
	}

	varList.sort( );

	let result = $block;

	for( let varName of varList )
	{
		result = result.$let( varName );
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

		receiver = receiver.$( 'keys = inherit.keys' );

		receiver = receiver.$( 'twigDup = false' );

		if( timspec.isAdjusting )
		{
			receiver =
				receiver
				.$( 'if( !tim_proto.isEmpty( inherit._ttwig ) )',
					$block
					.$( 'twigDup = true' )
					.$( !timspec.hasProxyRanks ? 'keys = keys.slice( )' : undefined )
					.$( 'twig = tim.copy2( twig, inherit._ttwig )' )
				);
		}
	}

	for( let attr of attributes )
	{
		const val =
			!attr.adjust
			? $( 'this.', attr.assign )
			: $(
				'tim.hasLazyValueSet( this, ', attr.$name, ' )',
				'? this.', attr.name,
				': this.', '__' + attr.name
			);

		receiver = receiver.$( attr.varRef, ' = ', val );
	}

	let result = $( 'if ( this !== self )', receiver, ';' );

	if( timspec.ggroup ) result = result.$elsewise( '{ group = { }; groupDup = true; }' );

	if( timspec.glist ) result = result.$elsewise( '{ list = [ ]; listDup = true; }' );

	if( timspec.gset ) result = result.$elsewise( '{ set = new Set( ); setDup = true; }' );

	if( timspec.gtwig )
	{
		result = result.$elsewise( '{ twig = { }; keys = [ ]; twigDup = true; }' );
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

	let loop = $block.$let( 'arg', 'arguments[ a + 1 ]' );

	let switchExpr = $switch( 'arguments[ a ]' );

	for( let attr of timspec.attributes )
	{
		switchExpr =
			switchExpr
			.$case( attr.$name, 'if( arg !== pass ) {', attr.varRef, ' = arg; }' );
	}

	if( timspec.ggroup )
	{
		const groupDupCheck =
			$( '{ if( !groupDup ) { group = tim.copy( group ); groupDup = true; } }' );

		switchExpr =
			switchExpr
			.$case( '"group:init"', '{ group = arg; groupDup = true; }' )
			.$case(
				'"group:set"',
				groupDupCheck.$( 'group[ arg ] = arguments[ ++a + 1 ]' )
			)
			.$case(
				'"group:remove"',
				groupDupCheck.$( 'delete group[ arg ]' )
			);
	}

	if( timspec.glist )
	{
		const listDupCheck =
			$( '{ if( !listDup ) { list = list.slice( ); listDup = true; } }' );

		switchExpr =
			switchExpr
			.$case(
				'"list:init"',
				'if( Array.isArray( arg ) )',
				'{ list = arg; listDup = true; }',
				'else { list = arg._list; listDup = false; }'
			)
			.$case(
				'"list:append"',
				listDupCheck.$( 'list.push( arg )' )
			)
			.$case(
				'"list:insert"',
				listDupCheck.$( 'list.splice( arg, 0, arguments[ ++a + 1 ] )' )
			)
			.$case(
				'"list:remove"',
				listDupCheck.$( 'list.splice( arg, 1 ) ' )
			)
			.$case(
				'"list:set"',
				listDupCheck.$( 'list[ arg ] = arguments[ ++a + 1 ]' )
			);
	}

	if( timspec.gset )
	{
		const setDupCheck =
			$( '{ if( !setDup ) { set = new Set( set ); setDup = true; } }' );

		switchExpr =
			switchExpr
			.$case(
				'"set:add"',
				setDupCheck.$( 'set.add( arg, arguments[ a + 1 ] )' )
			)
			.$case(
				'"set:init"',
				$block
				.$check(
					$( 'if( !( arg instanceof Set ) ) throw new Error( );' )
				)
				.$( 'set = arg' )
				.$( 'setDup = true' )
			)
			.$case( '"set:remove"', setDupCheck.$( 'set.delete( arg )' ) );
	}

	if( timspec.gtwig )
	{
		const twigDupCheck =
			$(
				'{ if( twigDup !== true )',
				'{',
				'  twig = tim.copy( twig );',
				'  keys = keys.slice( );',
				'  twigDup = true;',
				'} }'
			);

		if( !timspec.hasProxyRanks )
		{
			switchExpr =
				switchExpr
				.$case(
					'"twig:add"',
					twigDupCheck
					.$( 'key = arg' )
					.$( 'arg = arguments[ ++a + 1 ]' )
					.$( 'if( twig[ key ] !== undefined ) throw new Error( );' )
					.$( 'twig[ key ] = arg' )
					.$( 'keys.push( key )' )
				)
				.$case(
					'"twig:init"',
					$block
					.$( 'twigDup = true' )
					.$( 'twig = arg' )
					.$( 'keys = arguments[ ++a + 1 ]' )
					.$check(
						$block
						.$( 'if( !Array.isArray( keys ) ) throw new Error( );' )
						.$(
							'if( Object.keys( twig ).length !== keys.length ) throw new Error( );'
						)
						.$( 'for( let key of keys )',
							$block
							.$( 'if( twig[ key ] === undefined ) throw new Error( );' )
						)
					)
				)
				.$case(
					'"twig:insert"',
					twigDupCheck
					.$( 'key = arg' )
					.$( 'rank = arguments[ a + 2 ]' )
					.$( 'arg = arguments[ a +  3 ]' )
					.$( 'a += 2' )
					.$( 'if( twig[ key ] !== undefined ) throw new Error( );' )
					.$( 'if( rank < 0 || rank > keys.length ) throw new Error( );' )
					.$( 'twig[ key ] = arg' )
					.$( 'keys.splice( rank, 0, key )' )
				)
				.$case(
					'"twig:remove"',
					twigDupCheck
					.$( 'if( twig[ arg ] === undefined ) throw new Error( );' )
					.$( 'delete twig[ arg ]' )
					.$( 'keys.splice( keys.indexOf( arg ), 1 )' )
				);
		}

		switchExpr =
			switchExpr
			.$case(
				'"twig:set+"',
				twigDupCheck
				.$( 'key = arg' )
				.$( 'arg = arguments[ ++a + 1 ]' )
				.$( 'if( twig[ key ] === undefined ) keys.push( key );' )
				.$( 'twig[ key ] = arg' )
			)
			.$case(
				'"twig:set"',
				twigDupCheck
				.$( 'key = arg' )
				.$( 'arg = arguments[ ++a + 1 ]' )
				.$( 'if( twig[ key ] === undefined ) throw new Error( );' )
				.$( 'twig[ key ] = arg' )
			);
	}

	switchExpr =
		switchExpr
		.$default( 'throw new Error( )' );

	loop = loop.append( switchExpr );

	return(
		$block
		.$(
			'for( let a = 0, al = arguments.length; a < al; a += 2 )',
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

	let result = $block;

	for( let attr of this.timspec.attributes )
	{
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

	// first do the primitives
	for( let type of types )
	{
		if( type.timtype === type_tim ) continue;

		const cond = this.genSingleTypeCheckFailCondition( aVar, type );

		if( cond ) condArray.push( cond );
	}

	// then do the tims
	for( let type of types )
	{
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

	let check = $block;

	for( let attr of timspec.attributes )
	{
		if( json && !attr.json ) continue;

		if( attr.types.timtype === type_protean ) continue;

		const tcheck = this.genTypeCheckFailCondition( attr.varRef, attr.types );

		if( tcheck ) check = check.$( 'if(', tcheck, ') throw new Error( ); ' );
	}

	if( timspec.ggroup )
	{
		check =
			check
			// for of loop in js tables not possible
			.$( 'for( let k in group )',
				$block
				.$( 'const o = group[ k ]' )
				.$( 'if(',
					this.genTypeCheckFailCondition( $( 'o' ), timspec.ggroup ),
					') throw new Error( );'
				)
			);
	}

	if( timspec.glist )
	{
		check =
			check
			.$( 'for( let o of list )',
				$block
				.$( 'if(',
					this.genTypeCheckFailCondition( $( 'o' ), timspec.glist ),
					') throw new Error( );'
				)
			);
	}

	if( timspec.gset )
	{
		check =
			check
			.$(
				'for( let v of set )',
				$block
				.$( 'if( ',
					this.genTypeCheckFailCondition( $( 'v' ), timspec.gset ),
					') throw new Error( );'
				)
			);
	}

	if( timspec.gtwig )
	{
		// FUTURE check if ranks and twig keys match
		check =
			check
			.$(
				'for( let key of keys )',
				$block
				.$( 'const o = twig[ key ]' )
				.$( 'if( ',
					this.genTypeCheckFailCondition( $( 'o' ), timspec.gtwig ),
					') throw new Error( );'
				)
			);
	}

	return(
		json
		? check
		: ( check.length > 0 ? $block.$check( check ) : $block )
	);
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

	for( let attr of timspec.attributes )
	{
		const ceq =
			this.genAttributeEquals(
				attr.name,
				attr.varRef,
				$( 'inherit.', attr.assign ),
				'equals'
			);

		cond = $( cond, '&&', ceq );
	}

	return $block.$( 'if(', cond, ') return inherit;' );
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

	for( let v of inherits )
	{
		if( !result ) result = $block;

		const $v = $string( v );

		result =
			result.
			$(
				'if(',
					'inherit',
					'&& tim.hasLazyValueSet( inherit, ', $v, ')',
					'&& newtim[ "__inherit_" + ', $v, ']( inherit )',
				')',
				'{ tim.aheadValue( newtim, ', $v, ', inherit.', v, ') }'
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

	const timspec = this.timspec;

	const attributes = timspec.attributes;

	if( timspec.singleton )
	{
		return(
			$block
			.$( 'if( !_singleton ) _singleton = new Constructor( );' )
			.$( 'return _singleton' )
		);
	}

	let call = $( 'Constructor( )' );

	for( let argName of this.constructorList )
	{
		switch( argName )
		{
			case 'group' :
			case 'groupDup' :
			case 'inherit' :
			case 'keys' :
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
			.$( 'const newtim = new', call )
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

	const varList = [ ];

	for( let attr of timspec.attributes )
	{
		varList.push( attr.varRef.name );
	}

	if( timspec.json )
	{
		if( timspec.ggroup ) varList.push( 'jgroup', 'group' );

		if( timspec.glist ) varList.push( 'jlist', 'list' );

		if( timspec.gset ) varList.push( 'jset', 'set' );

		if( timspec.gtwig ) varList.push( 'jval', 'jwig', 'keys', 'twig' );
	}

	varList.sort( );

	let result = $block;

	for( let varName of varList )
	{
		result = result.$let( varName );
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

	// primitive checks
	const pcs = [ ];

	for( let type of attr.types )
	{
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
				if( !cSwitch ) cSwitch = $switch( 'arg.type' ).$default( 'throw new Error( );' );

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

	const pcif = $( 'if( ', cond, ' )', attr.varRef, ' = arg;' );

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
			'if( arg !==', $string( timspec.json ), ') throw new Error( );'
		);

	if( timspec.ggroup ) nameSwitch = nameSwitch.$case( '"group"', 'jgroup = arg' );

	if( timspec.glist ) nameSwitch = nameSwitch.$case( '"list"', 'jlist = arg' );

	if( timspec.gset ) nameSwitch = nameSwitch.$case( '"set"', 'jset = arg' );

	if( timspec.gtwig )
	{
		nameSwitch =
			nameSwitch
			.$case( '"twig"', 'jwig = arg' )
			.$case( '"keys"', 'keys = arg' );
	}

	for( let name of jsonList )
	{
		// FIXME make a table
		if(
			name === 'group'
			|| name === 'keys'
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
		$block
		.$( 'for( let name in json )',
			$block
			.$( 'const arg = json[ name ]' )
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
	if( group.size === 1 && group.trivial.timtype === type_string )
	{
		return(
			$block
			.$( 'if( !jgroup ) throw new Error( );' )
			.$( 'group = jgroup' )
		);
	}

	// FUTURE dirty workaround 2
	if( group.size === 1 && group.trivial.timtype === type_boolean )
	{
		return(
			$block
			.$( 'if( !jgroup ) throw new Error( );' )
			.$( 'group = jgroup' )
		);
	}

	const result =
		$block
		.$( 'if( !jgroup ) throw new Error( );' )
		.$( 'group = { }' );

	let loopSwitch = $switch( 'jgroup[ k ].type' );

	loopSwitch = loopSwitch.$default( 'throw new Error( );' );

	// FUTURE allow more than one non-tim type
	let customDefault = false;

	for( let type of group )
	{
		if( type.timtype === type_null ) { haveNull = true; continue; }

		if( type.timtype === type_string )
		{
			if( customDefault ) throw new Error( );

			customDefault = true;

			loopSwitch =
				loopSwitch
				.$default(
					$(
						'if( typeof( jgroup[ k ] ) === "string" )',
						'{ group[ k ] = jgroup[ k ]; }',
						'else',
						'{ throw new Error( ); }'
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
					'if( typeof( jgroup[ k ] ) === "boolean" ) group[ k ] = jgroup[ k ];',
					'else throw new Error( );'
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

	return result.$( 'for( let k in jgroup )', loopBody, ';' );
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
	if( list.size === 1 && list.trivial.timtype === type_string )
	{
		return(
			$block
			.$( 'if( !jlist ) throw new Error( );' )
			.$( 'list = jlist' )
		);
	}

	const result =
		$block
		.$( 'if( !jlist ) throw new Error( );' )
		.$( 'list = [ ]' );

	let loopSwitch =
		$switch( 'jlist[ r ].type' )
		.$default( 'throw new Error( )' );

	let haveNull = false;

	let haveUndefined = false;

	for( let type of list )
	{
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
			loopBody
			.$( 'if( jlist[ r ] === undefined ) { list[ r ] = undefined; continue; }' );
	}

	loopBody =
		loopBody.length > 0
		? loopBody.append( loopSwitch )
		: loopSwitch;

	return result.$( 'for( let r = 0, rl = jlist.length; r < rl; ++r )', loopBody, ';' );
};



/*
| Generates the fromJsonCreator's set processing.
*/
def.proto.genFromJsonCreatorSetProcessing =
	function( )
{
	const timspec = this.timspec;

	const set = timspec.gset;

	// FUTURE dirty workaround
	if( set.size !== 1 || set.trivial.timtype !== type_string )
	{
		throw new Error( 'sets json conversation not yet fully implemented' );
	}

	return(
		$block
		.$( 'if( !jset ) throw new Error( );' )
		.$( 'set = new Set( jset )' )
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

	for( let twigType of twig )
	{
		const jsontype = timspec.getJsonTypeOf( twigType );

		switchExpr =
			switchExpr
			.$case(
				$string( jsontype ),
				$( 'twig[ key ] =', twigType.$varname, '.createFromJSON( jval )' )
			);
	}

	// invalid twig type
	switchExpr = switchExpr.$default( 'throw new Error( );' );

	const loop =
		$block
		// json keys/twig mismatch
		.$( 'if( !jwig[ key ] ) throw new Error( );' )
		.$( 'jval = jwig[ key ]' )
		.append( switchExpr );

	return(
		$block
		.$( 'twig = { }' )
		// ranks/twig information missing
		.$( 'if( !jwig || !keys ) throw new Error( );' )
		.$( 'for( let key of keys )', loop )
	);
};


/*
| Generates the fromJsonCreator's return statement
*/
def.proto.genFromJsonCreatorReturn =
	function( )
{
	if( this.timspec.singleton ) return $( 'self.singleton' );

	const attributes = this.timspec.attributes;

	let call = $( 'Constructor( )' );

	for( let name of this.constructorList )
	{
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
			case 'keys' :
			case 'list' :
			case 'set' :
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

	// all attributes expected from json
	const jsonList = [ ];

	for( let attr of timspec.attributes )
	{
		if( attr.json ) jsonList.push( attr.name );
	}

	if( timspec.gtwig ) jsonList.push( 'twig', 'keys' );

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

	if( timspec.gset )
	{
		funcBlock = funcBlock.$( this.genFromJsonCreatorSetProcessing( ) );
	}

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
| Generates the timProto stuff.
*/
def.proto.genTimProto =
	function( )
{
	const timspec = this.timspec;

	let result =
		$block
		.$comment( 'Sets values by path.' )
		.$( this._protoSet( 'setPath', 'setPath' ) )
		.$comment( 'Gets values by path' )
		.$( this._protoSet( 'getPath', 'getPath' ) );

	if( timspec.ggroup )
	{
		result =
			result

			.$comment(
				'Returns the group with another group added,',
				'overwriting collisions.'
			)
			.$( this._protoSet( 'addGroup', 'groupAddGroup' ) )

			.$comment( 'Gets one element from the group.' )
			.$( this._protoSet( 'get', 'groupGet' ) )

			.$comment( 'Returns the group keys.')
			.$( this._protoLazyValueSet( 'keys', 'groupKeys' ) )

			.$comment( 'Returns the sorted group keys.')
			.$( this._protoLazyValueSet( 'sortedKeys', 'groupSortedKeys' ) )

			.$comment( 'Returns the group with one element removed.' )
			.$( this._protoSet( 'remove', 'groupRemove' ) )

			.$comment( 'Returns the group with one element set.' )
			.$( this._protoSet( 'set', 'groupSet' ) )

			.$comment( 'Returns the size of the group.')
			.$( this._protoLazyValueSet( 'size', 'groupSize' ) )

			.$comment( 'Iterates over the group by sorted keys' )
			.$(
				'prototype[ Symbol.iterator ] =',
				$generator(
					'for( let key of this.sortedKeys ) yield this.get( key );'
				)
			);
	}

	if( timspec.glist )
	{
		result =
			result
			.$comment( 'Returns the list with an element appended.' )
			.$( this._protoSet( 'append', 'listAppend' ) )

			.$comment( 'Returns the list with another list appended.' )
			.$( this._protoSet( 'appendList', 'listAppendList' ) )

			.$comment( 'Returns the first element of the list.')
			.$( this._protoLazyValueSet( 'first', 'listFirst' ) )

			.$comment( 'Returns one element from the list.' )
			.$( this._protoSet( 'get', 'listGet' ) )

			.$comment( 'Returns the list with one element inserted.' )
			.$( this._protoSet( 'insert', 'listInsert' ) )

			.$comment( 'Returns the last element of the list.')
			.$( this._protoLazyValueSet( 'last', 'listLast' ) )

			.$comment( 'Returns the length of the list.')
			.$( this._protoLazyValueSet( 'length', 'listLength' ) )

			.$comment( 'Returns the list with one element removed.' )
			.$( this._protoSet( 'remove', 'listRemove' ) )

			.$comment( 'Returns the list with one element set.' )
			.$( this._protoSet( 'set', 'listSet' ) )

			.$comment( 'Returns a slice from the list.' )
			.$( this._protoSet( 'slice', 'listSlice' ) )

			.$comment( 'Returns a slice from the list.' )
			.$( this._protoSet( 'sort', 'listSort' ) )

			// FUTURE maybe this can be simplified?
			.$comment( 'Forwards the iterator.' )
			.$(
				'prototype[ Symbol.iterator ] =',
				$func( 'return this._list[ Symbol.iterator ]( )' )
			)
			.$comment( 'Reverse iterates over the list.' )
			.$(
				'prototype.reverse =',
				$generator(
					'for( let a = this.length - 1; a >= 0; a-- ) yield this._list[ a ];'
				)
			);
	}

	if( timspec.gset )
	{
		result =
			result
			.$comment( 'Returns the set with one element added.' )
			.$( this._protoSet( 'add', 'setAdd' ) )

			.$comment( 'Returns the set with another set added.' )
			.$( this._protoSet( 'addSet', 'setAddSet' ) )

			.$comment( 'Returns a clone primitive.' )
			.$( 'prototype.clone = ', $func( 'return new Set( this._set );' ) )

			.$comment( 'Returns true if the set has an element.' )
			.$( this._protoSet( 'has', 'setHas' ) )

			.$comment( 'Returns the set with one element removed.' )
			.$( this._protoSet( 'remove', 'setRemove' ) )

			.$comment( 'Returns the size of the set.' )
			.$( this._protoLazyValueSet( 'size', 'setSize' ) )

			.$comment( 'Returns the one and only element or the set if size != 1.' )
			.$( this._protoLazyValueSet( 'trivial', 'setTrivial' ) )

			.$comment( 'Forwards the iterator.' )
			.$(
				'prototype[ Symbol.iterator ] =',
				$func( 'return this._set[ Symbol.iterator ]( )' )
			);
	}

	if( timspec.gtwig )
	{
		result =
			result
			.$comment( 'Returns the element at rank.' )
			.$( this._protoSet( 'atRank', 'twigAtRank' ) )

			.$comment( 'Returns the element by key.' )
			.$( this._protoSet( 'get', timspec.isAdjusting ? 'twigAdjustGet' : 'twigGet' ) )

			.$comment( 'Returns the key at a rank.' )
			.$( this._protoSet( 'getKey', 'twigGetKey' ) )

			.$comment( 'Returns the length of the twig.')
			.$( this._protoLazyValueSet( 'length', 'twigLength' ) )

			.$comment( 'Returns the rank of the key.' )
			.$(
				'tim_proto.lazyFunctionString(',
					'prototype, "rankOf", tim_proto.twigRankOf ',
				')'
			)

			.$comment( 'Returns the twig with the element at key set.' )
			.$( this._protoSet( 'set', 'twigSet' ) )

			.$comment( 'Iterates over the twig.' )
			.$(
				'prototype[ Symbol.iterator ] =',
				$generator(
					'for( let a = 0, al = this.length; a < al; a++ ) yield this.atRank( a );'
				)
			)
			.$comment( 'Reverse iterates over the twig.' )
			.$(
				'prototype.reverse =',
				$generator(
					'for( let a = this.length - 1; a >= 0; a-- ) yield this.atRank( a );'
				)
			);
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

	if( timspec.gset ) olit = olit.add( 'set', 'Array.from( this._set )' );

	if( timspec.gtwig )
	{
		olit =
			olit
			.add( 'keys', 'this.keys' )
			.add( 'twig', 'this._twig' );
	}

	let block =
		$block
		.$( 'const json =', olit )
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
			.$( 'for( let k in this._group )', groupTestLoopBody );

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
						'|| !this._list[ a ].' + eqFuncName + '( obj._list[ a ] )',
					')'
				),
				$( 'return false' )
			);

		const listTest =
			$block
			.$if( 'this.length !== obj.length', $( 'return false' ) )
			.$for(
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
			.$( 'for( let v of this )',
				$block.$( 'if( !obj.has( v ) ) return false;' )
			);

		body = body.$if( 'this._set !== obj._set', setTest );
	}

	if( timspec.gtwig )
	{
		const twigTestLoopBody =
			$block
			.$( 'const key = this.keys[ a ]' )
			.$( 'if( key !== obj.keys[ a ] ) return false;' )
			.$( 'const ti = this._twig[ key ]' )
			.$( 'const oi = obj._twig[ key ]' )
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
				'if( this._twig !== obj._twig || this.keys !== obj.keys )',
				twigTest, ';'
			);
	}

	const attributes = this.timspec.attributes;

	let cond;

	for( let name of attributes.sortedKeys )
	{
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

	return body.$( 'return ', cond || 'true' );
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

	for( let alikeName of alikeList )
	{
		const ignores = timspec.alike[ alikeName ].ignores;

		result = result.$comment( 'Tests partial equality.' );

		let block =
			$block
			.$( 'if( this === obj ) return true;' )
			.$( 'if( !obj ) return false;' );

		if( timspec.gtwig )
		{
			// FUTURE same test as in equals
			cond =
				$(
					'this._twig === obj._twig',
					'&& this.keys === obj.keys'
				);
		}

		const attributes = this.timspec.attributes;

		for( let name of attributes.sortedKeys )
		{
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

	for( let name of attributes.sortedKeys )
	{
		const attr = attributes.get( name );

		if( !attr.adjust ) continue;

		const $name = $string( name );

		let b =
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

	if( !timspec.abstract ) code = code.$( this.genConstructor( ) );

	if( timspec.singleton ) code = code.$( this.genSingleton( )  );

	if( !timspec.abstract ) code = code.$( this.genCreator( ) );

	if( !timspec.abstract && timspec.json ) code = code.$( this.genFromJsonCreator( ) );

	if( !timspec.abstract ) code = code.$( this.genReflection( ) );

	if( !timspec.abstract ) code = code.$( this.genTimProto( ) );

	if( timspec.json ) code = code.$( this.genToJson( ) );

	if( !timspec.abstract) code = code.$( this.genEquals( ) );

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

	if( timspec.gtwig ) constructorList.unshift( 'keys', 'twig' );

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


/*
| Generates code for setting the prototype
| entry 'key' to 'value'
*/
def.proto._protoSet =
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
def.proto._protoLazyValueSet =
	function(
		name,  // lazy value name as string
		func   // lazy value function name
	)
{
	return(
		$block
		.$( 'tim_proto.lazyValue( prototype,', $string( name ), ', tim_proto.', func, ')' )
	);
};


} );
