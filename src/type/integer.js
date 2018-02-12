/*
| Referencing the integer type.
*/
'use strict';


require( '../ouroboros' )
.define( module, 'type_integer', ( def, type_integer ) => {


if( TIM ) def.attr = { };


def.func.equalsConvention = 'mustnot';


def.func.isPrimitive = true;


} );


