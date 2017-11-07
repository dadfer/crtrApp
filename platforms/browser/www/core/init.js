var require = {
	urlArgs : "bust="+ new Date().getTime()
};

var wpak_open_url = '';
window.handleOpenURL = function( url ) {
	wpak_open_url = url;
};