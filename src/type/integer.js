/*
| Referencing the integer type.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, type_integer ) => {


if( TIM ) def.attr = { };


def.func.equalsConvention = 'mustnot';


def.func.isPrimitive = true;


} );


