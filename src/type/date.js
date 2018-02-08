/*
| Referencing the undefined "type".
*/
'use strict';


require( '../ouroboros' )
.define( module, 'type_date', ( def, type_date ) => {


if( TIM ) def.attr = { };


def.func.equalsConvention = 'mustnot';


def.func.isPrimitive = true;


} );


