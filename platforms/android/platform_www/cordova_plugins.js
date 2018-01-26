cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-connectivity-monitor.connectivity",
    "file": "plugins/cordova-connectivity-monitor/www/connectivity.js",
    "pluginId": "cordova-connectivity-monitor",
    "clobbers": [
      "window.connectivity"
    ]
  },
  {
    "id": "phonegap-admob.AdMobAds",
    "file": "plugins/phonegap-admob/www/admob.js",
    "pluginId": "phonegap-admob",
    "clobbers": [
      "window.admob",
      "window.tappx"
    ]
  },
  {
    "id": "cordova-plugin-customurlscheme.LaunchMyApp",
    "file": "plugins/cordova-plugin-customurlscheme/www/android/LaunchMyApp.js",
    "pluginId": "cordova-plugin-customurlscheme",
    "clobbers": [
      "window.plugins.launchmyapp"
    ]
  },
  {
    "id": "es6-promise-plugin.Promise",
    "file": "plugins/es6-promise-plugin/www/promise.js",
    "pluginId": "es6-promise-plugin",
    "runs": true
  },
  {
    "id": "cordova-plugin-x-socialsharing.SocialSharing",
    "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
    "pluginId": "cordova-plugin-x-socialsharing",
    "clobbers": [
      "window.plugins.socialsharing"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-connectivity-monitor": "1.2.2",
  "cordova-google-play-services": "25.0.0",
  "phonegap-admob": "4.1.15",
  "cordova-plugin-crosswalk-webview": "2.3.0",
  "cordova-build-architecture": "1.0.1",
  "cordova-plugin-customurlscheme": "4.2.0",
  "es6-promise-plugin": "4.1.0",
  "cordova-plugin-x-socialsharing": "5.2.1"
};
// BOTTOM OF METADATA
});