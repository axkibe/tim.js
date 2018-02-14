/*
| Referencing the number type.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, type_number ) => {


if( TIM ) def.attr = { };


def.func.equalsConvention = 'mustnot';


def.func.isPrimitive = true;


} );


