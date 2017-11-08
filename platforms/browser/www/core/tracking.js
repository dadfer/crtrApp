/**
 * Google analytics tracking
 */

/*global define */

define(function(require) {
	'use strict';
	
	var // Helpers
		ga              = require('core/google-analytics'),
		// Google analytics settings
		tracking_id     = 'UA-109202877-1',
		tracking_domain = 'none';
	
	return {
		sendEvent: function(category,action){
			ga('send', 'event', {
			  'eventCategory': category,
			  'eventAction': action
			});
		},
		update : function(page_title) {
			var url = window.location.pathname;
			// Set up your pageview URL
			// To push the hash as a path, for example:
			url += window.location.hash.substr(1);
			// Track it
			ga('send', 'screenview', {screenName: page_title});
		},
		init : function() {
			// Initialize analytics
			ga('create', tracking_id, {
				'alwaysSendReferrer': true,
				'storage':'none',
				'clientId':device.uuid
			});
			ga('set', 'appName', 'CriterioApp');
			ga('set', 'appId', 'hn.criterio.app');
			ga('set', 'appVersion', '1.2');
			ga('set','checkProtocolTask',null);
			ga('set','anonymizeIp',true);
			ga('set','forceSSL',true);
			//ga('create', tracking_id, tracking_domain);
		}
	};
});
