/*
| A list of strings.
*/
'use strict';


tim.ouroboros.define( module, 'stringList', ( def, tim_stringList ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.list = [ 'string' ];
}


if( !NODE )
{
	// FIXME
	tim.stringList = tim_stringList;
}


/*
| Shorthand function
*/
def.static.stringList =
	function(
		array
	)
{
	return tim_stringList.create( 'list:init', array );
};


} );
