(function( self ){

	var THREE = require("./three.js");

	module.exports = function( addons ){

		if( addons instanceof Array ){

			for( var addon = 0, length = addons.length; addon < length; addon++ ){

				require("./addons/" + addons[addon] + ".js")(THREE);

			};

		};

		return THREE;

	};

})(this || {});