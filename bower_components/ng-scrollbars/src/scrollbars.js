angular.module('ngScrollbars').directive('ioScrollbars', [function () {
	return {
		link: function (scope, elem, attrs) {

			var height = attrs.scrollableHeight ? attrs.scrollableHeight : 'auto';
			var right = attrs.scrollableMarginRight ? attrs.scrollableMarginRight : '0px';
			var top =  attrs.scrollableMarginTop ? attrs.scrollableMarginTop : '0px';

			elem.mCustomScrollbar({
				autoHideScrollbar: false,
				theme: 'light',
				advanced:{
					updateOnContentResize: true
				},
				setHeight: height,
				scrollInertia: 0
			});

			var scrollTools = $(elem).find('.mCSB_scrollTools');
			scrollTools.css('right', right);
			scrollTools.css('top', top);
		}
	};
}]);