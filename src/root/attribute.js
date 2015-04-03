/*
| An attribute description of a jion object.
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
		id : 'jion_attribute',
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
			comment :
			{
				comment : 'comment',
				type : 'string'
			},
			defaultValue :
			{
				comment : 'default value',
				type : '->astExpression',
				defaultValue : 'undefined'
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
				type : 'string',
				defaultValue : 'undefined'
			},
			id :
			{
				comment : 'attribute type id',
				type : [ 'jion_id', 'jion_idGroup' ]
			},
			varRef :
			{
				comment : 'attribute variable used in generate',
				type : 'ast_var'
			}
		}
	};
}


require( '../jion/this' )( module );


} )( );
