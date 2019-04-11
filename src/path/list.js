/*
| A list of paths.
*/
'use strict';


tim.define( module, ( def, self ) => {


if( TIM )
{
	def.list = [ './path' ];
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
def.proto.contains =
	function(
		path
	)
{
	for( let p of this )
	{
		if( p.equals( path ) ) return true;
	}

	return false;
};


/*
| Combines another pathList to this.
|
| Duplicates are not appended another time.
*/
def.proto.combine =
	function(
		pathList
	)
{
	const addList = [ ];

	for( let p of this )
	{
		if( !this.contains( p ) ) addList.push( p );
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
