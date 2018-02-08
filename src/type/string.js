/*
| Referencing the string type.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'type_string', ( def, type_string ) => {


if( TIM ) def.attr = { };


def.func.equalsConvention = 'mustnot';


def.func.isPrimitive = true;


} );


