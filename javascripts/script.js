var mainModule = angular.module('mainModule', ['ngScrollbars']);
mainModule.factory('highlighter', function () {
	return new Scrollbars.Highlighter();
})


mainModule.controller('mainCtrl', function ($scope, highlighter) {
	var panels = [];

	var text = 'Him boisterous invitation dispatched had connection inhabiting projection. By mutual an mr danger ' +
			'garret edward an. Diverted as strictly exertion addition no disposal by stanhill. ' +
			'This call wife do so sigh no gate felt. You and abode spite order get. Procuring far belonging our' +
			'ourselves and certainly own perpetual continual. It elsewhere of sometimes or my certainty. Lain no as ' +
			'five or at high. Everything travelling set how law literature. ';

	var themes = ['light', 'minimal-dark', 'light-thick', 'rounded-dots', '3d-thick', 'dark-thin', 'light-3', 'rounded' ]

	for (var i = 0; i < 8; i++) {
		var scrollbarConfig = {
			autoHideScrollbar: false,
			theme: 'light',
			advanced: {
				updateOnContentResize: true
			},
			setHeight: 200,
			scrollInertia: 0
		}
		scrollbarConfig.theme = themes[i % 8];
		panels.push({
			text: text,
			config: scrollbarConfig
		});
	}
	$scope.panels = panels;
	highlighter.highlight();
});