/*
| Referencing the undefined "type".
*/
'use strict';


require( '../ouroboros' )
.define( module, 'type_null', ( def, type_null ) => {


if( TIM ) def.attr = { };


def.func.equalsConvention = 'mustnot';


def.func.isPrimitive = true;


} );


