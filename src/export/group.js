/*
| A group of exports
*/
'use strict';


tim.define( module, ( def, export_group ) => {


if( TIM )
{
	def.group = [ 'string' ];
}


const fs = require( 'fs' );


/*
| Creates it from a "exports.json" file
*/
def.static.createFromFile =
	function(
		filename
	)
{
	const text = fs.readFileSync( filename );

	const group = JSON.parse( text );

	return export_group.create( 'group:init', group );
};


} );
