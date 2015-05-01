(function () {
  'use strict';

  function ScrollBarsProvider() {
    this.defaults = {
      scrollButtons: {
        scrollAmount: 'auto', // scroll amount when button pressed
        enable: true // scrolling buttons by default
      },
      setWidth: 300,
      scrollInertia: 400,
      axis: 'yx' // enable 2 axis scrollbars by default,
    }

    // TODO: can we do this without jquery?
    $.mCustomScrollbar.defaults.scrollButtons = this.defaults.scrollButtons;
    $.mCustomScrollbar.defaults.axis = this.defaults.axis;

    this.$get = function ScrollBarsProvider() {
      return {
        defaults: this.defaults
      }
    }
  }

  function ScrollBarsDirective(ScrollBars) {
    return {
      scope: {
        ngScrollbarsConfig: '&'
      },
      link: function (scope, elem, attrs) {
        var defaults = ScrollBars.defaults;
        var configuredDefaults = $.mCustomScrollbar.defaults;

        var config = scope.ngScrollbarsConfig();
        if (!config) {
          config = {};
        }

        // apply configured provider defaults only if the scope's config isn't defined (it has priority in that case)
        for (var setting in defaults) {
          if (defaults.hasOwnProperty(setting)) {

            switch (setting) {

              case 'scrollButtons':
                if (!config.hasOwnProperty(setting)) {
                  configuredDefaults.scrollButtons = defaults[setting];
                }
                break;

              case 'axis':
                if (!config.hasOwnProperty(setting)) {
                  configuredDefaults.axis = defaults[setting];
                }
                break;

              default:
                if (!config.hasOwnProperty(setting)) {
                  config[setting] = defaults[setting];
                }
                break;

            }

          }
        }
        elem.mCustomScrollbar(config);

      }
    };
  }

  angular.module('ngScrollbars', [])
    .provider('ScrollBars', ScrollBarsProvider)
    .directive('ngScrollbars', ScrollBarsDirective);

  ScrollBarsProvider.$inject = [];
  ScrollBarsDirective.$inject = ['ScrollBars'];

})();