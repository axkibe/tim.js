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


var
	jion_proto,
	tabFormat;

format_context = require( '../this' )( module, 'ouroboros' );

jion_proto = require( '../proto' );

/*
| Tabbing format.
*/
tabFormat = '\t';


/*
| Seperator is a space when inline otherwise a newline.
*/
jion_proto.lazyValue(
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
jion_proto.lazyValue(
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
			tab += tabFormat;
		}

		return tab;
	}
);


/*
| Increases the indentation.
*/
jion_proto.lazyValue(
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
jion_proto.lazyValue(
	format_context.prototype,
	'incSame',
	function( )
	{
		var
			inc;

		inc = this.create( 'indent', this.indent + 1 );

		jion_proto.aheadValue( inc, 'dec', this );

		return inc;
	}
);



/*
| Decreases the indentation.
*/
jion_proto.lazyValue(
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

		jion_proto.aheadValue( dec, 'inc', this );

		return dec;
	}
);


/*
| Sets the context to be inline.
*/
jion_proto.lazyValue(
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
