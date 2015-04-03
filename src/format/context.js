/*
| Formating context.
*/


var
	format_context;

/*
| Capsule
*/
(function() {
'use strict';


/*
| The jion definition.
*/
if( JION )
{
	return{
		id : 'format_context',
		attributes :
		{
			indent :
			{
				comment : 'the indentation',
				type : 'integer',
				defaultValue : '0'
			},
			check :
			{
				comment : 'true if within optinal CHECK code',
				type : 'boolean',
				defaultValue : 'false'
			},
			inline :
			{
				comment :
					'true if to be formated inline',
				type :
					'boolean',
				defaultValue :
					'false'
			},
			root :
			{
				comment : 'true if in root context',
				type : 'boolean'
			}
		}
	};
}


/*
| Tabbing format.
*/
var _tab = '\t'; // FIXME


var
	jools;

format_context = require( '../jion/this' )( module, 'ouroboros' );

jools = require( '../jools/jools' );


/*
| Seperator is a space when inline otherwise a newline.
*/
jools.lazyValue(
	format_context.prototype,
	'sep',
	function( )
	{
		return this.inline ? ' ' : '\n';
	}
);


/*
| Transforms the context into a tab indentation.
*/
jools.lazyValue(
	format_context.prototype,
	'tab',
	function( )
	{
		var
			indent,
			tab;

		indent = this.indent;

		tab = '';

		if( this.inline )
		{
			return '';
		}

		if( this.check )
		{
			indent--;

			tab += '/**/';
		}

		for( var a = 0; a < indent; a++ )
		{
			tab += _tab;
		}

		return tab;
	}
);


/*
| Increases the indentation.
*/
jools.lazyValue(
	format_context.prototype,
	'inc',
	function( )
	{
		return this.incSame.create( 'root', false );
	}
);


/*
| Increases the indentation.
|
| But keeps root context.
*/
jools.lazyValue(
	format_context.prototype,
	'incSame',
	function( )
	{
		var
			inc;

		inc = this.create( 'indent', this.indent + 1 );

		jools.aheadValue( inc, 'dec', this );

		return inc;
	}
);



/*
| Decreases the indentation.
*/
jools.lazyValue(
	format_context.prototype,
	'dec',
	function( )
	{
		var
			dec;

		if( this.indent <= 0 )
		{
			throw new Error( );
		}

		// root stays false, even if it goes back to
		// zero indent its not the root context

		dec = this.create( 'indent', this.indent - 1 );

		jools.aheadValue( dec, 'inc', this );

		return dec;
	}
);


/*
| Sets the context to be inline.
*/
jools.lazyValue(
	format_context.prototype,
	'setInline',
	function( )
	{
		if( this.inline )
		{
			return this;
		}

		return( this.create( 'inline', true ) );
	}
);


} )( );
