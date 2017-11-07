/**
 * Google analytics include (using "Universal Analytics")
 * https://gist.github.com/acusti/8718758
 */

/*global define */

define(function(require) {
	'use strict';
 
	var ga_amd;
	
	// Setup temporary Google Analytics objects
	window.GoogleAnalyticsObject = 'ga';
	window.ga = function() {
		(window.ga.q = window.ga.q || []).push(arguments);
	};
	window.ga.l = 1 * new Date();
	
	// Create a function that wraps `window.ga`
	// This allows dependant modules to use `window.ga` via amd module
	ga_amd = function () {
		window.ga.apply(this, arguments);
	};
	
	// Asynchronously load google's analytics.js; it will take over `window.ga` object after it loads
	// This allows us to add events to `window.ga` before the library has fully loaded
	require(['//google-analytics.com/analytics.js']);
	
	return ga_amd;
});
