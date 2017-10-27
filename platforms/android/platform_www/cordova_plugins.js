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
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-connectivity-monitor": "1.2.2",
  "cordova-google-play-services": "25.0.0",
  "phonegap-admob": "4.1.15",
  "cordova-plugin-crosswalk-webview": "2.3.0",
  "cordova-build-architecture": "1.0.1"
};
// BOTTOM OF METADATA
});