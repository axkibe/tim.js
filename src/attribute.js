/*
| An attribute description of a jion object.
*/


/*
| The jion definition.
*/
if( JION )
{
	throw{
		id : 'jion$attribute',
		attributes :
		{
			allowsNull :
			{
				comment : 'attribute may be null',
				type : 'boolean',
				defaultValue : 'false'
			},
			allowsUndefined :
			{
				comment : 'attribute may be undefined',
				type : 'boolean',
				defaultValue : 'false'
			},
			assign :
			{
				comment : 'variable name to assign to',
				type : 'string'
			},
			defaultValue :
			{
				comment : 'default value',
				type :
					require( './typemaps/astExpression' )
					.concat( [ 'undefined' ] )
			},
			json :
			{
				comment : 'include in JSON export/import',
				type : 'boolean',
				defaultValue : 'false'
			},
			name :
			{
				comment : 'attribute name',
				type : 'string'
			},
			prepare :
			{
				comment : 'attribute preparation code',
				type : [ 'undefined', 'string' ]
			},
			id :
			{
				comment : 'attribute type id',
				type : [ 'jion$id', 'jion$idGroup' ]
			},
			varRef :
			{
				comment : 'attribute variable used in generate',
				type : 'jion$ast_var'
			}
		}
	};
}


/*
| Capsule.
*/
(function( ) {
'use strict';


require( './ouroboros' ).this( module );


} )( );
