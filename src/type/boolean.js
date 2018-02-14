/*
| Referencing a boolean type.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, type_boolean ) => {


if( TIM ) def.attr = { };


def.func.equalsConvention = 'mustnot';


def.func.isPrimitive = true;


} );

