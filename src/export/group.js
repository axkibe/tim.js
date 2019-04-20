/*
| A group of exports
*/
'use strict';


tim.define( module, ( def, self ) => {


if( TIM )
{
	def.group = [ 'string' ];
}


const fs = require( 'fs' );

const util = require( 'util' );

const fsReadFile = util.promisify( fs.readFile );


/*
| Creates it from a "exports.json" file
*/
def.static.createFromFile =
	async function(
		filename
	)
{
};


} );
