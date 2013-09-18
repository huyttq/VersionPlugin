cordova.define("cordova/plugin/Version",
    
  function (require, exports, module) {
    var exec = require("cordova/exec");
    
    var Version = function() {};

    Version.prototype.getVersionCode = function(successCallback, failureCallback) {
        return exec(successCallback, failureCallback, 'Version', 'GetVersionCode', []);
    };
    Version.prototype.getVersionName = function(successCallback, failureCallback) {
        return exec(successCallback, failureCallback, 'Version', 'GetVersionName', []);
    };
    
    module.exports = new Version();
  }
);