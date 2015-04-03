/*
| This is an auto generated file.
|
| DO NOT EDIT!
*/
/*
| Export.
*/
var
	result =
		result || { };


/*
| Imports.
*/
var
	jion,


	jools;


/*
| Capsule
*/
(
	function( )
	{
		'use strict';

/*
| Node includes.
*/
		if( SERVER )
		{
			jools = require( '../../src/jools/jools' );

			jion = { };

			jion.proto = require( '../../src/jion/proto' );
		}

/*
| Constructor.
*/
		var
			Constructor =
				function(
					v_code, // the generated code
					v_hasJSON, // true if generated jion supports json
					v_jionID // the id of the jion
				)
				{
					this.code = v_code;

					this.hasJSON = v_hasJSON;

					this.jionID = v_jionID;

					jools.immute( this );
				};

/*
| Prototype shortcut
*/
		var
			prototype =
				Constructor.prototype;

/*
| Jion.
*/
		var
			genjion =
			result.genjion =
				{
					prototype :
						prototype
				};

/*
| Creates a new genjion object.
*/
		genjion.create =
		prototype.create =
			function(
				// free strings
			)
			{
				var
					inherit,

					v_code,

					v_hasJSON,

					v_jionID;

				if( this !== genjion )
				{
					inherit = this;

					v_code = this.code;

					v_hasJSON = this.hasJSON;

					v_jionID = this.jionID;
				}

				for(
					var a = 0, aZ = arguments.length;
					a < aZ;
					a += 2
				)
				{
					var
						arg =
							arguments[ a + 1 ];

					switch( arguments[ a ] )
					{
						case 'code' :

							if( arg !== undefined )
							{
								v_code = arg;
							}

							break;

						case 'hasJSON' :

							if( arg !== undefined )
							{
								v_hasJSON = arg;
							}

							break;

						case 'jionID' :

							if( arg !== undefined )
							{
								v_jionID = arg;
							}

							break;

						default :

/**/						if( CHECK )
/**/						{
/**/							throw new Error( );
/**/						}
					}
				}

/**/			if( CHECK )
/**/			{
/**/				if( v_code === undefined )
/**/				{
/**/					throw new Error( );
/**/				}
/**/
/**/				if( v_code === null )
/**/				{
/**/					throw new Error( );
/**/				}
/**/
/**/				if(
/**/					typeof( v_code ) !== 'string'
/**/					&&
/**/					!( v_code instanceof String )
/**/				)
/**/				{
/**/					throw new Error( );
/**/				}
/**/
/**/				if( v_hasJSON === undefined )
/**/				{
/**/					throw new Error( );
/**/				}
/**/
/**/				if( v_hasJSON === null )
/**/				{
/**/					throw new Error( );
/**/				}
/**/
/**/				if( typeof( v_hasJSON ) !== 'boolean' )
/**/				{
/**/					throw new Error( );
/**/				}
/**/
/**/				if( v_jionID === undefined )
/**/				{
/**/					throw new Error( );
/**/				}
/**/
/**/				if( v_jionID === null )
/**/				{
/**/					throw new Error( );
/**/				}
/**/
/**/				if(
/**/					typeof( v_jionID ) !== 'string'
/**/					&&
/**/					!( v_jionID instanceof String )
/**/				)
/**/				{
/**/					throw new Error( );
/**/				}
/**/			}

				if(
					inherit
					&&
					v_code === inherit.code
					&&
					v_hasJSON === inherit.hasJSON
					&&
					v_jionID === inherit.jionID
				)
				{
					return inherit;
				}

				return new Constructor( v_code, v_hasJSON, v_jionID );
			};

/*
| Reflection.
*/
		prototype.reflect = 'result.genjion';

/*
| Name Reflection.
*/
		prototype.reflectName = 'genjion';

/*
| Sets values by path.
*/
		prototype.setPath = jion.proto.setPath;

/*
| Gets values by path
*/
		prototype.getPath = jion.proto.getPath;

/*
| Tests equality of object.
*/
		prototype.equals =
			function(
				obj // object to compare to
			)
			{
				if( this === obj )
				{
					return true;
				}

				if( !obj )
				{
					return false;
				}

				return (
					this.code === obj.code
					&&
					this.hasJSON === obj.hasJSON
					&&
					this.jionID === obj.jionID
				);
			};

/*
| Node export.
*/
		if( SERVER )
		{
			module.exports = genjion;
		}
	}
)( );
