/*
| A list of paths.
*/
'use strict';


tim.ouroboros.define( module, ( def, self ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	// FIXME
	def.list = [ './path' ];
}


if( !NODE )
{
	// export path like in node package for browser.
	tim.pathList = self;
}


/*
| Shorthand function
*/
def.static.pathList =
	function(
		array
	)
{
	return self.create( 'list:init', array );
};


/*
| Returns true if this list contains path.
*/
def.func.contains =
	function(
		path
	)
{
	for( let p = 0, pZ = this.length; p < pZ; p++ )
	{
		const pi = this.get( p );

		if( pi.equals( path ) ) return true;
	}

	return false;
};


/*
| Combines another pathList to this.
|
| Duplicates are not appended another time.
*/
def.func.combine =
	function(
		pathList
	)
{
	const addList = [ ];

	for( let p = 0, pZ = pathList.length; p < pZ; p++ )
	{
		const path = pathList.get( p );

		if( !this.contains( path ) ) addList.push( path );
	}

	return(
		this.appendList(
			addList.length !== pathList.length
			? pathList.create( 'list:init', addList )
			: pathList
		)
	);
};


} );

