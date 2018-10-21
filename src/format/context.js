/*
| Formating context.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, format_context ) => {


/*::::::::::::::::::::::::::::.
:: Typed immutable attributes
':::::::::::::::::::::::::::::*/


if( TIM )
{
	def.attributes =
	{
		// the indentation
		indent : { type : 'integer', defaultValue : '0' },

		// true if within optinal CHECK code
		check : { type : 'boolean', defaultValue : 'false' },

		// true if to be formated inline
		inline : { type : 'boolean', defaultValue : 'false' },

		// true if in root context
		root : { type : 'boolean' }
	};
}


/*
| Tabbing format.
*/
const tabFormat = '\t';


/*
| Seperator is a space when inline otherwise a newline.
*/
def.lazy.sep =
	function( )
{
	return this.inline ? ' ' : '\n';
};


/*
| The tabbed indentation for the context.
*/
def.lazy.tab =
	function( )
{
	if( this.inline ) return '';

	let indent = this.indent;

	let tab = '';

	if( this.check )
	{
		indent--;

		tab += '/**/';
	}

	for( let a = 0; a < indent; a++ )
	{
		tab += tabFormat;
	}

	return tab;
};


/*
| Increases the indentation.
*/
def.lazy.inc =
	function( )
{
	return this.incSame.create( 'root', false );
};


/*
| Increases the indentation.
|
| But keeps root context.
*/
def.lazy.incSame =
	function( )
{
	const inc = this.create( 'indent', this.indent + 1 );

	tim.aheadValue( inc, 'dec', this );

	return inc;
};



/*
| Decreases the indentation.
*/
def.lazy.dec =
	function( )
{
	if( this.indent <= 0 ) throw new Error( );

	// root stays false, even if it goes back to
	// zero indent its not the root context

	const dec = this.create( 'indent', this.indent - 1 );

	tim.aheadValue( dec, 'inc', this );

	return dec;
};


/*
| Sets the context to be inline.
*/
def.lazy.setInline =
	function( )
{
	if( this.inline ) return this;

	return( this.create( 'inline', true ) );
};


} );

