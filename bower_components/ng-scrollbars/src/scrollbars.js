angular.module('ngScrollbars', [])
		.provider('ScrollBars', function() {
			this.defaults = {
				scrollButtons: {
					enable: false //enable scrolling buttons by default
				},
				axis: 'yx' //enable 2 axis scrollbars by default
			}

			this.$get = function ScrollBarsProvider() {
				return {
					defaults: this.defaults
				}
			}

		})
		.directive('ngScrollbars', function (ScrollBars) {
			return {
				scope: {
					ngScrollbarsConfig: '&'
				},
				link: function (scope, elem, attrs) {
					var config = scope.ngScrollbarsConfig();
					if (!config) {
						config = {};
					}
					elem.mCustomScrollbar(config);

					// TODO: can we do this without jquery and only do it once?
					// TODO: support more default options?
					$.mCustomScrollbar.defaults.scrollButtons = ScrollBars.defaults.scrollButtons;
					$.mCustomScrollbar.defaults.axis = ScrollBars.defaults.axis;

				}
			};
		});


