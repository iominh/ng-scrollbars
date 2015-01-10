angular.module('ngScrollbars', [])
		.directive('ngScrollbars', function () {
			return {
				scope: {
					ngScrollbarsConfig: '&'
				},
				link: function (scope, elem, attrs) {
					var config = scope.ngScrollbarsConfig();
					if (!config) {
						config = {};
					}
					elem.mCustomScrollbar(scope.ngScrollbarsConfig());
				}
			};
		});


