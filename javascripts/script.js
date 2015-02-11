var mainModule = angular.module('mainModule', ['ngScrollbars']);
mainModule.factory('highlighter', function () {
	return new Scrollbars.Highlighter();
})

mainModule.config(function (ScrollBarsProvider) {
	ScrollBarsProvider.defaults = {
		scrollButtons: {
			enable: true //enable scrolling buttons by default
		},
		axis: 'yx' //enable 2 axis scrollbars by default,
	};
});

mainModule.controller('mainCtrl', function ($scope, highlighter) {
	var panels = [];

	var text = 'Him boisterous invitation dispatched had connection inhabiting projection. By mutual an mr danger ' +
			'garret edward an. Diverted as strictly exertion addition no disposal by stanhill. ' +
			'This call wife do so sigh no gate felt. You and abode spite order get. Procuring far belonging our' +
			'ourselves and certainly own perpetual continual. It elsewhere of sometimes or my certainty. Lain no as ' +
			'five or at high. Everything travelling set how law literature. ';

	var themes 	= ['light', 'dark', 'minimal', 'minimal-dark',
		'light-2', 'dark-2', 'light-3', 'dark-3',
		'light-thick', 'dark-thick', 'light-thin', 'dark-thin', 'light-thin', 'rounded-dark', 'rounded',
			'rounded-dark', 'rounded-dots', 'rounded-dots-dark',
];

	for (var i = 0; i < themes.length; i++) {
		var scrollbarConfig = {
			advanced: {
				updateOnContentResize: true
			},
			setHeight: '200px'
		}
		scrollbarConfig.theme = themes[i % themes.length];

		var cssClasses = "";
		switch (scrollbarConfig.theme) {
			case 'dark':
			case 'dark-2':
			case 'dark-3':
			case 'dark-thick':
			case 'dark-thin':
			case 'rounded-dark':
			case 'minimal-dark':
			case 'rounded-dots-dark':
				cssClasses = "light-background";
				break;

		}

		panels.push({
			text: text,
			config: scrollbarConfig,
			cssClasses: cssClasses
		});
	}
	$scope.panels = panels;
	highlighter.highlight();
});