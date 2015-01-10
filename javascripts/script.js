var mainModule = angular.module('mainModule', []);
mainModule.factory('highlighter', function() {
	return new Scrollbars.Highlighter();
})


mainModule.controller('mainCtrl', function ($scope, highlighter) {
	var panels = [];

	var text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ' +
			'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
			'nisi ut aliquip ex ea commodo consequat.';

	for (var i = 0; i < 10; i++) {
		panels.push({
			text: text
		});
	}
	$scope.panels = panels;
	highlighter.highlight();
});