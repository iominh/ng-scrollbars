var mainModule = angular.module('mainModule', ['ngScrollbars']);
mainModule.factory('highlighter', function () {
  return new Scrollbars.Highlighter();
})

function MainConfiguration(ScrollBarsProvider) {
  ScrollBarsProvider.defaults = {
    scrollButtons: {
      scrollAmount: 'auto', // scroll amount when button pressed
      enable: true //  scrolling buttons by default
    },
    setWidth: 300,
    scrollInertia: 400,
    axis: 'yx' // enable 2 axis scrollbars by default,
  };
}

function MainController($scope, highlighter) {
  var panels = [];

  var defaultText = 'Est Schlitz shoreditch fashion axe. Messenger bag cupidatat Williamsburg sustainable aliqua, artisan duis pickled pitchfork. Semiotics Banksy ad roof party, jean shorts selvage mollit vero consectetur hashtag before they sold out blue bottle qui nihil aute. Aliquip artisan retro squid ullamco. Vegan enim Williamsburg, eu umami shabby chic single-origin coffee et.';

  var themes = ['light', 'dark', 'minimal', 'minimal-dark',
    'light-2', 'dark-2', 'light-3', 'dark-3',
    'light-thick', 'dark-thick', 'light-thin', 'dark-thin', 'light-thin', 'rounded-dark', 'rounded',
    'rounded-dark', 'rounded-dots', 'rounded-dots-dark', '3d', '3d-dark', '3d-thick', '3d-thick-dark', 'horizontal1',
    'horizontal2'
  ];

  for (var i = 0; i < themes.length; i++) {
    var scrollbarConfig = {
      advanced: {
        updateOnContentResize: true
      }
    }
    scrollbarConfig.theme = themes[i % themes.length];
    var text = defaultText;
    var title = scrollbarConfig.theme;

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
      case '3d-thick-dark':
      case '3d-dark':
        cssClasses = "light-background";
        break;
      case 'horizontal1':
        text += defaultText;
        scrollbarConfig.theme = 'light';
        scrollbarConfig.alwaysShowScrollbar = 2;
        title = 'light';
        break;
      case 'horizontal2':
        cssClasses = "light-background";
        scrollbarConfig.theme = 'dark';
        scrollbarConfig.alwaysShowScrollbar = 2;
        title = 'dark';
        break;
    }

    panels.push({
      title: title,
      text: text,
      config: scrollbarConfig,
      cssClasses: cssClasses
    });
  }
  $scope.panels = panels;
  highlighter.highlight();
}

mainModule.config(MainConfiguration);
mainModule.controller('mainCtrl', MainController);

MainController.$inject = ['$scope', 'highlighter'];
MainConfiguration.$inject = ['ScrollBarsProvider'];
