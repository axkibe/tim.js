/*
| Referencing the null "type".
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, type_null ) => {


if( TIM ) def.attr = { };


def.func.equalsConvention = 'mustnot';


def.func.isPrimitive = true;


} );


