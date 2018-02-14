/*
| Referencing the undefined "type".
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, type_undefined ) => {


if( TIM ) def.attr = { };


def.func.equalsConvention = 'mustnot';


def.func.isPrimitive = true;


} );


