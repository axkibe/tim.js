/*
| Referencing the date type.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, type_date ) => {


if( TIM ) def.attr = { };


def.func.equalsConvention = 'mustnot';


def.func.isPrimitive = true;


} );


