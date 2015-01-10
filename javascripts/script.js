var mainModule = angular.module('mainModule', []);
mainModule.factory('highlighter', function() {
	return new Scrollbars.Highlighter();
})


mainModule.controller('mainCtrl', function ($scope, highlighter) {
	var panels = [];

	var text = 'Him boisterous invitation dispatched had connection inhabiting projection. By mutual an mr danger ' +
			'garret edward an. Diverted as strictly exertion addition no disposal by stanhill. ' +
			'This call wife do so sigh no gate felt. You and abode spite order get. Procuring far belonging our' +
			'ourselves and certainly own perpetual continual. It elsewhere of sometimes or my certainty. Lain no as ' +
			'five or at high. Everything travelling set how law literature. ';

	for (var i = 0; i < 12; i++) {
		panels.push({
			text: text
		});
	}
	$scope.panels = panels;
	highlighter.highlight();
});