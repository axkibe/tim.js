/*
| Referencing the non-type "protean" for any mutable
| objects.
*/
'use strict';


require( '../ouroboros' )
.define( module, ( def, type_protean ) => {


if( TIM ) def.attr = { };


def.func.equalsConvention = 'mustnot';


def.func.isPrimitive = true;


} );
